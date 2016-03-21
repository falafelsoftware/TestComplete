function SendEmail(mFrom, mTo, mSubject, mBody, mAttach)
{
  var i, schema, mConfig, mMessage;

  try
  {
    schema = "http://schemas.microsoft.com/cdo/configuration/";
    mConfig = Sys.OleObject("CDO.Configuration");
    mConfig.Fields.Item(schema + "sendusing") = 2; // cdoSendUsingPort
    mConfig.Fields.Item(schema + "smtpserver") = "smtp.gmail.com"; // SMTP server
    mConfig.Fields.Item(schema + "smtpserverport") = 465; // Port number
    mConfig.Fields.Item(schema + "smtpauthenticate") = 1; // Authentication mechanism
    mConfig.Fields.Item(schema + "smtpusessl") = true // use SSL     
    mConfig.Fields.Item(schema + "sendusername") = Project.Variables.smtpName; // User name (if needed)
    mConfig.Fields.Item(schema + "sendpassword") = Project.Variables.smtpPassword.DecryptedValue; // User password (if needed)
    mConfig.Fields.Update();

    mMessage = Sys.OleObject("CDO.Message");
    mMessage.Configuration = mConfig;
    mMessage.From = mFrom;
    mMessage.To = mTo;
    mMessage.Subject = mSubject;
    mMessage.HTMLBody = mBody;

    aqString.ListSeparator = ",";
    for(i = 0; i < aqString.GetListLength(mAttach); i++)
      mMessage.AddAttachment(aqString.GetListItem(mAttach, i));
    mMessage.Send();
  }
  catch (exception)
  {
    Log.Error("E-mail cannot be sent", exception.description);
    return false;
  }
  Log.Message("Message to <" + mTo + "> was successfully sent");
  return true;
}

function PackResults()
{
  var WorkDir, FileName, FileList, ArchivePath, zipPath;
  
  WorkDir = Project.ConfigPath + "Log\\ExportedResults\\";
  FileName = WorkDir + "MyFile.mht";
  Log.SaveResultsAs(FileName, 2);
  FileList = slPacker.GetFileListFromFolder(WorkDir);
  ArchivePath = WorkDir + "CompressedResults";
  zipPath = ArchivePath + ".zip"; 
  if (aqFile.Exists(zipPath)){
    aqFile.Delete(zipPath); 
  }
  if (slPacker.Pack(FileList, WorkDir, ArchivePath))
  {
    Log.Message("Files compressed successfully.");
    return zipPath; 
  }
} 


function emailResults(){


  // TODO: remove previous zip before attempting to create a new one
  var zipFile = PackResults(); 
  SendEmail("nturice@gmail.com", "noel@falafel.com", 
    "SMTP Test", "body", zipFile); 
}