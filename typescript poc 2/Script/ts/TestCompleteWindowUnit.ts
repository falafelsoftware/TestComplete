//USEUNIT TestCompleteBaseUnit
//USEUNIT TestCompleteLogUnit

/**
 * Wraps a window object from TestComplete
 */
class TestCompleteWindow extends TestCompleteBase {
    constructor(testCompleteObject: any) {
        super(testCompleteObject);
    }

    /**
     * close closes the window
     * @return {TestCompleteWindow} returns "this" to allow chaining calls
     */
    close(){
        this.TestCompleteObject.Close();
        return this;
    }

    /**
     * maximize maximizes the window
     * @return {TestCompleteWindow} returns "this" to allow chaining calls
     */
    maximize(){
        this.TestCompleteObject.Maximize();
        return this;
    }

    /**
     * Logs a screenshot to the TestComplete log.
     * @param  {string}        message        The message for the log, or "Screenshot" if no message is passed.
     * @param  {string}        additionalInfo AdditionalInfo the log.
     * @param  {number}        priority       Priority level for the TestComplete log priority levels. This is not restricted to a valid set of numbers yet, i.e. 100, 200..500 T
     * @param  {LogAttributes} attributes     Object that describes the log output font, color, bold, etc.
     * @return {TestCompleteWindow} returns "this" to allow chaining calls
     */
    screenshot(message?: string, additionalInfo?: string, priority?: number, attributes?: LogAttributes){
        var msg = message ? message : "Screenshot";
        new TestCompleteLog().screenshot(this.TestCompleteObject.Picture(), msg, additionalInfo, priority, attributes);
    }

}
