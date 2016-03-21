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
var TestCompleteWindow = (function (_super) {
    __extends(TestCompleteWindow, _super);
    function TestCompleteWindow(testCompleteObject) {
        _super.call(this, testCompleteObject);
    }
    /**
     * close closes the window
     * @return {TestCompleteWindow} returns "this" to allow chaining calls
     */
    TestCompleteWindow.prototype.close = function () {
        this.TestCompleteObject.Close();
        return this;
    };
    /**
     * maximize maximizes the window
     * @return {TestCompleteWindow} returns "this" to allow chaining calls
     */
    TestCompleteWindow.prototype.maximize = function () {
        this.TestCompleteObject.Maximize();
        return this;
    };
    /**
     * Logs a screenshot to the TestComplete log.
     * @param  {string}        message        The message for the log, or "Screenshot" if no message is passed.
     * @param  {string}        additionalInfo AdditionalInfo the log.
     * @param  {number}        priority       Priority level for the TestComplete log priority levels. This is not restricted to a valid set of numbers yet, i.e. 100, 200..500 T
     * @param  {LogAttributes} attributes     Object that describes the log output font, color, bold, etc.
     * @return {TestCompleteWindow} returns "this" to allow chaining calls
     */
    TestCompleteWindow.prototype.screenshot = function (message, additionalInfo, priority, attributes) {
        var msg = message ? message : "Screenshot";
        new TestCompleteLog().screenshot(this.TestCompleteObject.Picture(), msg, additionalInfo, priority, attributes);
    };
    return TestCompleteWindow;
})(TestCompleteBase);
