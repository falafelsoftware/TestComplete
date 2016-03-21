function ordersComplete(){
  Log.Message("Order processing complete"); 
}

function logOrder(orderID, customerName, quantity, cost, emailConfirmation, note){
  var message = "Order " + orderID + " for customer " + customerName; 
  var info = message + " Quantity: " + quantity + " cost: " + cost + 
    " confirm: " + emailConfirmation + " note: " + note; 
  Log.Message(message, info); 
}

