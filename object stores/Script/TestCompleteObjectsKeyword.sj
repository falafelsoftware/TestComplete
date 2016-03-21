function storeAndCheckObject(){
  var storeName = "MyStore"; 
  var liveItem = Sys.Process("notepad");
  var propsToInclude = ""; 
  var propsToExclude = "";
  var recurse = true; 
  var outputDirectory = "";
  
  Objects.Remove(storeName); 
    
  if (Objects.Contains(storeName)){
    
    Objects.Items(storeName).Check(liveItem); 
  } else {
    Objects.Save(liveItem, storeName, 
      propsToInclude, propsToExclude, 
      recurse, outputDirectory); 
  }  
}