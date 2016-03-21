using System;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using System.Security.Principal;
using System.Windows.Forms;

namespace TestCompleteCOMClient
{

    public class TestCompleteClientWrapper : IDisposable
    {
        #region private properties

        private const string _progID = "TestComplete.TestCompleteApplication.10";
        private object _comInstance = null;
        private GCHandle _instanceHandle;
        private TestComplete.ITestCompleteCOMManager _manager { get; set; }
        private string _projectName { get; set; }

        #endregion

        #region public properties

        public bool IsActive { get; private set; }
        public TestComplete.ItcIntegration Client { get; private set; }
        public List<string> Tests { get; private set; }

        public bool IsAdministrator
        {
            get
            {
                return (new WindowsPrincipal(WindowsIdentity.GetCurrent()))
                    .IsInRole(WindowsBuiltInRole.Administrator);
            }
        }

        #endregion

        #region public methods

        public TestCompleteClientWrapper()
        {
            // Access to the COM objects requires elevated permissions
            if (!IsAdministrator)
            {
                throw new ApplicationException("You must run this application with Administrator permissions");
            }

            // create the COM instance
            try
            {
                this._comInstance = Marshal.GetActiveObject(_progID);
            }
            catch
            {
                try
                {
                    this._comInstance = Activator.CreateInstance(Type.GetTypeFromProgID(_progID));
                }
                catch (Exception ex)
                {
                    System.Windows.Forms.MessageBox.Show("An exception occurred: " + ex.Message);
                }
            }

            this._instanceHandle = GCHandle.Alloc(this._comInstance, GCHandleType.Normal);

            this._manager = (TestComplete.ITestCompleteCOMManager)_comInstance;
            this._manager.Visible = true;
            this.Client = _manager.Integration;
            this.IsActive = this.Client != null;
        }

        public void OpenProjectSuite(string path)
        {
            this.CheckPath(path);

            this.Client.OpenProjectSuite(path);

            if (!this.Client.IsProjectSuiteOpened())
            {
                throw new ApplicationException("Could not open the project suite.");
            }
        }

        public void LoadProject(string name)
        {
            this._projectName = name; 
            // get lists of tests for the suite
            this.Tests = new List<string>();

            var ObjProjectItems = this.Client.get_TestSuite(this._projectName);
            TestComplete.ItcProjectTests_COMAccess ProjectItems = (TestComplete.ItcProjectTests_COMAccess)ObjProjectItems;

            var count = ProjectItems.Count;
            for (var i = 0; i < ProjectItems.Count; i++)
            {
                this.Tests.Add(ProjectItems.TestItem[i].Name); 
            }
        }

        public void CloseProjectSuite()
        {
            this.Client.CloseProjectSuite(); 
        }

        public TestComplete.TC_LOG_STATUS RunProjectItem(string name)
        {
            // Runs the test
            this.Client.RunProjectTestItem(this._projectName, name); 

            // Waits until testing is over
            while (this.Client.IsRunning())
            {
                // allow the operating system to do its thing
                Application.DoEvents();
            }

            // return results
            return this.Client.GetLastResultDescription().Status;
        }

        public void Close()
        {
            this.CloseProjectSuite(); 
            this._manager.Visible = false; 
            this._manager.Quit();
            this.Dispose(); 
        }

        #endregion

        #region private methods

        private void CheckPath(string path)
        {
            if (path.Equals(string.Empty))
            {
                // this.Close(); 
                throw new ApplicationException("The path was not defined");
            }
            if (!System.IO.File.Exists(path))
            {
                //this.Close(); 
                throw new ApplicationException(string.Format("The path {0} does not exist", path));
            }
        }

        #endregion

        #region dispose

        bool disposed = false;

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (disposed)
                return;

            // free managed objects
            if (disposing)
            {

            }

            if (this._instanceHandle.IsAllocated)
            {
                // Now release the GC handle on the RCW so it can be freed as well
                this._instanceHandle.Free();
            }

            if (this.Client != null)
            {
                Marshal.ReleaseComObject(this.Client);
            }

            if (this._manager != null)
            {
                Marshal.ReleaseComObject(this._manager);
            }

            if (this._comInstance != null)
            {
                Marshal.ReleaseComObject(this._comInstance);
            }

            disposed = true;
        }

        #endregion

    }
}
