//USEUNIT TestCompleteOnScreenObjectUnit
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TestCompleteWebPage = (function (_super) {
    __extends(TestCompleteWebPage, _super);
    function TestCompleteWebPage() {
        _super.apply(this, arguments);
    }
    TestCompleteWebPage.prototype.waitForVisible = function () {
        _super.prototype.waitForVisible.call(this);
        var members = new TestCompleteMembers()
            .add("ObjectType")
            .add("url", "Url")
            .add("contentDocument", "Document");
        this.assign(members);
        return this;
    };
    return TestCompleteWebPage;
})(TestCompleteOnScreenObject);
