/**
 * Wraps the TestComplete Log runtime object. This does not support all methods of the runtime object.
 */
class TestCompleteLog {
    /**
     * This method wraps the Log.Message() method.
     * @param  {string}        message        The message for the log.
     * @param  {string}        additionalInfo AdditionalInfo the log.
     * @param  {number}        priority       Priority level for the TestComplete log priority levels. This is not restricted to a valid set of numbers yet, i.e. 100, 200..500 T
     * @param  {LogAttributes} attributes     Object that describes the log output font, color, bold, etc.
     * @param  {any}           picture        Picture object returned by TestComplete on-screen objects when they call the Picture() method.
     * @return {TestCompleteLog} returns "this" to allow chaining calls
     */
    log(message: string, additional?: string, priority?: number, attributes?: LogAttributes, picture?: any){
        Log.Message(message, additional, priority, attributes, picture);
    }
    /**
     * This method wraps the Log.Warning() method.
     * @param  {string}        message        The message for the log.
     * @param  {string}        additionalInfo AdditionalInfo the log.
     * @param  {number}        priority       Priority level for the TestComplete log priority levels. This is not restricted to a valid set of numbers yet, i.e. 100, 200..500 T
     * @param  {LogAttributes} attributes     Object that describes the log output font, color, bold, etc.
     * @param  {any}           picture        Picture object returned by TestComplete on-screen objects when they call the Picture() method.
     * @return {TestCompleteLog} returns "this" to allow chaining calls
     */
    warning(message: string, additional?: string, priority?: number, attributes?: LogAttributes, picture?: any){
        Log.Warning(message, additional, priority, attributes, picture);
    }
    /**
     * This method wraps the Log.Error() method.
     * @param  {string}        message        The message for the log.
     * @param  {string}        additionalInfo AdditionalInfo the log.
     * @param  {number}        priority       Priority level for the TestComplete log priority levels. This is not restricted to a valid set of numbers yet, i.e. 100, 200..500 T
     * @param  {LogAttributes} attributes     Object that describes the log output font, color, bold, etc.
     * @param  {any}           picture        Picture object returned by TestComplete on-screen objects when they call the Picture() method.
     * @return {TestCompleteLog} returns "this" to allow chaining calls
     */
    error(message: string, additional?: string, priority?: number, attributes?: LogAttributes, picture?: any){
        Log.Error(message, additional, priority, attributes, picture);
    }
    /**
     * This method wraps the Log.Picture method.
     * @param  {any}           picture    Picture object returned by TestComplete on-screen objects when they call the Picture() method.
     * @param  {string}        message        The message for the log.
     * @param  {string}        additionalInfo AdditionalInfo the log.
     * @param  {number}        priority       Priority level for the TestComplete log priority levels. This is not restricted to a valid set of numbers yet, i.e. 100, 200..500 T
     * @param  {LogAttributes} attributes     Object that describes the log output font, color, bold, etc.
     * @return {TestCompleteLog} returns "this" to allow chaining calls
     */
    screenshot(picture: any, message?: string, additional?: string, priority?: number, attributes?: LogAttributes){
        Log.Picture(picture, message, additional, priority, attributes);
    }
}
