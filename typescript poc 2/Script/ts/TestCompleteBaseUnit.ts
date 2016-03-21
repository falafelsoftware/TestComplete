/**
 * RepresentsThe wrapper for any TestComplete object
 */
class TestCompleteBase {
  /**
   * A reference to the TestComplete object
   * @type {any}
   */
  public TestCompleteObject: any;
  /**
   * Bind the TestComplete object to this JavaScript object
   * @param  {any}    TestCompleteObject The object to bind from TestComplete`
   * @return {TestCompleteBase}
   */
  constructor(testCompleteObject: any) {
    this.refresh(testCompleteObject)
  }

  /**
   * Recapture the base TestComplete object
   */
  
  refresh(testCompleteObject: any) {
    if (!testCompleteObject) {
      Log.Error("A TestComplete object was not passed to TestCompleteBase.")
    }
    this.TestCompleteObject = testCompleteObject;
  }
}
