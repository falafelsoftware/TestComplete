using System;
using System.Windows.Forms;

namespace TestCompleteCOMClient
{
    public partial class Form1 : Form
    {
        private TestCompleteClientWrapper TestComplete = null; 

        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            this.TestComplete = new TestCompleteClientWrapper(); 
        }

        private void btnUpdate_Click(object sender, EventArgs e)
        {
            this.TestComplete.OpenProjectSuite(tbProjectSuitePath.Text);
            this.TestComplete.LoadProject(tbProjectName.Text);

            lbTests.Items.Clear();
            foreach (var test in this.TestComplete.Tests)
            {
                lbTests.Items.Add(test, true);
            }
        }

        private void btnRun_Click(object sender, EventArgs e)
        {
            foreach (string item in lbTests.CheckedItems)
            {
                var statusCode = this.TestComplete.RunProjectItem(item);
                statusStrip1.Items[0].Text = "Return code: " + statusCode.ToString();
                Application.DoEvents();
            }
        }

        protected override void OnClosed(EventArgs e)
        {
            if (this.TestComplete != null)
            {
                this.TestComplete.Close(); 
            }
            base.OnClosed(e);
        }
    }
}
