var mouseflowDisableKeyLogging = true;
if (
  typeof mouseflow === "undefined" &&
  typeof mouseflowPlayback === "undefined"
) {
  (function () {
    var _174 = true;
    var _177 = false;
    var _148 = [];
    var _162 = [];
    var _18 = "https://eu.mouseflow.com";
    var _6 = new _307(window, _174, _177);
    _6._152 = [];
    _6._176 = [];
    _6._97 = [];
    _6._351 = [];
    _6._57 = "f2fd9d12-c8a0-45f8-96d7-76d027cc3512";
    _6._153("appUrl", _18);
    function _317(_0, _6, _44, _4, _11, _99) {
      var _18, _57, _9, _50;
      var _163 = "mf_liveHeatmaps";
      var _14;
      var _98 = [];
      var _77;
      var _125 = false;
      function _46(_142, _112, _154, _113) {
        _57 = _142;
        _18 = _154;
        _9 = _112;
        _125 =
          window.location.search.indexOf("mf_legacy=1") !== -1 ? true : false;
        _9("Live heatmaps starting");
        _50 = _44._100();
        if (!_50) {
          _9(
            "Live heatmaps not initiated - could not create root HTML element"
          );
          return;
        }
        if (!_0.opener) {
          _9("Live heatmaps not initiated - window.opener is missing");
          return;
        }
        if (typeof _113 === "function") {
          _113(function () {
            _122();
          });
        } else {
          _122();
        }
      }
      function _63() {
        _123();
      }
      function _122() {
        _11._17(_0, "message", function (_22) {
          if (_22.origin !== _18) return;
          _144(_22.data);
          switch (_22.data.message) {
            case "MouseflowLiveHeatmaps_Init_Received":
              _0.clearInterval(_77);
              break;
            case "MouseflowLiveHeatmaps_Init_Success":
            case "MouseflowLiveHeatmaps_Hello":
              _253(
                _22.data.minDate,
                _22.data.filters,
                _22.data.filteredViews,
                _22.data.user,
                _22.data.websiteSettings.cssSelectorTracked
              );
              _147(_22.data.scripts, function () {
                var message;
                if (_125) {
                  message = {
                    mfCommand: "settings",
                    value: { websiteSettings: _22.data.websiteSettings },
                  };
                } else {
                  _210();
                  message = { mfCommand: "settings_liveheatmap", value: _14 };
                }
                _183(JSON.stringify(message));
              });
              break;
            case "MouseflowLiveHeatmaps_StreamData_Chunk":
              _102(_22.data.requestUrl, true)._181(_22.data.dataChunk);
              break;
            case "MouseflowLiveHeatmaps_StreamData_Success":
              _102(_22.data.requestUrl)._61();
              break;
            case "MouseflowLiveHeatmaps_StreamData_Error":
              _102(_22.data.requestUrl)._78();
              break;
            case "MouseflowLiveHeatmaps_RequestData_Success":
              _102(_22.data.requestUrl)._61(_22.data.responseText);
              break;
            case "MouseflowLiveHeatmaps_RequestData_Error":
              _102(_22.data.requestUrl)._78();
              break;
          }
        });
        _77 = _0.setInterval(_235, 500);
        _0.setTimeout(function () {
          _0.clearInterval(_77);
        }, 10000);
        _235();
      }
      function _235() {
        _106({
          message: "MouseflowLiveHeatmaps_Init",
          websiteId: _57,
          legacy: _125,
        });
      }
      function _253(_251, _81, _250, _249, _97) {
        _14 = _222();
        var _104 = _220();
        var _140 = _6.location.search.match(/mf_liveHeatmaps=([^&]+)/);
        var _164 =
          typeof _0.name === "string" &&
          _0.name.indexOf("mf_liveHeatmaps") === 0
            ? _0.name.slice(15).split("_")
            : [];
        var _252 = _140 || _164[1] === "init";
        if (_14 && !_252) {
          _14.filters.url = _104.url;
          _40(_14);
          return;
        }
        _14 = {
          isMinimized: false,
          appUrlBase: _18,
          websiteId: _57,
          filters: _104,
          minDate: _251,
          filteredViews: _250,
          user: _249,
          cssSelectorTracked: _97,
        };
        if (_81 && _81.view) {
          _14.selectedFilteredView = _81.view;
          delete _81.view;
        }
        if (_81) {
          Object.keys(_81).forEach(function (_33) {
            var _13 = _81[_33];
            if (_13 instanceof Date) _13 = _135(_13);
            _14.filters[_33] = _13;
          });
        }
        if (_140 && _140[1] !== "1") _14.filters.maptype = _140[1];
        else if (_164[2]) _14.filters.maptype = _164[2];
        _40(_14);
        _0.name = "mf_liveHeatmaps";
      }
      function _210() {
        _14.devices = [_14.filters.device];
        _14.mapType = _14.filters.maptype;
        _14.url = _99._131();
      }
      function _147(_83, _52) {
        if (!_83) return;
        var _79 = 0;
        function _105() {
          if (_79 >= _83.length) {
            _52();
            return;
          }
          var _42 = _83[_79];
          _146(_42);
          _79++;
          var _66 = document.createElement("script");
          if (_42.startsWith("/")) _66.src = _18 + _42;
          else _66.src = _18 + "/" + _42;
          _66.onload = _105;
          _50.appendChild(_66);
        }
        _105();
      }
      function _222() {
        return _4._116(_0.localStorage.getItem(_163));
      }
      function _40(_14) {
        if (_9) _9("Live heatmaps saving settings");
        _14 = _14 ? _4._118(_14) : "";
        _0.localStorage.setItem(_163, _14);
      }
      function _123() {
        if (_9) _9("Live heatmaps removing settings");
        _0.localStorage.removeItem(_163);
      }
      function _102(_32, _243) {
        var _179 = _98.filter(function (_244) {
          return _244._32 === _32;
        })[0];
        if (!_243 && _179) _98.splice(_98.indexOf(_179), 1);
        return _179;
      }
      function _261(_34) {
        if (typeof _34 !== "object") return;
        _14 = _222();
        var _104 = _220();
        Object.keys(_34).forEach(function (_33) {
          var _13 = _34[_33];
          if (_13 instanceof Date) _13 = _135(_13);
          _14.filters[_33] = _13 || undefined;
        });
        Object.keys(_104).forEach(function (_33) {
          if (!_14.filters[_33]) _14.filters[_33] = _104[_33];
        });
        if (_14.filters.view) {
          _14.selectedFilteredView = _14.filters.view;
          delete _14.filters.view;
        }
        _40(_14);
      }
      function _220() {
        var _92 = new Date();
        _92 = new Date(_92.getFullYear(), _92.getMonth(), _92.getDate());
        var _171 = new Date(_92);
        _171.setDate(_171.getDate() - 29);
        return {
          maptype: "click",
          device: "desktop",
          url: _99._131(),
          fromdate: _135(_171),
          todate: _135(_92),
        };
      }
      function _106(_15) {
        _0.opener.postMessage(_15, _18);
        _9(
          "Sent " +
            _15.message +
            (_15.requestUrl ? ", request URL: " + _15.requestUrl : "")
        );
      }
      function _183(_15) {
        _0.postMessage(_15, _0.location.origin);
        _9(
          "Sent " +
            _15.message +
            (_15.requestUrl ? ", request URL: " + _15.requestUrl : "")
        );
      }
      function _144(_15) {
        if (_15.message && _15.message.indexOf("MouseflowLiveHeatmaps_") === 0)
          _9(
            "Received " +
              _15.message +
              (_15.requestUrl ? ", request URL: " + _15.requestUrl : "")
          );
      }
      function _146(_42) {
        _9("Live heatmaps loading script: " + _42);
      }
      function _135(_141) {
        return (
          _141.getFullYear() +
          "-" +
          _215(_141.getMonth() + 1, "00") +
          "-" +
          _215(_141.getDate(), "00")
        );
      }
      function _215(_272, _213) {
        return (_213 + _272).slice(-_213.length);
      }
      this._46 = _46;
      this._63 = _63;
      this._208 = function (_34) {
        _261(_34);
        if (_125) {
          _183('{"mfCommand":"MouseflowHeatmap_UpdateHeatmap"}');
        } else {
          _210();
          var message = {
            mfCommand: "settings_change",
            value: { settings: _14, reloadData: _34.maptype ? false : true },
          };
          _183(JSON.stringify(message));
        }
        _9("Sent postmessage updateheatmap");
      };
      _0.mouseflowHeatmap = {
        streamData: function (_32, _181, _61, _78) {
          _98.push({
            _32: _32,
            _181: _181 || function () {},
            _61: _61 || function () {},
            _78: _78 || function () {},
          });
          _106({
            message: "MouseflowLiveHeatmaps_StreamData",
            requestUrl: _32,
          });
        },
        getData: function (_32, _61, _78) {
          _98.push({
            _32: _32,
            _61: _61 || function () {},
            _78: _78 || function () {},
          });
          _106({
            message: "MouseflowLiveHeatmaps_RequestData",
            requestUrl: _32,
          });
        },
      };
    }
    function _316(_0, _44, _31, _4, _11, _6) {
      var _10 = _0.document,
        _18,
        _57,
        _9,
        _2,
        _50,
        _8,
        _192,
        _205,
        _190,
        _68,
        _51,
        _130,
        _64,
        _196,
        _82,
        _107,
        _93,
        _65,
        _53,
        _120;
      function _46(_266, _142, _152, _176, _97, _112) {
        _18 = _266;
        _57 = _142;
        _9 = _112;
        _2 = _319() || {
          _59: false,
          _36: "exclude",
          _28: _152 || [],
          _29: _176 || [],
          _38: _97 || [],
        };
        _9("Starting privacy tool");
        _50 = _44._100();
        if (!_50) {
          _9("Privacy tool not initiated - could not create root HTML element");
          return;
        }
        _255();
        _31._73(function () {
          _247();
          _40(_2);
        }, 1000);
      }
      function _63() {
        _246();
        _44._173();
      }
      function _255() {
        _11._17(_0, "message", function (event) {
          if (event.origin !== _18) return;
          switch (event.data.message) {
            case "MouseflowPrivacyTool_Hello":
              _9("Privacy tool API ready");
              _93 = event.source;
              if (event.data.cssSelectorBlacklist) {
                _2._28 = event.data.cssSelectorBlacklist;
                _2._29 = event.data.cssSelectorWhitelist;
                _2._38 = event.data.cssSelectorTracked;
              }
              _230();
              break;
            case "MouseflowPrivacyTool_Save_Success":
              _9("Successfully saved CSS lists");
              if (_65) _65();
              _65 = undefined;
              _53 = undefined;
              break;
            case "MouseflowPrivacyTool_Save_Failed":
              _9("Failed saving CSS lists");
              if (_53) _53();
              _65 = undefined;
              _53 = undefined;
              _158(
                "Uh oh! We couldn't save your changes.<br><br>" +
                  "Please refresh the page and try again."
              );
              break;
            case "MouseflowPrivacyTool_Unauthorized":
              _9("Privacy tool API logged out - cannot save");
              if (_53) _53();
              _65 = undefined;
              _53 = undefined;
              _158(
                "Uh oh! We couldn't save your changes.<br><br>" +
                  "Please log into Mouseflow and try again."
              );
              break;
          }
        });
        if (_0.opener) {
          _9("Loading privacy tool API using window.opener");
          _0.opener.postMessage({ message: "MouseflowPrivacyTool_Hello" }, _18);
        }
        _31._73(function () {
          if (!_93) {
            _9("Loading privacy tool API using iframe");
            var _110 = _10.createElement("iframe");
            _110.style.width = "0px";
            _110.style.height = "0px";
            _110.style.display = "none";
            _110.src = _18 + "/websites/" + _57 + "/privacytool";
            _50.appendChild(_110);
            _31._73(function () {
              if (!_93) {
                _9("Loading privacy tool API timed out");
                _328(
                  "We're having trouble loading the Privacy Tool on this page. Please try " +
                    "refreshing the page or logging in to Mouseflow and reloading the Privacy Tool from there.<br><br>" +
                    'If you need help, please don\'t hesitate to reach out to us at:  <a class="green" href="mailto:support@mouseflow.com">support@mouseflow.com</a>'
                );
              }
            }, 5000);
          }
        }, 2000);
      }
      function _247() {
        _8 = _318(_2);
        _192 = _8.querySelector(".tool-exclude output");
        _205 = _8.querySelector(".tool-whitelist output");
        _190 = _8.querySelector(".tool-track output");
        _68 = _8.querySelector(".tool-status-text");
        _51 = _8.querySelector(".btn-widget");
        _130 = _8.querySelector(".tool-loading h2");
        _2._28.forEach(_193);
        _2._29.forEach(_238);
        _2._38.forEach(_199);
        _50.appendChild(_8);
        _64 = _327();
        _8.appendChild(_64);
        _4._95(_10.body, "mf-privacy-tool-opened", !_2._59);
        _264();
        _230();
      }
      function _230() {
        if (_8 && _93) {
          _4._16(_8, "is-loading");
          _55();
          _263();
          _121();
        }
      }
      function _156() {
        _123();
        _63();
        _0.close();
      }
      function _264() {
        _11._17(_8, "click", ".mf-tool-close", _156, { _45: true });
      }
      function _263() {
        _11._17(_8, "click", ".mf-tool-toggle", _258, { _45: true });
        _11._17(_8, "click", ".mf-tool-close", _156, { _45: true });
        _11._17(_8, "click", ".mf-tool-exclude", _248, { _45: true });
        _11._17(_8, "click", ".mf-tool-whitelist", _254, { _45: true });
        _11._17(_8, "click", ".mf-tool-track", _245, { _45: true });
        _11._17(_8, "click", ".highlight-excluded", _257, { _45: true });
        _11._17(_8, "click", ".highlight-whitelisted", _273, { _45: true });
        _11._17(_8, "click", ".highlight-tracked", _267, { _45: true });
        _11._17(_8, "click", ".mf-remove-excluded", _265, { _45: true });
        _11._17(_8, "click", ".mf-remove-whitelisted", _262, { _45: true });
        _11._17(_8, "click", ".mf-remove-tracked", _260, { _45: true });
        _11._17(_8, "submit", _259, { _45: true });
        _11._17(_10, "mouseover", _240, { _39: true });
        _11._17(_10, "mouseleave", _271, { _39: true });
        _11._17(_10, "mouseup", _241, { _39: true });
        _11._17(_10, "mouseenter", _71, { _39: true });
        _11._17(_10, "mousemove", _71, { _39: true });
        _11._17(_10, "mousedown", _71, { _39: true });
        _11._17(_10, "click", _71, { _39: true });
        _11._17(_10, "mouseout", _71, { _39: true });
        _11._17(_10, "scroll", _55, { _39: true, _175: true });
        _11._17(_0, "resize", _55, { _39: true, _175: true });
        var MutationObserver =
          _0.MutationObserver ||
          _0.WebKitMutationObserver ||
          _0.MozMutationObserver;
        if (MutationObserver) {
          _107 = new MutationObserver(function (_234) {
            var _256 = _234.some(function (_58) {
              if (
                _58.target.nodeType !== 1 ||
                _4._30(_58.target, "#mouseflow *")
              )
                return false;
              var _268 =
                _58.oldValue && _58.oldValue.indexOf("mf-highlight") !== -1;
              var _269 =
                _58.target.className &&
                _58.target.className.indexOf("mf-highlight") !== -1;
              var _270 = _268 || _269;
              if (
                _58.type === "attributes" &&
                _58.attributeName === "class" &&
                _270
              )
                return false;
              return true;
            });
            if (_256) _55();
            _234.forEach(function (_58) {
              _58.addedNodes.forEach(function (_159) {
                if (!_159.shadowRoot) return;
                _107.observe(_159.shadowRoot, {
                  childList: true,
                  subtree: true,
                });
                _121(_159);
              });
            });
          });
          _107.observe(_10, {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true,
            attributeOldValue: true,
          });
        }
      }
      function _246() {
        _11._300();
        if (_107) _107.disconnect();
      }
      function _121(_74) {
        if (!_120) _120 = _291();
        if (!_74) _74 = _10;
        for (var _108 = _74.firstChild; _108; _108 = _108.nextSibling) {
          _121(_108);
          var _70 = _108.shadowRoot;
          if (!_70) continue;
          _121(_70);
          if (_70.adoptedStyleSheets) {
            if (_70.adoptedStyleSheets.indexOf(_120) > -1) continue;
            var _233 = Array.prototype.slice.call(_70.adoptedStyleSheets);
            _233.push(_120);
            _70.adoptedStyleSheets = _233;
          } else {
            if (_70.querySelector(".mf-privacy-tool-style")) continue;
            var _48 = _10.createElement("style");
            _48.type = "text/css";
            _48.innerHTML = _155();
            _48.className = "mf-privacy-tool-style";
            _70.appendChild(_48);
          }
        }
      }
      function _258() {
        _2._59 = !_2._59;
        _40(_2);
        _4._95(_8, "tool-closed", _2._59);
        _4._95(_10.body, "mf-privacy-tool-opened", !_2._59);
        var _133 = _8.getElementsByClassName("step")[0];
        var _119 = _8.getElementsByClassName("tool-container")[0];
        if (_2._59) {
          _4._16(_133, "fade-out");
          _4._23(_133, "fade-in");
          _4._16(_119, "fade-in");
          _4._23(_119, "fade-out");
        } else {
          _4._16(_133, "fade-in");
          _4._23(_133, "fade-out");
          _4._16(_119, "fade-out");
          _4._23(_119, "fade-in");
        }
      }
      function _248() {
        _2._36 = "exclude";
        _40(_2);
        _4._16(_8.getElementsByClassName("mf-tool-whitelist")[0], "active");
        _4._16(_8.getElementsByClassName("tool-whitelist")[0], "active");
        _4._16(_8.getElementsByClassName("mf-tool-track")[0], "active");
        _4._16(_8.getElementsByClassName("tool-track")[0], "active");
        _4._23(_8.getElementsByClassName("mf-tool-exclude")[0], "active");
        _4._23(_8.getElementsByClassName("tool-exclude")[0], "active");
      }
      function _254() {
        _2._36 = "whitelist";
        _40(_2);
        _4._16(_8.getElementsByClassName("mf-tool-exclude")[0], "active");
        _4._16(_8.getElementsByClassName("tool-exclude")[0], "active");
        _4._16(_8.getElementsByClassName("mf-tool-track")[0], "active");
        _4._16(_8.getElementsByClassName("tool-track")[0], "active");
        _4._23(_8.getElementsByClassName("mf-tool-whitelist")[0], "active");
        _4._23(_8.getElementsByClassName("tool-whitelist")[0], "active");
      }
      function _245() {
        _2._36 = "track";
        _40(_2);
        _4._16(_8.getElementsByClassName("mf-tool-exclude")[0], "active");
        _4._16(_8.getElementsByClassName("tool-exclude")[0], "active");
        _4._16(_8.getElementsByClassName("mf-tool-whitelist")[0], "active");
        _4._16(_8.getElementsByClassName("tool-whitelist")[0], "active");
        _4._23(_8.getElementsByClassName("mf-tool-track")[0], "active");
        _4._23(_8.getElementsByClassName("tool-track")[0], "active");
      }
      function _257(_7) {
        if (_2._36 === "exclude") {
          _239(_7.target.getAttribute("data-target"));
          _55();
        }
      }
      function _273(_7) {
        if (_2._36 === "whitelist") {
          _186(_7.target.getAttribute("data-target"));
          _55();
        }
      }
      function _267(_7) {
        if (_2._36 === "track") {
          _187(_7.target.getAttribute("data-target"));
          _55();
        }
      }
      function _265(_7) {
        _239(_7.target.parentNode.getAttribute("data-target"));
        _55();
      }
      function _262(_7) {
        _186(_7.target.parentNode.getAttribute("data-target"));
        _55();
      }
      function _260(_7) {
        _187(_7.target.parentNode.getAttribute("data-target"));
        _55();
      }
      function _259() {
        _315();
        _325(
          _2._28,
          _2._29,
          _2._38,
          function () {
            _194();
            _51.innerHTML = "Saved";
            _123();
            _31._73(_156, 500);
          },
          function () {
            _194();
          }
        );
      }
      function _240(_7) {
        _31._143(_196);
        var _191 = _10.getElementsByClassName("mf-highlight");
        for (var _3 = 0; _3 < _191.length; _3++) {
          _4._16(_191[_3], "mf-highlight");
        }
        _4._23(_64, "hidden");
        if (_71(_7) || _197(_7.target)) return;
        _4._23(_7.target, "mf-highlight");
        _196 = _31._73(function () {
          var _24 = _7.target.getBoundingClientRect();
          _64.style.left = _24.left + _0.pageXOffset + "px";
          _64.style.top = _24.top + _0.pageYOffset + "px";
          _64.style.width = _24.width + "px";
          _64.style.height = _24.height + "px";
          _4._16(_64, "hidden");
        }, 75);
      }
      function _271(_7) {
        if (_71(_7)) return;
        if (_7.target === _10) {
          _4._23(_64, "hidden");
        }
      }
      function _241(_7) {
        if (_71(_7)) return;
        if (_7.button !== 0 || _197(_7.target)) return;
        _4._16(_7.target, "mf-highlight");
        var _1 = _322(_7.target);
        if (_2._36 === "exclude") {
          _193(_1);
        } else if (_2._36 === "whitelist") {
          _238(_1);
        } else {
          _199(_1);
        }
        _55();
      }
      function _71(_7) {
        if (
          _2._59 ||
          _7.target.nodeType !== 1 ||
          _4._30(_7.target, "#mouseflow *")
        )
          return true;
        _7.preventDefault();
        _7.stopPropagation();
        return false;
      }
      function _197(_5) {
        return (
          _5 === _10.body ||
          _4._30(_5, "html") ||
          (_2._36 === "whitelist" &&
            (!/INPUT|TEXTAREA/.test(_5.tagName) ||
              /checkbox|radio|button|submit/.test(_5.type)))
        );
      }
      function _199(_1) {
        if (_1 && _2._38.indexOf(_1) === -1) {
          _2._38.unshift(_1);
          _40(_2);
        }
        _88();
      }
      function _193(_1) {
        if (_1 && _2._28.indexOf(_1) === -1) {
          _2._28.unshift(_1);
          _40(_2);
        }
        _88();
      }
      function _238(_1) {
        if (_1 && _2._29.indexOf(_1) === -1) {
          _2._29.unshift(_1);
          _40(_2);
        }
        _88();
      }
      function _239(_1) {
        if (_1 && _2._28.indexOf(_1) !== -1) {
          _2._28 = _2._28.filter(function (_109) {
            return _109 !== _1;
          });
          _40(_2);
        }
        _88();
      }
      function _186(_1) {
        if (_1 && _2._29.indexOf(_1) !== -1) {
          _2._29 = _2._29.filter(function (_109) {
            return _109 !== _1;
          });
          _40(_2);
        }
        _88();
      }
      function _187(_1) {
        if (_1 && _2._38.indexOf(_1) !== -1) {
          _2._38 = _2._38.filter(function (_109) {
            return _109 !== _1;
          });
          _40(_2);
        }
        _88();
      }
      function _55() {
        _31._143(_82);
        if (!_82) {
          _31._73(function () {
            if (_82) {
              _31._143(_82);
              _195();
              _82 = undefined;
            }
          }, 200);
        }
        _82 = _31._73(function () {
          _195();
          _82 = undefined;
        }, 100);
      }
      function _195() {
        var _204 = _8.querySelectorAll(
            ".highlight-excluded,.highlight-whitelisted,.highlight-tracked"
          ),
          _3;
        for (_3 = 0; _3 < _204.length; _3++) {
          _8.removeChild(_204[_3]);
        }
        _2._28.forEach(function (_1) {
          var _49 = _139(_1, _10);
          for (_3 = 0; _3 < _49.length; _3++) {
            _8.appendChild(_329(_1, _49[_3].getBoundingClientRect()));
          }
        });
        _2._29.forEach(function (_1) {
          var _49 = _139(_1, _10);
          for (_3 = 0; _3 < _49.length; _3++) {
            _8.appendChild(_330(_1, _49[_3].getBoundingClientRect()));
          }
        });
        _2._38.forEach(function (_1) {
          var _49 = _139(_1, _10);
          for (_3 = 0; _3 < _49.length; _3++) {
            _8.appendChild(_331(_1, _49[_3].getBoundingClientRect()));
          }
        });
      }
      function _139(_1, _20) {
        try {
          var _49 = [];
          _1.split(",").forEach(function (_1) {
            var _19 = _1.split(" > :document-fragment: > ", 1);
            _20.querySelectorAll(_19[0]).forEach(function (_5) {
              if (_19[1] && _5.shadowRoot) {
                _139(_19[1], _5.shadowRoot).forEach(function (_5) {
                  _49.push(_5);
                });
              } else {
                _49.push(_5);
              }
            });
          });
          return _49;
        } catch (_340) {
          _9("Could not get element from selector: " + ex.message);
        }
      }
      function _325(_28, _29, _38, _61, _324) {
        if (_65) {
          _9("Attempted to save CSS lists while previous save was in progress");
          return;
        }
        _65 = _61;
        _53 = _324;
        _312();
        _93.postMessage(
          {
            message: "MouseflowPrivacyTool_Save",
            blacklist: _28,
            whitelist: _29,
            tracked: _38,
          },
          _18
        );
        _31._73(function () {
          if (_65 === _61) {
            _9("Saving CSS lists timed out");
            if (_53) _53();
            _65 = undefined;
            _53 = undefined;
            _158(
              "Uh oh! We couldn't save your changes.<br><br>" +
                "Please log into Mouseflow and try again."
            );
          }
        }, 7500);
      }
      function _322(_5) {
        if (_5 == null) return null;
        try {
          var _101 = [];
          while (_5) {
            var _20 = _5.getRootNode ? _5.getRootNode() : _10;
            var _1 = _185(_5, _20);
            _101.unshift(_1);
            _5 = _20.host;
          }
          return _101.join(" > :document-fragment: > ");
        } catch (ex) {
          _9("Could not get element selector: " + ex.message);
          return null;
        }
      }
      function _342(_5, _20) {
        var _96 = _321(_5, _20);
        if (!_96) return null;
        if (_4._30(_5, _96)) return _96;
        var _44 = _20.querySelector(_96);
        var _54 = _5;
        var _19 = [];
        while (_54 && _54 !== _44) {
          var _21 = _172(_54, _20);
          if (_21.length === 0) _21.push(_202(_54));
          _19.unshift(_21);
          _54 = _54.parentNode;
        }
        _19.unshift(_96);
        return _167(_19, _20);
      }
      function _185(_5, _20, _19) {
        if (!_19) _19 = [];
        var _21 = _172(_5, _20);
        _19.unshift(_21);
        var _1 = _167(_19, _20);
        if (_1) return _1;
        if (_21.length === 0) {
          _21.push(_202(_5));
          _1 = _167(_19, _20);
          if (_1) return _1;
        }
        return _185(_5.parentNode, _20, _19);
      }
      function _167(_19, _20) {
        var _170 = _19.length > 1 ? _320.apply(this, _19) : _19[0];
        for (var _3 = 0; _3 < _170.length; _3++) {
          if (_20.querySelectorAll(_170[_3]).length === 1) return _170[_3];
        }
        return null;
      }
      function _321(_5, _20) {
        var _54 = _5;
        while (_54) {
          var _21 = _172(_54, _20);
          for (var _3 = 0; _3 < _21.length; _3++) {
            if (_20.querySelectorAll(_21[_3]).length === 1) return _21[_3];
          }
          _54 = _54.parentNode;
        }
        return null;
      }
      function _172(_5, _20) {
        if (_5 === _10.body) return ["body"];
        var _21 = [];
        var _74 = _5.parentNode;
        var _3;
        var _101 = _5.getAttribute("id");
        var _1 = "#" + _4._69(_101);
        if (
          _101 &&
          _20.querySelectorAll(_1).length === 1 &&
          !_4._180(_5, "data-mf-ignore-child-ids") &&
          _6.useIdSelectors
        )
          return [_1];
        var _115 = _5.getAttribute("name");
        _1 = '[name="' + _4._69(_115) + '"]';
        if (_115) {
          if (_20.querySelectorAll(_1).length === 1) return [_1];
          if (_74.querySelectorAll(_1).length === 1) _21.push(_1);
        }
        var _56 = _4._89(_5);
        for (_3 = 0; _3 < _56.length; _3++) {
          _1 = "." + _4._69(_56[_3]);
          if (_20.querySelectorAll(_1).length === 1) return [_1];
          if (_74.querySelectorAll(_1).length === 1) _21.push(_1);
        }
        for (_3 = 0; _3 < _56.length; _3++) {
          _1 = _4._69(_5.tagName.toLowerCase()) + "." + _4._69(_56[_3]);
          if (_20.querySelectorAll(_1).length === 1) return [_1];
          if (_74.querySelectorAll(_1).length === 1) _21.push(_1);
        }
        return _21;
      }
      function _202(_5) {
        var _1 = _4._69(_5.tagName.toLowerCase());
        if (_5.parentNode.querySelectorAll(_1).length === 1) return _1;
        var _189 = 0;
        var _128 = _5;
        while (_128) {
          if (_128.tagName === _5.tagName) _189++;
          _128 = _128.previousElementSibling;
        }
        _1 += ":nth-of-type(" + _189 + ")";
        return _1;
      }
      function _320() {
        var _21, _90, _86, _3;
        var _103 = 0;
        var _80 = arguments.length - 1;
        var _132 = false;
        var _114 = true;
        while (_103 < _80) {
          _90 = undefined;
          for (_3 = 0; _3 <= _103; _3++) {
            _90 = _90 ? _126(_90, arguments[_3], " > ") : arguments[_3];
          }
          _86 = undefined;
          for (_3 = arguments.length - 1; _3 >= _80; _3--) {
            _86 = _86 ? _126(arguments[_3], _86, " > ") : arguments[_3];
          }
          var _127 = _103 + 1 == _80 ? " > " : " ";
          _21 = _21 ? _21.concat(_126(_90, _86, _127)) : _126(_90, _86, _127);
          if (_114 && _132) {
            _80--;
            _132 = false;
            _114 = true;
          } else if (_114) {
            _80--;
            _132 = true;
            _114 = false;
          } else {
            _103++;
            if (_103 != _80) _80++;
            _132 = true;
            _114 = true;
          }
        }
        return _21;
      }
      function _126(_200, _184, _127) {
        var _21 = [];
        for (var _3 = 0; _3 < _200.length; _3++) {
          for (var _150 = 0; _150 < _184.length; _150++) {
            _21.push(_200[_3] + _127 + _184[_150]);
          }
        }
        return _21;
      }
      function _319() {
        var _13 = _0.localStorage.getItem("mf_privacyTool");
        return _13 ? _4._116(_13) : null;
      }
      function _40(_14) {
        _14 = _14 ? _4._118(_14) : "";
        _0.localStorage.setItem("mf_privacyTool", _14);
      }
      function _123() {
        _0.localStorage.removeItem("mf_privacyTool");
      }
      function _315() {
        _51.setAttribute("disabled", "");
        _51.setAttribute("original-html", _51.innerHTML);
        _51.innerHTML =
          "<i>&bull;</i> <i>&bull;</i> <i>&bull;</i> <i>&bull;</i>";
        _4._23(_51, "loading");
      }
      function _194() {
        _4._16(_51, "loading");
        _51.innerHTML = _51.getAttribute("original-html");
        _51.removeAttribute("original-html");
        _51.removeAttribute("disabled");
      }
      function _88() {
        _192.innerHTML = _338(_2._28);
        _205.innerHTML = _335(_2._29);
        _190.innerHTML = _332(_2._38);
        _68.innerHTML = _157(_2._28, _2._29, _2._38);
        _4._16(_68, "red");
      }
      function _328(_160) {
        if (!_130) return;
        _130.innerHTML = _160;
        _4._23(_130, "red");
      }
      function _158(_160) {
        if (!_68) return;
        _68.innerHTML = _160;
        _4._23(_68, "red");
      }
      function _312() {
        if (!_68) return;
        _68.innerHTML = _157(_2._28, _2._29, _2._38);
        _4._16(_68, "red");
      }
      function _318(_2) {
        var _12 = _10.createElement("div");
        _12.className = "privacy-tool is-loading";
        _12.innerHTML = _333(_2);
        if (_2._59) _12.className += " tool-closed";
        var _48 = _10.createElement("style");
        _48.type = "text/css";
        _48.innerHTML = _155();
        _12.appendChild(_48);
        return _12;
      }
      function _327() {
        var _12 = _10.createElement("div");
        _12.className = "highlight-box";
        return _12;
      }
      function _329(_1, _24) {
        var _12 = _10.createElement("div");
        _12.className = "highlight-box highlight-excluded";
        _12.setAttribute("data-target", _1);
        _12.style.left = _24.left + _0.pageXOffset + "px";
        _12.style.top = _24.top + _0.pageYOffset + "px";
        _12.style.width = _24.width + "px";
        _12.style.height = _24.height + "px";
        return _12;
      }
      function _330(_1, _24) {
        var _12 = _10.createElement("div");
        _12.className = "highlight-box highlight-whitelisted";
        _12.setAttribute("data-target", _1);
        _12.style.left = _24.left + _0.pageXOffset + "px";
        _12.style.top = _24.top + _0.pageYOffset + "px";
        _12.style.width = _24.width + "px";
        _12.style.height = _24.height + "px";
        return _12;
      }
      function _331(_1, _24) {
        var _12 = _10.createElement("div");
        _12.className = "highlight-box highlight-tracked";
        _12.setAttribute("data-target", _1);
        _12.style.left = _24.left + _0.pageXOffset + "px";
        _12.style.top = _24.top + _0.pageYOffset + "px";
        _12.style.width = _24.width + "px";
        _12.style.height = _24.height + "px";
        return _12;
      }
      function _333(_2) {
        return (
          '<form action="#" id="mf_privacy_tool">' +
          '<link rel="stylesheet" href="https://use.typekit.net/eum4oaj.css">' +
          _334(_2) +
          _336(_2) +
          "</form>"
        );
      }
      function _334(_2) {
        return (
          '<div class="step step-block' +
          (_2._59 ? " fade-in" : "") +
          '">' +
          '<div class="widget-header">' +
          '<div class="widget-text">Open privacy tool</div>' +
          '<div class="widget-toggle">' +
          '<a href="#" class="btn-arrow btn-arrow--up mf-tool-toggle"></a>' +
          "</div>" +
          "</div>" +
          "</div>"
        );
      }
      function _336() {
        return (
          '<div class="tool-container' +
          (_2._59 ? "" : " fade-in") +
          '">' +
          '<div class="tool-header">' +
          '<svg class="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 168.56 32" class=""><defs></defs><g data-name="Layer 2"><g data-name="Layer 1"><path class="logo-path" d="M35.31,16c0-2.75-2.2-5.18-5.77-6.86.33-3.92-.67-7-3.06-8.43S20.88,0,17.65,2.28l-.31-.21C14.09-.1,11.07-.58,8.83.71S5.44,5.22,5.77,9.14C2.21,10.82,0,13.25,0,16s2.21,5.19,5.78,6.87a2.43,2.43,0,0,0,0,.38c-.26,3.89.84,6.75,3.08,8a5.4,5.4,0,0,0,2.75.71,11,11,0,0,0,6.08-2.28A11,11,0,0,0,23.73,32a5.37,5.37,0,0,0,2.75-.71c2.25-1.29,3.34-4.15,3.09-8l0-.38C33.1,21.19,35.31,18.76,35.31,16ZM23.75,1.94a3.49,3.49,0,0,1,1.77.44c1.48.85,2.27,3,2.14,6a27.56,27.56,0,0,0-4.91-1.2,27.61,27.61,0,0,0-3.49-3.64A8.7,8.7,0,0,1,23.75,1.94ZM7.86,10.36a24,24,0,0,1,3-.9c-.41.62-.82,1.27-1.2,1.94s-.76,1.36-1.09,2A22.4,22.4,0,0,1,7.86,10.36ZM21.71,23a32.55,32.55,0,0,1-4.05.24A32.6,32.6,0,0,1,13.6,23c-.95-.12-1.85-.28-2.7-.47a22.61,22.61,0,0,1-3-.91,23.19,23.19,0,0,1,.73-3.08c.26-.85.58-1.71.94-2.57a33.42,33.42,0,0,1,1.81-3.65A31.45,31.45,0,0,1,13.59,9a26.92,26.92,0,0,1,1.76-2.11,23.13,23.13,0,0,1,2.3-2.18A22.26,22.26,0,0,1,20,6.87c.61.66,1.2,1.36,1.77,2.11A33,33,0,0,1,24,12.36,33.42,33.42,0,0,1,25.77,16c.36.86.68,1.72.94,2.57a21.79,21.79,0,0,1,.74,3.08,23.22,23.22,0,0,1-3,.91C23.56,22.76,22.66,22.92,21.71,23Zm-4.05,2.17c.78,0,1.55,0,2.3-.08a22,22,0,0,1-2.3,2.18,21.08,21.08,0,0,1-2.31-2.18C16.1,25.18,16.87,25.21,17.66,25.21Zm9.05-11.77q-.5-1-1.08-2c-.39-.67-.79-1.31-1.21-1.94a24,24,0,0,1,3,.9A22.4,22.4,0,0,1,26.71,13.44ZM9.79,2.38a3.53,3.53,0,0,1,1.8-.44,8.61,8.61,0,0,1,4.46,1.59,27.07,27.07,0,0,0-3.49,3.64A26.32,26.32,0,0,0,7.65,8.38C7.52,5.42,8.31,3.23,9.79,2.38ZM1.93,16c0-1.84,1.57-3.55,4.12-4.85A26.55,26.55,0,0,0,7.46,16a26.91,26.91,0,0,0-1.41,4.85C3.43,19.49,1.93,17.72,1.93,16Zm9.64,14.06a3.55,3.55,0,0,1-1.78-.43c-1.51-.87-2.28-3.05-2.13-6a26.22,26.22,0,0,0,4.9,1.2,27.17,27.17,0,0,0,3.49,3.65A8.68,8.68,0,0,1,11.57,30.06Zm14-.43c-1.48.85-3.76.44-6.26-1.15a26.56,26.56,0,0,0,3.49-3.65,26.33,26.33,0,0,0,4.91-1.2C27.8,26.58,27,28.76,25.52,29.63Zm3.74-8.77A27.14,27.14,0,0,0,27.85,16a26.55,26.55,0,0,0,1.41-4.86c2.55,1.3,4.13,3,4.13,4.85S31.89,19.49,29.26,20.86Z"></path><path class="logo-path" d="M17.66,10.22a28,28,0,0,0-4.78,10l4.78-2.61,4.78,2.61a29,29,0,0,0-2-5.32A29,29,0,0,0,17.66,10.22Z"></path><path class="logo-path" d="M22.44,20.19l-4.78-2.61-4.78,2.61a28,28,0,0,1,4.78-10,29,29,0,0,1,2.81,4.65A29,29,0,0,1,22.44,20.19Z"></path><path class="logo-path" d="M47.62,22.09V9.91H50l.36,1.53a7.07,7.07,0,0,1,4.17-1.53,3.45,3.45,0,0,1,3.26,1.67,7.58,7.58,0,0,1,4.37-1.67Q66,9.91,66,14.54v7.55H62.94V14.42c0-1.35-.57-2-1.72-2A4.14,4.14,0,0,0,58.36,14v8.12H55.28V14.46c0-1.38-.57-2.07-1.69-2.07A4,4,0,0,0,50.69,14v8.12Z"></path><path class="logo-path" d="M67.93,16q0-6.21,6.15-6.21T80.23,16q0,6.2-6.15,6.2T67.93,16Zm6.15,3.77q3.08,0,3.08-3.82t-3.08-3.72Q71,12.23,71,16T74.08,19.77Z"></path><path class="logo-path" d="M93.58,9.91V22.09H91.17l-.37-1.55a7.65,7.65,0,0,1-4.45,1.55q-4.21,0-4.21-4.53V9.91h3.08v7.68a1.78,1.78,0,0,0,2,2,4.91,4.91,0,0,0,3.28-1.54V9.91Z"></path><path class="logo-path" d="M96.79,21.51V19a12.63,12.63,0,0,0,4.69.81c1.33,0,2-.42,2-1.27s-.45-1.17-1.34-1.17h-2.2c-2.48,0-3.72-1.23-3.72-3.71S98,9.79,101.63,9.79a13.06,13.06,0,0,1,4.33.7V13a11.77,11.77,0,0,0-4.41-.81c-1.66,0-2.49.42-2.49,1.27s.48,1.17,1.45,1.17h2c2.71,0,4.07,1.23,4.07,3.71s-1.73,3.83-5.18,3.83A13.94,13.94,0,0,1,96.79,21.51Z"></path><path class="logo-path" d="M119.58,17.2h-8q0,2.46,4,2.46a20,20,0,0,0,3.69-.35v2.44a20.57,20.57,0,0,1-4.16.34q-6.62,0-6.62-6.23,0-6,6.07-5.95T119.58,17.2Zm-8-2.26h5.09c.1-1.75-.71-2.62-2.44-2.62S111.74,13.19,111.6,14.94Z"></path><path class="logo-path" d="M122.2,22.15V9.31q0-4.43,5.48-4.42a7.84,7.84,0,0,1,2.72.46V7.79a7.29,7.29,0,0,0-2.73-.46c-1.6,0-2.39.86-2.39,2.58h3.65v2.43h-3.65v9.77Z"></path><path class="logo-path" d="M135.07,5.49v16.6H132V5.49Z"></path><path class="logo-path" d="M137.25,16q0-6.21,6.16-6.21T149.56,16q0,6.2-6.15,6.2T137.25,16Zm6.16,3.77q3.08,0,3.07-3.82t-3.07-3.72c-2.06,0-3.08,1.24-3.08,3.72S141.35,19.77,143.41,19.77Z"></path><path class="logo-path" d="M150.58,9.91h3.1l1.81,8.25,2.71-8.25h2.63l2.93,8.25,1.6-8.25h3.2l-3.29,12.18h-2.89l-2.87-8.41-2.9,8.41h-2.94Z"></path></g></g></svg>' +
          '<div class="tool-toggle">' +
          '<div class="tool-toggle-text">' +
          "Hide to navigate" +
          "</div>" +
          '<div class="tool-toggle-icon">' +
          '<a href="#" class="btn-arrow btn-arrow--down mf-tool-toggle"></a>' +
          "</div>" +
          "</div>" +
          '<div class="tool-close">' +
          '<div class="tool-toggle-text">' +
          "Close" +
          "</div>" +
          '<div class="tool-toggle-icon">' +
          '<a href="#" class="btn-cross mf-tool-close"></a>' +
          "</div>" +
          "</div>" +
          "</div>" +
          '<div class="tool-content">' +
          '<ul class="tool-menu">' +
          '<li class="tool-menu-item mf-tool-exclude' +
          (_2._36 === "exclude" ? " active" : "") +
          '">' +
          "Excluded content" +
          "</li>" +
          '<li class="tool-menu-item mf-tool-whitelist' +
          (_2._36 === "whitelist" ? " active" : "") +
          '">' +
          "Whitelisted fields" +
          "</li>" +
          '<li class="tool-menu-item mf-tool-track' +
          (_2._36 === "track" ? " active" : "") +
          '">' +
          "Tracked elements" +
          "</li>" +
          "</ul>" +
          '<div class="tool-exclude' +
          (_2._36 === "exclude" ? " active" : "") +
          '">' +
          "<h2>Exclude content from appearing in Mouseflow</h2>" +
          "<p>" +
          "To get started, just click the element(s) or content you wish to exclude. " +
          "This will add the necessary CSS selectors to be blocked in the list below." +
          "</p>" +
          "<p>" +
          'When you\'re finished, click "Hide to navigate" to browse to another page to exclude additional content, or click "Save and close" to keep your changes.' +
          "</p>" +
          "<p>" +
          'For more details and best practices, read our <a href="#" class="js-external-link green" data-link-url="https://help.mouseflow.com/articles/4263776">Support Guide</a>.' +
          "</p>" +
          "<h3>Excluded content</h3>" +
          "<div>" +
          "<output></output>" +
          "</div>" +
          "</div>" +
          '<div class="tool-whitelist' +
          (_2._36 === "whitelist" ? " active" : "") +
          '">' +
          "<h2>Whitelist input fields</h2>" +
          "<p>" +
          "You can whitelist any input field or text area, simply by clicking the field(s) on the page. " +
          "This will let Mouseflow record input in that field." +
          "</p>" +
          "<p>" +
          'When you\'re finished, click "Hide to navigate" to browse to another page to exclude additional content, or click "Save and close" to keep your changes.' +
          "</p>" +
          "<p>" +
          'For more details and best practices, read our <a href="#" class="js-external-link green" data-link-url="https://help.mouseflow.com/articles/4263776">Support Guide</a>.' +
          "</p>" +
          "<h3>Whitelisted fields</h3>" +
          "<div>" +
          "<output></output>" +
          "</div>" +
          "</div>" +
          '<div class="tool-track' +
          (_2._36 === "track" ? " active" : "") +
          '">' +
          "<h2>Tracked elements</h2>" +
          "<p>" +
          "When viewing a heatmap, most of your links will include a box that shows additional metrics(clicks, hovers, etc.).In some cases, these boxes will not appear." +
          "</p>" +
          "<p>" +
          "If you've found such an element, you can select it here. That will ensure the additional metrics are shown in your heatmaps." +
          "</p>" +
          "<p>" +
          'When you\'re finished, click "Hide to navigate" to browse to another page to exclude additional content, or click "Save and close" to keep your changes.' +
          "</p>" +
          "<p>" +
          'For more details and best practices, read our <a href="#" class="js-external-link green" data-link-url="https://help.mouseflow.com/articles/4263776">Support Guide</a>.' +
          "</p>" +
          "<h3>Tracked elements</h3>" +
          "<div>" +
          "<output></output>" +
          "</div>" +
          "</div>" +
          '<div class="tool-status">' +
          '<div class="tool-status-text">' +
          _157(_2._28, _2._29, _2._38) +
          "</div>" +
          '<div class="tool-status-buttons">' +
          '<button type="submit" class="btn-widget">Save and close</button>' +
          '<a href="#" class="green bold mf-tool-close">Close Privacy Tool</a>' +
          "</div>" +
          "</div>" +
          '<div class="tool-loading">' +
          '<h2 class="loading">Loading the Privacy Tool<i>.</i><i>.</i><i>.</i></h2>' +
          "</div>" +
          '<div class="tool-message">' +
          "<h3>Browser window is to small to load the Privacy Tool</h3>" +
          "<p>To use Mouseflow's Privacy Tool, you need to view the page in a larger browser window.</p>" +
          "</div>" +
          "</div>" +
          "</div>"
        );
      }
      function _338(_19) {
        return _19
          .map(function (_1) {
            return (
              '<div class="tm-tag" data-target="' +
              _4._72(_1) +
              '">' +
              _4._72(_1) +
              '<a href="#" class="btn-cross mf-remove-excluded"></a>' +
              "</div>"
            );
          })
          .join("");
      }
      function _335(_19) {
        return _19
          .map(function (_1) {
            return (
              '<div class="tm-tag" data-target="' +
              _4._72(_1) +
              '">' +
              _4._72(_1) +
              '<a href="#" class="btn-cross mf-remove-whitelisted"></a>' +
              "</div>"
            );
          })
          .join("");
      }
      function _332(_19) {
        return _19
          .map(function (_1) {
            return (
              '<div class="tm-tag" data-target="' +
              _4._72(_1) +
              '">' +
              _4._72(_1) +
              '<a href="#" class="btn-cross mf-remove-tracked"></a>' +
              "</div>"
            );
          })
          .join("");
      }
      function _157(_28, _29, _236) {
        return (
          "<p>You have:</p>" +
          "<p>" +
          '&nbsp;&bull; excluded <i class="emphasis"> ' +
          _28.length +
          "</i> " +
          (_28.length === 1 ? "element" : "elements") +
          "<br>" +
          '&nbsp;&bull; whitelisted <i class="emphasis">' +
          _29.length +
          "</i> input " +
          (_29.length === 1 ? "field" : "fields") +
          "<br>" +
          '&nbsp;&bull; tracked <i class="emphasis">' +
          _236.length +
          "</i> input " +
          (_236.length === 1 ? "element" : "elements") +
          "</p>"
        );
      }
      function _291() {
        var _237 = new CSSStyleSheet();
        _237.replace(_155());
        return _237;
      }
      function _155() {
        return (
          ":root {" +
          "--deep-ocean: #08163c;" +
          "--dusty-cloud: #f7f9fc;" +
          "--dark-border: #bbc8e0;" +
          "--lighter-navy: #d4dbe3;" +
          "--dark-mode: #10172D;" +
          "--serious-business: #0b65e3;" +
          "--light-blue: #66A7FD;" +
          "--subtle-warmth: #7162e3;" +
          "--lighter-aqua: #ebf2fa;" +
          "--dusty-cloud-darker: #E4E9F2;" +
          "--deep-ocean-light: #A1B2D3;" +
          "--redwine-vibes: #cd575f;" +
          "}" +
          ".mf-highlight {" +
          "cursor: pointer !important;" +
          "}" +
          ".mf-privacy-tool-opened iframe {" +
          "pointer-events: none;" +
          "}" +
          "#mouseflow {" +
          "font-weight: 300;" +
          "font-family: 'museo-sans';" +
          "}" +
          "#mouseflow .highlight-box {" +
          "background-color: #add8e6;" +
          "border: 2px dotted #808080;" +
          "position: absolute;" +
          "border-radius: 2px;" +
          "z-index: 2147483646;" +
          "cursor: pointer;" +
          "pointer-events: none;" +
          "opacity: 0.5;" +
          "-webkit-transition: opacity .075s linear;" +
          "transition: opacity .075s linear;" +
          "}" +
          "#mouseflow .highlight-box.hidden," +
          "#mouseflow .tool-closed .highlight-box {" +
          "opacity: 0;" +
          "}" +
          "#mouseflow .highlight-box.highlight-excluded {" +
          "background-color: #ffb6c1;" +
          "pointer-events: initial;" +
          "}" +
          "#mouseflow .highlight-box.highlight-whitelisted {" +
          "background-color: #90ee90;" +
          "pointer-events: initial;" +
          "}" +
          "#mouseflow .highlight-box.highlight-tracked {" +
          "background-color: orange;" +
          "pointer-events: initial;" +
          "}" +
          "#mouseflow .tool-closed .highlight-box.highlight-excluded," +
          "#mouseflow .tool-closed .highlight-box.highlight-whitelisted," +
          "#mouseflow .tool-closed .highlight-box.highlight-tracked {" +
          "pointer-events: none;" +
          "}" +
          "#mouseflow .btn-widget {" +
          "background: var(--serious-business);" +
          "}" +
          "#mouseflow .widget-header {" +
          "background: var(--dusty-cloud);" +
          "}" +
          "#mouseflow .widget-text," +
          "#mouseflow .btn-arrow," +
          "#mouseflow .btn-cross {" +
          "color: var(--deep-ocean);" +
          "}" +
          "#mouseflow .btn-widget {" +
          "color: white;" +
          "}" +
          "#mouseflow .tm-tag {" +
          "margin: 7px 7px 0 0;" +
          "padding: 7px;" +
          "display: inline-block;" +
          "border-radius: 8px;" +
          "border: 1px solid var(--dark-border);" +
          "background-color: var(--dusty-cloud);" +
          "color: var(--deep-ocean);" +
          "font-size: 13px;" +
          "}" +
          "#mouseflow .step {" +
          "visibility: hidden;" +
          "opacity: 0;" +
          "position: fixed;" +
          "bottom: 30px;" +
          "right: 30px;" +
          "z-index: 2147483647;" +
          "width: 300px;" +
          "border-radius: 8px;" +
          "border: 1px solid var(--deep-ocean);" +
          "overflow: hidden;" +
          "}" +
          "#mouseflow a:hover {" +
          "text-decoration: underline;" +
          "}" +
          "#mouseflow h2 {" +
          "font-size: 21px;" +
          "font-weight: 700;" +
          "line-height: 1.4em;" +
          "margin-bottom: 6px;" +
          "}" +
          "#mouseflow h3 {" +
          "font-size: 16px;" +
          "font-weight: 700;" +
          "line-height: 1.4em;" +
          "}" +
          "#mouseflow p {" +
          "margin-bottom: 8px;" +
          "line-height: 1.4em;" +
          "}" +
          "#mouseflow .green {" +
          "color: var(--deep-ocean);" +
          "}" +
          "#mouseflow .red {" +
          "color: var(--redwine-vibes);" +
          "}" +
          "#mouseflow .emphasis {" +
          "color: var(--subtle-warmth);" +
          "font-weight: 700;" +
          "}" +
          "#mouseflow .bold {" +
          "font-weight: 700;" +
          "}" +
          "#mouseflow .tool-container {" +
          "visibility: visible;" +
          "opacity: 0;" +
          "position: fixed;" +
          "bottom: 0;" +
          "left: 0;" +
          "width: 100%;" +
          "height: 350px;" +
          "max-height: 40%;" +
          "overflow: hidden;" +
          "background-color: white;" +
          "box-shadow: 0 0 6px var(--deep-ocean-light);" +
          "z-index: 2147483647;" +
          "}" +
          "#mouseflow .tool-header {" +
          "background-color: var(--dusty-cloud);" +
          "height: 58px;" +
          "border: 1px solid var(--dusty-cloud-darker);" +
          "}" +
          "#mouseflow .logo {" +
          "display: inline;" +
          "height: 30px;" +
          "margin: 14px 10px;" +
          "fill: black;" +
          "}" +
          "#mouseflow .tool-toggle," +
          "#mouseflow .tool-close {" +
          "float: right;" +
          "padding: 18px 24px;" +
          "}" +
          "#mouseflow .is-loading .tool-close {" +
          "display: block;" +
          "}" +
          "#mouseflow .is-loading .tool-toggle," +
          "#mouseflow .tool-close {" +
          "display: none;" +
          "}" +
          "#mouseflow .tool-toggle-text {" +
          "display: inline-block;" +
          "color: var(--deep-ocean);" +
          "font-size: 16px;" +
          "}" +
          "#mouseflow .tool-toggle-icon {" +
          "width: 23px;" +
          "display: inline-block;" +
          "position: relative;" +
          "top: 0px;" +
          "}" +
          "#mouseflow .tool-close .tool-toggle-icon {" +
          "top: 4px;" +
          "}" +
          "#mouseflow .tool-content {" +
          "height: calc(100% - 58px);" +
          "}" +
          "#mouseflow .tool-menu {" +
          "width: 15%;" +
          "height: 100%;" +
          "float: left;" +
          "}" +
          "#mouseflow .tool-menu-item {" +
          "background-color: var(--dusty-cloud);" +
          "color: var(--deep-ocean);" +
          "cursor: pointer;" +
          "height: 40px;" +
          "padding: 12px;" +
          "}" +
          "#mouseflow .tool-menu-item.active {" +
          "position: relative;" +
          "background-color: var(--lighter-navy);" +
          "color: var(--deep-ocean);" +
          "cursor: default;" +
          "}" +
          "#mouseflow .tool-exclude," +
          "#mouseflow .tool-whitelist," +
          "#mouseflow .tool-track {" +
          "display: none;" +
          "width: 70%;" +
          "height: 100%;" +
          "float: left;" +
          "color: var(--deep-ocean);" +
          "overflow-y: auto;" +
          "overflow-x: hidden;" +
          "padding: 10px 20px;" +
          "}" +
          "#mouseflow .tool-exclude p, #mouseflow .tool-whitelist p, #mouseflow .tool-track p {" +
          "color: black;" +
          "}" +
          "#mouseflow .tool-exclude.active," +
          "#mouseflow .tool-whitelist.active," +
          "#mouseflow .tool-track.active {" +
          "display: block;" +
          "}" +
          "#mouseflow .tool-exclude::-webkit-scrollbar," +
          "#mouseflow .tool-whitelist::-webkit-scrollbar," +
          "#mouseflow .tool-track::-webkit-scrollbar {" +
          "width: 8px;" +
          "}" +
          "#mouseflow .tool-exclude::-webkit-scrollbar-track," +
          "#mouseflow .tool-whitelist::-webkit-scrollbar-track," +
          "#mouseflow .tool-track::-webkit-scrollbar-track {" +
          "border-radius: 10px;" +
          "background-color: #F5F5F5;" +
          "-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);" +
          "}" +
          "#mouseflow .tool-exclude::-webkit-scrollbar-thumb," +
          "#mouseflow .tool-whitelist::-webkit-scrollbar-thumb," +
          "#mouseflow .tool-track::-webkit-scrollbar-thumb {" +
          "border-radius: 10px;" +
          "background-color: #a7a7a7;" +
          "-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);" +
          "}" +
          "#mouseflow .tool-status {" +
          "width: 15%;" +
          "background-color: var(--dusty-cloud);" +
          "color: var(--deep-ocean);" +
          "height: 100%;" +
          "float: left;" +
          "position: relative;" +
          "}" +
          "#mouseflow .tool-status-text {" +
          "font-size: 16px;" +
          "font-weight: 300;" +
          "text-align: left;" +
          "padding: 0 15px;" +
          "position: absolute;" +
          "top: 40px;" +
          "}" +
          "#mouseflow .tool-status-buttons {" +
          "width: 100%;" +
          "text-align: center;" +
          "position: absolute;" +
          "padding: 0 30px;" +
          "bottom: 40px;" +
          "}" +
          "#mouseflow .tool-loading {" +
          "width: 100%;" +
          "height: calc(100% - 58px);" +
          "background-color: white;" +
          "color: rgb(71, 64, 62);" +
          "position: absolute;" +
          "top: 58px;" +
          "z-index: 2;" +
          "visibility: hidden;" +
          "opacity: 0;" +
          "-webkit-animation: fadeOut .3s linear;" +
          "animation: fadeOut .3s linear;" +
          "}" +
          "#mouseflow .is-loading .tool-loading {" +
          "visibility: visible;" +
          "opacity: 1;" +
          "-webkit-animation: fadeIn .3s linear;" +
          "animation: fadeIn .3s linear;" +
          "}" +
          "#mouseflow .tool-loading h2 {" +
          "position: absolute;" +
          "left: 50%;" +
          "top: 50%;" +
          "-webkit-transform: translate(-50%, -50%);" +
          "-ms-transform: translate(-50%, -50%);" +
          "transform: translate(-50%, -50%);" +
          "}" +
          "#mouseflow .widget-header {" +
          "color: #fff;" +
          "padding: 12px 15px;" +
          "vertical-align: middle;" +
          "overflow: hidden;" +
          "position: relative;" +
          "z-index: 1;" +
          "-webkit-transition: opacity .3s linear;" +
          "transition: opacity .3s linear;" +
          "}" +
          "#mouseflow .widget-header:hover {" +
          "background-color: var(--lighter-aqua);" +
          "}" +
          "#mouseflow .widget-text {" +
          "font-size: 16px;" +
          "line-height: 20px;" +
          "width: 245px;" +
          "display: inline-block;" +
          "vertical-align: middle;" +
          "}" +
          "#mouseflow .widget-toggle {" +
          "width: 20px;" +
          "display: inline-block;" +
          "vertical-align: middle;" +
          "margin: 0;" +
          "}" +
          "#mouseflow .btn-arrow," +
          "#mouseflow .btn-cross {" +
          "float: right;" +
          "z-index: 10;" +
          "line-height: .5;" +
          "}" +
          "#mouseflow .tool-toggle-icon .btn-arrow," +
          "#mouseflow .tool-toggle-icon .btn-cross {" +
          "font-size: 23px;" +
          "}" +
          "#mouseflow .widget-toggle .btn-arrow {" +
          "font-size: 23px;" +
          "}" +
          "#mouseflow .tm-tag .btn-cross {" +
          "margin: 3px 0 0 7px;" +
          "font-weight: 700;" +
          "font-size: 16px;" +
          "}" +
          "#mouseflow .btn-arrow--up {" +
          "-webkit-transform: rotate(-90deg) scale(1.5, 1.5);" +
          "-ms-transform: rotate(-90deg) scale(1.5, 1.5);" +
          "transform: rotate(-90deg) scale(1.5, 1.5);" +
          "}" +
          "#mouseflow .btn-arrow--down {" +
          "-webkit-transform: rotate(+90deg) scale(1.5, 1.5);" +
          "-ms-transform: rotate(+90deg) scale(1.5, 1.5);" +
          "transform: rotate(+90deg) scale(1.5, 1.5);" +
          "}" +
          "#mouseflow .widget-toggle .btn-arrow:before {" +
          'content: "";' +
          "display: inline;" +
          "position: absolute;" +
          "top: -185px;" +
          "left: -15px;" +
          "right: -15px;" +
          "bottom: -15px;" +
          "display: block;" +
          "}" +
          "#mouseflow .tool-toggle-icon .btn-arrow:before {" +
          'content: "";' +
          "display: inline;" +
          "position: absolute;" +
          "top: -10px;" +
          "left: -15px;" +
          "right: -15px;" +
          "bottom: -100px;" +
          "display: block;" +
          "}" +
          "#mouseflow .tool-toggle-icon .btn-cross:before {" +
          'content: "";' +
          "display: inline;" +
          "position: absolute;" +
          "top: -25px;" +
          "left: -150px;" +
          "right: -20px;" +
          "bottom: -20px;" +
          "display: block;" +
          "}" +
          "#mouseflow .btn-arrow:after {" +
          'content: "\\203a";' +
          "display: inline;" +
          "}" +
          "#mouseflow .btn-cross:after {" +
          'content: "\\00d7";' +
          "display: inline;" +
          "top: -4px;" +
          "position: relative;" +
          "}" +
          "#mouseflow .tm-tag .btn-cross:after {" +
          "top: 0px;" +
          "}" +
          "#mouseflow .btn-arrow:hover," +
          "#mouseflow .btn-cross:hover {" +
          "text-decoration: none;" +
          "}" +
          "#mouseflow .btn-widget {" +
          "width: 100%;" +
          "height: 38px;" +
          "border: none;" +
          "border-radius: 8px;" +
          "overflow: hidden;" +
          "position: relative;" +
          "z-index: 1;" +
          "cursor: pointer;" +
          "display: block;" +
          "padding: 10px;" +
          "font-size: 16px;" +
          "font-family: inherit;" +
          "font-weight: bold;" +
          "text-align: center;" +
          "outline: none;" +
          "color: var(--dusty-cloud);" +
          "margin-bottom: 10px;" +
          "-webkit-transition: background-color .3s linear;" +
          "transition: background-color .3s linear;" +
          "}" +
          "#mouseflow .btn-widget:hover {" +
          "text-decoration: none;" +
          "background-color: var(--light-blue);" +
          "}" +
          "#mouseflow .privacy-tool {" +
          "height: 350px;" +
          "max-height: 40%;" +
          "-webkit-transition: height .5s ease-out;" +
          "transition: height .5s ease-out;" +
          "}" +
          "#mouseflow .privacy-tool.tool-closed {" +
          "height: 0;" +
          "}" +
          "#mouseflow .tool-closed .step {" +
          "visibility: visible;" +
          "}" +
          "#mouseflow .tool-closed .tool-container {" +
          "visibility: hidden;" +
          "}" +
          "#mouseflow .step.fade-in," +
          "#mouseflow .tool-container.fade-in {" +
          "-webkit-animation: fadeUpIn .8s cubic-bezier(0, 0, 0, 1) both;" +
          "animation: fadeUpIn .8s cubic-bezier(0, 0, 0, 1) both;" +
          "}" +
          "#mouseflow .step.fade-out," +
          "#mouseflow .tool-container.fade-out {" +
          "-webkit-animation: fadeDownOut .8s cubic-bezier(0, 0, 0, 1);" +
          "animation: fadeDownOut .8s cubic-bezier(0, 0, 0, 1);" +
          "}" +
          "#mouseflow .btn-widget.loading {" +
          "cursor: default;" +
          "}" +
          "#mouseflow .btn-widget.loading:before {" +
          "display: none;" +
          "}" +
          "#mouseflow .loading i {" +
          "animation-name: blink;" +
          "animation-duration: 1.4s;" +
          "animation-iteration-count: infinite;" +
          "animation-fill-mode: both;" +
          "}" +
          "#mouseflow .loading i:nth-child(2) {" +
          "animation-delay: .2s;" +
          "}" +
          "#mouseflow .loading i:nth-child(3) {" +
          "animation-delay: .4s;" +
          "}" +
          "#mouseflow .loading i:nth-child(4) {" +
          "animation-delay: .6s;" +
          "}" +
          "#mouseflow .tool-message {" +
          "width: 100%;" +
          "height: calc(100% - 58px);" +
          "background-color: white;" +
          "color: rgb(71, 64, 62);" +
          "position: absolute;" +
          "top: 58px;" +
          "z-index: 3;" +
          "padding: 20px;" +
          "overflow-y: auto;" +
          "overflow-x: hidden;" +
          "visibility: hidden;" +
          "opacity: 0;" +
          "-webkit-animation: fadeOut .3s linear;" +
          "animation: fadeOut .3s linear;" +
          "}" +
          "#mouseflow .tool-message h3 {" +
          "margin-bottom: 20px;" +
          "}" +
          "@media (max-width: 1300px) {" +
          "#mouseflow .tool-exclude," +
          "#mouseflow .tool-whitelist," +
          "#mouseflow .tool-track {" +
          "width: 60%;" +
          "}" +
          "#mouseflow .tool-status {" +
          "width: 25%;" +
          "}" +
          "#mouseflow .tool-status-buttons {" +
          "bottom: 10px;" +
          "}" +
          "}" +
          "@media (max-width: 850px) {" +
          "#mouseflow .tool-menu-item {" +
          "height: 56px;" +
          "}" +
          "#mouseflow .tool-status-text {" +
          "font-size: 14px;" +
          "}" +
          "#mouseflow .btn-widget {" +
          "font-size: 12px;" +
          "}" +
          "#mouseflow a.mf-tool-close {" +
          "font-size: 12px;" +
          "}" +
          "}" +
          "@media (max-height: 800px) {" +
          "#mouseflow .tool-status-text {" +
          "top: 20px;" +
          "}" +
          "#mouseflow .tool-status-buttons {" +
          "bottom: 20px;" +
          "}" +
          "}" +
          "@media (max-height: 650px) {" +
          "#mouseflow .tool-status-text {" +
          "font-size: 14px;" +
          "}" +
          "}" +
          "@media (max-width: 650px), (max-height: 600px) {" +
          "#mouseflow .tool-message {" +
          "visibility: visible;" +
          "opacity: 1;" +
          "-webkit-animation: fadeIn .3s linear;" +
          "animation: fadeIn .3s linear;" +
          "}" +
          "}" +
          "@-webkit-keyframes fadeUpIn {" +
          "0% {" +
          "-webkit-transform: translateY(50px);" +
          "-ms-transform: translateY(50px);" +
          "transform: translateY(50px);" +
          "opacity: 0;" +
          "}" +
          "100% {" +
          "-webkit-transform: translateY(0);" +
          "-ms-transform: translateY(0);" +
          "transform: translateY(0);" +
          "opacity: 1;" +
          "}" +
          "}" +
          "@keyframes fadeUpIn {" +
          "0% {" +
          "-webkit-transform: translateY(50px);" +
          "-ms-transform: translateY(50px);" +
          "transform: translateY(50px);" +
          "opacity: 0;" +
          "}" +
          "100% {" +
          "-webkit-transform: translateY(0);" +
          "-ms-transform: translateY(0);" +
          "transform: translateY(0);" +
          "opacity: 1;" +
          "}" +
          "}" +
          "@-webkit-keyframes fadeDownOut {" +
          "0% {" +
          "visibility: visible;" +
          "-webkit-transform: translateY(0);" +
          "-ms-transform: translateY(0);" +
          "transform: translateY(0);" +
          "opacity: 1;" +
          "}" +
          "100% {" +
          "visibility: hidden;" +
          "-webkit-transform: translateY(50px);" +
          "-ms-transform: translateY(50px);" +
          "transform: translateY(50px);" +
          "opacity: 0;" +
          "}" +
          "}" +
          "@keyframes fadeDownOut {" +
          "0% {" +
          "visibility: visible;" +
          "-webkit-transform: translateY(0);" +
          "-ms-transform: translateY(0);" +
          "transform: translateY(0);" +
          "opacity: 1;" +
          "}" +
          "100% {" +
          "visibility: hidden;" +
          "-webkit-transform: translateY(50px);" +
          "-ms-transform: translateY(50px);" +
          "transform: translateY(50px);" +
          "opacity: 0;" +
          "}" +
          "}" +
          "@-webkit-keyframes fadeIn {" +
          "0% {" +
          "visibility: visible;" +
          "opacity: 0;" +
          "}" +
          "100% {" +
          "visibility: visible;" +
          "opacity: 1;" +
          "}" +
          "}" +
          "@keyframes fadeIn {" +
          "0% {" +
          "visibility: visible;" +
          "opacity: 0;" +
          "}" +
          "100% {" +
          "visibility: visible;" +
          "opacity: 1;" +
          "}" +
          "}" +
          "@-webkit-keyframes fadeOut {" +
          "0% {" +
          "visibility: visible;" +
          "opacity: 1;" +
          "}" +
          "100% {" +
          "visibility: hidden;" +
          "opacity: 0;" +
          "}" +
          "}" +
          "@keyframes fadeOut {" +
          "0% {" +
          "visibility: visible;" +
          "opacity: 1;" +
          "}" +
          "100% {" +
          "visibility: hidden;" +
          "opacity: 0;" +
          "}" +
          "}" +
          "@keyframes blink {" +
          "0% {" +
          "opacity: .2;" +
          "}" +
          "20% {" +
          "opacity: 1;" +
          "}" +
          "100% {" +
          "opacity: .2;" +
          "}" +
          "}"
        );
      }
      this._46 = _46;
      this._63 = _63;
    }
    function _326(_0, _44, _31, _4, _11, _6) {
      var _9, _50, _77, _18, _232, _149;
      function _46(_112, _154, _310, _52) {
        _18 = _154;
        _9 = _112;
        _149 = _52;
        _232 = !!_310;
        _9("Tagger tool starting");
        _50 = _44._100();
        if (!_50) {
          _9("Tagger tool not initiated - could not create root HTML element");
          return;
        }
        if (!_0.opener) {
          _9("Tagger tool not initiated - window.opener is missing");
          return;
        }
        _122();
      }
      function _122() {
        _11._17(_0, "message", function (_22) {
          if (_22.origin !== _18) return;
          _144(_22.data);
          switch (_22.data.message) {
            case "MouseflowTaggerTool_Init_Received":
              _0.clearInterval(_77);
              break;
            case "MouseflowTaggerTool_Init_Success":
              _147(_22.data.scripts, function () {
                if (typeof _149 === "function") _149();
                _9("Tagger tool scripts loaded");
              });
              break;
          }
        });
        _77 = _0.setInterval(_206, 500);
        _0.setTimeout(function () {
          _0.clearInterval(_77);
        }, 10000);
        _206();
      }
      function _206() {
        _106({ message: "MouseflowTaggerTool_Init", startWithHeatMap: _232 });
      }
      function _147(_83, _52) {
        if (!_83) return;
        var _79 = 0;
        function _105() {
          if (_79 >= _83.length) {
            _52();
            return;
          }
          var _42 = _83[_79];
          _146(_42);
          _79++;
          var _66 = document.createElement("script");
          if (_42.startsWith("/")) _66.src = _18 + _42;
          else _66.src = _18 + "/" + _42;
          _66.onload = _105;
          _50.appendChild(_66);
        }
        _105();
      }
      function _146(_42) {
        _9("Tagger tool loading script: " + _42);
      }
      function _144(_15) {
        if (_15.message && _15.message.indexOf("MouseflowTaggerTool_") === 0)
          _9(
            "Received " +
              _15.message +
              (_15.requestUrl ? ", request URL: " + _15.requestUrl : "")
          );
      }
      function _106(_15) {
        _0.opener.postMessage(_15, _18);
        _9(
          "Sent " +
            _15.message +
            (_15.requestUrl ? ", request URL: " + _15.requestUrl : "")
        );
      }
      this._46 = _46;
    }
    function _288(_6, _148, _162) {
      function _131() {
        var _27 =
          (_6.crossDomainSupport ? _6.location.hostname : "") +
          (_6.path || _6.location.pathname).toLowerCase();
        var _229 = (_6.includeHashInPath ? _6.location.hash : "").toLowerCase();
        var _62 = _6.location.search.toLowerCase();
        if (
          _27 !== "/" &&
          _27.slice(-1) === "/" &&
          !_6.includeQueryStringInPath &&
          !_6.includeHashInPath
        )
          _27 = _27.slice(0, -1);
        return (
          _290(_27 + (_6.includeQueryStringInPath ? _62 : "") + _229) ||
          _27 + _283(_62) + _229
        );
      }
      function _290(_27) {
        return _148
          .filter(function (_26) {
            return _280(_27, _26);
          })
          .map(function (_26) {
            return _279(_27, _26);
          })[0];
      }
      function _283(_62) {
        if (_62[0] === "?") _62 = _62.slice(1);
        var _91;
        var _178 = [];
        var _281 = /([^&=]+)=?([^&]*)/g;
        while ((_91 = _281.exec(_62))) {
          var _60 = _162.indexOf(_91[1]);
          if (_91[2] && _60 > -1) _178[_60] = _91[0];
        }
        return _178.length
          ? "?" + _178.filter(hasValue).join("&")
          : _6.includeQueryStringInPath && _62
          ? "?" + _62
          : "";
      }
      function _280(_27, _26) {
        var _209 = _27.indexOf("?");
        if (!_6.includeQueryStringInPath && _209 > -1) _27 = _27.slice(0, _209);
        switch (_26._277) {
          case "equals":
            return _27 === _26._13.toLowerCase();
          case "startsWith":
            return _27.substr(0, _26._13.length) === _26._13;
          case "endsWith":
            return _27.substr(-_26._13.length) === _26._13;
          case "regex":
            return new RegExp(_26._13).test(_27);
          default:
            return false;
        }
      }
      function _279(_27, _26) {
        if (_26._278) return _26._278;
        switch (_26._277) {
          case "startsWith":
            return _26._13 + "*";
          case "endsWith":
            return "*" + _26._13;
          default:
            return _26._13;
        }
      }
      function hasValue(value) {
        return value;
      }
      this._131 = _131;
    }
    function _287(_4) {
      var _168 = [];
      var _282 = [
        "target",
        "button",
        "pageX",
        "pageY",
        "which",
        "data",
        "origin",
        "source",
        "touches",
      ];
      function _292(_41, _84, _37, _169, _34) {
        var _39 = !!_34._39;
        var _214 = function (_7) {
          var _94 = [];
          if (_7.composedPath && (_7.target.shadowRoot || _37))
            _94 = _7.composedPath();
          var _211 = _7;
          _7 = _276(_7);
          _7.preventDefault = function () {
            _211.preventDefault();
          };
          _7.stopPropagation = function () {
            _211.stopPropagation();
          };
          if (_7.target.shadowRoot && _94.length) _7.target = _94[0];
          if (_37) {
            _7.delegatedTarget = _217(function (_85, _3) {
              return _94.length ? _94[_3] : _85 ? _85.parentNode : _7.target;
            }, _37);
            if (!_7.delegatedTarget && !_34._339) return;
            if (_34._175 && _7.target !== _7.delegatedTarget) return;
          } else if (_34._175 && _7.target !== _41) {
            return;
          }
          if (_34._45) _7.preventDefault();
          if (_34._346) _7.stopPropagation();
          _169.apply(this, arguments);
        };
        _41.addEventListener(_84, _214, { capture: _39 });
        _168.push({ _41: _41, _84: _84, _169: _214, _39: _39 });
      }
      function _276(_7) {
        var _216 = {};
        _282.forEach(function (_33) {
          if (_7[_33] != undefined) _216[_33] = _7[_33];
        });
        return _216;
      }
      function _293() {
        _168.forEach(function (_11) {
          _11._41.removeEventListener(_11._84, _11._169, { capture: _11._39 });
        });
        _168 = [];
      }
      function _217(_218, _37, _41, _60) {
        if (!_60) _60 = 0;
        _41 = _218(_41, _60);
        if (!_41 || !_37) return null;
        if (_4._30(_41, _37)) return _41;
        return _217(_218, _37, _41, ++_60);
      }
      this._17 = function (_41, _84, _37, _52, _34) {
        if (typeof _37 === "function") {
          _34 = _52;
          _52 = _37;
          _37 = null;
        }
        _292(_41, _84, _37, _52, _34 || {});
      };
      this._300 = _293;
    }
    function _307(_0, _174, _177) {
      var _76 = _0.location;
      function _223(_32) {
        var _30 = (_32 || "").match(
          /^(([^:]+:)?\/?\/?(([^:\/\?#]+)?:?(\d+)?))(\/.*?)?(\?.*?)?(#.*)?$/
        );
        return {
          href: _30[0] || "",
          origin: _30[1] || "",
          protocol: _30[2] || "",
          host: _30[3] || "",
          hostname: _30[4] || "",
          port: _30[5] || "",
          pathname: _30[6] || "",
          search: _30[7] || "",
          hash: _30[8] || "",
        };
      }
      function _305() {
        try {
          _0.localStorage.setItem("mf_supportsLocalStorage", "1");
          var _306 = _0.localStorage.getItem("mf_supportsLocalStorage") === "1";
          _0.localStorage.removeItem("mf_supportsLocalStorage");
          return _306;
        } catch (e) {
          return false;
        }
      }
      this.debug = _0.mouseflowDebug || _76.search.indexOf("mf_debug=1") !== -1;
      this.includeDebugTime = false;
      this.forceStart = _76.search.indexOf("mf_force=1") !== -1;
      this.autoStart =
        _0.mouseflowAutoStart !== false &&
        _76.search.indexOf("mf_autostart=0") === -1;
      this.enableBots = false;
      this.touchEvents = !_0.mouseflowDisableTouch;
      this.htmlDelay = _0.mouseflowHtmlDelay || 1000;
      this.newPageViewHtmlDelay = _0.mouseflowNewPageViewHtmlDelay || 500;
      this.compress =
        _0.mouseflowCompress !== false &&
        _76.search.indexOf("mf_compress=0") === -1;
      this.autoTagging = _0.mouseflowAutoTagging !== false;
      this.path = _0.mouseflowPath;
      this.crossDomainSupport = !!_0.mouseflowCrossDomainSupport;
      this.location = _223(_0.mouseflowHref || _76.href);
      this.htmlFetchMode = _0.mouseflowHtmlFetchMode || "post";
      this.sessionId = _0.mouseflowSessionId;
      this.honorDoNotTrack = _0.mouseflowHonorDoNotTrack || _177;
      this.gdprEnabled = _0.mouseflowForceGdpr || _174;
      this.keyLogging = !_0.mouseflowDisableKeyLogging && !this.gdprEnabled;
      this.domReuse = !_0.mouseflowDisableDomReuse;
      this.domDeduplicator = !_0.mouseflowDisableDomDeduplicator;
      this.includeSubDomains = !_0.mouseflowExcludeSubDomains;
      this.registerSubmitTimeout = _0.mouseflowRegisterSubmitTimeout || 2000;
      this.useUnload = !!_0.mouseflowUseUnload;
      this.replaceLastFormValues =
        _0.mouseflowReplaceLastFormValues ||
        !this.keyLogging ||
        this.gdprEnabled;
      this.useAllHoverSelectors = !!_0.mouseflowUseAllHoverSelectors;
      this.enableCssRecording = !!_0.mouseflowEnableCssRecording;
      this.secureCookie = !!_0.mouseflowSecureCookie;
      this.enableSpa = true;
      this.includeHashInPath = false;
      this.includeQueryStringInPath = false;
      this.autoTagPayments = true;
      this.preferStorageApi = !!_0.mouseflowPreferStorageApi;
      this.domMutationDetectorEnable =
        _0.domMutationDetectorEnable !== undefined
          ? _0.domMutationDetectorEnable
          : false;
      this.domMutationUseParentNode =
        _0.domMutationUseParentNode !== undefined
          ? _0.domMutationUseParentNode
          : true;
      this.domMutationUsePreviousSibling =
        _0.domMutationUsePreviousSibling !== undefined
          ? _0.domMutationUsePreviousSibling
          : false;
      this.domMutationCountThreshold =
        _0.domMutationCountThreshold !== undefined
          ? _0.domMutationCountThreshold
          : 20;
      this.domMutationTimeThresholdInSeconds =
        _0.domMutationTimeThresholdInSeconds !== undefined
          ? _0.domMutationTimeThresholdInSeconds
          : 10;
      this.liveHeatmapsEnabled = false;
      this.privacyToolEnabled = false;
      this.taggerToolEnabled = false;
      this.useIdSelectors =
        _0.mouseflowUseIdSelectors !== undefined
          ? _0.mouseflowUseIdSelectors
          : true;
      this.proxyAttachShadow = true;
      this.scrollSelector = _0.mouseflowScrollSelector;
      this.autoScrollSelector = _0.mouseflowAutoScrollSelector || false;
      this._304 = function () {
        if (!!_0.opener && _76.search.indexOf("mf_liveHeatmaps") !== -1) {
          this.liveHeatmapsEnabled = true;
          this.taggerToolEnabled = true;
          return;
        }
        if (_76.search.indexOf("mf_inspect") !== -1) {
          this.privacyToolEnabled = true;
          return;
        }
        if (
          !!_0.opener &&
          typeof _0.name === "string" &&
          _0.name.indexOf("mf_liveHeatmaps") === 0
        ) {
          this.liveHeatmapsEnabled = true;
          this.taggerToolEnabled = true;
          return;
        }
        if (_0.name === "mf_privacyTool") {
          this.privacyToolEnabled = true;
          return;
        }
        if (_0.name.indexOf("mf_tagger_tool") > -1) {
          this.taggerToolEnabled = true;
          return;
        }
        if (!_305()) return;
        if (_0.opener) {
          if (_0.localStorage.getItem("mf_privacyTool"))
            this.privacyToolEnabled = true;
          else if (_0.localStorage.getItem("mf_liveHeatmaps")) {
            this.liveHeatmapsEnabled = true;
            this.taggerToolEnabled = true;
          }
        }
      };
      this._304();
      this._347 = function () {
        this._153("href", window.location.href);
        this.path = undefined;
      };
      this._153 = function (_33, _13) {
        switch (_33) {
          case "href":
            this.location = _223(_13);
            break;
          case "keyLogging":
            this.keyLogging = this.keyLogging && _13;
            break;
          case "gdprEnabled":
            this.gdprEnabled = this.gdprEnabled || _13;
            break;
          case "_cssSelectorBlackList":
            break;
          case "_cssSelectorWhiteList":
            break;
          case "_cssSelectorTracked":
            break;
          case "_websiteId":
            break;
          default:
            this[_33] = _13;
            break;
        }
      };
    }
    function _284(_0) {
      var _10 = _0.document,
        _75;
      function _100() {
        if (_10.body && !_75) {
          _75 = _303();
          _10.body.appendChild(_75);
        }
        return _75;
      }
      function _173() {
        if (_75) {
          _10.body.removeChild(_75);
          _75 = undefined;
        }
      }
      function _303() {
        var _12 = _10.createElement("div");
        _12.id = "mouseflow";
        var _48 = _10.createElement("style");
        _48.type = "text/css";
        _48.innerHTML = _302();
        var _182 = _10.createElement("div");
        _182.className = "load-font";
        _182.innerHTML = "load font";
        _12.appendChild(_48);
        _12.appendChild(_182);
        return _12;
      }
      function _302() {
        return (
          "@font-face {" +
          'font-family: "Droid Sans";' +
          "font-style: normal;" +
          "font-weight: 400;" +
          'src: local("Droid Sans Regular"), local("DroidSans-Regular"), url(https://cdn.mouseflow.com/fonts/gstatic_droidsans.woff2) format("woff2");' +
          "unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2212, U+2215;" +
          "}" +
          "#mouseflow :before, #mouseflow :after {" +
          "display: none;" +
          "}" +
          "#mouseflow," +
          "#mouseflow * {" +
          "background: transparent;" +
          "border: 0;" +
          "border-image-outset: 0s;" +
          "border-image-repeat: stretch;" +
          "border-image-slice: 100%;" +
          "border-image-source: none;" +
          "border-image-width: 1;" +
          "border-color: #000;" +
          "border-radius: 0;" +
          "border-width: 0;" +
          "border-style: none;" +
          "box-sizing: border-box;" +
          "clip: auto;" +
          "float: none;" +
          "color: inherit;" +
          "font-family: inherit;" +
          "font-size: inherit;" +
          "font-style: inherit;" +
          "font-weight: inherit;" +
          "width: auto;" +
          "height: auto;" +
          "min-width: auto;" +
          "min-height: auto;" +
          "max-width: auto;" +
          "max-height: auto;" +
          "letter-spacing: normal;" +
          "line-height: normal;" +
          "margin: 0;" +
          "padding: 0;" +
          "text-decoration: none;" +
          "text-indent: 0;" +
          "text-transform: none;" +
          "vertical-align: baseline;" +
          "text-align: left;" +
          "overflow: visible;" +
          "top: auto;" +
          "right: auto;" +
          "bottom: auto;" +
          "left: auto;" +
          "-webkit-transition: none;" +
          "transition: none;" +
          "}" +
          "#mouseflow {" +
          'font: 400 14px/1.4 "Droid Sans", Helvetica, Arial, sans-serif;' +
          "color: #666;" +
          "}" +
          "#mouseflow .load-font {" +
          "position: absolute;" +
          "visibility: hidden;" +
          "width: 0px;" +
          "height: 0px;" +
          "overflow: hidden;" +
          "}"
        );
      }
      this._100 = _100;
      this._173 = _173;
    }
    function _285(_0) {
      this._73 = function () {
        return _138("setTimeout").apply(_0, arguments);
      };
      this._345 = function () {
        return _138("setInterval").apply(_0, arguments);
      };
      this._143 = function () {
        _138("clearTimeout").apply(_0, arguments);
      };
      this._344 = function () {
        _138("clearInterval").apply(_0, arguments);
      };
      function _138(_115) {
        var _225;
        if (_0.Zone && _0.Zone.__symbol__) _225 = _0[_0.Zone.__symbol__(_115)];
        return _225 || _0[_115];
      }
    }
    function _286(_0, _134, _161) {
      var _10 = _0.document;
      function _165(_5, _35) {
        var _56 = _5.classList;
        if (_56 && _35) return _56.contains(_35);
        var _67 = _89(_5);
        return _67.indexOf(_35) !== -1;
      }
      function _23(_5, _35) {
        var _56 = _5.classList;
        if (_56 && _35) {
          _5.classList.add(_35);
          return;
        }
        var _67 = _89(_5);
        if (_67.indexOf(_35) === -1) _67.push(_35);
        _5.className = _67.join(" ");
      }
      function _16(_5, _35) {
        var _56 = _5.classList;
        if (_56 && _35) {
          _5.classList.remove(_35);
          return;
        }
        var _67 = _89(_5);
        var _60 = _67.indexOf(_35);
        if (_60 !== -1) _67.splice(_60, 1);
        _5.className = _67.join(" ");
      }
      function _95(_5, _35, _151) {
        if (_151 === undefined) _151 = !_165(_5, _35);
        if (_151) {
          _23(_5, _35);
        } else {
          _16(_5, _35);
        }
      }
      function _89(_5) {
        var _228 =
          typeof _5.className === "string"
            ? _5.className.replace(/\s+/g, " ").trim()
            : "";
        return _228 !== "" ? _228.split(" ") : [];
      }
      function _224() {
        return _134.max(
          (_10.body || {}).scrollHeight || 0,
          (_10.body || {}).offsetHeight || 0,
          _10.documentElement.scrollHeight || 0,
          _10.documentElement.offsetHeight || 0,
          _10.documentElement.clientHeight || 0
        );
      }
      function _37(_137, _298) {
        var _43 = [];
        if (!_137) return _43;
        for (var _3 = 0; _3 < _137.length; _3++) {
          if (_298(_137[_3], _3)) _43.push(_137[_3]);
        }
        return _43;
      }
      function _221(_111) {
        var _136 = _111.length;
        while (_136) {
          var _3 = _134.floor(_134.random() * _136--);
          var _297 = _111[_136];
          _111[_136] = _111[_3];
          _111[_3] = _297;
        }
      }
      function _72(_25) {
        if (!_25) return _25;
        return _25
          .replace(/&/g, "&amp;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#39;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
      }
      function _166(_25) {
        if (!_25) return _25;
        return _25
          .replace(/&amp;/g, "&")
          .replace(/&quot;/g, '"')
          .replace(/&#39;/g, "'")
          .replace(/&lt;/g, "<")
          .replace(/&gt;/g, ">");
      }
      function _145(url) {
        return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/.test(
          url.trim()
        );
      }
      function _219(_25) {
        return _25.replace(
          /\[([^\]]+)\]\(([^\)]+)\)/g,
          function (_91, _295, _32) {
            _32 = _166(_32);
            return _145(_32)
              ? '<a href="' + _32 + '" target="_blank">' + _295 + "</a>"
              : _91;
          }
        );
      }
      function _69(_13) {
        if (!_13) return _13;
        return _13
          .replace(/([^a-zA-Z\d-_])/g, "\\$1")
          .replace(/^(-)?(\d)/, "$1\\3$2 ");
      }
      function _116(_13) {
        return _13 ? _161.parse(_13) : undefined;
      }
      function _118(_13) {
        var _43;
        if (Array.prototype.toJSON) {
          var _294 = Array.prototype.toJSON;
          delete Array.prototype.toJSON;
          _43 = _161.stringify(_13);
          Array.prototype.toJSON = _294;
        } else if (_13) {
          _43 = _161.stringify(_13);
        }
        return _43;
      }
      function _212(_274, _313) {
        var _87 = _124(_274);
        var _25 = _124(_313);
        var _296 = _134.max(_87.length, _25.length);
        if (_25 == "NaN" || _87 == "NaN") {
          return false;
        }
        for (var _3 = 0; _3 < _296; _3++) {
          _87[_3] = _87[_3] || 0;
          _25[_3] = _25[_3] || 0;
          if (_87[_3] == _25[_3]) {
            continue;
          }
          return _87[_3] > _25[_3];
        }
        return true;
      }
      function _124(_299) {
        var _227 = _299.split(".");
        var _226 = [];
        for (var _3 = 0; _3 < _227.length; _3++) {
          _226.push(parseInt(_227[_3]));
        }
        return _226;
      }
      function _231(_25, _301) {
        var _43 = _25;
        while (_43[_43.length - 1] === (_301 || " ")) _43 = _43.slice(0, -1);
        return _43;
      }
      function _30(_5, _1) {
        if (_5.nodeType !== 1) return false;
        if (_5.msMatchesSelector) return _5.msMatchesSelector(_1);
        if (_5.matches) return _5.matches(_1);
        return false;
      }
      function _180(_85, _308) {
        return (
          _85.parentNode &&
          _85.parentNode.hasAttribute &&
          _85.parentNode.hasAttribute(_308)
        );
      }
      this._165 = _165;
      this._23 = _23;
      this._16 = _16;
      this._95 = _95;
      this._89 = _89;
      this._224 = _224;
      this._37 = _37;
      this._221 = _221;
      this._72 = _72;
      this._166 = _166;
      this._145 = _145;
      this._219 = _219;
      this._69 = _69;
      this._116 = _116;
      this._118 = _118;
      this._212 = _212;
      this._124 = _124;
      this._231 = _231;
      this._30 = _30;
      this._180 = _180;
    }
    var _44 = new _284(window);
    var _31 = new _285(window);
    var _4 = new _286(window, Math, JSON);
    var _11 = new _287(_4);
    var _99 = new _288(_6, _148, _162);
    var _198 =
      typeof _309 === "function" ? new _309(_6, _4) : { _349: function () {} };
    var _275 =
      typeof _311 === "function"
        ? new _311(window, _6, _44, _31, _4, _198, _11)
        : {
            _46: function () {},
            _63: function () {},
            _341: function () {},
            _350: function () {},
            _343: function () {},
          };
    var _289 =
      typeof _337 === "function" ? new _337(_6) : { _348: function () {} };
    function _9(_314, _117) {
      _117 = typeof _117 !== "undefined" ? _117 : "";
      if (_6.debug)
        console.log(
          "MF" + (_6.includeDebugTime ? " - " + _117 : "") + ": " + _314
        );
    }
    var _188 = new _316(window, _44, _31, _4, _11, _6);
    var _129 = new _317(window, _6, _44, _4, _11, _99);
    var _201 = new _326(window, _44, _31, _4, _11, _6);
    function _47() {
      return undefined;
    }
    function _203() {
      return null;
    }
    function _207() {
      return false;
    }
    var shouldRecord = false;
    if (_6.privacyToolEnabled) {
      _188._46(_18, _6._57, _6._152, _6._176, _6._97, _9);
    } else if (_6.liveHeatmapsEnabled) {
      var _113;
      if (_6.taggerToolEnabled) {
        _113 = function (_52) {
          _201._46(_9, _18, true, _52);
        };
      }
      _129._46(_6._57, _9, _18, _113);
    } else if (_6.taggerToolEnabled) {
      _201._46(_9, _18);
    } else if (typeof _323 === "function") {
      window.mouseflow = new _323(
        window,
        Math,
        _6,
        _31,
        _4,
        _198,
        _11,
        _99,
        _275,
        _289,
        _9
      );
      shouldRecord = true;
    }
    if (!shouldRecord) {
      window.mouseflow = {
        start: _47,
        stop: function () {
          if (_6.privacyToolEnabled) _188._63();
          else if (_6.liveHeatmapsEnabled) _129._63();
        },
        newPageView: function (_242) {
          if (_6.liveHeatmapsEnabled) _129._208({ url: _242 });
        },
        stopSession: _47,
        getSessionId: _203,
        getPageViewId: _203,
        tag: _47,
        star: _47,
        setVariable: _47,
        identify: _47,
        formSubmitAttempt: _47,
        formSubmitSuccess: _47,
        formSubmitFailure: _47,
        addFriction: _47,
        isRecording: _207,
        isReturningUser: _207,
        activateFeedback: _47,
        proxyAttachShadow: _47,
        recordingRate: null,
        version: null,
      };
    }
    window.mouseflow.websiteId = _6._57;
    window.mouseflow.gdprEnabled = _6.gdprEnabled;
    window.mouseflow.updateHeatmap = _129._208;
    window.mouseflow.config = function () {
      return arguments.length === 1
        ? _6[arguments[0]]
        : _6._153.apply(_6, arguments);
    };
    window.mouseflow.debug = function () {
      _6.debug = !_6.debug;
      console.log("MF: Debugging " + (_6.debug ? "enabled" : "disabled"));
    };
  })();
}
