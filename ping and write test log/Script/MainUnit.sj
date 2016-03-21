var notFound = -1;  

function checkPage(url){
  var page = Sys.Browser().WaitPage("*", 0, 10000);
  if (!page.Exists){
    Log.Error(url + " does not exist"); 
  } else {
    if (aqString.Find(page.url, url) == notFound){
      var fmt = "Expected page url \"%s\" does not match actual \"%s\""; 
      var message = aqString.Format(fmt, url, page.url); 
      Log.Error(message);   
    }
    if (!page.contentDocument){
      var fmt = "The actual page \"%s\" contentDocument is null"; 
      var message = aqString.Format(fmt, page.url); 
      Log.Error(message);   
    }
  }
}

function main(){
  VirtualBrowsers.Item("Apple iPad").Run(); 
  while(!Project.Variables.urls.IsEOF()){
    VirtualBrowsers.Item("Apple iPad").Navigate(Project.Variables.urls.Value("url"));
    checkPage(url); 
    Project.Variables.urls.Next(); 
  }
//
//  Browsers.Item(btChrome).Run(); 
//  while(!Project.Variables.urls.IsEOF()){
//    Browsers.Item(btChrome).Navigate(url);
//    checkPage(url); 
//    Project.Variables.urls.Next(); 
//  }
}