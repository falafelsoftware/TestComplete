//TODO: this is for a single global file used through the project and
// cannot be used for multiple different files. Consider wrapping 
// to allow different instances. 

var GlobalFile; 

function openGlobalFile(path){
  var createIfNotExists = true; 
  GlobalFile = aqFile.OpenTextFile(path, aqFile.faWrite, aqFile.ctANSI, createIfNotExists);
}

function writeToGlobalFile(message){
  GlobalFile.Writeline(message);   
}

function closeGlobalFile(){
  GlobalFile.Close();
}
