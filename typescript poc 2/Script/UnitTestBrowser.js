//USEUNIT TestCompleteBrowserUnit
var url = "http://www.falafel.com";
function testCompleteWrapped() {
    new Browser(btChrome)
        .run()
        .navigate(url)
        .maximize()
        .validate()
        .screenshot()
        .close();
}
