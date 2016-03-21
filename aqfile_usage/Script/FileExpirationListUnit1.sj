function fileExpirationList(path, expires){
  var result = []; 
  var files = aqFileSystem.FindFiles(path, "*.*", true)
  if (files){
    while (files.HasNext()){
      var file = files.Next();
      // last modified before expiration date 
      if (file.DateLastModified < expires){
        result.push(file); 
      }
    }
  }
  return result; 
}


function main(){
  var path = "c:\\users\\noel\\documents\\testcomplete 11 projects"; 
  var expires = aqConvert.StrToDate("3/1/2016");
  var list = fileExpirationList(path, expires); 
  for(var i in list){
    var file = list[i]; 
    Log.Message(file.DateCreated + ": " + file.Name); 
  }
}