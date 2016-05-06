function Test1()
{
  var orders;
  var orderForm;
  var textBox;
  orders = Aliases.Orders;
  orders.MainForm.ToolBar.ClickItem(4, false);
  orderForm = orders.OrderForm;
  textBox = orderForm.Group.Customer;
  textBox.Click(32, 6);
  textBox.SetText("Noel");
  orderForm.ButtonOK.ClickButton();
}