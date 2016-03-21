var FileExpirationList = function(path){
  var self = this; 

  this.ComparisonType = {
    DateCreated: "DateCreated",
    DateLastModified: "DateLastModified"  
  } 

  this.getExpiredFiles = function(expires, comparisonType){
    var result = []; 
    var files = aqFileSystem.FindFiles(path, "*.*", true)
    if (files){
      while (files.HasNext()){
        var file = files.Next(); 
        if (file[comparisonType] < expires){
          result.push(file); 
        }
      }
    }
    return result;     
  }

  this.byLastModified = function(expires){
    return self.getExpiredFiles(expires, self.ComparisonType.DateLastModified); 
  }
  this.byCreated = function(expires){
    return self.getExpiredFiles(expires, self.ComparisonType.DateCreated); 
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