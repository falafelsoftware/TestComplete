var TestCompleteWindow = (function () {
    function TestCompleteWindow(testCompleteObject) {
        this.TestCompleteObject = testCompleteObject;
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
})();
