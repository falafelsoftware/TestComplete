function testFind(){
  var page = Sys.Browser("iexplore").page("*");
  var nwo = page.NativeWebObject;
  var span = nwo.Find("contentText", "Products", "A");
  if (span.Exists){
    Log.Message("Found"); 
    span.HoverMouse(); 
  } else {
    Log.Warning("Not Found"); 
  }
}