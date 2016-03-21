//USEUNIT TestCompleteBaseUnit

class TestCompleteOnScreenObject extends TestCompleteBase{
    Width: number;
    Height: number;
    Visible: Boolean;

    refresh(){
      super.refresh();
      var members = new TestCompleteMembers()
        .add("Width")
        .add("Height")
        .add("Visible");
      this.assign(members);
      return this;
    }

    waitForVisible(){
      var isReady = false;

      while (!isReady) {
        this.refresh();
        isReady = this.Visible &&
          this.Width > 0 &&
          this.Height > 0;
      }
      return this;
    }

    screenshot(message?: string, additionalInfo?: string, priority?: number, attributes?: LogAttributes) {
      var msg = message ? message : "Screenshot";
      this.waitForVisible();
      Log.Picture(this.TestCompleteObject.Picture(), msg, additionalInfo, priority, attributes);
      return this;
    }
}
