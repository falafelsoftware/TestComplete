//USEUNIT TestCompleteBrowserUnit
var SmokeTest = (function () {
    function SmokeTest() {
    }
    SmokeTest.prototype.run = function () {
        var browsers = new BrowserList()
            .add(BrowserType.Chrome)
            .add(BrowserType.IE);
        for (var _i = 0, _a = browsers.Items; _i < _a.length; _i++) {
            var browser = _a[_i];
            browser
                .run()
                .maximize()
                .navigate("http://www.falafel.com")
                .screenshot()
                .close();
        }
    };
    return SmokeTest;
})();
function test() {
    var smoke = new SmokeTest();
    smoke.run();
}
