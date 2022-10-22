var fs = require("fs");
var page = require("webpage").create();

// page.onError = function (msg) {
//   console.log("ERROR:", msg);
// };
// page.onConsoleMessage = function (msg) {
//   console.log("Web:", msg);
// };

// page.onCallback = function (data) {
//   var s = data.map(function (o) {
//     return o.text + " | " + o.href;
//   });
//   var file = fs.open("/phantom", "w");
//   file.write(s.join("\n"));
//   file.close();
//   phantom.exit();
// };

// page.open("http://www.douban.com/group/explore", function (status) {
//   if (status === "success") {
//     page.evaluate(function () {
//       $(function () {
//         var link_list = $.map(
//           $("div.channel-group-rec > .bd > ul > li > .info > .title > a"),
//           function (o) {
//             return { text: $(o).text(), href: $(o).attr("href") };
//           }
//         );
//         window.callPhantom(link_list);
//       });
//     });
//   }
// });
