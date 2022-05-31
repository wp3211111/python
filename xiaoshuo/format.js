new((function i(t) {
    var e = {};
    function r(i) {
        if (e[i]) return e[i].exports;
        var n = e[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(n.exports, n, n.exports, r),
        n.l = !0,
        n.exports
    }
    r.m = t,
    r.c = e,
    r.i = function(t) {
        return t
    },
    r.d = function(t, e, i) {
        r.o(t, e) || Object.defineProperty(t, e, {
            configurable: !1,
            enumerable: !0,
            get: i
        })
    },
    r.r = function(t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    },
    r.n = function(t) {
        var e = t && t.__esModule ?
        function() {
            return t.
        default
        }:
        function() {
            return t
        };
        return r.d(e, "a", e),
        e
    },
    r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    },
    r.p = "/",
    r.oe = function(t) {
        throw console.error(t),
        t
    };
    var i = r(r.s = 19);
    return i.
default || i
})({
    19 : function(t, e, r) {
        "use strict";
        r.r(e),
        r.d(e, "default", (function() {
            return o
        }));
        var i = r(10),
        n = r(0),
        a = r(1),
        s = r(14);
        function o(t) {
            var e = new s.EventEmitter,
            r = function(e, r) {
                t.postMessage({
                    event: e,
                    data: r
                })
            };
            e.on(n.a.FRAG_DECRYPTED, r),
            e.on(n.a.ERROR, r),
            t.addEventListener("message", (function(n) {
                var s = n.data;
                switch (s.cmd) {
                case "init":
                    var o = JSON.parse(s.config);
                    t.transmuxer = new i.c(e, s.typeSupported, o, s.vendor, s.id),
                    Object(a.a)(o.debug),
                    r("init", null);
                    break;
                case "configure":
                    t.transmuxer.configure(s.config);
                    break;
                case "demux":
                    var u = t.transmuxer.push(s.data, s.decryptdata, s.chunkMeta, s.state);
                    Object(i.d)(u) ? u.then((function(e) {
                        l(t, e)
                    })) : l(t, u);
                    break;
                case "flush":
                    var d = s.chunkMeta,
                    c = t.transmuxer.flush(d);
                    Object(i.d)(c) ? c.then((function(e) {
                        h(t, e, d)
                    })) : h(t, c, d)
                }
            }))
        }
        function l(t, e) {
            if ((r = e.remuxResult).audio || r.video || r.text || r.id3 || r.initSegment) {
                var r, i = [],
                n = e.remuxResult,
                a = n.audio,
                s = n.video;
                a && u(i, a),
                s && u(i, s),
                t.postMessage({
                    event: "transmuxComplete",
                    data: e
                },
                i)
            }
        }
        function u(t, e) {
            e.data1 && t.push(e.data1.buffer),
            e.data2 && t.push(e.data2.buffer)
        }
        function h(t, e, r) {
            e.forEach((function(e) {
                l(t, e)
            })),
            t.postMessage({
                event: "flush",
                data: r
            })
        }
    },
    14 : function(t, e, r) {
        "use strict";
        var i = Object.prototype.hasOwnProperty,
        n = "~";
        function a() {}
        function s(t, e, r) {
            this.fn = t,
            this.context = e,
            this.once = r || !1
        }
        function o(t, e, r, i, a) {
            if ("function" != typeof r) throw new TypeError("The listener must be a function");
            var o = new s(r, i || t, a),
            l = n ? n + e: e;
            return t._events[l] ? t._events[l].fn ? t._events[l] = [t._events[l], o] : t._events[l].push(o) : (t._events[l] = o, t._eventsCount++),
            t
        }
        function l(t, e) {
            0 == --t._eventsCount ? t._events = new a: delete t._events[e]
        }
        function u() {
            this._events = new a,
            this._eventsCount = 0
        }
        Object.create && (a.prototype = Object.create(null), (new a).__proto__ || (n = !1)),
        u.prototype.eventNames = function() {
            var t, e, r = [];
            if (0 === this._eventsCount) return r;
            for (e in t = this._events) i.call(t, e) && r.push(n ? e.slice(1) : e);
            return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(t)) : r
        },
        u.prototype.listeners = function(t) {
            var e = n ? n + t: t,
            r = this._events[e];
            if (!r) return [];
            if (r.fn) return [r.fn];
            for (var i = 0,
            a = r.length,
            s = new Array(a); i < a; i++) s[i] = r[i].fn;
            return s
        },
        u.prototype.listenerCount = function(t) {
            var e = n ? n + t: t,
            r = this._events[e];
            return r ? r.fn ? 1 : r.length: 0
        },
        u.prototype.emit = function(t, e, r, i, a, s) {
            var o = n ? n + t: t;
            if (!this._events[o]) return ! 1;
            var l, u, h = this._events[o],
            d = arguments.length;
            if (h.fn) {
                switch (h.once && this.removeListener(t, h.fn, void 0, !0), d) {
                case 1:
                    return h.fn.call(h.context),
                    !0;
                case 2:
                    return h.fn.call(h.context, e),
                    !0;
                case 3:
                    return h.fn.call(h.context, e, r),
                    !0;
                case 4:
                    return h.fn.call(h.context, e, r, i),
                    !0;
                case 5:
                    return h.fn.call(h.context, e, r, i, a),
                    !0;
                case 6:
                    return h.fn.call(h.context, e, r, i, a, s),
                    !0
                }
                for (u = 1, l = new Array(d - 1); u < d; u++) l[u - 1] = arguments[u];
                h.fn.apply(h.context, l)
            } else {
                var c, f = h.length;
                for (u = 0; u < f; u++) switch (h[u].once && this.removeListener(t, h[u].fn, void 0, !0), d) {
                case 1:
                    h[u].fn.call(h[u].context);
                    break;
                case 2:
                    h[u].fn.call(h[u].context, e);
                    break;
                case 3:
                    h[u].fn.call(h[u].context, e, r);
                    break;
                case 4:
                    h[u].fn.call(h[u].context, e, r, i);
                    break;
                default:
                    if (!l) for (c = 1, l = new Array(d - 1); c < d; c++) l[c - 1] = arguments[c];
                    h[u].fn.apply(h[u].context, l)
                }
            }
            return ! 0
        },
        u.prototype.on = function(t, e, r) {
            return o(this, t, e, r, !1)
        },
        u.prototype.once = function(t, e, r) {
            return o(this, t, e, r, !0)
        },
        u.prototype.removeListener = function(t, e, r, i) {
            var a = n ? n + t: t;
            if (!this._events[a]) return this;
            if (!e) return l(this, a),
            this;
            var s = this._events[a];
            if (s.fn) s.fn !== e || i && !s.once || r && s.context !== r || l(this, a);
            else {
                for (var o = 0,
                u = [], h = s.length; o < h; o++)(s[o].fn !== e || i && !s[o].once || r && s[o].context !== r) && u.push(s[o]);
                u.length ? this._events[a] = 1 === u.length ? u[0] : u: l(this, a)
            }
            return this
        },
        u.prototype.removeAllListeners = function(t) {
            var e;
            return t ? (e = n ? n + t: t, this._events[e] && l(this, e)) : (this._events = new a, this._eventsCount = 0),
            this
        },
        u.prototype.off = u.prototype.removeListener,
        u.prototype.addListener = u.prototype.on,
        u.prefixed = n,
        u.EventEmitter = u,
        t.exports = u
    },
    1 : function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return o
        })),
        r.d(e, "b", (function() {
            return l
        }));
        var i = function() {},
        n = {
            trace: i,
            debug: i,
            log: i,
            warn: i,
            info: i,
            error: i
        },
        a = n;
        function s(t) {
            var e = self.console[t];
            return e ? e.bind(self.console, "[" + t + "] >") : i
        }
        function o(t) {
            if (self.console && !0 === t || "object" == typeof t) { !
                function(t) {
                    for (var e = arguments.length,
                    r = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) r[i - 1] = arguments[i];
                    r.forEach((function(e) {
                        a[e] = t[e] ? t[e].bind(t) : s(e)
                    }))
                } (t, "debug", "log", "info", "warn", "error");
                try {
                    a.log()
                } catch(t) {
                    a = n
                }
            } else a = n
        }
        var l = n
    },
    0 : function(t, e, r) {
        "use strict";
        var i;
        r.d(e, "a", (function() {
            return i
        })),
        function(t) {
            t.MEDIA_ATTACHING = "hlsMediaAttaching",
            t.MEDIA_ATTACHED = "hlsMediaAttached",
            t.MEDIA_DETACHING = "hlsMediaDetaching",
            t.MEDIA_DETACHED = "hlsMediaDetached",
            t.BUFFER_RESET = "hlsBufferReset",
            t.BUFFER_CODECS = "hlsBufferCodecs",
            t.BUFFER_CREATED = "hlsBufferCreated",
            t.BUFFER_APPENDING = "hlsBufferAppending",
            t.BUFFER_APPENDED = "hlsBufferAppended",
            t.BUFFER_EOS = "hlsBufferEos",
            t.BUFFER_FLUSHING = "hlsBufferFlushing",
            t.BUFFER_FLUSHED = "hlsBufferFlushed",
            t.MANIFEST_LOADING = "hlsManifestLoading",
            t.MANIFEST_LOADED = "hlsManifestLoaded",
            t.MANIFEST_PARSED = "hlsManifestParsed",
            t.LEVEL_SWITCHING = "hlsLevelSwitching",
            t.LEVEL_SWITCHED = "hlsLevelSwitched",
            t.LEVEL_LOADING = "hlsLevelLoading",
            t.LEVEL_LOADED = "hlsLevelLoaded",
            t.LEVEL_UPDATED = "hlsLevelUpdated",
            t.LEVEL_PTS_UPDATED = "hlsLevelPtsUpdated",
            t.LEVELS_UPDATED = "hlsLevelsUpdated",
            t.AUDIO_TRACKS_UPDATED = "hlsAudioTracksUpdated",
            t.AUDIO_TRACK_SWITCHING = "hlsAudioTrackSwitching",
            t.AUDIO_TRACK_SWITCHED = "hlsAudioTrackSwitched",
            t.AUDIO_TRACK_LOADING = "hlsAudioTrackLoading",
            t.AUDIO_TRACK_LOADED = "hlsAudioTrackLoaded",
            t.SUBTITLE_TRACKS_UPDATED = "hlsSubtitleTracksUpdated",
            t.SUBTITLE_TRACKS_CLEARED = "hlsSubtitleTracksCleared",
            t.SUBTITLE_TRACK_SWITCH = "hlsSubtitleTrackSwitch",
            t.SUBTITLE_TRACK_LOADING = "hlsSubtitleTrackLoading",
            t.SUBTITLE_TRACK_LOADED = "hlsSubtitleTrackLoaded",
            t.SUBTITLE_FRAG_PROCESSED = "hlsSubtitleFragProcessed",
            t.CUES_PARSED = "hlsCuesParsed",
            t.NON_NATIVE_TEXT_TRACKS_FOUND = "hlsNonNativeTextTracksFound",
            t.INIT_PTS_FOUND = "hlsInitPtsFound",
            t.FRAG_LOADING = "hlsFragLoading",
            t.FRAG_LOAD_EMERGENCY_ABORTED = "hlsFragLoadEmergencyAborted",
            t.FRAG_LOADED = "hlsFragLoaded",
            t.FRAG_DECRYPTED = "hlsFragDecrypted",
            t.FRAG_PARSING_INIT_SEGMENT = "hlsFragParsingInitSegment",
            t.FRAG_PARSING_USERDATA = "hlsFragParsingUserdata",
            t.FRAG_PARSING_METADATA = "hlsFragParsingMetadata",
            t.FRAG_PARSED = "hlsFragParsed",
            t.FRAG_BUFFERED = "hlsFragBuffered",
            t.FRAG_CHANGED = "hlsFragChanged",
            t.FPS_DROP = "hlsFpsDrop",
            t.FPS_DROP_LEVEL_CAPPING = "hlsFpsDropLevelCapping",
            t.ERROR = "hlsError",
            t.DESTROYING = "hlsDestroying",
            t.KEY_LOADING = "hlsKeyLoading",
            t.KEY_LOADED = "hlsKeyLoaded",
            t.LIVE_BACK_BUFFER_REACHED = "hlsLiveBackBufferReached",
            t.BACK_BUFFER_REACHED = "hlsBackBufferReached"
        } (i || (i = {}))
    },
    10 : function(t, e, r) {
        "use strict";
        r.d(e, "c", (function() {
            return lt
        })),
        r.d(e, "d", (function() {
            return ht
        })),
        r.d(e, "a", (function() {
            return dt
        })),
        r.d(e, "b", (function() {
            return ct
        }));
        var i = r(0),
        n = r(2),
        a = r(15),
        s = r(3),
        o = r(7);
        var l = r(6),
        u = r(9),
        h = function() {
            function t() {
                this._audioTrack = void 0,
                this._id3Track = void 0,
                this.frameIndex = 0,
                this.cachedData = null,
                this.initPTS = null
            }
            var e = t.prototype;
            return e.resetInitSegment = function(t, e, r) {
                this._id3Track = {
                    type: "id3",
                    id: 3,
                    pid: -1,
                    inputTimeScale: 9e4,
                    sequenceNumber: 0,
                    samples: [],
                    dropped: 0
                }
            },
            e.resetTimeStamp = function() {},
            e.resetContiguity = function() {},
            e.canParse = function(t, e) {
                return ! 1
            },
            e.appendFrame = function(t, e, r) {},
            e.demux = function(t, e) {
                this.cachedData && (t = Object(l.a)(this.cachedData, t), this.cachedData = null);
                var r, i, n = o.b(t, 0),
                a = n ? n.length: 0,
                s = this._audioTrack,
                h = this._id3Track,
                c = n ? o.d(n) : void 0,
                f = t.length;
                for (0 !== this.frameIndex && null !== this.initPTS || (this.initPTS = d(c, e)), n && n.length > 0 && h.samples.push({
                    pts: this.initPTS,
                    dts: this.initPTS,
                    data: n
                }), i = this.initPTS; a < f;) {
                    if (this.canParse(t, a)) {
                        var g = this.appendFrame(s, t, a);
                        g ? (this.frameIndex++, i = g.sample.pts, r = a += g.length) : a = f
                    } else o.a(t, a) ? (n = o.b(t, a), h.samples.push({
                        pts: i,
                        dts: i,
                        data: n
                    }), r = a += n.length) : a++;
                    if (a === f && r !== f) {
                        var v = Object(u.a)(t, r);
                        this.cachedData ? this.cachedData = Object(l.a)(this.cachedData, v) : this.cachedData = v
                    }
                }
                return {
                    audioTrack: s,
                    avcTrack: {
                        type: "",
                        id: -1,
                        pid: -1,
                        inputTimeScale: 9e4,
                        sequenceNumber: -1,
                        samples: [],
                        dropped: 0
                    },
                    id3Track: h,
                    textTrack: {
                        type: "",
                        id: -1,
                        pid: -1,
                        inputTimeScale: 9e4,
                        sequenceNumber: -1,
                        samples: [],
                        dropped: 0
                    }
                }
            },
            e.demuxSampleAes = function(t, e, r) {
                return Promise.reject(new Error("[" + this + "] This demuxer does not support Sample-AES decryption"))
            },
            e.flush = function(t) {
                var e = this.cachedData;
                return e && (this.cachedData = null, this.demux(e, 0)),
                this.frameIndex = 0,
                {
                    audioTrack: this._audioTrack,
                    avcTrack: {
                        type: "",
                        id: -1,
                        pid: -1,
                        inputTimeScale: 9e4,
                        sequenceNumber: -1,
                        samples: [],
                        dropped: 0
                    },
                    id3Track: this._id3Track,
                    textTrack: {
                        type: "",
                        id: -1,
                        pid: -1,
                        inputTimeScale: 9e4,
                        sequenceNumber: -1,
                        samples: [],
                        dropped: 0
                    }
                }
            },
            e.destroy = function() {},
            t
        } (),
        d = function(t, e) {
            return Object(s.a)(t) ? 90 * t: 9e4 * e
        },
        c = h,
        f = r(1);
        function g(t, e) {
            return 255 === t[e] && 240 == (246 & t[e + 1])
        }
        function v(t, e) {
            return 1 & t[e + 1] ? 7 : 9
        }
        function p(t, e) {
            return (3 & t[e + 3]) << 11 | t[e + 4] << 3 | (224 & t[e + 5]) >>> 5
        }
        function m(t, e) {
            return e + 1 < t.length && g(t, e)
        }
        function y(t, e) {
            if (m(t, e)) {
                var r = v(t, e);
                if (e + r >= t.length) return ! 1;
                var i = p(t, e);
                if (i <= r) return ! 1;
                var n = e + i;
                return n === t.length || m(t, n)
            }
            return ! 1
        }
        function T(t, e, r, a, s) {
            if (!t.samplerate) {
                var o = function(t, e, r, a) {
                    var s, o, l, u, h = navigator.userAgent.toLowerCase(),
                    d = a,
                    c = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
                    s = 1 + ((192 & e[r + 2]) >>> 6);
                    var g = (60 & e[r + 2]) >>> 2;
                    if (! (g > c.length - 1)) return l = (1 & e[r + 2]) << 2,
                    l |= (192 & e[r + 3]) >>> 6,
                    f.b.log("manifest codec:" + a + ", ADTS type:" + s + ", samplingIndex:" + g),
                    /firefox/i.test(h) ? g >= 6 ? (s = 5, u = new Array(4), o = g - 3) : (s = 2, u = new Array(2), o = g) : -1 !== h.indexOf("android") ? (s = 2, u = new Array(2), o = g) : (s = 5, u = new Array(4), a && ( - 1 !== a.indexOf("mp4a.40.29") || -1 !== a.indexOf("mp4a.40.5")) || !a && g >= 6 ? o = g - 3 : ((a && -1 !== a.indexOf("mp4a.40.2") && (g >= 6 && 1 === l || /vivaldi/i.test(h)) || !a && 1 === l) && (s = 2, u = new Array(2)), o = g)),
                    u[0] = s << 3,
                    u[0] |= (14 & g) >> 1,
                    u[1] |= (1 & g) << 7,
                    u[1] |= l << 3,
                    5 === s && (u[1] |= (14 & o) >> 1, u[2] = (1 & o) << 7, u[2] |= 8, u[3] = 0),
                    {
                        config: u,
                        samplerate: c[g],
                        channelCount: l,
                        codec: "mp4a.40." + s,
                        manifestCodec: d
                    };
                    t.trigger(i.a.ERROR, {
                        type: n.b.MEDIA_ERROR,
                        details: n.a.FRAG_PARSING_ERROR,
                        fatal: !0,
                        reason: "invalid ADTS sampling index:" + g
                    })
                } (e, r, a, s);
                if (!o) return;
                t.config = o.config,
                t.samplerate = o.samplerate,
                t.channelCount = o.channelCount,
                t.codec = o.codec,
                t.manifestCodec = o.manifestCodec,
                f.b.log("parsed codec:" + t.codec + ", rate:" + o.samplerate + ", channels:" + o.channelCount)
            }
        }
        function b(t) {
            return 9216e4 / t
        }
        function E(t, e, r, i, n) {
            var a = function(t, e, r, i, n) {
                var a = v(t, e),
                s = p(t, e);
                if ((s -= a) > 0) return {
                    headerLength: a,
                    frameLength: s,
                    stamp: r + i * n
                }
            } (e, r, i, n, b(t.samplerate));
            if (a) {
                var s, o = a.frameLength,
                l = a.headerLength,
                u = a.stamp,
                h = l + o,
                d = Math.max(0, r + h - e.length);
                d ? (s = new Uint8Array(h - l)).set(e.subarray(r + l, e.length), 0) : s = e.subarray(r + l, r + h);
                var c = {
                    unit: s,
                    pts: u
                };
                return d || t.samples.push(c),
                {
                    sample: c,
                    length: h,
                    missing: d
                }
            }
        }
        function S(t, e) {
            return (S = Object.setPrototypeOf ||
            function(t, e) {
                return t.__proto__ = e,
                t
            })(t, e)
        }
        var L = function(t) {
            var e, r;
            function i(e, r) {
                var i;
                return (i = t.call(this) || this).observer = void 0,
                i.config = void 0,
                i.observer = e,
                i.config = r,
                i
            }
            r = t,
            (e = i).prototype = Object.create(r.prototype),
            e.prototype.constructor = e,
            S(e, r);
            var n = i.prototype;
            return n.resetInitSegment = function(e, r, i) {
                t.prototype.resetInitSegment.call(this, e, r, i),
                this._audioTrack = {
                    container: "audio/adts",
                    type: "audio",
                    id: 2,
                    pid: -1,
                    sequenceNumber: 0,
                    isAAC: !0,
                    samples: [],
                    manifestCodec: e,
                    duration: i,
                    inputTimeScale: 9e4,
                    dropped: 0
                }
            },
            i.probe = function(t) {
                if (!t) return ! 1;
                for (var e = (o.b(t, 0) || []).length, r = t.length; e < r; e++) if (y(t, e)) return f.b.log("ADTS sync word found !"),
                !0;
                return ! 1
            },
            n.canParse = function(t, e) {
                return function(t, e) {
                    return function(t, e) {
                        return e + 5 < t.length
                    } (t, e) && g(t, e) && p(t, e) <= t.length - e
                } (t, e)
            },
            n.appendFrame = function(t, e, r) {
                T(t, this.observer, e, r, t.manifestCodec);
                var i = E(t, e, r, this.initPTS, this.frameIndex);
                if (i && 0 === i.missing) return i
            },
            i
        } (c);
        L.minProbeByteLength = 9;
        var A = L,
        R = function() {
            function t(t, e) {
                this.remainderData = null,
                this.config = void 0,
                this.config = e
            }
            var e = t.prototype;
            return e.resetTimeStamp = function() {},
            e.resetInitSegment = function() {},
            e.resetContiguity = function() {},
            t.probe = function(t) {
                return Object(l.b)({
                    data: t,
                    start: 0,
                    end: Math.min(t.length, 16384)
                },
                ["moof"]).length > 0
            },
            e.demux = function(t) {
                var e = t,
                r = {
                    type: "",
                    id: -1,
                    pid: -1,
                    inputTimeScale: 9e4,
                    sequenceNumber: -1,
                    samples: [],
                    dropped: 0
                };
                if (this.config.progressive) {
                    this.remainderData && (e = Object(l.a)(this.remainderData, t));
                    var i = Object(l.h)(e);
                    this.remainderData = i.remainder,
                    r.samples = i.valid || new Uint8Array
                } else r.samples = e;
                return {
                    audioTrack: {
                        type: "",
                        id: -1,
                        pid: -1,
                        inputTimeScale: 9e4,
                        sequenceNumber: -1,
                        samples: [],
                        dropped: 0
                    },
                    avcTrack: r,
                    id3Track: {
                        type: "",
                        id: -1,
                        pid: -1,
                        inputTimeScale: 9e4,
                        sequenceNumber: -1,
                        samples: [],
                        dropped: 0
                    },
                    textTrack: {
                        type: "",
                        id: -1,
                        pid: -1,
                        inputTimeScale: 9e4,
                        sequenceNumber: -1,
                        samples: [],
                        dropped: 0
                    }
                }
            },
            e.flush = function() {
                var t = {
                    type: "",
                    id: -1,
                    pid: -1,
                    inputTimeScale: 9e4,
                    sequenceNumber: -1,
                    samples: [],
                    dropped: 0
                };
                return t.samples = this.remainderData || new Uint8Array,
                this.remainderData = null,
                {
                    audioTrack: {
                        type: "",
                        id: -1,
                        pid: -1,
                        inputTimeScale: 9e4,
                        sequenceNumber: -1,
                        samples: [],
                        dropped: 0
                    },
                    avcTrack: t,
                    id3Track: {
                        type: "",
                        id: -1,
                        pid: -1,
                        inputTimeScale: 9e4,
                        sequenceNumber: -1,
                        samples: [],
                        dropped: 0
                    },
                    textTrack: {
                        type: "",
                        id: -1,
                        pid: -1,
                        inputTimeScale: 9e4,
                        sequenceNumber: -1,
                        samples: [],
                        dropped: 0
                    }
                }
            },
            e.demuxSampleAes = function(t, e, r) {
                return Promise.reject(new Error("The MP4 demuxer does not support SAMPLE-AES decryption"))
            },
            e.destroy = function() {},
            t
        } ();
        R.minProbeByteLength = 1024;
        var D = R,
        k = null,
        _ = [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],
        I = [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3],
        C = [[0, 72, 144, 12], [0, 0, 0, 0], [0, 72, 144, 12], [0, 144, 144, 12]],
        w = [0, 1, 1, 4];
        function O(t, e, r, i, n) {
            if (! (r + 24 > e.length)) {
                var a = x(e, r);
                if (a && r + a.frameLength <= e.length) {
                    var s = i + n * (9e4 * a.samplesPerFrame / a.sampleRate),
                    o = {
                        unit: e.subarray(r, r + a.frameLength),
                        pts: s,
                        dts: s
                    };
                    return t.config = [],
                    t.channelCount = a.channelCount,
                    t.samplerate = a.sampleRate,
                    t.samples.push(o),
                    {
                        sample: o,
                        length: a.frameLength,
                        missing: 0
                    }
                }
            }
        }
        function x(t, e) {
            var r = t[e + 1] >> 3 & 3,
            i = t[e + 1] >> 1 & 3,
            n = t[e + 2] >> 4 & 15,
            a = t[e + 2] >> 2 & 3;
            if (1 !== r && 0 !== n && 15 !== n && 3 !== a) {
                var s = t[e + 2] >> 1 & 1,
                o = t[e + 3] >> 6,
                l = 1e3 * _[14 * (3 === r ? 3 - i: 3 === i ? 3 : 4) + n - 1],
                u = I[3 * (3 === r ? 0 : 2 === r ? 1 : 2) + a],
                h = 3 === o ? 1 : 2,
                d = C[r][i],
                c = w[i],
                f = 8 * d * c,
                g = Math.floor(d * l / u + s) * c;
                if (null === k) {
                    var v = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
                    k = v ? parseInt(v[1]) : 0
                }
                return !! k && k <= 87 && 2 === i && l >= 224e3 && 0 === o && (t[e + 3] = 128 | t[e + 3]),
                {
                    sampleRate: u,
                    channelCount: h,
                    frameLength: g,
                    samplesPerFrame: f
                }
            }
        }
        function P(t, e) {
            return 255 === t[e] && 224 == (224 & t[e + 1]) && 0 != (6 & t[e + 1])
        }
        function M(t, e) {
            return e + 1 < t.length && P(t, e)
        }
        function F(t, e) {
            if (e + 1 < t.length && P(t, e)) {
                var r = x(t, e),
                i = 4;
                null != r && r.frameLength && (i = r.frameLength);
                var n = e + i;
                return n === t.length || M(t, n)
            }
            return ! 1
        }
        var N = function() {
            function t(t) {
                this.data = void 0,
                this.bytesAvailable = void 0,
                this.word = void 0,
                this.bitsAvailable = void 0,
                this.data = t,
                this.bytesAvailable = t.byteLength,
                this.word = 0,
                this.bitsAvailable = 0
            }
            var e = t.prototype;
            return e.loadWord = function() {
                var t = this.data,
                e = this.bytesAvailable,
                r = t.byteLength - e,
                i = new Uint8Array(4),
                n = Math.min(4, e);
                if (0 === n) throw new Error("no bytes available");
                i.set(t.subarray(r, r + n)),
                this.word = new DataView(i.buffer).getUint32(0),
                this.bitsAvailable = 8 * n,
                this.bytesAvailable -= n
            },
            e.skipBits = function(t) {
                var e;
                this.bitsAvailable > t ? (this.word <<= t, this.bitsAvailable -= t) : (t -= this.bitsAvailable, t -= (e = t >> 3) >> 3, this.bytesAvailable -= e, this.loadWord(), this.word <<= t, this.bitsAvailable -= t)
            },
            e.readBits = function(t) {
                var e = Math.min(this.bitsAvailable, t),
                r = this.word >>> 32 - e;
                return t > 32 && f.b.error("Cannot read more than 32 bits at a time"),
                this.bitsAvailable -= e,
                this.bitsAvailable > 0 ? this.word <<= e: this.bytesAvailable > 0 && this.loadWord(),
                (e = t - e) > 0 && this.bitsAvailable ? r << e | this.readBits(e) : r
            },
            e.skipLZ = function() {
                var t;
                for (t = 0; t < this.bitsAvailable; ++t) if (0 != (this.word & 2147483648 >>> t)) return this.word <<= t,
                this.bitsAvailable -= t,
                t;
                return this.loadWord(),
                t + this.skipLZ()
            },
            e.skipUEG = function() {
                this.skipBits(1 + this.skipLZ())
            },
            e.skipEG = function() {
                this.skipBits(1 + this.skipLZ())
            },
            e.readUEG = function() {
                var t = this.skipLZ();
                return this.readBits(t + 1) - 1
            },
            e.readEG = function() {
                var t = this.readUEG();
                return 1 & t ? 1 + t >>> 1 : -1 * (t >>> 1)
            },
            e.readBoolean = function() {
                return 1 === this.readBits(1)
            },
            e.readUByte = function() {
                return this.readBits(8)
            },
            e.readUShort = function() {
                return this.readBits(16)
            },
            e.readUInt = function() {
                return this.readBits(32)
            },
            e.skipScalingList = function(t) {
                for (var e = 8,
                r = 8,
                i = 0; i < t; i++) 0 !== r && (r = (e + this.readEG() + 256) % 256),
                e = 0 === r ? e: r
            },
            e.readSPS = function() {
                var t, e, r, i = 0,
                n = 0,
                a = 0,
                s = 0,
                o = this.readUByte.bind(this),
                l = this.readBits.bind(this),
                u = this.readUEG.bind(this),
                h = this.readBoolean.bind(this),
                d = this.skipBits.bind(this),
                c = this.skipEG.bind(this),
                f = this.skipUEG.bind(this),
                g = this.skipScalingList.bind(this);
                o();
                var v = o();
                if (l(5), d(3), o(), f(), 100 === v || 110 === v || 122 === v || 244 === v || 44 === v || 83 === v || 86 === v || 118 === v || 128 === v) {
                    var p = u();
                    if (3 === p && d(1), f(), f(), d(1), h()) for (e = 3 !== p ? 8 : 12, r = 0; r < e; r++) h() && g(r < 6 ? 16 : 64)
                }
                f();
                var m = u();
                if (0 === m) u();
                else if (1 === m) for (d(1), c(), c(), t = u(), r = 0; r < t; r++) c();
                f(),
                d(1);
                var y = u(),
                T = u(),
                b = l(1);
                0 === b && d(1),
                d(1),
                h() && (i = u(), n = u(), a = u(), s = u());
                var E = [1, 1];
                if (h() && h()) switch (o()) {
                case 1:
                    E = [1, 1];
                    break;
                case 2:
                    E = [12, 11];
                    break;
                case 3:
                    E = [10, 11];
                    break;
                case 4:
                    E = [16, 11];
                    break;
                case 5:
                    E = [40, 33];
                    break;
                case 6:
                    E = [24, 11];
                    break;
                case 7:
                    E = [20, 11];
                    break;
                case 8:
                    E = [32, 11];
                    break;
                case 9:
                    E = [80, 33];
                    break;
                case 10:
                    E = [18, 11];
                    break;
                case 11:
                    E = [15, 11];
                    break;
                case 12:
                    E = [64, 33];
                    break;
                case 13:
                    E = [160, 99];
                    break;
                case 14:
                    E = [4, 3];
                    break;
                case 15:
                    E = [3, 2];
                    break;
                case 16:
                    E = [2, 1];
                    break;
                case 255:
                    E = [o() << 8 | o(), o() << 8 | o()]
                }
                return {
                    width: Math.ceil(16 * (y + 1) - 2 * i - 2 * n),
                    height: (2 - b) * (T + 1) * 16 - (b ? 2 : 4) * (a + s),
                    pixelRatio: E
                }
            },
            e.readSliceType = function() {
                return this.readUByte(),
                this.readUEG(),
                this.readUEG()
            },
            t
        } (),
        U = function() {
            function t(t, e, r) {
                this.keyData = void 0,
                this.decrypter = void 0,
                this.keyData = r,
                this.decrypter = new a.a(t, e, {
                    removePKCS7Padding: !1
                })
            }
            var e = t.prototype;
            return e.decryptBuffer = function(t, e) {
                this.decrypter.decrypt(t, this.keyData.key.buffer, this.keyData.iv.buffer, e)
            },
            e.decryptAacSample = function(t, e, r, i) {
                var n = t[e].unit,
                a = n.subarray(16, n.length - n.length % 16),
                s = a.buffer.slice(a.byteOffset, a.byteOffset + a.length),
                o = this;
                this.decryptBuffer(s, (function(a) {
                    var s = new Uint8Array(a);
                    n.set(s, 16),
                    i || o.decryptAacSamples(t, e + 1, r)
                }))
            },
            e.decryptAacSamples = function(t, e, r) {
                for (;; e++) {
                    if (e >= t.length) return void r();
                    if (! (t[e].unit.length < 32)) {
                        var i = this.decrypter.isSync();
                        if (this.decryptAacSample(t, e, r, i), !i) return
                    }
                }
            },
            e.getAvcEncryptedData = function(t) {
                for (var e = 16 * Math.floor((t.length - 48) / 160) + 16, r = new Int8Array(e), i = 0, n = 32; n < t.length - 16; n += 160, i += 16) r.set(t.subarray(n, n + 16), i);
                return r
            },
            e.getAvcDecryptedUnit = function(t, e) {
                for (var r = new Uint8Array(e), i = 0, n = 32; n < t.length - 16; n += 160, i += 16) t.set(r.subarray(i, i + 16), n);
                return t
            },
            e.decryptAvcSample = function(t, e, r, i, n, a) {
                var s = q(n.data),
                o = this.getAvcEncryptedData(s),
                l = this;
                this.decryptBuffer(o.buffer, (function(o) {
                    n.data = l.getAvcDecryptedUnit(s, o),
                    a || l.decryptAvcSamples(t, e, r + 1, i)
                }))
            },
            e.decryptAvcSamples = function(t, e, r, i) {
                if (t instanceof Uint8Array) throw new Error("Cannot decrypt samples of type Uint8Array");
                for (;; e++, r = 0) {
                    if (e >= t.length) return void i();
                    for (var n = t[e].units; ! (r >= n.length); r++) {
                        var a = n[r];
                        if (! (a.data.length <= 48 || 1 !== a.type && 5 !== a.type)) {
                            var s = this.decrypter.isSync();
                            if (this.decryptAvcSample(t, e, r, i, a, s), !s) return
                        }
                    }
                }
            },
            t
        } (),
        B = {
            video: 1,
            audio: 2,
            id3: 3,
            text: 4
        },
        G = function() {
            function t(t, e, r) {
                this.observer = void 0,
                this.config = void 0,
                this.typeSupported = void 0,
                this.sampleAes = null,
                this.pmtParsed = !1,
                this.audioCodec = void 0,
                this.videoCodec = void 0,
                this._duration = 0,
                this.aacLastPTS = null,
                this._initPTS = null,
                this._initDTS = null,
                this._pmtId = -1,
                this._avcTrack = void 0,
                this._audioTrack = void 0,
                this._id3Track = void 0,
                this._txtTrack = void 0,
                this.aacOverFlow = null,
                this.avcSample = null,
                this.remainderData = null,
                this.observer = t,
                this.config = e,
                this.typeSupported = r
            }
            t.probe = function(e) {
                var r = t.syncOffset(e);
                return ! (r < 0) && (r && f.b.warn("MPEG2-TS detected but first sync word found @ offset " + r + ", junk ahead ?"), !0)
            },
            t.syncOffset = function(t) {
                for (var e = Math.min(1e3, t.length - 564), r = 0; r < e;) {
                    if (71 === t[r] && 71 === t[r + 188] && 71 === t[r + 376]) return r;
                    r++
                }
                return - 1
            },
            t.createTrack = function(t, e) {
                return {
                    container: "video" === t || "audio" === t ? "video/mp2t": void 0,
                    type: t,
                    id: B[t],
                    pid: -1,
                    inputTimeScale: 9e4,
                    sequenceNumber: 0,
                    samples: [],
                    dropped: 0,
                    duration: "audio" === t ? e: void 0
                }
            };
            var e = t.prototype;
            return e.resetInitSegment = function(e, r, i) {
                this.pmtParsed = !1,
                this._pmtId = -1,
                this._avcTrack = t.createTrack("video", i),
                this._audioTrack = t.createTrack("audio", i),
                this._id3Track = t.createTrack("id3", i),
                this._txtTrack = t.createTrack("text", i),
                this._audioTrack.isAAC = !0,
                this.aacOverFlow = null,
                this.aacLastPTS = null,
                this.avcSample = null,
                this.audioCodec = e,
                this.videoCodec = r,
                this._duration = i
            },
            e.resetTimeStamp = function() {},
            e.resetContiguity = function() {
                var t = this._audioTrack,
                e = this._avcTrack,
                r = this._id3Track;
                t && (t.pesData = null),
                e && (e.pesData = null),
                r && (r.pesData = null),
                this.aacOverFlow = null,
                this.aacLastPTS = null
            },
            e.demux = function(e, r, a, s) {
                var o;
                void 0 === a && (a = !1),
                void 0 === s && (s = !1),
                a || (this.sampleAes = null);
                var u = this._avcTrack,
                h = this._audioTrack,
                d = this._id3Track,
                c = u.pid,
                g = u.pesData,
                v = h.pid,
                p = d.pid,
                m = h.pesData,
                y = d.pesData,
                T = !1,
                b = this.pmtParsed,
                E = this._pmtId,
                S = e.length;
                if (this.remainderData && (S = (e = Object(l.a)(this.remainderData, e)).length, this.remainderData = null), S < 188 && !s) return this.remainderData = e,
                {
                    audioTrack: h,
                    avcTrack: u,
                    id3Track: d,
                    textTrack: this._txtTrack
                };
                var L = Math.max(0, t.syncOffset(e)); (S -= (S + L) % 188) < e.byteLength && !s && (this.remainderData = new Uint8Array(e.buffer, S, e.buffer.byteLength - S));
                for (var A = 0,
                R = L; R < S; R += 188) if (71 === e[R]) {
                    var D = !!(64 & e[R + 1]),
                    k = ((31 & e[R + 1]) << 8) + e[R + 2],
                    _ = void 0;
                    if ((48 & e[R + 3]) >> 4 > 1) {
                        if ((_ = R + 5 + e[R + 4]) === R + 188) continue
                    } else _ = R + 4;
                    switch (k) {
                    case c:
                        D && (g && (o = V(g)) && this.parseAVCPES(o, !1), g = {
                            data: [],
                            size: 0
                        }),
                        g && (g.data.push(e.subarray(_, R + 188)), g.size += R + 188 - _);
                        break;
                    case v:
                        D && (m && (o = V(m)) && (h.isAAC ? this.parseAACPES(o) : this.parseMPEGPES(o)), m = {
                            data: [],
                            size: 0
                        }),
                        m && (m.data.push(e.subarray(_, R + 188)), m.size += R + 188 - _);
                        break;
                    case p:
                        D && (y && (o = V(y)) && this.parseID3PES(o), y = {
                            data: [],
                            size: 0
                        }),
                        y && (y.data.push(e.subarray(_, R + 188)), y.size += R + 188 - _);
                        break;
                    case 0:
                        D && (_ += e[_] + 1),
                        E = this._pmtId = j(e, _);
                        break;
                    case E:
                        D && (_ += e[_] + 1);
                        var I = H(e, _, !0 === this.typeSupported.mpeg || !0 === this.typeSupported.mp3, a); (c = I.avc) > 0 && (u.pid = c),
                        (v = I.audio) > 0 && (h.pid = v, h.isAAC = I.isAAC),
                        (p = I.id3) > 0 && (d.pid = p),
                        T && !b && (f.b.log("reparse from beginning"), T = !1, R = L - 188),
                        b = this.pmtParsed = !0;
                        break;
                    case 17:
                    case 8191:
                        break;
                    default:
                        T = !0
                    }
                } else A++;
                A > 0 && this.observer.emit(i.a.ERROR, i.a.ERROR, {
                    type: n.b.MEDIA_ERROR,
                    details: n.a.FRAG_PARSING_ERROR,
                    fatal: !1,
                    reason: "Found " + A + " TS packet/s that do not start with 0x47"
                }),
                u.pesData = g,
                h.pesData = m,
                d.pesData = y;
                var C = {
                    audioTrack: h,
                    avcTrack: u,
                    id3Track: d,
                    textTrack: this._txtTrack
                };
                return s && this.extractRemainingSamples(C),
                C
            },
            e.flush = function() {
                var t, e = this.remainderData;
                return this.remainderData = null,
                t = e ? this.demux(e, -1, !1, !0) : {
                    audioTrack: this._audioTrack,
                    avcTrack: this._avcTrack,
                    textTrack: this._txtTrack,
                    id3Track: this._id3Track
                },
                this.extractRemainingSamples(t),
                this.sampleAes ? this.decrypt(t, this.sampleAes) : t
            },
            e.extractRemainingSamples = function(t) {
                var e, r = t.audioTrack,
                i = t.avcTrack,
                n = t.id3Track,
                a = i.pesData,
                s = r.pesData,
                o = n.pesData;
                a && (e = V(a)) ? (this.parseAVCPES(e, !0), i.pesData = null) : i.pesData = a,
                s && (e = V(s)) ? (r.isAAC ? this.parseAACPES(e) : this.parseMPEGPES(e), r.pesData = null) : (null != s && s.size && f.b.log("last AAC PES packet truncated,might overlap between fragments"), r.pesData = s),
                o && (e = V(o)) ? (this.parseID3PES(e), n.pesData = null) : n.pesData = o
            },
            e.demuxSampleAes = function(t, e, r) {
                var i = this.demux(t, r, !0, !this.config.progressive),
                n = this.sampleAes = new U(this.observer, this.config, e);
                return this.decrypt(i, n)
            },
            e.decrypt = function(t, e) {
                return new Promise((function(r) {
                    var i = t.audioTrack,
                    n = t.avcTrack;
                    i.samples && i.isAAC ? e.decryptAacSamples(i.samples, 0, (function() {
                        n.samples ? e.decryptAvcSamples(n.samples, 0, 0, (function() {
                            r(t)
                        })) : r(t)
                    })) : n.samples && e.decryptAvcSamples(n.samples, 0, 0, (function() {
                        r(t)
                    }))
                }))
            },
            e.destroy = function() {
                this._initPTS = this._initDTS = null,
                this._duration = 0
            },
            e.parseAVCPES = function(t, e) {
                var r, i = this,
                n = this._avcTrack,
                a = this.parseAVCNALu(t.data),
                s = this.avcSample,
                l = !1;
                t.data = null,
                s && a.length && !n.audFound && (W(s, n), s = this.avcSample = K(!1, t.pts, t.dts, "")),
                a.forEach((function(e) {
                    switch (e.type) {
                    case 1:
                        r = !0,
                        s || (s = i.avcSample = K(!0, t.pts, t.dts, "")),
                        s.frame = !0;
                        var a = e.data;
                        if (l && a.length > 4) {
                            var u = new N(a).readSliceType();
                            2 !== u && 4 !== u && 7 !== u && 9 !== u || (s.key = !0)
                        }
                        break;
                    case 5:
                        r = !0,
                        s || (s = i.avcSample = K(!0, t.pts, t.dts, "")),
                        s.key = !0,
                        s.frame = !0;
                        break;
                    case 6:
                        r = !0;
                        var h = new N(q(e.data));
                        h.readUByte();
                        for (var d = 0,
                        c = 0,
                        f = !1,
                        g = 0; ! f && h.bytesAvailable > 1;) {
                            d = 0;
                            do {
                                d += g = h.readUByte()
                            } while ( 255 === g );
                            c = 0;
                            do {
                                c += g = h.readUByte()
                            } while ( 255 === g );
                            if (4 === d && 0 !== h.bytesAvailable) {
                                if (f = !0, 181 === h.readUByte()) if (49 === h.readUShort()) if (1195456820 === h.readUInt()) if (3 === h.readUByte()) {
                                    for (var v = h.readUByte(), p = 31 & v, m = [v, h.readUByte()], y = 0; y < p; y++) m.push(h.readUByte()),
                                    m.push(h.readUByte()),
                                    m.push(h.readUByte());
                                    Y(i._txtTrack.samples, {
                                        type: 3,
                                        pts: t.pts,
                                        bytes: m
                                    })
                                }
                            } else if (5 === d && 0 !== h.bytesAvailable) {
                                if (f = !0, c > 16) {
                                    for (var T = [], b = 0; b < 16; b++) T.push(h.readUByte().toString(16)),
                                    3 !== b && 5 !== b && 7 !== b && 9 !== b || T.push("-");
                                    for (var E = c - 16,
                                    S = new Uint8Array(E), L = 0; L < E; L++) S[L] = h.readUByte();
                                    Y(i._txtTrack.samples, {
                                        pts: t.pts,
                                        payloadType: d,
                                        uuid: T.join(""),
                                        userData: Object(o.f)(S),
                                        userDataBytes: S
                                    })
                                }
                            } else if (c < h.bytesAvailable) for (var A = 0; A < c; A++) h.readUByte()
                        }
                        break;
                    case 7:
                        if (r = !0, l = !0, !n.sps) {
                            var R = new N(e.data).readSPS();
                            n.width = R.width,
                            n.height = R.height,
                            n.pixelRatio = R.pixelRatio,
                            n.sps = [e.data],
                            n.duration = i._duration;
                            for (var D = e.data.subarray(1, 4), k = "avc1.", _ = 0; _ < 3; _++) {
                                var I = D[_].toString(16);
                                I.length < 2 && (I = "0" + I),
                                k += I
                            }
                            n.codec = k
                        }
                        break;
                    case 8:
                        r = !0,
                        n.pps || (n.pps = [e.data]);
                        break;
                    case 9:
                        r = !1,
                        n.audFound = !0,
                        s && W(s, n),
                        s = i.avcSample = K(!1, t.pts, t.dts, "");
                        break;
                    case 12:
                        r = !1;
                        break;
                    default:
                        r = !1,
                        s && (s.debug += "unknown NAL " + e.type + " ")
                    }
                    s && r && s.units.push(e)
                })),
                e && s && (W(s, n), this.avcSample = null)
            },
            e.getLastNalUnit = function() {
                var t, e, r = this.avcSample;
                if (!r || 0 === r.units.length) {
                    var i = this._avcTrack.samples;
                    r = i[i.length - 1]
                }
                if (null !== (t = r) && void 0 !== t && t.units) {
                    var n = r.units;
                    e = n[n.length - 1]
                }
                return e
            },
            e.parseAVCNALu = function(t) {
                var e, r, i = t.byteLength,
                n = this._avcTrack,
                a = n.naluState || 0,
                s = a,
                o = [],
                l = 0,
                u = -1,
                h = 0;
                for ( - 1 === a && (u = 0, h = 31 & t[0], a = 0, l = 1); l < i;) if (e = t[l++], a) if (1 !== a) if (e) if (1 === e) {
                    if (u >= 0) {
                        var d = {
                            data: t.subarray(u, l - a - 1),
                            type: h
                        };
                        o.push(d)
                    } else {
                        var c = this.getLastNalUnit();
                        if (c && (s && l <= 4 - s && c.state && (c.data = c.data.subarray(0, c.data.byteLength - s)), (r = l - a - 1) > 0)) {
                            var f = new Uint8Array(c.data.byteLength + r);
                            f.set(c.data, 0),
                            f.set(t.subarray(0, r), c.data.byteLength),
                            c.data = f,
                            c.state = 0
                        }
                    }
                    l < i ? (u = l, h = 31 & t[l], a = 0) : a = -1
                } else a = 0;
                else a = 3;
                else a = e ? 0 : 2;
                else a = e ? 0 : 1;
                if (u >= 0 && a >= 0) {
                    var g = {
                        data: t.subarray(u, i),
                        type: h,
                        state: a
                    };
                    o.push(g)
                }
                if (0 === o.length) {
                    var v = this.getLastNalUnit();
                    if (v) {
                        var p = new Uint8Array(v.data.byteLength + t.byteLength);
                        p.set(v.data, 0),
                        p.set(t, v.data.byteLength),
                        v.data = p
                    }
                }
                return n.naluState = a,
                o
            },
            e.parseAACPES = function(t) {
                var e, r, a, s, o, l = 0,
                u = this._audioTrack,
                h = this.aacOverFlow,
                d = t.data;
                if (h) {
                    this.aacOverFlow = null;
                    var c = h.sample.unit.byteLength,
                    g = Math.min(h.missing, c),
                    v = c - g;
                    h.sample.unit.set(d.subarray(0, g), v),
                    u.samples.push(h.sample),
                    l = h.missing
                }
                for (e = l, r = d.length; e < r - 1 && !m(d, e); e++);
                if (e !== l && (e < r - 1 ? (a = "AAC PES did not start with ADTS header,offset:" + e, s = !1) : (a = "no ADTS header found in AAC PES", s = !0), f.b.warn("parsing error:" + a), this.observer.emit(i.a.ERROR, i.a.ERROR, {
                    type: n.b.MEDIA_ERROR,
                    details: n.a.FRAG_PARSING_ERROR,
                    fatal: s,
                    reason: a
                }), s)) return;
                if (T(u, this.observer, d, e, this.audioCodec), void 0 !== t.pts) o = t.pts;
                else {
                    if (!h) return void f.b.warn("[tsdemuxer]: AAC PES unknown PTS");
                    var p = b(u.samplerate);
                    o = h.sample.pts + p
                }
                for (var y = 0; e < r;) {
                    if (m(d, e)) {
                        if (e + 5 < r) {
                            var S = E(u, d, e, o, y);
                            if (S) {
                                if (!S.missing) {
                                    e += S.length,
                                    y++;
                                    continue
                                }
                                this.aacOverFlow = S
                            }
                        }
                        break
                    }
                    e++
                }
            },
            e.parseMPEGPES = function(t) {
                var e = t.data,
                r = e.length,
                i = 0,
                n = 0,
                a = t.pts;
                if (void 0 !== a) for (; n < r;) if (M(e, n)) {
                    var s = O(this._audioTrack, e, n, a, i);
                    if (!s) break;
                    n += s.length,
                    i++
                } else n++;
                else f.b.warn("[tsdemuxer]: MPEG PES unknown PTS")
            },
            e.parseID3PES = function(t) {
                void 0 !== t.pts ? this._id3Track.samples.push(t) : f.b.warn("[tsdemuxer]: ID3 PES unknown PTS")
            },
            t
        } ();
        function K(t, e, r, i) {
            return {
                key: t,
                frame: !1,
                pts: e,
                dts: r,
                units: [],
                debug: i,
                length: 0
            }
        }
        function j(t, e) {
            return (31 & t[e + 10]) << 8 | t[e + 11]
        }
        function H(t, e, r, i) {
            var n = {
                audio: -1,
                avc: -1,
                id3: -1,
                isAAC: !0
            },
            a = e + 3 + ((15 & t[e + 1]) << 8 | t[e + 2]) - 4;
            for (e += 12 + ((15 & t[e + 10]) << 8 | t[e + 11]); e < a;) {
                var s = (31 & t[e + 1]) << 8 | t[e + 2];
                switch (t[e]) {
                case 207:
                    if (!i) {
                        f.b.log("ADTS AAC with AES-128-CBC frame encryption found in unencrypted stream");
                        break
                    }
                case 15:
                    -1 === n.audio && (n.audio = s);
                    break;
                case 21:
                    -1 === n.id3 && (n.id3 = s);
                    break;
                case 219:
                    if (!i) {
                        f.b.log("H.264 with AES-128-CBC slice encryption found in unencrypted stream");
                        break
                    }
                case 27:
                    -1 === n.avc && (n.avc = s);
                    break;
                case 3:
                case 4:
                    r ? -1 === n.audio && (n.audio = s, n.isAAC = !1) : f.b.log("MPEG audio found, not supported in this browser");
                    break;
                case 36:
                    f.b.warn("Unsupported HEVC stream type found")
                }
                e += 5 + ((15 & t[e + 3]) << 8 | t[e + 4])
            }
            return n
        }
        function V(t) {
            var e, r, i, n, a, s = 0,
            o = t.data;
            if (!t || 0 === t.size) return null;
            for (; o[0].length < 19 && o.length > 1;) {
                var l = new Uint8Array(o[0].length + o[1].length);
                l.set(o[0]),
                l.set(o[1], o[0].length),
                o[0] = l,
                o.splice(1, 1)
            }
            if (1 === ((e = o[0])[0] << 16) + (e[1] << 8) + e[2]) {
                if ((r = (e[4] << 8) + e[5]) && r > t.size - 6) return null;
                var u = e[7];
                192 & u && (n = 536870912 * (14 & e[9]) + 4194304 * (255 & e[10]) + 16384 * (254 & e[11]) + 128 * (255 & e[12]) + (254 & e[13]) / 2, 64 & u ? n - (a = 536870912 * (14 & e[14]) + 4194304 * (255 & e[15]) + 16384 * (254 & e[16]) + 128 * (255 & e[17]) + (254 & e[18]) / 2) > 54e5 && (f.b.warn(Math.round((n - a) / 9e4) + "s delta between PTS and DTS, align them"), n = a) : a = n);
                var h = (i = e[8]) + 9;
                if (t.size <= h) return null;
                t.size -= h;
                for (var d = new Uint8Array(t.size), c = 0, g = o.length; c < g; c++) {
                    var v = (e = o[c]).byteLength;
                    if (h) {
                        if (h > v) {
                            h -= v;
                            continue
                        }
                        e = e.subarray(h),
                        v -= h,
                        h = 0
                    }
                    d.set(e, s),
                    s += v
                }
                return r && (r -= i + 3),
                {
                    data: d,
                    pts: n,
                    dts: a,
                    len: r
                }
            }
            return null
        }
        function W(t, e) {
            if (t.units.length && t.frame) {
                if (void 0 === t.pts) {
                    var r = e.samples,
                    i = r.length;
                    if (!i) return void e.dropped++;
                    var n = r[i - 1];
                    t.pts = n.pts,
                    t.dts = n.dts
                }
                e.samples.push(t)
            }
            t.debug.length && f.b.log(t.pts + "/" + t.dts + ":" + t.debug)
        }
        function Y(t, e) {
            var r = t.length;
            if (r > 0) {
                if (e.pts >= t[r - 1].pts) t.push(e);
                else for (var i = r - 1; i >= 0; i--) if (e.pts < t[i].pts) {
                    t.splice(i, 0, e);
                    break
                }
            } else t.push(e)
        }
        function q(t) {
            for (var e = t.byteLength,
            r = [], i = 1; i < e - 2;) 0 === t[i] && 0 === t[i + 1] && 3 === t[i + 2] ? (r.push(i + 2), i += 2) : i++;
            if (0 === r.length) return t;
            var n = e - r.length,
            a = new Uint8Array(n),
            s = 0;
            for (i = 0; i < n; s++, i++) s === r[0] && (s++, r.shift()),
            a[i] = t[s];
            return a
        }
        G.minProbeByteLength = 188;
        var X = G;
        function z(t, e) {
            return (z = Object.setPrototypeOf ||
            function(t, e) {
                return t.__proto__ = e,
                t
            })(t, e)
        }
        var Q = function(t) {
            var e, r;
            function i() {
                return t.apply(this, arguments) || this
            }
            r = t,
            (e = i).prototype = Object.create(r.prototype),
            e.prototype.constructor = e,
            z(e, r);
            var n = i.prototype;
            return n.resetInitSegment = function(e, r, i) {
                t.prototype.resetInitSegment.call(this, e, r, i),
                this._audioTrack = {
                    container: "audio/mpeg",
                    type: "audio",
                    id: 2,
                    pid: -1,
                    sequenceNumber: 0,
                    isAAC: !1,
                    samples: [],
                    manifestCodec: e,
                    duration: i,
                    inputTimeScale: 9e4,
                    dropped: 0
                }
            },
            i.probe = function(t) {
                if (!t) return ! 1;
                for (var e = (o.b(t, 0) || []).length, r = t.length; e < r; e++) if (F(t, e)) return f.b.log("MPEG Audio sync word found !"),
                !0;
                return ! 1
            },
            n.canParse = function(t, e) {
                return function(t, e) {
                    return P(t, e) && 4 <= t.length - e
                } (t, e)
            },
            n.appendFrame = function(t, e, r) {
                if (null !== this.initPTS) return O(t, e, r, this.initPTS, this.frameIndex)
            },
            i
        } (c);
        Q.minProbeByteLength = 4;
        var $ = Q,
        J = r(16),
        Z = r(5),
        tt = function() {
            function t() {
                this.emitInitSegment = !1,
                this.audioCodec = void 0,
                this.videoCodec = void 0,
                this.initData = void 0,
                this.initPTS = void 0,
                this.initTracks = void 0,
                this.lastEndDTS = null
            }
            var e = t.prototype;
            return e.destroy = function() {},
            e.resetTimeStamp = function(t) {
                this.initPTS = t,
                this.lastEndDTS = null
            },
            e.resetNextTimestamp = function() {
                this.lastEndDTS = null
            },
            e.resetInitSegment = function(t, e, r) {
                this.audioCodec = e,
                this.videoCodec = r,
                this.generateInitSegment(t),
                this.emitInitSegment = !0
            },
            e.generateInitSegment = function(t) {
                var e = this.audioCodec,
                r = this.videoCodec;
                if (!t || !t.byteLength) return this.initTracks = void 0,
                void(this.initData = void 0);
                var i = this.initData = Object(l.f)(t);
                e || (e = rt(i.audio, Z.a.AUDIO)),
                r || (r = rt(i.video, Z.a.VIDEO));
                var n = {};
                i.audio && i.video ? n.audiovideo = {
                    container: "video/mp4",
                    codec: e + "," + r,
                    initSegment: t,
                    id: "main"
                }: i.audio ? n.audio = {
                    container: "audio/mp4",
                    codec: e,
                    initSegment: t,
                    id: "audio"
                }: i.video ? n.video = {
                    container: "video/mp4",
                    codec: r,
                    initSegment: t,
                    id: "main"
                }: f.b.warn("[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes."),
                this.initTracks = n
            },
            e.remux = function(t, e, r, i, n) {
                var a = this.initPTS,
                o = this.lastEndDTS,
                u = {
                    audio: void 0,
                    video: void 0,
                    text: i,
                    id3: r,
                    initSegment: void 0
                };
                Object(s.a)(o) || (o = this.lastEndDTS = n || 0);
                var h = e.samples;
                if (!h || !h.length) return u;
                var d = {
                    initPTS: void 0,
                    timescale: 1
                },
                c = this.initData;
                if (c && c.length || (this.generateInitSegment(h), c = this.initData), !c || !c.length) return f.b.warn("[passthrough-remuxer.ts]: Failed to generate initSegment."),
                u;
                this.emitInitSegment && (d.tracks = this.initTracks, this.emitInitSegment = !1),
                Object(s.a)(a) || (this.initPTS = d.initPTS = a = et(c, h, o));
                var g = Object(l.c)(h, c),
                v = o,
                p = g + v;
                Object(l.e)(c, h, a),
                g > 0 ? this.lastEndDTS = p: (f.b.warn("Duration parsed from mp4 should be greater than zero"), this.resetNextTimestamp());
                var m = !!c.audio,
                y = !!c.video,
                T = "";
                m && (T += "audio"),
                y && (T += "video");
                var b = {
                    data1: h,
                    startPTS: v,
                    startDTS: v,
                    endPTS: p,
                    endDTS: p,
                    type: T,
                    hasAudio: m,
                    hasVideo: y,
                    nb: 1,
                    dropped: 0
                };
                return u.audio = "audio" === b.type ? b: void 0,
                u.video = "audio" !== b.type ? b: void 0,
                u.text = i,
                u.id3 = r,
                u.initSegment = d,
                u
            },
            t
        } (),
        et = function(t, e, r) {
            return Object(l.d)(t, e) - r
        };
        function rt(t, e) {
            var r = null == t ? void 0 : t.codec;
            return r && r.length > 4 ? r: "hvc1" === r ? "hvc1.1.c.L120.90": "av01" === r ? "av01.0.04M.08": "avc1" === r || e === Z.a.VIDEO ? "avc1.42e01e": "mp4a.40.5"
        }
        var it, nt = tt,
        at = r(13);
        try {
            it = self.performance.now.bind(self.performance)
        } catch(t) {
            f.b.debug("Unable to use Performance API on this environment"),
            it = self.Date.now
        }
        var st = [{
            demux: X,
            remux: J.a
        },
        {
            demux: D,
            remux: nt
        },
        {
            demux: A,
            remux: J.a
        },
        {
            demux: $,
            remux: J.a
        }],
        ot = 1024;
        st.forEach((function(t) {
            var e = t.demux;
            ot = Math.max(ot, e.minProbeByteLength)
        }));
        var lt = function() {
            function t(t, e, r, i, n) {
                this.observer = void 0,
                this.typeSupported = void 0,
                this.config = void 0,
                this.vendor = void 0,
                this.id = void 0,
                this.demuxer = void 0,
                this.remuxer = void 0,
                this.decrypter = void 0,
                this.probe = void 0,
                this.decryptionPromise = null,
                this.transmuxConfig = void 0,
                this.currentTransmuxState = void 0,
                this.cache = new at.a,
                this.observer = t,
                this.typeSupported = e,
                this.config = r,
                this.vendor = i,
                this.id = n
            }
            var e = t.prototype;
            return e.configure = function(t) {
                this.transmuxConfig = t,
                this.decrypter && this.decrypter.reset()
            },
            e.push = function(t, e, r, i) {
                var n = this,
                a = r.transmuxing;
                a.executeStart = it();
                var s = new Uint8Array(t),
                o = this.cache,
                u = this.config,
                h = this.currentTransmuxState,
                d = this.transmuxConfig;
                i && (this.currentTransmuxState = i);
                var c = function(t, e) {
                    var r = null;
                    t.byteLength > 0 && null != e && null != e.key && null !== e.iv && null != e.method && (r = e);
                    return r
                } (s, e);
                if (c && "AES-128" === c.method) {
                    var f = this.getDecrypter();
                    if (!u.enableSoftwareAES) return this.decryptionPromise = f.webCryptoDecrypt(s, c.key.buffer, c.iv.buffer).then((function(t) {
                        var e = n.push(t, null, r);
                        return n.decryptionPromise = null,
                        e
                    })),
                    this.decryptionPromise;
                    var g = f.softwareDecrypt(s, c.key.buffer, c.iv.buffer);
                    if (!g) return a.executeEnd = it(),
                    ut(r);
                    s = new Uint8Array(g)
                }
                var v = i || h,
                p = v.contiguous,
                m = v.discontinuity,
                y = v.trackSwitch,
                T = v.accurateTimeOffset,
                b = v.timeOffset,
                E = v.initSegmentChange,
                S = d.audioCodec,
                L = d.videoCodec,
                A = d.defaultInitPts,
                R = d.duration,
                D = d.initSegmentData;
                if ((m || y || E) && this.resetInitSegment(D, S, L, R), (m || E) && this.resetInitialTimestamp(A), p || this.resetContiguity(), this.needsProbing(s, m, y)) {
                    if (o.dataLength) {
                        var k = o.flush();
                        s = Object(l.a)(k, s)
                    }
                    this.configureTransmuxer(s, d)
                }
                var _ = this.transmux(s, c, b, T, r),
                I = this.currentTransmuxState;
                return I.contiguous = !0,
                I.discontinuity = !1,
                I.trackSwitch = !1,
                a.executeEnd = it(),
                _
            },
            e.flush = function(t) {
                var e = this,
                r = t.transmuxing;
                r.executeStart = it();
                var a = this.decrypter,
                s = this.cache,
                o = this.currentTransmuxState,
                l = this.decryptionPromise;
                if (l) return l.then((function() {
                    return e.flush(t)
                }));
                var u = [],
                h = o.timeOffset;
                if (a) {
                    var d = a.flush();
                    d && u.push(this.push(d, null, t))
                }
                var c = s.dataLength;
                s.reset();
                var f = this.demuxer,
                g = this.remuxer;
                if (!f || !g) return c >= ot && this.observer.emit(i.a.ERROR, i.a.ERROR, {
                    type: n.b.MEDIA_ERROR,
                    details: n.a.FRAG_PARSING_ERROR,
                    fatal: !0,
                    reason: "no demux matching with content found"
                }),
                r.executeEnd = it(),
                [ut(t)];
                var v = f.flush(h);
                return ht(v) ? v.then((function(r) {
                    return e.flushRemux(u, r, t),
                    u
                })) : (this.flushRemux(u, v, t), u)
            },
            e.flushRemux = function(t, e, r) {
                var i = e.audioTrack,
                n = e.avcTrack,
                a = e.id3Track,
                s = e.textTrack,
                o = this.currentTransmuxState,
                l = o.accurateTimeOffset,
                u = o.timeOffset;
                f.b.log("[transmuxer.ts]: Flushed fragment " + r.sn + (r.part > -1 ? " p: " + r.part: "") + " of level " + r.level);
                var h = this.remuxer.remux(i, n, a, s, u, l, !0, this.id);
                t.push({
                    remuxResult: h,
                    chunkMeta: r
                }),
                r.transmuxing.executeEnd = it()
            },
            e.resetInitialTimestamp = function(t) {
                var e = this.demuxer,
                r = this.remuxer;
                e && r && (e.resetTimeStamp(t), r.resetTimeStamp(t))
            },
            e.resetContiguity = function() {
                var t = this.demuxer,
                e = this.remuxer;
                t && e && (t.resetContiguity(), e.resetNextTimestamp())
            },
            e.resetInitSegment = function(t, e, r, i) {
                var n = this.demuxer,
                a = this.remuxer;
                n && a && (n.resetInitSegment(e, r, i), a.resetInitSegment(t, e, r))
            },
            e.destroy = function() {
                this.demuxer && (this.demuxer.destroy(), this.demuxer = void 0),
                this.remuxer && (this.remuxer.destroy(), this.remuxer = void 0)
            },
            e.transmux = function(t, e, r, i, n) {
                return e && "SAMPLE-AES" === e.method ? this.transmuxSampleAes(t, e, r, i, n) : this.transmuxUnencrypted(t, r, i, n)
            },
            e.transmuxUnencrypted = function(t, e, r, i) {
                var n = this.demuxer.demux(t, e, !1, !this.config.progressive),
                a = n.audioTrack,
                s = n.avcTrack,
                o = n.id3Track,
                l = n.textTrack;
                return {
                    remuxResult: this.remuxer.remux(a, s, o, l, e, r, !1, this.id),
                    chunkMeta: i
                }
            },
            e.transmuxSampleAes = function(t, e, r, i, n) {
                var a = this;
                return this.demuxer.demuxSampleAes(t, e, r).then((function(t) {
                    return {
                        remuxResult: a.remuxer.remux(t.audioTrack, t.avcTrack, t.id3Track, t.textTrack, r, i, !1, a.id),
                        chunkMeta: n
                    }
                }))
            },
            e.configureTransmuxer = function(t, e) {
                for (var r, i = this.config,
                n = this.observer,
                a = this.typeSupported,
                s = this.vendor,
                o = e.audioCodec,
                l = e.defaultInitPts,
                u = e.duration,
                h = e.initSegmentData,
                d = e.videoCodec,
                c = 0,
                g = st.length; c < g; c++) if (st[c].demux.probe(t)) {
                    r = st[c];
                    break
                }
                r || (f.b.warn("Failed to find demuxer by probing frag, treating as mp4 passthrough"), r = {
                    demux: D,
                    remux: nt
                });
                var v = this.demuxer,
                p = this.remuxer,
                m = r.remux,
                y = r.demux;
                p && p instanceof m || (this.remuxer = new m(n, i, a, s)),
                v && v instanceof y || (this.demuxer = new y(n, i, a), this.probe = y.probe),
                this.resetInitSegment(h, o, d, u),
                this.resetInitialTimestamp(l)
            },
            e.needsProbing = function(t, e, r) {
                return ! this.demuxer || !this.remuxer || e || r
            },
            e.getDecrypter = function() {
                var t = this.decrypter;
                return t || (t = this.decrypter = new a.a(this.observer, this.config)),
                t
            },
            t
        } ();
        var ut = function(t) {
            return {
                remuxResult: {},
                chunkMeta: t
            }
        };
        function ht(t) {
            return "then" in t && t.then instanceof Function
        }
        var dt = function(t, e, r, i, n) {
            this.audioCodec = void 0,
            this.videoCodec = void 0,
            this.initSegmentData = void 0,
            this.duration = void 0,
            this.defaultInitPts = void 0,
            this.audioCodec = t,
            this.videoCodec = e,
            this.initSegmentData = r,
            this.duration = i,
            this.defaultInitPts = n
        },
        ct = function(t, e, r, i, n, a) {
            this.discontinuity = void 0,
            this.contiguous = void 0,
            this.accurateTimeOffset = void 0,
            this.trackSwitch = void 0,
            this.timeOffset = void 0,
            this.initSegmentChange = void 0,
            this.discontinuity = t,
            this.contiguous = e,
            this.accurateTimeOffset = r,
            this.trackSwitch = i,
            this.timeOffset = n,
            this.initSegmentChange = a
        }
    },
    13 : function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return i
        }));
        var i = function() {
            function t() {
                this.chunks = [],
                this.dataLength = 0
            }
            var e = t.prototype;
            return e.push = function(t) {
                this.chunks.push(t),
                this.dataLength += t.length
            },
            e.flush = function() {
                var t, e = this.chunks,
                r = this.dataLength;
                return e.length ? (t = 1 === e.length ? e[0] : function(t, e) {
                    for (var r = new Uint8Array(e), i = 0, n = 0; n < t.length; n++) {
                        var a = t[n];
                        r.set(a, i),
                        i += a.length
                    }
                    return r
                } (e, r), this.reset(), t) : new Uint8Array(0)
            },
            e.reset = function() {
                this.chunks.length = 0,
                this.dataLength = 0
            },
            t
        } ()
    },
    5 : function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return i
        })),
        r.d(e, "b", (function() {
            return g
        })),
        r.d(e, "c", (function() {
            return v
        }));
        var i, n = r(3),
        a = r(11),
        s = r(1),
        o = r(17),
        l = r(12);
        function u(t, e) {
            t.prototype = Object.create(e.prototype),
            t.prototype.constructor = t,
            h(t, e)
        }
        function h(t, e) {
            return (h = Object.setPrototypeOf ||
            function(t, e) {
                return t.__proto__ = e,
                t
            })(t, e)
        }
        function d(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value" in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        function c(t, e, r) {
            return e && d(t.prototype, e),
            r && d(t, r),
            t
        } !
        function(t) {
            t.AUDIO = "audio",
            t.VIDEO = "video",
            t.AUDIOVIDEO = "audiovideo"
        } (i || (i = {}));
        var f = function() {
            function t(t) {
                var e;
                this._byteRange = null,
                this._url = null,
                this.baseurl = void 0,
                this.relurl = void 0,
                this.elementaryStreams = ((e = {})[i.AUDIO] = null, e[i.VIDEO] = null, e[i.AUDIOVIDEO] = null, e),
                this.baseurl = t
            }
            return t.prototype.setByteRange = function(t, e) {
                var r = t.split("@", 2),
                i = [];
                1 === r.length ? i[0] = e ? e.byteRangeEndOffset: 0 : i[0] = parseInt(r[1]),
                i[1] = parseInt(r[0]) + i[0],
                this._byteRange = i
            },
            c(t, [{
                key: "byteRange",
                get: function() {
                    return this._byteRange ? this._byteRange: []
                }
            },
            {
                key: "byteRangeStartOffset",
                get: function() {
                    return this.byteRange[0]
                }
            },
            {
                key: "byteRangeEndOffset",
                get: function() {
                    return this.byteRange[1]
                }
            },
            {
                key: "url",
                get: function() {
                    return ! this._url && this.baseurl && this.relurl && (this._url = Object(a.buildAbsoluteURL)(this.baseurl, this.relurl, {
                        alwaysNormalize: !0
                    })),
                    this._url || ""
                },
                set: function(t) {
                    this._url = t
                }
            }]),
            t
        } (),
        g = function(t) {
            function e(e, r) {
                var i;
                return (i = t.call(this, r) || this)._decryptdata = null,
                i.rawProgramDateTime = null,
                i.programDateTime = null,
                i.tagList = [],
                i.duration = 0,
                i.sn = 0,
                i.levelkey = void 0,
                i.type = void 0,
                i.loader = null,
                i.level = -1,
                i.cc = 0,
                i.startPTS = void 0,
                i.endPTS = void 0,
                i.appendedPTS = void 0,
                i.startDTS = void 0,
                i.endDTS = void 0,
                i.start = 0,
                i.deltaPTS = void 0,
                i.maxStartPTS = void 0,
                i.minEndPTS = void 0,
                i.stats = new l.a,
                i.urlId = 0,
                i.data = void 0,
                i.bitrateTest = !1,
                i.title = null,
                i.initSegment = null,
                i.type = e,
                i
            }
            u(e, t);
            var r = e.prototype;
            return r.createInitializationVector = function(t) {
                for (var e = new Uint8Array(16), r = 12; r < 16; r++) e[r] = t >> 8 * (15 - r) & 255;
                return e
            },
            r.setDecryptDataFromLevelKey = function(t, e) {
                var r = t;
                return "AES-128" === (null == t ? void 0 : t.method) && t.uri && !t.iv && ((r = o.a.fromURI(t.uri)).method = t.method, r.iv = this.createInitializationVector(e), r.keyFormat = "identity"),
                r
            },
            r.setElementaryStreamInfo = function(t, e, r, i, n, a) {
                void 0 === a && (a = !1);
                var s = this.elementaryStreams,
                o = s[t];
                o ? (o.startPTS = Math.min(o.startPTS, e), o.endPTS = Math.max(o.endPTS, r), o.startDTS = Math.min(o.startDTS, i), o.endDTS = Math.max(o.endDTS, n)) : s[t] = {
                    startPTS: e,
                    endPTS: r,
                    startDTS: i,
                    endDTS: n,
                    partial: a
                }
            },
            r.clearElementaryStreamInfo = function() {
                var t = this.elementaryStreams;
                t[i.AUDIO] = null,
                t[i.VIDEO] = null,
                t[i.AUDIOVIDEO] = null
            },
            c(e, [{
                key: "decryptdata",
                get: function() {
                    if (!this.levelkey && !this._decryptdata) return null;
                    if (!this._decryptdata && this.levelkey) {
                        var t = this.sn;
                        "number" != typeof t && (this.levelkey && "AES-128" === this.levelkey.method && !this.levelkey.iv && s.b.warn('missing IV for initialization segment with method="' + this.levelkey.method + '" - compliance issue'), t = 0),
                        this._decryptdata = this.setDecryptDataFromLevelKey(this.levelkey, t)
                    }
                    return this._decryptdata
                }
            },
            {
                key: "end",
                get: function() {
                    return this.start + this.duration
                }
            },
            {
                key: "endProgramDateTime",
                get: function() {
                    if (null === this.programDateTime) return null;
                    if (!Object(n.a)(this.programDateTime)) return null;
                    var t = Object(n.a)(this.duration) ? this.duration: 0;
                    return this.programDateTime + 1e3 * t
                }
            },
            {
                key: "encrypted",
                get: function() {
                    var t;
                    return ! (null === (t = this.decryptdata) || void 0 === t || !t.keyFormat || !this.decryptdata.uri)
                }
            }]),
            e
        } (f),
        v = function(t) {
            function e(e, r, i, n, a) {
                var s; (s = t.call(this, i) || this).fragOffset = 0,
                s.duration = 0,
                s.gap = !1,
                s.independent = !1,
                s.relurl = void 0,
                s.fragment = void 0,
                s.index = void 0,
                s.stats = new l.a,
                s.duration = e.decimalFloatingPoint("DURATION"),
                s.gap = e.bool("GAP"),
                s.independent = e.bool("INDEPENDENT"),
                s.relurl = e.enumeratedString("URI"),
                s.fragment = r,
                s.index = n;
                var o = e.enumeratedString("BYTERANGE");
                return o && s.setByteRange(o, a),
                a && (s.fragOffset = a.fragOffset + a.duration),
                s
            }
            return u(e, t),
            c(e, [{
                key: "start",
                get: function() {
                    return this.fragment.start + this.fragOffset
                }
            },
            {
                key: "end",
                get: function() {
                    return this.start + this.duration
                }
            },
            {
                key: "loaded",
                get: function() {
                    var t = this.elementaryStreams;
                    return !! (t.audio || t.video || t.audiovideo)
                }
            }]),
            e
        } (f)
    },
    12 : function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return i
        }));
        var i = function() {
            this.aborted = !1,
            this.loaded = 0,
            this.retry = 0,
            this.total = 0,
            this.chunkCount = 0,
            this.bwEstimate = 0,
            this.loading = {
                start: 0,
                first: 0,
                end: 0
            },
            this.parsing = {
                start: 0,
                end: 0
            },
            this.buffering = {
                start: 0,
                first: 0,
                end: 0
            }
        }
    },
    17 : function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return a
        }));
        var i = r(11);
        function n(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value" in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        var a = function() {
            function t(t, e) {
                this._uri = null,
                this.method = null,
                this.keyFormat = null,
                this.keyFormatVersions = null,
                this.keyID = null,
                this.key = null,
                this.iv = null,
                this._uri = e ? Object(i.buildAbsoluteURL)(t, e, {
                    alwaysNormalize: !0
                }) : t
            }
            var e, r, a;
            return t.fromURL = function(e, r) {
                return new t(e, r)
            },
            t.fromURI = function(e) {
                return new t(e)
            },
            e = t,
            (r = [{
                key: "uri",
                get: function() {
                    return this._uri
                }
            }]) && n(e.prototype, r),
            a && n(e, a),
            t
        } ()
    },
    11 : function(t, e, r) {
        var i, n, a, s, o;
        i = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/?#]*\/)*[^;?#]*)?(;[^?#]*)?(\?[^#]*)?(#[^]*)?$/,
        n = /^([^\/?#]*)([^]*)$/,
        a = /(?:\/|^)\.(?=\/)/g,
        s = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g,
        o = {
            buildAbsoluteURL: function(t, e, r) {
                if (r = r || {},
                t = t.trim(), !(e = e.trim())) {
                    if (!r.alwaysNormalize) return t;
                    var i = o.parseURL(t);
                    if (!i) throw new Error("Error trying to parse base URL.");
                    return i.path = o.normalizePath(i.path),
                    o.buildURLFromParts(i)
                }
                var a = o.parseURL(e);
                if (!a) throw new Error("Error trying to parse relative URL.");
                if (a.scheme) return r.alwaysNormalize ? (a.path = o.normalizePath(a.path), o.buildURLFromParts(a)) : e;
                var s = o.parseURL(t);
                if (!s) throw new Error("Error trying to parse base URL.");
                if (!s.netLoc && s.path && "/" !== s.path[0]) {
                    var l = n.exec(s.path);
                    s.netLoc = l[1],
                    s.path = l[2]
                }
                s.netLoc && !s.path && (s.path = "/");
                var u = {
                    scheme: s.scheme,
                    netLoc: a.netLoc,
                    path: null,
                    params: a.params,
                    query: a.query,
                    fragment: a.fragment
                };
                if (!a.netLoc && (u.netLoc = s.netLoc, "/" !== a.path[0])) if (a.path) {
                    var h = s.path,
                    d = h.substring(0, h.lastIndexOf("/") + 1) + a.path;
                    u.path = o.normalizePath(d)
                } else u.path = s.path,
                a.params || (u.params = s.params, a.query || (u.query = s.query));
                return null === u.path && (u.path = r.alwaysNormalize ? o.normalizePath(a.path) : a.path),
                o.buildURLFromParts(u)
            },
            parseURL: function(t) {
                var e = i.exec(t);
                return e ? {
                    scheme: e[1] || "",
                    netLoc: e[2] || "",
                    path: e[3] || "",
                    params: e[4] || "",
                    query: e[5] || "",
                    fragment: e[6] || ""
                }: null
            },
            normalizePath: function(t) {
                for (t = t.split("").reverse().join("").replace(a, ""); t.length !== (t = t.replace(s, "")).length;);
                return t.split("").reverse().join("")
            },
            buildURLFromParts: function(t) {
                return t.scheme + t.netLoc + t.path + t.params + t.query + t.fragment
            }
        },
        t.exports = o
    },
    3 : function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return i
        }));
        var i = Number.isFinite ||
        function(t) {
            return "number" == typeof t && isFinite(t)
        };
        Number.MAX_SAFE_INTEGER
    },
    16 : function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return m
        })),
        r.d(e, "b", (function() {
            return y
        }));
        var i = r(3),
        n = function() {
            function t() {}
            return t.getSilentFrame = function(t, e) {
                switch (t) {
                case "mp4a.40.2":
                    if (1 === e) return new Uint8Array([0, 200, 0, 128, 35, 128]);
                    if (2 === e) return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
                    if (3 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
                    if (4 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
                    if (5 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
                    if (6 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
                    break;
                default:
                    if (1 === e) return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                    if (2 === e) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                    if (3 === e) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94])
                }
            },
            t
        } (),
        a = Math.pow(2, 32) - 1,
        s = function() {
            function t() {}
            return t.init = function() {
                var e;
                for (e in t.types = {
                    avc1: [],
                    avcC: [],
                    btrt: [],
                    dinf: [],
                    dref: [],
                    esds: [],
                    ftyp: [],
                    hdlr: [],
                    mdat: [],
                    mdhd: [],
                    mdia: [],
                    mfhd: [],
                    minf: [],
                    moof: [],
                    moov: [],
                    mp4a: [],
                    ".mp3": [],
                    mvex: [],
                    mvhd: [],
                    pasp: [],
                    sdtp: [],
                    stbl: [],
                    stco: [],
                    stsc: [],
                    stsd: [],
                    stsz: [],
                    stts: [],
                    tfdt: [],
                    tfhd: [],
                    traf: [],
                    trak: [],
                    trun: [],
                    trex: [],
                    tkhd: [],
                    vmhd: [],
                    smhd: []
                },
                t.types) t.types.hasOwnProperty(e) && (t.types[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]);
                var r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),
                i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);
                t.HDLR_TYPES = {
                    video: r,
                    audio: i
                };
                var n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]),
                a = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
                t.STTS = t.STSC = t.STCO = a,
                t.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                t.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]),
                t.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]),
                t.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);
                var s = new Uint8Array([105, 115, 111, 109]),
                o = new Uint8Array([97, 118, 99, 49]),
                l = new Uint8Array([0, 0, 0, 1]);
                t.FTYP = t.box(t.types.ftyp, s, l, s, o),
                t.DINF = t.box(t.types.dinf, t.box(t.types.dref, n))
            },
            t.box = function(t) {
                for (var e = 8,
                r = arguments.length,
                i = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) i[n - 1] = arguments[n];
                for (var a = i.length,
                s = a; a--;) e += i[a].byteLength;
                var o = new Uint8Array(e);
                for (o[0] = e >> 24 & 255, o[1] = e >> 16 & 255, o[2] = e >> 8 & 255, o[3] = 255 & e, o.set(t, 4), a = 0, e = 8; a < s; a++) o.set(i[a], e),
                e += i[a].byteLength;
                return o
            },
            t.hdlr = function(e) {
                return t.box(t.types.hdlr, t.HDLR_TYPES[e])
            },
            t.mdat = function(e) {
                return t.box(t.types.mdat, e)
            },
            t.mdhd = function(e, r) {
                r *= e;
                var i = Math.floor(r / (a + 1)),
                n = Math.floor(r % (a + 1));
                return t.box(t.types.mdhd, new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, 85, 196, 0, 0]))
            },
            t.mdia = function(e) {
                return t.box(t.types.mdia, t.mdhd(e.timescale, e.duration), t.hdlr(e.type), t.minf(e))
            },
            t.mfhd = function(e) {
                return t.box(t.types.mfhd, new Uint8Array([0, 0, 0, 0, e >> 24, e >> 16 & 255, e >> 8 & 255, 255 & e]))
            },
            t.minf = function(e) {
                return "audio" === e.type ? t.box(t.types.minf, t.box(t.types.smhd, t.SMHD), t.DINF, t.stbl(e)) : t.box(t.types.minf, t.box(t.types.vmhd, t.VMHD), t.DINF, t.stbl(e))
            },
            t.moof = function(e, r, i) {
                return t.box(t.types.moof, t.mfhd(e), t.traf(i, r))
            },
            t.moov = function(e) {
                for (var r = e.length,
                i = []; r--;) i[r] = t.trak(e[r]);
                return t.box.apply(null, [t.types.moov, t.mvhd(e[0].timescale, e[0].duration)].concat(i).concat(t.mvex(e)))
            },
            t.mvex = function(e) {
                for (var r = e.length,
                i = []; r--;) i[r] = t.trex(e[r]);
                return t.box.apply(null, [t.types.mvex].concat(i))
            },
            t.mvhd = function(e, r) {
                r *= e;
                var i = Math.floor(r / (a + 1)),
                n = Math.floor(r % (a + 1)),
                s = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
                return t.box(t.types.mvhd, s)
            },
            t.sdtp = function(e) {
                var r, i, n = e.samples || [],
                a = new Uint8Array(4 + n.length);
                for (r = 0; r < n.length; r++) i = n[r].flags,
                a[r + 4] = i.dependsOn << 4 | i.isDependedOn << 2 | i.hasRedundancy;
                return t.box(t.types.sdtp, a)
            },
            t.stbl = function(e) {
                return t.box(t.types.stbl, t.stsd(e), t.box(t.types.stts, t.STTS), t.box(t.types.stsc, t.STSC), t.box(t.types.stsz, t.STSZ), t.box(t.types.stco, t.STCO))
            },
            t.avc1 = function(e) {
                var r, i, n, a = [],
                s = [];
                for (r = 0; r < e.sps.length; r++) n = (i = e.sps[r]).byteLength,
                a.push(n >>> 8 & 255),
                a.push(255 & n),
                a = a.concat(Array.prototype.slice.call(i));
                for (r = 0; r < e.pps.length; r++) n = (i = e.pps[r]).byteLength,
                s.push(n >>> 8 & 255),
                s.push(255 & n),
                s = s.concat(Array.prototype.slice.call(i));
                var o = t.box(t.types.avcC, new Uint8Array([1, a[3], a[4], a[5], 255, 224 | e.sps.length].concat(a).concat([e.pps.length]).concat(s))),
                l = e.width,
                u = e.height,
                h = e.pixelRatio[0],
                d = e.pixelRatio[1];
                return t.box(t.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, l >> 8 & 255, 255 & l, u >> 8 & 255, 255 & u, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), o, t.box(t.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), t.box(t.types.pasp, new Uint8Array([h >> 24, h >> 16 & 255, h >> 8 & 255, 255 & h, d >> 24, d >> 16 & 255, d >> 8 & 255, 255 & d])))
            },
            t.esds = function(t) {
                var e = t.config.length;
                return new Uint8Array([0, 0, 0, 0, 3, 23 + e, 0, 1, 0, 4, 15 + e, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([e]).concat(t.config).concat([6, 1, 2]))
            },
            t.mp4a = function(e) {
                var r = e.samplerate;
                return t.box(t.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, e.channelCount, 0, 16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0]), t.box(t.types.esds, t.esds(e)))
            },
            t.mp3 = function(e) {
                var r = e.samplerate;
                return t.box(t.types[".mp3"], new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, e.channelCount, 0, 16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0]))
            },
            t.stsd = function(e) {
                return "audio" === e.type ? e.isAAC || "mp3" !== e.codec ? t.box(t.types.stsd, t.STSD, t.mp4a(e)) : t.box(t.types.stsd, t.STSD, t.mp3(e)) : t.box(t.types.stsd, t.STSD, t.avc1(e))
            },
            t.tkhd = function(e) {
                var r = e.id,
                i = e.duration * e.timescale,
                n = e.width,
                s = e.height,
                o = Math.floor(i / (a + 1)),
                l = Math.floor(i % (a + 1));
                return t.box(t.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 0, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o, l >> 24, l >> 16 & 255, l >> 8 & 255, 255 & l, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, n >> 8 & 255, 255 & n, 0, 0, s >> 8 & 255, 255 & s, 0, 0]))
            },
            t.traf = function(e, r) {
                var i = t.sdtp(e),
                n = e.id,
                s = Math.floor(r / (a + 1)),
                o = Math.floor(r % (a + 1));
                return t.box(t.types.traf, t.box(t.types.tfhd, new Uint8Array([0, 0, 0, 0, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n])), t.box(t.types.tfdt, new Uint8Array([1, 0, 0, 0, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o])), t.trun(e, i.length + 16 + 20 + 8 + 16 + 8 + 8), i)
            },
            t.trak = function(e) {
                return e.duration = e.duration || 4294967295,
                t.box(t.types.trak, t.tkhd(e), t.mdia(e))
            },
            t.trex = function(e) {
                var r = e.id;
                return t.box(t.types.trex, new Uint8Array([0, 0, 0, 0, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]))
            },
            t.trun = function(e, r) {
                var i, n, a, s, o, l, u = e.samples || [],
                h = u.length,
                d = 12 + 16 * h,
                c = new Uint8Array(d);
                for (r += 8 + d, c.set([0, 0, 15, 1, h >>> 24 & 255, h >>> 16 & 255, h >>> 8 & 255, 255 & h, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r], 0), i = 0; i < h; i++) a = (n = u[i]).duration,
                s = n.size,
                o = n.flags,
                l = n.cts,
                c.set([a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, 255 & a, s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, 255 & s, o.isLeading << 2 | o.dependsOn, o.isDependedOn << 6 | o.hasRedundancy << 4 | o.paddingValue << 1 | o.isNonSync, 61440 & o.degradPrio, 15 & o.degradPrio, l >>> 24 & 255, l >>> 16 & 255, l >>> 8 & 255, 255 & l], 12 + 16 * i);
                return t.box(t.types.trun, c)
            },
            t.initSegment = function(e) {
                t.types || t.init();
                var r = t.moov(e),
                i = new Uint8Array(t.FTYP.byteLength + r.byteLength);
                return i.set(t.FTYP),
                i.set(r, t.FTYP.byteLength),
                i
            },
            t
        } ();
        s.types = void 0,
        s.HDLR_TYPES = void 0,
        s.STTS = void 0,
        s.STSC = void 0,
        s.STCO = void 0,
        s.STSZ = void 0,
        s.VMHD = void 0,
        s.SMHD = void 0,
        s.STSD = void 0,
        s.FTYP = void 0,
        s.DINF = void 0;
        var o = s,
        l = r(0),
        u = r(2),
        h = r(1),
        d = r(4),
        c = r(8);
        function f() {
            return (f = Object.assign ||
            function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
                }
                return t
            }).apply(this, arguments)
        }
        var g = null,
        v = null,
        p = !1,
        m = function() {
            function t(t, e, r, i) {
                if (void 0 === i && (i = ""), this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.ISGenerated = !1, this._initPTS = void 0, this._initDTS = void 0, this.nextAvcDts = null, this.nextAudioPts = null, this.isAudioContiguous = !1, this.isVideoContiguous = !1, this.observer = t, this.config = e, this.typeSupported = r, this.ISGenerated = !1, null === g) {
                    var n = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
                    g = n ? parseInt(n[1]) : 0
                }
                if (null === v) {
                    var a = navigator.userAgent.match(/Safari\/(\d+)/i);
                    v = a ? parseInt(a[1]) : 0
                }
                p = !!g && g < 75 || !!v && v < 600
            }
            var e = t.prototype;
            return e.destroy = function() {},
            e.resetTimeStamp = function(t) {
                h.b.log("[mp4-remuxer]: initPTS & initDTS reset"),
                this._initPTS = this._initDTS = t
            },
            e.resetNextTimestamp = function() {
                h.b.log("[mp4-remuxer]: reset next timestamp"),
                this.isVideoContiguous = !1,
                this.isAudioContiguous = !1
            },
            e.resetInitSegment = function() {
                h.b.log("[mp4-remuxer]: ISGenerated flag reset"),
                this.ISGenerated = !1
            },
            e.getVideoStartPts = function(t) {
                var e = !1,
                r = t.reduce((function(t, r) {
                    var i = r.pts - t;
                    return i < -4294967296 ? (e = !0, y(t, r.pts)) : i > 0 ? t: r.pts
                }), t[0].pts);
                return e && h.b.debug("PTS rollover detected"),
                r
            },
            e.remux = function(t, e, r, i, n, a, s, o) {
                var l, u, c, f, g, v, p = n,
                m = n,
                T = t.pid > -1,
                b = e.pid > -1,
                E = e.samples.length,
                S = t.samples.length > 0,
                L = E > 1;
                if ((!T || S) && (!b || L) || this.ISGenerated || s) {
                    this.ISGenerated || (c = this.generateIS(t, e, n));
                    var A = this.isVideoContiguous,
                    R = -1;
                    if (L && (R = function(t) {
                        for (var e = 0; e < t.length; e++) if (t[e].key) return e;
                        return - 1
                    } (e.samples), !A && this.config.forceKeyFrameOnDiscontinuity)) if (v = !0, R > 0) {
                        h.b.warn("[mp4-remuxer]: Dropped " + R + " out of " + E + " video samples due to a missing keyframe");
                        var D = this.getVideoStartPts(e.samples);
                        e.samples = e.samples.slice(R),
                        e.dropped += R,
                        m += (e.samples[0].pts - D) / (e.timescale || 9e4)
                    } else - 1 === R && (h.b.warn("[mp4-remuxer]: No keyframe found out of " + E + " video samples"), v = !1);
                    if (this.ISGenerated) {
                        if (S && L) {
                            var k = this.getVideoStartPts(e.samples),
                            _ = (y(t.samples[0].pts, k) - k) / e.inputTimeScale;
                            p += Math.max(0, _),
                            m += Math.max(0, -_)
                        }
                        if (S) {
                            if (t.samplerate || (h.b.warn("[mp4-remuxer]: regenerate InitSegment as audio detected"), c = this.generateIS(t, e, n)), u = this.remuxAudio(t, p, this.isAudioContiguous, a, b || L || o === d.b.AUDIO ? m: void 0), L) {
                                var I = u ? u.endPTS - u.startPTS: 0;
                                e.inputTimeScale || (h.b.warn("[mp4-remuxer]: regenerate InitSegment as video detected"), c = this.generateIS(t, e, n)),
                                l = this.remuxVideo(e, m, A, I)
                            }
                        } else L && (l = this.remuxVideo(e, m, A, 0));
                        l && (l.firstKeyFrame = R, l.independent = -1 !== R)
                    }
                }
                return this.ISGenerated && (r.samples.length && (g = this.remuxID3(r, n)), i.samples.length && (f = this.remuxText(i, n))),
                {
                    audio: u,
                    video: l,
                    initSegment: c,
                    independent: v,
                    text: f,
                    id3: g
                }
            },
            e.generateIS = function(t, e, r) {
                var n, a, s, l = t.samples,
                u = e.samples,
                h = this.typeSupported,
                d = {},
                c = !Object(i.a)(this._initPTS),
                f = "audio/mp4";
                if (c && (n = a = 1 / 0), t.config && l.length && (t.timescale = t.samplerate, t.isAAC || (h.mpeg ? (f = "audio/mpeg", t.codec = "") : h.mp3 && (t.codec = "mp3")), d.audio = {
                    id: "audio",
                    container: f,
                    codec: t.codec,
                    initSegment: !t.isAAC && h.mpeg ? new Uint8Array(0) : o.initSegment([t]),
                    metadata: {
                        channelCount: t.channelCount
                    }
                },
                c && (s = t.inputTimeScale, n = a = l[0].pts - Math.round(s * r))), e.sps && e.pps && u.length && (e.timescale = e.inputTimeScale, d.video = {
                    id: "main",
                    container: "video/mp4",
                    codec: e.codec,
                    initSegment: o.initSegment([e]),
                    metadata: {
                        width: e.width,
                        height: e.height
                    }
                },
                c)) {
                    s = e.inputTimeScale;
                    var g = this.getVideoStartPts(u),
                    v = Math.round(s * r);
                    a = Math.min(a, y(u[0].dts, g) - v),
                    n = Math.min(n, g - v)
                }
                if (Object.keys(d).length) return this.ISGenerated = !0,
                c && (this._initPTS = n, this._initDTS = a),
                {
                    tracks: d,
                    initPTS: n,
                    timescale: s
                }
            },
            e.remuxVideo = function(t, e, r, i) {
                var n, a, s, d = t.inputTimeScale,
                v = t.samples,
                m = [],
                b = v.length,
                E = this._initPTS,
                S = this.nextAvcDts,
                L = 8,
                A = Number.POSITIVE_INFINITY,
                R = Number.NEGATIVE_INFINITY,
                D = 0,
                k = !1;
                r && null !== S || (S = e * d - (v[0].pts - y(v[0].dts, v[0].pts)));
                for (var _ = 0; _ < b; _++) {
                    var I = v[_];
                    if (I.pts = y(I.pts - E, S), I.dts = y(I.dts - E, S), I.dts > I.pts) {
                        D = Math.max(Math.min(D, I.pts - I.dts), -18e3)
                    }
                    I.dts < v[_ > 0 ? _ - 1 : _].dts && (k = !0)
                }
                k && v.sort((function(t, e) {
                    var r = t.dts - e.dts,
                    i = t.pts - e.pts;
                    return r || i
                })),
                a = v[0].dts,
                s = v[v.length - 1].dts;
                var C = Math.round((s - a) / (b - 1));
                if (D < 0) {
                    if (D < -2 * C) {
                        h.b.warn("PTS < DTS detected in video samples, offsetting DTS from PTS by " + Object(c.b)( - C, !0) + " ms");
                        for (var w = D,
                        O = 0; O < b; O++) v[O].dts = w = Math.max(w, v[O].pts - C),
                        v[O].pts = Math.max(w, v[O].pts)
                    } else {
                        h.b.warn("PTS < DTS detected in video samples, shifting DTS by " + Object(c.b)(D, !0) + " ms to overcome this issue");
                        for (var x = 0; x < b; x++) v[x].dts = v[x].dts + D
                    }
                    a = v[0].dts
                }
                if (r) {
                    var P = a - S,
                    M = P > C;
                    if (M || P < -1) {
                        M ? h.b.warn("AVC: " + Object(c.b)(P, !0) + " ms (" + P + "dts) hole between fragments detected, filling it") : h.b.warn("AVC: " + Object(c.b)( - P, !0) + " ms (" + P + "dts) overlapping between fragments detected"),
                        a = S;
                        var F = v[0].pts - P;
                        v[0].dts = a,
                        v[0].pts = F,
                        h.b.log("Video: First PTS/DTS adjusted: " + Object(c.b)(F, !0) + "/" + Object(c.b)(a, !0) + ", delta: " + Object(c.b)(P, !0) + " ms")
                    }
                }
                p && (a = Math.max(0, a));
                for (var N = 0,
                U = 0,
                B = 0; B < b; B++) {
                    for (var G = v[B], K = G.units, j = K.length, H = 0, V = 0; V < j; V++) H += K[V].data.length;
                    U += H,
                    N += j,
                    G.length = H,
                    G.dts = Math.max(G.dts, a),
                    G.pts = Math.max(G.pts, G.dts, 0),
                    A = Math.min(G.pts, A),
                    R = Math.max(G.pts, R)
                }
                s = v[b - 1].dts;
                var W, Y = U + 4 * N + 8;
                try {
                    W = new Uint8Array(Y)
                } catch(t) {
                    return void this.observer.emit(l.a.ERROR, l.a.ERROR, {
                        type: u.b.MUX_ERROR,
                        details: u.a.REMUX_ALLOC_ERROR,
                        fatal: !1,
                        bytes: Y,
                        reason: "fail allocating video mdat " + Y
                    })
                }
                var q = new DataView(W.buffer);
                q.setUint32(0, Y),
                W.set(o.types.mdat, 4);
                for (var X = 0; X < b; X++) {
                    for (var z = v[X], Q = z.units, $ = 0, J = 0, Z = Q.length; J < Z; J++) {
                        var tt = Q[J],
                        et = tt.data,
                        rt = tt.data.byteLength;
                        q.setUint32(L, rt),
                        L += 4,
                        W.set(et, L),
                        L += rt,
                        $ += 4 + rt
                    }
                    if (X < b - 1) n = v[X + 1].dts - z.dts;
                    else {
                        var it = this.config,
                        nt = z.dts - v[X > 0 ? X - 1 : X].dts;
                        if (it.stretchShortVideoTrack && null !== this.nextAudioPts) {
                            var at = Math.floor(it.maxBufferHole * d),
                            st = (i ? A + i * d: this.nextAudioPts) - z.pts;
                            st > at ? ((n = st - nt) < 0 && (n = nt), h.b.log("[mp4-remuxer]: It is approximately " + st / 90 + " ms to the next segment; using duration " + n / 90 + " ms for the last video frame.")) : n = nt
                        } else n = nt
                    }
                    var ot = Math.round(z.pts - z.dts);
                    m.push(new T(z.key, n, $, ot))
                }
                if (m.length && g && g < 70) {
                    var lt = m[0].flags;
                    lt.dependsOn = 2,
                    lt.isNonSync = 0
                }
                this.nextAvcDts = S = s + n,
                this.isVideoContiguous = !0;
                var ut = {
                    data1: o.moof(t.sequenceNumber++, a, f({},
                    t, {
                        samples: m
                    })),
                    data2: W,
                    startPTS: A / d,
                    endPTS: (R + n) / d,
                    startDTS: a / d,
                    endDTS: S / d,
                    type: "video",
                    hasAudio: !1,
                    hasVideo: !0,
                    nb: m.length,
                    dropped: t.dropped
                };
                return t.samples = [],
                t.dropped = 0,
                ut
            },
            e.remuxAudio = function(t, e, r, i, a) {
                var s = t.inputTimeScale,
                d = s / (t.samplerate ? t.samplerate: s),
                c = t.isAAC ? 1024 : 1152,
                g = c * d,
                v = this._initPTS,
                p = !t.isAAC && this.typeSupported.mpeg,
                m = [],
                b = t.samples,
                E = p ? 0 : 8,
                S = this.nextAudioPts || -1,
                L = e * s;
                if (this.isAudioContiguous = r = r || b.length && S > 0 && (i && Math.abs(L - S) < 9e3 || Math.abs(y(b[0].pts - v, L) - S) < 20 * g), b.forEach((function(t) {
                    t.pts = y(t.pts - v, L)
                })), !r || S < 0) {
                    if (! (b = b.filter((function(t) {
                        return t.pts >= 0
                    }))).length) return;
                    S = 0 === a ? 0 : i ? Math.max(0, L) : b[0].pts
                }
                if (t.isAAC) for (var A = void 0 !== a,
                R = this.config.maxAudioFramesDrift,
                D = 0,
                k = S; D < b.length; D++) {
                    var _ = b[D],
                    I = _.pts,
                    C = I - k,
                    w = Math.abs(1e3 * C / s);
                    if (C <= -R * g && A) 0 === D && (h.b.warn("Audio frame @ " + (I / s).toFixed(3) + "s overlaps nextAudioPts by " + Math.round(1e3 * C / s) + " ms."), this.nextAudioPts = S = k = I);
                    else if (C >= R * g && w < 1e4 && A) {
                        var O = Math.round(C / g); (k = I - O * g) < 0 && (O--, k += g),
                        0 === D && (this.nextAudioPts = S = k),
                        h.b.warn("[mp4-remuxer]: Injecting " + O + " audio frame @ " + (k / s).toFixed(3) + "s due to " + Math.round(1e3 * C / s) + " ms gap.");
                        for (var x = 0; x < O; x++) {
                            var P = Math.max(k, 0),
                            M = n.getSilentFrame(t.manifestCodec || t.codec, t.channelCount);
                            M || (h.b.log("[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead."), M = _.unit.subarray()),
                            b.splice(D, 0, {
                                unit: M,
                                pts: P
                            }),
                            k += g,
                            D++
                        }
                    }
                    _.pts = k,
                    k += g
                }
                for (var F, N = null,
                U = null,
                B = 0,
                G = b.length; G--;) B += b[G].unit.byteLength;
                for (var K = 0,
                j = b.length; K < j; K++) {
                    var H = b[K],
                    V = H.unit,
                    W = H.pts;
                    if (null !== U) {
                        m[K - 1].duration = Math.round((W - U) / d)
                    } else {
                        if (r && t.isAAC && (W = S), N = W, !(B > 0)) return;
                        B += E;
                        try {
                            F = new Uint8Array(B)
                        } catch(t) {
                            return void this.observer.emit(l.a.ERROR, l.a.ERROR, {
                                type: u.b.MUX_ERROR,
                                details: u.a.REMUX_ALLOC_ERROR,
                                fatal: !1,
                                bytes: B,
                                reason: "fail allocating audio mdat " + B
                            })
                        }
                        p || (new DataView(F.buffer).setUint32(0, B), F.set(o.types.mdat, 4))
                    }
                    F.set(V, E);
                    var Y = V.byteLength;
                    E += Y,
                    m.push(new T(!0, c, Y, 0)),
                    U = W
                }
                var q = m.length;
                if (q) {
                    var X = m[m.length - 1];
                    this.nextAudioPts = S = U + d * X.duration;
                    var z = p ? new Uint8Array(0) : o.moof(t.sequenceNumber++, N / d, f({},
                    t, {
                        samples: m
                    }));
                    t.samples = [];
                    var Q = N / s,
                    $ = S / s,
                    J = {
                        data1: z,
                        data2: F,
                        startPTS: Q,
                        endPTS: $,
                        startDTS: Q,
                        endDTS: $,
                        type: "audio",
                        hasAudio: !0,
                        hasVideo: !1,
                        nb: q
                    };
                    return this.isAudioContiguous = !0,
                    J
                }
            },
            e.remuxEmptyAudio = function(t, e, r, i) {
                var a = t.inputTimeScale,
                s = a / (t.samplerate ? t.samplerate: a),
                o = this.nextAudioPts,
                l = (null !== o ? o: i.startDTS * a) + this._initDTS,
                u = i.endDTS * a + this._initDTS,
                d = 1024 * s,
                c = Math.ceil((u - l) / d),
                f = n.getSilentFrame(t.manifestCodec || t.codec, t.channelCount);
                if (h.b.warn("[mp4-remuxer]: remux empty Audio"), f) {
                    for (var g = [], v = 0; v < c; v++) {
                        var p = l + v * d;
                        g.push({
                            unit: f,
                            pts: p,
                            dts: p
                        })
                    }
                    return t.samples = g,
                    this.remuxAudio(t, e, r, !1)
                }
                h.b.trace("[mp4-remuxer]: Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec")
            },
            e.remuxID3 = function(t, e) {
                var r = t.samples.length;
                if (r) {
                    for (var i = t.inputTimeScale,
                    n = this._initPTS,
                    a = this._initDTS,
                    s = 0; s < r; s++) {
                        var o = t.samples[s];
                        o.pts = y(o.pts - n, e * i) / i,
                        o.dts = y(o.dts - a, e * i) / i
                    }
                    var l = t.samples;
                    return t.samples = [],
                    {
                        samples: l
                    }
                }
            },
            e.remuxText = function(t, e) {
                var r = t.samples.length;
                if (r) {
                    for (var i = t.inputTimeScale,
                    n = this._initPTS,
                    a = 0; a < r; a++) {
                        var s = t.samples[a];
                        s.pts = y(s.pts - n, e * i) / i
                    }
                    t.samples.sort((function(t, e) {
                        return t.pts - e.pts
                    }));
                    var o = t.samples;
                    return t.samples = [],
                    {
                        samples: o
                    }
                }
            },
            t
        } ();
        function y(t, e) {
            var r;
            if (null === e) return t;
            for (r = e < t ? -8589934592 : 8589934592; Math.abs(t - e) > 4294967296;) t += r;
            return t
        }
        var T = function(t, e, r, i) {
            this.size = void 0,
            this.duration = void 0,
            this.cts = void 0,
            this.flags = void 0,
            this.duration = e,
            this.size = r,
            this.cts = i,
            this.flags = new b(t)
        },
        b = function(t) {
            this.isLeading = 0,
            this.isDependedOn = 0,
            this.hasRedundancy = 0,
            this.degradPrio = 0,
            this.dependsOn = 1,
            this.isNonSync = 1,
            this.dependsOn = t ? 2 : 1,
            this.isNonSync = t ? 0 : 1
        }
    },
    8 : function(t, e, r) {
        "use strict";
        r.d(e, "c", (function() {
            return n
        })),
        r.d(e, "b", (function() {
            return a
        })),
        r.d(e, "a", (function() {
            return s
        }));
        function i(t, e, r, i) {
            void 0 === r && (r = 1),
            void 0 === i && (i = !1);
            var n = t * e * r;
            return i ? Math.round(n) : n
        }
        function n(t, e, r, n) {
            return void 0 === r && (r = 1),
            void 0 === n && (n = !1),
            i(t, e, 1 / r, n)
        }
        function a(t, e) {
            return void 0 === e && (e = !1),
            i(t, 1e3, 1 / 9e4, e)
        }
        function s(t, e) {
            return void 0 === e && (e = 1),
            i(t, 9e4, 1 / e)
        }
    },
    4 : function(t, e, r) {
        "use strict";
        var i, n;
        r.d(e, "a", (function() {
            return i
        })),
        r.d(e, "b", (function() {
            return n
        })),
        function(t) {
            t.MANIFEST = "manifest",
            t.LEVEL = "level",
            t.AUDIO_TRACK = "audioTrack",
            t.SUBTITLE_TRACK = "subtitleTrack"
        } (i || (i = {})),
        function(t) {
            t.MAIN = "main",
            t.AUDIO = "audio",
            t.SUBTITLE = "subtitle"
        } (n || (n = {}))
    },
    2 : function(t, e, r) {
        "use strict";
        var i, n;
        r.d(e, "b", (function() {
            return i
        })),
        r.d(e, "a", (function() {
            return n
        })),
        function(t) {
            t.NETWORK_ERROR = "networkError",
            t.MEDIA_ERROR = "mediaError",
            t.KEY_SYSTEM_ERROR = "keySystemError",
            t.MUX_ERROR = "muxError",
            t.OTHER_ERROR = "otherError"
        } (i || (i = {})),
        function(t) {
            t.KEY_SYSTEM_NO_KEYS = "keySystemNoKeys",
            t.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess",
            t.KEY_SYSTEM_NO_SESSION = "keySystemNoSession",
            t.KEY_SYSTEM_LICENSE_REQUEST_FAILED = "keySystemLicenseRequestFailed",
            t.KEY_SYSTEM_NO_INIT_DATA = "keySystemNoInitData",
            t.MANIFEST_LOAD_ERROR = "manifestLoadError",
            t.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut",
            t.MANIFEST_PARSING_ERROR = "manifestParsingError",
            t.MANIFEST_INCOMPATIBLE_CODECS_ERROR = "manifestIncompatibleCodecsError",
            t.LEVEL_EMPTY_ERROR = "levelEmptyError",
            t.LEVEL_LOAD_ERROR = "levelLoadError",
            t.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut",
            t.LEVEL_SWITCH_ERROR = "levelSwitchError",
            t.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError",
            t.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut",
            t.SUBTITLE_LOAD_ERROR = "subtitleTrackLoadError",
            t.SUBTITLE_TRACK_LOAD_TIMEOUT = "subtitleTrackLoadTimeOut",
            t.FRAG_LOAD_ERROR = "fragLoadError",
            t.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut",
            t.FRAG_DECRYPT_ERROR = "fragDecryptError",
            t.FRAG_PARSING_ERROR = "fragParsingError",
            t.REMUX_ALLOC_ERROR = "remuxAllocError",
            t.KEY_LOAD_ERROR = "keyLoadError",
            t.KEY_LOAD_TIMEOUT = "keyLoadTimeOut",
            t.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError",
            t.BUFFER_INCOMPATIBLE_CODECS_ERROR = "bufferIncompatibleCodecsError",
            t.BUFFER_APPEND_ERROR = "bufferAppendError",
            t.BUFFER_APPENDING_ERROR = "bufferAppendingError",
            t.BUFFER_STALLED_ERROR = "bufferStalledError",
            t.BUFFER_FULL_ERROR = "bufferFullError",
            t.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole",
            t.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall",
            t.INTERNAL_EXCEPTION = "internalException",
            t.INTERNAL_ABORTED = "aborted",
            t.UNKNOWN = "unknown"
        } (n || (n = {}))
    },
    9 : function(t, e, r) {
        "use strict";
        function i(t, e, r) {
            return Uint8Array.prototype.slice ? t.slice(e, r) : new Uint8Array(Array.prototype.slice.call(t, e, r))
        }
        r.d(e, "a", (function() {
            return i
        }))
    },
    6 : function(t, e, r) {
        "use strict";
        r.d(e, "b", (function() {
            return h
        })),
        r.d(e, "g", (function() {
            return d
        })),
        r.d(e, "f", (function() {
            return c
        })),
        r.d(e, "d", (function() {
            return f
        })),
        r.d(e, "c", (function() {
            return g
        })),
        r.d(e, "e", (function() {
            return p
        })),
        r.d(e, "h", (function() {
            return m
        })),
        r.d(e, "a", (function() {
            return y
        }));
        var i = r(9),
        n = r(5),
        a = Math.pow(2, 32) - 1,
        s = [].push;
        function o(t) {
            return String.fromCharCode.apply(null, t)
        }
        function l(t, e) {
            "data" in t && (e += t.start, t = t.data);
            var r = t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3];
            return r < 0 ? 4294967296 + r: r
        }
        function u(t, e, r) {
            "data" in t && (e += t.start, t = t.data),
            t[e] = r >> 24,
            t[e + 1] = r >> 16 & 255,
            t[e + 2] = r >> 8 & 255,
            t[e + 3] = 255 & r
        }
        function h(t, e) {
            var r, i, n, a = [];
            if (!e.length) return a;
            "data" in t ? (r = t.data, i = t.start, n = t.end) : (i = 0, n = (r = t).byteLength);
            for (var u = i; u < n;) {
                var d = l(r, u),
                c = d > 1 ? u + d: n;
                if (o(r.subarray(u + 4, u + 8)) === e[0]) if (1 === e.length) a.push({
                    data: r,
                    start: u + 8,
                    end: c
                });
                else {
                    var f = h({
                        data: r,
                        start: u + 8,
                        end: c
                    },
                    e.slice(1));
                    f.length && s.apply(a, f)
                }
                u = c
            }
            return a
        }
        function d(t) {
            var e = h(t, ["moov"])[0],
            r = e ? e.end: null,
            i = h(t, ["sidx"]);
            if (!i || !i[0]) return null;
            var n = [],
            a = i[0],
            s = a.data[0],
            o = 0 === s ? 8 : 16,
            u = l(a, o);
            o += 4;
            o += 0 === s ? 8 : 16,
            o += 2;
            var d = a.end + 0,
            c = function(t, e) {
                "data" in t && (e += t.start, t = t.data);
                var r = t[e] << 8 | t[e + 1];
                return r < 0 ? 65536 + r: r
            } (a, o);
            o += 2;
            for (var f = 0; f < c; f++) {
                var g = o,
                v = l(a, g);
                g += 4;
                var p = 2147483647 & v;
                if (1 === (2147483648 & v) >>> 31) return console.warn("SIDX has hierarchical references (not supported)"),
                null;
                var m = l(a, g);
                g += 4,
                n.push({
                    referenceSize: p,
                    subsegmentDuration: m,
                    info: {
                        duration: m / u,
                        start: d,
                        end: d + p - 1
                    }
                }),
                d += p,
                o = g += 4
            }
            return {
                earliestPresentationTime: 0,
                timescale: u,
                version: s,
                referencesCount: c,
                references: n,
                moovEndOffset: r
            }
        }
        function c(t) {
            for (var e = [], r = h(t, ["moov", "trak"]), i = 0; i < r.length; i++) {
                var a = r[i],
                s = h(a, ["tkhd"])[0];
                if (s) {
                    var u = s.data[s.start],
                    d = 0 === u ? 12 : 20,
                    c = l(s, d),
                    f = h(a, ["mdia", "mdhd"])[0];
                    if (f) {
                        var g = l(f, d = 0 === (u = f.data[f.start]) ? 12 : 20),
                        v = h(a, ["mdia", "hdlr"])[0];
                        if (v) {
                            var p = o(v.data.subarray(v.start + 8, v.start + 12)),
                            m = {
                                soun: n.a.AUDIO,
                                vide: n.a.VIDEO
                            } [p];
                            if (m) {
                                var y = h(a, ["mdia", "minf", "stbl", "stsd"])[0],
                                T = void 0;
                                y && (T = o(y.data.subarray(y.start + 12, y.start + 16))),
                                e[c] = {
                                    timescale: g,
                                    type: m
                                },
                                e[m] = {
                                    timescale: g,
                                    id: c,
                                    codec: T
                                }
                            }
                        }
                    }
                }
            }
            return h(t, ["moov", "mvex", "trex"]).forEach((function(t) {
                var r = l(t, 4),
                i = e[r];
                i && (i.
            default = {
                    duration: l(t, 12),
                    flags: l(t, 20)
                })
            })),
            e
        }
        function f(t, e) {
            return h(e, ["moof", "traf"]).reduce((function(e, r) {
                var i = h(r, ["tfdt"])[0],
                n = i.data[i.start],
                a = h(r, ["tfhd"]).reduce((function(e, r) {
                    var a = l(r, 4),
                    s = t[a];
                    if (s) {
                        var o = l(i, 4);
                        1 === n && (o *= Math.pow(2, 32), o += l(i, 8));
                        var u = o / (s.timescale || 9e4);
                        if (isFinite(u) && (null === e || u < e)) return u
                    }
                    return e
                }), null);
                return null !== a && isFinite(a) && (null === e || a < e) ? a: e
            }), null) || 0
        }
        function g(t, e) {
            for (var r = 0,
            i = 0,
            a = 0,
            s = h(t, ["moof", "traf"]), o = 0; o < s.length; o++) {
                var u = s[o],
                c = h(u, ["tfhd"])[0],
                f = e[l(c, 4)];
                if (f) {
                    var g = f.
                default,
                    p = l(c, 0) | (null == g ? void 0 : g.flags),
                    m = null == g ? void 0 : g.duration;
                    8 & p && (m = l(c, 2 & p ? 12 : 8));
                    for (var y = f.timescale || 9e4,
                    T = h(u, ["trun"]), b = 0; b < T.length; b++) {
                        if (! (r = v(T[b])) && m) r = m * l(T[b], 4);
                        f.type === n.a.VIDEO ? i += r / y: f.type === n.a.AUDIO && (a += r / y)
                    }
                }
            }
            if (0 === i && 0 === a) {
                var E = d(t);
                if (null != E && E.references) return E.references.reduce((function(t, e) {
                    return t + e.info.duration || 0
                }), 0)
            }
            return i || a
        }
        function v(t) {
            var e = l(t, 0),
            r = 8;
            1 & e && (r += 4),
            4 & e && (r += 4);
            for (var i = 0,
            n = l(t, 4), a = 0; a < n; a++) {
                if (256 & e) i += l(t, r),
                r += 4;
                512 & e && (r += 4),
                1024 & e && (r += 4),
                2048 & e && (r += 4)
            }
            return i
        }
        function p(t, e, r) {
            h(e, ["moof", "traf"]).forEach((function(e) {
                h(e, ["tfhd"]).forEach((function(i) {
                    var n = l(i, 4),
                    s = t[n];
                    if (s) {
                        var o = s.timescale || 9e4;
                        h(e, ["tfdt"]).forEach((function(t) {
                            var e = t.data[t.start],
                            i = l(t, 4);
                            if (0 === e) u(t, 4, i - r * o);
                            else {
                                i *= Math.pow(2, 32),
                                i += l(t, 8),
                                i -= r * o,
                                i = Math.max(i, 0);
                                var n = Math.floor(i / (a + 1)),
                                s = Math.floor(i % (a + 1));
                                u(t, 4, n),
                                u(t, 8, s)
                            }
                        }))
                    }
                }))
            }))
        }
        function m(t) {
            var e = {
                valid: null,
                remainder: null
            },
            r = h(t, ["moof"]);
            if (!r) return e;
            if (r.length < 2) return e.remainder = t,
            e;
            var n = r[r.length - 1];
            return e.valid = Object(i.a)(t, 0, n.start - 8),
            e.remainder = Object(i.a)(t, n.start - 8),
            e
        }
        function y(t, e) {
            var r = new Uint8Array(t.length + e.length);
            return r.set(t),
            r.set(e, t.length),
            r
        }
    },
    7 : function(t, e, r) {
        "use strict";
        r.d(e, "b", (function() {
            return s
        })),
        r.d(e, "a", (function() {
            return l
        })),
        r.d(e, "d", (function() {
            return u
        })),
        r.d(e, "e", (function() {
            return h
        })),
        r.d(e, "c", (function() {
            return c
        })),
        r.d(e, "f", (function() {
            return y
        }));
        var i, n = function(t, e) {
            return e + 10 <= t.length && 73 === t[e] && 68 === t[e + 1] && 51 === t[e + 2] && t[e + 3] < 255 && t[e + 4] < 255 && t[e + 6] < 128 && t[e + 7] < 128 && t[e + 8] < 128 && t[e + 9] < 128
        },
        a = function(t, e) {
            return e + 10 <= t.length && 51 === t[e] && 68 === t[e + 1] && 73 === t[e + 2] && t[e + 3] < 255 && t[e + 4] < 255 && t[e + 6] < 128 && t[e + 7] < 128 && t[e + 8] < 128 && t[e + 9] < 128
        },
        s = function(t, e) {
            for (var r = e,
            i = 0; n(t, e);) {
                i += 10,
                i += o(t, e + 6),
                a(t, e + 10) && (i += 10),
                e += i
            }
            if (i > 0) return t.subarray(r, r + i)
        },
        o = function(t, e) {
            var r = 0;
            return r = (127 & t[e]) << 21,
            r |= (127 & t[e + 1]) << 14,
            r |= (127 & t[e + 2]) << 7,
            r |= 127 & t[e + 3]
        },
        l = function(t, e) {
            return n(t, e) && o(t, e + 6) + 10 <= t.length - e
        },
        u = function(t) {
            for (var e = c(t), r = 0; r < e.length; r++) {
                var i = e[r];
                if (h(i)) return m(i)
            }
        },
        h = function(t) {
            return t && "PRIV" === t.key && "com.apple.streaming.transportStreamTimestamp" === t.info
        },
        d = function(t) {
            var e = String.fromCharCode(t[0], t[1], t[2], t[3]),
            r = o(t, 4);
            return {
                type: e,
                size: r,
                data: t.subarray(10, 10 + r)
            }
        },
        c = function(t) {
            for (var e = 0,
            r = []; n(t, e);) {
                for (var i = o(t, e + 6), s = (e += 10) + i; e + 8 < s;) {
                    var l = d(t.subarray(e)),
                    u = f(l);
                    u && r.push(u),
                    e += l.size + 10
                }
                a(t, e) && (e += 10)
            }
            return r
        },
        f = function(t) {
            return "PRIV" === t.type ? g(t) : "W" === t.type[0] ? p(t) : v(t)
        },
        g = function(t) {
            if (! (t.size < 2)) {
                var e = y(t.data, !0),
                r = new Uint8Array(t.data.subarray(e.length + 1));
                return {
                    key: t.type,
                    info: e,
                    data: r.buffer
                }
            }
        },
        v = function(t) {
            if (! (t.size < 2)) {
                if ("TXXX" === t.type) {
                    var e = 1,
                    r = y(t.data.subarray(e), !0);
                    e += r.length + 1;
                    var i = y(t.data.subarray(e));
                    return {
                        key: t.type,
                        info: r,
                        data: i
                    }
                }
                var n = y(t.data.subarray(1));
                return {
                    key: t.type,
                    data: n
                }
            }
        },
        p = function(t) {
            if ("WXXX" === t.type) {
                if (t.size < 2) return;
                var e = 1,
                r = y(t.data.subarray(e), !0);
                e += r.length + 1;
                var i = y(t.data.subarray(e));
                return {
                    key: t.type,
                    info: r,
                    data: i
                }
            }
            var n = y(t.data);
            return {
                key: t.type,
                data: n
            }
        },
        m = function(t) {
            if (8 === t.data.byteLength) {
                var e = new Uint8Array(t.data),
                r = 1 & e[3],
                i = (e[4] << 23) + (e[5] << 15) + (e[6] << 7) + e[7];
                return i /= 45,
                r && (i += 47721858.84),
                Math.round(i)
            }
        },
        y = function(t, e) {
            void 0 === e && (e = !1);
            var r = T();
            if (r) {
                var i = r.decode(t);
                if (e) {
                    var n = i.indexOf("\0");
                    return - 1 !== n ? i.substring(0, n) : i
                }
                return i.replace(/\0/g, "")
            }
            for (var a, s, o, l = t.length,
            u = "",
            h = 0; h < l;) {
                if (0 === (a = t[h++]) && e) return u;
                if (0 !== a && 3 !== a) switch (a >> 4) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    u += String.fromCharCode(a);
                    break;
                case 12:
                case 13:
                    s = t[h++],
                    u += String.fromCharCode((31 & a) << 6 | 63 & s);
                    break;
                case 14:
                    s = t[h++],
                    o = t[h++],
                    u += String.fromCharCode((15 & a) << 12 | (63 & s) << 6 | (63 & o) << 0)
                }
            }
            return u
        };
        function T() {
            return i || void 0 === self.TextDecoder || (i = new self.TextDecoder("utf-8")),
            i
        }
    },
    15 : function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return u
        }));
        var i = function() {
            function t(t, e) {
                this.subtle = void 0,
                this.aesIV = void 0,
                this.subtle = t,
                this.aesIV = e
            }
            return t.prototype.decrypt = function(t, e) {
                return this.subtle.decrypt({
                    name: "AES-CBC",
                    iv: this.aesIV
                },
                e, t)
            },
            t
        } (),
        n = function() {
            function t(t, e) {
                this.subtle = void 0,
                this.key = void 0,
                this.subtle = t,
                this.key = e
            }
            return t.prototype.expandKey = function() {
                return this.subtle.importKey("raw", this.key, {
                    name: "AES-CBC"
                },
                !1, ["encrypt", "decrypt"])
            },
            t
        } (),
        a = r(9);
        var s = function() {
            function t() {
                this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
                this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)],
                this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)],
                this.sBox = new Uint32Array(256),
                this.invSBox = new Uint32Array(256),
                this.key = new Uint32Array(0),
                this.ksRows = 0,
                this.keySize = 0,
                this.keySchedule = void 0,
                this.invKeySchedule = void 0,
                this.initTable()
            }
            var e = t.prototype;
            return e.uint8ArrayToUint32Array_ = function(t) {
                for (var e = new DataView(t), r = new Uint32Array(4), i = 0; i < 4; i++) r[i] = e.getUint32(4 * i);
                return r
            },
            e.initTable = function() {
                var t = this.sBox,
                e = this.invSBox,
                r = this.subMix,
                i = r[0],
                n = r[1],
                a = r[2],
                s = r[3],
                o = this.invSubMix,
                l = o[0],
                u = o[1],
                h = o[2],
                d = o[3],
                c = new Uint32Array(256),
                f = 0,
                g = 0,
                v = 0;
                for (v = 0; v < 256; v++) c[v] = v < 128 ? v << 1 : v << 1 ^ 283;
                for (v = 0; v < 256; v++) {
                    var p = g ^ g << 1 ^ g << 2 ^ g << 3 ^ g << 4;
                    p = p >>> 8 ^ 255 & p ^ 99,
                    t[f] = p,
                    e[p] = f;
                    var m = c[f],
                    y = c[m],
                    T = c[y],
                    b = 257 * c[p] ^ 16843008 * p;
                    i[f] = b << 24 | b >>> 8,
                    n[f] = b << 16 | b >>> 16,
                    a[f] = b << 8 | b >>> 24,
                    s[f] = b,
                    b = 16843009 * T ^ 65537 * y ^ 257 * m ^ 16843008 * f,
                    l[p] = b << 24 | b >>> 8,
                    u[p] = b << 16 | b >>> 16,
                    h[p] = b << 8 | b >>> 24,
                    d[p] = b,
                    f ? (f = m ^ c[c[c[T ^ m]]], g ^= c[c[g]]) : f = g = 1
                }
            },
            e.expandKey = function(t) {
                for (var e = this.uint8ArrayToUint32Array_(t), r = !0, i = 0; i < e.length && r;) r = e[i] === this.key[i],
                i++;
                if (!r) {
                    this.key = e;
                    var n = this.keySize = e.length;
                    if (4 !== n && 6 !== n && 8 !== n) throw new Error("Invalid aes key size=" + n);
                    var a, s, o, l, u = this.ksRows = 4 * (n + 6 + 1),
                    h = this.keySchedule = new Uint32Array(u),
                    d = this.invKeySchedule = new Uint32Array(u),
                    c = this.sBox,
                    f = this.rcon,
                    g = this.invSubMix,
                    v = g[0],
                    p = g[1],
                    m = g[2],
                    y = g[3];
                    for (a = 0; a < u; a++) a < n ? o = h[a] = e[a] : (l = o, a % n == 0 ? (l = c[(l = l << 8 | l >>> 24) >>> 24] << 24 | c[l >>> 16 & 255] << 16 | c[l >>> 8 & 255] << 8 | c[255 & l], l ^= f[a / n | 0] << 24) : n > 6 && a % n == 4 && (l = c[l >>> 24] << 24 | c[l >>> 16 & 255] << 16 | c[l >>> 8 & 255] << 8 | c[255 & l]), h[a] = o = (h[a - n] ^ l) >>> 0);
                    for (s = 0; s < u; s++) a = u - s,
                    l = 3 & s ? h[a] : h[a - 4],
                    d[s] = s < 4 || a <= 4 ? l: v[c[l >>> 24]] ^ p[c[l >>> 16 & 255]] ^ m[c[l >>> 8 & 255]] ^ y[c[255 & l]],
                    d[s] = d[s] >>> 0
                }
            },
            e.networkToHostOrderSwap = function(t) {
                return t << 24 | (65280 & t) << 8 | (16711680 & t) >> 8 | t >>> 24
            },
            e.decrypt = function(t, e, r) {
                for (var i, n, a, s, o, l, u, h, d, c, f, g, v, p, m = this.keySize + 6,
                y = this.invKeySchedule,
                T = this.invSBox,
                b = this.invSubMix,
                E = b[0], S = b[1], L = b[2], A = b[3], R = this.uint8ArrayToUint32Array_(r), D = R[0], k = R[1], _ = R[2], I = R[3], C = new Int32Array(t), w = new Int32Array(C.length), O = this.networkToHostOrderSwap; e < C.length;) {
                    for (d = O(C[e]), c = O(C[e + 1]), f = O(C[e + 2]), g = O(C[e + 3]), o = d ^ y[0], l = g ^ y[1], u = f ^ y[2], h = c ^ y[3], v = 4, p = 1; p < m; p++) i = E[o >>> 24] ^ S[l >> 16 & 255] ^ L[u >> 8 & 255] ^ A[255 & h] ^ y[v],
                    n = E[l >>> 24] ^ S[u >> 16 & 255] ^ L[h >> 8 & 255] ^ A[255 & o] ^ y[v + 1],
                    a = E[u >>> 24] ^ S[h >> 16 & 255] ^ L[o >> 8 & 255] ^ A[255 & l] ^ y[v + 2],
                    s = E[h >>> 24] ^ S[o >> 16 & 255] ^ L[l >> 8 & 255] ^ A[255 & u] ^ y[v + 3],
                    o = i,
                    l = n,
                    u = a,
                    h = s,
                    v += 4;
                    i = T[o >>> 24] << 24 ^ T[l >> 16 & 255] << 16 ^ T[u >> 8 & 255] << 8 ^ T[255 & h] ^ y[v],
                    n = T[l >>> 24] << 24 ^ T[u >> 16 & 255] << 16 ^ T[h >> 8 & 255] << 8 ^ T[255 & o] ^ y[v + 1],
                    a = T[u >>> 24] << 24 ^ T[h >> 16 & 255] << 16 ^ T[o >> 8 & 255] << 8 ^ T[255 & l] ^ y[v + 2],
                    s = T[h >>> 24] << 24 ^ T[o >> 16 & 255] << 16 ^ T[l >> 8 & 255] << 8 ^ T[255 & u] ^ y[v + 3],
                    w[e] = O(i ^ D),
                    w[e + 1] = O(s ^ k),
                    w[e + 2] = O(a ^ _),
                    w[e + 3] = O(n ^ I),
                    D = d,
                    k = c,
                    _ = f,
                    I = g,
                    e += 4
                }
                return w.buffer
            },
            t
        } (),
        o = r(1),
        l = r(6),
        u = function() {
            function t(t, e, r) {
                var i = (void 0 === r ? {}: r).removePKCS7Padding,
                n = void 0 === i || i;
                if (this.logEnabled = !0, this.observer = void 0, this.config = void 0, this.removePKCS7Padding = void 0, this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null, this.observer = t, this.config = e, this.removePKCS7Padding = n, n) try {
                    var a = self.crypto;
                    a && (this.subtle = a.subtle || a.webkitSubtle)
                } catch(t) {}
                null === this.subtle && (this.config.enableSoftwareAES = !0)
            }
            var e = t.prototype;
            return e.destroy = function() {
                this.observer = null
            },
            e.isSync = function() {
                return this.config.enableSoftwareAES
            },
            e.flush = function() {
                var t = this.currentResult;
                if (t) {
                    var e, r, i, n = new Uint8Array(t);
                    return this.reset(),
                    this.removePKCS7Padding ? (r = (e = n).byteLength, (i = r && new DataView(e.buffer).getUint8(r - 1)) ? Object(a.a)(e, 0, r - i) : e) : n
                }
                this.reset()
            },
            e.reset = function() {
                this.currentResult = null,
                this.currentIV = null,
                this.remainderData = null,
                this.softwareDecrypter && (this.softwareDecrypter = null)
            },
            e.decrypt = function(t, e, r, i) {
                if (this.config.enableSoftwareAES) {
                    this.softwareDecrypt(new Uint8Array(t), e, r);
                    var n = this.flush();
                    n && i(n.buffer)
                } else this.webCryptoDecrypt(new Uint8Array(t), e, r).then(i)
            },
            e.softwareDecrypt = function(t, e, r) {
                var i = this.currentIV,
                n = this.currentResult,
                o = this.remainderData;
                this.logOnce("JS AES decrypt"),
                o && (t = Object(l.a)(o, t), this.remainderData = null);
                var u = this.getValidChunk(t);
                if (!u.length) return null;
                i && (r = i);
                var h = this.softwareDecrypter;
                h || (h = this.softwareDecrypter = new s),
                h.expandKey(e);
                var d = n;
                return this.currentResult = h.decrypt(u.buffer, 0, r),
                this.currentIV = Object(a.a)(u, -16).buffer,
                d || null
            },
            e.webCryptoDecrypt = function(t, e, r) {
                var a = this,
                s = this.subtle;
                return this.key === e && this.fastAesKey || (this.key = e, this.fastAesKey = new n(s, e)),
                this.fastAesKey.expandKey().then((function(e) {
                    return s ? new i(s, r).decrypt(t.buffer, e) : Promise.reject(new Error("web crypto not initialized"))
                })).
                catch((function(i) {
                    return a.onWebCryptoError(i, t, e, r)
                }))
            },
            e.onWebCryptoError = function(t, e, r, i) {
                return o.b.warn("[decrypter.ts]: WebCrypto Error, disable WebCrypto API:", t),
                this.config.enableSoftwareAES = !0,
                this.logEnabled = !0,
                this.softwareDecrypt(e, r, i)
            },
            e.getValidChunk = function(t) {
                var e = t,
                r = t.length - t.length % 16;
                return r !== t.length && (e = Object(a.a)(t, 0, r), this.remainderData = Object(a.a)(t, r)),
                e
            },
            e.logOnce = function(t) {
                this.logEnabled && (o.b.log("[decrypter.ts]: " + t), this.logEnabled = !1)
            },
            t
        } ()
    }
}))(self);