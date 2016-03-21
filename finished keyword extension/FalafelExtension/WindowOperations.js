// script extension events

// user dragged a new operation to the keyword test
function OnCreate(Data){
  Data.WindowObjectName = ""; 
  Data.WindowMethodName = ""; 
}

// runs on creating and editing a keyword operation
function OnSetup(Data)
{
  // get the index of the current item
  var WindowMethods = [ "Activate", "Minimize", "Maximize", "Restore", "SetFocus"];  
  var index = WindowMethods.indexOf(Data.WindowMethodName);

  // initialize the form
  var form = UserForms.WindowOperationForm;
  form.rgOperation.ItemIndex = WindowMethods.indexOf(Data.WindowMethodName);
  form.rgOperation.Enabled = Data.WindowObjectName != ""; 
  form.lblWindowName.Caption = Data.WindowObjectName; 
  
  var result = form.ShowModal(); 

  // use clicked ok, copy the data used in the keyword operation
  if (result == mrOk)
  {
      Data.WindowMethodName = WindowMethods[form.rgOperation.ItemIndex];
      Data.WindowObjectName = form.lblWindowName.Caption;
  } 

  // if true is returned, the keyword test item is created 
  return result == mrOK; 
}

// this method triggered when running the keyword test
function OnExecute(Data)
{
  windowObject = eval(Data.WindowObjectName);   
  windowObject[Data.WindowMethodName](); 
}

// methods to populate keyword columns
function GetValue(Data){
  return Data.WindowObjectName; 
}

function GetOperation(Data){
  return Data.WindowMethodName; 
}

function GetDescription(Data){
  return "Call the " + Data.WindowMethodName + " method for " + 
    Data.WindowObjectName; 
}

// form events
function OnObjectPicked(Sender)
{
  var form = UserForms.WindowOperationForm; 
  
  form.lblWindowName.Caption = form.ObjectPicker1.PickedObjectName;
  form.rgOperation.Enabled = true;  
  form.rgOperation.ItemIndex = 0; 
}

// utility methods
Array.prototype.indexOf = function(item)
{
  for (var i = 0; i < this.length; i++)
    if (this[i] == item) 
      return i;
  return -1;
};