using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace CSWizardDemo
{
    public partial class MyWizardClass : Form
    {
        public MyWizardClass()
        {
            InitializeComponent();
            tabControl1.Appearance = TabAppearance.FlatButtons;
            tabControl1.ItemSize = new Size(0, 1);
            tabControl1.SizeMode = TabSizeMode.Fixed;
            this.Navigate(); 
        }

        private void FinishButton_Click(object sender, EventArgs e)
        {
            this.Close(); 
        }

        private void NextButton_Click(object sender, EventArgs e)
        {
            tabControl1.SelectedIndex = tabControl1.SelectedIndex + 1;
            this.Navigate();
        }

        private void BackButton_Click(object sender, EventArgs e)
        {
            tabControl1.SelectedIndex = tabControl1.SelectedIndex - 1;
            this.Navigate();
        }

        private void Navigate()
        {
            var isFirstPage = tabControl1.SelectedIndex == 0; 
            var isLastPage = tabControl1.SelectedIndex == tabControl1.TabCount - 1; 
            NextButton.Enabled = !isLastPage;
            BackButton.Enabled = !isFirstPage;
            FinishButton.Enabled = isLastPage;
            this.Text = "Page " + (tabControl1.SelectedIndex + 1).ToString() + " of " +
                tabControl1.TabCount.ToString(); 
        }
    }
}
