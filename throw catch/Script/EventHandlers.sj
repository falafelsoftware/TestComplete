function GeneralEvents_OnLogError(Sender, LogParams)
{
  Log.Message(LogParams.MessageText); 
  LogParams.Locked = true;   
}