function launchAndCloseTest(){
  var url = "http://smartbear.com/"; 
  
  for(var i = 0; i < 3; i++){ 
    Browsers.Item(btIExplorer).Run(url);
    var browser = Aliases.browser;
    var page = Sys.Browser().Page(url)
    // close the browser process
    browser.Close(5000); 
  }
}

function closeAllBrowsers(){
  var processName = "iexplore"; 
  Sys.Refresh(); 
  while (Sys.WaitBrowser(processName).Exists)
    Sys.WaitBrowser(processName).Close();
}