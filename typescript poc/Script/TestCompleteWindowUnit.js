//USEUNIT TestCompleteOnScreenObjectUnit
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
    function TestCompleteWindow() {
        _super.apply(this, arguments);
    }
    TestCompleteWindow.prototype.close = function () {
        this.TestCompleteObject.Close();
        return this;
    };
    TestCompleteWindow.prototype.maximize = function () {
        this.TestCompleteObject.Maximize();
        return this;
    };
    return TestCompleteWindow;
})(TestCompleteOnScreenObject);
