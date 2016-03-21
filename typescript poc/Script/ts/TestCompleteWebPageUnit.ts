//USEUNIT TestCompleteOnScreenObjectUnit

class TestCompleteWebPage extends TestCompleteOnScreenObject {
  ObjectType: string;
  Url: string;
  Document: any;

  waitForVisible(){
    super.waitForVisible();
    var members = new TestCompleteMembers()
      .add("ObjectType")
      .add("url", "Url")
      .add("contentDocument", "Document");
    this.assign(members);
    return this;
  }
}
