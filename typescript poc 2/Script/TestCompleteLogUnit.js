/**
 * Wraps the TestComplete Log runtime object. This does not support all methods of the runtime object.
 */
var TestCompleteLog = (function () {
    function TestCompleteLog() {
    }
    /**
     * This method wraps the Log.Message() method.
     * @param  {string}        message        The message for the log.
     * @param  {string}        additionalInfo AdditionalInfo the log.
     * @param  {number}        priority       Priority level for the TestComplete log priority levels. This is not restricted to a valid set of numbers yet, i.e. 100, 200..500 T
     * @param  {LogAttributes} attributes     Object that describes the log output font, color, bold, etc.
     * @param  {any}           picture        Picture object returned by TestComplete on-screen objects when they call the Picture() method.
     * @return {TestCompleteLog} returns "this" to allow chaining calls
     */
    TestCompleteLog.prototype.log = function (message, additional, priority, attributes, picture) {
        Log.Message(message, additional, priority, attributes, picture);
    };
    /**
     * This method wraps the Log.Warning() method.
     * @param  {string}        message        The message for the log.
     * @param  {string}        additionalInfo AdditionalInfo the log.
     * @param  {number}        priority       Priority level for the TestComplete log priority levels. This is not restricted to a valid set of numbers yet, i.e. 100, 200..500 T
     * @param  {LogAttributes} attributes     Object that describes the log output font, color, bold, etc.
     * @param  {any}           picture        Picture object returned by TestComplete on-screen objects when they call the Picture() method.
     * @return {TestCompleteLog} returns "this" to allow chaining calls
     */
    TestCompleteLog.prototype.warning = function (message, additional, priority, attributes, picture) {
        Log.Warning(message, additional, priority, attributes, picture);
    };
    /**
     * This method wraps the Log.Error() method.
     * @param  {string}        message        The message for the log.
     * @param  {string}        additionalInfo AdditionalInfo the log.
     * @param  {number}        priority       Priority level for the TestComplete log priority levels. This is not restricted to a valid set of numbers yet, i.e. 100, 200..500 T
     * @param  {LogAttributes} attributes     Object that describes the log output font, color, bold, etc.
     * @param  {any}           picture        Picture object returned by TestComplete on-screen objects when they call the Picture() method.
     * @return {TestCompleteLog} returns "this" to allow chaining calls
     */
    TestCompleteLog.prototype.error = function (message, additional, priority, attributes, picture) {
        Log.Error(message, additional, priority, attributes, picture);
    };
    /**
     * This method wraps the Log.Picture method.
     * @param  {any}           picture    Picture object returned by TestComplete on-screen objects when they call the Picture() method.
     * @param  {string}        message        The message for the log.
     * @param  {string}        additionalInfo AdditionalInfo the log.
     * @param  {number}        priority       Priority level for the TestComplete log priority levels. This is not restricted to a valid set of numbers yet, i.e. 100, 200..500 T
     * @param  {LogAttributes} attributes     Object that describes the log output font, color, bold, etc.
     * @return {TestCompleteLog} returns "this" to allow chaining calls
     */
    TestCompleteLog.prototype.screenshot = function (picture, message, additional, priority, attributes) {
        Log.Picture(picture, message, additional, priority, attributes);
    };
    return TestCompleteLog;
})();
