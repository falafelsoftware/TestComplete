﻿function findHiddenField(){
  var hiddenField = Aliases.browser.pageSmartbearCom.FindChildByXPath("//*[@id=\"lng\"]");
  if (hiddenField){
    Log.Message(hiddenField.Value); 
  }
}