var FileExpirationList = function(path){
  this.byLastModified = function(expires){
    var result = []; 
    var files = aqFileSystem.FindFiles(path, "*.*", true)
    if (files){
      while (files.HasNext()){
        var file = files.Next(); 
        if (file.DateLastModified < expires){
          result.push(file); 
        }
      }
    }
    return result; 
  }
  this.byCreated = function(expires){
    var result = []; 
    var files = aqFileSystem.FindFiles(path, "*.*", true)
    if (files){
      while (files.HasNext()){
        var file = files.Next(); 
        if (file.DateCreated < expires){
          result.push(file); 
        }
      }
    }
    return result; 
  }
}

function main(){
  var path = "c:\\users\\noel\\documents\\testcomplete 11 projects"; 
  var expires = aqConvert.StrToDate("3/1/2016");
  var fileExpirationList = new FileExpirationList(path);   
  var list = fileExpirationList.byLastModified(expires); 
  for(var i in list){
    var file = list[i]; 
    Log.Message(file.DateLastModified + ": " + file.Name); 
  }
}