function archive(path, archivePath){
  if (aqFile.Exists(path)){
    var modified = aqFile.GetLastWriteTime(path); 
    var expiration = aqDateTime.AddSeconds(modified, 10); 
  
    // if file hasn't been written to in the last ten minutes...
    if (aqDateTime.Now() > expiration){
      // decompose the file path to its component parts
      var filePath = aqFileSystem.GetFileFolder(archivePath); 
      var fileName = aqFileSystem.GetFileNameWithoutExtension(path); 
      var extension = aqFileSystem.GetFileExtension(path);
      // put it back together again  
      var newPath = filePath + fileName + 
        aqConvert.DateTimeToFormatStr(aqDateTime.Now(), "_%m%d%Y%H%M%S") 
        + "." + extension; 
      // rename and move the file to archive directory 
      aqFile.Rename(path, newPath);
      // change attributes to hidden and readonly
      var attributes = 
        aqFileSystem.faReadOnly | aqFileSystem.faHidden
      aqFile.SetFileAttributes(newPath, attributes);
    }  
  } 
}

function testArchive(){
  var path = "c:\\data\\mytextlog.txt";
  var archivePath = "c:\\data\\archive\\";  
  archive(path, archivePath); 
}

function checkExpiration(){
  var path = "c:\\data\\mytextlog.txt"; 

  if (aqFile.Exists(path)){
    var created = aqFile.GetCreationTime(path); 
    var expiration = aqDateTime.AddDays(created, 3); 
  
    // if file creation time exceeds the expiration time
    if (aqDateTime.Now() > expiration){
      // do something about the expired file
      aqFile.Delete(path);
      aqFile.Create(path);
      // make sure the file's Creation time is reset to 
      // the current date and time so we can calculate its
      // expiration date and time later
      aqFile.SetCreationTime(path, aqDateTime.Now()); 
    } 
  }

}

var data = {
  timestamp: aqConvert.DateTimeToStr(aqDateTime.Now()),
  message: "started log"
}

function test(){
  var path = "c:\\data\\mytextlog.txt"; 
  checkExpiration(path); 
  //var file = aqFile.OpenTextFile(path, aqFile.faWrite, aqFile.ctUnicode);
  var serialized = JSON.stringify(data, null, 2); 
  aqFile.WriteToTextFile(path, serialized, aqFile.ctANSI); 
//  file.WriteLine("How much wood could a woodchuck chuck"); 
//  file.WriteLine("if a woodchuck"); 
//  file.WriteLine("could chuck"); 
//  file.WriteLine("wood"); 
//  file.Close(); 
}


