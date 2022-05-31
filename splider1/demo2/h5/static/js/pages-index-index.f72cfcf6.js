(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-index-index"], {
    "007d": function(t, e, n) {
        "use strict";
        n.d(e, "b", (function() {
            return a
        }
        )),
        n.d(e, "c", (function() {
            return s
        }
        )),
        n.d(e, "a", (function() {
            return i
        }
        ));
        var i = {
            uniTransition: n("a629").default
        }
          , a = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return t.showPopup ? n("v-uni-view", {
                staticClass: "uni-popup",
                class: [t.popupstyle, t.isDesktop ? "fixforpc-z-index" : ""],
                on: {
                    touchmove: function(e) {
                        e.stopPropagation(),
                        e.preventDefault(),
                        arguments[0] = e = t.$handleEvent(e),
                        t.clear.apply(void 0, arguments)
                    }
                }
            }, [n("v-uni-view", {
                on: {
                    touchstart: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.touchstart.apply(void 0, arguments)
                    }
                }
            }, [t.maskShow ? n("uni-transition", {
                key: "1",
                attrs: {
                    name: "mask",
                    "mode-class": "fade",
                    styles: t.maskClass,
                    duration: t.duration,
                    show: t.showTrans
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.onTap.apply(void 0, arguments)
                    }
                }
            }) : t._e(), n("uni-transition", {
                key: "2",
                attrs: {
                    "mode-class": t.ani,
                    name: "content",
                    styles: t.transClass,
                    duration: t.duration,
                    show: t.showTrans
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.onTap.apply(void 0, arguments)
                    }
                }
            }, [n("v-uni-view", {
                staticClass: "uni-popup__wrapper",
                class: [t.popupstyle],
                style: {
                    backgroundColor: t.bg
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.clear.apply(void 0, arguments)
                    }
                }
            }, [t._t("default")], 2)], 1)], 1), t.maskShow ? n("keypress", {
                on: {
                    esc: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.onTap.apply(void 0, arguments)
                    }
                }
            }) : t._e()], 1) : t._e()
        }
          , s = []
    },
    "0336": function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = void 0;
        n("c917");
        var i = "other"
          , a = {
            name: "UniFab",
            props: {
                pattern: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                horizontal: {
                    type: String,
                    default: "left"
                },
                vertical: {
                    type: String,
                    default: "bottom"
                },
                direction: {
                    type: String,
                    default: "horizontal"
                },
                content: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                show: {
                    type: Boolean,
                    default: !1
                },
                popMenu: {
                    type: Boolean,
                    default: !0
                }
            },
            data: function() {
                return {
                    fabShow: !1,
                    isShow: !1,
                    isAndroidNvue: "android" === i,
                    styles: {
                        color: "#3c3e49",
                        selectedColor: "#007AFF",
                        backgroundColor: "#fff",
                        buttonColor: "#007AFF",
                        iconColor: "#fff"
                    }
                }
            },
            computed: {
                contentWidth: function(t) {
                    return 55 * (this.content.length + 1) + 15 + "px"
                },
                contentWidthMin: function() {
                    return "55px"
                },
                boxWidth: function() {
                    return this.getPosition(3, "horizontal")
                },
                boxHeight: function() {
                    return this.getPosition(3, "vertical")
                },
                leftBottom: function() {
                    return this.getPosition(0, "left", "bottom")
                },
                rightBottom: function() {
                    return this.getPosition(0, "right", "bottom")
                },
                leftTop: function() {
                    return this.getPosition(0, "left", "top")
                },
                rightTop: function() {
                    return this.getPosition(0, "right", "top")
                },
                flexDirectionStart: function() {
                    return this.getPosition(1, "vertical", "top")
                },
                flexDirectionEnd: function() {
                    return this.getPosition(1, "vertical", "bottom")
                },
                horizontalLeft: function() {
                    return this.getPosition(2, "horizontal", "left")
                },
                horizontalRight: function() {
                    return this.getPosition(2, "horizontal", "right")
                }
            },
            watch: {
                pattern: {
                    handler: function(t, e) {
                        this.styles = Object.assign({}, this.styles, t)
                    },
                    deep: !0
                }
            },
            created: function() {
                this.isShow = this.show,
                0 === this.top && (this.fabShow = !0),
                this.styles = Object.assign({}, this.styles, this.pattern)
            },
            methods: {
                _onClick: function() {
                    this.popMenu && (this.isShow = !this.isShow)
                },
                open: function() {
                    this.isShow = !0
                },
                close: function() {
                    this.isShow = !1
                },
                _onItemClick: function(t, e) {
                    if (!this.initData[t] && "custome_3" != t)
                        return this.$utils.msg("暂无客服信息");
                    "custom_1" == t || "custome_2" == t ? window.open("https://t.me/" + this.initData[t]) : "custome_3" == t && window.open("https://chatlink-new.meiqia.cn/fe-widget-prod/standalone.html?eid=329221c9a462d9df924141746f49ad48&agentid=3b1403574f84b74afff56e40b4f25e78")
                },
                getPosition: function(t, e, n) {
                    return 0 === t ? this.horizontal === e && this.vertical === n : 1 === t ? this.direction === e && this.vertical === n : 2 === t ? this.direction === e && this.horizontal === n : this.isShow && this.direction === e ? this.contentWidth : this.contentWidthMin
                }
            }
        };
        e.default = a
    },
    "09c9": function(t, e, n) {
        t.exports = n.p + "static/img/coin_kuang_light006.ca8a133c.png"
    },
    "09d4": function(t, e, n) {
        t.exports = n.p + "static/img/coin_kuang_light005.ca8a133c.png"
    },
    "0a93": function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("cdd9")
          , a = n.n(i);
        for (var s in i)
            "default" !== s && function(t) {
                n.d(e, t, (function() {
                    return i[t]
                }
                ))
            }(s);
        e["default"] = a.a
    },
    "0cc0": function(t, e, n) {
        t.exports = n.p + "static/img/coin_kuang_light012.e26f0551.png"
    },
    "0d71": function(t, e, n) {
        t.exports = n.p + "static/img/coin_kuang_light002.201f0f5e.png"
    },
    "0ec1": function(t, e, n) {
        var i = n("24fb")
          , a = n("1de5")
          , s = n("67b3");
        e = i(!1);
        var o = a(s);
        e.push([t.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uniui-color[data-v-2d8886f1]:before{content:"\\e6cf"}.uniui-wallet[data-v-2d8886f1]:before{content:"\\e6b1"}.uniui-settings-filled[data-v-2d8886f1]:before{content:"\\e6ce"}.uniui-auth-filled[data-v-2d8886f1]:before{content:"\\e6cc"}.uniui-shop-filled[data-v-2d8886f1]:before{content:"\\e6cd"}.uniui-staff-filled[data-v-2d8886f1]:before{content:"\\e6cb"}.uniui-vip-filled[data-v-2d8886f1]:before{content:"\\e6c6"}.uniui-plus-filled[data-v-2d8886f1]:before{content:"\\e6c7"}.uniui-folder-add-filled[data-v-2d8886f1]:before{content:"\\e6c8"}.uniui-color-filled[data-v-2d8886f1]:before{content:"\\e6c9"}.uniui-tune-filled[data-v-2d8886f1]:before{content:"\\e6ca"}.uniui-calendar-filled[data-v-2d8886f1]:before{content:"\\e6c0"}.uniui-notification-filled[data-v-2d8886f1]:before{content:"\\e6c1"}.uniui-wallet-filled[data-v-2d8886f1]:before{content:"\\e6c2"}.uniui-medal-filled[data-v-2d8886f1]:before{content:"\\e6c3"}.uniui-gift-filled[data-v-2d8886f1]:before{content:"\\e6c4"}.uniui-fire-filled[data-v-2d8886f1]:before{content:"\\e6c5"}.uniui-refreshempty[data-v-2d8886f1]:before{content:"\\e6bf"}.uniui-location-filled[data-v-2d8886f1]:before{content:"\\e6af"}.uniui-person-filled[data-v-2d8886f1]:before{content:"\\e69d"}.uniui-personadd-filled[data-v-2d8886f1]:before{content:"\\e698"}.uniui-back[data-v-2d8886f1]:before{content:"\\e6b9"}.uniui-forward[data-v-2d8886f1]:before{content:"\\e6ba"}.uniui-arrow-right[data-v-2d8886f1]:before{content:"\\e6bb"}.uniui-arrowthinright[data-v-2d8886f1]:before{content:"\\e6bb"}.uniui-arrow-left[data-v-2d8886f1]:before{content:"\\e6bc"}.uniui-arrowthinleft[data-v-2d8886f1]:before{content:"\\e6bc"}.uniui-arrow-up[data-v-2d8886f1]:before{content:"\\e6bd"}.uniui-arrowthinup[data-v-2d8886f1]:before{content:"\\e6bd"}.uniui-arrow-down[data-v-2d8886f1]:before{content:"\\e6be"}.uniui-arrowthindown[data-v-2d8886f1]:before{content:"\\e6be"}.uniui-bottom[data-v-2d8886f1]:before{content:"\\e6b8"}.uniui-arrowdown[data-v-2d8886f1]:before{content:"\\e6b8"}.uniui-right[data-v-2d8886f1]:before{content:"\\e6b5"}.uniui-arrowright[data-v-2d8886f1]:before{content:"\\e6b5"}.uniui-top[data-v-2d8886f1]:before{content:"\\e6b6"}.uniui-arrowup[data-v-2d8886f1]:before{content:"\\e6b6"}.uniui-left[data-v-2d8886f1]:before{content:"\\e6b7"}.uniui-arrowleft[data-v-2d8886f1]:before{content:"\\e6b7"}.uniui-eye[data-v-2d8886f1]:before{content:"\\e651"}.uniui-eye-filled[data-v-2d8886f1]:before{content:"\\e66a"}.uniui-eye-slash[data-v-2d8886f1]:before{content:"\\e6b3"}.uniui-eye-slash-filled[data-v-2d8886f1]:before{content:"\\e6b4"}.uniui-info-filled[data-v-2d8886f1]:before{content:"\\e649"}.uniui-reload[data-v-2d8886f1]:before{content:"\\e6b2"}.uniui-micoff-filled[data-v-2d8886f1]:before{content:"\\e6b0"}.uniui-map-pin-ellipse[data-v-2d8886f1]:before{content:"\\e6ac"}.uniui-map-pin[data-v-2d8886f1]:before{content:"\\e6ad"}.uniui-location[data-v-2d8886f1]:before{content:"\\e6ae"}.uniui-starhalf[data-v-2d8886f1]:before{content:"\\e683"}.uniui-star[data-v-2d8886f1]:before{content:"\\e688"}.uniui-star-filled[data-v-2d8886f1]:before{content:"\\e68f"}.uniui-calendar[data-v-2d8886f1]:before{content:"\\e6a0"}.uniui-fire[data-v-2d8886f1]:before{content:"\\e6a1"}.uniui-medal[data-v-2d8886f1]:before{content:"\\e6a2"}.uniui-font[data-v-2d8886f1]:before{content:"\\e6a3"}.uniui-gift[data-v-2d8886f1]:before{content:"\\e6a4"}.uniui-link[data-v-2d8886f1]:before{content:"\\e6a5"}.uniui-notification[data-v-2d8886f1]:before{content:"\\e6a6"}.uniui-staff[data-v-2d8886f1]:before{content:"\\e6a7"}.uniui-vip[data-v-2d8886f1]:before{content:"\\e6a8"}.uniui-folder-add[data-v-2d8886f1]:before{content:"\\e6a9"}.uniui-tune[data-v-2d8886f1]:before{content:"\\e6aa"}.uniui-auth[data-v-2d8886f1]:before{content:"\\e6ab"}.uniui-person[data-v-2d8886f1]:before{content:"\\e699"}.uniui-email-filled[data-v-2d8886f1]:before{content:"\\e69a"}.uniui-phone-filled[data-v-2d8886f1]:before{content:"\\e69b"}.uniui-phone[data-v-2d8886f1]:before{content:"\\e69c"}.uniui-email[data-v-2d8886f1]:before{content:"\\e69e"}.uniui-personadd[data-v-2d8886f1]:before{content:"\\e69f"}.uniui-chatboxes-filled[data-v-2d8886f1]:before{content:"\\e692"}.uniui-contact[data-v-2d8886f1]:before{content:"\\e693"}.uniui-chatbubble-filled[data-v-2d8886f1]:before{content:"\\e694"}.uniui-contact-filled[data-v-2d8886f1]:before{content:"\\e695"}.uniui-chatboxes[data-v-2d8886f1]:before{content:"\\e696"}.uniui-chatbubble[data-v-2d8886f1]:before{content:"\\e697"}.uniui-upload-filled[data-v-2d8886f1]:before{content:"\\e68e"}.uniui-upload[data-v-2d8886f1]:before{content:"\\e690"}.uniui-weixin[data-v-2d8886f1]:before{content:"\\e691"}.uniui-compose[data-v-2d8886f1]:before{content:"\\e67f"}.uniui-qq[data-v-2d8886f1]:before{content:"\\e680"}.uniui-download-filled[data-v-2d8886f1]:before{content:"\\e681"}.uniui-pyq[data-v-2d8886f1]:before{content:"\\e682"}.uniui-sound[data-v-2d8886f1]:before{content:"\\e684"}.uniui-trash-filled[data-v-2d8886f1]:before{content:"\\e685"}.uniui-sound-filled[data-v-2d8886f1]:before{content:"\\e686"}.uniui-trash[data-v-2d8886f1]:before{content:"\\e687"}.uniui-videocam-filled[data-v-2d8886f1]:before{content:"\\e689"}.uniui-spinner-cycle[data-v-2d8886f1]:before{content:"\\e68a"}.uniui-weibo[data-v-2d8886f1]:before{content:"\\e68b"}.uniui-videocam[data-v-2d8886f1]:before{content:"\\e68c"}.uniui-download[data-v-2d8886f1]:before{content:"\\e68d"}.uniui-help[data-v-2d8886f1]:before{content:"\\e679"}.uniui-navigate-filled[data-v-2d8886f1]:before{content:"\\e67a"}.uniui-plusempty[data-v-2d8886f1]:before{content:"\\e67b"}.uniui-smallcircle[data-v-2d8886f1]:before{content:"\\e67c"}.uniui-minus-filled[data-v-2d8886f1]:before{content:"\\e67d"}.uniui-micoff[data-v-2d8886f1]:before{content:"\\e67e"}.uniui-closeempty[data-v-2d8886f1]:before{content:"\\e66c"}.uniui-clear[data-v-2d8886f1]:before{content:"\\e66d"}.uniui-navigate[data-v-2d8886f1]:before{content:"\\e66e"}.uniui-minus[data-v-2d8886f1]:before{content:"\\e66f"}.uniui-image[data-v-2d8886f1]:before{content:"\\e670"}.uniui-mic[data-v-2d8886f1]:before{content:"\\e671"}.uniui-paperplane[data-v-2d8886f1]:before{content:"\\e672"}.uniui-close[data-v-2d8886f1]:before{content:"\\e673"}.uniui-help-filled[data-v-2d8886f1]:before{content:"\\e674"}.uniui-paperplane-filled[data-v-2d8886f1]:before{content:"\\e675"}.uniui-plus[data-v-2d8886f1]:before{content:"\\e676"}.uniui-mic-filled[data-v-2d8886f1]:before{content:"\\e677"}.uniui-image-filled[data-v-2d8886f1]:before{content:"\\e678"}.uniui-locked-filled[data-v-2d8886f1]:before{content:"\\e668"}.uniui-info[data-v-2d8886f1]:before{content:"\\e669"}.uniui-locked[data-v-2d8886f1]:before{content:"\\e66b"}.uniui-camera-filled[data-v-2d8886f1]:before{content:"\\e658"}.uniui-chat-filled[data-v-2d8886f1]:before{content:"\\e659"}.uniui-camera[data-v-2d8886f1]:before{content:"\\e65a"}.uniui-circle[data-v-2d8886f1]:before{content:"\\e65b"}.uniui-checkmarkempty[data-v-2d8886f1]:before{content:"\\e65c"}.uniui-chat[data-v-2d8886f1]:before{content:"\\e65d"}.uniui-circle-filled[data-v-2d8886f1]:before{content:"\\e65e"}.uniui-flag[data-v-2d8886f1]:before{content:"\\e65f"}.uniui-flag-filled[data-v-2d8886f1]:before{content:"\\e660"}.uniui-gear-filled[data-v-2d8886f1]:before{content:"\\e661"}.uniui-home[data-v-2d8886f1]:before{content:"\\e662"}.uniui-home-filled[data-v-2d8886f1]:before{content:"\\e663"}.uniui-gear[data-v-2d8886f1]:before{content:"\\e664"}.uniui-smallcircle-filled[data-v-2d8886f1]:before{content:"\\e665"}.uniui-map-filled[data-v-2d8886f1]:before{content:"\\e666"}.uniui-map[data-v-2d8886f1]:before{content:"\\e667"}.uniui-refresh-filled[data-v-2d8886f1]:before{content:"\\e656"}.uniui-refresh[data-v-2d8886f1]:before{content:"\\e657"}.uniui-cloud-upload[data-v-2d8886f1]:before{content:"\\e645"}.uniui-cloud-download-filled[data-v-2d8886f1]:before{content:"\\e646"}.uniui-cloud-download[data-v-2d8886f1]:before{content:"\\e647"}.uniui-cloud-upload-filled[data-v-2d8886f1]:before{content:"\\e648"}.uniui-redo[data-v-2d8886f1]:before{content:"\\e64a"}.uniui-images-filled[data-v-2d8886f1]:before{content:"\\e64b"}.uniui-undo-filled[data-v-2d8886f1]:before{content:"\\e64c"}.uniui-more[data-v-2d8886f1]:before{content:"\\e64d"}.uniui-more-filled[data-v-2d8886f1]:before{content:"\\e64e"}.uniui-undo[data-v-2d8886f1]:before{content:"\\e64f"}.uniui-images[data-v-2d8886f1]:before{content:"\\e650"}.uniui-paperclip[data-v-2d8886f1]:before{content:"\\e652"}.uniui-settings[data-v-2d8886f1]:before{content:"\\e653"}.uniui-search[data-v-2d8886f1]:before{content:"\\e654"}.uniui-redo-filled[data-v-2d8886f1]:before{content:"\\e655"}.uniui-list[data-v-2d8886f1]:before{content:"\\e644"}.uniui-mail-open-filled[data-v-2d8886f1]:before{content:"\\e63a"}.uniui-hand-down-filled[data-v-2d8886f1]:before{content:"\\e63c"}.uniui-hand-down[data-v-2d8886f1]:before{content:"\\e63d"}.uniui-hand-up-filled[data-v-2d8886f1]:before{content:"\\e63e"}.uniui-hand-up[data-v-2d8886f1]:before{content:"\\e63f"}.uniui-heart-filled[data-v-2d8886f1]:before{content:"\\e641"}.uniui-mail-open[data-v-2d8886f1]:before{content:"\\e643"}.uniui-heart[data-v-2d8886f1]:before{content:"\\e639"}.uniui-loop[data-v-2d8886f1]:before{content:"\\e633"}.uniui-pulldown[data-v-2d8886f1]:before{content:"\\e632"}.uniui-scan[data-v-2d8886f1]:before{content:"\\e62a"}.uniui-bars[data-v-2d8886f1]:before{content:"\\e627"}.uniui-cart-filled[data-v-2d8886f1]:before{content:"\\e629"}.uniui-checkbox[data-v-2d8886f1]:before{content:"\\e62b"}.uniui-checkbox-filled[data-v-2d8886f1]:before{content:"\\e62c"}.uniui-shop[data-v-2d8886f1]:before{content:"\\e62f"}.uniui-headphones[data-v-2d8886f1]:before{content:"\\e630"}.uniui-cart[data-v-2d8886f1]:before{content:"\\e631"}@font-face{font-family:uniicons;src:url(' + o + ') format("truetype")}.uni-icons[data-v-2d8886f1]{font-family:uniicons;text-decoration:none;text-align:center}', ""]),
        t.exports = e
    },
    "0f11": function(t, e, n) {
        var i = n("24fb");
        e = i(!1),
        e.push([t.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-popup[data-v-dccfa0e6]{position:fixed;z-index:99}.uni-popup.top[data-v-dccfa0e6], .uni-popup.left[data-v-dccfa0e6], .uni-popup.right[data-v-dccfa0e6]{top:var(--window-top)}.uni-popup .uni-popup__wrapper[data-v-dccfa0e6]{display:block;position:relative\r\n  /* iphonex 等安全区设置，底部安全区适配 */}.uni-popup .uni-popup__wrapper.left[data-v-dccfa0e6], .uni-popup .uni-popup__wrapper.right[data-v-dccfa0e6]{padding-top:var(--window-top);flex:1}.fixforpc-z-index[data-v-dccfa0e6]{z-index:999}.fixforpc-top[data-v-dccfa0e6]{top:0}', ""]),
        t.exports = e
    },
    "0fcc": function(t, e, n) {
        "use strict";
        var i = n("2d3f")
          , a = n.n(i);
        a.a
    },
    1022: function(t, e, n) {
        t.exports = n.p + "static/img/coin_kuang_light010.03161f30.png"
    },
    "160c": function(t, e, n) {
        t.exports = n.p + "static/img/whyTGIcon.183092a7.png"
    },
    "17f3": function(t, e, n) {
        t.exports = n.p + "static/img/logo.4904c445.png"
    },
    "18fb": function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("f781")
          , a = n("93e3");
        for (var s in a)
            "default" !== s && function(t) {
                n.d(e, t, (function() {
                    return a[t]
                }
                ))
            }(s);
        n("edc7");
        var o, r = n("f0c5"), c = Object(r["a"])(a["default"], i["b"], i["c"], !1, null, "04bdc44d", null, !1, i["a"], o);
        e["default"] = c.exports
    },
    "1a7e": function(t, e, n) {
        "use strict";
        n("a9e3"),
        n("d3b7"),
        n("ac1f"),
        n("25f0"),
        n("3ca3"),
        n("ddb0"),
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = void 0;
        var i = {
            name: "UniNoticeBar",
            emits: ["click", "getmore", "close"],
            props: {
                text: {
                    type: String,
                    default: ""
                },
                moreText: {
                    type: String,
                    default: ""
                },
                backgroundColor: {
                    type: String,
                    default: "#FFF9EA"
                },
                speed: {
                    type: Number,
                    default: 100
                },
                color: {
                    type: String,
                    default: "#FF9A43"
                },
                moreColor: {
                    type: String,
                    default: "#FF9A43"
                },
                single: {
                    type: [Boolean, String],
                    default: !1
                },
                scrollable: {
                    type: [Boolean, String],
                    default: !1
                },
                showIcon: {
                    type: [Boolean, String],
                    default: !1
                },
                showGetMore: {
                    type: [Boolean, String],
                    default: !1
                },
                showClose: {
                    type: [Boolean, String],
                    default: !1
                }
            },
            data: function() {
                var t = "Uni_".concat(Math.ceil(1e6 * Math.random()).toString(36))
                  , e = "Uni_".concat(Math.ceil(1e6 * Math.random()).toString(36));
                return {
                    textWidth: 0,
                    boxWidth: 0,
                    wrapWidth: "",
                    webviewHide: !1,
                    elId: t,
                    elIdBox: e,
                    show: !0,
                    animationDuration: "none",
                    animationPlayState: "paused",
                    animationDelay: "0s"
                }
            },
            mounted: function() {
                var t = this;
                this.$nextTick((function() {
                    t.initSize()
                }
                ))
            },
            methods: {
                initSize: function() {
                    var t = this;
                    if (this.scrollable) {
                        var e = []
                          , n = new Promise((function(e, n) {
                            uni.createSelectorQuery().in(t).select("#".concat(t.elId)).boundingClientRect().exec((function(n) {
                                t.textWidth = n[0].width,
                                e()
                            }
                            ))
                        }
                        ))
                          , i = new Promise((function(e, n) {
                            uni.createSelectorQuery().in(t).select("#".concat(t.elIdBox)).boundingClientRect().exec((function(n) {
                                t.boxWidth = n[0].width,
                                e()
                            }
                            ))
                        }
                        ));
                        e.push(n),
                        e.push(i),
                        Promise.all(e).then((function() {
                            t.animationDuration = "".concat(t.textWidth / t.speed, "s"),
                            t.animationDelay = "-".concat(t.boxWidth / t.speed, "s"),
                            setTimeout((function() {
                                t.animationPlayState = "running"
                            }
                            ), 1e3)
                        }
                        ))
                    }
                },
                loopAnimation: function() {},
                clickMore: function() {
                    this.$emit("getmore")
                },
                close: function() {
                    this.show = !1,
                    this.$emit("close")
                },
                onClick: function() {
                    this.$emit("click")
                }
            }
        };
        e.default = i
    },
    "1ada": function(t, e, n) {
        var i = n("55d1");
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var a = n("4f06").default;
        a("fb23a4c6", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "1de5": function(t, e, n) {
        "use strict";
        t.exports = function(t, e) {
            return e || (e = {}),
            t = t && t.__esModule ? t.default : t,
            "string" !== typeof t ? t : (/^['"].*['"]$/.test(t) && (t = t.slice(1, -1)),
            e.hash && (t += e.hash),
            /["'() \t\n]/.test(t) || e.needQuotes ? '"'.concat(t.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : t)
        }
    },
    "22c0": function(t, e, n) {
        var i = n("24fb");
        e = i(!1),
        e.push([t.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-fab[data-v-5fa53fd9]{position:fixed;display:flex;justify-content:center;align-items:center;z-index:10;border-radius:45px;box-shadow:0 1px 5px 2px rgba(0,0,0,.3)}.uni-cursor-point[data-v-5fa53fd9]{cursor:pointer}.uni-fab--active[data-v-5fa53fd9]{opacity:1}.uni-fab--leftBottom[data-v-5fa53fd9]{left:15px;bottom:30px;left:calc(15px + var(--window-left));bottom:calc(30px + var(--window-bottom))}.uni-fab--leftTop[data-v-5fa53fd9]{left:15px;top:30px;left:calc(15px + var(--window-left));top:calc(30px + var(--window-top))}.uni-fab--rightBottom[data-v-5fa53fd9]{right:15px;bottom:30px;right:calc(15px + var(--window-right));bottom:calc(30px + var(--window-bottom))}.uni-fab--rightTop[data-v-5fa53fd9]{right:15px;top:30px;right:calc(15px + var(--window-right));top:calc(30px + var(--window-top))}.uni-fab__circle[data-v-5fa53fd9]{position:fixed;display:flex;justify-content:center;align-items:center;width:66px;height:66px;border-radius:45px;z-index:11}.uni-fab__circle--rightBottom[data-v-5fa53fd9]{right:10px;bottom:24px;right:calc(-6px + var(--window-right));bottom:calc(24px + var(--window-bottom))}.fab-circle-icon[data-v-5fa53fd9]{-webkit-transform:rotate(0deg);transform:rotate(0deg);transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;font-weight:200}.uni-fab__plus--active[data-v-5fa53fd9]{-webkit-transform:rotate(135deg);transform:rotate(135deg)}.uni-fab__content[data-v-5fa53fd9]{box-sizing:border-box;display:flex;flex-direction:row;border-radius:55px;overflow:hidden;transition-property:width,height;transition-duration:.2s;width:55px;border-color:#ddd;border-width:%?1?%;border-style:solid}.uni-fab__content--other-platform[data-v-5fa53fd9]{border-width:0;box-shadow:0 1px 5px 2px rgba(0,0,0,.3)}.uni-fab__content--left[data-v-5fa53fd9]{justify-content:flex-start}.uni-fab__content--right[data-v-5fa53fd9]{justify-content:flex-end}.uni-fab__content--flexDirection[data-v-5fa53fd9]{flex-direction:column;justify-content:flex-end}.uni-fab__content--flexDirectionStart[data-v-5fa53fd9]{flex-direction:column;justify-content:flex-start}.uni-fab__content--flexDirectionEnd[data-v-5fa53fd9]{flex-direction:column;justify-content:flex-end}.uni-fab__item[data-v-5fa53fd9]{display:flex;flex-direction:column;justify-content:center;align-items:center;width:55px;height:55px;opacity:0;transition:opacity .2s}.uni-fab__item--active[data-v-5fa53fd9]{opacity:1}.uni-fab__item-image[data-v-5fa53fd9]{width:20px;height:20px;margin-bottom:4px}.uni-fab__item-text[data-v-5fa53fd9]{color:#fff;font-size:18px}.uni-fab__item--first[data-v-5fa53fd9]{width:55px}.log-wrap[data-v-5fa53fd9], .reg-wrap[data-v-5fa53fd9]{width:%?666?%;background:#213d73}.log-wrap .btn-min[data-v-5fa53fd9], .reg-wrap .btn-min[data-v-5fa53fd9]{width:%?240?%;height:%?75?%;line-height:%?75?%}', ""]),
        t.exports = e
    },
    "22ca": function(t, e, n) {
        var i = n("5073");
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var a = n("4f06").default;
        a("7886a610", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "23c6": function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("2790")
          , a = n.n(i);
        for (var s in i)
            "default" !== s && function(t) {
                n.d(e, t, (function() {
                    return i[t]
                }
                ))
            }(s);
        e["default"] = a.a
    },
    2629: function(t, e, n) {
        t.exports = n.p + "static/img/bg2.481eef93.png"
    },
    2790: function(t, e, n) {
        "use strict";
        var i = n("4ea4");
        n("7db0"),
        n("a9e3"),
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = void 0;
        var a = i(n("fd52"))
          , s = function(t) {
            var e = /^[0-9]*$/g;
            return "number" === typeof t || e.test(t) ? t + "px" : t
        }
          , o = {
            name: "UniIcons",
            emits: ["click"],
            props: {
                type: {
                    type: String,
                    default: ""
                },
                color: {
                    type: String,
                    default: "#333333"
                },
                size: {
                    type: [Number, String],
                    default: 16
                },
                customPrefix: {
                    type: String,
                    default: ""
                }
            },
            data: function() {
                return {
                    icons: a.default.glyphs
                }
            },
            computed: {
                unicode: function() {
                    var t = this
                      , e = this.icons.find((function(e) {
                        return e.font_class === t.type
                    }
                    ));
                    return e ? unescape("%u".concat(e.unicode)) : ""
                },
                iconSize: function() {
                    return s(this.size)
                }
            },
            methods: {
                _onClick: function() {
                    this.$emit("click")
                }
            }
        };
        e.default = o
    },
    2909: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = c;
        var i = r(n("6005"))
          , a = r(n("db90"))
          , s = r(n("06c5"))
          , o = r(n("3427"));
        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        function c(t) {
            return (0,
            i.default)(t) || (0,
            a.default)(t) || (0,
            s.default)(t) || (0,
            o.default)()
        }
    },
    "29d4": function(t, e, n) {
        t.exports = n.p + "static/img/whyChat.087c3789.png"
    },
    "2d2c": function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("007d")
          , a = n("5a67");
        for (var s in a)
            "default" !== s && function(t) {
                n.d(e, t, (function() {
                    return a[t]
                }
                ))
            }(s);
        n("0fcc");
        var o, r = n("f0c5"), c = Object(r["a"])(a["default"], i["b"], i["c"], !1, null, "dccfa0e6", null, !1, i["a"], o);
        e["default"] = c.exports
    },
    "2d37": function(t, e, n) {
        t.exports = n.p + "static/img/zb.4e61dbb6.png"
    },
    "2d3f": function(t, e, n) {
        var i = n("0f11");
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var a = n("4f06").default;
        a("3a55b092", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "2e1b": function(t, e, n) {
        t.exports = n.p + "static/img/coin_kuang_light011.ca8f1bca.png"
    },
    "308b": function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("db85")
          , a = n.n(i);
        for (var s in i)
            "default" !== s && function(t) {
                n.d(e, t, (function() {
                    return i[t]
                }
                ))
            }(s);
        e["default"] = a.a
    },
    "309c": function(t, e, n) {
        "use strict";
        var i = n("22ca")
          , a = n.n(i);
        a.a
    },
    "32b1": function(t, e, n) {
        t.exports = n.p + "static/fonts/DIN-Bold.20720c3a.otf"
    },
    3427: function(t, e, n) {
        "use strict";
        function i() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = i
    },
    3557: function(t, e, n) {
        "use strict";
        var i = n("4ea4");
        n("99af"),
        n("4160"),
        n("caad"),
        n("d3b7"),
        n("2532"),
        n("159b"),
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.createAnimation = u;
        var a = i(n("5530"))
          , s = i(n("d4ec"))
          , o = i(n("bee2"))
          , r = function() {
            function t(e, n) {
                (0,
                s.default)(this, t),
                this.options = e,
                this.animation = uni.createAnimation(e),
                this.currentStepAnimates = {},
                this.next = 0,
                this.$ = n
            }
            return (0,
            o.default)(t, [{
                key: "_nvuePushAnimates",
                value: function(t, e) {
                    var n = this.currentStepAnimates[this.next]
                      , i = {};
                    if (i = n || {
                        styles: {},
                        config: {}
                    },
                    c.includes(t)) {
                        i.styles.transform || (i.styles.transform = "");
                        var a = "";
                        "rotate" === t && (a = "deg"),
                        i.styles.transform += "".concat(t, "(").concat(e + a, ") ")
                    } else
                        i.styles[t] = "".concat(e);
                    this.currentStepAnimates[this.next] = i
                }
            }, {
                key: "_animateRun",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , n = this.$.$refs["ani"].ref;
                    if (n)
                        return new Promise((function(i, s) {
                            nvueAnimation.transition(n, (0,
                            a.default)({
                                styles: t
                            }, e), (function(t) {
                                i()
                            }
                            ))
                        }
                        ))
                }
            }, {
                key: "_nvueNextAnimate",
                value: function(t) {
                    var e = this
                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                      , i = arguments.length > 2 ? arguments[2] : void 0
                      , a = t[n];
                    if (a) {
                        var s = a.styles
                          , o = a.config;
                        this._animateRun(s, o).then((function() {
                            n += 1,
                            e._nvueNextAnimate(t, n, i)
                        }
                        ))
                    } else
                        this.currentStepAnimates = {},
                        "function" === typeof i && i(),
                        this.isEnd = !0
                }
            }, {
                key: "step",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return this.animation.step(t),
                    this
                }
            }, {
                key: "run",
                value: function(t) {
                    this.$.animationData = this.animation.export(),
                    this.$.timer = setTimeout((function() {
                        "function" === typeof t && t()
                    }
                    ), this.$.durationTime)
                }
            }]),
            t
        }()
          , c = ["matrix", "matrix3d", "rotate", "rotate3d", "rotateX", "rotateY", "rotateZ", "scale", "scale3d", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "translate", "translate3d", "translateX", "translateY", "translateZ"]
          , d = ["opacity", "backgroundColor"]
          , l = ["width", "height", "left", "right", "top", "bottom"];
        function u(t, e) {
            if (e)
                return clearTimeout(e.timer),
                new r(t,e)
        }
        c.concat(d, l).forEach((function(t) {
            r.prototype[t] = function() {
                var e;
                return (e = this.animation)[t].apply(e, arguments),
                this
            }
        }
        ))
    },
    "3aa1": function(t, e, n) {
        "use strict";
        var i = n("4ea4");
        n("c975"),
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = void 0;
        var a = i(n("740e"))
          , s = {
            name: "uniPopup",
            components: {
                keypress: a.default
            },
            emits: ["change", "maskClick"],
            props: {
                animation: {
                    type: Boolean,
                    default: !0
                },
                type: {
                    type: String,
                    default: "center"
                },
                maskClick: {
                    type: Boolean,
                    default: !0
                },
                backgroundColor: {
                    type: String,
                    default: "none"
                },
                safeArea: {
                    type: Boolean,
                    default: !0
                }
            },
            watch: {
                type: {
                    handler: function(t) {
                        this.config[t] && this[this.config[t]](!0)
                    },
                    immediate: !0
                },
                isDesktop: {
                    handler: function(t) {
                        this.config[t] && this[this.config[this.type]](!0)
                    },
                    immediate: !0
                },
                maskClick: {
                    handler: function(t) {
                        this.mkclick = t
                    },
                    immediate: !0
                }
            },
            data: function() {
                return {
                    duration: 300,
                    ani: [],
                    showPopup: !1,
                    showTrans: !1,
                    popupWidth: 0,
                    popupHeight: 0,
                    config: {
                        top: "top",
                        bottom: "bottom",
                        center: "center",
                        left: "left",
                        right: "right",
                        message: "top",
                        dialog: "center",
                        share: "bottom"
                    },
                    maskClass: {
                        position: "fixed",
                        bottom: 0,
                        top: 0,
                        left: 0,
                        right: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.4)"
                    },
                    transClass: {
                        position: "fixed",
                        left: 0,
                        right: 0
                    },
                    maskShow: !0,
                    mkclick: !0,
                    popupstyle: this.isDesktop ? "fixforpc-top" : "top"
                }
            },
            computed: {
                isDesktop: function() {
                    return this.popupWidth >= 500 && this.popupHeight >= 500
                },
                bg: function() {
                    return "" === this.backgroundColor || "none" === this.backgroundColor ? "transparent" : this.backgroundColor
                }
            },
            mounted: function() {
                var t = this
                  , e = function() {
                    var e = uni.getSystemInfoSync()
                      , n = e.windowWidth
                      , i = e.windowHeight
                      , a = e.windowTop
                      , s = e.safeAreaInsets;
                    t.popupWidth = n,
                    t.popupHeight = i + a,
                    t.safeArea ? t.safeAreaInsets = s : t.safeAreaInsets = 0
                };
                e()
            },
            created: function() {
                this.mkclick = this.maskClick,
                this.animation ? this.duration = 300 : this.duration = 0,
                this.messageChild = null,
                this.clearPropagation = !1
            },
            methods: {
                closeMask: function() {
                    this.maskShow = !1
                },
                disableMask: function() {
                    this.mkclick = !1
                },
                clear: function(t) {
                    t.stopPropagation(),
                    this.clearPropagation = !0
                },
                open: function(t) {
                    var e = ["top", "center", "bottom", "left", "right", "message", "dialog", "share"];
                    t && -1 !== e.indexOf(t) || (t = this.type),
                    this.config[t] ? (this[this.config[t]](),
                    this.$emit("change", {
                        show: !0,
                        type: t
                    })) : console.error("缺少类型：", t)
                },
                close: function(t) {
                    var e = this;
                    this.showTrans = !1,
                    this.$emit("change", {
                        show: !1,
                        type: this.type
                    }),
                    clearTimeout(this.timer),
                    this.timer = setTimeout((function() {
                        e.showPopup = !1
                    }
                    ), 300)
                },
                touchstart: function() {
                    this.clearPropagation = !1
                },
                onTap: function() {
                    this.clearPropagation ? this.clearPropagation = !1 : (this.$emit("maskClick"),
                    this.mkclick && this.close())
                },
                top: function(t) {
                    var e = this;
                    this.popupstyle = this.isDesktop ? "fixforpc-top" : "top",
                    this.ani = ["slide-top"],
                    this.transClass = {
                        position: "fixed",
                        left: 0,
                        right: 0,
                        backgroundColor: this.bg
                    },
                    t || (this.showPopup = !0,
                    this.showTrans = !0,
                    this.$nextTick((function() {
                        e.messageChild && "message" === e.type && e.messageChild.timerClose()
                    }
                    )))
                },
                bottom: function(t) {
                    this.popupstyle = "bottom",
                    this.ani = ["slide-bottom"],
                    this.transClass = {
                        position: "fixed",
                        left: 0,
                        right: 0,
                        bottom: 0,
                        paddingBottom: this.safeAreaInsets && this.safeAreaInsets.bottom || 0,
                        backgroundColor: this.bg
                    },
                    t || (this.showPopup = !0,
                    this.showTrans = !0)
                },
                center: function(t) {
                    this.popupstyle = "center",
                    this.ani = ["zoom-out", "fade"],
                    this.transClass = {
                        position: "fixed",
                        display: "flex",
                        flexDirection: "column",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        top: 0,
                        justifyContent: "center",
                        alignItems: "center"
                    },
                    t || (this.showPopup = !0,
                    this.showTrans = !0)
                },
                left: function(t) {
                    this.popupstyle = "left",
                    this.ani = ["slide-left"],
                    this.transClass = {
                        position: "fixed",
                        left: 0,
                        bottom: 0,
                        top: 0,
                        backgroundColor: this.bg,
                        display: "flex",
                        flexDirection: "column"
                    },
                    t || (this.showPopup = !0,
                    this.showTrans = !0)
                },
                right: function(t) {
                    this.popupstyle = "right",
                    this.ani = ["slide-right"],
                    this.transClass = {
                        position: "fixed",
                        bottom: 0,
                        right: 0,
                        top: 0,
                        backgroundColor: this.bg,
                        display: "flex",
                        flexDirection: "column"
                    },
                    t || (this.showPopup = !0,
                    this.showTrans = !0)
                }
            }
        };
        e.default = s
    },
    "3e9d": function(t, e, n) {
        t.exports = n.p + "static/img/coin_kuang_light003.14af2172.png"
    },
    4283: function(t, e, n) {
        "use strict";
        var i = n("4ea4");
        n("cb29"),
        n("a9e3"),
        n("d3b7"),
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = void 0,
        n("96cf");
        var a = i(n("1da1"))
          , s = i(n("843f"))
          , o = {
            name: "uni-qrcode",
            props: {
                cid: {
                    type: String,
                    required: !0
                },
                text: {
                    type: String,
                    required: !0
                },
                size: {
                    type: Number,
                    default: uni.upx2px(590)
                },
                margin: {
                    type: Number,
                    default: 0
                },
                backgroundColor: {
                    type: String,
                    default: "#ffffff"
                },
                foregroundColor: {
                    type: String,
                    default: "#000000"
                },
                backgroundImage: {
                    type: String
                },
                logo: {
                    type: String
                },
                makeOnLoad: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {}
            },
            watch: {
                text: "make"
            },
            mounted: function() {
                this.makeOnLoad && this.make()
            },
            methods: {
                make: function() {
                    var t = this;
                    return (0,
                    a.default)(regeneratorRuntime.mark((function e() {
                        var n, i;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return n = {
                                        canvasId: t.cid,
                                        componentInstance: t,
                                        text: t.text,
                                        size: t.size,
                                        margin: t.margin,
                                        backgroundColor: t.backgroundImage ? "rgba(255,255,255,0)" : t.backgroundColor,
                                        foregroundColor: t.foregroundColor
                                    },
                                    e.next = 3,
                                    t.makeSync(n);
                                case 3:
                                    if (i = e.sent,
                                    !t.backgroundImage) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.next = 7,
                                    t.drawBackgroundImageSync(i);
                                case 7:
                                    i = e.sent;
                                case 8:
                                    if (!t.logo) {
                                        e.next = 12;
                                        break
                                    }
                                    return e.next = 11,
                                    t.drawLogoSync(i);
                                case 11:
                                    i = e.sent;
                                case 12:
                                    t.makeComplete(i);
                                case 13:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                },
                makeComplete: function(t) {
                    this.$emit("makeComplete", t)
                },
                drawBackgroundImage: function(t) {
                    var e = this
                      , n = uni.createCanvasContext(this.cid, this);
                    n.drawImage(this.backgroundImage, 0, 0, this.size, this.size),
                    n.drawImage(t.filePath, 0, 0, this.size, this.size),
                    n.draw(!1, (function() {
                        uni.canvasToTempFilePath({
                            canvasId: e.cid,
                            success: function(e) {
                                t.success && t.success(e.tempFilePath)
                            },
                            fail: function(e) {
                                t.fail && t.fail(e)
                            }
                        }, e)
                    }
                    ))
                },
                drawBackgroundImageSync: function(t) {
                    var e = this;
                    return (0,
                    a.default)(regeneratorRuntime.mark((function n() {
                        return regeneratorRuntime.wrap((function(n) {
                            while (1)
                                switch (n.prev = n.next) {
                                case 0:
                                    return n.abrupt("return", new Promise((function(n, i) {
                                        e.drawBackgroundImage({
                                            filePath: t,
                                            success: function(t) {
                                                n(t)
                                            },
                                            fail: function(t) {
                                                i(t)
                                            }
                                        })
                                    }
                                    )));
                                case 1:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n)
                    }
                    )))()
                },
                fillRoundRect: function(t, e, n, i, a, s) {
                    t.save(),
                    t.translate(n, i),
                    t.beginPath(),
                    t.arc(a - e, s - e, e, 0, Math.PI / 2),
                    t.lineTo(e, s),
                    t.arc(e, s - e, e, Math.PI / 2, Math.PI),
                    t.lineTo(0, e),
                    t.arc(e, e, e, Math.PI, 3 * Math.PI / 2),
                    t.lineTo(a - e, 0),
                    t.arc(a - e, e, e, 3 * Math.PI / 2, 2 * Math.PI),
                    t.lineTo(a, s - e),
                    t.closePath(),
                    t.setFillStyle("#ffffff"),
                    t.fill(),
                    t.restore()
                },
                drawLogo: function(t) {
                    var e = this
                      , n = uni.createCanvasContext(this.cid, this);
                    n.drawImage(t.filePath, 0, 0, this.size, this.size);
                    var i = this.size / 4
                      , a = this.size / 2 - i / 2
                      , s = a
                      , o = i + 10
                      , r = this.size / 2 - o / 2
                      , c = r
                      , d = 5;
                    this.fillRoundRect(n, d, r, c, o, o),
                    n.drawImage(this.logo, a, s, i, i),
                    n.draw(!1, (function() {
                        uni.canvasToTempFilePath({
                            canvasId: e.cid,
                            success: function(e) {
                                t.success && t.success(e.tempFilePath)
                            },
                            fail: function(e) {
                                t.fail && t.fail(e)
                            }
                        }, e)
                    }
                    ))
                },
                drawLogoSync: function(t) {
                    var e = this;
                    return (0,
                    a.default)(regeneratorRuntime.mark((function n() {
                        return regeneratorRuntime.wrap((function(n) {
                            while (1)
                                switch (n.prev = n.next) {
                                case 0:
                                    return n.abrupt("return", new Promise((function(n, i) {
                                        e.drawLogo({
                                            filePath: t,
                                            success: function(t) {
                                                n(t)
                                            },
                                            fail: function(t) {
                                                i(t)
                                            }
                                        })
                                    }
                                    )));
                                case 1:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n)
                    }
                    )))()
                },
                makeSync: function(t) {
                    return (0,
                    a.default)(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", new Promise((function(e, n) {
                                        s.default.make({
                                            canvasId: t.canvasId,
                                            componentInstance: t.componentInstance,
                                            text: t.text,
                                            size: t.size,
                                            margin: t.margin,
                                            backgroundColor: t.backgroundColor,
                                            foregroundColor: t.foregroundColor,
                                            success: function(t) {
                                                e(t)
                                            },
                                            fail: function(t) {
                                                n(t)
                                            }
                                        })
                                    }
                                    )));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                }
            }
        };
        e.default = o
    },
    "43fb": function(t, e, n) {
        "use strict";
        var i;
        n.d(e, "b", (function() {
            return a
        }
        )),
        n.d(e, "c", (function() {
            return s
        }
        )),
        n.d(e, "a", (function() {
            return i
        }
        ));
        var a = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return t.isShow ? n("v-uni-view", {
                ref: "ani",
                class: t.customClass,
                style: t.transformStyles,
                attrs: {
                    animation: t.animationData
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.onClick.apply(void 0, arguments)
                    }
                }
            }, [t._t("default")], 2) : t._e()
        }
          , s = []
    },
    "44b4": function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("b095")
          , a = n.n(i);
        for (var s in i)
            "default" !== s && function(t) {
                n.d(e, t, (function() {
                    return i[t]
                }
                ))
            }(s);
        e["default"] = a.a
    },
    4850: function(t, e, n) {
        t.exports = n.p + "static/img/coin_kuang_light007.ce03583c.png"
    },
    "4fb2": function(t, e, n) {
        var i = {
            "./coin_kuang_light001.png": "91c1",
            "./coin_kuang_light002.png": "0d71",
            "./coin_kuang_light003.png": "3e9d",
            "./coin_kuang_light004.png": "e6d9",
            "./coin_kuang_light005.png": "09d4",
            "./coin_kuang_light006.png": "09c9",
            "./coin_kuang_light007.png": "4850",
            "./coin_kuang_light008.png": "dd2c",
            "./coin_kuang_light009.png": "a27c",
            "./coin_kuang_light010.png": "1022",
            "./coin_kuang_light011.png": "2e1b",
            "./coin_kuang_light012.png": "0cc0"
        };
        function a(t) {
            var e = s(t);
            return n(e)
        }
        function s(t) {
            if (!n.o(i, t)) {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND",
                e
            }
            return i[t]
        }
        a.keys = function() {
            return Object.keys(i)
        }
        ,
        a.resolve = s,
        t.exports = a,
        a.id = "4fb2"
    },
    "4fbf": function(t, e, n) {
        "use strict";
        n.d(e, "b", (function() {
            return a
        }
        )),
        n.d(e, "c", (function() {
            return s
        }
        )),
        n.d(e, "a", (function() {
            return i
        }
        ));
        var i = {
            nTabs: n("7924").default,
            nBanner: n("9ebd").default,
            uniNoticeBar: n("18fb").default,
            uniQrcode: n("5566").default,
            uniPopup: n("2d2c").default,
            uniFab: n("92e2").default
        }
          , a = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("v-uni-view", {
                staticClass: "container",
                staticStyle: {
                    height: "100%"
                }
            }, [i("v-uni-view", {
                staticClass: "head-bg w-full",
                staticStyle: {
                    position: "fixed",
                    top: "0",
                    left: "0",
                    height: "150rpx",
                    "z-index": "10"
                }
            }, [i("v-uni-view", {
                staticClass: "head-wrap dpfxsa-center le-het10 txt-ct",
                staticStyle: {
                    "margin-bottom": "-6px"
                }
            }, [i("v-uni-view", {
                staticClass: "hash-logo",
                staticStyle: {
                    width: "180rpx",
                    height: "60rpx"
                }
            }, [i("v-uni-image", {
                attrs: {
                    src: n("17f3"),
                    mode: ""
                }
            })], 1), i("v-uni-text", {
                staticClass: "item1"
            }, [t._v(t._s(t.$t("home[0]")))]), i("v-uni-text", {
                staticClass: "item1"
            }, [t._v(t._s(t.$t("home[1]")))]), i("v-uni-text", {
                staticClass: "item1",
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.setLang(t.$i18n.locale)
                    }
                }
            }, [t._v(t._s("zh-cn" == t.$i18n.locale ? "EN" : "中文"))]), i("v-uni-view", {
                staticClass: "item1 btn-wrap dpfx-center"
            }, [t.$utils.getLocStg(t.$config.isLogin) ? i("v-uni-navigator", {
                staticClass: "ac-col",
                attrs: {
                    url: "/pages/user/personal"
                }
            }, [t._v(t._s(t.$t("home[3]")))]) : i("v-uni-text", {
                staticClass: "item1",
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.handleNot.apply(void 0, arguments)
                    }
                }
            }, [t._v(t._s(t.$t("home[2]")))])], 1)], 1), i("n-tabs", {
                attrs: {
                    list: t.nav_list,
                    width: t.windowWidth
                },
                on: {
                    change: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.navChange.apply(void 0, arguments)
                    }
                },
                model: {
                    value: t.navIndex,
                    callback: function(e) {
                        t.navIndex = e
                    },
                    expression: "navIndex"
                }
            })], 1), i("v-uni-scroll-view", {
                staticClass: "scroll-wrap",
                attrs: {
                    "scroll-y": !0,
                    "scroll-top": t.scrollTop,
                    "scroll-into-view": t.pid,
                    "scroll-with-animation": !0
                },
                on: {
                    scroll: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.handleScroll.apply(void 0, arguments)
                    }
                }
            }, [i("v-uni-view", {
                staticStyle: {
                    height: "160rpx"
                }
            }), i("v-uni-view", {
                ref: "banner",
                staticClass: "banner-wrap pdtp1 pdlf30 pdrt30",
                staticStyle: {
                    transform: "translateX(-100%)"
                },
                attrs: {
                    id: "banner",
                    animation: t.aniData[0]
                }
            }, [i("n-banner", t._b({
                attrs: {
                    list: t.banner_list,
                    width: t.windowWidth
                }
            }, "n-banner", t.swiper, !1))], 1), i("v-uni-view", {
                staticClass: "notice-wrap dpfxsb pdlf40 pdrt30"
            }, [i("v-uni-view", {
                staticClass: "icon"
            }, [i("v-uni-image", {
                attrs: {
                    src: n("8659"),
                    mode: ""
                }
            })], 1), i("v-uni-view", {
                staticClass: "item1"
            }, [i("uni-notice-bar", {
                staticStyle: {
                    margin: "-5px"
                },
                attrs: {
                    scrollable: !0,
                    single: !0,
                    speed: 20,
                    text: t.news_str,
                    color: "#EAC774",
                    "background-color": "transparent"
                }
            })], 1)], 1), i("v-uni-view", {
                staticClass: "game-wrap box-bg1 pd10 "
            }, [i("v-uni-view", {
                staticClass: "poret"
            }, [i("v-uni-swiper", {
                staticClass: "g_swiper",
                staticStyle: {
                    top: "-5px"
                },
                attrs: {
                    autoplay: !0,
                    interval: 15e3,
                    circular: !0,
                    vertical: !0,
                    "disable-touch": !0
                },
                on: {
                    change: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.change.apply(void 0, arguments)
                    }
                }
            }, t._l(2, (function(e, n) {
                return i("v-uni-swiper-item", {
                    key: n,
                    staticClass: "g_swiper_item"
                }, [1 == e ? i("v-uni-view", {
                    staticClass: "poslt poslt2",
                    staticStyle: {
                        "z-index": "3"
                    },
                    on: {
                        click: function(e) {
                            arguments[0] = e = t.$handleEvent(e),
                            t.toLink("https://tronscan.io/#/address/" + t.paidInfo.address)
                        }
                    }
                }, [i("v-uni-view", {
                    staticClass: "poslt2_t ac-col",
                    staticStyle: {
                        "text-align": "center"
                    }
                }, [t._v(t._s(t.$t("game[0]")))]), i("v-uni-view", {
                    staticClass: "conrrr"
                }, [i("v-uni-view", {
                    staticClass: "numflex"
                }, [i("v-uni-text", [t._v("USDT：")]), i("ul", {
                    staticClass: "numul"
                }, t._l([8,3,0,1,2,5], (function(e, n) {
                    return i("countUp", {
                        key: n,
                        attrs: {
                            i: e,
                            delay: n + 1,
                            startCount: t.startCount
                        },
                        on: {
                            changeState: function(e) {
                                arguments[0] = e = t.$handleEvent(e),
                                t.startCount = !1
                            }
                        }
                    })
                }
                )), 1)], 1), i("v-uni-view", {
                    staticClass: "numflex"
                }, [i("v-uni-text", [t._v("TRX：")]), i("ul", {
                    staticClass: "numul"
                }, t._l([9,1,9,6,4,5], (function(e, n) {
                    return i("countUp", {
                        key: n,
                        attrs: {
                            i: e,
                            delay: n + 1,
                            startCount: t.startCount
                        },
                        on: {
                            changeState: function(e) {
                                arguments[0] = e = t.$handleEvent(e),
                                t.startCount = !1
                            }
                        }
                    })
                }
                )), 1)], 1)], 1)], 1) : 2 == e ? i("v-uni-view", {
                    staticClass: "poslt poslt2",
                    staticStyle: {
                        "z-index": "3"
                    },
                    on: {
                        click: function(e) {
                            arguments[0] = e = t.$handleEvent(e),
                            t.toLink("https://tronscan.io/#/address/" + t.paidInfo.address2)
                        }
                    }
                }, [i("v-uni-view", {
                    staticClass: "poslt2_t ac-col",
                    staticStyle: {
                        "text-align": "center"
                    }
                }, [t._v(t._s(t.$t("game[1]")))]), i("v-uni-view", {
                    staticClass: "conrrr"
                }, [i("v-uni-view", {
                    staticClass: "numflex"
                }, [i("v-uni-text", [t._v("USDT：")]), i("ul", {
                    staticClass: "numul"
                }, t._l([8,6,4,3,7,8,9,2], (function(e, n) {
                    return i("countUp", {
                        key: n,
                        attrs: {
                            i: e,
                            delay: n + 1,
                            startCount: t.startCount
                        },
                        on: {
                            changeState: function(e) {
                                arguments[0] = e = t.$handleEvent(e),
                                t.startCount = !1
                            }
                        }
                    })
                }
                )), 1)], 1), i("v-uni-view", {
                    staticClass: "numflex"
                }, [i("v-uni-text", [t._v("TRX：")]), i("ul", {
                    staticClass: "numul"
                }, t._l([1,5,5,5,5,5,5,5], (function(e, n) {
                    return i("countUp", {
                        key: n,
                        attrs: {
                            i: e,
                            delay: n + 1,
                            startCount: t.startCount
                        },
                        on: {
                            changeState: function(e) {
                                arguments[0] = e = t.$handleEvent(e),
                                t.startCount = !1
                            }
                        }
                    })
                }
                )), 1)], 1)], 1)], 1) : t._e()], 1)
            }
            )), 1)], 1), i("v-uni-view", {
                ref: "game",
                staticClass: "swiper-wrap mgbt10",
                staticStyle: {
                    transform: "translateX(100%)"
                },
                attrs: {
                    animation: t.aniData[1]
                }
            }, [i("v-uni-swiper", {
                staticClass: "game-swiper ",
                class: {
                    tab1: t.windowWidth > 750
                },
                staticStyle: {
                    height: "360rpx",
                    top: "-100px"
                },
                attrs: {
                    "next-margin": "40rpx",
                    "previous-margin": "10rpx",
                    "display-multiple-items": t.windowWidth > 750 ? 5 : 1
                },
                on: {
                    change: function(e) {
                        e.stopPropagation(),
                        arguments[0] = e = t.$handleEvent(e),
                        t.swiperChange(e, 1)
                    }
                }
            }, t._l(t.gList, (function(e, n) {
                return i("v-uni-swiper-item", {
                    key: n,
                    staticClass: "w-full ",
                    on: {
                        click: function(i) {
                            i.stopPropagation(),
                            arguments[0] = i = t.$handleEvent(i),
                            t.handleClick(n, 1, e.address)
                        }
                    }
                }, [i("v-uni-view", {
                    staticClass: "swiper-item poret",
                    staticStyle: {
                        height: "360rpx"
                    }
                }, [i("v-uni-view", {
                    staticClass: "poslt w-full h-full"
                }, [i("v-uni-image", {
                    attrs: {
                        src: e.image,
                        mode: ""
                    }
                })], 1), i("v-uni-view", {
                    staticClass: "poret colum-center h-full pdlf40",
                    staticStyle: {
                        "z-index": "3",
                        "align-items": "flex-start"
                    }
                }, ["zh-cn" == t.$i18n.locale ? i("v-uni-view", {
                    staticClass: "ftsz42 mgbt40"
                }, [t._v(t._s(e.name))]) : t._e(), "en-us" == t.$i18n.locale ? i("v-uni-view", {
                    staticClass: "ftsz42 mgbt40"
                }, [t._v(t._s(e.name_en))]) : t._e(), i("v-uni-view", {
                    staticClass: "mgbt40"
                }, [t._v(t._s(t.$t("home[5]").replace("{txt}", e.percent)))]), t.windowWidth < 750 ? i("v-uni-view", {
                    staticClass: "btn-min bd-rad40",
                    on: {
                        click: function(n) {
                            arguments[0] = n = t.$handleEvent(n),
                            t.$utils.copy(e.address)
                        }
                    }
                }, [t._v(t._s(t.$t("home[6]")))]) : i("v-uni-view", {
                    staticClass: "btn-min bd-rad40",
                    on: {
                        click: function(n) {
                            arguments[0] = n = t.$handleEvent(n),
                            t.$utils.copy(e.address)
                        }
                    }
                }, [t._v(t._s(t.$t("home[61]")))])], 1)], 1)], 1)
            }
            )), 1)], 1), t.windowWidth < 750 ? i("v-uni-view", {
                staticClass: "mgbt10 box-bg8",
                staticStyle: {
                    "margin-left": "15px",
                    "padding-left": "6px",
                    width: "90%"
                }
            }, [i("v-uni-view", {
                staticClass: "ftsz26"
            }, [t._v(t._s(t.$t("home[7]")) + "："), i("br"), i("v-uni-text", {
                staticClass: "ac-col",
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.$utils.copy(t.gItem.address)
                    }
                }
            }, [t._v(t._s(t.gItem.address))])], 1)], 1) : t._e()], 1), i("v-uni-view", {
                staticClass: "zjgz-wrap floor box-bg2 pdtp30 mgbt50",
                attrs: {
                    id: "floor1"
                }
            }, [i("v-uni-view", {
                staticStyle: {
                    height: "260rpx"
                }
            }, [i("v-uni-image", {
                attrs: {
                    src: n("f88e"),
                    mode: ""
                }
            })], 1), i("v-uni-view", {
                staticClass: "pdlf30 pdrt30 poret",
                staticStyle: {
                    "margin-top": "-186rpx",
                    overflow: "hidden"
                }
            }, [i("v-uni-view", {
                ref: "gz1",
                staticClass: "txt-ct ftsz42 bold mgbt40",
                staticStyle: {
                    transform: "translateY(-100%)"
                },
                attrs: {
                    animation: t.aniData1[0]
                }
            }, [t._v(t._s(t.$t("home[8]")))]), i("v-uni-view", {
                class: {
                    wrap_flex: t.windowWidth > 750
                }
            }, [i("v-uni-view", {
                ref: "gz2",
                staticClass: "box-bg3 bd-rad40 pd50 mgbt50 item",
                staticStyle: {
                    transform: "translateX(-100%)"
                },
                attrs: {
                    animation: t.aniData1[1]
                }
            }, [i("v-uni-view", {
                staticClass: "ftsz36 bold mgbt20"
            }, [t._v(t._s(t.$t("home[8]")))]), "zh-cn" == t.$i18n.locale ? i("v-uni-rich-text", {
                attrs: {
                    nodes: t.zjgz_html
                }
            }) : t._e(), "en-us" == t.$i18n.locale ? i("v-uni-rich-text", {
                attrs: {
                    nodes: t.zjgz_html_en
                }
            }) : t._e()], 1), t.windowWidth > 750 ? i("v-uni-view", {
                staticClass: "wrap  mgbt50 ",
                staticStyle: {
                    transform: "translatex(100%)"
                },
                attrs: {
                    animation: t.aniData1[1]
                }
            }, [i("v-uni-view", {
                staticClass: "box-bg3 bd-rad40 pd50 mgbt50"
            }, [i("v-uni-view", {
                staticClass: "wrap_flex ftsz36"
            }, [i("v-uni-text", [t._v(t._s(t.$t("home[7]")))]), t.rules_code ? i("v-uni-view", {
                staticClass: "btn-min",
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.$utils.copy(t.rules_code)
                    }
                }
            }, [t._v(t._s(t.$t("home[45]")))]) : t._e()], 1), i("v-uni-view", {
                staticClass: "mgtp40 ftsz30"
            }, [t._v(t._s(t.rules_code))])], 1), i("v-uni-view", {
                staticClass: "box-bg3 bd-rad40 pd50"
            }, [i("v-uni-view", {
                staticClass: "code "
            }, [i("uni-qrcode", {
                attrs: {
                    cid: "game_qrcode",
                    text: t.rules_code,
                    size: 110
                }
            })], 1)], 1)], 1) : t._e()], 1)], 1)], 1), i("v-uni-view", {
                staticClass: "zjsl-wrap floor1 pdlf30 mgbt30 hid",
                staticStyle: {
                    overflow: "hidden"
                }
            }, [i("v-uni-view", {
                ref: "zj1",
                staticClass: "txt-ct ftsz42 bold mgbt50",
                staticStyle: {
                    transform: "translateY(-120%)"
                },
                attrs: {
                    animation: t.aniData2[0]
                }
            }, [t._v(t._s(t.$t("home[10]")))]), i("v-uni-view", {}, [i("v-uni-swiper", {
                staticClass: "zjsl-swiper",
                class: {
                    tab2: t.windowWidth > 750
                },
                attrs: {
                    "next-margin": "50rpx",
                    "previous-margin": "50rpx",
                    duration: "300"
                }
            }, t._l(t.zListItem, (function(e, n) {
                return i("v-uni-swiper-item", {
                    key: n,
                    staticClass: "pdrt30 item"
                }, [i("v-uni-view", {
                    staticClass: "swiper-item colum-x-center poret bd-rad20 pd30 pdtp50 pdbt50"
                }, ["zh-cn" == t.$i18n.locale ? i("v-uni-view", {
                    staticClass: "mgbt30"
                }, [t._v(t._s(t.$t("home[11]")) + "："), i("v-uni-text", {
                    staticClass: "cont-col"
                }, [t._v(t._s(e.transfer_amount))]), 5 == e.gameid || 1 == e.gameid || 2 == e.gameid ? i("v-uni-text", {
                    staticStyle: {
                        "margin-left": "20rpx"
                    }
                }, [t._v(t._s("\n" + e.bet))]) : t._e()], 1) : t._e(), "en-us" == t.$i18n.locale ? i("v-uni-view", {
                    staticClass: "mgbt30"
                }, [t._v(t._s(t.$t("home[11]")) + "："), i("v-uni-text", {
                    staticClass: "cont-col"
                }, [t._v(t._s(e.transfer_amount))]), 5 == e.gameid || 1 == e.gameid || 2 == e.gameid ? i("v-uni-text", {
                    staticStyle: {
                        "margin-left": "20rpx"
                    }
                }, [t._v(t._s("\n" + e.bet_en))]) : t._e()], 1) : t._e(), i("v-uni-view", {
                    staticClass: "mgbt20"
                }, [t._v(t._s(t.$t("home[12]") + "："))]), i("v-uni-view", {
                    staticClass: "mgbt30"
                }, [t._v(t._s(e.hash))]), i("v-uni-view", {
                    staticClass: "mgbt20"
                }, [t._v(t._s(t.$t("home[13]"))), i("v-uni-text", {
                    staticClass: "cont-col pdlf10"
                }, [t._v(t._s(e.hash_num))])], 1), "zh-cn" == t.$i18n.locale && 3 == e.gameid ? i("v-uni-view", {
                    staticClass: "mgbt20"
                }, [t._v(t._s(e.hash_text))]) : t._e(), "en-us" == t.$i18n.locale && 3 == e.gameid ? i("v-uni-view", {
                    staticClass: "mgbt20"
                }, [t._v(t._s(e.hash_text_en))]) : t._e(), 3 == e.gameid ? i("v-uni-view", {
                    staticStyle: {
                        "margin-top": "20rpx"
                    }
                }, [e.isreward ? i("v-uni-view", {
                    staticClass: "mgbt20"
                }, [t._v(t._s(t.$t("home[15]"))), i("v-uni-text", {
                    staticClass: "tit-col pdlf10 pdrt10"
                }, [t._v(t._s(t.$t("home[16]")))]), t._v(t._s(t.$t("home[17]")) + "：")], 1) : i("v-uni-view", {
                    staticClass: "mgbt20"
                }, [i("v-uni-text", {
                    staticClass: "tit-col pdlf10 pdrt10"
                })], 1), "zh-cn" == t.$i18n.locale ? i("v-uni-view", {}, [t._v(t._s(e.text))]) : t._e(), "en-us" == t.$i18n.locale ? i("v-uni-view", {}, [t._v(t._s(e.text_en))]) : t._e()], 1) : t._e(), 4 == e.gameid ? i("v-uni-view", {
                    staticStyle: {
                        "margin-top": "20rpx"
                    }
                }, ["zh-cn" == t.$i18n.locale ? i("v-uni-view", {
                    staticClass: "mgbt20"
                }, [i("v-uni-text", [t._v(t._s(e.hash_text))]), i("v-uni-text", {
                    staticClass: "tit-col pdlf10 pdrt10"
                }, [t._v(t._s(e.hash_text2))]), i("v-uni-view", [t._v(t._s(e.hash_text3))])], 1) : t._e(), "en-us" == t.$i18n.locale ? i("v-uni-view", {
                    staticClass: "mgbt20"
                }, [i("v-uni-text", [t._v(t._s(e.hash_text_en))]), i("v-uni-text", {
                    staticClass: "tit-col pdlf10 pdrt10"
                }, [t._v(t._s(e.hash_text2))]), i("v-uni-view", [t._v(t._s(e.hash_text3_en))])], 1) : t._e(), "zh-cn" == t.$i18n.locale ? i("v-uni-view", {
                    staticClass: "mgbt20"
                }, [i("v-uni-text", [t._v(t._s(e.hash_text4))]), i("v-uni-text", {
                    staticClass: "tit-col pdlf10 pdrt10"
                }, [t._v(t._s(e.hash_text5))]), i("v-uni-view", [t._v(t._s(e.hash_text6))])], 1) : t._e(), "en-us" == t.$i18n.locale ? i("v-uni-view", {
                    staticClass: "mgbt20"
                }, [i("v-uni-text", [t._v(t._s(e.hash_text4_en))]), i("v-uni-text", {
                    staticClass: "tit-col pdlf10 pdrt10"
                }, [t._v(t._s(e.hash_text5))]), i("v-uni-view", [t._v(t._s(e.hash_text6_en))])], 1) : t._e(), "zh-cn" == t.$i18n.locale ? i("v-uni-view", {
                    staticClass: "mgbt20"
                }, [t._v(t._s(e.text1))]) : t._e(), "en-us" == t.$i18n.locale ? i("v-uni-view", {
                    staticClass: "mgbt20"
                }, [t._v(t._s(e.text1_en))]) : t._e(), i("v-uni-view", {
                    staticClass: "mgbt20"
                }, [t._v(t._s(e.text2))])], 1) : t._e(), 5 == e.gameid ? i("v-uni-view", {
                    staticStyle: {
                        "margin-top": "20rpx"
                    }
                }, ["zh-cn" == t.$i18n.locale ? i("v-uni-view", {
                    staticClass: "mgbt20"
                }, [i("v-uni-text", [t._v(t._s(e.hash_text))]), i("v-uni-text", {
                    staticClass: "tit-col pdlf10 pdrt10"
                }, [t._v(t._s(e.hash_text2))]), i("v-uni-view", [t._v(t._s(e.hash_text3))])], 1) : t._e(), "en-us" == t.$i18n.locale ? i("v-uni-view", {
                    staticClass: "mgbt20"
                }, [i("v-uni-text", [t._v(t._s(e.hash_text_en))]), i("v-uni-text", {
                    staticClass: "tit-col pdlf10 pdrt10"
                }, [t._v(t._s(e.hash_text2))]), i("v-uni-view", [t._v(t._s(e.hash_text3_en))])], 1) : t._e(), "zh-cn" == t.$i18n.locale ? i("v-uni-view", {
                    staticClass: "mgbt20"
                }, [i("v-uni-text", [t._v(t._s(e.hash_text4))]), i("v-uni-text", {
                    staticClass: "tit-col pdlf10 pdrt10"
                }, [t._v(t._s(e.hash_text5))]), i("v-uni-view", [t._v(t._s(e.hash_text6))])], 1) : t._e(), "en-us" == t.$i18n.locale ? i("v-uni-view", {
                    staticClass: "mgbt20"
                }, [i("v-uni-text", [t._v(t._s(e.hash_text4_en))]), i("v-uni-text", {
                    staticClass: "tit-col pdlf10 pdrt10"
                }, [t._v(t._s(e.hash_text5))]), i("v-uni-view", [t._v(t._s(e.hash_text6_en))])], 1) : t._e(), "zh-cn" == t.$i18n.locale ? i("v-uni-view", {
                    staticClass: "mgbt20"
                }, [t._v(t._s(e.text1))]) : t._e(), "en-us" == t.$i18n.locale ? i("v-uni-view", {
                    staticClass: "mgbt20"
                }, [t._v(t._s(e.text1_en))]) : t._e(), i("v-uni-view", {
                    staticClass: "mgbt20"
                }, [t._v(t._s(e.text2))])], 1) : t._e(), 1 == e.gameid ? i("v-uni-view", {
                    staticStyle: {
                        "margin-top": "20rpx"
                    }
                }, [e.isreward ? i("v-uni-view", {
                    staticClass: "mgbt20"
                }, [t._v(t._s(t.$t("home[15]"))), i("v-uni-text", {
                    staticClass: "tit-col pdlf10 pdrt10"
                }, [t._v(t._s(t.$t("home[16]")))]), t._v(t._s(t.$t("home[17]")) + "：")], 1) : i("v-uni-view", {
                    staticClass: "mgbt20"
                }, [i("v-uni-text", {
                    staticClass: "tit-col pdlf10 pdrt10"
                })], 1), "zh-cn" == t.$i18n.locale ? i("v-uni-view", {}, [t._v(t._s(e.text))]) : t._e(), "en-us" == t.$i18n.locale ? i("v-uni-view", {}, [t._v(t._s(e.text_en))]) : t._e()], 1) : t._e(), 2 == e.gameid ? i("v-uni-view", {
                    staticStyle: {
                        "margin-top": "20rpx"
                    }
                }, [e.isreward ? i("v-uni-view", {
                    staticClass: "mgbt20"
                }, [t._v(t._s(t.$t("home[15]"))), i("v-uni-text", {
                    staticClass: "tit-col pdlf10 pdrt10"
                }, [t._v(t._s(t.$t("home[16]")))]), t._v(t._s(t.$t("home[17]")) + "：")], 1) : i("v-uni-view", {
                    staticClass: "mgbt20"
                }, [i("v-uni-text", {
                    staticClass: "tit-col pdlf10 pdrt10"
                })], 1), "zh-cn" == t.$i18n.locale ? i("v-uni-view", {}, [t._v(t._s(e.text))]) : t._e(), "en-us" == t.$i18n.locale ? i("v-uni-view", {}, [t._v(t._s(e.text_en))]) : t._e()], 1) : t._e()], 1)], 1)
            }
            )), 1)], 1)], 1), i("v-uni-view", {
                staticClass: "cylc-wrap floor box-bg2 pdtp30 mgbt50",
                attrs: {
                    id: "floor2"
                }
            }, [i("v-uni-view", {
                staticStyle: {
                    height: "260rpx"
                }
            }, [i("v-uni-image", {
                attrs: {
                    src: n("2629"),
                    mode: ""
                }
            })], 1), i("v-uni-view", {
                staticClass: "poret hid",
                staticStyle: {
                    "margin-top": "-186rpx"
                }
            }, [i("v-uni-view", {
                ref: "cy1",
                staticClass: "txt-ct ftsz42 bold mgbt40",
                staticStyle: {
                    transform: "translateY(-100%)"
                },
                attrs: {
                    animation: t.aniData3[0]
                }
            }, [t._v(t._s(t.$t("home[18]")))]), i("v-uni-view", {
                staticClass: "dpfx mgbt20 pd30 pdtp30 box-bg2 hid",
                staticStyle: {
                    transform: "translateX(-120%)"
                },
                attrs: {
                    animation: t.aniData3[1]
                }
            }, t._l(t.cTabList, (function(e, n) {
                return i("v-uni-view", {
                    key: n,
                    ref: "cytab",
                    refInFor: !0,
                    staticClass: "item1 colum-center",
                    on: {
                        click: function(e) {
                            arguments[0] = e = t.$handleEvent(e),
                            t.cTabNum = n
                        }
                    }
                }, [i("v-uni-view", {
                    staticClass: "cylc-bg mgbt20 bd-rad txt-ct tstion ftsz32 bold",
                    class: {
                        active: n === t.cTabNum
                    }
                }, [t._v(t._s(e.id))]), i("v-uni-text", {
                    staticClass: "tstion ftsz30 txt-ct",
                    class: {
                        opc: n !== t.cTabNum
                    }
                }, [t._v(t._s(t.$t("ctab[" + n + "]")))])], 1)
            }
            )), 1), i("v-uni-view", {
                ref: "cy2",
                staticClass: "pdlf30 pdrt30",
                staticStyle: {
                    transform: "translateX(120%)"
                },
                attrs: {
                    animation: t.aniData3[2]
                }
            }, [i("v-uni-view", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 0 == t.cTabNum,
                    expression: "cTabNum==0"
                }],
                staticClass: "bd-rad40 pd40",
                staticStyle: {
                    background: "linear-gradient(9deg, #0E1F3F 1%, #1D355E 100%)"
                }
            }, [i("v-uni-view", {
                staticClass: "ftsz32 mgbt40"
            }, [t._v(t._s(t.$t("home[19]")))]), i("v-uni-view", {
                staticClass: "bd-rad20 hid pdbt40",
                staticStyle: {
                    background: "#274C8F"
                }
            }, [i("v-uni-view", {
                staticClass: "dpfx le-het8"
            }, [i("v-uni-text", {
                staticClass: "item1 pdlf50"
            }, [t._v(t._s(t.$t("home[20]")))]), i("v-uni-text", {
                staticClass: "item1"
            }, [t._v(t._s(t.$t("home[21]")))]), i("v-uni-text", {
                staticClass: "item1 pdlf20"
            }, [t._v(t._s(t.$t("home[22]")))])], 1), t._l(t.dloadList, (function(e, n) {
                return i("v-uni-view", {
                    key: n,
                    staticClass: "box-bg5 bdbt pdtp30 pdbt30"
                }, [i("v-uni-view", {
                    staticClass: "dpfx"
                }, [i("v-uni-view", {
                    staticClass: "item1 pdlf40"
                }, [i("v-uni-text", [t._v(t._s(e.name))])], 1), i("v-uni-text", {
                    staticClass: "item1",
                    on: {
                        click: function(n) {
                            arguments[0] = n = t.$handleEvent(n),
                            t.toLink(e.link)
                        }
                    }
                }, [t._v(t._s(e.link_name))]), i("v-uni-text", {
                    staticClass: "item1 pdlf20",
                    on: {
                        click: function(n) {
                            arguments[0] = n = t.$handleEvent(n),
                            t.toLink(e.link1)
                        }
                    }
                }, [t._v(t._s(t.$t("home[23]")))])], 1), "imToken" == e.name ? i("v-uni-view", {
                    staticClass: "dpfxsb-center pdrt50 mgtp30"
                }, [i("v-uni-text"), i("v-uni-text", {
                    staticClass: "pd20 pdtp8 pdbt8 bd-rad8",
                    staticStyle: {
                        background: "#EAC104"
                    }
                }, [t._v(t._s(t.$t("home[24]")) + "imToken")])], 1) : t._e()], 1)
            }
            ))], 2)], 1), i("v-uni-view", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 1 == t.cTabNum,
                    expression: "cTabNum==1"
                }],
                staticClass: "bd-rad40 pd40",
                staticStyle: {
                    background: "linear-gradient(9deg, #0E1F3F 1%, #1D355E 100%)"
                }
            }, [i("v-uni-view", {
                staticClass: "ftsz32 mgbt40"
            }, [t._v(t._s(t.$t("cylc[1]")))]), i("v-uni-view", {
                staticClass: "bd-rad20 hid pdbt40",
                staticStyle: {
                    background: "#274C8F"
                }
            }, [i("v-uni-view", {
                staticClass: "dpfx le-het8 txt-ct"
            }, [i("v-uni-text", {
                staticClass: "item1"
            }, [t._v(t._s(t.$t("home[20]")))]), i("v-uni-text", {
                staticClass: "item1"
            }, [t._v(t._s(t.$t("home[21]")))]), i("v-uni-text", {
                staticClass: "item1"
            }, [t._v(t._s(t.$t("home[22]")))])], 1), i("v-uni-view", {
                staticClass: "box-bg5 bdbt pdtp30 pdbt30"
            }, [i("v-uni-view", {
                staticClass: "dpfx txt-ct"
            }, [i("v-uni-view", {
                staticClass: "item1 dpfx-center"
            }, [i("v-uni-view", {
                staticClass: "icon",
                staticStyle: {
                    width: "120rpx"
                }
            }, [i("v-uni-image", {
                attrs: {
                    src: n("e2d9"),
                    mode: ""
                }
            })], 1)], 1), i("v-uni-text", {
                staticClass: "item1",
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.toLink("https://www.huobi.com/zh-cn/")
                    }
                }
            }, [t._v(t._s("huobi.com"))]), i("v-uni-text", {
                staticClass: "item1 pdlf20",
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.toLink("https://www.huobi.com/support/zh-cn/list/360000010372")
                    }
                }
            }, [t._v(t._s(t.$t("home[22]")))])], 1)], 1), i("v-uni-view", {
                staticClass: "box-bg5 bdbt pdtp30 pdbt30"
            }, [i("v-uni-view", {
                staticClass: "dpfx txt-ct"
            }, [i("v-uni-view", {
                staticClass: "item1 dpfx-center"
            }, [i("v-uni-view", {
                staticClass: "icon",
                staticStyle: {
                    width: "120rpx"
                }
            }, [i("v-uni-image", {
                attrs: {
                    src: n("595c"),
                    mode: ""
                }
            })], 1)], 1), i("v-uni-text", {
                staticClass: "item1",
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.toLink("https://www.binance.com/zh-CN")
                    }
                }
            }, [t._v(t._s("binance.com"))]), i("v-uni-text", {
                staticClass: "item1 pdlf20",
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.toLink("https://academy.binance.com/zh/articles/binance-beginner-s-guide")
                    }
                }
            }, [t._v(t._s(t.$t("home[22]")))])], 1)], 1), i("v-uni-view", {
                staticClass: "box-bg5 bdbt pdtp30 pdbt30"
            }, [i("v-uni-view", {
                staticClass: "dpfx txt-ct"
            }, [i("v-uni-view", {
                staticClass: "item1 dpfx-center"
            }, [i("v-uni-view", {
                staticClass: "icon",
                staticStyle: {
                    width: "120rpx"
                }
            }, [i("v-uni-image", {
                attrs: {
                    src: n("af3d"),
                    mode: ""
                }
            })], 1)], 1), i("v-uni-text", {
                staticClass: "item1",
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.toLink("https://www.okx.com/cn")
                    }
                }
            }, [t._v(t._s("okex.com"))]), i("v-uni-text", {
                staticClass: "item1 pdlf20",
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.toLink("https://www.okx.com/support/hc/zh-cn/sections/360000033031-%E6%96%B0%E6%89%8B%E5%BF%85%E8%AF%BB")
                    }
                }
            }, [t._v(t._s(t.$t("home[22]")))])], 1)], 1), i("v-uni-view", {
                staticClass: "box-bg5 bdbt pdtp30 pdbt30"
            }, [i("v-uni-view", {
                staticClass: "dpfx txt-ct"
            }, [i("v-uni-view", {
                staticClass: "item1 dpfx-center"
            }, [i("v-uni-view", {
                staticClass: "icon",
                staticStyle: {
                    width: "120rpx"
                }
            }, [i("v-uni-image", {
                attrs: {
                    src: n("2d37"),
                    mode: ""
                }
            })], 1)], 1), i("v-uni-text", {
                staticClass: "item1",
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.toLink("https://www.zb.com/cn/")
                    }
                }
            }, [t._v(t._s("zb.com"))]), i("v-uni-text", {
                staticClass: "item1 pdlf20",
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.toLink("https://www.zb.com/help/guides/1")
                    }
                }
            }, [t._v(t._s(t.$t("home[22]")))])], 1)], 1)], 1)], 1), i("v-uni-view", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 2 == t.cTabNum,
                    expression: "cTabNum==2"
                }],
                staticClass: "bd-rad40 pd40",
                staticStyle: {
                    background: "linear-gradient(9deg, #0E1F3F 1%, #1D355E 100%)"
                }
            }, [i("v-uni-view", {
                staticClass: "ftsz32 mgbt40"
            }, [t._v(t._s(t.$t("cylc[2]")))]), i("v-uni-view", {
                staticClass: "colum-center bd-rad20 hid pdbt40 pd40 ftsz32 txt-ct le-het6",
                staticStyle: {
                    background: "#274C8F"
                }
            }, [i("v-uni-view", {
                staticClass: "ftsz36 mgbt20"
            }, [t._v(t._s(t.$t("cylc[4]")))])], 1)], 1), i("v-uni-view", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 3 == t.cTabNum,
                    expression: "cTabNum==3"
                }],
                staticClass: "bd-rad40 pd40",
                staticStyle: {
                    background: "linear-gradient(9deg, #0E1F3F 1%, #1D355E 100%)"
                }
            }, [i("v-uni-view", {
                staticClass: "ftsz32 mgbt40"
            }, [t._v(t._s(t.$t("cylc[3]")))]), i("v-uni-view", {
                staticClass: "bd-rad20 hid pdbt40 pd40 ftsz32 le-het6",
                staticStyle: {
                    background: "#274C8F"
                }
            }, [i("v-uni-view", {
                staticClass: "mgbt30"
            }, [t._v(t._s(t.$t("cylc[7]")))]), i("v-uni-view", {
                staticClass: "dpfx-center"
            }, [i("v-uni-view", {
                staticStyle: {
                    width: "320rpx",
                    height: "300rpx"
                }
            }, [i("v-uni-image", {
                attrs: {
                    src: n("a9ce"),
                    mode: ""
                }
            })], 1)], 1)], 1)], 1)], 1)], 1)], 1), i("v-uni-view", {
                staticClass: "opt-wrap floor1 box-bg2 pdtp30 mgbt50"
            }, [i("v-uni-view", {
                staticStyle: {
                    height: "260rpx"
                }
            }, [i("v-uni-image", {
                attrs: {
                    src: n("9d17"),
                    mode: ""
                }
            })], 1), i("v-uni-view", {
                staticClass: "poret hid",
                staticStyle: {
                    "margin-top": "-186rpx"
                }
            }, [i("v-uni-view", {
                ref: "opt1",
                staticClass: "txt-ct ftsz42 bold mgbt40",
                staticStyle: {
                    transform: "translateY(-100%)"
                },
                attrs: {
                    animation: t.aniData4[0]
                }
            }, [t._v(t._s(t.$t("home[28]")))]), i("v-uni-view", {
                staticClass: "dpfx mgbt20 pd30 pdtp30 box-bg2"
            }, t._l(t.optList, (function(e, n) {
                return i("v-uni-view", {
                    key: n,
                    staticClass: "item1 colum-center",
                    on: {
                        click: function(e) {
                            arguments[0] = e = t.$handleEvent(e),
                            t.optNum = n
                        }
                    }
                }, [i("v-uni-view", {
                    staticClass: "cylc-bg mgbt20 bd-rad txt-ct tstion ftsz32 bold",
                    class: {
                        active: n === t.optNum && t.windowWidth < 750
                    }
                }, [t._v(t._s(e.id))]), i("v-uni-text", {
                    staticClass: "tstion ftsz30 txt-ct",
                    class: {
                        opc: n !== t.optNum && t.windowWidth < 750
                    }
                }, [t._v(t._s(t.$t("opts[" + n + "]")))])], 1)
            }
            )), 1)], 1), i("v-uni-view", {
                ref: "opt2",
                staticClass: "box-bg4 bd-rad40 pd40 pdbt50 mglf30 mgrt30",
                class: {
                    tab3: t.windowWidth > 750
                },
                staticStyle: {
                    transform: "translateX(100%)"
                },
                attrs: {
                    animation: t.aniData4[1]
                }
            }, [i("v-uni-view", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 0 == t.optNum || t.windowWidth > 750,
                    expression: "optNum==0 || windowWidth>750"
                }],
                staticClass: "item"
            }, [i("v-uni-view", {
                staticClass: "txt-ct ftsz39 bold mgbt30"
            }, [t._v(t._s(t.$t("gptm[0]")))]), i("v-uni-view", {
                staticClass: "le-het5 ftsz32"
            }, [i("v-uni-view", {
                staticClass: "dpfx mgbt20"
            }, [i("v-uni-text", [t._v("1.")]), i("v-uni-view", {
                staticClass: "pdlf20"
            }, [t._v(t._s(t.$t("gptm[1]")))])], 1), i("v-uni-view", {
                staticClass: "dpfx mgbt20"
            }, [i("v-uni-text", [t._v("2.")]), i("v-uni-view", {
                staticClass: "pdlf20"
            }, [t._v(t._s(t.$t("gptm[2]")))])], 1), i("v-uni-view", {
                staticClass: "dpfx mgbt20"
            }, [i("v-uni-text", [t._v("3.")]), i("v-uni-view", {
                staticClass: "pdlf20"
            }, [t._v(t._s(t.$t("gptm[3]")))])], 1)], 1)], 1), i("v-uni-view", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 1 == t.optNum || t.windowWidth > 750,
                    expression: "optNum==1 || windowWidth>750"
                }],
                staticClass: "item"
            }, [i("v-uni-view", {
                staticClass: "txt-ct ftsz39 bold mgbt30"
            }, [t._v(t._s(t.$t("aqkk[0]")))]), i("v-uni-view", {
                staticClass: "le-het5 ftsz32"
            }, [i("v-uni-view", {
                staticClass: "dpfx mgbt20"
            }, [i("v-uni-text", [t._v("1.")]), i("v-uni-view", {
                staticClass: "pdlf20"
            }, [t._v(t._s(t.$t("aqkk[1]")))])], 1), i("v-uni-view", {
                staticClass: "dpfx mgbt20"
            }, [i("v-uni-text", [t._v("2.")]), i("v-uni-view", {
                staticClass: "pdlf20"
            }, [t._v(t._s(t.$t("aqkk[2]")))])], 1), i("v-uni-view", {
                staticClass: "dpfx mgbt20"
            }, [i("v-uni-text", [t._v("3.")]), i("v-uni-view", {
                staticClass: "pdlf20"
            }, [t._v(t._s(t.$t("aqkk[3]")))])], 1), i("v-uni-view", {
                staticClass: "dpfx mgbt20"
            }, [i("v-uni-text", [t._v("4.")]), i("v-uni-view", {
                staticClass: "pdlf20"
            }, [t._v(t._s(t.$t("aqkk[4]")))])], 1), i("v-uni-view", {
                staticClass: "dpfx mgbt20"
            }, [i("v-uni-text", [t._v("5.")]), i("v-uni-view", {
                staticClass: "pdlf20"
            }, [t._v(t._s(t.$t("aqkk[5]")))])], 1), i("v-uni-view", {
                staticClass: "dpfx mgbt20"
            }, [i("v-uni-text", [t._v("6.")]), i("v-uni-view", {
                staticClass: "pdlf20"
            }, [t._v(t._s(t.$t("aqkk[6]")))])], 1)], 1)], 1), i("v-uni-view", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 2 == t.optNum || t.windowWidth > 750,
                    expression: "optNum==2 || windowWidth>750"
                }],
                staticClass: "item"
            }, [i("v-uni-view", {
                staticClass: "txt-ct ftsz39 bold mgbt30"
            }, [t._v(t._s(t.$t("yzj[0]")))]), i("v-uni-view", {
                staticClass: "le-het5 ftsz32"
            }, [i("v-uni-view", {
                staticClass: "dpfx mgbt20"
            }, [i("v-uni-text", [t._v("1.")]), i("v-uni-view", {
                staticClass: "pdlf20"
            }, [t._v(t._s(t.$t("yzj[1]")))])], 1), i("v-uni-view", {
                staticClass: "dpfx mgbt20"
            }, [i("v-uni-text", [t._v("2.")]), i("v-uni-view", {
                staticClass: "pdlf20"
            }, [t._v(t._s(t.$t("yzj[2]")))])], 1), i("v-uni-view", {
                staticClass: "dpfx mgbt20"
            }, [i("v-uni-text", [t._v("3.")]), i("v-uni-view", {
                staticClass: "pdlf20"
            }, [t._v(t._s(t.$t("yzj[3]")))])], 1), i("v-uni-view", {
                staticClass: "dpfx mgbt20"
            }, [i("v-uni-text", [t._v("4.")]), i("v-uni-view", {
                staticClass: "pdlf20"
            }, [t._v(t._s(t.$t("yzj[4]")))])], 1)], 1)], 1), i("v-uni-view", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 3 == t.optNum || t.windowWidth > 750,
                    expression: "optNum==3 || windowWidth>750"
                }],
                staticClass: "item"
            }, [i("v-uni-view", {
                staticClass: "txt-ct ftsz39 bold mgbt30"
            }, [t._v(t._s(t.$t("zskf[0]")))]), i("v-uni-view", {
                staticClass: "le-het5 ftsz32"
            }, [i("v-uni-view", {
                staticClass: "dpfx mgbt20"
            }, [i("v-uni-text", [t._v("1.")]), i("v-uni-view", {
                staticClass: "pdlf20"
            }, [t._v(t._s(t.$t("zskf[1]")))])], 1), i("v-uni-view", {
                staticClass: "dpfx mgbt20"
            }, [i("v-uni-text", [t._v("2.")]), i("v-uni-view", {
                staticClass: "pdlf20"
            }, [t._v(t._s(t.$t("zskf[2]")))])], 1), i("v-uni-view", {
                staticClass: "dpfx mgtp40"
            }, [i("v-uni-view", {
                staticClass: "dpfx"
            }, [i("v-uni-view", {
                staticClass: "item1 colum-center",
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.handleKefu("custom_1")
                    }
                }
            }, [i("v-uni-view", {
                staticClass: "mgbt10",
                staticStyle: {
                    width: "120rpx",
                    height: "120rpx"
                }
            }, [i("v-uni-image", {
                attrs: {
                    src: n("160c"),
                    mode: ""
                }
            })], 1), i("v-uni-view", {
                staticClass: "txt-ct"
            }, [t._v(t._s(t.$t("kf1", {
                code: t.initData["custom_1"]
            })))])], 1), i("v-uni-view", {
                staticClass: "item1 colum-center",
                staticStyle: {
                    "padding-left": "14px"
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.handleKefu("custome_2")
                    }
                }
            }, [i("v-uni-view", {
                staticClass: "mgbt10",
                staticStyle: {
                    width: "120rpx",
                    height: "120rpx"
                }
            }, [i("v-uni-image", {
                attrs: {
                    src: n("160c"),
                    mode: ""
                }
            })], 1), i("v-uni-view", {
                staticClass: "txt-ct"
            }, [t._v(t._s(t.$t("kf2", {
                code: t.initData["custome_2"]
            })))])], 1), i("v-uni-view", {
                staticClass: "item1 colum-center",
                staticStyle: {
                    "padding-left": "20px"
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.handleKefu("custome_3")
                    }
                }
            }, [i("v-uni-view", {
                staticClass: "mgbt10",
                staticStyle: {
                    width: "120rpx",
                    height: "120rpx"
                }
            }, [i("v-uni-image", {
                attrs: {
                    src: n("160c"),
                    mode: ""
                }
            })], 1), i("v-uni-view", {
                staticClass: "txt-ct"
            }, [t._v(t._s(t.$t("kf3", {
                code: t.initData["custome_3"]
            })))])], 1)], 1)], 1)], 1)], 1)], 1)], 1), i("v-uni-view", {
                staticClass: "convert-wrap floor1 box-bg2 pdtp30 mgbt50"
            }, [i("v-uni-view", {
                staticStyle: {
                    height: "260rpx"
                }
            }, [i("v-uni-image", {
                attrs: {
                    src: n("6c6a"),
                    mode: ""
                }
            })], 1), i("v-uni-view", {
                staticClass: "pdlf30 pdrt30 poret hid",
                staticStyle: {
                    "margin-top": "-186rpx"
                }
            }, [i("v-uni-view", {
                ref: "num1",
                staticClass: "txt-ct ftsz42 bold mgbt40",
                staticStyle: {
                    transform: "translateY(-120%)",
                    position: "relative",
                    "z-index": "6"
                },
                attrs: {
                    animation: t.aniData5[0]
                }
            }, [t._v(t._s(t.$t("home[36]")))]), i("v-uni-view", {
                class: {
                    wrap_flex: t.windowWidth > 750
                }
            }, [i("v-uni-view", {
                staticClass: "wd"
            }, [i("v-uni-view", {
                ref: "num2",
                staticClass: "rate bd-rad40 ftsz30 txt-ct mgbt30",
                staticStyle: {
                    transform: "translateY(-180%)"
                },
                attrs: {
                    animation: t.aniData5[1]
                }
            }, [t._v(t._s(t.$t("home[37]")) + "："), i("v-uni-text", {
                staticClass: "tit-col"
            }, [t._v(t._s(t.$t("home[38]")))])], 1), i("v-uni-view", {
                ref: "num3",
                staticClass: "colum-center box-bg6 bd-rad32 pd50 mgbt20 bode1",
                staticStyle: {
                    transform: "translateX(120%)"
                },
                attrs: {
                    animation: t.aniData5[2]
                }
            }, [i("v-uni-view", {
                staticClass: "exc-items bd-rad40 mgbt50 dpfx ftsz30"
            }, [i("v-uni-view", {
                staticClass: "exc-tab item1 txt-ct",
                class: {
                    active: 0 == t.excType
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.excTabChange(0)
                    }
                }
            }, [t._v(t._s(t.$t("home[39]")))]), i("v-uni-view", {
                staticClass: "exc-tab item1 txt-ct",
                class: {
                    active: 1 == t.excType
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.excTabChange(1)
                    }
                }
            }, [t._v(t._s(t.$t("home[40]")))])], 1), i("v-uni-view", {
                staticClass: "exc-items bd-rad40 dpfxsb-center pdlf40 pdrt40"
            }, [i("v-uni-input", {
                staticClass: "item1 ftsz36",
                attrs: {
                    type: "number"
                },
                model: {
                    value: t.from_num,
                    callback: function(e) {
                        t.from_num = e
                    },
                    expression: "from_num"
                }
            }), i("v-uni-text", {
                staticClass: "ftsz39 bold mglf20"
            }, [t._v(t._s(0 == t.excType ? "USDT" : "TRX"))])], 1), i("v-uni-view", {
                staticClass: "pd30 ftsz32"
            }, [t._v(t._s(t.$t("home[41]")))]), i("v-uni-view", {
                staticClass: "exc-items bd-rad40 mgbt50 dpfxsb-center pdlf40 pdrt40"
            }, [i("v-uni-input", {
                staticClass: "item1 ftsz36",
                attrs: {
                    type: "number",
                    disabled: !0
                },
                model: {
                    value: t.to_num,
                    callback: function(e) {
                        t.to_num = e
                    },
                    expression: "to_num"
                }
            }), i("v-uni-text", {
                staticClass: "ftsz39 bold mglf20"
            }, [t._v(t._s(0 == t.excType ? "TRX" : "USDT"))])], 1), i("v-uni-view", {
                staticClass: "btn scale1 ftsz36 bold bd-rad40",
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.handleCalc.apply(void 0, arguments)
                    }
                }
            }, [t._v(t._s(t.$t("home[42]")))])], 1)], 1), i("v-uni-view", {
                staticClass: "wd"
            }, [i("v-uni-view", {
                staticClass: "le-het6 ftsz30 pd30"
            }, [t._v(t._s(t.$t("home[43]")))]), i("v-uni-view", {
                ref: "num4",
                staticClass: "pd40 pdbt50 box-bg6 bd-rad32 mgbt30",
                staticStyle: {
                    transform: "translateX(-120%)"
                },
                attrs: {
                    animation: t.aniData5[3]
                }
            }, [i("v-uni-view", {
                staticClass: "dpfxsb-center mgbt20"
            }, [i("v-uni-text", {
                staticClass: "ftsz36 bold"
            }, [t._v(t._s(t.$t("home[44]")))]), i("v-uni-view", {
                staticClass: "btn-min",
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.$utils.copy(t.exc_address)
                    }
                }
            }, [t._v(t._s(t.$t("home[45]")))])], 1), i("v-uni-view", {
                staticClass: "txt-nowrap"
            }, [t._v(t._s(t.exc_address))])], 1), i("v-uni-view", {
                ref: "num5",
                staticClass: "pd40 box-bg6 bd-rad32 colum-center",
                staticStyle: {
                    transform: "translateX(120%)"
                },
                attrs: {
                    animation: t.aniData5[4]
                }
            }, [i("v-uni-view", {
                staticClass: "exc-qcCode bd-rad40 mgbt20 pd8 hid dpfx-center"
            }, [i("uni-qrcode", {
                attrs: {
                    cid: "qr_code",
                    text: t.exc_address,
                    size: 110
                }
            })], 1), i("v-uni-text", {
                staticClass: "ftsz32"
            }, [t._v(t._s(t.$t("home[46]")))])], 1)], 1)], 1)], 1)], 1), i("v-uni-view", {
                staticClass: "trouble-wrap floor1 box-bg2 pdtp30 mgbt50"
            }, [i("v-uni-view", {
                staticStyle: {
                    height: "260rpx"
                }
            }, [i("v-uni-image", {
                attrs: {
                    src: n("f73f"),
                    mode: ""
                }
            })], 1), i("v-uni-view", {
                staticClass: "pdlf30 pdrt30 poret hid",
                staticStyle: {
                    "margin-top": "-186rpx"
                }
            }, [i("v-uni-view", {
                ref: "wt1",
                staticClass: "txt-ct ftsz42 bold mgbt40",
                staticStyle: {
                    transform: "translateY(-120%)"
                },
                attrs: {
                    animation: t.aniData7[0]
                }
            }, [t._v(t._s(t.$t("home[58]")))]), i("v-uni-view", {
                staticClass: "pdbt30"
            }, t._l(t.troubleList, (function(e, n) {
                return i("v-uni-view", {
                    key: n,
                    ref: "witem",
                    refInFor: !0,
                    staticClass: "pd30 mgbt30 bd-rad20 ftsz32",
                    staticStyle: {
                        background: "#233554"
                    },
                    style: {
                        transform: "translateX(" + (n % 2 ? "-120%" : "120%") + ")"
                    },
                    attrs: {
                        animation: t.aniData7[n + 1]
                    }
                }, [i("v-uni-view", {
                    staticClass: "tit-col mgbt20 bold"
                }, [t._v(t._s(e.title))]), i("v-uni-view", {
                    staticClass: "le-het5 mgbt20"
                }, [t._v(t._s(e.content))]), i("v-uni-view", {
                    staticClass: "dpfxsb-center"
                }, [i("v-uni-text"), i("v-uni-view", {
                    staticClass: "btn-min",
                    staticStyle: {
                        transition: "none"
                    },
                    on: {
                        click: function(n) {
                            arguments[0] = n = t.$handleEvent(n),
                            t.toLink(e.link)
                        }
                    }
                }, [t._v(t._s(t.$t("home[59]")))])], 1)], 1)
            }
            )), 1)], 1)], 1)], 1), i("uni-popup", {
                ref: "log"
            }, [i("v-uni-view", {
                staticClass: "log-wrap bd-rad32"
            }, [i("v-uni-view", {
                staticClass: "bdbt pdlf30 ftsz36 bold",
                staticStyle: {
                    "line-height": "120rpx"
                }
            }, [t._v(t._s(t.$t("log[0]")))]), i("v-uni-view", {
                staticClass: "pd40 pdbt50 colum-center"
            }, [i("v-uni-view", {
                staticClass: "dpfxsb-center ftsz34 mgbt40"
            }, [i("v-uni-text", {
                staticStyle: {
                    width: "140rpx"
                }
            }, [t._v(t._s(t.$t("log[1]")) + "：")]), i("v-uni-view", {
                staticClass: "item1 box-bg bd-rad8 pd30 pdtp20 pdbt20"
            }, [i("v-uni-input", {
                staticClass: "txt-col1 ftsz32",
                model: {
                    value: t.logForm.username,
                    callback: function(e) {
                        t.$set(t.logForm, "username", e)
                    },
                    expression: "logForm.username"
                }
            })], 1)], 1), i("v-uni-view", {
                staticClass: "dpfxsb-center ftsz34 mgbt50"
            }, [i("v-uni-text", {
                staticStyle: {
                    width: "140rpx"
                }
            }, [t._v(t._s(t.$t("log[2]")) + "：")]), i("v-uni-view", {
                staticClass: "item1 box-bg bd-rad8 pd30 pdtp20 pdbt20"
            }, [i("v-uni-input", {
                staticClass: "txt-col1 ftsz32",
                attrs: {
                    password: !0
                },
                model: {
                    value: t.logForm.password,
                    callback: function(e) {
                        t.$set(t.logForm, "password", e)
                    },
                    expression: "logForm.password"
                }
            })], 1)], 1), i("v-uni-view", {
                staticClass: "btn-min mgbt40 bd-rad20 ftsz34 bold",
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.handleLog.apply(void 0, arguments)
                    }
                }
            }, [t._v(t._s(t.$t("log[3]")))]), i("v-uni-view", {
                staticClass: "txt-ct ftsz32",
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.$refs.log.close(),
                        t.$refs.reg.open()
                    }
                }
            }, [t._v(t._s(t.$t("log[4]")))])], 1)], 1)], 1), i("uni-popup", {
                ref: "reg"
            }, [i("v-uni-view", {
                staticClass: "reg-wrap bd-rad32"
            }, [i("v-uni-view", {
                staticClass: "bdbt pdlf30 ftsz36 bold",
                staticStyle: {
                    "line-height": "120rpx"
                }
            }, [t._v(t._s(t.$t("reg[0]")))]), i("v-uni-view", {
                staticClass: "pd40 pdbt50 colum-center"
            }, [i("v-uni-view", {
                staticClass: "dpfxsb-center ftsz34 mgbt40"
            }, [i("v-uni-text", {
                staticStyle: {
                    width: "180rpx"
                }
            }, [t._v(t._s(t.$t("reg[1]")) + "：")]), i("v-uni-view", {
                staticClass: "item1 box-bg bd-rad8 pd30 pdtp20 pdbt20"
            }, [i("v-uni-input", {
                staticClass: "txt-col1 ftsz32",
                model: {
                    value: t.regForm.username,
                    callback: function(e) {
                        t.$set(t.regForm, "username", e)
                    },
                    expression: "regForm.username"
                }
            })], 1)], 1), i("v-uni-view", {
                staticClass: "dpfxsb-center ftsz34 mgbt50"
            }, [i("v-uni-text", {
                staticStyle: {
                    width: "180rpx"
                }
            }, [t._v(t._s(t.$t("reg[2]")) + "：")]), i("v-uni-view", {
                staticClass: "item1 box-bg bd-rad8 pd30 pdtp20 pdbt20"
            }, [i("v-uni-input", {
                staticClass: "txt-col1 ftsz32",
                attrs: {
                    password: !0
                },
                model: {
                    value: t.regForm.password,
                    callback: function(e) {
                        t.$set(t.regForm, "password", e)
                    },
                    expression: "regForm.password"
                }
            })], 1)], 1), i("v-uni-view", {
                staticClass: "dpfxsb-center ftsz34 mgbt50"
            }, [i("v-uni-text", {
                staticStyle: {
                    width: "180rpx"
                }
            }, [t._v(t._s(t.$t("reg[3]")) + "：")]), i("v-uni-view", {
                staticClass: "item1 box-bg bd-rad8 pd30 pdtp20 pdbt20"
            }, [i("v-uni-input", {
                staticClass: "txt-col1 ftsz32",
                attrs: {
                    password: !0
                },
                model: {
                    value: t.regForm.comfirm_password,
                    callback: function(e) {
                        t.$set(t.regForm, "comfirm_password", e)
                    },
                    expression: "regForm.comfirm_password"
                }
            })], 1)], 1), i("v-uni-view", {
                staticClass: "dpfxsb-center ftsz34 mgbt50"
            }, [i("v-uni-text", {
                staticStyle: {
                    width: "180rpx"
                }
            }, [t._v(t._s(t.$t("reg[4]")) + "：")]), i("v-uni-view", {
                staticClass: "item1 box-bg bd-rad8 pd30 pdtp20 pdbt20"
            }, [i("v-uni-input", {
                staticClass: "txt-col1 ftsz32",
                model: {
                    value: t.regForm.address,
                    callback: function(e) {
                        t.$set(t.regForm, "address", e)
                    },
                    expression: "regForm.address"
                }
            })], 1)], 1), i("v-uni-view", {
                staticClass: "dpfxsb-center ftsz34 mgbt50"
            }, [i("v-uni-text", {
                staticStyle: {
                    width: "180rpx"
                }
            }, [t._v(t._s(t.$t("reg[5]")) + "：")]), i("v-uni-view", {
                staticClass: "item1 box-bg bd-rad8 pd30 pdtp20 pdbt20"
            }, [i("v-uni-input", {
                staticClass: "txt-col1 ftsz32",
                model: {
                    value: t.regForm.active_code,
                    callback: function(e) {
                        t.$set(t.regForm, "active_code", e)
                    },
                    expression: "regForm.active_code"
                }
            })], 1)], 1), i("v-uni-view", {
                staticClass: "btn-min mgbt40 bd-rad20 ftsz34 bold",
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.handleReg.apply(void 0, arguments)
                    }
                }
            }, [t._v(t._s(t.$t("reg[6]")))]), i("v-uni-view", {
                staticClass: "txt-ct ftsz32",
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.$refs.reg.close(),
                        t.$refs.log.open()
                    }
                }
            }, [t._v(t._s(t.$t("reg[7]")))])], 1)], 1)], 1), i("uni-fab", {
                ref: "fab",
                attrs: {
                    content: t.content,
                    vertical: t.vertical,
                    direction: t.direction
                }
            })], 1)
        }
          , s = []
    },
    5073: function(t, e, n) {
        var i = n("24fb");
        e = i(!1),
        e.push([t.i, ".scroll-num[data-v-63a2e330]{width:var(--width,14px);height:var(--height,calc(var(--width, 20px) * 1.8));color:var(--color,#333);font-size:var(--height,calc(var(--width, 20px) * 1.1));line-height:var(--height,calc(var(--width, 20px) * 1.8));text-align:center;overflow:hidden}.animate[data-v-63a2e330]{-webkit-animation:move-data-v-63a2e330 .3s linear infinite,bounce-in-down-data-v-63a2e330 1s calc(var(--delay) * 1s) forwards;animation:move-data-v-63a2e330 .3s linear infinite,bounce-in-down-data-v-63a2e330 1s calc(var(--delay) * 1s) forwards}.border-animate[data-v-63a2e330]{-webkit-animation:enhance-bounce-in-down-data-v-63a2e330 1s calc(var(--delay) * 1s) forwards;animation:enhance-bounce-in-down-data-v-63a2e330 1s calc(var(--delay) * 1s) forwards}ul[data-v-63a2e330]{padding:0;margin:0;list-style:none;-webkit-transform:translateY(calc(var(--i) * -9.09%));transform:translateY(calc(var(--i) * -9.09%))}@-webkit-keyframes move-data-v-63a2e330{from{-webkit-transform:translateY(-90%);transform:translateY(-90%);-webkit-filter:url(#blur);filter:url(#blur)}to{-webkit-transform:translateY(1%);transform:translateY(1%);-webkit-filter:url(#blur);filter:url(#blur)}}@keyframes move-data-v-63a2e330{from{-webkit-transform:translateY(-90%);transform:translateY(-90%);-webkit-filter:url(#blur);filter:url(#blur)}to{-webkit-transform:translateY(1%);transform:translateY(1%);-webkit-filter:url(#blur);filter:url(#blur)}}@-webkit-keyframes bounce-in-down-data-v-63a2e330{from{-webkit-transform:translateY(calc(var(--i) * -9.09% - 7%));transform:translateY(calc(var(--i) * -9.09% - 7%));-webkit-filter:none;filter:none}25%{-webkit-transform:translateY(calc(var(--i) * -9.09% + 3%));transform:translateY(calc(var(--i) * -9.09% + 3%))}50%{-webkit-transform:translateY(calc(var(--i) * -9.09% - 1%));transform:translateY(calc(var(--i) * -9.09% - 1%))}70%{-webkit-transform:translateY(calc(var(--i) * -9.09% + .6%));transform:translateY(calc(var(--i) * -9.09% + .6%))}85%{-webkit-transform:translateY(calc(var(--i) * -9.09% - .3%));transform:translateY(calc(var(--i) * -9.09% - .3%))}to{-webkit-transform:translateY(calc(var(--i) * -9.09%));transform:translateY(calc(var(--i) * -9.09%))}}@keyframes bounce-in-down-data-v-63a2e330{from{-webkit-transform:translateY(calc(var(--i) * -9.09% - 7%));transform:translateY(calc(var(--i) * -9.09% - 7%));-webkit-filter:none;filter:none}25%{-webkit-transform:translateY(calc(var(--i) * -9.09% + 3%));transform:translateY(calc(var(--i) * -9.09% + 3%))}50%{-webkit-transform:translateY(calc(var(--i) * -9.09% - 1%));transform:translateY(calc(var(--i) * -9.09% - 1%))}70%{-webkit-transform:translateY(calc(var(--i) * -9.09% + .6%));transform:translateY(calc(var(--i) * -9.09% + .6%))}85%{-webkit-transform:translateY(calc(var(--i) * -9.09% - .3%));transform:translateY(calc(var(--i) * -9.09% - .3%))}to{-webkit-transform:translateY(calc(var(--i) * -9.09%));transform:translateY(calc(var(--i) * -9.09%))}}@-webkit-keyframes enhance-bounce-in-down-data-v-63a2e330{25%{-webkit-transform:translateY(8%);transform:translateY(8%)}50%{-webkit-transform:translateY(-4%);transform:translateY(-4%)}70%{-webkit-transform:translateY(2%);transform:translateY(2%)}85%{-webkit-transform:translateY(-1%);transform:translateY(-1%)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes enhance-bounce-in-down-data-v-63a2e330{25%{-webkit-transform:translateY(8%);transform:translateY(8%)}50%{-webkit-transform:translateY(-4%);transform:translateY(-4%)}70%{-webkit-transform:translateY(2%);transform:translateY(2%)}85%{-webkit-transform:translateY(-1%);transform:translateY(-1%)}to{-webkit-transform:translateY(0);transform:translateY(0)}}", ""]),
        t.exports = e
    },
    5566: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("cefe")
          , a = n("652b");
        for (var s in a)
            "default" !== s && function(t) {
                n.d(e, t, (function() {
                    return a[t]
                }
                ))
            }(s);
        var o, r = n("f0c5"), c = Object(r["a"])(a["default"], i["b"], i["c"], !1, null, null, null, !1, i["a"], o);
        e["default"] = c.exports
    },
    "55d1": function(t, e, n) {
        var i = n("24fb");
        e = i(!1),
        e.push([t.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 文字样式 */\r\n/* @mixin组合 */\r\n/* 边框样式 */\r\n/* 盒子阴影 */\r\n/* 颜色 */.primary[data-v-57409092]{color:red;background-color:#0f0;border-color:#00f}.colors[data-v-57409092]{color:#fff;border-color:#00f;background-color:#00f}\r\n/* scss 函数 */#sidebar[data-v-57409092]{width:240px}\r\n/* scss 循环 */.banner[data-v-57409092]{position:relative;overflow:hidden}.banner .gradual-nav[data-v-57409092]{height:%?100?%;margin-bottom:%?-20?%;position:relative;overflow:hidden}.banner .gradual-nav .gradual-bg[data-v-57409092]{position:absolute;top:0;width:100%;height:inherit;transition:opacity 1s linear;background:linear-gradient(90deg,var(--start-color),var(--end-color))}.banner .swiper[data-v-57409092]{height:%?320?%;overflow:hidden}.banner .swiper .img[data-v-57409092]{border-radius:%?0?%;transition:-webkit-transform .4s ease-in-out;transition:transform .4s ease-in-out;transition:transform .4s ease-in-out,-webkit-transform .4s ease-in-out}.banner .swiper .scale[data-v-57409092]{-webkit-transform:scale(.9,.85);transform:scale(.9,.85)}.banner .sw_height[data-v-57409092]{height:%?780?%}.banner .abslt[data-v-57409092], .banner .tips[data-v-57409092], .banner .indicator[data-v-57409092], .banner .rect[data-v-57409092]{width:100%;height:%?70?%;line-height:%?70?%;position:absolute;bottom:0;z-index:10;padding:0 %?30?%}.banner .tips[data-v-57409092]{font-family:Arial;font-size:%?32?%;font-weight:700;color:#fff;background-color:rgba(0,0,0,.4)}.banner .indicator[data-v-57409092], .banner .rect[data-v-57409092]{display:flex;align-items:center\r\n  /* 位置 */}.banner .indicator .indicator_item[data-v-57409092], .banner .rect .indicator_item[data-v-57409092]{width:%?16?%;height:%?16?%;border-radius:50%;margin-left:%?15?%;background-color:silver;transition:all .3s ease}.banner .indicator .indicator_item.active_item[data-v-57409092], .banner .rect .indicator_item.active_item[data-v-57409092]{width:%?35?%;border-radius:%?18?%;background-color:#fff}.banner .indicator.left[data-v-57409092], .banner .rect.left[data-v-57409092]{justify-content:flex-start}.banner .indicator.center[data-v-57409092], .banner .rect.center[data-v-57409092]{justify-content:center}.banner .indicator.right[data-v-57409092], .banner .rect.right[data-v-57409092]{justify-content:flex-end}.banner .indicator_item[data-v-57409092], .banner .rect_item[data-v-57409092]{width:%?35?%;height:%?10?%;margin-left:%?15?%;border-radius:%?4?%;background-color:silver;transition:background-color .3s ease-in}.banner .indicator_active[data-v-57409092], .banner .rect_active[data-v-57409092]{background-color:#fff}.banner .indicator .number[data-v-57409092], .banner .rect .number[data-v-57409092]{font-family:Arial;font-size:%?30?%;font-weight:400;color:#000;width:%?90?%;height:%?40?%;line-height:%?44?%;letter-spacing:%?4?%;text-align:center;border-radius:%?40?%;background-color:hsla(0,0%,100%,.4)}', ""]),
        t.exports = e
    },
    "595c": function(t, e, n) {
        t.exports = n.p + "static/img/binance.62f22d3e.png"
    },
    "5a67": function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("3aa1")
          , a = n.n(i);
        for (var s in i)
            "default" !== s && function(t) {
                n.d(e, t, (function() {
                    return i[t]
                }
                ))
            }(s);
        e["default"] = a.a
    },
    6005: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = s;
        var i = a(n("6b75"));
        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        function s(t) {
            if (Array.isArray(t))
                return (0,
                i.default)(t)
        }
    },
    "652b": function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("4283")
          , a = n.n(i);
        for (var s in i)
            "default" !== s && function(t) {
                n.d(e, t, (function() {
                    return i[t]
                }
                ))
            }(s);
        e["default"] = a.a
    },
    "67b3": function(t, e, n) {
        t.exports = n.p + "static/fonts/uniicons.b6d3756e.ttf"
    },
    "6c6a": function(t, e, n) {
        t.exports = n.p + "static/img/bg4.055bca91.png"
    },
    7055: function(t, e, n) {
        "use strict";
        n("a9e3"),
        n("8ba4"),
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = void 0;
        var i = {
            name: "CountUp",
            props: {
                as: {
                    type: String,
                    default: "div"
                },
                i: {
                    type: Number,
                    default: 0,
                    validator: function(t) {
                        return t < 10 && t >= 0 && Number.isInteger(t)
                    }
                },
                delay: {
                    type: Number,
                    default: 2
                },
                blur: {
                    type: Number,
                    default: 1
                },
                startCount: {
                    type: Boolean,
                    defalut: !1
                }
            },
            data: function() {
                return {
                    timer: null,
                    showAnimate: !1
                }
            },
            watch: {
                i: function(t, e) {},
                startCount: {
                    handler: function(t, e) {
                        t && (this.showAnimate = !0)
                    },
                    immediate: !0
                },
                showAnimate: {
                    handler: function(t, e) {
                        var n = this;
                        t || (this.$emit("changeState", !1),
                        this.$nextTick((function() {
                            n.$refs.ul.setAttribute("style", "")
                        }
                        )))
                    },
                    immediate: !0
                }
            },
            mounted: function() {
                var t = this
                  , e = navigator.userAgent.toLowerCase()
                  , n = function(t) {
                    return t.test(e)
                }
                  , i = n(/safari/g) && !n(/chrome/g);
                i && (this.timer = setTimeout((function() {
                    t.$refs.ul.setAttribute("style", "\n\t\t\t\t\tanimation: none;\n\t\t\t\t\ttransform: translateY(calc(var(--i) * -9.09%))\n\t\t\t")
                }
                ), 1e3 * this.delay))
            },
            beforeDestroy: function() {
                clearTimeout(this.timer)
            }
        };
        e.default = i
    },
    "740e": function(t, e, n) {
        "use strict";
        n("7db0"),
        n("caad"),
        n("b64b"),
        n("2532"),
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = void 0;
        var i = {
            name: "Keypress",
            props: {
                disable: {
                    type: Boolean,
                    default: !1
                }
            },
            mounted: function() {
                var t = this
                  , e = {
                    esc: ["Esc", "Escape"],
                    tab: "Tab",
                    enter: "Enter",
                    space: [" ", "Spacebar"],
                    up: ["Up", "ArrowUp"],
                    left: ["Left", "ArrowLeft"],
                    right: ["Right", "ArrowRight"],
                    down: ["Down", "ArrowDown"],
                    delete: ["Backspace", "Delete", "Del"]
                }
                  , n = function(n) {
                    if (!t.disable) {
                        var i = Object.keys(e).find((function(t) {
                            var i = n.key
                              , a = e[t];
                            return a === i || Array.isArray(a) && a.includes(i)
                        }
                        ));
                        i && setTimeout((function() {
                            t.$emit(i, {})
                        }
                        ), 0)
                    }
                };
                document.addEventListener("keyup", n)
            },
            render: function() {}
        };
        e.default = i
    },
    7924: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("cdac")
          , a = n("44b4");
        for (var s in a)
            "default" !== s && function(t) {
                n.d(e, t, (function() {
                    return a[t]
                }
                ))
            }(s);
        n("ea93");
        var o, r = n("f0c5"), c = Object(r["a"])(a["default"], i["b"], i["c"], !1, null, "2972ae2c", null, !1, i["a"], o);
        e["default"] = c.exports
    },
    "7f60": function(t, e, n) {
        "use strict";
        var i;
        n.d(e, "b", (function() {
            return a
        }
        )),
        n.d(e, "c", (function() {
            return s
        }
        )),
        n.d(e, "a", (function() {
            return i
        }
        ));
        var a = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return t.len > 0 ? n("v-uni-view", {
                staticClass: "banner"
            }, [n("v-uni-swiper", t._b({
                staticClass: "swiper",
                class: {
                    sw_height: t.width > 750
                },
                on: {
                    change: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.swiperChange.apply(void 0, arguments)
                    }
                }
            }, "v-uni-swiper", t.$attrs, !1), t._l(t.list, (function(e, i) {
                return n("v-uni-swiper-item", {
                    key: i
                }, [t.width < 750 && "zh-cn" == t.$i18n.locale ? n("v-uni-image", {
                    staticClass: "img",
                    class: t.isScale && i !== t.current ? "scale" : "",
                    attrs: {
                        src: e.ad_code,
                        "lazy-load": !0
                    },
                    on: {
                        click: function(n) {
                            arguments[0] = n = t.$handleEvent(n),
                            t.$emit("goLink", e)
                        }
                    }
                }) : t._e(), t.width < 750 && "en-us" == t.$i18n.locale ? n("v-uni-image", {
                    staticClass: "img",
                    class: t.isScale && i !== t.current ? "scale" : "",
                    attrs: {
                        src: e.ad_code_en,
                        "lazy-load": !0
                    },
                    on: {
                        click: function(n) {
                            arguments[0] = n = t.$handleEvent(n),
                            t.$emit("goLink", e)
                        }
                    }
                }) : t._e(), t.width > 750 && "zh-cn" == t.$i18n.locale ? n("v-uni-image", {
                    staticClass: "img",
                    class: t.isScale && i !== t.current ? "scale" : "",
                    attrs: {
                        src: e.pc_banner,
                        "lazy-load": !0
                    },
                    on: {
                        click: function(n) {
                            arguments[0] = n = t.$handleEvent(n),
                            t.$emit("goLink", e)
                        }
                    }
                }) : t._e(), t.width > 750 && "en-us" == t.$i18n.locale ? n("v-uni-image", {
                    staticClass: "img",
                    class: t.isScale && i !== t.current ? "scale" : "",
                    attrs: {
                        src: e.pc_banner_en,
                        "lazy-load": !0
                    },
                    on: {
                        click: function(n) {
                            arguments[0] = n = t.$handleEvent(n),
                            t.$emit("goLink", e)
                        }
                    }
                }) : t._e()], 1)
            }
            )), 1)], 1) : t._e()
        }
          , s = []
    },
    "7fc8": function(t, e, n) {
        var i = n("24fb")
          , a = n("1de5")
          , s = n("32b1");
        e = i(!1);
        var o = a(s);
        e.push([t.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */@font-face{font-family:myFirstFont;src:url(' + o + ');font-weight:400;font-style:normal}.wrap_flex[data-v-7d074acd]{display:flex;justify-content:space-between;align-items:start}.wrap_flex .wd[data-v-7d074acd]{width:48%}.wrap_flex .wd:last-child .pd30[data-v-7d074acd]{padding:0 15px 15px}.wrap_flex .wrap_flex[data-v-7d074acd]{align-items:center}.wrap_flex .item[data-v-7d074acd]{width:60%}.wrap_flex .wrap[data-v-7d074acd]{align-items:center;justify-content:center;width:38%;height:100%;justify-content:space-around}.wrap_flex .wrap .code[data-v-7d074acd]{width:150px;height:150px;background:#fff;border:2px solid #ffaf14;justify-content:center;align-items:center;display:flex;margin:%?50?% auto}.container[data-v-7d074acd]{max-width:1200px;margin:0 auto}.tab1[data-v-7d074acd]{-webkit-transform:translateX(0)!important;transform:translateX(0)!important}.tab1 .uni-swiper-slide-frame[data-v-7d074acd]{-webkit-transform:translate(0)!important;transform:translate(0)!important}.tab1 .item[data-v-7d074acd]{border-radius:%?10?%!important}.tab2 .uni-swiper-slide-frame[data-v-7d074acd]{-webkit-transform:translateX(0)!important;transform:translateX(0)!important}.tab2 .uni-swiper-slide-frame .item[data-v-7d074acd]{width:25%!important}.tab3[data-v-7d074acd]{display:flex;justify-content:space-between}.tab3 .item[data-v-7d074acd]{width:23%!important}uni-page-body[data-v-7d074acd]{height:100%}.head-bg[data-v-7d074acd]{background:rgba(28,42,68,.9)}.scroll-wrap[data-v-7d074acd]{height:100%}.scroll-wrap.active[data-v-7d074acd]{height:calc(100% - %?210?%)}.news-swiper[data-v-7d074acd]{height:%?65?%;line-height:%?65?%}.zjsl-swiper[data-v-7d074acd]{height:380px}.zjsl-swiper .swiper-item[data-v-7d074acd]{border:%?6?% solid #666d78;background:linear-gradient(9deg,#1a335b,#35537e)}.cylc-wrap .cylc-bg[data-v-7d074acd], .opt-wrap .cylc-bg[data-v-7d074acd]{width:%?80?%;line-height:%?80?%;color:#7d99cc;background:linear-gradient(9deg,#263c63,#435e8d);transition:all 1s}.cylc-wrap .cylc-bg.active[data-v-7d074acd], .opt-wrap .cylc-bg.active[data-v-7d074acd]{color:#fff;background:linear-gradient(9deg,#ffaf14,#be5645)}[class^="-items"][data-v-7d074acd], [class*="-items"][data-v-7d074acd]{width:%?520?%;height:%?90?%;background:hsla(0,0%,100%,.05)}[class^="-items"] [class*="-tab"][data-v-7d074acd], [class*="-items"] [class*="-tab"][data-v-7d074acd]{line-height:%?90?%;border-radius:inherit;background:transparent;transition:all .3s}[class^="-items"] [class*="-tab"].active[data-v-7d074acd], [class*="-items"] [class*="-tab"].active[data-v-7d074acd]{background:#ffaf14}.convert-wrap .rate[data-v-7d074acd]{padding:%?50?% %?10?%;background:#1c3051}.convert-wrap .btn[data-v-7d074acd]{width:%?520?%;height:%?90?%;line-height:%?90?%}.convert-wrap .exc-qcCode[data-v-7d074acd]{width:%?300?%;height:%?300?%;background:#fff;border:2px solid #ffaf14}.rank-wrap .rank-type_tab .tab-txt[data-v-7d074acd]{position:relative}.rank-wrap .rank-type_tab .tab-txt[data-v-7d074acd]::before{content:"";width:100%;height:%?10?%;border-radius:%?5?%;position:absolute;left:0;bottom:0;background:transparent;transition:.3s ease}.rank-wrap .rank-type_tab .tab-txt.active[data-v-7d074acd]::before{background:#ffaf14}.log-wrap[data-v-7d074acd], .reg-wrap[data-v-7d074acd]{width:%?666?%;background:#213d73}.log-wrap .btn-min[data-v-7d074acd], .reg-wrap .btn-min[data-v-7d074acd]{width:%?240?%;height:%?75?%;line-height:%?75?%}.textimg[data-v-7d074acd]{margin:%?15?% %?10?%;padding:0 %?20?%;background-color:#ebebeb;height:%?70?%;line-height:%?70?%;text-align:center;color:#777;font-size:%?26?%}.product[data-v-7d074acd]{padding:%?10?% %?20?%;display:flex;flex-direction:column}.product-image[data-v-7d074acd]{height:%?330?%;width:%?330?%}.product-title[data-v-7d074acd]{width:%?300?%;font-size:%?32?%;word-break:break-all;display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;-webkit-line-clamp:2}.product-price-original[data-v-7d074acd]{color:#e80080}.product-price-favour[data-v-7d074acd]{color:#888;text-decoration:line-through;margin-left:%?10?%}.product-tip[data-v-7d074acd]{position:absolute;right:%?10?%;background-color:#f33;color:#fff;padding:0 %?10?%;border-radius:%?5?%}.g_swiper[data-v-7d074acd]{height:%?120?%}.poslt2[data-v-7d074acd]{width:100%;position:relative}.poslt2 .conrrr[data-v-7d074acd]{display:flex;align-items:center;height:%?80?%}.poslt2 .conrrr .numflex[data-v-7d074acd]{width:50%;display:flex;align-items:center}.poslt2 .conrrr .numflex .numul[data-v-7d074acd]{padding:0;display:flex}.poslt2 .conrrr .numflex .numul li[data-v-7d074acd]{color:#eac774;font-family:myFirstFont}.poslt2 .conrrr .numflex ul[data-v-7d074acd]{padding:0;margin:0;list-style:none}.poslt2 .conrrr .numflex uni-text[data-v-7d074acd]{color:#eac774;font-size:%?30?%}', ""]),
        t.exports = e
    },
    "843f": function(t, e, n) {
        "use strict";
        n("d3b7"),
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = void 0;
        var i = {};
        (function() {
            function t(t) {
                this.mode = n.MODE_8BIT_BYTE,
                this.data = t
            }
            function e(t, e) {
                this.typeNumber = t,
                this.errorCorrectLevel = e,
                this.modules = null,
                this.moduleCount = 0,
                this.dataCache = null,
                this.dataList = new Array
            }
            t.prototype = {
                getLength: function(t) {
                    return this.data.length
                },
                write: function(t) {
                    for (var e = 0; e < this.data.length; e++)
                        t.put(this.data.charCodeAt(e), 8)
                }
            },
            e.prototype = {
                addData: function(e) {
                    var n = new t(e);
                    this.dataList.push(n),
                    this.dataCache = null
                },
                isDark: function(t, e) {
                    if (t < 0 || this.moduleCount <= t || e < 0 || this.moduleCount <= e)
                        throw new Error(t + "," + e);
                    return this.modules[t][e]
                },
                getModuleCount: function() {
                    return this.moduleCount
                },
                make: function() {
                    if (this.typeNumber < 1) {
                        var t = 1;
                        for (t = 1; t < 40; t++) {
                            for (var e = l.getRSBlocks(t, this.errorCorrectLevel), n = new u, i = 0, a = 0; a < e.length; a++)
                                i += e[a].dataCount;
                            for (a = 0; a < this.dataList.length; a++) {
                                var s = this.dataList[a];
                                n.put(s.mode, 4),
                                n.put(s.getLength(), o.getLengthInBits(s.mode, t)),
                                s.write(n)
                            }
                            if (n.getLengthInBits() <= 8 * i)
                                break
                        }
                        this.typeNumber = t
                    }
                    this.makeImpl(!1, this.getBestMaskPattern())
                },
                makeImpl: function(t, n) {
                    this.moduleCount = 4 * this.typeNumber + 17,
                    this.modules = new Array(this.moduleCount);
                    for (var i = 0; i < this.moduleCount; i++) {
                        this.modules[i] = new Array(this.moduleCount);
                        for (var a = 0; a < this.moduleCount; a++)
                            this.modules[i][a] = null
                    }
                    this.setupPositionProbePattern(0, 0),
                    this.setupPositionProbePattern(this.moduleCount - 7, 0),
                    this.setupPositionProbePattern(0, this.moduleCount - 7),
                    this.setupPositionAdjustPattern(),
                    this.setupTimingPattern(),
                    this.setupTypeInfo(t, n),
                    this.typeNumber >= 7 && this.setupTypeNumber(t),
                    null == this.dataCache && (this.dataCache = e.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)),
                    this.mapData(this.dataCache, n)
                },
                setupPositionProbePattern: function(t, e) {
                    for (var n = -1; n <= 7; n++)
                        if (!(t + n <= -1 || this.moduleCount <= t + n))
                            for (var i = -1; i <= 7; i++)
                                e + i <= -1 || this.moduleCount <= e + i || (this.modules[t + n][e + i] = 0 <= n && n <= 6 && (0 == i || 6 == i) || 0 <= i && i <= 6 && (0 == n || 6 == n) || 2 <= n && n <= 4 && 2 <= i && i <= 4)
                },
                getBestMaskPattern: function() {
                    for (var t = 0, e = 0, n = 0; n < 8; n++) {
                        this.makeImpl(!0, n);
                        var i = o.getLostPoint(this);
                        (0 == n || t > i) && (t = i,
                        e = n)
                    }
                    return e
                },
                createMovieClip: function(t, e, n) {
                    var i = t.createEmptyMovieClip(e, n)
                      , a = 1;
                    this.make();
                    for (var s = 0; s < this.modules.length; s++)
                        for (var o = s * a, r = 0; r < this.modules[s].length; r++) {
                            var c = r * a
                              , d = this.modules[s][r];
                            d && (i.beginFill(0, 100),
                            i.moveTo(c, o),
                            i.lineTo(c + a, o),
                            i.lineTo(c + a, o + a),
                            i.lineTo(c, o + a),
                            i.endFill())
                        }
                    return i
                },
                setupTimingPattern: function() {
                    for (var t = 8; t < this.moduleCount - 8; t++)
                        null == this.modules[t][6] && (this.modules[t][6] = t % 2 == 0);
                    for (var e = 8; e < this.moduleCount - 8; e++)
                        null == this.modules[6][e] && (this.modules[6][e] = e % 2 == 0)
                },
                setupPositionAdjustPattern: function() {
                    for (var t = o.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++)
                        for (var n = 0; n < t.length; n++) {
                            var i = t[e]
                              , a = t[n];
                            if (null == this.modules[i][a])
                                for (var s = -2; s <= 2; s++)
                                    for (var r = -2; r <= 2; r++)
                                        this.modules[i + s][a + r] = -2 == s || 2 == s || -2 == r || 2 == r || 0 == s && 0 == r
                        }
                },
                setupTypeNumber: function(t) {
                    for (var e = o.getBCHTypeNumber(this.typeNumber), n = 0; n < 18; n++) {
                        var i = !t && 1 == (e >> n & 1);
                        this.modules[Math.floor(n / 3)][n % 3 + this.moduleCount - 8 - 3] = i
                    }
                    for (n = 0; n < 18; n++) {
                        i = !t && 1 == (e >> n & 1);
                        this.modules[n % 3 + this.moduleCount - 8 - 3][Math.floor(n / 3)] = i
                    }
                },
                setupTypeInfo: function(t, e) {
                    for (var n = this.errorCorrectLevel << 3 | e, i = o.getBCHTypeInfo(n), a = 0; a < 15; a++) {
                        var s = !t && 1 == (i >> a & 1);
                        a < 6 ? this.modules[a][8] = s : a < 8 ? this.modules[a + 1][8] = s : this.modules[this.moduleCount - 15 + a][8] = s
                    }
                    for (a = 0; a < 15; a++) {
                        s = !t && 1 == (i >> a & 1);
                        a < 8 ? this.modules[8][this.moduleCount - a - 1] = s : a < 9 ? this.modules[8][15 - a - 1 + 1] = s : this.modules[8][15 - a - 1] = s
                    }
                    this.modules[this.moduleCount - 8][8] = !t
                },
                mapData: function(t, e) {
                    for (var n = -1, i = this.moduleCount - 1, a = 7, s = 0, r = this.moduleCount - 1; r > 0; r -= 2) {
                        6 == r && r--;
                        while (1) {
                            for (var c = 0; c < 2; c++)
                                if (null == this.modules[i][r - c]) {
                                    var d = !1;
                                    s < t.length && (d = 1 == (t[s] >>> a & 1));
                                    var l = o.getMask(e, i, r - c);
                                    l && (d = !d),
                                    this.modules[i][r - c] = d,
                                    a--,
                                    -1 == a && (s++,
                                    a = 7)
                                }
                            if (i += n,
                            i < 0 || this.moduleCount <= i) {
                                i -= n,
                                n = -n;
                                break
                            }
                        }
                    }
                }
            },
            e.PAD0 = 236,
            e.PAD1 = 17,
            e.createData = function(t, n, i) {
                for (var a = l.getRSBlocks(t, n), s = new u, r = 0; r < i.length; r++) {
                    var c = i[r];
                    s.put(c.mode, 4),
                    s.put(c.getLength(), o.getLengthInBits(c.mode, t)),
                    c.write(s)
                }
                var d = 0;
                for (r = 0; r < a.length; r++)
                    d += a[r].dataCount;
                if (s.getLengthInBits() > 8 * d)
                    throw new Error("code length overflow. (" + s.getLengthInBits() + ">" + 8 * d + ")");
                s.getLengthInBits() + 4 <= 8 * d && s.put(0, 4);
                while (s.getLengthInBits() % 8 != 0)
                    s.putBit(!1);
                while (1) {
                    if (s.getLengthInBits() >= 8 * d)
                        break;
                    if (s.put(e.PAD0, 8),
                    s.getLengthInBits() >= 8 * d)
                        break;
                    s.put(e.PAD1, 8)
                }
                return e.createBytes(s, a)
            }
            ,
            e.createBytes = function(t, e) {
                for (var n = 0, i = 0, a = 0, s = new Array(e.length), r = new Array(e.length), c = 0; c < e.length; c++) {
                    var l = e[c].dataCount
                      , u = e[c].totalCount - l;
                    i = Math.max(i, l),
                    a = Math.max(a, u),
                    s[c] = new Array(l);
                    for (var f = 0; f < s[c].length; f++)
                        s[c][f] = 255 & t.buffer[f + n];
                    n += l;
                    var h = o.getErrorCorrectPolynomial(u)
                      , m = new d(s[c],h.getLength() - 1)
                      , p = m.mod(h);
                    r[c] = new Array(h.getLength() - 1);
                    for (f = 0; f < r[c].length; f++) {
                        var v = f + p.getLength() - r[c].length;
                        r[c][f] = v >= 0 ? p.get(v) : 0
                    }
                }
                var b = 0;
                for (f = 0; f < e.length; f++)
                    b += e[f].totalCount;
                var g = new Array(b)
                  , _ = 0;
                for (f = 0; f < i; f++)
                    for (c = 0; c < e.length; c++)
                        f < s[c].length && (g[_++] = s[c][f]);
                for (f = 0; f < a; f++)
                    for (c = 0; c < e.length; c++)
                        f < r[c].length && (g[_++] = r[c][f]);
                return g
            }
            ;
            for (var n = {
                MODE_NUMBER: 1,
                MODE_ALPHA_NUM: 2,
                MODE_8BIT_BYTE: 4,
                MODE_KANJI: 8
            }, a = {
                L: 1,
                M: 0,
                Q: 3,
                H: 2
            }, s = {
                PATTERN000: 0,
                PATTERN001: 1,
                PATTERN010: 2,
                PATTERN011: 3,
                PATTERN100: 4,
                PATTERN101: 5,
                PATTERN110: 6,
                PATTERN111: 7
            }, o = {
                PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
                G15: 1335,
                G18: 7973,
                G15_MASK: 21522,
                getBCHTypeInfo: function(t) {
                    var e = t << 10;
                    while (o.getBCHDigit(e) - o.getBCHDigit(o.G15) >= 0)
                        e ^= o.G15 << o.getBCHDigit(e) - o.getBCHDigit(o.G15);
                    return (t << 10 | e) ^ o.G15_MASK
                },
                getBCHTypeNumber: function(t) {
                    var e = t << 12;
                    while (o.getBCHDigit(e) - o.getBCHDigit(o.G18) >= 0)
                        e ^= o.G18 << o.getBCHDigit(e) - o.getBCHDigit(o.G18);
                    return t << 12 | e
                },
                getBCHDigit: function(t) {
                    var e = 0;
                    while (0 != t)
                        e++,
                        t >>>= 1;
                    return e
                },
                getPatternPosition: function(t) {
                    return o.PATTERN_POSITION_TABLE[t - 1]
                },
                getMask: function(t, e, n) {
                    switch (t) {
                    case s.PATTERN000:
                        return (e + n) % 2 == 0;
                    case s.PATTERN001:
                        return e % 2 == 0;
                    case s.PATTERN010:
                        return n % 3 == 0;
                    case s.PATTERN011:
                        return (e + n) % 3 == 0;
                    case s.PATTERN100:
                        return (Math.floor(e / 2) + Math.floor(n / 3)) % 2 == 0;
                    case s.PATTERN101:
                        return e * n % 2 + e * n % 3 == 0;
                    case s.PATTERN110:
                        return (e * n % 2 + e * n % 3) % 2 == 0;
                    case s.PATTERN111:
                        return (e * n % 3 + (e + n) % 2) % 2 == 0;
                    default:
                        throw new Error("bad maskPattern:" + t)
                    }
                },
                getErrorCorrectPolynomial: function(t) {
                    for (var e = new d([1],0), n = 0; n < t; n++)
                        e = e.multiply(new d([1, r.gexp(n)],0));
                    return e
                },
                getLengthInBits: function(t, e) {
                    if (1 <= e && e < 10)
                        switch (t) {
                        case n.MODE_NUMBER:
                            return 10;
                        case n.MODE_ALPHA_NUM:
                            return 9;
                        case n.MODE_8BIT_BYTE:
                            return 8;
                        case n.MODE_KANJI:
                            return 8;
                        default:
                            throw new Error("mode:" + t)
                        }
                    else if (e < 27)
                        switch (t) {
                        case n.MODE_NUMBER:
                            return 12;
                        case n.MODE_ALPHA_NUM:
                            return 11;
                        case n.MODE_8BIT_BYTE:
                            return 16;
                        case n.MODE_KANJI:
                            return 10;
                        default:
                            throw new Error("mode:" + t)
                        }
                    else {
                        if (!(e < 41))
                            throw new Error("type:" + e);
                        switch (t) {
                        case n.MODE_NUMBER:
                            return 14;
                        case n.MODE_ALPHA_NUM:
                            return 13;
                        case n.MODE_8BIT_BYTE:
                            return 16;
                        case n.MODE_KANJI:
                            return 12;
                        default:
                            throw new Error("mode:" + t)
                        }
                    }
                },
                getLostPoint: function(t) {
                    for (var e = t.getModuleCount(), n = 0, i = 0; i < e; i++)
                        for (var a = 0; a < e; a++) {
                            for (var s = 0, o = t.isDark(i, a), r = -1; r <= 1; r++)
                                if (!(i + r < 0 || e <= i + r))
                                    for (var c = -1; c <= 1; c++)
                                        a + c < 0 || e <= a + c || 0 == r && 0 == c || o == t.isDark(i + r, a + c) && s++;
                            s > 5 && (n += 3 + s - 5)
                        }
                    for (i = 0; i < e - 1; i++)
                        for (a = 0; a < e - 1; a++) {
                            var d = 0;
                            t.isDark(i, a) && d++,
                            t.isDark(i + 1, a) && d++,
                            t.isDark(i, a + 1) && d++,
                            t.isDark(i + 1, a + 1) && d++,
                            0 != d && 4 != d || (n += 3)
                        }
                    for (i = 0; i < e; i++)
                        for (a = 0; a < e - 6; a++)
                            t.isDark(i, a) && !t.isDark(i, a + 1) && t.isDark(i, a + 2) && t.isDark(i, a + 3) && t.isDark(i, a + 4) && !t.isDark(i, a + 5) && t.isDark(i, a + 6) && (n += 40);
                    for (a = 0; a < e; a++)
                        for (i = 0; i < e - 6; i++)
                            t.isDark(i, a) && !t.isDark(i + 1, a) && t.isDark(i + 2, a) && t.isDark(i + 3, a) && t.isDark(i + 4, a) && !t.isDark(i + 5, a) && t.isDark(i + 6, a) && (n += 40);
                    var l = 0;
                    for (a = 0; a < e; a++)
                        for (i = 0; i < e; i++)
                            t.isDark(i, a) && l++;
                    var u = Math.abs(100 * l / e / e - 50) / 5;
                    return n += 10 * u,
                    n
                }
            }, r = {
                glog: function(t) {
                    if (t < 1)
                        throw new Error("glog(" + t + ")");
                    return r.LOG_TABLE[t]
                },
                gexp: function(t) {
                    while (t < 0)
                        t += 255;
                    while (t >= 256)
                        t -= 255;
                    return r.EXP_TABLE[t]
                },
                EXP_TABLE: new Array(256),
                LOG_TABLE: new Array(256)
            }, c = 0; c < 8; c++)
                r.EXP_TABLE[c] = 1 << c;
            for (c = 8; c < 256; c++)
                r.EXP_TABLE[c] = r.EXP_TABLE[c - 4] ^ r.EXP_TABLE[c - 5] ^ r.EXP_TABLE[c - 6] ^ r.EXP_TABLE[c - 8];
            for (c = 0; c < 255; c++)
                r.LOG_TABLE[r.EXP_TABLE[c]] = c;
            function d(t, e) {
                if (void 0 == t.length)
                    throw new Error(t.length + "/" + e);
                var n = 0;
                while (n < t.length && 0 == t[n])
                    n++;
                this.num = new Array(t.length - n + e);
                for (var i = 0; i < t.length - n; i++)
                    this.num[i] = t[i + n]
            }
            function l(t, e) {
                this.totalCount = t,
                this.dataCount = e
            }
            function u() {
                this.buffer = new Array,
                this.length = 0
            }
            function f(t) {
                for (var e, n = "", i = 0; i < t.length; i++)
                    e = t.charCodeAt(i),
                    e >= 1 && e <= 127 ? n += t.charAt(i) : e > 2047 ? (n += String.fromCharCode(224 | e >> 12 & 15),
                    n += String.fromCharCode(128 | e >> 6 & 63),
                    n += String.fromCharCode(128 | e >> 0 & 63)) : (n += String.fromCharCode(192 | e >> 6 & 31),
                    n += String.fromCharCode(128 | e >> 0 & 63));
                return n
            }
            d.prototype = {
                get: function(t) {
                    return this.num[t]
                },
                getLength: function() {
                    return this.num.length
                },
                multiply: function(t) {
                    for (var e = new Array(this.getLength() + t.getLength() - 1), n = 0; n < this.getLength(); n++)
                        for (var i = 0; i < t.getLength(); i++)
                            e[n + i] ^= r.gexp(r.glog(this.get(n)) + r.glog(t.get(i)));
                    return new d(e,0)
                },
                mod: function(t) {
                    if (this.getLength() - t.getLength() < 0)
                        return this;
                    for (var e = r.glog(this.get(0)) - r.glog(t.get(0)), n = new Array(this.getLength()), i = 0; i < this.getLength(); i++)
                        n[i] = this.get(i);
                    for (i = 0; i < t.getLength(); i++)
                        n[i] ^= r.gexp(r.glog(t.get(i)) + e);
                    return new d(n,0).mod(t)
                }
            },
            l.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]],
            l.getRSBlocks = function(t, e) {
                var n = l.getRsBlockTable(t, e);
                if (void 0 == n)
                    throw new Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + e);
                for (var i = n.length / 3, a = new Array, s = 0; s < i; s++)
                    for (var o = n[3 * s + 0], r = n[3 * s + 1], c = n[3 * s + 2], d = 0; d < o; d++)
                        a.push(new l(r,c));
                return a
            }
            ,
            l.getRsBlockTable = function(t, e) {
                switch (e) {
                case a.L:
                    return l.RS_BLOCK_TABLE[4 * (t - 1) + 0];
                case a.M:
                    return l.RS_BLOCK_TABLE[4 * (t - 1) + 1];
                case a.Q:
                    return l.RS_BLOCK_TABLE[4 * (t - 1) + 2];
                case a.H:
                    return l.RS_BLOCK_TABLE[4 * (t - 1) + 3];
                default:
                    return
                }
            }
            ,
            u.prototype = {
                get: function(t) {
                    var e = Math.floor(t / 8);
                    return 1 == (this.buffer[e] >>> 7 - t % 8 & 1)
                },
                put: function(t, e) {
                    for (var n = 0; n < e; n++)
                        this.putBit(1 == (t >>> e - n - 1 & 1))
                },
                getLengthInBits: function() {
                    return this.length
                },
                putBit: function(t) {
                    var e = Math.floor(this.length / 8);
                    this.buffer.length <= e && this.buffer.push(0),
                    t && (this.buffer[e] |= 128 >>> this.length % 8),
                    this.length++
                }
            },
            i = {
                errorCorrectLevel: a,
                defaults: {
                    size: 354,
                    margin: 0,
                    backgroundColor: "#ffffff",
                    foregroundColor: "#000000",
                    fileType: "png",
                    errorCorrectLevel: a.H,
                    typeNumber: -1
                },
                make: function(t) {
                    var n = this;
                    return new Promise((function(i, a) {
                        var s = {
                            canvasId: t.canvasId,
                            componentInstance: t.componentInstance,
                            text: t.text,
                            size: n.defaults.size,
                            margin: n.defaults.margin,
                            backgroundColor: n.defaults.backgroundColor,
                            foregroundColor: n.defaults.foregroundColor,
                            fileType: n.defaults.fileType,
                            errorCorrectLevel: n.defaults.errorCorrectLevel,
                            typeNumber: n.defaults.typeNumber
                        };
                        if (t)
                            for (var o in t)
                                s[o] = t[o];
                        function r() {
                            var n = new e(t.typeNumber,t.errorCorrectLevel);
                            n.addData(f(t.text)),
                            n.make();
                            var s = uni.createCanvasContext(t.canvasId, t.componentInstance);
                            s.setFillStyle(t.backgroundColor),
                            s.fillRect(0, 0, t.size, t.size);
                            for (var o = (t.size - 2 * t.margin) / n.getModuleCount(), r = o, c = 0; c < n.getModuleCount(); c++)
                                for (var d = 0; d < n.getModuleCount(); d++) {
                                    var l = n.isDark(c, d) ? t.foregroundColor : t.backgroundColor;
                                    s.setFillStyle(l);
                                    var u = Math.round(d * o) + t.margin
                                      , h = Math.round(c * r) + t.margin
                                      , m = Math.ceil((d + 1) * o) - Math.floor(d * o)
                                      , p = Math.ceil((c + 1) * o) - Math.floor(c * o);
                                    s.fillRect(u, h, m, p)
                                }
                            setTimeout((function() {
                                s.draw(!1, function() {
                                    setTimeout((function() {
                                        uni.canvasToTempFilePath({
                                            canvasId: t.canvasId,
                                            fileType: t.fileType,
                                            width: t.size,
                                            height: t.size,
                                            destWidth: t.size,
                                            destHeight: t.size,
                                            success: function(e) {
                                                var n, a = e.tempFilePath;
                                                n = a,
                                                t.success && t.success(n),
                                                i(n)
                                            },
                                            fail: function(e) {
                                                t.fail && t.fail(e),
                                                a(e)
                                            },
                                            complete: function(e) {
                                                t.complete && t.complete(e)
                                            }
                                        }, t.componentInstance)
                                    }
                                    ), t.text.length + 100)
                                }())
                            }
                            ), 150)
                        }
                        t = s,
                        t.canvasId ? r() : console.error("uQRCode: Please set canvasId!")
                    }
                    ))
                }
            }
        }
        )();
        var a = i;
        e.default = a
    },
    "84f2": function(t, e, n) {
        var i = n("22c0");
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var a = n("4f06").default;
        a("0b38647d", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    8659: function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAArCAMAAADMv2F8AAAAAXNSR0IArs4c6QAAAYNQTFRFAAAA/wAA/4AA//8A/6oA/5kA/6oA/7MA/6IA/7kA/7YS/68Q/7QP/6oO/64N/7MN/6YL/6oL/60U/60S/60Q/60P/68P/6wO/6oU/6wT/7MT/6gT/64T/60P/60U/6oP/6wT/7AT/60S/64S/60R/64R/6sR/60Q/64Q/60Q/60U/68R/60R/6sR/64R/64Q/60S/64S/7AS/7ER/64T/68T/64S/68S/7AT/60T/68S/7AS/68S/68T/64T/7AS/68S/64S/68U/7AT/64S/64U/64S/68U/64T/68T/68U/64U/68U/64T/64T/64T/68U/64S/64U/68T/68T/68T/68U/7AT/68T/68T/68T/68U/68U/7AU/68T/68T/68T/64T/68U/68U/68T/64T/68T/64T/68U/68U/68U/64U/68T/68T/64T/68U/68U/68T/68U/68U/64U/68U/64U/68U/68T/64T/68T/68T/64T/68T/68T/68U/68UfL2ZEgAAAIB0Uk5TAAECAgMFBgoLCw4QERITFBcYGRwfIiMlJygoKSkyMjM3Nzg5Ozw9Pj9BQUlLTExPVFVXW19gYmNrbW9xc3Z4fn+BgoeNjpicoKKmp6irrbCztLe7v8DDxcjJyszQ0dLV2Nnc3t/g4uPl5ujq7O/w8fP09PX29vf4+fr7/P39/v7J2MK5AAABg0lEQVQ4y83VZ1PCQBAG4EUBsaAiKvbeQQXFhgXsFRV7x94riEZBsz/dS04kuTCJ4zij78edJ21ztwfw8+i91/gwZdZixjkUspqqzkwBpGlSZTnrhFw4HxG71Jg1SNhhof4OsVuF2Y4I28kDDVd5SdhGNsiczhXwyFn9DWHLGSBz5SuIfI2U2e8J8xtB6iyTr6QYLZMwN0cqE3qQOs+t0KHjdgnrj5H7j8R/CXUOQYW8JlLp2DwVc8YjxgZA7pzkkTP5YoXHr3BuYFzK0GzDZyXBwm3AOkkQ9wZpakHdzSdbWn/srCVisjScL0pbEXKou5N4zxbU3egbZRGXxvvZKsRY/mv/kq2DumROB4p1FWlVuDT/vsfIOuQ6WddDqkG7WHFtJdZ9tI9xVS/C9YtFwOyjdx/zfi27AnzyArsvx1Lk32HovSJVvlqxz6cNTF/M48/IlSrnxlI627/i4eZkc2gtE+Bbc207V9PROXlQoOno3D3XnLuSOd74O+cCPWfCzDnzAQrA2elM9QMXAAAAAElFTkSuQmCC"
    },
    "8ba4": function(t, e, n) {
        var i = n("23e7")
          , a = n("5e89");
        i({
            target: "Number",
            stat: !0
        }, {
            isInteger: a
        })
    },
    "91c1": function(t, e, n) {
        t.exports = n.p + "static/img/coin_kuang_light001.201f0f5e.png"
    },
    "92e2": function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("bd26")
          , a = n("f2ed");
        for (var s in a)
            "default" !== s && function(t) {
                n.d(e, t, (function() {
                    return a[t]
                }
                ))
            }(s);
        n("b874");
        var o, r = n("f0c5"), c = Object(r["a"])(a["default"], i["b"], i["c"], !1, null, "5fa53fd9", null, !1, i["a"], o);
        e["default"] = c.exports
    },
    "93e3": function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("1a7e")
          , a = n.n(i);
        for (var s in i)
            "default" !== s && function(t) {
                n.d(e, t, (function() {
                    return i[t]
                }
                ))
            }(s);
        e["default"] = a.a
    },
    9866: function(t, e, n) {
        var i = n("7fc8");
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var a = n("4f06").default;
        a("60999258", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "9c66": function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("d635")
          , a = n.n(i);
        for (var s in i)
            "default" !== s && function(t) {
                n.d(e, t, (function() {
                    return i[t]
                }
                ))
            }(s);
        e["default"] = a.a
    },
    "9d17": function(t, e, n) {
        t.exports = n.p + "static/img/bg3.f9eb9a72.png"
    },
    "9ebd": function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("7f60")
          , a = n("9c66");
        for (var s in a)
            "default" !== s && function(t) {
                n.d(e, t, (function() {
                    return a[t]
                }
                ))
            }(s);
        n("abb6");
        var o, r = n("f0c5"), c = Object(r["a"])(a["default"], i["b"], i["c"], !1, null, "57409092", null, !1, i["a"], o);
        e["default"] = c.exports
    },
    a27c: function(t, e, n) {
        t.exports = n.p + "static/img/coin_kuang_light009.03161f30.png"
    },
    a629: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("43fb")
          , a = n("0a93");
        for (var s in a)
            "default" !== s && function(t) {
                n.d(e, t, (function() {
                    return a[t]
                }
                ))
            }(s);
        var o, r = n("f0c5"), c = Object(r["a"])(a["default"], i["b"], i["c"], !1, null, "034f68ea", null, !1, i["a"], o);
        e["default"] = c.exports
    },
    a9ce: function(t, e, n) {
        t.exports = n.p + "static/img/coinsMin.a29635e9.png"
    },
    aa63: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("7055")
          , a = n.n(i);
        for (var s in i)
            "default" !== s && function(t) {
                n.d(e, t, (function() {
                    return i[t]
                }
                ))
            }(s);
        e["default"] = a.a
    },
    abb6: function(t, e, n) {
        "use strict";
        var i = n("1ada")
          , a = n.n(i);
        a.a
    },
    af3d: function(t, e, n) {
        t.exports = n.p + "static/img/okex.f5a4e347.png"
    },
    b095: function(t, e, n) {
        "use strict";
        var i = n("4ea4");
        n("a9e3"),
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = void 0;
        var a = i(n("3835"));
        n("96cf");
        var s = i(n("1da1"))
          , o = {
            name: "n-tabs",
            props: {
                width: {
                    type: Number,
                    default: 0
                },
                list: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                tabKey: {
                    type: String,
                    default: "name"
                }
            },
            data: function() {
                return {
                    tabIndex: 0,
                    parentLeft: 0,
                    compWidth: 0,
                    tabsInfo: [],
                    tabWidth: 0,
                    scrollLeft: 0,
                    toView: ""
                }
            },
            mounted: function() {
                this.init()
            },
            methods: {
                init: function() {
                    var t = this;
                    return (0,
                    s.default)(regeneratorRuntime.mark((function e() {
                        var n, i, s;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    t.$utils.querySelector(t, ".tabs-wrap");
                                case 2:
                                    n = e.sent,
                                    i = (0,
                                    a.default)(n, 1),
                                    s = i[0],
                                    t.parentLeft = s.left,
                                    t.compWidth = s.width,
                                    t.getNavsInfo();
                                case 8:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                },
                getNavsInfo: function() {
                    var t = this;
                    return (0,
                    s.default)(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    t.$utils.querySelector(t, ".tabs-item");
                                case 2:
                                    t.tabsInfo = e.sent,
                                    t.setScrollLeft();
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                },
                setScrollLeft: function() {
                    var t = this.tabsInfo[this.tabIndex];
                    if (t) {
                        var e = t.width
                          , n = t.left - this.parentLeft
                          , i = n - (this.compWidth - e) / 2;
                        this.scrollLeft = i < 0 ? 0 : i,
                        this.tabWidth = e
                    }
                },
                navTap: function(t) {
                    this.tabIndex !== t && (3 == t ? this.$utils.tps({
                        endtime: 10
                    }, {
                        url: "/pages/game/game"
                    }) : (this.tabIndex = t,
                    this.setScrollLeft(),
                    this.$emit("input", t),
                    this.$emit("change", t)))
                }
            }
        };
        e.default = o
    },
    b264: function(t, e, n) {
        var i = n("24fb");
        e = i(!1),
        e.push([t.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.menu .tabs-item[data-v-2972ae2c]{width:20vw;text-align:center}', ""]),
        t.exports = e
    },
    b325: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("ff6b")
          , a = n("aa63");
        for (var s in a)
            "default" !== s && function(t) {
                n.d(e, t, (function() {
                    return a[t]
                }
                ))
            }(s);
        n("309c");
        var o, r = n("f0c5"), c = Object(r["a"])(a["default"], i["b"], i["c"], !1, null, "63a2e330", null, !1, i["a"], o);
        e["default"] = c.exports
    },
    b5bf: function(t, e, n) {
        t.exports = n.p + "static/img/whyMY.dc93a5ac.png"
    },
    b874: function(t, e, n) {
        "use strict";
        var i = n("84f2")
          , a = n.n(i);
        a.a
    },
    bd26: function(t, e, n) {
        "use strict";
        n.d(e, "b", (function() {
            return a
        }
        )),
        n.d(e, "c", (function() {
            return s
        }
        )),
        n.d(e, "a", (function() {
            return i
        }
        ));
        var i = {
            uniPopup: n("2d2c").default
        }
          , a = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("v-uni-view", {
                staticClass: "uni-cursor-point"
            }, [i("v-uni-view", {
                staticClass: "uni-fab__circle--rightBottom uni-fab__circle",
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.$refs.chat.open.apply(void 0, arguments)
                    }
                }
            }, [i("v-uni-image", {
                attrs: {
                    src: n("b5bf"),
                    mode: ""
                }
            })], 1), i("uni-popup", {
                ref: "chat"
            }, [i("v-uni-view", {
                staticClass: "log-wrap bd-rad32"
            }, [i("v-uni-view", {
                staticClass: "bdbt ftsz36 bold",
                staticStyle: {
                    "line-height": "120rpx",
                    "text-align": "center"
                }
            }, [t._v(t._s(t.$t("chat[0]")))]), i("v-uni-view", {
                staticClass: "pd40 pdbt50 colum-center"
            }, [i("v-uni-view", {
                staticClass: "dpfxsb-center ftsz34 mgbt40",
                staticStyle: {
                    "margin-left": "-115px"
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t._onItemClick("custom_1")
                    }
                }
            }, [i("v-uni-view", {
                staticClass: "  ",
                staticStyle: {
                    width: "80rpx",
                    height: "80rpx"
                }
            }, [i("v-uni-image", {
                attrs: {
                    src: n("160c"),
                    mode: ""
                }
            })], 1), i("v-uni-view", {
                staticClass: "pd30 pdtp20 pdbt20 "
            }, [t._v(t._s(t.$t("kf1", {
                code: t.initData["custom_1"]
            })))])], 1), i("v-uni-view", {
                staticClass: "dpfxsb-center ftsz34 mgbt40",
                staticStyle: {
                    "margin-left": "0px"
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t._onItemClick("custome_2")
                    }
                }
            }, [i("v-uni-view", {
                staticClass: "  ",
                staticStyle: {
                    width: "80rpx",
                    height: "80rpx"
                }
            }, [i("v-uni-image", {
                attrs: {
                    src: n("160c"),
                    mode: ""
                }
            })], 1), i("v-uni-view", {
                staticClass: "pd30 pdtp20 pdbt20 "
            }, [t._v(t._s(t.$t("kf2", {
                code: t.initData["custome_2"]
            })))])], 1), i("v-uni-view", {
                staticClass: "dpfxsb-center ftsz34 mgbt40",
                staticStyle: {
                    "margin-left": "-120px"
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t._onItemClick("custome_3")
                    }
                }
            }, [i("v-uni-view", {
                staticClass: "  ",
                staticStyle: {
                    width: "100rpx",
                    height: "100rpx"
                }
            }, [i("v-uni-image", {
                attrs: {
                    src: n("29d4"),
                    mode: ""
                }
            })], 1), i("v-uni-view", {
                staticClass: "pd30 pdtp20 pdbt20 "
            }, [t._v(t._s(t.$t("kf3", {
                code: t.initData["custome_3"]
            })))])], 1)], 1)], 1)], 1)], 1)
        }
          , s = []
    },
    cb42: function(t, e, n) {
        "use strict";
        var i = n("4ea4");
        n("99af"),
        n("b64b"),
        n("e25e"),
        n("ac1f"),
        n("5319"),
        n("1276"),
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = void 0;
        var a = i(n("3835"))
          , s = ["43deg, #4158D0, 0%, #C850C0, 46%, #FFCC70, 100%", "160deg, #0093E9, 0%, #80D0C7, 100%", "62deg, #8EC5FC, 0%, #E0C3FC, 100%", "0deg, #D9AFD9, 0%, #97D9E1, 100%", "180deg, #FFFFFF, 0%, #6284FF, 50%, #FF0000, 100%", "90deg, #00DBDE, 0%, #FC00FF, 100%", "62deg, #FBAB7E, 0%, #F7CE68, 100%", "45deg, #85FFBD, 0%, #FFFB7D, 100%", "135deg, #8BC6EC, 0%, #9599E2, 100%", "0deg, #FFDEE9, 0%, #B5FFFC, 100%", "0deg, #08AEEA, 0%, #2AF598, 100%", "180deg, #52ACFF, 25%, #FFE32C, 100%", "147deg, #FFE53B, 25%, #FF2525, 100%", "19deg, #21D4FD, 0%, #B721FF, 100%", "19deg, #3EECAC, 0%, #EE74E1, 100%", "45deg, #FA8BFF, 0%, #2BD2FF, 52%, #2BFF88, 90%", "90deg, #FF9A8B, 0%, #FF6A88, 55%, #FF99AC, 100%", "45deg, #FBDA61, 0%, #FF5ACD, 100%", "132deg, #F4D03F, 0%, #16A085, 100%", "180deg, #A9C9FF, 0%, #FFBBEC, 100%", "90deg, #74EBD5, 0%, #9FACE6, 100%", "19deg, #FAACA8, 0%, #DDD6F3, 100%", "90deg, #FAD961, 0%, #F76B1C, 100%", "90deg, #FEE140, 0%, #FA709A, 100%", "225deg, #FF3CAC, 0%, #784BA0, 50%, #2B86C5, 100%"]
          , o = {
            setDeg: function(t, e) {
                var n = {}
                  , i = ["43deg", "160deg", "62deg", "180deg", "90deg", "135deg", "0deg", "19deg", "45deg", "132deg", "225deg"]
                  , a = Math.floor(Math.random() * i.length);
                return 5 == t.length && (n.background = e ? "linear-gradient(".concat(i[a], ",").concat(t[1] + "" + t[2], ",").concat(t[3] + "" + t[4], ")") : "linear-gradient(".concat(t[0], ",").concat(t[1] + "" + t[2], ",").concat(t[3] + "" + t[4], ")")),
                7 == t.length && (n.background = e ? "linear-gradient(".concat(i[a], ",").concat(t[1] + "" + t[2], ",").concat(t[3] + "" + t[4], ",").concat(t[5] + "" + t[6], ")") : "linear-gradient(".concat(t[0], ",").concat(t[1] + "" + t[2], ",").concat(t[3] + "" + t[4], ",").concat(t[5] + "" + t[6], ")")),
                {
                    style: n
                }
            },
            default: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "to right"
                  , n = {
                    "background-color": "#",
                    "background-image": "linear-gradient(" + e + ",1,3,5)"
                }
                  , i = Object.keys(n)
                  , s = (0,
                a.default)(i, 2)
                  , o = s[0]
                  , r = s[1];
                n[o] = n[o].replace("#", t[1]),
                5 == t.length && (n[r] = n[r].replace(",5", "")),
                n[r] = n[r].replace(/\d/g, (function(e, n) {
                    return t[e]
                }
                ));
                var c = o + ":" + n[o] + ";" + r + ":" + n[r];
                return {
                    style: n,
                    gradientStr: c
                }
            }
        };
        function r() {
            for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3, e = arguments.length > 1 ? arguments[1] : void 0, n = [], i = 0; i < t; i++) {
                var a = parseInt(Math.random() * s.length)
                  , r = s[a].split(",")
                  , c = e ? o.setDeg(r) : o.default(r);
                c.id = a,
                n.push(c)
            }
            return n
        }
        var c = r;
        e.default = c
    },
    cdac: function(t, e, n) {
        "use strict";
        var i;
        n.d(e, "b", (function() {
            return a
        }
        )),
        n.d(e, "c", (function() {
            return s
        }
        )),
        n.d(e, "a", (function() {
            return i
        }
        ));
        var a = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("v-uni-view", {
                staticClass: "tabs-wrap"
            }, [i("v-uni-scroll-view", {
                staticClass: "tabs-scroll",
                attrs: {
                    "scroll-x": !0,
                    "scroll-left": t.scrollLeft,
                    "scroll-with-animation": !0,
                    "scroll-into-view": t.toView
                }
            }, [i("v-uni-view", {
                staticClass: "tabs-list dpfx pdrt40",
                class: {
                    menu: t.width > 750
                }
            }, t._l(t.list, (function(e, a) {
                return i("v-uni-view", {
                    key: a,
                    staticClass: "tabs-item poret le-het5 no-shrk pdrt15 pdrt40",
                    class: {
                        "ac-col": a === t.tabIndex
                    },
                    staticStyle: {
                        left: "25px"
                    },
                    attrs: {
                        url: "game/game?title=game"
                    },
                    on: {
                        click: function(e) {
                            arguments[0] = e = t.$handleEvent(e),
                            t.navTap(a)
                        }
                    }
                }, [i("v-uni-text", {
                    staticClass: "poret tstion",
                    staticStyle: {
                        "z-index": "1"
                    }
                }, [t._v(t._s(e[t.tabKey]))]), i("v-uni-view", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: a === t.tabIndex,
                        expression: "index===tabIndex"
                    }],
                    staticClass: "poslt w-full h-full tstion",
                    staticStyle: {
                        left: "-10px"
                    }
                }, [i("v-uni-image", {
                    attrs: {
                        src: n("e839"),
                        mode: ""
                    }
                })], 1)], 1)
            }
            )), 1)], 1)], 1)
        }
          , s = []
    },
    cdd9: function(t, e, n) {
        "use strict";
        var i = n("4ea4");
        n("99af"),
        n("4160"),
        n("a9e3"),
        n("ac1f"),
        n("5319"),
        n("159b"),
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = void 0;
        var a = i(n("2909"))
          , s = i(n("5530"))
          , o = n("3557")
          , r = {
            name: "uniTransition",
            emits: ["click", "change"],
            props: {
                show: {
                    type: Boolean,
                    default: !1
                },
                modeClass: {
                    type: [Array, String],
                    default: function() {
                        return "fade"
                    }
                },
                duration: {
                    type: Number,
                    default: 300
                },
                styles: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                customClass: {
                    type: String,
                    default: ""
                }
            },
            data: function() {
                return {
                    isShow: !1,
                    transform: "",
                    opacity: 1,
                    animationData: {},
                    durationTime: 300,
                    config: {}
                }
            },
            watch: {
                show: {
                    handler: function(t) {
                        t ? this.open() : this.isShow && this.close()
                    },
                    immediate: !0
                }
            },
            computed: {
                stylesObject: function() {
                    var t = (0,
                    s.default)((0,
                    s.default)({}, this.styles), {}, {
                        "transition-duration": this.duration / 1e3 + "s"
                    })
                      , e = "";
                    for (var n in t) {
                        var i = this.toLine(n);
                        e += i + ":" + t[n] + ";"
                    }
                    return e
                },
                transformStyles: function() {
                    return "transform:" + this.transform + ";opacity:" + this.opacity + ";" + this.stylesObject
                }
            },
            created: function() {
                this.config = {
                    duration: this.duration,
                    timingFunction: "ease",
                    transformOrigin: "50% 50%",
                    delay: 0
                },
                this.durationTime = this.duration
            },
            methods: {
                init: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    t.duration && (this.durationTime = t.duration),
                    this.animation = (0,
                    o.createAnimation)(Object.assign(this.config, t), this)
                },
                onClick: function() {
                    this.$emit("click", {
                        detail: this.isShow
                    })
                },
                step: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (this.animation) {
                        for (var n in t)
                            try {
                                var i;
                                if ("object" === typeof t[n])
                                    (i = this.animation)[n].apply(i, (0,
                                    a.default)(t[n]));
                                else
                                    this.animation[n](t[n])
                            } catch (s) {
                                console.error("方法 ".concat(n, " 不存在"))
                            }
                        return this.animation.step(e),
                        this
                    }
                },
                run: function(t) {
                    this.animation && this.animation.run(t)
                },
                open: function() {
                    var t = this;
                    clearTimeout(this.timer),
                    this.transform = "",
                    this.isShow = !0;
                    var e = this.styleInit(!1)
                      , n = e.opacity
                      , i = e.transform;
                    "undefined" !== typeof n && (this.opacity = n),
                    this.transform = i,
                    this.$nextTick((function() {
                        t.timer = setTimeout((function() {
                            t.animation = (0,
                            o.createAnimation)(t.config, t),
                            t.tranfromInit(!1).step(),
                            t.animation.run(),
                            t.$emit("change", {
                                detail: t.isShow
                            })
                        }
                        ), 20)
                    }
                    ))
                },
                close: function(t) {
                    var e = this;
                    this.animation && this.tranfromInit(!0).step().run((function() {
                        e.isShow = !1,
                        e.animationData = null,
                        e.animation = null;
                        var t = e.styleInit(!1)
                          , n = t.opacity
                          , i = t.transform;
                        e.opacity = n || 1,
                        e.transform = i,
                        e.$emit("change", {
                            detail: e.isShow
                        })
                    }
                    ))
                },
                styleInit: function(t) {
                    var e = this
                      , n = {
                        transform: ""
                    }
                      , i = function(t, i) {
                        "fade" === i ? n.opacity = e.animationType(t)[i] : n.transform += e.animationType(t)[i] + " "
                    };
                    return "string" === typeof this.modeClass ? i(t, this.modeClass) : this.modeClass.forEach((function(e) {
                        i(t, e)
                    }
                    )),
                    n
                },
                tranfromInit: function(t) {
                    var e = this
                      , n = function(t, n) {
                        var i = null;
                        "fade" === n ? i = t ? 0 : 1 : (i = t ? "-100%" : "0",
                        "zoom-in" === n && (i = t ? .8 : 1),
                        "zoom-out" === n && (i = t ? 1.2 : 1),
                        "slide-right" === n && (i = t ? "100%" : "0"),
                        "slide-bottom" === n && (i = t ? "100%" : "0")),
                        e.animation[e.animationMode()[n]](i)
                    };
                    return "string" === typeof this.modeClass ? n(t, this.modeClass) : this.modeClass.forEach((function(e) {
                        n(t, e)
                    }
                    )),
                    this.animation
                },
                animationType: function(t) {
                    return {
                        fade: t ? 1 : 0,
                        "slide-top": "translateY(".concat(t ? "0" : "-100%", ")"),
                        "slide-right": "translateX(".concat(t ? "0" : "100%", ")"),
                        "slide-bottom": "translateY(".concat(t ? "0" : "100%", ")"),
                        "slide-left": "translateX(".concat(t ? "0" : "-100%", ")"),
                        "zoom-in": "scaleX(".concat(t ? 1 : .8, ") scaleY(").concat(t ? 1 : .8, ")"),
                        "zoom-out": "scaleX(".concat(t ? 1 : 1.2, ") scaleY(").concat(t ? 1 : 1.2, ")")
                    }
                },
                animationMode: function() {
                    return {
                        fade: "opacity",
                        "slide-top": "translateY",
                        "slide-right": "translateX",
                        "slide-bottom": "translateY",
                        "slide-left": "translateX",
                        "zoom-in": "scale",
                        "zoom-out": "scale"
                    }
                },
                toLine: function(t) {
                    return t.replace(/([A-Z])/g, "-$1").toLowerCase()
                }
            }
        };
        e.default = r
    },
    cefe: function(t, e, n) {
        "use strict";
        var i;
        n.d(e, "b", (function() {
            return a
        }
        )),
        n.d(e, "c", (function() {
            return s
        }
        )),
        n.d(e, "a", (function() {
            return i
        }
        ));
        var a = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("v-uni-view", [n("v-uni-canvas", {
                style: {
                    width: t.size + "px",
                    height: t.size + "px"
                },
                attrs: {
                    id: t.cid,
                    "canvas-id": t.cid
                }
            })], 1)
        }
          , s = []
    },
    d635: function(t, e, n) {
        "use strict";
        var i = n("4ea4");
        n("a9e3"),
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = void 0;
        var a = i(n("cb42"))
          , s = {
            name: "n-banner",
            inheritAttrs: !1,
            props: {
                width: {
                    type: Number,
                    default: 0
                },
                isTips: {
                    type: Boolean,
                    default: !1
                },
                dots: {
                    type: String,
                    default: "none"
                },
                isScale: {
                    type: Boolean,
                    default: !1
                },
                textSeat: {
                    type: String,
                    default: "left"
                },
                isGradient: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    current: 0,
                    bottomColor: "",
                    gradientColor: "",
                    data: [],
                    list: [{
                        id: 1,
                        ad_code: "../../static/img/home/banner.png",
                        pc_banner: "../../static/img/home/pc_banner.png",
                        ad_code_en: "../../static/img/home/banner_en.png",
                        pc_banner_en: "../../static/img/home/pc_banner_en.png"
                    }]
                }
            },
            computed: {
                len: function() {
                    return this.list.length
                }
            },
            watch: {
                len: function(t) {
                    this.data = (0,
                    a.default)(t)
                }
            },
            mounted: function() {},
            methods: {
                swiperChange: function(t) {
                    this.current = t.target.current,
                    this.$emit("change", {
                        current: this.current
                    }),
                    this.setColor(this.current)
                },
                setColor: function(t) {
                    var e = this.data[t];
                    e || (this.data = (0,
                    a.default)(this.len),
                    e = this.data[t])
                },
                setGradual: function(t, e, n) {
                    return t["opacity"] = e == n ? 1 : 0,
                    t["transition-duration"] = "".concat(e == n ? 1 : 1.2, "s"),
                    t
                }
            }
        };
        e.default = s
    },
    db85: function(t, e, n) {
        "use strict";
        var i = n("4ea4");
        n("99af"),
        n("4160"),
        n("d81d"),
        n("a434"),
        n("a9e3"),
        n("b64b"),
        n("acd8"),
        n("e25e"),
        n("ac1f"),
        n("5319"),
        n("159b"),
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = void 0;
        var a = i(n("2909"))
          , s = i(n("3835"));
        n("96cf");
        var o, r = i(n("1da1")), c = i(n("5530")), d = i(n("ade3")), l = n("c917"), u = n("6ac1"), f = i(n("b325")), h = (o = {
            components: {
                countUp: f.default
            },
            data: function() {
                var t, e, n, i;
                return {
                    rules_code: void 0,
                    windowWidth: document.body.clientWidth,
                    num: 123.453,
                    isKefu: !1,
                    state: !1,
                    swiper: {
                        autoplay: !0,
                        circular: !0,
                        interval: 3500,
                        duration: 600
                    },
                    value: 0,
                    nextMargin: "70rpx",
                    zNextMargin: "120rpx",
                    zPrevMargin: "120rpx",
                    navIndex: 0,
                    tops: [],
                    start_top: 0,
                    banner_list: [{}, {}],
                    news_list: [],
                    news_str: "",
                    gItem: {
                        address: "xxx",
                        g_address: "xxxx",
                        balance: "0"
                    },
                    current: 1,
                    gList: [{
                        address: "TBBeU6jAGNwuTiL5tAskoPo8T6qwY66666",
                        extra: '{"percent":"1.98","deductFee":"0.001"}',
                        game_type: 1,
                        id: 5,
                        image: "../../static/img/home/bg03.png",
                        max_num: "30000.00",
                        min_num: "10.00",
                        name: "哈希大小",
                        name_en: "HASH BigSmall",
                        name_two: "哈希大小",
                        percent: "1.98",
                        pic: "",
                        remark: null,
                        rule_content: "大小投注金额限制<br />\r\n• 仅接受10-30000USDT或10-300000TRX有效金额投注<br />\r\n• 低于10USDT(TRX)投注不返还金额<br />\r\n• 高于30000USDT投注或者300000TRX投注请联系客服退回金额<br />\r\n<br />\r\n赔率：1.98倍<br />\r\n<br />\r\n游戏流程<br />\r\n1. 向游戏地址转入有效金额<br />\r\n2. 下注方位<br />\r\n&nbsp; &nbsp; 1)下注 1000USDT 个位为0,1,2,3,4识别为押小<br />\r\n&nbsp; &nbsp; 2)下注 1005USDT 个位为5,6,7,8,9识别为押大<br />\r\n2. 获取您转账的区块（Block Hash）最后一位数字作为判断，如果最后一位是字母往前推<br />\r\n3. 如若中奖平台将实时返奖1.98倍USDT或TRX到您的数字钱包<br />\r\n<br />\r\n示例<br />\r\n1：例如区块hash为 00000000... 2298d 结果取 hash的最后1位 ,最后一位是字母往前推则是8<br />\r\n2：尾数是0,1,2,3,4为小<br />\r\n3：尾数是5,6,7,8,9为大",
                        rule_content_en: 'Bet Amount Limit<br />\r\n• Only accept 100-30000USDT or 100-300000TRX valid amount bets<br />\r\n• No refund for bets below 10USDT(TRX)<br />\r\n• For bets higher than 30000USDT or 300000TRX bets, please contact customer service to refund the amount<br />\r\n<br />\r\nOdds: 1.98x<br />\r\n<br />\r\nGame flow<br />\r\n1. Transfer a valid amount to the game address<br />\r\n2. Where to bet<br />\r\n&nbsp; &nbsp; &nbsp;1) A bet of 1000USDT is identified as 0,1,2,3,4 as a small bet<br />\r\n&nbsp; &nbsp; &nbsp;2) Bet 1005USDT as 5, 6, 7, 8, 9 and identify it as a big bet<br />\r\n2. Get the last digit of the block (Block Hash) you transferred as a judgment, if the last digit is a letter, push it forward<br />\r\n3. If you win the lottery, the platform will return 1.98 times USDT or TRX to your digital wallet in real time<br />\r\n<br />\r\nExample<br />\r\n1: For example, if the block hash is 00000000... 2298d, the result is the last digit of the hash, and the last digit is 8 if the letter is pushed forward.<br />\r\n2: Mantissa is 0,1,2,3,4 is small<br />\r\n3: Mantissa is 5,6,7,8,9 is big<br />\r\n<span style="white-space:normal;"></span>',
                        status: 1,
                        trx_max_num: "300000.00",
                        trx_min_num: "10.00",
                        update_date: null,
                        weight: 0
                    }, {
                        address: "TTudnLSCWa5LfZfTeTRBMoCgVYpvh55555",
                        extra: '{"percent":"1.98","deductFee":"0.001"}',
                        game_type: 1,
                        id: 6,
                        image: "../../static/img/home/bg04.png",
                        max_num: "30000.00",
                        min_num: "10.00",
                        name: "哈希单双",
                        name_en: "HASH SingleDouble",
                        name_two: "哈希单双",
                        percent: "1.98",
                        pic: "",
                        remark: null,
                        rule_content: '单双投注金额限制<br />\r\n• 仅接受10-30000USDT或10-300000TRX有效金额投注<br />\r\n• 低于10USDT(TRX)投注不返还金额<br />\r\n• 高于30000USDT投注或者300000TRX投注请联系客服退回金额<br />\r\n<br />\r\n赔率：1.98倍<br />\r\n<br />\r\n游戏流程<br />\r\n1. 向游戏地址转入有效金额<br />\r\n2. 下注方位<br />\r\n&nbsp; &nbsp; 1)下注 1000USDT 个位为0,2,4,6,8识别为押双<br />\r\n&nbsp; &nbsp; 2)下注 1005USDT 个位为1,3,5,7,9识别为押单<br />\r\n2. 获取您转账的区块（Block Hash）最后一位数字作为判断，如果最后一位是字母往前推<br />\r\n3. 如若中奖平台将实时返奖1.98倍USDT或TRX到您的数字钱包<br />\r\n<br />\r\n示例<br />\r\n1：例如区块hash为 00000000... 2298d 结果取 hash的最后1位 ,最后一位是字母往前推则是8<br />\r\n2：尾数是0,2,4,6,8为双<br />\r\n3：尾数是1,3,5,7,9为单<br />\r\n<span style="white-space:normal;"></span>',
                        rule_content_en: '<span style="white-space:normal;">Bet Amount Limit<br />\r\n• Only accept 10-30000USDT or 10-300000TRX valid amount bets<br />\r\n• No refund for bets below 10USDT(TRX)<br />\r\n• For bets higher than 30000USDT or 300000TRX bets, please contact customer service to refund the amount<br />\r\n<br />\r\nOdds: 1.98x<br />\r\n<br />\r\nGame flow<br />\r\n1. Transfer a valid amount to the game address<br />\r\n2. Where to bet<br />\r\n&nbsp; &nbsp; &nbsp;1) A bet of 1000USDT is recognized as a double bet<br />\r\n&nbsp; &nbsp; &nbsp;2) Bet 1005USDT as 1, 3, 5, 7, 9 and identify it as a betting order<br />\r\n2. Get the last digit of the block (Block Hash) you transferred as a judgment, if the last digit is a letter, push it forward<br />\r\n3. If you win the lottery, the platform will return 1.98 times USDT or TRX to your digital wallet in real time<br />\r\n<br />\r\nExample<br />\r\n1: For example, if the block hash is 00000000... 2298d, the result is the last digit of the hash, and the last digit is 8 if the letter is pushed forward.<br />\r\n2: Mantissa is 0,2,4,6,8 for double<br />\r\n3: Mantissa is 1,3,5,7,9 for single<br />\r\n</span><span style="white-space:normal;"></span>',
                        status: 1,
                        trx_max_num: "300000.00",
                        trx_min_num: "10.00",
                        update_date: null,
                        weight: 0
                    }, {
                        address: "TTUdiTCXiXRKLdkihwiai4AY2gR6s99999",
                        extra: '{"percent":"1.98","deductFee":"0.001"}',
                        game_type: 1,
                        id: 1,
                        image: "../../static/img/home/bg.png",
                        max_num: "30000.00",
                        min_num: "10.00",
                        name: "幸运哈希",
                        name_en: "Luck Hash",
                        name_two: "幸运哈希",
                        percent: "1.98",
                        pic: "",
                        remark: null,
                        rule_content: '<p>\r\n\t幸运哈希投注金额限制<br />\r\n• 仅接受10-30000USDT或10-300000TRX有效金额投注<br />\r\n• 低于10USDT(TRX)投注不返还金额<br />\r\n• 高于30000USDT投注或者300000TRX投注请联系客服退回金额<br />\r\n<br />\r\n游戏流程<br />\r\n1. 向游戏地址转入有效金额<br />\r\n2. 获取您转账的区块（Block Hash）作为判定依据<br />\r\n3. （Block Hash）末尾两位分别为数字和字母或字母和数字为赢<br />\r\n4. 如若中奖平台将实时返奖1.98倍USDT或TRX到您的数字钱包<br />\r\n<br />\r\n示例<br />\r\n1：例如区块hash为 00000000... 2292d&nbsp; 最后两位是2d或者d2<br />\r\n2：您的投注金额为:100USDT或100TRX，将实时返还198USDT或198TRX到您的钱包\r\n</p>\r\n<p>\r\n\t<span style="white-space:normal;"></span> \r\n</p>',
                        rule_content_en: '<span style="white-space:normal;">Bet Amount Limit<br />\r\n• Only accept 10-30000USDT or 10-300000TRX valid amount bets<br />\r\n• No refund for bets below 10USDT(TRX)<br />\r\n• For bets higher than 30000USDT or 300000TRX bets, please contact customer service to refund the amount<br />\r\n<br />\r\nGame flow<br />\r\n1. Transfer a valid amount to the game address<br />\r\n2. Obtain the Block Hash of your transfer as the basis for judgment<br />\r\n3. (Block Hash) The last two digits are numbers and letters or letters and numbers are the winner<br />\r\n4. If you win the prize, the platform will return 1.98 times USDT or TRX to your digital wallet in real time<br />\r\n<br />\r\nExample<br />\r\n1: For example, the block hash is 00000000... 2292d The last two digits are 2d or d2<br />\r\n2: Your bet amount is: 100USDT or 100TRX, 198USDT or 198TRX will be returned to your wallet in real time<br />\r\n</span><br />',
                        status: 1,
                        trx_max_num: "300000.00",
                        trx_min_num: "10.00",
                        update_date: null,
                        weight: 0
                    }, {
                        address: "TFQQyEaiHRKWCYKkb16aZu1rUUNu288888",
                        extra: '{"percent":"1.98","p_z_percent":"0.1","deductFee":"0.001"}',
                        game_type: 1,
                        id: 2,
                        image: "../../static/img/home/bg01.png",
                        max_num: "30000.00",
                        min_num: "100.00",
                        name: "哈希牛魔王",
                        name_en: "Hash NiuNiu",
                        name_two: "哈希牛魔王",
                        percent: "1.98",
                        pic: "",
                        remark: null,
                        rule_content: "哈希牛魔王投注金额限制<br />\r\n• 仅接受100-30000USDT或100-300000TRX有效金额投注<br />\r\n• 低于100USDT(TRX)投注不返还金额<br />\r\n• 高于30000USDT投注或者300000TRX投注请联系客服退回金额<br />\r\n• 投注金额是转账金额的十分之一<br />\r\n• 如押注10USDT,则需要转账100USDT<br />\r\n• 获取您转账的区块Hash作为判定依据<br />\r\n<br />\r\n游戏流程<br />\r\n1. 向游戏地址转入有效金额<br />\r\n&nbsp;（注意转账金额是100USDT或100TRX 那么投注金额就是10USDT或10TRX）<br />\r\n2. 获取您转账的区块（Block Hash）的末尾五位作为判定依据<br />\r\n3. 平台点数为区块Hash的倒数3-5位计算，您的点数为区块Hash的倒数1-3位计算<br />\r\n4. 如果您的点数大于平台点数，平台将按本金+中奖金额实时返奖到您的数字钱包<br />\r\n<br />\r\n示例<br />\r\n1：例如区块hash为 00000000... 2298d 结果取 hash的最后5位 2298d ,其中字母算0点<br />\r\n2：您的转账金额为:100USDT或100TRX，那么投注金额是10USDT或10TRX<br />\r\n3：此时平台点数为（2+2+9=3）牛三，您的点数为（9+8+d=7）牛7，牛7大于牛3，平台将实时返还100+(10x7x0.98)=168.6<br />\r\n4：您的点数和平台点数相同，相同点数在1~5点为平台赢1倍，其他同点扣千分之一手续费后原路退回<br />\r\n5：总和个位数数字1-9为牛一 ~ 牛九, 0则为牛牛<br />\r\n6：牛1为1倍奖励，牛2为2倍奖励...牛牛为10倍奖励<br />\r\n<br />",
                        rule_content_en: "Bet Amount Limit<br />\r\n• Only accept 100-30000USDT or 100-300000TRX valid amount bets<br />\r\n• No refund for bets below 100USDT(TRX)<br />\r\n• For bets higher than 30000USDT or 300000TRX bets, please contact customer service to refund the amount<br />\r\n• The bet amount is 1/10 of the transfer amount<br />\r\n• If you bet 10USDT, you need to transfer 100USDT<br />\r\n• Obtain the block Hash of your transfer as a judgment basis<br />\r\n<br />\r\nGame flow<br />\r\n1. Transfer a valid amount to the game address<br />\r\n&nbsp;(Note that the transfer amount is 100USDT or 100TRX, then the betting amount is 10USDT or 10TRX)<br />\r\n2. Obtain the last five digits of the block (Block Hash) you transferred as the basis for judgment<br />\r\n3. The platform points are calculated as the last 3-5 digits of the block Hash, and your points are calculated as the last 1-3 digits of the block Hash.<br />\r\n4. If your points are greater than the platform points, the platform will return the prize to your digital wallet in real time according to the principal + winning amount<br />\r\n<br />\r\nExample<br />\r\n1: For example, the block hash is 00000000... 2298d The result is the last 5 digits of the hash 2298d , where the letter counts as 0 points<br />\r\n2: Your transfer amount is: 100USDT or 100TRX, then the betting amount is 10USDT or 10TRX<br />\r\n3: At this time, the platform points are (2+2+9=3) cattle three, your points are (9+8+d=7) cattle 7, cattle 7 is greater than cattle 3, the platform will return 100+(10x7x0. 98)=168.6<br />\r\n4: Your points are the same as those of the platform. The platform will win 1 time for the same points from 1 to 5 points. The other same points will be refunded after deducting one thousandth of the handling fee.<br />\r\n5: The sum of the single digit numbers 1-9 is Niu Yi ~ Niu Jiu, 0 is Niu Niu<br />\r\n6: Bull 1 is 1x reward, Bull 2 is 2x reward... Bull Bull is 10x reward<br />\r\n<br />",
                        status: 1,
                        trx_max_num: "300000.00",
                        trx_min_num: "100.00",
                        update_date: null,
                        weight: 0
                    }, {
                        address: "TSsnHDXrgwHB4iA9b67YQxk2dqo7C77777",
                        extra: '{"z_percent":"1.98","x_percent":"1.98","h_percent":"8","deductFee":"0.001"}',
                        game_type: 1,
                        id: 4,
                        image: "../../static/img/home/bg02.png",
                        max_num: "30000.00",
                        min_num: "10.00",
                        name: "庄闲合",
                        name_en: "BANKER PLAYER TIE",
                        name_two: "庄闲合",
                        percent: "1.98",
                        pic: "",
                        remark: null,
                        rule_content: "庄闲合投注金额限制<br />\r\n• 仅接受10-30000USDT或10-300000TRX有效金额投注<br />\r\n• 低于10USDT(TRX)投注不返还金额<br />\r\n• 高于30000USDT投注或者300000TRX投注请联系客服退回金额<br />\r\n<br />\r\n赔率：<br />\r\n庄：1.98倍<br />\r\n闲：1.98倍<br />\r\n合：8倍<br />\r\n<br />\r\n游戏流程<br />\r\n1. 向游戏地址转入有效金额<br />\r\n2. 下注方位<br />\r\n&nbsp; &nbsp; 1)下注 11USDT或TRX 个位为1识别为:押庄赢<br />\r\n&nbsp; &nbsp; 2)下注 12USDT或TRX 个位为2识别为:押闲赢<br />\r\n&nbsp; &nbsp; 3)下注 13USDT或TRX 个位为3识别为:押合赢<br />\r\n&nbsp; &nbsp; 4)个位为其他数字，识别为无效押注，扣除千分之一手续费后原路退回<br />\r\n2. 获取您转账的区块（Block Hash）的末尾五位作为判定依据<br />\r\n3. 庄的点数为区块Hash的倒数4-5位计算，闲的点数为区块Hash的倒数1-2位计算<br />\r\n4. 如若中奖平台将实时返奖到您的数字钱包<br />\r\n<br />\r\n示例<br />\r\n1: 例如区块hash为 00000000... 2298d 结果取 hash的最后5位 2298d ,其中字母算0点<br />\r\n&nbsp; &nbsp; &nbsp;1)庄点数：2+2=4 点<br />\r\n&nbsp; &nbsp; &nbsp;2)闲点数：8+d(0)=8 点<br />\r\n2: 例如区块hash为 00000000... 1798d 结果取 hash的最后5位 2298d ,其中字母算0点<br />\r\n&nbsp; &nbsp; &nbsp;1)庄点数：1+7=8 点<br />\r\n&nbsp; &nbsp; &nbsp;2)闲点数：8+d(0)=8 点<br />\r\n&nbsp; &nbsp; &nbsp;3)结果：合<br />\r\n3: 如果押注庄赢或者闲赢，开奖结果是合，则扣除千分之一手续费后原路退回<br />",
                        rule_content_en: "Bet Amount Limit<br />\r\n• Only accept 10-30000USDT or 10-300000TRX valid amount bets<br />\r\n• No refund for bets below 10USDT(TRX)<br />\r\n• For bets higher than 30000USDT or 300000TRX bets, please contact customer service to refund the amount<br />\r\n<br />\r\nOdds:<br />\r\nZhuang: 1.98 times<br />\r\nIdle: 1.98 times<br />\r\nCombined: 8 times<br />\r\n<br />\r\nGame flow<br />\r\n1. Transfer a valid amount to the game address<br />\r\n2. Where to bet<br />\r\n&nbsp; &nbsp; 1) A bet of 11USDT or TRX is identified as 1: the banker wins<br />\r\n&nbsp; &nbsp; 2) Betting 12USDT or TRX with a digit of 2 is identified as: betting on the player to win<br />\r\n&nbsp; &nbsp; 3) A bet of 13USDT or TRX is identified as 3: betting and winning<br />\r\n&nbsp; &nbsp; 4) The one digit is another number, which is identified as an invalid bet. After deducting one thousandth of the handling fee, it will be returned the same way.<br />\r\n2. Obtain the last five digits of the block (Block Hash) you transferred as the basis for judgment<br />\r\n3. Zhuangs points are calculated as the reciprocal 4-5 digits of the block Hash, and idle points are calculated as the reciprocal 1-2 digits of the block Hash.<br />\r\n4. If you win the prize, the platform will return the prize to your digital wallet in real time<br />\r\n<br />\r\nExample<br />\r\n1: For example, the block hash is 00000000... 2298d The result is the last 5 digits of the hash 2298d , where the letter counts as 0 points<br />\r\n&nbsp; &nbsp; &nbsp;1) Zhuang points: 2+2=4 points<br />\r\n&nbsp; &nbsp; &nbsp;2) Free points: 8+d(0)=8 points<br />\r\n2: For example, the block hash is 00000000... 1798d, and the result is the last 5 digits of the hash 2298d, where the letter counts as 0 points<br />\r\n&nbsp; &nbsp; &nbsp;1) Zhuang points: 1+7=8 points<br />\r\n&nbsp; &nbsp; &nbsp;2) Free points: 8+d(0)=8 points<br />\r\n&nbsp; &nbsp; &nbsp;3) Result: combined<br />\r\n3: If the bet is on the banker or the idler, and the result of the lottery draw is a match, the bet will be returned the same way after deducting 1/1000 of the handling fee.<br />",
                        status: 1,
                        trx_max_num: "300000.00",
                        trx_min_num: "10.00",
                        update_date: null,
                        weight: 0
                    }],
                    zjgz_html: "",
                    zjgz_html_en: "",
                    jexz_html: '\n\t\t\t<div style="line-height: 1.8;">\n\t\t\t\t<p>01、USDT参与数量只支持10-2万数字币。</p>\n\t\t\t\t<p>02、TRX参与数量只支持100-10万数字币。</p>\n\t\t\t\t<p>03、低于最低金额时，不可参与抽奖且参与金额不进行退回。</p>\n\t\t\t\t<p>04、高于最高金额时，不可参与抽奖且扣除双倍手续费后退还剩余金额。</p>\n\t\t\t\t<p>05、仅支持整数币参与抽奖，小数部分将自动忽略。</p>\n\t\t\t</div>\n\t\t',
                    zList: [[{
                        id: 1,
                        gameid: 1,
                        transfer_amount: "4001",
                        bet: "转款个位数在0-4之间视为押小",
                        bet_en: "Your transferred amount is regarded as low/small be, between 0-4",
                        hash: "000*****a9ef1",
                        hash_num: "a9ef1",
                        hash_text: "区块哈希值最后一位数字1为“小”",
                        isreward: !0,
                        text: "4001*1.98=7921.98"
                    }, {
                        id: 2,
                        gameid: 1,
                        transfer_amount: "4001",
                        bet: "转款个位数在0-4之间视为押小",
                        bet_en: "Your transferred amount is regarded as low/small be, between 0-4",
                        hash: "000*****a9eda",
                        hash_num: "a9eda",
                        hash_text: "区块哈希值最后一位数字9为“大”",
                        isreward: !1,
                        text: "结果未中奖系统不返还数字币",
                        text_en: "The coins will not be returned"
                    }, {
                        id: 3,
                        gameid: 1,
                        transfer_amount: "4009",
                        bet: "转款个位数在5-9之间视为押大",
                        bet_en: "Your transferred amount is regarded as high bet, between 5-9",
                        hash: "000*****bc7ba",
                        hash_num: "bc7ba",
                        hash_text: "区块哈希值最后一位数字7为“大”",
                        isreward: !0,
                        text: "4009*1.98=7937.82"
                    }, {
                        id: 4,
                        gameid: 1,
                        transfer_amount: "4009",
                        bet: "转款个位数在5-9之间视为押大",
                        bet_en: "Your transferred amount is regarded as high bet, between 5-9",
                        hash: "000*****a2ead",
                        hash_num: "a2ead",
                        hash_text: "区块哈希值最后一位数字2为“小”",
                        isreward: !1,
                        text: "结果未中奖系统不返还数字币。",
                        text_en: "The coins will not be returned"
                    }], [{
                        id: 1,
                        gameid: 2,
                        transfer_amount: "5000",
                        bet: "转款个位数在0,2,4,6,8之中视为押双",
                        bet_en: "Your transfer amount is considered an even number of bets between 0,2,4,6,8",
                        hash: "000*****c5e4a",
                        hash_num: "c5e4a",
                        hash_text: "区块哈希值最后一位数字4为“双数”",
                        isreward: !0,
                        text: "5000*1.98=9900"
                    }, {
                        id: 2,
                        gameid: 2,
                        transfer_amount: "5000",
                        bet: "转款个位数在0,2,4,6,8之中视为押双",
                        bet_en: "Your transfer amount is considered an even number of bets between 0,2,4,6,8",
                        hash: "000*****c5e7a",
                        hash_num: "c5e7a",
                        hash_text: "区块哈希值最后一位数字7为“单数”",
                        isreward: !1,
                        text: "结果未中奖系统不返还数字币",
                        text_en: "The coins will not be returned"
                    }, {
                        id: 3,
                        gameid: 2,
                        transfer_amount: "5001",
                        bet: "转款个位数在1,3,5,7,9之中视为押单",
                        bet_en: "Your transfer amount is considered an odd number between 1,3,5,7,9",
                        hash: "000*****c5e7a",
                        hash_num: "c5e7a",
                        hash_text: "区块哈希值最后一位数字7为“单数”",
                        isreward: !0,
                        text: "5001*1.98=9901.98"
                    }, {
                        id: 4,
                        gameid: 2,
                        transfer_amount: "5001",
                        bet: "转款个位数在1,3,5,7,9之中视为押单",
                        bet_en: "Your transfer amount is considered an odd number between 1,3,5,7,9",
                        hash: "000*****c5e4a",
                        hash_num: "c5e4a",
                        hash_text: "区块哈希值最后一位数字4为“双数”",
                        isreward: !1,
                        text: "结果未中奖系统不返还数字币。",
                        text_en: "The coins will not be returned"
                    }], [{
                        id: 1,
                        gameid: 3,
                        transfer_amount: "1000",
                        hash: "000*****a9e3a",
                        hash_num: "3a",
                        hash_text: "区块哈希值最后两位3a为“数字+字母”",
                        hash_text_en: "Last character of the block hash value: 3a (number + letter)",
                        isreward: !0,
                        text: "1000*1.98=1980"
                    }, {
                        id: 2,
                        gameid: 3,
                        transfer_amount: "1000",
                        hash: "000*****a9ec4",
                        hash_num: "c4",
                        hash_text: "区块哈希值最后两位c4为“字母+数字”",
                        hash_text_en: "Last character of the block hash value: c4 (letter + number)",
                        isreward: !0,
                        text: "1000*1.98=1980"
                    }, {
                        id: 3,
                        gameid: 3,
                        transfer_amount: "1000",
                        hash: "000*****a9ead",
                        hash_num: "ad",
                        hash_text: "区块哈希值最后两位ad为“字母+字母”",
                        hash_text_en: "Last character of the block hash value: ad (letter + letter)",
                        isreward: !1,
                        text: "结果未中奖系统不返还数字币",
                        text_en: "The coins will not be returned"
                    }, {
                        id: 4,
                        gameid: 3,
                        transfer_amount: "1000",
                        hash: "000*****9ec71",
                        hash_num: "71",
                        hash_text: "区块哈希值最后两位71为“数字+数字”",
                        hash_text_en: "Last character of the block hash value: 71 (number + number)",
                        isreward: !1,
                        text: "结果未中奖系统不返还数字币",
                        text_en: "The coins will not be returned"
                    }], [(t = {
                        id: 1,
                        gameid: 4,
                        transfer_amount: "2000",
                        hash: "000*****7a954",
                        hash_num: "7a954",
                        hash_text: "庄家开奖号码：",
                        hash_text_en: "Dealer’s code ：",
                        hash_text2: "7a9",
                        hash_text3: "7+10+9=26 牛六",
                        hash_text3_en: "7+10+9=26 Bull 6",
                        hash_text4: "闲家开奖号码：",
                        hash_text4_en: "Player’s code：",
                        hash_text5: "954",
                        hash_text6: "9+5+4=18 牛八"
                    },
                    (0,
                    d.default)(t, "hash_text6", "9+5+4=18 Bull 8"),
                    (0,
                    d.default)(t, "isreward", !0),
                    (0,
                    d.default)(t, "text1", "结果闲家赢系统回款金额为："),
                    (0,
                    d.default)(t, "text1_en", "As a result, the player wins the system and the refund amount is:"),
                    (0,
                    d.default)(t, "text2", "2000+8×200-800×0.02=3616"),
                    t), (e = {
                        id: 2,
                        gameid: 4,
                        transfer_amount: "2000",
                        hash: "000*****2c9b1",
                        hash_num: "2c9b1",
                        hash_text: "庄家开奖号码：",
                        hash_text_en: "Dealer’s code ：",
                        hash_text2: "2c9",
                        hash_text3: "2+10+9=21 牛一",
                        hash_text3_en: "2+10+9=21 Bull 1",
                        hash_text4: "闲家开奖号码：",
                        hash_text4_en: "Player’s code：",
                        hash_text5: "9b1",
                        hash_text6: "9+10+1=20 牛牛"
                    },
                    (0,
                    d.default)(e, "hash_text6", "9+10+1=20 Bull Bull"),
                    (0,
                    d.default)(e, "isreward", !0),
                    (0,
                    d.default)(e, "text1", "结果闲家赢系统回款金额为："),
                    (0,
                    d.default)(e, "text1_en", "As a result, the player wins the system and the refund amount is:"),
                    (0,
                    d.default)(e, "text2", "2000+10×200-2000×0.02=3960"),
                    e), (n = {
                        id: 3,
                        gameid: 4,
                        transfer_amount: "2000",
                        hash: "000*****2ca11",
                        hash_num: "2ca11",
                        hash_text: "庄家开奖号码：",
                        hash_text_en: "Dealer’s code ：",
                        hash_text2: "2ca",
                        hash_text3: "2+10+10=22 牛二",
                        hash_text3_en: "2+10+10=22 Bull 2",
                        hash_text4: "闲家开奖号码：",
                        hash_text4_en: "Player’s code：",
                        hash_text5: "a11",
                        hash_text6: "10+1+1=12 牛二"
                    },
                    (0,
                    d.default)(n, "hash_text6", "10+1+1=12 Bull 2"),
                    (0,
                    d.default)(n, "isreward", !0),
                    (0,
                    d.default)(n, "text1", "结果庄家赢一倍系统回款金额为："),
                    (0,
                    d.default)(n, "text1_en", "As a result, the dealer won one, and the system rebate amount is："),
                    (0,
                    d.default)(n, "text2", "2000-2000/10=1800"),
                    n), (i = {
                        id: 4,
                        gameid: 4,
                        transfer_amount: "2000",
                        hash: "000*****b717d",
                        hash_num: "b717d",
                        hash_text: "庄家开奖号码：",
                        hash_text_en: "Dealer’s code ：",
                        hash_text2: "b71",
                        hash_text3: "10+7+1=18 牛八",
                        hash_text3_en: "10+7+1=18 Bull 8",
                        hash_text4: "闲家开奖号码：",
                        hash_text4_en: "Player’s code：",
                        hash_text5: "17d",
                        hash_text6: "1+7+10=18 牛八"
                    },
                    (0,
                    d.default)(i, "hash_text6", "1+7+10=18 Bull 8"),
                    (0,
                    d.default)(i, "isreward", !0),
                    (0,
                    d.default)(i, "text1", "结果同点系统回款金额为："),
                    (0,
                    d.default)(i, "text1_en", "The result is the same, the system repayment is:"),
                    (0,
                    d.default)(i, "text2", "2000-2000*0.001=1998"),
                    i)], [{
                        id: 1,
                        gameid: 5,
                        transfer_amount: "3001",
                        bet: "押庄",
                        bet_en: "bet banker",
                        hash: "000*****459s7",
                        hash_num: "459s7",
                        hash_text: "庄家开奖号码：",
                        hash_text_en: "Dealer’s code ：",
                        hash_text2: "45",
                        hash_text3: "4 + 5 = 9点",
                        hash_text3_en: "4 + 5 = 9 points",
                        hash_text4: "闲家开奖号码：",
                        hash_text4_en: "Player’s code：",
                        hash_text5: "s7",
                        hash_text6: "s + 7 = 7点",
                        hash_text6_en: "s + 7 = 7 points",
                        isreward: !0,
                        text1: "结果庄家赢系统回款金额为：",
                        text1_en: "As a result, the banker wins the system and the refund amount is:",
                        text2: "3001 + 1.98 =5941.98"
                    }, {
                        id: 2,
                        gameid: 5,
                        transfer_amount: "3002",
                        bet: "押闲",
                        bet_en: "bet idle",
                        hash: "000*****7a954",
                        hash_num: "7a954",
                        hash_text: "庄家开奖号码：",
                        hash_text_en: "Dealer’s code ：",
                        hash_text2: "7a",
                        hash_text3: "7 + 10 = 7点",
                        hash_text3_en: "7 + 10 = 7 points",
                        hash_text4: "闲家开奖号码：",
                        hash_text4_en: "Player’s code：",
                        hash_text5: "54",
                        hash_text6: "5 + 4 = 9点",
                        hash_text6_en: "s + 7 = 7 points",
                        isreward: !0,
                        text1: "结果闲家赢系统回款金额为：",
                        text1_en: "As a result, the player wins the system and the refund amount is:",
                        text2: "3002 + 1.98 =5943.96"
                    }, {
                        id: 3,
                        gameid: 5,
                        transfer_amount: "3003",
                        bet: "押庄",
                        bet_en: "bet banker",
                        hash: "000*****4a923",
                        hash_num: "4a925",
                        hash_text: "庄家开奖号码：",
                        hash_text_en: "Dealer’s code ：",
                        hash_text2: "4a",
                        hash_text3: "4 + 10 = 4点",
                        hash_text3_en: "4 + 10 = 4 points",
                        hash_text4: "闲家开奖号码：",
                        hash_text4_en: "Player’s code：",
                        hash_text5: "25",
                        hash_text6: "2 + 5= 7点",
                        hash_text6_en: "s + 7 = 7 points",
                        isreward: !1,
                        text1: "结果未中奖系统不返还数字币。",
                        text1_en: "The system will not return the digital currency if the result is not awarded"
                    }, {
                        id: 4,
                        gameid: 5,
                        transfer_amount: "3001、3002",
                        bet: "押庄或者押闲",
                        bet_en: "bet banker or bet idle",
                        hash: "000*****7a925",
                        hash_num: "7a925",
                        hash_text: "庄家开奖号码：",
                        hash_text_en: "Dealer’s code ：",
                        hash_text2: "7a",
                        hash_text3: "7 + 10 = 7点",
                        hash_text3_en: "7 + 10 = 7 points",
                        hash_text4: "闲家开奖号码：",
                        hash_text4_en: "Player’s code：",
                        hash_text5: "25",
                        hash_text6: "2 + 5= 7点",
                        hash_text6_en: "s + 7 = 7 points",
                        isreward: !0,
                        text1: "结果庄家和闲家同点出合 ：",
                        text1_en: "As a result, the banker and the player are at the same point ：",
                        text2: "3001-3001 x 0.001=2997.999"
                    }]],
                    zListItem: [],
                    cTabNum: 0,
                    cTabList: [{
                        id: 1,
                        title: "注册钱包"
                    }, {
                        id: 2,
                        title: "购买虚拟币"
                    }, {
                        id: 3,
                        title: "转账抽奖"
                    }, {
                        id: 4,
                        title: "中奖回款"
                    }],
                    dloadList: [{
                        id: 1,
                        name: "imToken",
                        link_name: "token.im",
                        link: "https://token.im/download",
                        link1: "http://z62.com/teach/imtoken-TRC中文教程.html"
                    }, {
                        id: 2,
                        name: "ownbit",
                        link_name: "ownbit.io",
                        link: "https://ownbit.io/en/download/",
                        link1: "http://z62.com/teach/Ownbit中文教程-TRC版.html"
                    }, {
                        id: 3,
                        name: "TRUST WALLET",
                        link_name: "trustwallet.com",
                        link: "https://trustwallet.com/zh_CN/",
                        link1: "https://z62.com/teach/Trust_Wallet中文教程-TRC版.html"
                    }, {
                        id: 4,
                        name: "tronLink",
                        link_name: "tronlink.org",
                        link: "https://www.tronlink.org/cn/",
                        link1: "http://z62.com/teach/Tronlink.html"
                    }, {
                        id: 5,
                        name: "比特派",
                        link_name: "bitpie",
                        link: "https://bitpie.com/",
                        link1: "http://z62.com/teach/bitpie比特派中文教程-TRC版.html"
                    }],
                    optNum: 0,
                    optList: [{
                        id: 1,
                        title: "公平透明"
                    }, {
                        id: 2,
                        title: "安全可靠"
                    }, {
                        id: 3,
                        title: "易中奖"
                    }, {
                        id: 4,
                        title: "专属客服"
                    }],
                    excType: 0,
                    from_num: "",
                    to_num: "",
                    exc_address: "",
                    qr_code: "../../static/img/home/qr_code.png",
                    game_qrcode: "",
                    rankTabNum: 0,
                    rankTypeNum: 0,
                    oRankList: [],
                    rankList: [],
                    logForm: {
                        username: "",
                        password: ""
                    },
                    regForm: {
                        username: "",
                        password: "",
                        comfirm_password: "",
                        address: "",
                        referee: "",
                        active_code: ""
                    },
                    icons: ["../../static/img/home/list.png", "../../static/img/home/list1.png"],
                    init_data: "",
                    isLogin: "",
                    paidInfo: {
                        address: ""
                    },
                    floor: [],
                    pid: "",
                    scrollTop: 0,
                    animation: null,
                    animationData: {},
                    animationData0: {},
                    animationData1: {},
                    animationData11: {},
                    animationData2: {},
                    aniData: [],
                    aniData1: [],
                    aniData2: [],
                    aniData3: [],
                    aniData4: [],
                    aniData5: [],
                    aniData6: [],
                    aniData7: [],
                    vertical: "bottom",
                    direction: "vertical",
                    content: [{
                        iconPath: "/static/img/home/whyTGIcon.png",
                        active: !1
                    }, {
                        iconPath: "/static/img/home/whyTGIcon.png",
                        active: !1
                    }],
                    kuanglist: [{
                        id: 1,
                        path: "../../static/img/home/kuang/coin_kuang_light001.png",
                        show: !1
                    }, {
                        id: 2,
                        path: "../../static/img/home/kuang/coin_kuang_light002.png",
                        show: !1
                    }, {
                        id: 3,
                        path: "../../static/img/home/kuang/coin_kuang_light003.png",
                        show: !1
                    }, {
                        id: 4,
                        path: "../../static/img/home/kuang/coin_kuang_light004.png",
                        show: !1
                    }, {
                        id: 5,
                        path: "../../static/img/home/kuang/coin_kuang_light005.png",
                        show: !1
                    }, {
                        id: 6,
                        path: "../../static/img/home/kuang/coin_kuang_light006.png",
                        show: !1
                    }, {
                        id: 7,
                        path: "../../static/img/home/kuang/coin_kuang_light007.png",
                        show: !1
                    }, {
                        id: 8,
                        path: "../../static/img/home/kuang/coin_kuang_light008.png",
                        show: !1
                    }, {
                        id: 9,
                        path: "../../static/img/home/kuang/coin_kuang_light009.png",
                        show: !1
                    }, {
                        id: 10,
                        path: "../../static/img/home/kuang/coin_kuang_light010.png",
                        show: !1
                    }, {
                        id: 11,
                        path: "../../static/img/home/kuang/coin_kuang_light011.png",
                        show: !1
                    }, {
                        id: 12,
                        path: "../../static/img/home/kuang/coin_kuang_light012.png",
                        show: !1
                    }],
                    gif: "",
                    imgs: ["coin_kuang_light001", "coin_kuang_light002", "coin_kuang_light003", "coin_kuang_light004", "coin_kuang_light005", "coin_kuang_light006", "coin_kuang_light007", "coin_kuang_light008", "coin_kuang_light009", "coin_kuang_light010", "coin_kuang_light011", "coin_kuang_light012"],
                    rankTime: null,
                    startCount: !1
                }
            },
            mounted: function() {
                this.size = this.imgs.length,
                this.gifi = 0;
                var t = this;
                this.tim = setInterval((function() {
                    t.chImg()
                }
                ), 100)
            },
            onPageScroll: function(t) {
                0 == this.start_top && (this.start_top = t.scrollTop,
                console.log("滾輪高度" + t.scrollTop))
            },
            computed: {
                nav_list: function() {
                    return [{
                        id: 1,
                        name: this.$t("tabs[0]")
                    }, {
                        id: 2,
                        name: this.$t("tabs[1]")
                    }, {
                        id: 3,
                        name: this.$t("tabs[2]")
                    }, {
                        id: 5,
                        name: this.$t("tabs[4]")
                    }]
                },
                troubleList: function() {
                    return [{
                        id: 1,
                        title: this.$t("trouble[0]"),
                        content: this.$t("trouble[1]"),
                        link: "https://baike.baidu.com/item/Hash/390310"
                    }, {
                        id: 2,
                        title: this.$t("trouble[2]"),
                        content: this.$t("trouble[3]"),
                        link: "https://baike.baidu.com/item/%E5%8C%BA%E5%9D%97%E9%93%BE/13465666"
                    }, {
                        id: 2,
                        title: this.$t("trouble[4]"),
                        content: this.$t("trouble[5]"),
                        link: "https://zhuanlan.zhihu.com/p/98203076"
                    }, {
                        id: 2,
                        title: this.$t("trouble[6]"),
                        content: this.$t("trouble[7]"),
                        link: "https://fisco-bcos-documentation.readthedocs.io/zh_CN/latest/docs/articles/1_conception/why_blockchain_slow.html"
                    }]
                },
                numArr: function() {
                    if (this.paidInfo.usdt) {
                        for (var t = String(this.paidInfo.usdt), e = [], n = 0; n < t.length; n++)
                            e.push(parseInt(t[n]));
                        return e
                    }
                },
                numArr2: function() {
                    if (this.paidInfo.trx_count) {
                        for (var t = String(this.paidInfo.trx_count), e = [], n = 0; n < t.length; n++)
                            e.push(parseInt(t[n]));
                        return e
                    }
                },
                numArr3: function() {
                    if (this.paidInfo.usdt2) {
                        for (var t = String(this.paidInfo.usdt2), e = [], n = 0; n < t.length; n++)
                            e.push(parseInt(t[n]));
                        return e
                    }
                },
                numArr4: function() {
                    if (this.paidInfo.trx_count2) {
                        for (var t = String(this.paidInfo.trx_count2), e = [], n = 0; n < t.length; n++)
                            e.push(parseInt(t[n]));
                        return e
                    }
                }
            },
            watch: {
                rankTypeNum: function(t) {
                    this.rankList = [],
                    this.getGameRank({
                        channel: this.rankTabNum ? "trx" : "usdt",
                        type: t
                    })
                }
            },
            onLoad: function() {
                var t = this;
                this.handleReg = (0,
                l.throttle)(this.handleReg, 3e3),
                this.handleLog = (0,
                l.throttle)(this.handleLog, 3e3);
                var e = this.$utils.getLocStg(this.$config.isLogin);
                this.isLogin = e,
                this.getInviteCode(),
                this.getGameList(),
                this.getCompensaWallet(),
                this.setcountup(),
                this.getInitData().then((function(e) {
                    var n = t.initData.system_notice_arr;
                    if (!n) return;
                    t.news_list = n.map((function(t) {
                        return {
                            text: t
                        }
                    }
                    )),
                    t.news_str = n.join(" "),
                    t.initData.p_exchange_address && (t.exc_address = t.initData.p_exchange_address)
                }
                )),
                this.$nextTick((function() {
                    t.init(),
                    t.setAniData()
                }
                )),
                this.handleScroll = (0,
                l.throttle)(this.handleScroll, 100),
                this.topFn = (0,
                l.throttle)((function(e) {
                    t.lock && (t.scrollTop = e - t.oHead.height),
                    setTimeout((function() {
                        t.lock = !1
                    }
                    ), 150)
                }
                ), 800)
            },
            onHide: function() {
                this.animation = null
            },
            onShow: function() {
                this.animation = this.createAnima()
            }
        },
        (0,
        d.default)(o, "onPageScroll", (function(t) {
            t.scrollTop
        }
        )),
        (0,
        d.default)(o, "methods", {
            change: function(t) {
                this.startCount = !0
            },
            setcountup: function() {
                setInterval((function() {
                    this.num = --this.num
                }
                ), 100)
            },
            chImg: function() {
                this.gifi >= this.size ? this.gifi = 0 : (this.gif = n("4fb2")("./".concat(this.imgs[this.gifi], ".png")),
                this.gifi++)
            },
            getindex: function(t) {
                this.kuanglist[t].show = !0
            },
            createAnima: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return uni.createAnimation((0,
                c.default)({
                    duration: 500,
                    delay: 200,
                    transformOrigin: "50% 50%",
                    timingFunction: "ease-in"
                }, t))
            },
            setAniData: function() {
                this.animation.translateX(0).step({
                    delay: 300,
                    timingFunction: "ease"
                }),
                this.$set(this.aniData, 0, this.animation.export()),
                this.animation.translateX(0).step({
                    delay: 500,
                    timingFunction: "ease-in"
                }),
                this.$set(this.aniData, 1, this.animation.export())
            },
            handleScroll: function(t) {
                var e = this
                  , n = t.target.scrollTop;
                if (this.topFn(n),
                n < 460) {
                    if (this.floor[0])
                        return;
                    this.floor[0] = !0,
                    this.setAniData()
                }
                if (n < 700) {
                    if (this.floor[1])
                        return;
                    this.floor[1] = !0,
                    this.animation.translateY(0).step(),
                    this.$set(this.aniData1, 0, this.animation.export()),
                    this.animation.translateX(0).step({
                        delay: 400
                    }),
                    this.$set(this.aniData1, 1, this.animation.export())
                }
                n >= 460 && n < 920 && (this.animation.translateY(0).step(),
                this.$set(this.aniData2, 0, this.animation.export()),
                this.animation.opacity(1).step({
                    delay: 500
                }),
                this.$set(this.aniData2, 1, this.animation.export())),
                n >= 920 && n < 1700 && (this.animation.translateY(0).step(),
                this.$set(this.aniData3, 0, this.animation.export()),
                this.animation.translateX(0).step({
                    delay: 400
                }),
                this.$set(this.aniData3, 1, this.animation.export()),
                this.animation.translateX(0).step({
                    delay: 600
                }),
                this.$set(this.aniData3, 2, this.animation.export())),
                n >= 1600 && n < 1860 && (this.animation.translateY(0).step(),
                this.$set(this.aniData4, 0, this.animation.export()),
                this.animation.translateX(0).step({
                    delay: 500
                }),
                this.$set(this.aniData4, 1, this.animation.export())),
                n >= 2e3 && n < 2700 && (this.animation.translateY(0).step(),
                this.$set(this.aniData5, 0, this.animation.export()),
                this.animation.translateY(0).step({
                    delay: 500
                }),
                this.$set(this.aniData5, 1, this.animation.export()),
                this.animation.translateX(0).step({
                    delay: 700
                }),
                this.$set(this.aniData5, 2, this.animation.export()),
                this.animation.translateX(0).step({
                    delay: 900
                }),
                this.$set(this.aniData5, 3, this.animation.export()),
                this.animation.translateX(0).step({
                    delay: 1100
                }),
                this.$set(this.aniData5, 4, this.animation.export())),
                n >= 2700 && n < 4e3 && (this.animation.translateY(0).step(),
                this.$set(this.aniData6, 0, this.animation.export()),
                this.animation.translateX(0).step({
                    delay: 500
                }),
                this.$set(this.aniData6, 1, this.animation.export()),
                this.animation.translateX(0).step({
                    delay: 700
                }),
                this.$set(this.aniData6, 2, this.animation.export()),
                this.animation.translateX(0).step({
                    delay: 900
                }),
                this.$set(this.aniData6, 3, this.animation.export())),
                n > 3400 && (this.animation.translateY(0).step(),
                this.$set(this.aniData7, 0, this.animation.export()),
                this.troubleList.forEach((function(t, n) {
                    e.animation.translateX(0).step({
                        delay: 300 + 100 * n,
                        timingFunction: "ease-out"
                    }),
                    e.$set(e.aniData7, n + 1, e.animation.export())
                }
                )))
            },
            handleNot: function() {
                this.$utils.msg(this.$t("msgs[5]"))
            },
            init: function() {
                var t = this;
                return (0,
                r.default)(regeneratorRuntime.mark((function e() {
                    var n, i, o, r;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                t.$utils.querySelector(t, ".head-bg");
                            case 2:
                                return n = e.sent,
                                i = (0,
                                s.default)(n, 1),
                                o = i[0],
                                e.next = 7,
                                t.$utils.querySelector(t, ".floor");
                            case 7:
                                r = e.sent,
                                t.oHead = o,
                                r.forEach((function(t) {
                                    t.top -= 60
                                }
                                )),
                                t.tops = [{
                                    top: 0
                                }].concat((0,
                                a.default)(r), [{
                                    top: 0
                                }]);
                            case 11:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))()
            },
            getCompensaWallet: function() {
                var t = this;
                (0,
                u.apiCompensaWallet)().then((function(e) {
                    1 == e.code && (t.paidInfo = e.data,
                    t.paidInfo.trx_count = Number(parseFloat(e.data.trx_count).toFixed(0)),
                    t.paidInfo.trx_count2 = Number(parseFloat(e.data.trx_count2).toFixed(0)),
                    t.paidInfo.usdt = Number(parseFloat(e.data.usdt).toFixed(0)),
                    t.paidInfo.usdt2 = Number(parseFloat(e.data.usdt2).toFixed(0)),
                    t.paidInfo.usdt && t.paidInfo.usdt2 && (t.startCount = !0))
                }
                ))
            },
            getInviteCode: function() {
                var t = this.$utils.GetQueryString("inviteCode") || "";
                t && (uni.setStorageSync(this.$config.inviteCode, t),
                this.regForm.referee = t,
                this.state = !0);
                var e = uni.getStorageSync(this.$config.inviteCode);
                e && (this.regForm.referee = e,
                this.state = !0)
            },
            getGameList: function() {
                var t = this;
                (0,
                u.apiGameIist)().then((function(e) {
                    if (1 == e.code) {
                        var n = ["../../static/img/home/bg03.png", "../../static/img/home/bg04.png", "../../static/img/home/bg.png", "../../static/img/home/bg01.png", "../../static/img/home/bg02.png"];
                        t.gList = e.data.map((function(t, e) {
                            return t.image = n[e % n.length],
                            t
                        }
                        ));
                        var i = e.data[0];
                        t.zjgz_html = i ? i.rule_content : "",
                        t.zjgz_html_en = i ? i.rule_content_en : "",
                        t.rules_code = i ? i.address : "",
                        t.setItem(0, 1)
                    }
                }
                ))
            },
            getGameRank: function(t) {
                var e = this;
                (0,
                u.apiGameRank)(t).then((function(n) {
                    1 === n.code && (e.oRankList = n.data,
                    e.setGameRank(t))
                }
                ))
            },
            setGameRank: function(t) {
                var e = t.type;
                if (!this.oRankList.length)
                    return this.$utils.msg(this.$t("msgs[0]"));
                var n = this.oRankList.splice(0, 10);
                this.rankList = [],
                n = n.map((function(t) {
                    if (t.address = t.address.replace(/(\w{3}).+(\w{3})/, "$1...$2"),
                    t.Ttxid = t.txid,
                    t.txid = t.txid.substr(0, 3) + "****" + t.txid.substr(t.txid.length - 3, t.txid.length),
                    0 == e || null == e) {
                        var n = t.date.length
                          , i = t.date.substring(n - 8, n);
                        t.date = i
                    }
                    return t
                }
                )),
                this.rankList = [].concat((0,
                a.default)(this.rankList), (0,
                a.default)(n))
            },
            handleReg: function() {
                var t = this
                  , e = this.regForm
                  , n = e.username
                  , i = e.password
                  , a = e.comfirm_password
                  , s = e.address;
                e.referee;
                return "" === n ? this.$utils.msg(this.$t("umsg[0]")) : "" === i ? this.$utils.msg(this.$t("umsg[1]")) : "" === a ? this.$utils.msg(this.$t("umsg[2]")) : i !== a ? this.$utils.msg(this.$t("umsg[3]")) : "" === s ? this.$utils.msg(this.$t("umsg[4]")) : void (0,
                u.apiRegister)(this.regForm).then((function(e) {
                    t.$utils.msg(e.msg),
                    1 === e.code && (setTimeout((function() {
                        return t.handleReset(t.regForm)
                    }
                    ), 500),
                    setTimeout((function() {
                        t.$refs.reg.close(),
                        setTimeout((function() {
                            return t.$refs.log.open()
                        }
                        ), 500)
                    }
                    ), 300))
                }
                ))
            },
            handleLog: function(t, e) {
                var n = this;
                e = e || this.logForm;
                var i = e
                  , a = i.username
                  , s = i.password;
                return "" === a ? this.$utils.msg(this.$t("umsg[0]")) : "" === s ? this.$utils.msg(this.$t("umsg[1]")) : void (0,
                u.apiLogin)(e).then((function(t) {
                    if (n.$utils.msg(t.msg),
                    1 === t.code) {
                        var e = n.$config
                          , i = e.token
                          , a = e.isLogin;
                        e.initDate;
                        n.$utils.setLocStg(a, !0),
                        n.$utils.setLocStg(i, t.data.token),
                        n.getUserInfo(),
                        n.getInitData(),
                        setTimeout((function() {
                            return n.$refs.log.close()
                        }
                        ), 300),
                        setTimeout((function() {
                            return n.handleReset(n.logForm)
                        }
                        ), 500)
                    }
                }
                ))
            },
            handleReset: function(t) {
                var e = this
                  , n = Object.keys(t);
                n.forEach((function(n) {
                    return e.$set(t, n, "")
                }
                ))
            },
            setLang: function(t) {
                t = "zh-cn" == t ? "en-us" : "zh-cn",
                this.setLanguage(t)
            },
            navChange: function(t) {
                var e = {
                    1: "floor1",
                    2: "floor2",
                    3: "floor3"
                };
                this.pid = e[t] || "banner",
                this.lock = !0
            },
            setItem: function(t, e) {
                if (1 == e) {
                    var n = this.gList[t];
                    this.gItem = n,
                    this.zjgz_html = n.rule_content || "",
                    this.zListItem = this.zList[t]
                } else if (2 == e)
                    this.zList.length
            },
            handleClick: function(t, e, n) {
                var i = t;
                this.setItem(i, e),
                this.rules_code = n
            },
            swiperChange: function(t, e) {
                var n = t.target.current;
                this.setItem(n, e)
            },
            excTabChange: function(t) {
                this.excType = t,
                this.from_num = "",
                this.to_num = "",
                this.handleCalc()
            },
            rankTabChange: function(t) {
                this.rankTabNum = t,
                this.getGameRank({
                    channel: t ? "trx" : "usdt",
                    type: this.rankTypeNum
                })
            },
            handleCalc: function() {
                var t = this;
                this.from_num ? uni.request({
                    url: "https://apiasia.tronscan.io:5566/api/token/price?token=usdt",
                    method: "GET",
                    data: {},
                    success: function(e) {
                        0 === t.excType ? t.to_num = (t.from_num * e.data.price_in_trx - 5).toFixed(6) : 1 === t.excType && (t.to_num = ((t.from_num - 5) / e.data.price_in_trx).toFixed(6))
                    }
                }) : this.to_num = ""
            },
            toLink: function(t) {
                window.open(t)
            },
            handleKefu: function(t) {
                if (!this.initData[t] && "custome_3" != t)
                    return this.$utils.msg("暂无客服信息");
                this.isKefu = !1,
                "custom_1" == t || "custome_2" == t ? window.open("https://t.me/" + this.initData[t]) : "custome_3" == t && window.open("https://chatlink-new.meiqia.cn/fe-widget-prod/standalone.html?eid=329221c9a462d9df924141746f49ad48&agentid=3b1403574f84b74afff56e40b4f25e78")
            }
        }),
        o);
        e.default = h
    },
    db90: function(t, e, n) {
        "use strict";
        function i(t) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t))
                return Array.from(t)
        }
        n("a4d3"),
        n("e01a"),
        n("d28b"),
        n("a630"),
        n("d3b7"),
        n("3ca3"),
        n("ddb0"),
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = i
    },
    dd2c: function(t, e, n) {
        t.exports = n.p + "static/img/coin_kuang_light008.ea940d40.png"
    },
    ddf2: function(t, e, n) {
        "use strict";
        var i;
        n.d(e, "b", (function() {
            return a
        }
        )),
        n.d(e, "c", (function() {
            return s
        }
        )),
        n.d(e, "a", (function() {
            return i
        }
        ));
        var a = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("v-uni-text", {
                staticClass: "uni-icons",
                class: ["uniui-" + t.type, t.customPrefix, t.customPrefix ? t.type : ""],
                style: {
                    color: t.color,
                    "font-size": t.iconSize
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t._onClick.apply(void 0, arguments)
                    }
                }
            })
        }
          , s = []
    },
    e2d9: function(t, e, n) {
        t.exports = n.p + "static/img/huobi.41244224.png"
    },
    e6d9: function(t, e, n) {
        t.exports = n.p + "static/img/coin_kuang_light004.bff11bec.png"
    },
    e769: function(t, e, n) {
        "use strict";
        var i = n("9866")
          , a = n.n(i);
        a.a
    },
    e839: function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAABeCAMAAADWpICxAAAAAXNSR0IArs4c6QAAASlQTFRFAAAAAACAJCRtJD5lIz5kIT1kIz5lIj5lJD9kJD5lIz5kIz9lIz9kIz5lJD9lIz9lJD9lJD9lIz5kIz5lJD5kGypDGypEHCpDHCpEHCpFHCpGHCtFHCtGHCtHHCxGHCxHHCxIHStGHSxHHSxIHS1HHS1IHS1JHS5KHS5LHS9LHS9MHi5KHi5MHi9LHi9MHjBNHjBOHjFPHzFPHzJQHzJRHzNSHzNTIDNSIDRUIDVUIDVWIDZXIDZYIDdXIDdYITZXITZYITdXITdZITdaIThZIThaIThbITlbIjhbIjlbIjlcIjldIjpcIjpdIjpeIjteIjtfIjtgIjxfIjxgIztfIztgIzxfIzxgIzxhIz1hIz1iIz5jIz5kIz9kIz9lJD5jJD5kJD9kJD9lsw2xPAAAABV0Uk5TAAIHVldck5WrrK3f4OHj5OT4+vr6VNmsFQAADHtJREFUaN7FWQt3HbURFoEALW3pS9K40DpNGlJc7Da2A7Q2+CZQh8QxuTexG9qibXb//4+o5j177dAcTk5RfHe10mgkzXwzmlFSLlhyhv6ouQJ90FfGCnZnrvd+ogVqpV58Fq3LOKYJLbloY5apcBTUklP/rMSD5gMcRU38xmdlChrK8yFjyEXXnXV1RZdi7UWJuDVrL49JtgnIyk74CbWxouZOB1lnDRxtTt2Lbl4KM8Ed4p6FNDGHLvFSbPHVR4ioWYQkORJtZmITfFgET1CUn1LgSNKmsu5TJt2RyK2EuUDZVusyUWZcFdQwAepHRV1RVVn2UbOApJhu+mDknnSjyraKgGVb3kVDK20sO6cMJahWVgqqFN0QqOgEyUQIHXCGLxdy0bU6kmQjQTq+TEcaCPZmYNDpbFWGx4SPGuBjtsPIwbWCmprJPFJlMgWbMLABMZyLtiREia2u2lieNcJK5uBBahREyJojAASnUAzNULPqtERAgVhDUgsT+WXmJ4xAkY/NEfd5bSWC/QB88yrZTEWWJ2rHydUmUPrmLnKuM/sEdxCOe1qXuw1aTViM1MDtUhVu4Eus1hKgk8XoXdPYAjPc++TsdWtYmoOSHYP5QJta+EAi94vuOgfP5cLjlQjY5rYQ5pD1ljli1X+wXLifPJDwLEkMrcoMICLIbk+uavXr9nL7BvXRIB9uzqJ9x0ZRA0t6ygiqZKZqENRtVoUgqP9WKcAcZerD8eDKCFNDg/ByF53QRwKrxjy+uls9WdVFCojCEaSgC77D/TCQ/4MSvCXkoA5ILG5Yc5CqMgjWm6NnDZsvfgCqcdQsB1sVTyX6VsGJE0zB4zNy9ZTI4Ug2Z56lSSIKnroWswU1GnCPSHwhyyrM72Il+QEmksoMMpelzV/dc4PjPLt5OKRiaAHMskaHz+MTsHiLaNOFXjlaMeTbXnP0ASGYUjGY750FEub1igdhyaEuRqdKheCTFaqsepGQy8Gk4C+HHXkB0DVWRTxNHuIfOV4ETGqRWbxtjJ5yjme6DXbR+16B11ow/JIzpWpAlRRVGiIGPIthlRCg5ahIPTwgeJtip66GuhESYjUK3RQPO9sqlBKNtgTUV5VNcZ+loUetwXBC9JRDvKcmjA0pzGAhH7eBHRbgEa/57EBWPTqOHt4csAqm6umpykmqKPZzWdIGkCQix6xgFhzL0R+3V2KwDBzxedoAZRaGUwyncU2IrNfThioU5bK0geOjHI+SkDbE0FKigpAFJZVuLjHf8ejJ0wZNHMRUPbkQrLrHl73AejhuaYN0JFXghbTBDiuIWQN565g2lKBo1lZIGyyrgxI3rbpLWRxfiCZmoZrZRzxEQgYDbgghTlNVsc8w4HugWCSMyiXGSJp4GKqDzTHYQcAPGtaCbyiKP9uKgi1pukmVJKRVD5w6zxUDyGVxMzy/IG3IL0wb2LKEUQpxbp4ZNhmdhvgaB77a9CJJ3CYHhqbB+YJtedpgIsglbLtGY7NAo4KlyzH24CgLQgwnwoKc9XDjeHAtbRAhVDYJWVVdSxv0xLeAf54uix5SOAskbxDPVWd3GTA7bdwXlJCUqH1ncrkhbQA/j2LaoGGUpQ2V++uaJ9dkfZYSSQwSlGLLgLV8KaQNfm/AR6o6MMjhNAvZhQOxWnI8j5VrvvTQXcc9aAbK/jgVD04t9bCUgDNNVhNdA8AsgArRepaLBZEiRNcM4QbHHDkihgNIcL+lrjGXWXZScvC/xdJg0AMBLqYNEi19Rwqe5vc+rMiQ2ZQ5S414VIrmCsNFSEgvooXl9fSiyuQx0pFT2i4Bc7gE8qzLj9wQavgcMfq2A3umBUoaxEFJZFNqmeeBweGr26+Cy3hHBQzw+TVNhhyv7EqUD4fO8+hJbxsqZiEQzlgJ0uaHRSnx1A9pA0CZhxbZbcaOWAacBCbqEuRGzY+avJY2ZM0vVDl1FjRUE8HlaYPM0mkSGVEIoWzJOdyZxugpiDXA2DXvcQAhslbzQtnyIc6Jc5pdm0anEFipg/OgLuA5HhhqA3VuKDU6A72XLHKe6yWM6a7KTUFwI/EyNBJHniFALXr7W2JkKYmyqitluz2ysCRrVhOAv6bEoudQ0GIJgUJ05+psQeFvWUYSV4hr9Bv1mDbYLQZ4ji7XflDmUZZeUUGACWioUSDckrETTRKjmxX62S4OrNqwcJjUmD/ZbVKGGIN6GHmJl+Trz2JexK48Idzdgc+kd5IGfJjhu+bZJZrdbce0wY/uojsXE5invCF6As3Iw72IJ2gWHYBfuvqllwZUptUYgfN5rlcxQUoMVaiSnjBn2cjsam7+3xHhQqJcuHRdP0RSuNfrExt8gfTXm6CYbwd35CGF8UvXkAqXmCVkD0v5EFFb6ncy0LcHEmUot3iiuwU5ihDD4vvBr9dBMyVjKE4TEw13U0DtvSnBy5QNf228BN2FzxcMSu+9t7HxHpbf9N+G/PpjQ+ob0sBEsWzYcyN8bMyaLxmy4fX0vpffvr9Wfh8/fvf+qyw0V7p+ffO6lRv027x+Dds2sWeTa1KuBdrNzT/g8wbTXVcyflxDVlz11s57M9LdSB94ufnBpeWmv2/eXCO7uU4hbyW0v0uZp1u3bv3p1qsuf3w5srSztbOzs72DZWtHyofctN1btj7iT2zZ7gQfCeG2DNrSv20dvL1lfLZjx9b2zrZTdW4fbqU/f7/yl+/8fMmSbveye3uX/m7j3y4+qdE76G9X+na167a2z4vy2dXPOcfQlPb39/q//T187ml1n9773ka/faGNtT0ZK4Oouu9lby/Q79kMMl+608snd2L5mBs+kfpa3ycXGj9+4cd3l4/vpE+t/PXT/3dJf/sBSzo4PFz03+HB4mBxtDhcLBZHveWwPw8W/fX54vCI6od3F4vP8KOTfP5ZJ+6EC3x16sVR77yL9aPDxd3eeIiEB/2N1c7+8/48PMApsBEJjo46Rbp3796X96RYhT68+e+954t7/FgjXB8bWHxh5BcLk6Xj+8f413/9Xy/8wob7of34/gMm44bjr7SCjwdIQB/3e8cDHnv8gMYd8/eDr47XCpKnk4e9nD56eEKVh4+w3j9O++O0P09PT04e9Vrv7v+Q6AQbTrADB55SX68T9cmjR9jXB5yePhQS5ow0nffDR6dS6aNO0tdaHj+WN1UfW8tj+vvaO0M9Nj6etUn98WWf1phWvZwvn66oPOvVs+XybPXs2fLJcrk87x+rs15dna2erJ48W65WveG89yzPsKt/9obl6unZ0/56QtXz8+X5qrd0Rsj3fLX8x6ozWJ4/eXLWp+p9nWuf72y5St9cVv75zaso/5NL+tcPWNK/v3f5zwvav33pUen582+p6Nvq/Htu7c+tif41a7EhzwMjedpDRs7bUhvGoZf+Gqc2TvgbpmnAX//o/0b8wm+rDWPrnQ1rk/T0hjZMI7dyM1PRgJGIGtO2cdRxaWCO2EMshWRAihHZDfzAAePEv6E1amw4bKTl8wiak9c3MRvZhyyLewdi0oencWhja20kMuRGi5kGXjRXR2TTWAi8L+LbVEC4kLFT9ZUjKYtC+TD5oLKkGWTvaSQWyE2Fgb/GIm6jjB6ZRx/ahtkKcOt9xk7XRlnTSFUW5siCm3QJJFeSGdKmyZU0yU6nkTbQZ6Jd0KSTCEP/JuocSbqNNd1wCGugTaLnSebl8aMLgpaZfjHoVkhiCBMBwSTbFBAQsER6RNqsgyp9xQQxASzPx2szLiR3Ud4w/jL9xAhbmxhDtJOu4TYIYBqRNME46UzA1Bg5MhEpm4SN6J9U4wyEKFuWzE/TjxvLkNoUz7gSEunI++zSbIL2gbWgW5ya4HnQ6UjH1GxiYVtS8yCpYe+P0lVaDAEMpTzaGJEsjmG2I4uEFzexFU9mEZNiiaYSPONkaEu8RJJnwM3VdOXnqhFGdONp3UyFTZN5xpEl3EblNImt4M5GrowsJSKSjSNjsRmmbu9eSekNXQ8rdVDzFpeB/EjoarimylGhy+sdibo1dm1i7zLT5Mh3g34j9fKWGLna6cAKG9jgDCcy9yjbbQoxQZwYySAuZmxinuMg5jcIMgWCw1s4d3rtTdZOUwsmIoZ4I9h2mcg62Ks11Sw7/En88SQIEeCM7HaI1aR+YlQ1vfla4vL6z8h+5LxgL6NudWriV9Vbj+PAhj4IslWoLch1VBBMDH5184zLNrz7erJy5erb7/zaAUUK5JOFIEi+ZyCw024Qw4yeSa3a/JgdHhPbx6BOC3FPLvBX77x99QpN+19EZnurMF0nkwAAAABJRU5ErkJggg=="
    },
    ea93: function(t, e, n) {
        "use strict";
        var i = n("f49f")
          , a = n.n(i);
        a.a
    },
    eb3d: function(t, e, n) {
        "use strict";
        var i = n("ebc1")
          , a = n.n(i);
        a.a
    },
    ebc1: function(t, e, n) {
        var i = n("0ec1");
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var a = n("4f06").default;
        a("02a5a48b", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    ecd4: function(t, e, n) {
        var i = n("24fb");
        e = i(!1),
        e.push([t.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-noticebar[data-v-04bdc44d]{display:flex;width:100%;box-sizing:border-box;flex-direction:row;align-items:center;padding:10px 12px;margin-bottom:10px}.uni-cursor-point[data-v-04bdc44d]{cursor:pointer}.uni-noticebar-close[data-v-04bdc44d]{margin-left:8px;margin-right:5px}.uni-noticebar-icon[data-v-04bdc44d]{margin-right:5px}.uni-noticebar__content-wrapper[data-v-04bdc44d]{flex:1;flex-direction:column;overflow:hidden}.uni-noticebar__content-wrapper--single[data-v-04bdc44d]{line-height:18px}.uni-noticebar__content-wrapper--single[data-v-04bdc44d],\r\n.uni-noticebar__content-wrapper--scrollable[data-v-04bdc44d]{flex-direction:row}.uni-noticebar__content-wrapper--scrollable[data-v-04bdc44d]{position:relative;height:18px}.uni-noticebar__content--scrollable[data-v-04bdc44d]{flex:1;display:block;overflow:hidden}.uni-noticebar__content--single[data-v-04bdc44d]{display:flex;flex:none;width:100%;justify-content:center}.uni-noticebar__content-text[data-v-04bdc44d]{font-size:14px;line-height:18px;word-break:break-all}.uni-noticebar__content-text--single[data-v-04bdc44d]{display:block;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.uni-noticebar__content-text--scrollable[data-v-04bdc44d]{position:absolute;display:block;height:18px;line-height:18px;white-space:nowrap;padding-left:100%;-webkit-animation:notice-data-v-04bdc44d 10s 0s linear infinite both;animation:notice-data-v-04bdc44d 10s 0s linear infinite both;-webkit-animation-play-state:paused;animation-play-state:paused}.uni-noticebar__more[data-v-04bdc44d]{display:inline-flex;flex-direction:row;flex-wrap:nowrap;align-items:center;padding-left:5px}.uni-noticebar__more-text[data-v-04bdc44d]{font-size:14px}@-webkit-keyframes notice-data-v-04bdc44d{100%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@keyframes notice-data-v-04bdc44d{100%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}', ""]),
        t.exports = e
    },
    edc7: function(t, e, n) {
        "use strict";
        var i = n("f60a")
          , a = n.n(i);
        a.a
    },
    f071: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("4fbf")
          , a = n("308b");
        for (var s in a)
            "default" !== s && function(t) {
                n.d(e, t, (function() {
                    return a[t]
                }
                ))
            }(s);
        n("e769");
        var o, r = n("f0c5"), c = Object(r["a"])(a["default"], i["b"], i["c"], !1, null, "7d074acd", null, !1, i["a"], o);
        e["default"] = c.exports
    },
    f2ed: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("0336")
          , a = n.n(i);
        for (var s in i)
            "default" !== s && function(t) {
                n.d(e, t, (function() {
                    return i[t]
                }
                ))
            }(s);
        e["default"] = a.a
    },
    f49f: function(t, e, n) {
        var i = n("b264");
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var a = n("4f06").default;
        a("6099a918", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    f60a: function(t, e, n) {
        var i = n("ecd4");
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
        var a = n("4f06").default;
        a("44cab8da", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    f73f: function(t, e, n) {
        t.exports = n.p + "static/img/bg5.adddb9cb.png"
    },
    f781: function(t, e, n) {
        "use strict";
        n.d(e, "b", (function() {
            return a
        }
        )),
        n.d(e, "c", (function() {
            return s
        }
        )),
        n.d(e, "a", (function() {
            return i
        }
        ));
        var i = {
            uniIcons: n("ffa8").default
        }
          , a = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return t.show ? n("v-uni-view", {
                staticClass: "uni-noticebar",
                style: {
                    backgroundColor: t.backgroundColor
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.onClick.apply(void 0, arguments)
                    }
                }
            }, [!0 === t.showIcon || "true" === t.showIcon ? n("uni-icons", {
                staticClass: "uni-noticebar-icon",
                attrs: {
                    type: "sound",
                    color: t.color,
                    size: "22"
                }
            }) : t._e(), n("v-uni-view", {
                ref: "textBox",
                staticClass: "uni-noticebar__content-wrapper",
                class: {
                    "uni-noticebar__content-wrapper--scrollable": t.scrollable,
                    "uni-noticebar__content-wrapper--single": !t.scrollable && (t.single || t.moreText)
                }
            }, [n("v-uni-view", {
                staticClass: "uni-noticebar__content",
                class: {
                    "uni-noticebar__content--scrollable": t.scrollable,
                    "uni-noticebar__content--single": !t.scrollable && (t.single || t.moreText)
                },
                attrs: {
                    id: t.elIdBox
                }
            }, [n("v-uni-text", {
                ref: "animationEle",
                staticClass: "uni-noticebar__content-text",
                class: {
                    "uni-noticebar__content-text--scrollable": t.scrollable,
                    "uni-noticebar__content-text--single": !t.scrollable && (t.single || t.showGetMore)
                },
                style: {
                    color: t.color,
                    width: t.wrapWidth + "px",
                    animationDuration: t.animationDuration,
                    "-webkit-animationDuration": t.animationDuration,
                    animationPlayState: t.webviewHide ? "paused" : t.animationPlayState,
                    "-webkit-animationPlayState": t.webviewHide ? "paused" : t.animationPlayState,
                    animationDelay: t.animationDelay,
                    "-webkit-animationDelay": t.animationDelay
                },
                attrs: {
                    id: t.elId
                }
            }, [t._v(t._s(t.text))])], 1)], 1), !0 === t.showGetMore || "true" === t.showGetMore ? n("v-uni-view", {
                staticClass: "uni-noticebar__more uni-cursor-point",
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.clickMore.apply(void 0, arguments)
                    }
                }
            }, [t.moreText.length > 0 ? n("v-uni-text", {
                staticClass: "uni-noticebar__more-text",
                style: {
                    color: t.moreColor
                }
            }, [t._v(t._s(t.moreText))]) : n("uni-icons", {
                attrs: {
                    type: "right",
                    color: t.moreColor,
                    size: "16"
                }
            })], 1) : t._e(), !0 !== t.showClose && "true" !== t.showClose || !1 !== t.showGetMore && "false" !== t.showGetMore ? t._e() : n("v-uni-view", {
                staticClass: "uni-noticebar-close uni-cursor-point"
            }, [n("uni-icons", {
                attrs: {
                    type: "closeempty",
                    color: t.color,
                    size: "16"
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.close.apply(void 0, arguments)
                    }
                }
            })], 1)], 1) : t._e()
        }
          , s = []
    },
    f88e: function(t, e, n) {
        t.exports = n.p + "static/img/rbg.068da9b8.png"
    },
    fd52: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = void 0;
        var i = {
            id: "2852637",
            name: "uniui图标库",
            font_family: "uniicons",
            css_prefix_text: "uniui-",
            description: "",
            glyphs: [{
                icon_id: "25027049",
                name: "yanse",
                font_class: "color",
                unicode: "e6cf",
                unicode_decimal: 59087
            }, {
                icon_id: "25027048",
                name: "wallet",
                font_class: "wallet",
                unicode: "e6b1",
                unicode_decimal: 59057
            }, {
                icon_id: "25015720",
                name: "settings-filled",
                font_class: "settings-filled",
                unicode: "e6ce",
                unicode_decimal: 59086
            }, {
                icon_id: "25015434",
                name: "shimingrenzheng-filled",
                font_class: "auth-filled",
                unicode: "e6cc",
                unicode_decimal: 59084
            }, {
                icon_id: "24934246",
                name: "shop-filled",
                font_class: "shop-filled",
                unicode: "e6cd",
                unicode_decimal: 59085
            }, {
                icon_id: "24934159",
                name: "staff-filled-01",
                font_class: "staff-filled",
                unicode: "e6cb",
                unicode_decimal: 59083
            }, {
                icon_id: "24932461",
                name: "VIP-filled",
                font_class: "vip-filled",
                unicode: "e6c6",
                unicode_decimal: 59078
            }, {
                icon_id: "24932462",
                name: "plus_circle_fill",
                font_class: "plus-filled",
                unicode: "e6c7",
                unicode_decimal: 59079
            }, {
                icon_id: "24932463",
                name: "folder_add-filled",
                font_class: "folder-add-filled",
                unicode: "e6c8",
                unicode_decimal: 59080
            }, {
                icon_id: "24932464",
                name: "yanse-filled",
                font_class: "color-filled",
                unicode: "e6c9",
                unicode_decimal: 59081
            }, {
                icon_id: "24932465",
                name: "tune-filled",
                font_class: "tune-filled",
                unicode: "e6ca",
                unicode_decimal: 59082
            }, {
                icon_id: "24932455",
                name: "a-rilidaka-filled",
                font_class: "calendar-filled",
                unicode: "e6c0",
                unicode_decimal: 59072
            }, {
                icon_id: "24932456",
                name: "notification-filled",
                font_class: "notification-filled",
                unicode: "e6c1",
                unicode_decimal: 59073
            }, {
                icon_id: "24932457",
                name: "wallet-filled",
                font_class: "wallet-filled",
                unicode: "e6c2",
                unicode_decimal: 59074
            }, {
                icon_id: "24932458",
                name: "paihangbang-filled",
                font_class: "medal-filled",
                unicode: "e6c3",
                unicode_decimal: 59075
            }, {
                icon_id: "24932459",
                name: "gift-filled",
                font_class: "gift-filled",
                unicode: "e6c4",
                unicode_decimal: 59076
            }, {
                icon_id: "24932460",
                name: "fire-filled",
                font_class: "fire-filled",
                unicode: "e6c5",
                unicode_decimal: 59077
            }, {
                icon_id: "24928001",
                name: "refreshempty",
                font_class: "refreshempty",
                unicode: "e6bf",
                unicode_decimal: 59071
            }, {
                icon_id: "24926853",
                name: "location-ellipse",
                font_class: "location-filled",
                unicode: "e6af",
                unicode_decimal: 59055
            }, {
                icon_id: "24926735",
                name: "person-filled",
                font_class: "person-filled",
                unicode: "e69d",
                unicode_decimal: 59037
            }, {
                icon_id: "24926703",
                name: "personadd-filled",
                font_class: "personadd-filled",
                unicode: "e698",
                unicode_decimal: 59032
            }, {
                icon_id: "24923351",
                name: "back",
                font_class: "back",
                unicode: "e6b9",
                unicode_decimal: 59065
            }, {
                icon_id: "24923352",
                name: "forward",
                font_class: "forward",
                unicode: "e6ba",
                unicode_decimal: 59066
            }, {
                icon_id: "24923353",
                name: "arrowthinright",
                font_class: "arrow-right",
                unicode: "e6bb",
                unicode_decimal: 59067
            }, {
                icon_id: "24923353",
                name: "arrowthinright",
                font_class: "arrowthinright",
                unicode: "e6bb",
                unicode_decimal: 59067
            }, {
                icon_id: "24923354",
                name: "arrowthinleft",
                font_class: "arrow-left",
                unicode: "e6bc",
                unicode_decimal: 59068
            }, {
                icon_id: "24923354",
                name: "arrowthinleft",
                font_class: "arrowthinleft",
                unicode: "e6bc",
                unicode_decimal: 59068
            }, {
                icon_id: "24923355",
                name: "arrowthinup",
                font_class: "arrow-up",
                unicode: "e6bd",
                unicode_decimal: 59069
            }, {
                icon_id: "24923355",
                name: "arrowthinup",
                font_class: "arrowthinup",
                unicode: "e6bd",
                unicode_decimal: 59069
            }, {
                icon_id: "24923356",
                name: "arrowthindown",
                font_class: "arrow-down",
                unicode: "e6be",
                unicode_decimal: 59070
            }, {
                icon_id: "24923356",
                name: "arrowthindown",
                font_class: "arrowthindown",
                unicode: "e6be",
                unicode_decimal: 59070
            }, {
                icon_id: "24923349",
                name: "arrowdown",
                font_class: "bottom",
                unicode: "e6b8",
                unicode_decimal: 59064
            }, {
                icon_id: "24923349",
                name: "arrowdown",
                font_class: "arrowdown",
                unicode: "e6b8",
                unicode_decimal: 59064
            }, {
                icon_id: "24923346",
                name: "arrowright",
                font_class: "right",
                unicode: "e6b5",
                unicode_decimal: 59061
            }, {
                icon_id: "24923346",
                name: "arrowright",
                font_class: "arrowright",
                unicode: "e6b5",
                unicode_decimal: 59061
            }, {
                icon_id: "24923347",
                name: "arrowup",
                font_class: "top",
                unicode: "e6b6",
                unicode_decimal: 59062
            }, {
                icon_id: "24923347",
                name: "arrowup",
                font_class: "arrowup",
                unicode: "e6b6",
                unicode_decimal: 59062
            }, {
                icon_id: "24923348",
                name: "arrowleft",
                font_class: "left",
                unicode: "e6b7",
                unicode_decimal: 59063
            }, {
                icon_id: "24923348",
                name: "arrowleft",
                font_class: "arrowleft",
                unicode: "e6b7",
                unicode_decimal: 59063
            }, {
                icon_id: "24923334",
                name: "eye",
                font_class: "eye",
                unicode: "e651",
                unicode_decimal: 58961
            }, {
                icon_id: "24923335",
                name: "eye-filled",
                font_class: "eye-filled",
                unicode: "e66a",
                unicode_decimal: 58986
            }, {
                icon_id: "24923336",
                name: "eye-slash",
                font_class: "eye-slash",
                unicode: "e6b3",
                unicode_decimal: 59059
            }, {
                icon_id: "24923337",
                name: "eye-slash-filled",
                font_class: "eye-slash-filled",
                unicode: "e6b4",
                unicode_decimal: 59060
            }, {
                icon_id: "24923305",
                name: "info-filled",
                font_class: "info-filled",
                unicode: "e649",
                unicode_decimal: 58953
            }, {
                icon_id: "24923299",
                name: "reload-01",
                font_class: "reload",
                unicode: "e6b2",
                unicode_decimal: 59058
            }, {
                icon_id: "24923195",
                name: "mic_slash_fill",
                font_class: "micoff-filled",
                unicode: "e6b0",
                unicode_decimal: 59056
            }, {
                icon_id: "24923165",
                name: "map-pin-ellipse",
                font_class: "map-pin-ellipse",
                unicode: "e6ac",
                unicode_decimal: 59052
            }, {
                icon_id: "24923166",
                name: "map-pin",
                font_class: "map-pin",
                unicode: "e6ad",
                unicode_decimal: 59053
            }, {
                icon_id: "24923167",
                name: "location",
                font_class: "location",
                unicode: "e6ae",
                unicode_decimal: 59054
            }, {
                icon_id: "24923064",
                name: "starhalf",
                font_class: "starhalf",
                unicode: "e683",
                unicode_decimal: 59011
            }, {
                icon_id: "24923065",
                name: "star",
                font_class: "star",
                unicode: "e688",
                unicode_decimal: 59016
            }, {
                icon_id: "24923066",
                name: "star-filled",
                font_class: "star-filled",
                unicode: "e68f",
                unicode_decimal: 59023
            }, {
                icon_id: "24899646",
                name: "a-rilidaka",
                font_class: "calendar",
                unicode: "e6a0",
                unicode_decimal: 59040
            }, {
                icon_id: "24899647",
                name: "fire",
                font_class: "fire",
                unicode: "e6a1",
                unicode_decimal: 59041
            }, {
                icon_id: "24899648",
                name: "paihangbang",
                font_class: "medal",
                unicode: "e6a2",
                unicode_decimal: 59042
            }, {
                icon_id: "24899649",
                name: "font",
                font_class: "font",
                unicode: "e6a3",
                unicode_decimal: 59043
            }, {
                icon_id: "24899650",
                name: "gift",
                font_class: "gift",
                unicode: "e6a4",
                unicode_decimal: 59044
            }, {
                icon_id: "24899651",
                name: "link",
                font_class: "link",
                unicode: "e6a5",
                unicode_decimal: 59045
            }, {
                icon_id: "24899652",
                name: "notification",
                font_class: "notification",
                unicode: "e6a6",
                unicode_decimal: 59046
            }, {
                icon_id: "24899653",
                name: "staff",
                font_class: "staff",
                unicode: "e6a7",
                unicode_decimal: 59047
            }, {
                icon_id: "24899654",
                name: "VIP",
                font_class: "vip",
                unicode: "e6a8",
                unicode_decimal: 59048
            }, {
                icon_id: "24899655",
                name: "folder_add",
                font_class: "folder-add",
                unicode: "e6a9",
                unicode_decimal: 59049
            }, {
                icon_id: "24899656",
                name: "tune",
                font_class: "tune",
                unicode: "e6aa",
                unicode_decimal: 59050
            }, {
                icon_id: "24899657",
                name: "shimingrenzheng",
                font_class: "auth",
                unicode: "e6ab",
                unicode_decimal: 59051
            }, {
                icon_id: "24899565",
                name: "person",
                font_class: "person",
                unicode: "e699",
                unicode_decimal: 59033
            }, {
                icon_id: "24899566",
                name: "email-filled",
                font_class: "email-filled",
                unicode: "e69a",
                unicode_decimal: 59034
            }, {
                icon_id: "24899567",
                name: "phone-filled",
                font_class: "phone-filled",
                unicode: "e69b",
                unicode_decimal: 59035
            }, {
                icon_id: "24899568",
                name: "phone",
                font_class: "phone",
                unicode: "e69c",
                unicode_decimal: 59036
            }, {
                icon_id: "24899570",
                name: "email",
                font_class: "email",
                unicode: "e69e",
                unicode_decimal: 59038
            }, {
                icon_id: "24899571",
                name: "personadd",
                font_class: "personadd",
                unicode: "e69f",
                unicode_decimal: 59039
            }, {
                icon_id: "24899558",
                name: "chatboxes-filled",
                font_class: "chatboxes-filled",
                unicode: "e692",
                unicode_decimal: 59026
            }, {
                icon_id: "24899559",
                name: "contact",
                font_class: "contact",
                unicode: "e693",
                unicode_decimal: 59027
            }, {
                icon_id: "24899560",
                name: "chatbubble-filled",
                font_class: "chatbubble-filled",
                unicode: "e694",
                unicode_decimal: 59028
            }, {
                icon_id: "24899561",
                name: "contact-filled",
                font_class: "contact-filled",
                unicode: "e695",
                unicode_decimal: 59029
            }, {
                icon_id: "24899562",
                name: "chatboxes",
                font_class: "chatboxes",
                unicode: "e696",
                unicode_decimal: 59030
            }, {
                icon_id: "24899563",
                name: "chatbubble",
                font_class: "chatbubble",
                unicode: "e697",
                unicode_decimal: 59031
            }, {
                icon_id: "24881290",
                name: "upload-filled",
                font_class: "upload-filled",
                unicode: "e68e",
                unicode_decimal: 59022
            }, {
                icon_id: "24881292",
                name: "upload",
                font_class: "upload",
                unicode: "e690",
                unicode_decimal: 59024
            }, {
                icon_id: "24881293",
                name: "weixin",
                font_class: "weixin",
                unicode: "e691",
                unicode_decimal: 59025
            }, {
                icon_id: "24881274",
                name: "compose",
                font_class: "compose",
                unicode: "e67f",
                unicode_decimal: 59007
            }, {
                icon_id: "24881275",
                name: "qq",
                font_class: "qq",
                unicode: "e680",
                unicode_decimal: 59008
            }, {
                icon_id: "24881276",
                name: "download-filled",
                font_class: "download-filled",
                unicode: "e681",
                unicode_decimal: 59009
            }, {
                icon_id: "24881277",
                name: "pengyouquan",
                font_class: "pyq",
                unicode: "e682",
                unicode_decimal: 59010
            }, {
                icon_id: "24881279",
                name: "sound",
                font_class: "sound",
                unicode: "e684",
                unicode_decimal: 59012
            }, {
                icon_id: "24881280",
                name: "trash-filled",
                font_class: "trash-filled",
                unicode: "e685",
                unicode_decimal: 59013
            }, {
                icon_id: "24881281",
                name: "sound-filled",
                font_class: "sound-filled",
                unicode: "e686",
                unicode_decimal: 59014
            }, {
                icon_id: "24881282",
                name: "trash",
                font_class: "trash",
                unicode: "e687",
                unicode_decimal: 59015
            }, {
                icon_id: "24881284",
                name: "videocam-filled",
                font_class: "videocam-filled",
                unicode: "e689",
                unicode_decimal: 59017
            }, {
                icon_id: "24881285",
                name: "spinner-cycle",
                font_class: "spinner-cycle",
                unicode: "e68a",
                unicode_decimal: 59018
            }, {
                icon_id: "24881286",
                name: "weibo",
                font_class: "weibo",
                unicode: "e68b",
                unicode_decimal: 59019
            }, {
                icon_id: "24881288",
                name: "videocam",
                font_class: "videocam",
                unicode: "e68c",
                unicode_decimal: 59020
            }, {
                icon_id: "24881289",
                name: "download",
                font_class: "download",
                unicode: "e68d",
                unicode_decimal: 59021
            }, {
                icon_id: "24879601",
                name: "help",
                font_class: "help",
                unicode: "e679",
                unicode_decimal: 59001
            }, {
                icon_id: "24879602",
                name: "navigate-filled",
                font_class: "navigate-filled",
                unicode: "e67a",
                unicode_decimal: 59002
            }, {
                icon_id: "24879603",
                name: "plusempty",
                font_class: "plusempty",
                unicode: "e67b",
                unicode_decimal: 59003
            }, {
                icon_id: "24879604",
                name: "smallcircle",
                font_class: "smallcircle",
                unicode: "e67c",
                unicode_decimal: 59004
            }, {
                icon_id: "24879605",
                name: "minus-filled",
                font_class: "minus-filled",
                unicode: "e67d",
                unicode_decimal: 59005
            }, {
                icon_id: "24879606",
                name: "micoff",
                font_class: "micoff",
                unicode: "e67e",
                unicode_decimal: 59006
            }, {
                icon_id: "24879588",
                name: "closeempty",
                font_class: "closeempty",
                unicode: "e66c",
                unicode_decimal: 58988
            }, {
                icon_id: "24879589",
                name: "clear",
                font_class: "clear",
                unicode: "e66d",
                unicode_decimal: 58989
            }, {
                icon_id: "24879590",
                name: "navigate",
                font_class: "navigate",
                unicode: "e66e",
                unicode_decimal: 58990
            }, {
                icon_id: "24879591",
                name: "minus",
                font_class: "minus",
                unicode: "e66f",
                unicode_decimal: 58991
            }, {
                icon_id: "24879592",
                name: "image",
                font_class: "image",
                unicode: "e670",
                unicode_decimal: 58992
            }, {
                icon_id: "24879593",
                name: "mic",
                font_class: "mic",
                unicode: "e671",
                unicode_decimal: 58993
            }, {
                icon_id: "24879594",
                name: "paperplane",
                font_class: "paperplane",
                unicode: "e672",
                unicode_decimal: 58994
            }, {
                icon_id: "24879595",
                name: "close",
                font_class: "close",
                unicode: "e673",
                unicode_decimal: 58995
            }, {
                icon_id: "24879596",
                name: "help-filled",
                font_class: "help-filled",
                unicode: "e674",
                unicode_decimal: 58996
            }, {
                icon_id: "24879597",
                name: "plus-filled",
                font_class: "paperplane-filled",
                unicode: "e675",
                unicode_decimal: 58997
            }, {
                icon_id: "24879598",
                name: "plus",
                font_class: "plus",
                unicode: "e676",
                unicode_decimal: 58998
            }, {
                icon_id: "24879599",
                name: "mic-filled",
                font_class: "mic-filled",
                unicode: "e677",
                unicode_decimal: 58999
            }, {
                icon_id: "24879600",
                name: "image-filled",
                font_class: "image-filled",
                unicode: "e678",
                unicode_decimal: 59e3
            }, {
                icon_id: "24855900",
                name: "locked-filled",
                font_class: "locked-filled",
                unicode: "e668",
                unicode_decimal: 58984
            }, {
                icon_id: "24855901",
                name: "info",
                font_class: "info",
                unicode: "e669",
                unicode_decimal: 58985
            }, {
                icon_id: "24855903",
                name: "locked",
                font_class: "locked",
                unicode: "e66b",
                unicode_decimal: 58987
            }, {
                icon_id: "24855884",
                name: "camera-filled",
                font_class: "camera-filled",
                unicode: "e658",
                unicode_decimal: 58968
            }, {
                icon_id: "24855885",
                name: "chat-filled",
                font_class: "chat-filled",
                unicode: "e659",
                unicode_decimal: 58969
            }, {
                icon_id: "24855886",
                name: "camera",
                font_class: "camera",
                unicode: "e65a",
                unicode_decimal: 58970
            }, {
                icon_id: "24855887",
                name: "circle",
                font_class: "circle",
                unicode: "e65b",
                unicode_decimal: 58971
            }, {
                icon_id: "24855888",
                name: "checkmarkempty",
                font_class: "checkmarkempty",
                unicode: "e65c",
                unicode_decimal: 58972
            }, {
                icon_id: "24855889",
                name: "chat",
                font_class: "chat",
                unicode: "e65d",
                unicode_decimal: 58973
            }, {
                icon_id: "24855890",
                name: "circle-filled",
                font_class: "circle-filled",
                unicode: "e65e",
                unicode_decimal: 58974
            }, {
                icon_id: "24855891",
                name: "flag",
                font_class: "flag",
                unicode: "e65f",
                unicode_decimal: 58975
            }, {
                icon_id: "24855892",
                name: "flag-filled",
                font_class: "flag-filled",
                unicode: "e660",
                unicode_decimal: 58976
            }, {
                icon_id: "24855893",
                name: "gear-filled",
                font_class: "gear-filled",
                unicode: "e661",
                unicode_decimal: 58977
            }, {
                icon_id: "24855894",
                name: "home",
                font_class: "home",
                unicode: "e662",
                unicode_decimal: 58978
            }, {
                icon_id: "24855895",
                name: "home-filled",
                font_class: "home-filled",
                unicode: "e663",
                unicode_decimal: 58979
            }, {
                icon_id: "24855896",
                name: "gear",
                font_class: "gear",
                unicode: "e664",
                unicode_decimal: 58980
            }, {
                icon_id: "24855897",
                name: "smallcircle-filled",
                font_class: "smallcircle-filled",
                unicode: "e665",
                unicode_decimal: 58981
            }, {
                icon_id: "24855898",
                name: "map-filled",
                font_class: "map-filled",
                unicode: "e666",
                unicode_decimal: 58982
            }, {
                icon_id: "24855899",
                name: "map",
                font_class: "map",
                unicode: "e667",
                unicode_decimal: 58983
            }, {
                icon_id: "24855825",
                name: "refresh-filled",
                font_class: "refresh-filled",
                unicode: "e656",
                unicode_decimal: 58966
            }, {
                icon_id: "24855826",
                name: "refresh",
                font_class: "refresh",
                unicode: "e657",
                unicode_decimal: 58967
            }, {
                icon_id: "24855808",
                name: "cloud-upload",
                font_class: "cloud-upload",
                unicode: "e645",
                unicode_decimal: 58949
            }, {
                icon_id: "24855809",
                name: "cloud-download-filled",
                font_class: "cloud-download-filled",
                unicode: "e646",
                unicode_decimal: 58950
            }, {
                icon_id: "24855810",
                name: "cloud-download",
                font_class: "cloud-download",
                unicode: "e647",
                unicode_decimal: 58951
            }, {
                icon_id: "24855811",
                name: "cloud-upload-filled",
                font_class: "cloud-upload-filled",
                unicode: "e648",
                unicode_decimal: 58952
            }, {
                icon_id: "24855813",
                name: "redo",
                font_class: "redo",
                unicode: "e64a",
                unicode_decimal: 58954
            }, {
                icon_id: "24855814",
                name: "images-filled",
                font_class: "images-filled",
                unicode: "e64b",
                unicode_decimal: 58955
            }, {
                icon_id: "24855815",
                name: "undo-filled",
                font_class: "undo-filled",
                unicode: "e64c",
                unicode_decimal: 58956
            }, {
                icon_id: "24855816",
                name: "more",
                font_class: "more",
                unicode: "e64d",
                unicode_decimal: 58957
            }, {
                icon_id: "24855817",
                name: "more-filled",
                font_class: "more-filled",
                unicode: "e64e",
                unicode_decimal: 58958
            }, {
                icon_id: "24855818",
                name: "undo",
                font_class: "undo",
                unicode: "e64f",
                unicode_decimal: 58959
            }, {
                icon_id: "24855819",
                name: "images",
                font_class: "images",
                unicode: "e650",
                unicode_decimal: 58960
            }, {
                icon_id: "24855821",
                name: "paperclip",
                font_class: "paperclip",
                unicode: "e652",
                unicode_decimal: 58962
            }, {
                icon_id: "24855822",
                name: "settings",
                font_class: "settings",
                unicode: "e653",
                unicode_decimal: 58963
            }, {
                icon_id: "24855823",
                name: "search",
                font_class: "search",
                unicode: "e654",
                unicode_decimal: 58964
            }, {
                icon_id: "24855824",
                name: "redo-filled",
                font_class: "redo-filled",
                unicode: "e655",
                unicode_decimal: 58965
            }, {
                icon_id: "24841702",
                name: "list",
                font_class: "list",
                unicode: "e644",
                unicode_decimal: 58948
            }, {
                icon_id: "24841489",
                name: "mail-open-filled",
                font_class: "mail-open-filled",
                unicode: "e63a",
                unicode_decimal: 58938
            }, {
                icon_id: "24841491",
                name: "hand-thumbsdown-filled",
                font_class: "hand-down-filled",
                unicode: "e63c",
                unicode_decimal: 58940
            }, {
                icon_id: "24841492",
                name: "hand-thumbsdown",
                font_class: "hand-down",
                unicode: "e63d",
                unicode_decimal: 58941
            }, {
                icon_id: "24841493",
                name: "hand-thumbsup-filled",
                font_class: "hand-up-filled",
                unicode: "e63e",
                unicode_decimal: 58942
            }, {
                icon_id: "24841494",
                name: "hand-thumbsup",
                font_class: "hand-up",
                unicode: "e63f",
                unicode_decimal: 58943
            }, {
                icon_id: "24841496",
                name: "heart-filled",
                font_class: "heart-filled",
                unicode: "e641",
                unicode_decimal: 58945
            }, {
                icon_id: "24841498",
                name: "mail-open",
                font_class: "mail-open",
                unicode: "e643",
                unicode_decimal: 58947
            }, {
                icon_id: "24841488",
                name: "heart",
                font_class: "heart",
                unicode: "e639",
                unicode_decimal: 58937
            }, {
                icon_id: "24839963",
                name: "loop",
                font_class: "loop",
                unicode: "e633",
                unicode_decimal: 58931
            }, {
                icon_id: "24839866",
                name: "pulldown",
                font_class: "pulldown",
                unicode: "e632",
                unicode_decimal: 58930
            }, {
                icon_id: "24813798",
                name: "scan",
                font_class: "scan",
                unicode: "e62a",
                unicode_decimal: 58922
            }, {
                icon_id: "24813786",
                name: "bars",
                font_class: "bars",
                unicode: "e627",
                unicode_decimal: 58919
            }, {
                icon_id: "24813788",
                name: "cart-filled",
                font_class: "cart-filled",
                unicode: "e629",
                unicode_decimal: 58921
            }, {
                icon_id: "24813790",
                name: "checkbox",
                font_class: "checkbox",
                unicode: "e62b",
                unicode_decimal: 58923
            }, {
                icon_id: "24813791",
                name: "checkbox-filled",
                font_class: "checkbox-filled",
                unicode: "e62c",
                unicode_decimal: 58924
            }, {
                icon_id: "24813794",
                name: "shop",
                font_class: "shop",
                unicode: "e62f",
                unicode_decimal: 58927
            }, {
                icon_id: "24813795",
                name: "headphones",
                font_class: "headphones",
                unicode: "e630",
                unicode_decimal: 58928
            }, {
                icon_id: "24813796",
                name: "cart",
                font_class: "cart",
                unicode: "e631",
                unicode_decimal: 58929
            }]
        };
        e.default = i
    },
    ff6b: function(t, e, n) {
        "use strict";
        var i;
        n.d(e, "b", (function() {
            return a
        }
        )),
        n.d(e, "c", (function() {
            return s
        }
        )),
        n.d(e, "a", (function() {
            return i
        }
        ));
        var a = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("li", {
                staticClass: "scroll-num",
                class: {
                    "border-animate": t.showAnimate
                },
                style: {
                    "--i": t.i,
                    "--delay": t.delay
                },
                on: {
                    animationend: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.showAnimate = !1
                    }
                }
            }, [n("ul", {
                ref: "ul",
                class: {
                    animate: t.showAnimate
                }
            }, [n("li", [t._v("0")]), n("li", [t._v("1")]), n("li", [t._v("2")]), n("li", [t._v("3")]), n("li", [t._v("4")]), n("li", [t._v("5")]), n("li", [t._v("6")]), n("li", [t._v("7")]), n("li", [t._v("8")]), n("li", [t._v("9")]), n("li", [t._v("0")])]), n("svg", {
                attrs: {
                    width: "0",
                    height: "0"
                }
            }, [n("filter", {
                attrs: {
                    id: "blur"
                }
            }, [n("feGaussianBlur", {
                attrs: {
                    in: "SourceGraphic",
                    stdDeviation: "0 " + t.blur
                }
            })], 1)])])
        }
          , s = []
    },
    ffa8: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("ddf2")
          , a = n("23c6");
        for (var s in a)
            "default" !== s && function(t) {
                n.d(e, t, (function() {
                    return a[t]
                }
                ))
            }(s);
        n("eb3d");
        var o, r = n("f0c5"), c = Object(r["a"])(a["default"], i["b"], i["c"], !1, null, "2d8886f1", null, !1, i["a"], o);
        e["default"] = c.exports
    }
}]);
