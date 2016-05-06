function test1(){
  var groupIndex = -1; // like z-order, -1 disregards
  var wndClass = "Notepad"; 
  var caption = "*"; 
  var longTimeout = 10000;
  var mediumTimeout = 2000;  
  var shortTimeout = 2; 

  var process = TestedApps.notepad.Run(-1, false, longTimeout); 

  if (!process.Exists){
    Log.Error("notepad process doesn't exist"); 
  }
    
  var notepad = process.WaitWindow(wndClass, caption, groupIndex, longTimeout);  
 
  if (!notepad.Exists){
    Log.Error("Notepad does not exist"); 
  }

  notepad.WndCaption = "Notepad exists!";
  Log.Picture(notepad, "Notepad window exists");  

  var editor = notepad.WaitChild("*Edit*", mediumTimeout); 

  if (!editor.Exists){
    Log.Error("Notepad editor does not exist"); 
  }
  
  editor.wText = "Found the editor"; 
  
  // close notepad from the menu
  notepad.MainMenu.Click("File|Exit"); 
  
  
  // close the confirmation dialog
  var dialogName = "*32770*"; 
  var dialog = process.WaitChild(dialogName, shortTimeout); 

  if (!dialog.Exists){
    Log.Error("Confirmation dialog not found"); 
  }
 
  // select  "don't save" option button 
  dialog.Keys("n"); 
  
  
  var maxShutdownTime = 30; 
  var shutdownTime = 0; 
  
  aqPerformance.Start(); 
  
  while(process.Exists){
    Delay(500); 
  }
  
  shutdownTime = aqPerformance.Value; 
  
  Log.Message(aqString.Format("Notepad process took %d milliseconds to finish", shutdownTime)); 

  aqPerformance.Check(maxShutdownTime, "max notepad process shutdown time");     
}