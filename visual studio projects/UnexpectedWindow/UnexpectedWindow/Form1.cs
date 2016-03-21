using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace TCUnexpectedWindow
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void btnDivide_Click(object sender, EventArgs e)
        {
            var first = Convert.ToInt32(txtFirstNumber.Text);
            var second = Convert.ToInt32(txtSecondNumber.Text);

            txtResult.Text = (first / second).ToString();
        }
    }
}
