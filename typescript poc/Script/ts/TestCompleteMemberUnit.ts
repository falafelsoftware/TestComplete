/**
 * Holds a collection of mappings from TestComplete objects to ts/js classes.
 */
class TestCompleteMembers {

  Items: Array<TestCompleteMember>;
  constructor() {
    this.Items = new Array<TestCompleteMember>();
  }
  add(testCompletePropertyName: string, classPropertyName?: string) {
    this.Items.push(new TestCompleteMember(testCompletePropertyName, classPropertyName));
    return this;
  }
}

/**
 * Used to map a TestComplete member to a class member.
 */
class TestCompleteMember {
  TestCompletePropertyName: string;
  ClassPropertyName: string;
  constructor(testCompletePropertyName: string, classPropertyName?: string) {
    this.TestCompletePropertyName = testCompletePropertyName;
    this.ClassPropertyName = classPropertyName ? classPropertyName : testCompletePropertyName;
  }
}
