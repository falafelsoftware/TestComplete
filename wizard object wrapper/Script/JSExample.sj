// 5. using prototype
function PrototypedWizard(){
}

PrototypedWizard.prototype.run = function(){
  TestedApps.CSWizardDemo.Run(); 
}; 
  
PrototypedWizard.prototype.next = function(){
   Aliases.Wizard.NavigationPanel.NextButton.Click();
}; 
  
PrototypedWizard.prototype.finish = function(){
  Aliases.Wizard.NavigationPanel.FinishButton.Click(); 
}; 
  
PrototypedWizard.prototype.customizeSettings = function(){
  Aliases.Wizard.CurrentPage.CustomizeSettings.ClickButton();
};
  
PrototypedWizard.prototype.setDateTime = function(startDate){
  Aliases.Wizard.CurrentPage.DateTimePicker.wDate = startDate;   
}; 
  
PrototypedWizard.prototype.setCalendar = function(startDate){
  Aliases.Wizard.CurrentPage.Calendar.SetSelection(startDate, startDate);   
}; 

PrototypedWizard.prototype.log = function(){
  Log.Message("Current page is " + Aliases.Wizard.CurrentPage.Name);   
} 

function testProtoTypedWizardObject(){
  var wizard = new PrototypedWizard(); 
  wizard.run();
  wizard.log(); 
  wizard.setCalendar("6/10/2015");    
  wizard.next(); 
  wizard.log(); 
  wizard.setDateTime("6/10/2015"); 
  wizard.next(); 
  wizard.log(); 
  wizard.customizeSettings(); 
  wizard.finish(); 
}

// 4. extend custom object
function LoggingWizard(){
  Wizard.call(this); 
  
  this.log = function(){
    Log.Message("Current page is " + Aliases.Wizard.CurrentPage.Name);   
  }  
}

function testLoggingWizardObject(){
  var wizard = new LoggingWizard(); 
  wizard.run();
  wizard.log(); 
  wizard.setCalendar("6/10/2015");    
  wizard.next(); 
  wizard.log(); 
  wizard.setDateTime("6/10/2015"); 
  wizard.next(); 
  wizard.log(); 
  wizard.customizeSettings(); 
  wizard.finish(); 
}

// 3. Wrap alias methods into a custom object
function Wizard(){
  this.run = function(){
    TestedApps.CSWizardDemo.Run(); 
  }; 
  
  this.next = function(){
     Aliases.Wizard.NavigationPanel.NextButton.Click();
  }; 
  
  this.finish = function(){
    Aliases.Wizard.NavigationPanel.FinishButton.Click(); 
  }; 
  
  this.customizeSettings = function(){
    Aliases.Wizard.CurrentPage.CustomizeSettings.ClickButton();
  };
  
  this.setDateTime = function(startDate){
    Aliases.Wizard.CurrentPage.DateTimePicker.wDate = startDate;   
  }; 
  
  this.setCalendar = function(startDate){
    Aliases.Wizard.CurrentPage.Calendar.SetSelection(startDate, startDate);   
  }; 
}

function testWizardObject(){
  var wizard = new Wizard(); 
  wizard.run();
  wizard.setCalendar("6/10/2015");    
  wizard.next(); 
  wizard.setDateTime("6/10/2015"); 
  wizard.next(); 
  wizard.customizeSettings(); 
  wizard.finish(); 
}

// 2. Build name mapping and refactor code
function testWizard(){
  TestedApps.CSWizardDemo.Run(); 
  Aliases.Wizard.CurrentPage.WinFormsObject("monthCalendar1").SetSelection("6/9/2015", "6/9/2015"); 
  Aliases.Wizard.NavigationPanel.NextButton.Click();
  Aliases.Wizard.CurrentPage.DateTimePicker.wDate = "6/10/2015"; 
  Aliases.Wizard.NavigationPanel.NextButton.Click(); 
  Aliases.Wizard.CurrentPage.CustomizeSettings.ClickButton();
  Aliases.Wizard.NavigationPanel.FinishButton.Click(); 
}

// 1. Start with recorded and generated
function Test1()
{
  var myWizardClass;
  var panel;
  var button;
  var tabControl;
  TestedApps.CSWizardDemo.Run();
  myWizardClass = Sys.Process("CSWizardDemo").WinFormsObject("MyWizardClass");
  myWizardClass.Click(202, 17);
  panel = myWizardClass.WinFormsObject("panel1");
  button = panel.WinFormsObject("NextButton");
  button.Keys("[Right]");
  tabControl = myWizardClass.WinFormsObject("panel2").WinFormsObject("tabControl1");
  tabControl.ClickTab("tabPage1");
  tabControl.WinFormsObject("tabPage1").WinFormsObject("monthCalendar1").SetSelection("7/2/2015", "7/2/2015");
  button.ClickButton();
  tabControl.WinFormsObject("tabPage2").WinFormsObject("dateTimePicker1").wDate = "7/1/2015";
  button.ClickButton();
  tabControl.WinFormsObject("tabPage3").WinFormsObject("radioButton2").ClickButton();
  panel.WinFormsObject("FinishButton").ClickButton();
}