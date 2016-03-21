declare var TestedApps: any;
declare var Log: any;
declare var Aliases: any;

class TypeScriptWizard {
  run() {
    TestedApps.CSWizardDemo.Run();
  }

  next() {
    Aliases.Wizard.NavigationPanel.NextButton.Click();
  }

  finish() {
    Aliases.Wizard.NavigationPanel.FinishButton.Click();
  }

  customizeSettings() {
    Aliases.Wizard.CurrentPage.CustomizeSettings.ClickButton();
  };

  setDateTime(startDate: string) {
    Aliases.Wizard.CurrentPage.DateTimePicker.wDate = startDate;
  };

  setCalendar(startDate: string) {
    Aliases.Wizard.CurrentPage.Calendar.SetSelection(startDate, startDate);
  };
}

class TypeScriptWizard2 {
  App: any;
  Wizard: any;
  CurrentPage: any;
  Navigation: any;
  constructor(app: any, alias: any) {
    this.App = app;
    this.Wizard = alias;
    this.CurrentPage = this.Wizard.CurrentPage;
    this.Navigation = this.Wizard.NavigationPanel;
  }
  run() {
    this.App.Run();
    return this; 
  }

  next() {
    this.Navigation.NextButton.Click();
    return this; 
  }

  finish() {
    this.Navigation.FinishButton.Click();
    return this; 
  }

  customizeSettings() {
    this.CurrentPage.CustomizeSettings.ClickButton();
    return this; 
  };

  setDateTime(startDate: string) {
    this.CurrentPage.DateTimePicker.wDate = startDate;
    return this; 
  };

  setCalendar(startDate: string) {
    this.CurrentPage.Calendar.SetSelection(startDate, startDate);
    return this; 
  };
}

class TypeScriptWizard3 extends TypeScriptWizard2 {
  log() {
    Log.Message("Current page is " + this.CurrentPage.Name);
    return this; 
  }
}

function test() {
  var wizard = new TypeScriptWizard();
  wizard.run();
  wizard.setCalendar("6/10/2015");
  wizard.next();
  wizard.setDateTime("6/10/2015");
  wizard.next();
  wizard.customizeSettings();
  wizard.finish();
}

function test2() {
  var wizard = new TypeScriptWizard2(TestedApps.CSWizardDemo, Aliases.Wizard);
  wizard.run()
  .setCalendar("6/10/2015")
  .next()
  .setDateTime("6/10/2015")
  .next()
  .customizeSettings()
  .finish(); 
}

function test3() {
  var wizard = new TypeScriptWizard3(TestedApps.CSWizardDemo, Aliases.Wizard);
  wizard.run()
  .log()
  .setCalendar("6/10/2015")
  .next()
  .log()
  .setDateTime("6/10/2015")
  .next()
  .log()
  .customizeSettings()
  .finish(); 
}