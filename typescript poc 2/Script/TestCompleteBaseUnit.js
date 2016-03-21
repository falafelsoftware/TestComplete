/**
 * RepresentsThe wrapper for any TestComplete object
 */
var TestCompleteBase = (function () {
    /**
     * Bind the TestComplete object to this JavaScript object
     * @param  {any}    TestCompleteObject The object to bind from TestComplete`
     * @return {TestCompleteBase}
     */
    function TestCompleteBase(testCompleteObject) {
        this.refresh(testCompleteObject);
    }
    /**
     * Recapture the base TestComplete object
     */
    TestCompleteBase.prototype.refresh = function (testCompleteObject) {
        if (!testCompleteObject) {
            Log.Error("A TestComplete object was not passed to TestCompleteBase.");
        }
        this.TestCompleteObject = testCompleteObject;
    };
    return TestCompleteBase;
})();
