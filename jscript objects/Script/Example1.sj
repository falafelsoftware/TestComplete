function MyObject(){
  var self = this; 
  var myPrivateProperty = 1243; 
  this.MyProperty = "My Value";
  
  this.log = function(message) {
    Log.Message(message); 
  }
}

function testObject(){
  var myObject = new MyObject();
  //Log.Message(myObject.MyProperty); 
  // can't see myPrivateProperty, it is out of scope
  //Log.Message(myObject.myPrivateProperty); 
  myObject.log("here's a message"); 
}