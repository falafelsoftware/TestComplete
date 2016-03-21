//USEUNIT TestCompleteBaseUnit
//USEUNIT TestCompleteLogUnit
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Wraps a window object from TestComplete
 */
var TestCompleteWebPage = (function (_super) {
    __extends(TestCompleteWebPage, _super);
    /**
     * Wraps a TestComplete Page object. Verifies that the TestCompleteObject
     * passed is a Page object.
     * @param  {any}                  testCompleteObject Object representing the page
     * @return {TestCompleteWebPage}
     */
    function TestCompleteWebPage(testCompleteObject) {
        _super.call(this, testCompleteObject);
        this.Log = new TestCompleteLog();
    }
    /**
     * Verify that the page document is not empty
     * @return {TestCompleteWebPage} Returns "this" to allow call chaining
     */
    TestCompleteWebPage.prototype.validate = function () {
        if (!this.Document) {
            this.Log.error("Document empty for " + this.Url);
        }
        return this;
    };
    /**
     * Recapture the base TestComplete objects for this page
     */
    TestCompleteWebPage.prototype.refresh = function (testCompleteObject) {
        _super.prototype.refresh.call(this, testCompleteObject);
        if (!this.TestCompleteObject.ObjectType || this.TestCompleteObject.ObjectType != "Page") {
            this.Log.error("Object was not a Page object.");
        }
        this.Url = this.TestCompleteObject.url;
        this.Document = this.TestCompleteObject.contentDocument;
    };
    /**
     * Logs a screenshot to the TestComplete log.
     * @param  {string}        message        The message for the log, or "Screenshot" if no message is passed.
     * @param  {string}        additionalInfo AdditionalInfo the log.
     * @param  {number}        priority       Priority level for the TestComplete log priority levels. This is not restricted to a valid set of numbers yet, i.e. 100, 200..500 T
     * @param  {LogAttributes} attributes     Object that describes the log output font, color, bold, etc.
     * @return {TestCompleteWindow} returns "this" to allow chaining calls
     */
    TestCompleteWebPage.prototype.screenshot = function (message, additionalInfo, priority, attributes) {
        var msg = message ? message : "Screenshot";
        new TestCompleteLog().screenshot(this.TestCompleteObject.Picture(), msg, additionalInfo, priority, attributes);
        return this;
    };
    return TestCompleteWebPage;
})(TestCompleteBase);
