//USEUNIT TestCompleteWindowUnit
//USEUNIT TestCompleteWebPageUnit

var btIExplorer = -1;
var btFireFox = -2;
var btChrome = -3;
var btEdge = -6;

enum BrowserType {
  IE = btIExplorer,
  Firefox = btFireFox,
  Chrome = btChrome,
  Edge = btEdge
}


class BrowserList {
  Items: Array<Browser>;
  constructor(){
    this.Items = new Array<Browser>(); 
  }
  add(browserType: BrowserType){
    var browser = this.Items[browserType]; 
    if (!browser){
      this.Items.push(new Browser(browserType));  
    }
    return this; 
  }
}

/**
 * This class wraps the Browsers.Item(), browser process, browser window and
 * the page to act as a single unit.
 */
class Browser {
  public BrowserType: BrowserType;
  public BrowserRunner: any;
  public Process: any;
  public BrowserWindow: TestCompleteWindow;
  public CurrentPage: TestCompleteWebPage;

  /**
   * Creates a Browser for a specific browser type, i.e. chrome iexplore, etc.
   * @param  {number} browserType A TestComplete browser constant such as btChrome.
   * @return {Browser} returns "this" to allow chaining calls
   **/
  constructor(browserType: BrowserType) {
    this.BrowserType = browserType;
    this.BrowserRunner = Browsers.Item(browserType);
  }

  /**
   * Opens or uses an existing browser, gets a reference to the process and
   * creates an object for the browser window to allow the maximizing, closing, etc.
   * @return {Browser} returns "this" to allow chaining calls
   */
  run() {
    this.BrowserRunner.Run();
    this.Process = Sys.Browser("*");
    this.BrowserWindow = new TestCompleteWindow(this.Process.BrowserWindow(0))
    return this;
  }

  /**
   * navigates the browser to a url and gets a reference
   * @param  {string} url [description]
   * @return {Browser} returns "this" to allow chaining calls
   */
  navigate(url: string) {
    this.BrowserRunner.Navigate(url);
    this.refresh();
    return this;
  }

  /**
   * gets a reference to the current page.
   * @return {Browser} returns "this" to allow chaining calls
   */
  refresh() {
    this.CurrentPage = null;
    var page = this.Process.Page("*");
    this.CurrentPage = new TestCompleteWebPage(page);
    return this;
  }

  validate() {
    this.CurrentPage.validate();
    return this;
  }

  /**
   * Closes the browser window
   * @return {Browser} returns "this" to allow chaining calls
   */
  close() {
    this.BrowserWindow.close();
    return this;
  }

  /**
   * Maximizes the browser window
   * @return {Browser} returns "this" to allow chaining calls
   */
  maximize() {
    this.BrowserWindow.maximize();
    return this;
  }

  /**
   * Takes a screenshot of the current page
   * @return {Browser} returns "this" to allow chaining calls
   */
  screenshot() {
    this.CurrentPage.screenshot();
    return this;
  }
}
