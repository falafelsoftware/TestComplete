//USEUNIT Unit1
function MainTest()
{
  var Message, Quantity, MaximumAmount, LogDetails, MyObject, MyPassword, StopLooping;
  Message = "This is new text that changes everywhere";
  Quantity = 20;
  MaximumAmount = 5000;
  LogDetails = false;
  MyObject = null;
  MyPassword = null;
  StopLooping = false;
  //Posts an information message to the test log.
  Log.Message(Message, "");
  //Posts an information message to the test log.
  Log.Message(Message, "");
  //Posts an information message to the test log.
  Log.Message("Quantity is: " + KeywordTests.MainTest.Variables.Quantity, "");
  if(4000 > MaximumAmount)
  {
    //Posts a warning to the test log.
    Log.Warning("The value was greater than the maximum", "");
  }
  Quantity = KeywordTests.MainTest.Variables.Quantity + 1;
  //Posts an information message to the test log.
  Log.Message(Quantity, "");
  if(true == true)
    if(LogDetails == true)
    {
      //Posts an information message to the test log.
      Log.Message("We\'re logging details here", "");
    }
    else
    {
      //Posts an information message to the test log.
      Log.Message("We\'re not logging details", "");
    }
  //Unable to convert the For Loop operation, because no loop variable is specified.
  //Posts an information message to the test log.
  Log.Message("inside the for loop", "");
  //End of the loop block
  while(StopLooping == false)
  {
    //Posts an information message to the test log.
    Log.Message("we\'re in the loop", "");
    StopLooping = true;
    //Posts an information message to the test log.
    Log.Message("second message in the loop", "");
  }
  Project.Variables.StatusMessage = "Everything is good here";
  Project.Variables.SuccessCount = Project.Variables.SuccessCount + 1;
  //Runs a keyword test.
  KeywordTests.SecondTest.Run("Barney Rubble");
  //Runs a keyword test.
  KeywordTests.SecondTest.Run("Fred Flinstone");
  //Runs a keyword test.
  KeywordTests.SecondTest.Run("Wilma Flinstone");
  //Runs a script routine.
  foo();
}