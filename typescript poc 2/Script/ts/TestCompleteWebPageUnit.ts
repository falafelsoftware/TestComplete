//USEUNIT TestCompleteBaseUnit
//USEUNIT TestCompleteLogUnit

/**
 * Wraps a window object from TestComplete
 */
class TestCompleteWebPage extends TestCompleteBase {
  Url: string;
  Log: TestCompleteLog;
  Document: any;

  /**
   * Wraps a TestComplete Page object. Verifies that the TestCompleteObject
   * passed is a Page object.
   * @param  {any}                  testCompleteObject Object representing the page
   * @return {TestCompleteWebPage}
   */
  constructor(testCompleteObject: any) {
    super(testCompleteObject);
    this.Log = new TestCompleteLog();
  }

  /**
   * Verify that the page document is not empty
   * @return {TestCompleteWebPage} Returns "this" to allow call chaining
   */
  validate() {
    if (!this.Document) {
      this.Log.error("Document empty for " + this.Url);
    }
    return this;
  }

  /**
   * Recapture the base TestComplete objects for this page
   */
  refresh(testCompleteObject: any) {
    super.refresh(testCompleteObject); 
    if (!this.TestCompleteObject.ObjectType || this.TestCompleteObject.ObjectType != "Page") {
      this.Log.error("Object was not a Page object.");
    }
    this.Url = this.TestCompleteObject.url;
    this.Document = this.TestCompleteObject.contentDocument;
  }

  /**
   * Logs a screenshot to the TestComplete log.
   * @param  {string}        message        The message for the log, or "Screenshot" if no message is passed.
   * @param  {string}        additionalInfo AdditionalInfo the log.
   * @param  {number}        priority       Priority level for the TestComplete log priority levels. This is not restricted to a valid set of numbers yet, i.e. 100, 200..500 T
   * @param  {LogAttributes} attributes     Object that describes the log output font, color, bold, etc.
   * @return {TestCompleteWindow} returns "this" to allow chaining calls
   */
  screenshot(message?: string, additionalInfo?: string, priority?: number, attributes?: LogAttributes) {
    var msg = message ? message : "Screenshot";
    new TestCompleteLog().screenshot(this.TestCompleteObject.Picture(), msg, additionalInfo, priority, attributes);
    return this;
  }

}
