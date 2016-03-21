//USEUNIT FileUtilitiesUnit

function GeneralEvents_OnStartTest(Sender)
{
  openGlobalFile("c:\\data\\myerrorlog.txt");   
}

function GeneralEvents_OnStopTest(Sender)
{
  closeGlobalFile();   
}

function GeneralEvents_OnLogError(Sender, LogParams)
{
  var timestamp = aqConvert.DateTimeToStr(aqDateTime.Now()); 
  writeToGlobalFile(timestamp + " " +LogParams.MessageText);  
}