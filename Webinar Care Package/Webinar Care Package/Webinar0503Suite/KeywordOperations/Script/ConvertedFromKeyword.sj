//USEUNIT LogFromScript
//USEUNIT RecordedScript
function OrderEntry()
{
  //This will show on it's own line within the test
  logIt();
  Aliases.Orders.MainForm.ToolBar.ClickItem(4, false);
  Aliases.Orders.OrderForm.ButtonCancel.ClickButton();
  Test1();
  Log.Message("This is a code snippet");
  Aliases.Orders.MainForm.ToolBar.ClickItem(4, false);
  Aliases.Orders.OrderForm.Group.Customer.Click(56, 4);
  Aliases.Orders.OrderForm.Group.Customer.SetText("in the keyword test");
  Aliases.Orders.OrderForm.ButtonOK.ClickButton();
}