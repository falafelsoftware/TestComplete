function logPurchaseOrders(){
  NetworkSuite.Synchronize("PO"); 

  aqString.ListSeparator = ",";

  var pos = NetworkSuite.Variables.VariableByName("PurchaseOrderList");  
  
  Log.AppendFolder("PO List");
  for(var i = 0; i < aqString.GetListLength(pos) - 1; i++){
    var po = aqString.GetListItem(pos, i);  
    Log.Message(i + ": " + po); 
  } 
  Log.PopLogFolder();
}
