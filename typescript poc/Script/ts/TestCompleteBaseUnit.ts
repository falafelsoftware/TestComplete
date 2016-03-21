//USEUNIT ExtendsUnit
//USEUNIT TestCompleteMemberUnit

class TestCompleteBase {
  TestCompleteObject: any;
  Parent: TestCompleteBase;
  RefreshMappingInfo: () => void;

  [key: string]: any; 

  constructor(testCompleteObject: any) {
    this.TestCompleteObject = testCompleteObject;
    if (!this.TestCompleteObject) {
      Log.Error("A TestComplete object was not passed to TestCompleteBase.")
    }
    this.refresh();
    this.validate();
  }

  supports(member: string){
    return aqObject.IsSupported(this.TestCompleteObject, member);
  }

  /**
   * Assign members from the wrapped TestComplete object to this class.
   */
  assign(members: TestCompleteMembers){
    for(var member of members.Items){
      if (this.supports(member.TestCompletePropertyName)){
        this[member.ClassPropertyName] = this.TestCompleteObject[member.TestCompletePropertyName] ;
      }
    }
    return this;
  }

  /**
   * Load properties using the TestCompleteObject as a base
   */
  refresh(){
    if (this.TestCompleteObject.Parent){
      this.Parent = new TestCompleteBase(this.TestCompleteObject.Parent);
      this.Parent.assign(new TestCompleteMembers().add("RefreshMappingInfo"));
    }
    if (this.Parent && this.Parent.RefreshMappingInfo){
      this.Parent.RefreshMappingInfo();
    }

    return this;
  }

  /**
   * Validate new property values
   */
  validate() {
    return this;
  }
}
