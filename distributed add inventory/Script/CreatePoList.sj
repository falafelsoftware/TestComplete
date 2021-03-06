function addPurchaseOrders(){
  var pos; 
  aqString.ListSeparator = ",";
  for(var i = 0; i < 10; i++){
    pos = aqString.AddListItem(pos, newPO(), i);
    delayRandomSeconds();    
  }   

  NetworkSuite.Variables.VariableByName("PurchaseOrderList") = pos; 
  Log.Message("added purchase orders: " + pos);
  NetworkSuite.Synchronize("PO"); 
}

//delay between 1 and 5 seconds
function delayRandomSeconds(){
  var randomNumber = Math.floor((Math.random() * 5) + 1); 
  Delay(randomNumber * 100);    
}

function newPO(){
    var lib = Sys.OleObject("Scriptlet.TypeLib");
    
    var result = "PO" + lib.GUID; 
    result = aqString.Trim(result); 
    result = aqString.Replace(result, "{", "");  
    result = aqString.Replace(result, "}", "");  
    result = aqString.Replace(result, "-", "");
    return aqConvert.VarToStr(result);  
} 


function testNS(){

}