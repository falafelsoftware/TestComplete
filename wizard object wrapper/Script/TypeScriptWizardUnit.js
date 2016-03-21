var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TypeScriptWizard = (function () {
    function TypeScriptWizard() {
    }
    TypeScriptWizard.prototype.run = function () {
        TestedApps.CSWizardDemo.Run();
    };
    TypeScriptWizard.prototype.next = function () {
        Aliases.Wizard.NavigationPanel.NextButton.Click();
    };
    TypeScriptWizard.prototype.finish = function () {
        Aliases.Wizard.NavigationPanel.FinishButton.Click();
    };
    TypeScriptWizard.prototype.customizeSettings = function () {
        Aliases.Wizard.CurrentPage.CustomizeSettings.ClickButton();
    };
    ;
    TypeScriptWizard.prototype.setDateTime = function (startDate) {
        Aliases.Wizard.CurrentPage.DateTimePicker.wDate = startDate;
    };
    ;
    TypeScriptWizard.prototype.setCalendar = function (startDate) {
        Aliases.Wizard.CurrentPage.Calendar.SetSelection(startDate, startDate);
    };
    ;
    return TypeScriptWizard;
})();
var TypeScriptWizard2 = (function () {
    function TypeScriptWizard2(app, alias) {
        this.App = app;
        this.Wizard = alias;
        this.CurrentPage = this.Wizard.CurrentPage;
        this.Navigation = this.Wizard.NavigationPanel;
    }
    TypeScriptWizard2.prototype.run = function () {
        this.App.Run();
        return this;
    };
    TypeScriptWizard2.prototype.next = function () {
        this.Navigation.NextButton.Click();
        return this;
    };
    TypeScriptWizard2.prototype.finish = function () {
        this.Navigation.FinishButton.Click();
        return this;
    };
    TypeScriptWizard2.prototype.customizeSettings = function () {
        this.CurrentPage.CustomizeSettings.ClickButton();
        return this;
    };
    ;
    TypeScriptWizard2.prototype.setDateTime = function (startDate) {
        this.CurrentPage.DateTimePicker.wDate = startDate;
        return this;
    };
    ;
    TypeScriptWizard2.prototype.setCalendar = function (startDate) {
        this.CurrentPage.Calendar.SetSelection(startDate, startDate);
        return this;
    };
    ;
    return TypeScriptWizard2;
})();
var TypeScriptWizard3 = (function (_super) {
    __extends(TypeScriptWizard3, _super);
    function TypeScriptWizard3() {
        _super.apply(this, arguments);
    }
    TypeScriptWizard3.prototype.log = function () {
        Log.Message("Current page is " + this.CurrentPage.Name);
        return this;
    };
    return TypeScriptWizard3;
})(TypeScriptWizard2);
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
