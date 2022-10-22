var page = require("webpage").create();
var url = "http://127.0.0.1:5501/demo6/index.html";
page.open(url, function (status) {
  var title = page.evaluate(function () {
    var seen = [];

    return JSON.stringify(document, function (key, val) {
      if (val != null && typeof val == "object") {
        if (seen.indexOf(val) >= 0) {
          return;
        }
        seen.push(val);
      }
      return val;
    });
    // return JSON.stringify(document);
  });
  console.log("状态", status);
  console.log("Page title is " + title);
  phantom.exit();
});
