//USEUNIT TestCompleteBrowserUnit

class SmokeTest {
    run() {
        var browsers = new BrowserList()
          .add(BrowserType.Chrome)
          .add(BrowserType.IE); 
        for (var browser of browsers.Items) {
            browser
                .run()
                .maximize()
                .navigate("http://www.falafel.com")
                .screenshot()
                .close();
        }

    }
}


function test() {
    var smoke = new SmokeTest();
    smoke.run();
}
