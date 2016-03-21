//USEUNIT TestCompleteBaseUnit
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TestCompleteOnScreenObject = (function (_super) {
    __extends(TestCompleteOnScreenObject, _super);
    function TestCompleteOnScreenObject() {
        _super.apply(this, arguments);
    }
    TestCompleteOnScreenObject.prototype.refresh = function () {
        _super.prototype.refresh.call(this);
        var members = new TestCompleteMembers().add("Width").add("Height").add("Visible");
        this.assign(members);
        return this;
    };
    TestCompleteOnScreenObject.prototype.waitForVisible = function () {
        var isReady = false;
        while (!isReady) {
            this.refresh();
            isReady = this.Visible &&
                this.Width > 0 &&
                this.Height > 0;
        }
        return this;
    };
    TestCompleteOnScreenObject.prototype.screenshot = function (message, additionalInfo, priority, attributes) {
        var msg = message ? message : "Screenshot";
        this.waitForVisible();
        Log.Picture(this.TestCompleteObject.Picture(), msg, additionalInfo, priority, attributes);
        return this;
    };
    return TestCompleteOnScreenObject;
})(TestCompleteBase);
