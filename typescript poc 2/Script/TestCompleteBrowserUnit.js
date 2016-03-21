//USEUNIT TestCompleteWindowUnit
//USEUNIT TestCompleteWebPageUnit
/**
 * This class wraps the Browsers.Item(), browser process, browser window and
 * the page to act as a single unit.
 */
var Browser = (function () {
    /**
     * Creates a Browser for a specific browser type, i.e. chrome iexplore, etc.
     * @param  {number} browserType A TestComplete browser constant such as btChrome.
     * @return {Browser} returns "this" to allow chaining calls
     **/
    function Browser(browserType) {
        this.BrowserType = browserType;
        this.BrowserRunner = Browsers.Item(browserType);
    }
    /**
     * Opens or uses an existing browser, gets a reference to the process and
     * creates an object for the browser window to allow the maximizing, closing, etc.
     * @return {Browser} returns "this" to allow chaining calls
     */
    Browser.prototype.run = function () {
        this.BrowserRunner.Run();
        this.Process = Sys.Browser("*");
        this.BrowserWindow = new TestCompleteWindow(this.Process.BrowserWindow(0));
        return this;
    };
    /**
     * navigates the browser to a url and gets a reference
     * @param  {string} url [description]
     * @return {Browser} returns "this" to allow chaining calls
     */
    Browser.prototype.navigate = function (url) {
        this.BrowserRunner.Navigate(url);
        this.refresh();
        return this;
    };
    /**
     * gets a reference to the current page.
     * @return {Browser} returns "this" to allow chaining calls
     */
    Browser.prototype.refresh = function () {
        this.CurrentPage = null;
        //TODO: need to research and test of resource usage with and without CollectGarbage call 
        CollectGarbage();
        var page = this.Process.Page("*");
        this.CurrentPage = new TestCompleteWebPage(page);
        return this;
    };
    Browser.prototype.validate = function () {
        this.CurrentPage.validate();
        return this;
    };
    /**
     * Closes the browser window
     * @return {Browser} returns "this" to allow chaining calls
     */
    Browser.prototype.close = function () {
        this.BrowserWindow.close();
        return this;
    };
    /**
     * Maximizes the browser window
     * @return {Browser} returns "this" to allow chaining calls
     */
    Browser.prototype.maximize = function () {
        this.BrowserWindow.maximize();
        return this;
    };
    /**
     * Takes a screenshot of the current page
     * @return {Browser} returns "this" to allow chaining calls
     */
    Browser.prototype.screenshot = function () {
        this.CurrentPage.screenshot();
        return this;
    };
    return Browser;
})();
