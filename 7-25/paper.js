! function (e) {
    function t(t) {
        for (var r, i, c = t[0], u = t[1], s = t[2], f = 0, p = []; f < c.length; f++) i = c[f], Object.prototype.hasOwnProperty.call(o, i) && o[i] && p.push(o[i][0]), o[i] = 0;
        for (r in u) Object.prototype.hasOwnProperty.call(u, r) && (e[r] = u[r]);
        for (l && l(t); p.length;) p.shift()();
        return a.push.apply(a, s || []), n()
    }

    function n() {
        for (var e, t = 0; t < a.length; t++) {
            for (var n = a[t], r = !0, c = 1; c < n.length; c++) {
                var u = n[c];
                0 !== o[u] && (r = !1)
            }
            r && (a.splice(t--, 1), e = i(i.s = n[0]))
        }
        return e
    }
    var r = {},
        o = {
            5: 0
        },
        a = [];

    function i(t) {
        if (r[t]) return r[t].exports;
        var n = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, i), n.l = !0, n.exports
    }
    i.e = function (e) {
        var t = [],
            n = o[e];
        if (0 !== n)
            if (n) t.push(n[2]);
            else {
                var r = new Promise((function (t, r) {
                    n = o[e] = [t, r]
                }));
                t.push(n[2] = r);
                var a, c = document.createElement("script");
                c.charset = "utf-8", c.timeout = 120, i.nc && c.setAttribute("nonce", i.nc), c.src = function (e) {
                    return i.p + "study-exam/" + ({
                        1: "aliplayer"
                    } [e] || e) + "." + {
                        1: "f6a3518f"
                    } [e] + ".js"
                }(e);
                var u = new Error;
                a = function (t) {
                    c.onerror = c.onload = null, clearTimeout(s);
                    var n = o[e];
                    if (0 !== n) {
                        if (n) {
                            var r = t && ("load" === t.type ? "missing" : t.type),
                                a = t && t.target && t.target.src;
                            u.message = "Loading chunk " + e + " failed.\n(" + r + ": " + a + ")", u.name = "ChunkLoadError", u.type = r, u.request = a, n[1](u)
                        }
                        o[e] = void 0
                    }
                };
                var s = setTimeout((function () {
                    a({
                        type: "timeout",
                        target: c
                    })
                }), 12e4);
                c.onerror = c.onload = a, document.head.appendChild(c)
            } return Promise.all(t)
    }, i.m = e, i.c = r, i.d = function (e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, i.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.t = function (e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) i.d(n, r, function (t) {
                return e[t]
            }.bind(null, r));
        return n
    }, i.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "/points/", i.oe = function (e) {
        throw console.error(e), e
    };
    var c = window.webpackJsonp = window.webpackJsonp || [],
        u = c.push.bind(c);
    c.push = t, c = c.slice();
    for (var s = 0; s < c.length; s++) t(c[s]);
    var l = u;
    a.push(["MBZT", 0]), n()
}({
    "0B97": function (e, t, n) {
        "use strict";
        n("fXXf");
        var r = n("1MGc"),
            o = n.n(r),
            a = (n("Q3iC"), n("kexM")),
            i = n.n(a),
            c = n("xwgP"),
            u = n.n(c);

        function s(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function l(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        t.a = function (e) {
            i.a.info(function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(n), !0).forEach((function (t) {
                        l(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }({
                icon: u.a.createElement(o.a, {
                    type: "exclamation-circle",
                    theme: "filled",
                    style: {
                        color: "#FAAD14"
                    }
                })
            }, e || {}))
        }
    },
    "2OIm": function (e, t, n) {
        "use strict";
        var r = n("jJIE"),
            o = n.n(r);
        window.__bl && window.__bl.setConfig && window.__bl.setConfig({
            c1: o.a.get("token")
        });
        t.a = {
            error: function e(t, n) {
                if (window.__bl && window.__bl.error) {
                    var r = t;
                    e instanceof Error || (r = new Error(JSON.stringify(r))), window.__bl.error(r, n)
                }
            },
            sum: function (e, t) {
                window.__bl && window.__bl.sum && window.__bl.sum(e, t)
            }
        }
    },
    "3UcE": function (e, t, n) {},
    "7WYT": function (e, t, n) {},
    "8SHQ": function (e, t, n) {
        "use strict";
        var r = n("d5mg"),
            o = n.n(r);

        function a(e) {
            return o()("/points/", e)
        }
        console.log("env: ", "prod");
        var i = {
            dev: {
                loginUrl: a("login.html"),
                myStudyUrl: a("my-study.html"),
                headerIframeUrl: "https://pretest.xxptcs.com/b0b2a39e854d4612c6858aea76861d98/648fafc83297345be269377aefc53c9e.html",
                footerIframeUrl: "https://pretest.xxptcs.com/4063dbabf4bad826aeeb5d831ce9624e/60bd1d03c55149fd0e92da70d074d72b.html",
                pointApiHost: "",
                examApiHost: "",
                homeUrl: "https://pretest.xxptcs.com/index.html",
                dingdingAppId: "dingoadmvzsevntk5celzy",
                dingHostOapi: "oapi.dingtalk.com",
                dingHostLogin: "login.dingtalk.com",
                qgHostLogin: "https://login-test.xxptcs.com",
                domain: ".xxptcs.com",
                pcDomain: "https://pretest.xxptcs.com"
            },
            pre: {
                loginUrl: a("login.html"),
                myStudyUrl: a("my-study.html"),
                headerIframeUrl: "https://pretest.xxptcs.com/b0b2a39e854d4612c6858aea76861d98/648fafc83297345be269377aefc53c9e.html",
                footerIframeUrl: "https://pretest.xxptcs.com/4063dbabf4bad826aeeb5d831ce9624e/60bd1d03c55149fd0e92da70d074d72b.html",
                pointApiHost: "https://pc-api-test.xxptcs.com",
                examApiHost: "https://proxy.xxptcs.com:9663",
                outerLinkHost: "https://pc-ref-link-pre.xxptcs.com",
                homeUrl: "https://pretest.xxptcs.com/index.html",
                dingdingAppId: "dingoadmvzsevntk5celzy",
                dingHostOapi: "oapi.dingtalk.com",
                dingHostLogin: "login.dingtalk.com",
                qgHostLogin: "https://login-test.xxptcs.com",
                domain: ".xxptcs.com",
                pcDomain: "https://pretest.xxptcs.com"
            },
            prod: {
                loginUrl: a("login.html"),
                myStudyUrl: a("my-study.html"),
                pclogUrl: "https://iflow-api.xuexi.cn/logflow/api/v1/pclog",
                headerIframeUrl: "https://www.xuexi.cn/b0b2a39e854d4612c6858aea76861d98/648fafc83297345be269377aefc53c9e.html",
                footerIframeUrl: "https://www.xuexi.cn/4063dbabf4bad826aeeb5d831ce9624e/60bd1d03c55149fd0e92da70d074d72b.html",
                pointApiHost: "https://pc-api.xuexi.cn",
                examApiHost: "https://pc-proxy-api.xuexi.cn",
                outerLinkHost: "https://pc-ref-link.xuexi.cn",
                homeUrl: "https://www.xuexi.cn/",
                dingdingAppId: "dingoankubyrfkttorhpou",
                dingHostOapi: "oapi.dingtalk.com",
                dingHostLogin: "login.dingtalk.com",
                qgHostLogin: "https://login.xuexi.cn",
                domain: ".xuexi.cn",
                pcDomain: "https://www.xuexi.cn"
            }
        };
        t.a = i.prod
    },
    "9kRk": function (e, t, n) {
        "use strict";
        n.d(t, "c", (function () {
            return g
        })), n.d(t, "m", (function () {
            return w
        })), n.d(t, "n", (function () {
            return j
        })), n.d(t, "j", (function () {
            return x
        })), n.d(t, "h", (function () {
            return O
        })), n.d(t, "g", (function () {
            return E
        })), n.d(t, "q", (function () {
            return M
        })), n.d(t, "k", (function () {
            return k
        })), n.d(t, "i", (function () {
            return S
        })), n.d(t, "p", (function () {
            return I
        })), n.d(t, "f", (function () {
            return z
        })), n.d(t, "o", (function () {
            return N
        })), n.d(t, "l", (function () {
            return A
        })), n.d(t, "e", (function () {
            return T
        })), n.d(t, "b", (function () {
            return D
        })), n.d(t, "d", (function () {
            return L
        })), n.d(t, "r", (function () {
            return C
        })), n.d(t, "a", (function () {
            return _
        }));
        n("Q3iC"), n("kexM");
        var r = n("jJIE"),
            o = n.n(r),
            a = n("2juG"),
            i = n.n(a),
            c = n("c+9I"),
            u = n.n(c),
            s = n("d5mg"),
            l = n.n(s),
            f = n("35ia"),
            p = n.n(f),
            m = n("fJgZ"),
            d = n("8SHQ"),
            y = n("lw7w"),
            h = n("LBz4");

        function v(e, t) {
            var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = function (e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return b(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return b(e, t)
                    }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var r = 0,
                        o = function () {};
                    return {
                        s: o,
                        n: function () {
                            return r >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[r++]
                            }
                        },
                        e: function (e) {
                            throw e
                        },
                        f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var a, i = !0,
                c = !1;
            return {
                s: function () {
                    n = n.call(e)
                },
                n: function () {
                    var e = n.next();
                    return i = e.done, e
                },
                e: function (e) {
                    c = !0, a = e
                },
                f: function () {
                    try {
                        i || null == n.return || n.return()
                    } finally {
                        if (c) throw a
                    }
                }
            }
        }

        function b(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function g() {
            window.DISABLE_UNLOAD = !0
        }

        function w(e) {
            return window._pageName === e
        }

        function j() {
            return !!window.DISABLE_UNLOAD
        }

        function x() {
            var e = window.NAV_LIST || [];
            if (e.length > 1) {
                var t = e[e.length - 2];
                t.href && (window.location.href = I(t.href))
            }
        }

        function O() {
            var e = o.a.get("__UID__");
            return e || (e = u()(), o.a.set("__UID__", e, {
                expires: 365,
                domain: d.a.domain
            })), e
        }

        function E() {
            var e = {},
                t = location.search.replace("?", "");
            if (!t) return e;
            var n, r = v(t.split("&"));
            try {
                for (r.s(); !(n = r.n()).done;) {
                    var o = n.value.split("=");
                    e[o[0]] = decodeURIComponent(o[1] || "")
                }
            } catch (e) {
                r.e(e)
            } finally {
                r.f()
            }
            return e
        }

        function M() {
            if (!o.a.get("token")) return S(), !0;
            Object(y.a)()
        }

        function k() {
            window.addEventListener = window.addEventListener || window.attachEvent, window.addEventListener("message", (function (e) {
                var t = new p.a(e.origin);
                "loginRefresh" === e.data && t.hostname.endsWith(d.a.domain) && window.location.reload()
            }))
        }

        function S() {
            window.location.href = "".concat(d.a.loginUrl, "?").concat(function (e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    n = [];
                for (var r in e) {
                    var o = t ? encodeURIComponent(e[r]) : e[r];
                    n.push("".concat(r, "=").concat(o))
                }
                return n.join("&")
            }({
                ref: location.href
            }))
        }

        function I() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return e.startsWith("http") ? e : P(e)
        }

        function P(e) {
            return l()("/points/", e)
        }

        function z(e) {
            var t = e % 60;
            t < 10 && (t = "0".concat(t));
            var n = (e = Math.floor(e / 60)) % 60;
            n < 10 && (n = "0".concat(n));
            var r = (e = Math.floor(e / 60)) % 60;
            return r < 10 && (r = "0".concat(r)), "".concat(r, ":").concat(n, ":").concat(t)
        }

        function N(e, t) {
            return !Object(m.isEmpty)(t) && (e.questionDisplay === h.c.FILL ? t.size === e.answers.length && t.every((function (e) {
                return !Object(m.isEmpty)(e)
            })) : t.size > 0)
        }

        function A(e) {
            return Object(m.isEqual)(Object(m.sortBy)(e.correct, ["answerId"]), Object(m.sortBy)(e.chose, ["answerId"]))
        }

        function T() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            if ("string" != typeof e) return e;
            var t = ['"', "“", '"', "”", "'", "‘", "'", "’", "(", "（", ")", "）", "[", "【", "]", "】", "[", "［", "]", "］", ",", "，", ";", "；", ".", "。", ":", "：", "-", "—", "!", "！", "‍", "​"].join(""),
                n = t.split("").map((function (e) {
                    return "\\".concat(e, "|")
                })).join("").replace(/\|$/, ""),
                r = new RegExp(n, "g");
            return e.replace(r, "")
        }

        function D() {
            var e = window.navigator.userAgent,
                t = e.indexOf("MSIE ");
            if (t > 0) return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
            if (e.indexOf("Trident/") > 0) {
                var n = e.indexOf("rv:");
                return parseInt(e.substring(n + 3, e.indexOf(".", n)), 10)
            }
            var r = e.indexOf("Edge/");
            return r > 0 && parseInt(e.substring(r + 5, e.indexOf(".", r)), 10)
        }

        function L(e, t) {
            if (e.result = !0, t.length !== e.correct.length && (e.result = !1), e.questionDisplay === h.c.RATIO && e.correct[0].value !== t[0].label && (e.result = !1), e.questionDisplay === h.c.CHECKBOX) {
                var n, r = v(e.correct);
                try {
                    for (r.s(); !(n = r.n()).done;) {
                        var o, a = n.value,
                            i = !1,
                            c = v(t);
                        try {
                            for (c.s(); !(o = c.n()).done;) {
                                var u = o.value;
                                a.value === u.label && (i = !0)
                            }
                        } catch (e) {
                            c.e(e)
                        } finally {
                            c.f()
                        }
                        if (!i) {
                            e.result = !1;
                            break
                        }
                    }
                } catch (e) {
                    r.e(e)
                } finally {
                    r.f()
                }
            }
            if (e.questionDisplay === h.c.FILL) {
                var s, l = v(e.correct);
                try {
                    for (l.s(); !(s = l.n()).done;) {
                        var f, p = s.value,
                            m = !1,
                            d = v(t);
                        try {
                            for (d.s(); !(f = d.n()).done;) {
                                var y = f.value;
                                p.answerId === y.answerId && p.value === y.value && (m = !0)
                            }
                        } catch (e) {
                            d.e(e)
                        } finally {
                            d.f()
                        }
                        if (!m) {
                            e.result = !1;
                            break
                        }
                    }
                } catch (e) {
                    l.e(e)
                } finally {
                    l.f()
                }
            }
        }
        var C = function (e) {
            var t = window.pageXOffset || window.document.documentElement.scrollLeft || window.document.body.scrollLeft;
            if (e)
                if ("number" != typeof e) {
                    if ("string" == typeof e) {
                        var n = document.querySelector(e);
                        if (n) {
                            var r = n.offsetTop;
                            window.scrollTo(t, r)
                        }
                    }
                } else {
                    var o = e;
                    window.scrollTo(t, o)
                }
            else window.scrollTo(t, 0)
        };
        i.a.init({
            publicKey: "\n    -----BEGIN PUBLIC KEY-----\n    MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAy7DZvpmQP9YIuUo9c2ZH\n    /wHQPmBTTRDHpo04zOWxqBxaSq5imt4G9ErotkRLW6mp3V8z1IIwOVN0yxPbO02d\n    Oa8JU2PaEX+idt4sggxAlkXNQayeQvw5Wd2kKK7ea6c5nnJUTanRM99lFvQr9QbB\n    4RZ9UGzDPeHTFLB/8/LzxCAXEi8xl9EpmFR9ED9uR7+doxdUjP0dFZrpbQHghf3N\n    ZrBvjkSkc6orbEfFEU3Cc81pofOIoDFhIjtlYYcqHdfo0t2WAMFDvCrcIrsYv6TC\n    vaFoXZ3wyLI0vY3cZnzwUqXR+iPLDS7z0UUNevnnOPr2IIp6VKv+yMWUqQlcL1pH\n    NQIDAQAB\n    -----END PUBLIC KEY-----"
        });
        var _ = function (e, t) {
            return i.a.verify(e, t)
        }
    },
    BHoj: function (e, t, n) {},
    C9sq: function (e, t, n) {
        "use strict";
        n("fXXf");
        var r = n("1MGc"),
            o = n.n(r),
            a = (n("Q3iC"), n("kexM")),
            i = n.n(a),
            c = n("xwgP"),
            u = n.n(c);

        function s(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function l(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        t.a = function (e) {
            i.a.confirm(function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(n), !0).forEach((function (t) {
                        l(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }({
                icon: u.a.createElement(o.a, {
                    type: "exclamation-circle",
                    theme: "filled",
                    style: {
                        color: "#FAAD14"
                    }
                })
            }, e || {}))
        }
    },
    FDJ4: function (e, t, n) {},
    H26C: function (e, t) {
        ! function (e) {
            var t, n = '<svg><symbol id="icon-image" viewBox="0 0 1098 1024"><path d="M365.728 329.152q0 45.728-32 77.728t-77.728 32-77.728-32-32-77.728 32-77.728 77.728-32 77.728 32 32 77.728zM950.848 548.576l0 256-804.576 0 0-109.728 182.848-182.848 91.424 91.424 292.576-292.576zM1005.728 146.272l-914.272 0q-7.424 0-12.864 5.44t-5.44 12.864l0 694.848q0 7.424 5.44 12.864t12.864 5.44l914.272 0q7.424 0 12.864-5.44t5.44-12.864l0-694.848q0-7.424-5.44-12.864t-12.864-5.44zM1097.152 164.576l0 694.848q0 37.728-26.848 64.576t-64.576 26.848l-914.272 0q-37.728 0-64.576-26.848t-26.848-64.576l0-694.848q0-37.728 26.848-64.576t64.576-26.848l914.272 0q37.728 0 64.576 26.848t26.848 64.576z"  ></path></symbol><symbol id="icon-bold" viewBox="0 0 1024 1024"><path d="M426.857143 869.142857q42.285714 18.285714 80 18.285714 214.857143 0 214.857143-191.428571 0-65.142857-23.428571-102.857143-15.428571-25.142857-35.142857-42.285714t-38.571429-26.571429-46-14.285714-48-6-54-1.142857q-41.714286 0-57.714286 5.714286 0 30.285714 2.857143 90.857143t2.857143 90.285714q0 4.571429-0.571429 38.571429t2.857143 55.142857 2.571429 47.714286 6.857143 38zm-8-426.285714q24 4 62.285714 4 46.857143 0 81.714286-7.428571t62.857143-25.428571 42.571429-51.142857 14.571429-81.142857q0-40-16.571429-70t-45.142857-46.857143-61.714286-24.857143-70.857143-8q-28.571429 0-74.285714 7.428571 0 28.571429 2.285714 86.285714t2.285714 86.857143q0 15.428571 2.857143 45.714286t2.857143 45.142857q0 26.285714 0.571429 39.428571zm-309.142857 508l1.142857-53.714286q8.571429-2.285714 48.571429-9.142857t60.571429-15.428571q4-6.857143 7.142857-15.428571t4.857143-19.142857 3.142857-18.571429 1.714286-21.428571 2.857143-19.428571l0-37.428571q0-561.142857-12.571429-585.714286-2.285714-4.571429-12.571429-8.285714t-25.428571-6.285714-28.285714-4-27.714286-2.571429-17.428571-1.714286l-2.285714-47.428571q56-1.142857 194.285714-6.571429t213.142857-5.428571q13.142857 0 39.142857 2.857143t38.571429 2.857143q40 0 78 7.428571t73.428571 24 61.714286 40.571429 42.285714 59.714286 16 78.571429q0 29.714286-9.428571 54.571429t-22.285714 41.142857-36.857143 32.857143-41.714286 25.714286-48 22.857143q88 20 146.571429 76.571429t58.571429 141.714286q0 57.142857-20 102.571429t-53.428571 74.571429-78.857143 48.857143-93.428571 27.714286-100.571429 8q-25.142857 0-75.428571-1.714286t-75.428571-1.714286q-60.571429 0-175.428571 6.285714t-132 6.857143z"  ></path></symbol><symbol id="icon-italic" viewBox="0 0 1024 1024"><path d="M219.428571 949.714286l9.714286-48.571429q3.428571-1.142857 46.571429-12.285714t63.714286-21.428571q16-20 23.428571-57.714286 0.571429-4 35.428571-165.142857t65.142857-310.571429 29.714286-169.428571l0-14.285714q-13.714286-7.428571-31.142857-10.571429t-39.714286-4.571429-33.142857-3.142857l10.857143-58.857143q18.857143 1.142857 68.571429 3.714286t85.428571 4 68.857143 1.428571q27.428571 0 56.285714-1.428571t69.142857-4 56.285714-3.714286q-2.857143 22.285714-10.857143 50.857143-17.142857 5.714286-58 16.285714t-62 19.142857q-4.571429 10.857143-8 24.285714t-5.142857 22.857143-4.285714 26-3.714286 24q-15.428571 84.571429-50 239.714286t-44.285714 203.142857q-1.142857 5.142857-7.428571 33.142857t-11.428571 51.428571-9.142857 47.714286-3.428571 32.857143l0.571429 10.285714q9.714286 2.285714 105.714286 17.714286-1.714286 25.142857-9.142857 56.571429-6.285714 0-18.571429 0.857143t-18.571429 0.857143q-16.571429 0-49.714286-5.714286t-49.142857-5.714286q-78.857143-1.142857-117.714286-1.142857-29.142857 0-81.714286 5.142857t-69.142857 6.285714z"  ></path></symbol><symbol id="icon-list" viewBox="0 0 1024 1024"><path d="M436.555 310.079l426.325 0c37.251 0 67.397-30.198 67.397-67.424s-30.146-67.409-67.397-67.409l-426.325 0c-37.234 0-67.417 30.184-67.417 67.409s30.184 67.424 67.417 67.424zM240.37 175.246l-80.854 0c-37.24 0-67.424 30.184-67.424 67.409s30.184 67.424 67.424 67.424l80.854 0c37.248 0 67.432-30.198 67.432-67.424s-30.184-67.409-67.432-67.409zM862.88 444.912l-426.325 0c-37.234 0-67.417 30.184-67.417 67.409 0 37.228 30.184 67.424 67.417 67.424l426.325 0c37.251 0 67.397-30.196 67.397-67.424 0-37.225-30.147-67.409-67.397-67.409zM240.37 444.912l-80.854 0c-37.24 0-67.424 30.184-67.424 67.409 0 37.228 30.184 67.424 67.424 67.424l80.854 0c37.248 0 67.432-30.196 67.432-67.424 0-37.225-30.184-67.409-67.432-67.409zM862.88 714.565l-426.325 0c-37.234 0-67.417 30.195-67.417 67.416 0 37.234 30.184 67.423 67.417 67.423l426.325 0c37.251 0 67.397-30.189 67.397-67.423 0-37.222-30.147-67.416-67.397-67.416zM240.37 714.565l-80.854 0c-37.24 0-67.424 30.195-67.424 67.416 0 37.234 30.184 67.423 67.424 67.423l80.854 0c37.248 0 67.432-30.189 67.432-67.423 0-37.222-30.184-67.416-67.432-67.416z"  ></path></symbol><symbol id="icon-order-list" viewBox="0 0 1024 1024"><path d="M301.5 238.5h575.1c11.5 0 19.2-9.1 19.2-22.8 0-13.7-7.7-22.8-19.2-22.8H301.5c-11.5 0-19.2 9.1-19.2 22.8 0.1 13.7 7.7 22.8 19.2 22.8z m575.2 250.7H301.5c-11.5 0-19.2 9.1-19.2 22.8 0 13.7 7.7 22.8 19.2 22.8h575.1c11.5 0 19.2-9.1 19.2-22.8 0.1-13.7-7.6-22.8-19.1-22.8z m0 296H301.5c-11.5 0-19.2 9.1-19.2 22.8 0 13.7 7.7 22.8 19.2 22.8h575.1c11.5 0 19.2-9.1 19.2-22.8 0.1-13.7-7.6-22.8-19.1-22.8z m0 0M129.6 577.8c40.8-40.6 64.9-71.9 64.9-97.6 0-16.9-8.3-27.1-22.5-27.1-11 0-20.1 7.9-27.6 17.1l-16.2-18c13.8-16.2 27.2-25.3 47.7-25.3 28.4 0 47.2 20.3 47.2 51.4 0 30.2-22.5 62.7-49.9 92.4 7.5-0.9 17.4-1.8 24.3-1.8h32.6v28H129.6v-19.1zM117.2 869.2l13.9-20.6c8.8 9.5 19.7 16.8 33.1 16.8 15.1 0 25.3-8.2 25.3-22.8 0-16.2-8.6-26.1-41-26.1V793c27.3 0 36.1-10.4 36.1-25 0-12.8-7.2-20.4-19.9-20.6-10.6 0.2-19.3 5.8-28.1 14.6l-15.1-19.9c12.9-12.4 27.1-20.1 44.6-20.1 28.7 0 48.2 15.5 48.2 43.6 0 17.7-9 30.5-24.9 37.4v1.1c16.9 5.1 29.7 18.8 29.7 40.3 0 30.1-23.9 47.6-52.2 47.6-23.4 0-39.2-9.7-49.7-22.8zM127.9 272.7h36.4V165.2h-30.7v-20.9c17-3.2 28.7-7.6 39.4-14.2h25v142.7h31.9v27.3h-102v-27.4z"  ></path></symbol><symbol id="icon-video_fill" viewBox="0 0 1024 1024"><path d="M774.4 426.666667V227.541333C774.4 196.266667 748.8 170.666667 717.525333 170.666667H142.208C110.933333 170.666667 85.333333 196.266667 85.333333 227.541333v568.917334C85.333333 827.733333 110.933333 853.333333 142.208 853.333333h575.317333c31.274667 0 56.874667-25.6 56.874667-56.874666V597.333333l174.677333 161.365334a42.666667 42.666667 0 0 0 71.637334-31.317334V296.618667a42.666667 42.666667 0 0 0-71.637334-31.317334L774.4 426.666667z"  ></path></symbol><symbol id="icon-triangle_fill" viewBox="0 0 1024 1024"><path d="M85.333333 853.333333L512 170.666667l426.666667 682.666666z"  ></path></symbol><symbol id="icon-_fill" viewBox="0 0 1024 1024"><path d="M463.701333 697.088c0 44.8-18.005333 83.968-54.058666 117.589333-36.053333 33.578667-78.592 50.389333-127.573334 50.389334-77.013333 0-136.149333-25.557333-177.493333-76.629334C63.36 737.28 42.666667 666.624 42.666667 576.341333c0-84.010667 35.541333-168.704 106.581333-254.08A694.016 694.016 0 0 1 405.973333 128l46.165334 74.538667C373.034667 241.066667 311.125333 285.866667 266.325333 336.938667c-44.8 51.114667-70.698667 113.066667-77.696 185.856h58.794667c43.392 0 78.72 4.906667 106.026667 14.677333 27.306667 9.813333 49.365333 23.466667 66.133333 40.96 16.128 16.810667 27.477333 35.370667 34.133333 55.637333 6.656 20.309333 9.984 41.301333 9.984 63.018667z m517.632 0c0 44.8-18.005333 83.968-54.058666 117.589333-36.053333 33.578667-78.592 50.389333-127.573334 50.389334-77.013333 0-136.149333-25.557333-177.493333-76.629334-41.258667-51.114667-61.909333-121.813333-61.909333-212.096 0-84.010667 35.541333-168.704 106.581333-254.08A694.016 694.016 0 0 1 923.605333 128l46.165334 74.538667c-79.104 38.528-141.013333 83.285333-185.813334 134.4-44.8 51.114667-70.698667 113.066667-77.696 185.856h58.794667c43.392 0 78.72 4.906667 106.026667 14.677333 27.306667 9.813333 49.365333 23.466667 66.133333 40.96 16.128 16.810667 27.477333 35.370667 34.133333 55.637333 6.656 20.309333 9.984 41.301333 9.984 63.018667z"  ></path></symbol><symbol id="icon-shop" viewBox="0 0 1024 1024"><path d="M779.093333 716.8c-53.504 88.533333-151.978667 143.146667-258.645333 143.36-106.666667-0.213333-205.226667-54.826667-258.730667-143.36a39.594667 39.594667 0 0 1-1.28-41.898667c7.936-13.354667 22.4-21.333333 37.888-21.034666 15.701333 0.213333 29.952 8.661333 37.205334 21.973333 38.314667 63.274667 108.672 102.272 184.917333 102.4 76.202667-0.128 146.517333-39.125333 184.746667-102.4 7.850667-12.928 21.888-20.778667 36.992-20.693333 15.104-0.128 29.184 7.637333 37.077333 20.48 7.68 12.672 7.594667 28.586667-0.128 41.173333m117.205333-512H127.658667c-46.933333 0-84.906667 36.522667-84.992 81.578667v655.914666C42.666667 987.306667 80.768 1024 127.658667 1024h768.682666c46.933333-0.085333 84.906667-36.608 84.992-81.664V286.464c0-45.056-38.101333-81.578667-84.992-81.664M512 81.92c70.570667 0 128 55.168 128 122.88h85.333333C725.333333 91.904 629.632 0 512 0S298.666667 91.904 298.666667 204.8h85.333333c0-67.712 57.429333-122.88 128-122.88"  ></path></symbol><symbol id="icon-path" viewBox="0 0 1024 1024"><path d="M637.866667 144.853333A348.885333 348.885333 0 0 0 240.768 76.8l273.322667 273.322667-164.010667 164.565333L76.8 241.365333A348.885333 348.885333 0 0 0 541.952 706.56l240.725333 240.768a116.352 116.352 0 1 0 164.565334-164.565333l-241.322667-241.322667a348.885333 348.885333 0 0 0-68.010667-396.586667z"  ></path></symbol><symbol id="icon-filetext" viewBox="0 0 1024 1024"><path d="M917.333333 750.933333h-202.666666V1024H234.666667a128 128 0 0 1-128-128V128a128 128 0 0 1 128-128h554.666666a128 128 0 0 1 128 128v622.933333z m0 68.266667V896a128 128 0 0 1-128 128h-7.125333v-204.8H917.333333zM309.333333 273.066667V341.333333h405.333334V273.066667h-405.333334z m0 204.8v68.266666h405.333334v-68.266666h-405.333334z m0 204.8v68.266666h270.208V682.666667H309.333333z"  ></path></symbol><symbol id="icon-shape" viewBox="0 0 1024 1024"><path d="M943.616 982.4H80.384A37.674667 37.674667 0 0 1 42.666667 944.64V80.384a37.674667 37.674667 0 1 1 75.434666 0v826.581333h825.514667a37.674667 37.674667 0 1 1 0 75.434667zM178.346667 814.506667l122.24-218.752a22.229333 22.229333 0 0 1 28.714666-9.301334l116.48 54.186667 124.16-178.986667a22.186667 22.186667 0 0 1 28.288-7.125333l114.688 58.453333 167.936-263.125333c9.770667-15.317333 33.450667-8.405333 33.450667 9.728v544.853333a40.448 40.448 0 0 1-40.448 40.448H197.077333a20.906667 20.906667 0 0 1-18.773333-30.378666z"  ></path></symbol><symbol id="icon-close_normal" viewBox="0 0 1024 1024"><path d="M567.68 511.914667l254.805333-254.634667a39.253333 39.253333 0 0 0 0-55.594667 39.253333 39.253333 0 0 0-55.594666 0L512 456.192 257.109333 201.6a39.253333 39.253333 0 0 0-55.594666 0 39.253333 39.253333 0 0 0 0 55.594667l254.805333 254.592-254.805333 254.72a39.253333 39.253333 0 0 0 27.776 67.114666c10.112 0 20.096-3.84 27.818666-11.52L512 567.509333l254.890667 254.72c7.68 7.68 17.706667 11.477333 27.818666 11.477334a39.253333 39.253333 0 0 0 27.818667-67.114667l-254.848-254.72z"  ></path></symbol><symbol id="icon-forward" viewBox="0 0 1024 1024"><path d="M426.666667 338.688l-231.722667-160.426667A42.666667 42.666667 0 0 0 127.957333 213.333333v605.141334a42.666667 42.666667 0 0 0 66.986667 35.072l231.68-160.426667v125.354667a42.666667 42.666667 0 0 0 66.986667 35.072l437.034666-302.549334a42.666667 42.666667 0 0 0 0-70.186666L493.653333 178.261333A42.666667 42.666667 0 0 0 426.624 213.333333v125.354667z"  ></path></symbol><symbol id="icon-narrow_next" viewBox="0 0 1024 1024"><path d="M322.986667 849.664l436.992-302.592a42.666667 42.666667 0 0 0 0-70.144L322.986667 174.336A42.666667 42.666667 0 0 0 256 209.493333V814.506667a42.666667 42.666667 0 0 0 66.986667 35.114666z"  ></path></symbol><symbol id="icon-back_forward" viewBox="0 0 1024 1024"><path d="M597.333333 334.762667l231.68-160.426667A42.666667 42.666667 0 0 1 896 209.493333V814.506667a42.666667 42.666667 0 0 1-66.986667 35.114666L597.333333 689.237333v125.312a42.666667 42.666667 0 0 1-66.986666 35.114667L93.397333 547.072a42.666667 42.666667 0 0 1 0-70.144L530.346667 174.336A42.666667 42.666667 0 0 1 597.333333 209.493333v125.312z"  ></path></symbol><symbol id="icon-shrink" viewBox="0 0 1024 1024"><path d="M769.365333 709.034667l158.122667 158.122666a42.666667 42.666667 0 0 1-60.330667 60.330667l-158.122666-158.122667a384 384 0 1 1 60.330666-60.330666zM469.333333 768a298.666667 298.666667 0 1 0 0-597.333333 298.666667 298.666667 0 0 0 0 597.333333z m-128-256a42.666667 42.666667 0 0 1 0-85.333333h256a42.666667 42.666667 0 0 1 0 85.333333H341.333333z"  ></path></symbol><symbol id="icon-Amplify" viewBox="0 0 1024 1024"><path d="M769.365333 709.034667l158.122667 158.122666a42.666667 42.666667 0 0 1-60.330667 60.330667l-158.122666-158.122667a384 384 0 1 1 60.330666-60.330666zM426.666667 426.666667V341.333333a42.666667 42.666667 0 0 1 85.333333 0v85.333334h85.333333a42.666667 42.666667 0 0 1 0 85.333333h-85.333333v85.333333a42.666667 42.666667 0 0 1-85.333333 0v-85.333333H341.333333a42.666667 42.666667 0 0 1 0-85.333333h85.333334z m42.666666 341.333333a298.666667 298.666667 0 1 0 0-597.333333 298.666667 298.666667 0 0 0 0 597.333333z"  ></path></symbol><symbol id="icon-narrow_back" viewBox="0 0 1024 1024"><path d="M701.013333 174.336L264.064 476.928a42.666667 42.666667 0 0 0 0 70.144l437.034667 302.592A42.666667 42.666667 0 0 0 768 814.506667V209.493333a42.666667 42.666667 0 0 0-66.986667-35.114666z"  ></path></symbol><symbol id="icon-H-" viewBox="0 0 1024 1024"><path d="M131 213h98v249.7h303.3V213h98v598.2h-98V546.5H229v264.8h-98V213z m673.8 327.1c25.7 0 46.9 7.4 63.7 22.3 16.4 14.9 24.6 33.9 24.6 57.7 0 23.1-8.9 43.9-26.1 62.9-10.4 11.2-29 25.3-55.1 42.8-27.2 17.9-43.6 33.5-49.5 46.9h131.1v38.4H708c0-27.2 8.6-50.6 26.4-70.7 9.7-11.2 30.2-27.6 61.1-48.8 17.1-11.9 29-22 36.5-29.8 11.5-13 17.5-27.2 17.5-42.1 0-14.5-4.1-25.3-11.5-32.4-7.8-7.1-19.4-10.4-34.6-10.4-16.4 0-28.7 5.6-36.9 16.8-8.2 10.4-12.7 26.4-13.4 47.3h-43.6c0.4-29.8 8.9-53.6 26.1-71.9 17.4-19.3 40.5-29 69.2-29z"  ></path></symbol><symbol id="icon-outline" viewBox="0 0 1024 1024"><path d="M464 144H160c-9.6 0-16 6.4-16 16v304c0 9.6 6.4 16 16 16h304c9.6 0 16-6.4 16-16V160c0-9.6-6.4-16-16-16z m-51.2 268.8H211.2V211.2h198.4v201.6zM864 144h-304c-9.6 0-16 6.4-16 16v304c0 9.6 6.4 16 16 16H864c9.6 0 16-6.4 16-16V160c0-9.6-6.4-16-16-16z m-51.2 268.8h-198.4V211.2h198.4v201.6zM464 544H160c-9.6 0-16 6.4-16 16V864c0 9.6 6.4 16 16 16h304c9.6 0 16-6.4 16-16v-304c0-9.6-6.4-16-16-16z m-51.2 268.8H211.2v-198.4h198.4v198.4zM864 544h-304c-9.6 0-16 6.4-16 16V864c0 9.6 6.4 16 16 16H864c9.6 0 16-6.4 16-16v-304c0-9.6-6.4-16-16-16z m-51.2 268.8h-198.4v-198.4h198.4v198.4z"  ></path></symbol><symbol id="icon-outline1" viewBox="0 0 1024 1024"><path d="M854.4 288L640 73.6c-6.4-6.4-16-9.6-22.4-9.6H192c-19.2 0-32 12.8-32 32v832c0 19.2 12.8 32 32 32h640c19.2 0 32-12.8 32-32V310.4c0-6.4-3.2-16-9.6-22.4z m-64 38.4h-188.8V137.6l188.8 188.8z m3.2 563.2H230.4V134.4h300.8V352c0 22.4 19.2 41.6 41.6 41.6h217.6v496z m-288-272H320c-3.2 0-6.4 3.2-6.4 6.4V672c0 3.2 3.2 6.4 6.4 6.4h185.6c3.2 0 6.4-3.2 6.4-6.4v-48c0-3.2-3.2-6.4-6.4-6.4z m-192-128v48c0 3.2 3.2 6.4 6.4 6.4h384c3.2 0 6.4-3.2 6.4-6.4v-48c0-3.2-3.2-6.4-6.4-6.4H320c-3.2 0-6.4 3.2-6.4 6.4z"  ></path></symbol><symbol id="icon-outline2" viewBox="0 0 1024 1024"><path d="M912 300.8l-128 73.6V224c0-35.2-28.8-64-64-64H128c-35.2 0-64 28.8-64 64v576c0 35.2 28.8 64 64 64h592c35.2 0 64-28.8 64-64v-153.6l128 73.6c22.4 12.8 48-3.2 48-28.8V329.6c0-25.6-25.6-38.4-48-28.8z m-201.6 492.8h-576V230.4h576v563.2z m179.2-169.6l-102.4-60.8v-105.6l102.4-60.8v227.2zM208 358.4H320c3.2 0 6.4-3.2 6.4-6.4V304c0-3.2-3.2-6.4-6.4-6.4H208c-3.2 0-6.4 3.2-6.4 6.4V352c-3.2 3.2 3.2 6.4 6.4 6.4z"  ></path></symbol><symbol id="icon-desktop" viewBox="0 0 1024 1024"><path d="M928 140.8H96c-19.2 0-32 12.8-32 32v496c0 19.2 12.8 32 32 32h380.8v112H304c-9.6 0-16 6.4-16 16v48c0 3.2 3.2 6.4 6.4 6.4h432c3.2 0 6.4-3.2 6.4-6.4v-48c0-9.6-6.4-16-16-16H544v-112h384c19.2 0 32-12.8 32-32V172.8c0-19.2-12.8-32-32-32z m-38.4 486.4H134.4v-416h752v416z"  ></path></symbol><symbol id="icon-user" viewBox="0 0 1024 1024"><path d="M857.6 764.8c-19.2-44.8-44.8-86.4-80-118.4s-73.6-60.8-118.4-80c60.8-44.8 102.4-118.4 102.4-201.6 0-137.6-112-249.6-249.6-249.6S262.4 224 262.4 361.6c0 83.2 41.6 156.8 102.4 201.6-44.8 19.2-83.2 44.8-118.4 80s-60.8 73.6-80 118.4c-19.2 44.8-28.8 89.6-28.8 137.6 0 3.2 3.2 9.6 6.4 9.6h60.8c3.2 0 6.4-3.2 6.4-6.4 3.2-76.8 32-150.4 86.4-204.8 57.6-57.6 131.2-86.4 211.2-86.4s156.8 32 211.2 86.4c54.4 54.4 86.4 128 86.4 204.8 0 3.2 3.2 6.4 6.4 6.4h60.8c3.2 0 9.6-3.2 6.4-9.6 6.4-44.8-3.2-92.8-22.4-134.4zM512 534.4c-44.8 0-89.6-19.2-121.6-51.2s-51.2-76.8-51.2-121.6 19.2-89.6 51.2-121.6 76.8-51.2 121.6-51.2 89.6 19.2 121.6 51.2 51.2 76.8 51.2 121.6-19.2 89.6-51.2 121.6-76.8 51.2-121.6 51.2z"  ></path></symbol><symbol id="icon-poweroff" viewBox="0 0 1024 1024"><path d="M704 124.8c-6.4-3.2-12.8 0-12.8 6.4v64c0 6.4 3.2 9.6 6.4 12.8 22.4 12.8 44.8 32 60.8 51.2 32 32 57.6 70.4 76.8 112 19.2 44.8 28.8 89.6 28.8 137.6s-9.6 96-28.8 137.6c-19.2 41.6-44.8 80-76.8 112s-70.4 57.6-112 76.8c-44.8 19.2-89.6 28.8-137.6 28.8s-96-9.6-137.6-28.8c-41.6-19.2-80-44.8-112-76.8s-57.6-70.4-76.8-112c-16-38.4-25.6-86.4-25.6-134.4s9.6-96 28.8-137.6c19.2-41.6 44.8-80 76.8-112 16-22.4 38.4-38.4 60.8-51.2 3.2-3.2 6.4-9.6 6.4-12.8v-64c0-6.4-6.4-9.6-12.8-6.4-140.8 70.4-236.8 214.4-236.8 380.8-3.2 240 192 438.4 432 438.4s432-192 432-432c0-172.8-96-320-240-390.4z m-224 435.2h64c3.2 0 6.4-3.2 6.4-6.4V89.6c0-3.2-3.2-6.4-6.4-6.4h-64c-3.2 0-6.4 3.2-6.4 6.4v464c0 3.2 3.2 6.4 6.4 6.4z"  ></path></symbol><symbol id="icon-search" viewBox="0 0 1024 1024"><path d="M608 112c-166.4 0-304 137.6-304 304 0 70.4 22.4 134.4 64 185.6l-252.8 252.8c-3.2 3.2-3.2 9.6 0 12.8l41.6 41.6c3.2 3.2 9.6 3.2 12.8 0l252.8-252.8c51.2 38.4 115.2 64 185.6 64 166.4 0 304-137.6 304-304S774.4 112 608 112zM768 576c-41.6 41.6-99.2 67.2-160 67.2s-118.4-22.4-160-67.2c-41.6-41.6-67.2-99.2-67.2-160s22.4-118.4 67.2-160c41.6-41.6 99.2-67.2 160-67.2s118.4 22.4 160 67.2c41.6 41.6 67.2 99.2 67.2 160s-22.4 118.4-67.2 160z"  ></path></symbol><symbol id="icon-video_fill1" viewBox="0 0 1024 1024"><path d="M512 981.333333C252.8 981.333333 42.666667 771.2 42.666667 512S252.8 42.666667 512 42.666667s469.333333 210.133333 469.333333 469.333333-210.133333 469.333333-469.333333 469.333333zM414.208 277.333333v469.333334l312.917333-234.666667-312.917333-234.666667z"  ></path></symbol><symbol id="icon-video_outline" viewBox="0 0 1024 1024"><path d="M512 903.125333a391.125333 391.125333 0 1 0 0-782.250666 391.125333 391.125333 0 0 0 0 782.250666zM512 981.333333C252.8 981.333333 42.666667 771.2 42.666667 512S252.8 42.666667 512 42.666667s469.333333 210.133333 469.333333 469.333333-210.133333 469.333333-469.333333 469.333333zM414.208 277.333333l312.917333 234.666667-312.917333 234.666667v-469.333334z"  ></path></symbol><symbol id="icon-Add-outline" viewBox="0 0 1024 1024"><path d="M697.6 480c3.2 0 6.4 3.2 6.4 6.4v48c0 3.2-3.2 6.4-6.4 6.4H544v153.6c0 3.2-3.2 6.4-6.4 6.4h-48c-3.2 0-6.4-3.2-6.4-6.4V544h-153.6c-3.2 0-6.4-3.2-6.4-6.4v-48c0-3.2 3.2-6.4 6.4-6.4H480v-153.6c0-3.2 3.2-6.4 6.4-6.4h48c3.2 0 6.4 3.2 6.4 6.4V480h156.8zM512 64c246.4 0 448 201.6 448 448s-201.6 448-448 448S64 758.4 64 512 265.6 64 512 64z m0 819.2c204.8 0 371.2-166.4 371.2-371.2S716.8 140.8 512 140.8 140.8 307.2 140.8 512 307.2 883.2 512 883.2z"  ></path></symbol><symbol id="icon-Add" viewBox="0 0 1024 1024"><path d="M854.4 473.6h-304V160h-76.8v313.6H169.6c-3.2 0-9.6 3.2-9.6 6.4v57.6c0 3.2 3.2 6.4 9.6 6.4h304v320h76.8v-313.6h304c3.2 0 9.6-3.2 9.6-6.4v-57.6c0-9.6-3.2-12.8-9.6-12.8z"  ></path></symbol><symbol id="icon-play" viewBox="0 0 1024 1024"><path d="M923.434667 548.181333L363.946667 897.877333A42.666667 42.666667 0 0 1 298.666667 861.696V162.304a42.666667 42.666667 0 0 1 65.28-36.181333l559.488 349.696a42.666667 42.666667 0 0 1 0 72.362666z"  ></path></symbol><symbol id="icon-volume" viewBox="0 0 1024 1024"><path d="M232.533333 360.021333L519.978667 106.666667v810.666666L232.533333 663.978667H64V360.064h168.533333z m417.493334 56.234667l-30.933334-40.106667 80.256-61.866666 30.933334 40.106666c60.245333 78.122667 60.245333 221.141333 2.602666 311.509334l-27.264 42.752-85.418666-54.528 27.264-42.666667c35.584-55.850667 35.584-152.405333 2.56-195.2z m136.704-155.008l-27.946667-42.282667 84.608-55.808 27.904 42.24c117.034667 177.408 117.034667 444.245333-0.64 614.144l-28.885333 41.642667-83.285334-57.728 28.885334-41.642667c93.866667-135.466667 93.866667-357.376-0.64-500.565333z"  ></path></symbol><symbol id="icon-video_stop" viewBox="0 0 1024 1024"><path d="M213.333333 128h128a42.666667 42.666667 0 0 1 42.666667 42.666667v682.666666a42.666667 42.666667 0 0 1-42.666667 42.666667H213.333333a42.666667 42.666667 0 0 1-42.666666-42.666667V170.666667a42.666667 42.666667 0 0 1 42.666666-42.666667z m469.333334 0h128a42.666667 42.666667 0 0 1 42.666666 42.666667v682.666666a42.666667 42.666667 0 0 1-42.666666 42.666667h-128a42.666667 42.666667 0 0 1-42.666667-42.666667V170.666667a42.666667 42.666667 0 0 1 42.666667-42.666667z"  ></path></symbol><symbol id="icon-fill" viewBox="0 0 1024 1024"><path d="M854.4 288L640 73.6c-6.4-6.4-16-9.6-22.4-9.6H192c-19.2 0-32 12.8-32 32v832c0 19.2 12.8 32 32 32h640c19.2 0 32-12.8 32-32V310.4c0-6.4-3.2-16-9.6-22.4z m-64 38.4h-188.8V137.6l188.8 188.8zM512 499.2c12.8 28.8 28.8 51.2 51.2 67.2 51.2-6.4 83.2-3.2 96 9.6 9.6 9.6 12.8 25.6 6.4 38.4-3.2 6.4-12.8 19.2-32 19.2-22.4 0-54.4-9.6-83.2-25.6-25.6 3.2-54.4 12.8-80 22.4-6.4 3.2-12.8 3.2-19.2 6.4-38.4 64-67.2 80-83.2 80-3.2 0-6.4 0-9.6-3.2-6.4-3.2-12.8-6.4-16-16-3.2-6.4-3.2-12.8-3.2-19.2 6.4-28.8 44.8-54.4 76.8-67.2 16-28.8 38.4-73.6 51.2-108.8-9.6-41.6-16-73.6-9.6-99.2 3.2-12.8 19.2-22.4 32-22.4s28.8 9.6 32 28.8c3.2 35.2-3.2 64-9.6 89.6z m-108.8 150.4c-9.6 9.6-22.4 22.4-28.8 35.2 3.2-3.2 16-12.8 28.8-35.2z m86.4-233.6c0-3.2 0-3.2 0 0-6.4 0-3.2 28.8 0 48 6.4-12.8 6.4-41.6 0-48z m38.4 166.4c-16-12.8-28.8-28.8-38.4-44.8-6.4 19.2-19.2 48-32 70.4 3.2-3.2 9.6-3.2 12.8-6.4 16-6.4 35.2-16 57.6-19.2z m115.2 19.2s-3.2-9.6-44.8-9.6c35.2 16 44.8 9.6 44.8 9.6z"  ></path></symbol><symbol id="icon-pdf-outline" viewBox="0 0 1024 1024"><path d="M854.4 288L640 73.6c-6.4-6.4-16-9.6-22.4-9.6H192c-19.2 0-32 12.8-32 32v832c0 19.2 12.8 32 32 32h640c19.2 0 32-12.8 32-32V310.4c0-6.4-3.2-16-9.6-22.4z m-64 38.4h-188.8V137.6l188.8 188.8z m3.2 563.2H230.4V134.4h300.8V352c0 22.4 19.2 41.6 41.6 41.6h217.6v496zM512 499.2c6.4-25.6 12.8-54.4 6.4-83.2-3.2-22.4-19.2-28.8-32-28.8-16 0-28.8 9.6-32 22.4-6.4 25.6 0 57.6 9.6 99.2-12.8 32-35.2 80-51.2 108.8-28.8 16-70.4 38.4-76.8 67.2 0 6.4 0 12.8 3.2 19.2 3.2 6.4 9.6 12.8 16 16 3.2 0 6.4 3.2 9.6 3.2 19.2 0 44.8-12.8 83.2-80 6.4-3.2 12.8-3.2 19.2-6.4 25.6-9.6 54.4-19.2 80-22.4 28.8 16 60.8 25.6 83.2 25.6 22.4 0 28.8-12.8 32-19.2 6.4-12.8 3.2-32-6.4-38.4-12.8-12.8-44.8-16-96-9.6-19.2-22.4-35.2-44.8-48-73.6z m-108.8 150.4c-12.8 19.2-25.6 28.8-28.8 35.2 6.4-12.8 19.2-25.6 28.8-35.2z m86.4-233.6c6.4 9.6 3.2 35.2 0 48-3.2-19.2-3.2-48 0-48 0-3.2 0-3.2 0 0z m38.4 166.4c-22.4 6.4-41.6 12.8-57.6 19.2-3.2 3.2-9.6 3.2-12.8 6.4 12.8-25.6 25.6-51.2 32-70.4 9.6 16 22.4 32 38.4 44.8z m115.2 19.2s-9.6 6.4-44.8-9.6c41.6 0 44.8 9.6 44.8 9.6z"  ></path></symbol><symbol id="icon-chevron_left1" viewBox="0 0 1024 1024"><path d="M723.2 217.6V140.8c0-6.4-6.4-9.6-12.8-6.4l-451.2 352c-16 12.8-16 38.4 0 51.2l451.2 352c6.4 3.2 12.8 0 12.8-6.4v-76.8c0-6.4-3.2-9.6-6.4-12.8L358.4 512l361.6-281.6c3.2-3.2 3.2-6.4 3.2-12.8z"  ></path></symbol><symbol id="icon-chevron_right1" viewBox="0 0 1024 1024"><path d="M764.8 486.4L313.6 134.4c-6.4-3.2-12.8 0-12.8 6.4v76.8c0 6.4 3.2 9.6 6.4 12.8L668.8 512 307.2 793.6c-3.2 3.2-6.4 6.4-6.4 12.8v76.8c0 6.4 6.4 9.6 12.8 6.4l451.2-352c16-12.8 16-38.4 0-51.2z"  ></path></symbol><symbol id="icon-DropDownOutline1" viewBox="0 0 1024 1024"><path d="M883.2 256h-73.6c-6.4 0-9.6 3.2-12.8 6.4L512 652.8 227.2 262.4C224 259.2 220.8 256 214.4 256H140.8c-6.4 0-9.6 6.4-6.4 12.8l352 486.4c12.8 19.2 38.4 19.2 51.2 0l352-486.4c3.2-6.4 0-12.8-6.4-12.8z"  ></path></symbol><symbol id="icon-DropUpOutline1" viewBox="0 0 1024 1024"><path d="M889.6 755.2l-352-486.4c-12.8-19.2-38.4-19.2-51.2 0l-352 486.4c-3.2 6.4 0 12.8 6.4 12.8h73.6c6.4 0 9.6-3.2 12.8-6.4L512 371.2l284.8 390.4c3.2 3.2 6.4 6.4 12.8 6.4h73.6c6.4 0 9.6-6.4 6.4-12.8z"  ></path></symbol><symbol id="icon-menuopen" viewBox="0 0 1024 1024"><path d="M409.6 441.6h480c3.2 0 6.4-3.2 6.4-6.4v-57.6c0-3.2-3.2-6.4-6.4-6.4h-480c-3.2 0-6.4 3.2-6.4 6.4v57.6c-3.2 3.2 0 6.4 6.4 6.4z m-9.6 204.8c0 3.2 3.2 6.4 6.4 6.4h480c3.2 0 6.4-3.2 6.4-6.4v-57.6c0-3.2-3.2-6.4-6.4-6.4h-480c-3.2 0-6.4 3.2-6.4 6.4v57.6zM902.4 160H121.6c-6.4 0-9.6 3.2-9.6 6.4V224c0 3.2 3.2 6.4 6.4 6.4h784c3.2 0 6.4-3.2 6.4-6.4V166.4c3.2-3.2 0-6.4-6.4-6.4z m0 633.6H121.6c-3.2 0-6.4 3.2-6.4 6.4v57.6c0 3.2 3.2 6.4 6.4 6.4h784c3.2 0 6.4-3.2 6.4-6.4V800c0-3.2-3.2-6.4-9.6-6.4zM140.8 643.2l156.8-121.6c3.2-3.2 3.2-9.6 0-12.8L140.8 384c-6.4-3.2-12.8 0-12.8 6.4v246.4c0 6.4 9.6 9.6 12.8 6.4z"  ></path></symbol><symbol id="icon-menufold" viewBox="0 0 1024 1024"><path d="M409.6 441.6h480c3.2 0 6.4-3.2 6.4-6.4v-57.6c0-3.2-3.2-6.4-6.4-6.4h-480c-3.2 0-6.4 3.2-6.4 6.4v57.6c-3.2 3.2 0 6.4 6.4 6.4z m-9.6 204.8c0 3.2 3.2 6.4 6.4 6.4h480c3.2 0 6.4-3.2 6.4-6.4v-57.6c0-3.2-3.2-6.4-6.4-6.4h-480c-3.2 0-6.4 3.2-6.4 6.4v57.6zM902.4 160H121.6c-6.4 0-9.6 3.2-9.6 6.4V224c0 3.2 3.2 6.4 6.4 6.4h784c3.2 0 6.4-3.2 6.4-6.4V166.4c3.2-3.2 0-6.4-6.4-6.4z m0 633.6H121.6c-3.2 0-6.4 3.2-6.4 6.4v57.6c0 3.2 3.2 6.4 6.4 6.4h784c3.2 0 6.4-3.2 6.4-6.4V800c0-3.2-3.2-6.4-9.6-6.4zM115.2 518.4L272 640c6.4 3.2 12.8 0 12.8-6.4v-246.4c0-6.4-9.6-12.8-12.8-6.4l-156.8 121.6c-3.2 6.4-3.2 12.8 0 16z"  ></path></symbol><symbol id="icon-image-fill" viewBox="0 0 1024 1024"><path d="M928 160H96c-19.2 0-32 12.8-32 32v640c0 19.2 12.8 32 32 32h832c19.2 0 32-12.8 32-32V192c0-19.2-12.8-32-32-32zM339.2 304c35.2 0 64 28.8 64 64s-28.8 64-64 64-64-28.8-64-64 28.8-64 64-64z m512 438.4s-3.2 3.2-6.4 3.2H176c-3.2 0-6.4-3.2-6.4-6.4s0-3.2 3.2-6.4l169.6-201.6c3.2-3.2 6.4-3.2 12.8 0l99.2 118.4 156.8-188.8c3.2-3.2 6.4-3.2 12.8 0l230.4 272s0 6.4-3.2 9.6z"  ></path></symbol><symbol id="icon-image-outline" viewBox="0 0 1024 1024"><path d="M928 160H96c-19.2 0-32 12.8-32 32v640c0 19.2 12.8 32 32 32h832c19.2 0 32-12.8 32-32V192c0-19.2-12.8-32-32-32z m-38.4 633.6H134.4v-38.4l137.6-163.2 150.4 179.2 233.6-275.2 230.4 272v25.6z m0-131.2l-224-265.6c-3.2-3.2-9.6-3.2-12.8 0l-227.2 268.8-144-169.6c-3.2-3.2-9.6-3.2-12.8 0l-131.2 156.8V230.4h752v432zM304 454.4c48 0 89.6-38.4 89.6-89.6S352 281.6 304 281.6 217.6 320 217.6 368s38.4 86.4 86.4 86.4z m0-115.2c16 0 28.8 12.8 28.8 28.8s-12.8 28.8-28.8 28.8-28.8-12.8-28.8-28.8 12.8-28.8 28.8-28.8z"  ></path></symbol><symbol id="icon-Movie" viewBox="0 0 1024 1024"><path d="M927.904 151.488c0-30.656-24.8-55.488-55.488-55.488H151.488C120.832 96 96 120.832 96 151.488v721.024C96 903.168 120.832 928 151.488 928h721.024c30.656 0 55.488-24.832 55.488-55.488V151.488h-0.096zM247.52 872.128H151.776v-139.424h95.744v139.424z m0-193.344H151.776v-138.496h95.744v138.496z m0-195.2H151.776v-138.464h95.744v138.496z m0-192.384H151.776V151.776h95.744V291.2zM719.68 872.128H304.224v-331.84H719.68v331.84z m0-388.512H304.224V151.776H719.68v331.84z m152.416 388.512h-95.744v-139.424h95.744v139.424z m0-193.344h-95.744v-138.496h95.744v138.496z m0-195.2h-95.744v-138.464h95.744v138.496z m0-192.384h-95.744V151.776h95.744V291.2z"  ></path></symbol><symbol id="icon-dengpao" viewBox="0 0 1024 1024"><path d="M402.2784 834.56c0 19.712 16.4864 35.84 36.5568 35.84h146.3296a36.352 36.352 0 0 0 36.5568-35.84v-35.84H402.2784v35.84zM512 153.6C370.688 153.6 256 265.9328 256 404.48c0 85.2992 43.52 160.3584 109.7216 205.7216V691.2c0 19.712 16.4352 35.84 36.5568 35.84h219.4432a36.352 36.352 0 0 0 36.5568-35.84v-80.9984C724.48 564.8896 768 489.7792 768 404.48 768 265.9328 653.312 153.6 512 153.6z m104.448 397.824l-31.2832 21.2992V655.36H438.784v-82.432l-31.232-21.3504a178.3296 178.3296 0 0 1-78.4384-146.944c0-98.7136 82.0736-179.2 182.8352-179.2 100.7616 0 182.8352 80.4864 182.8352 179.2a178.2784 178.2784 0 0 1-78.4384 146.7904z"  ></path></symbol><symbol id="icon-volume_off" viewBox="0 0 1024 1024"><path d="M285.226667 314.453333L144.085333 146.218667 221.738667 81.066667l647.082666 771.2-77.653333 65.152-271.104-323.114667v323.968l-287.488-253.354667H64V360.832h168.533333L285.269333 314.453333z m129.621333-114.261333L520.106667 107.52V325.546667L414.848 200.192z m344.576 410.666667l-84.864-101.12c0.298667-36.437333-7.936-71.253333-24.405333-92.586667l-30.976-40.149333 80.298666-61.866667 30.933334 40.106667c48.896 63.402667 58.112 169.557333 29.013333 255.573333z m138.453333 164.992l-71.936-85.76c52.906667-133.248 39.978667-308.181333-39.125333-428.032l-27.904-42.282667 84.608-55.808 27.904 42.282667c107.264 162.56 116.266667 400.213333 26.453333 569.6z"  ></path></symbol><symbol id="icon-close-eye-fill" viewBox="0 0 1024 1024"><path d="M160 172.8L204.8 128l105.6 102.4c60.8-28.8 128-44.8 201.6-44.8 192 0 336 99.2 428.8 300.8 6.4 16 6.4 35.2 0 51.2-35.2 76.8-80 137.6-128 182.4L928 832l-44.8 44.8L160 172.8z m44.8 134.4l140.8 137.6c-9.6 22.4-12.8 44.8-12.8 70.4 0 96 80 176 176 176 25.6 0 51.2-6.4 73.6-16l128 124.8c-57.6 28.8-124.8 41.6-195.2 41.6-192 0-336-99.2-428.8-300.8-6.4-16-6.4-35.2 0-51.2 28.8-76.8 70.4-137.6 118.4-182.4z m326.4 313.6c-6.4 0-12.8 3.2-22.4 3.2-60.8 0-112-51.2-112-112v-19.2l134.4 128z m-96-268.8l51.2 51.2c6.4 0 16-3.2 22.4-3.2 60.8 0 112 51.2 112 112 0 6.4 0 12.8-3.2 19.2l51.2 51.2c9.6-22.4 12.8-44.8 12.8-70.4 0-96-80-176-176-176-22.4 0-48 6.4-70.4 16z"  ></path></symbol><symbol id="icon-eye-fill" viewBox="0 0 1024 1024"><path d="M396.8 512c0 60.8 51.2 112 112 112s112-51.2 112-112-51.2-112-112-112-112 51.2-112 112z m544-25.6C848 288 704 185.6 512 185.6S176 288 83.2 486.4c-6.4 16-6.4 35.2 0 51.2 96 198.4 236.8 300.8 428.8 300.8s336-99.2 428.8-300.8c9.6-16 9.6-35.2 0-51.2z m-432 201.6c-96 0-176-80-176-176s80-176 176-176 176 80 176 176-80 176-176 176z"  ></path></symbol><symbol id="icon-bookmarks" viewBox="0 0 1024 1024"><path d="M832 78.2336v867.5328c0 5.5808-4.1984 10.5984-10.7008 12.9024a22.3744 22.3744 0 0 1-19.5584-2.1504L512 761.9072l-289.792 194.6112a22.3744 22.3744 0 0 1-19.5072 2.1504c-6.5024-2.304-10.7008-7.3216-10.7008-12.9024V78.2336c0-7.8848 8.192-14.2336 18.2784-14.2336h603.4432c10.0864 0 18.2784 6.3488 18.2784 14.2336z"  ></path></symbol></svg>';
            if ((t = document.getElementsByTagName("script"))[t.length - 1].getAttribute("data-injectcss") && !e.__iconfont__svg__cssinject__) {
                e.__iconfont__svg__cssinject__ = !0;
                try {
                    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")
                } catch (t) {
                    console && console.log(t)
                }
            }! function (t) {
                if (document.addEventListener)
                    if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) setTimeout(t, 0);
                    else {
                        document.addEventListener("DOMContentLoaded", (function e() {
                            document.removeEventListener("DOMContentLoaded", e, !1), t()
                        }), !1)
                    }
                else document.attachEvent && (n = t, r = e.document, o = !1, a = function () {
                    o || (o = !0, n())
                }, (i = function () {
                    try {
                        r.documentElement.doScroll("left")
                    } catch (e) {
                        return void setTimeout(i, 50)
                    }
                    a()
                })(), r.onreadystatechange = function () {
                    "complete" == r.readyState && (r.onreadystatechange = null, a())
                });
                var n, r, o, a, i
            }((function () {
                var e, t, r, o, a, i;
                (e = document.createElement("div")).innerHTML = n, n = null, (t = e.getElementsByTagName("svg")[0]) && (t.setAttribute("aria-hidden", "true"), t.style.position = "absolute", t.style.width = 0, t.style.height = 0, t.style.overflow = "hidden", r = t, (o = document.body).firstChild ? (a = r, (i = o.firstChild).parentNode.insertBefore(a, i)) : o.appendChild(r))
            }))
        }(window)
    },
    "I/Ru": function (e, t, n) {
        "use strict";
        n("wNYO");
        var r = n("YFH1"),
            o = n.n(r),
            a = n("xwgP"),
            i = n.n(a),
            c = (n("nzUQ"), n("2OIm")),
            u = n("8SHQ"),
            s = n("9kRk"),
            l = n("s+4w"),
            f = n("ZTfI"),
            p = n("K9Av"),
            m = n.n(p),
            d = Object(l.detect)();

        function y(e) {
            c.a.sum("风控异常 ".concat({
                11: "webgl不兼容",
                12: "audio不兼容",
                13: "canvas不兼容",
                14: "获取指纹异常统计（不影响功能）"
            } [e], " msg:").concat(JSON.stringify(d) + window.navigator.userAgent))
        }
        for (var h = 11; h <= 14; h++) f.FpLog.push(y.bind(null, h));
        m()({
            use: [],
            serviceLocation: "xxqg",
            domain: u.a.domain,
            timeout: 2e3
        });
        var v = n("ej2Y"),
            b = (n("EO8f"), n("tlJg"));
        n("nF/r"), n("hgoN");

        function g(e) {
            return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function w(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function j(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function x(e, t) {
            return (x = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function O(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = M(e);
                if (t) {
                    var o = M(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return E(this, n)
            }
        }

        function E(e, t) {
            return !t || "object" !== g(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function M(e) {
            return (M = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        Object(s.k)();
        var k = function (e) {
            ! function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && x(e, t)
            }(s, e);
            var t, n, r, c = O(s);

            function s() {
                return w(this, s), c.apply(this, arguments)
            }
            return t = s, (n = [{
                key: "componentDidMount",
                value: function () {
                    Object(b.a)()
                }
            }, {
                key: "render",
                value: function () {
                    return i.a.createElement(o.a, {
                        locale: v.a
                    }, i.a.createElement(a.Fragment, null, i.a.createElement("div", null, i.a.createElement("div", {
                        className: "layout-header"
                    }, i.a.createElement("iframe", {
                        src: u.a.headerIframeUrl,
                        scrolling: "no",
                        frameBorder: "0",
                        style: {
                            width: "100%",
                            height: "100%"
                        }
                    })), i.a.createElement("div", {
                        style: {
                            margin: "0 auto",
                            width: 1e3,
                            paddingTop: 0
                        },
                        className: "layout-body"
                    }, this.props.children), i.a.createElement("div", {
                        className: "layout-footer"
                    }, i.a.createElement("iframe", {
                        src: u.a.footerIframeUrl,
                        scrolling: "no",
                        frameBorder: "0",
                        style: {
                            width: "1000px",
                            height: "100%"
                        }
                    })))))
                }
            }]) && j(t.prototype, n), r && j(t, r), s
        }(i.a.Component);
        t.a = k
    },
    LBz4: function (e, t, n) {
        "use strict";

        function r(e, t) {
            var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = function (e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return o(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t)
                    }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var r = 0,
                        a = function () {};
                    return {
                        s: a,
                        n: function () {
                            return r >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[r++]
                            }
                        },
                        e: function (e) {
                            throw e
                        },
                        f: a
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var i, c = !0,
                u = !1;
            return {
                s: function () {
                    n = n.call(e)
                },
                n: function () {
                    var e = n.next();
                    return c = e.done, e
                },
                e: function (e) {
                    u = !0, i = e
                },
                f: function () {
                    try {
                        c || null == n.return || n.return()
                    } finally {
                        if (u) throw i
                    }
                }
            }
        }

        function o(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function a(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        n.d(t, "e", (function () {
            return i
        })), n.d(t, "c", (function () {
            return u
        })), n.d(t, "b", (function () {
            return s
        })), n.d(t, "d", (function () {
            return l
        })), n.d(t, "a", (function () {
            return f
        }));
        var i = {
                NOT_DONE: 1,
                DONE: 2
            },
            c = function () {
                function e(t) {
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.mapping = t;
                    var n, o = r(t);
                    try {
                        for (o.s(); !(n = o.n()).done;) {
                            var a = n.value;
                            this[a.key] = a.value
                        }
                    } catch (e) {
                        o.e(e)
                    } finally {
                        o.f()
                    }
                }
                var t, n, o;
                return t = e, (n = [{
                    key: "getName",
                    value: function (e) {
                        var t = this.mapping.find((function (t) {
                            return t.value === e
                        }));
                        return t && t.name
                    }
                }]) && a(t.prototype, n), o && a(t, o), e
            }(),
            u = new c([{
                value: 1,
                name: "单选题",
                key: "RATIO"
            }, {
                value: 2,
                name: "多选题",
                key: "CHECKBOX"
            }, {
                value: 4,
                name: "填空题",
                key: "FILL"
            }]),
            s = new c([{
                value: 1,
                name: "专项答题",
                key: "PAPER"
            }, {
                value: 2,
                name: "每周一练",
                key: "WEEKLY"
            }, {
                value: 3,
                name: "每日答题",
                key: "PRACTICE"
            }, {
                value: 4,
                name: "答题挑战",
                key: "CHALLENGE"
            }]),
            l = {
                102: "已领取积分",
                103: "积分领取已达上限"
            },
            f = 240
    },
    MBZT: function (e, t, n) {
        "use strict";
        n.r(t);
        n("QY5e");
        var r = n("xwgP"),
            o = n.n(r),
            a = n("fK+4"),
            i = n.n(a),
            c = n("9kRk"),
            u = (n("0Dzv"), n("2Jmy")),
            s = n.n(u),
            l = (n("fXXf"), n("1MGc")),
            f = n.n(l),
            p = (n("YGsE"), n("Odkp")),
            m = n.n(p),
            d = n("KJDX"),
            y = n("404v"),
            h = n("fJgZ"),
            v = n("I/Ru"),
            b = n("rMbk"),
            g = n("0B97"),
            w = n("C9sq"),
            j = n("XSgU"),
            x = n("eULb"),
            O = n("mjDs"),
            E = n("ON/i"),
            M = n("jK+o"),
            k = n.n(M);
        n("Ttlu");

        function S(e) {
            return (S = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function I(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function P(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function z(e, t) {
            return (z = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function N(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = T(e);
                if (t) {
                    var o = T(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return A(this, n)
            }
        }

        function A(e, t) {
            return !t || "object" !== S(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function T(e) {
            return (T = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        var D = function (e) {
            ! function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && z(e, t)
            }(i, e);
            var t, n, r, a = N(i);

            function i() {
                return I(this, i), a.apply(this, arguments)
            }
            return t = i, (n = [{
                key: "render",
                value: function () {
                    var e = this.props,
                        t = e.data,
                        n = e.className,
                        r = e.curQuestionIndex,
                        a = e.onClick,
                        i = void 0 === a ? function () {} : a;
                    if (!t || Object(h.isEmpty)(t)) return null;
                    var c = Array.isArray(t) ? t.length : t.size;
                    return o.a.createElement("div", {
                        className: k()(n, "question-grid"),
                        style: {
                            justifyContent: c < 10 ? "center" : "flex-start"
                        }
                    }, t.map((function (e, t) {
                        return o.a.createElement("div", {
                            className: "block ".concat(e.type),
                            key: t,
                            onClick: function () {
                                "disabled" !== e.type && i(t)
                            }
                        }, r === t && o.a.createElement("div", {
                            className: "indicator"
                        }), t + 1, "correct" === e.type && o.a.createElement(f.a, {
                            className: "icon",
                            type: "check",
                            style: {
                                fontSize: "12px"
                            }
                        }), "wrong" === e.type && o.a.createElement(f.a, {
                            className: "icon",
                            type: "close",
                            style: {
                                fontSize: "12px"
                            }
                        }))
                    })))
                }
            }]) && P(t.prototype, n), r && P(t, r), i
        }(o.a.Component);
        D.propTypes = {};
        var L = n("tDyU"),
            C = n("LBz4"),
            _ = n("tlJg");
        n("7WYT");

        function R(e) {
            return (R = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function q() {
            return (q = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function B(e, t, n, r, o, a, i) {
            try {
                var c = e[a](i),
                    u = c.value
            } catch (e) {
                return void n(e)
            }
            c.done ? t(u) : Promise.resolve(u).then(r, o)
        }

        function H(e) {
            return function () {
                var t = this,
                    n = arguments;
                return new Promise((function (r, o) {
                    var a = e.apply(t, n);

                    function i(e) {
                        B(a, r, o, i, c, "next", e)
                    }

                    function c(e) {
                        B(a, r, o, i, c, "throw", e)
                    }
                    i(void 0)
                }))
            }
        }

        function U(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function V(e, t) {
            return (V = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function Z(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = G(e);
                if (t) {
                    var o = G(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return Q(this, n)
            }
        }

        function Q(e, t) {
            return !t || "object" !== R(t) && "function" != typeof t ? F(e) : t
        }

        function F(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function G(e) {
            return (G = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function X(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var Y = 1,
            J = 2,
            W = 3,
            K = 4;

        function $(e) {
            return "".concat(e, "_t")
        }

        function ee(e) {
            var t = 0;
            return e.some((function (n, r) {
                return n.chose && 4 === n.questionDisplay && n.chose.length < n.answers.length ? (t = r, !0) : n.chose && 0 !== n.chose.length ? (e.length - 1 === r && (t = r), !1) : (t = r, !0)
            })), t
        }

        function te() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            e.forEach((function (e) {
                var t = e.chose;
                if (t && 0 !== t.length)
                    for (var n = 0; n < t.length; n += 1) 0 === t[n].value.length && (t.splice(n, 1), n -= 1)
            }))
        }
        var ne = function (e) {
            ! function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && V(e, t)
            }(u, e);
            var t, n, r, a, i = Z(u);

            function u() {
                var e;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, u), X(F(e = i.call(this)), "fetchSolution", function () {
                    var t = H(regeneratorRuntime.mark((function t(n, r) {
                        var o;
                        return regeneratorRuntime.wrap((function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, L.e({
                                        id: n,
                                        examScoreId: r,
                                        type: C.b.PAPER
                                    });
                                case 2:
                                    o = t.sent, e.setState({
                                        practiceResult: o,
                                        questions: Object(y.a)(o.questions),
                                        quizInfo: o,
                                        title: o.name,
                                        status: K
                                    });
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function (e, n) {
                        return t.apply(this, arguments)
                    }
                }()), X(F(e), "beforeunloadHandler", (function (t) {
                    if (e.save(), e.state.status === J && !Object(c.n)()) {
                        t.preventDefault();
                        return t.returnValue = "确定要退出考试?", "确定要退出考试?"
                    }
                })), X(F(e), "setupBeforeunloadListener", (function () {
                    window.addEventListener("beforeunload", e.beforeunloadHandler)
                })), X(F(e), "removeBeforeunloadListener", (function () {
                    window.removeEventListener("beforeunload", e.beforeunloadHandler)
                })), X(F(e), "startTimer", (function () {
                    e.timer || (e.timer = setInterval((function () {
                        var t = e.state.usedTime + 1;
                        t <= e.state.quizInfo.totalTime ? e.setState({
                            usedTime: t
                        }) : e.timeout()
                    }), 1e3))
                })), X(F(e), "stopTimer", (function () {
                    clearInterval(e.timer)
                })), X(F(e), "markTimeout", (function (e) {
                    localStorage.setItem($(e), "1")
                })), X(F(e), "checkTimeout", (function (e) {
                    var t = $(e),
                        n = !!localStorage.getItem(t);
                    return localStorage.removeItem(t), n
                })), X(F(e), "timeout", (function () {
                    var t;
                    e.stopTimer(), null === (t = e.debouncedSave) || void 0 === t || t.cancel(), e.markTimeout(e.state.quizInfo.id), e.removeBeforeunloadListener(), Object(g.a)({
                        className: "timeout-modal",
                        centered: !0,
                        okText: "确定",
                        icon: null,
                        title: "已超过最大作答时间，请重新答题",
                        onOk: function () {
                            window.location.reload()
                        }
                    })
                })), X(F(e), "flushDebouncedSave", (function () {
                    var t;
                    null === (t = e.debouncedSave) || void 0 === t || t.flush()
                })), X(F(e), "onClickNext", (function () {
                    var t = e.state,
                        n = t.curQuestionIndex;
                    n < t.questions.size - 1 && e.setState({
                        curQuestionIndex: n + 1
                    }, e.flushDebouncedSave), Object(c.r)(C.a)
                })), X(F(e), "onClickPre", (function () {
                    var t = e.state.curQuestionIndex;
                    t > 0 && e.setState({
                        curQuestionIndex: t - 1
                    }, e.flushDebouncedSave), Object(c.r)(C.a)
                })), X(F(e), "onClickSolutionButton", (function () {
                    e.setState({
                        questions: Object(y.a)(e.state.practiceResult.questions),
                        status: K,
                        curQuestionIndex: 0
                    })
                })), X(F(e), "gotoUnansweredQuestion", (function () {
                    var t = e.state,
                        n = t.answers,
                        r = t.questions.findIndex((function (e, t) {
                            var r = n.get(t);
                            return !Object(c.o)(e, r)
                        })); - 1 !== r && e.setState({
                        curQuestionIndex: r
                    })
                })), X(F(e), "onClickSubmit", H(regeneratorRuntime.mark((function t() {
                    var n, r, o, a, i;
                    return regeneratorRuntime.wrap((function (t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (n = e.state, r = n.quizInfo, o = n.usedTime, e.areAllQuestionAnswered()) {
                                    t.next = 4;
                                    break
                                }
                                return Object(g.a)({
                                    title: "还有题目未作答",
                                    onOk: e.gotoUnansweredQuestion
                                }), t.abrupt("return");
                            case 4:
                                if (!e.loading) {
                                    t.next = 6;
                                    break
                                }
                                return t.abrupt("return");
                            case 6:
                                return e.loading = !0, t.prev = 7, e.debouncedSave.cancel(), a = e.getQuestionsForSubmit(), e.stopTimer(), t.next = 13, L.k({
                                    id: r.id,
                                    type: r.type,
                                    questions: a,
                                    usedTime: o,
                                    uniqueId: e.uniqueId
                                }, (function () {
                                    e.loading = !1
                                }));
                            case 13:
                                delete(i = t.sent).tipScore, e.setState({
                                    practiceResult: i,
                                    status: W,
                                    loading: !0
                                }, (function () {
                                    e.scoreTimer = setTimeout((function () {
                                        e.getScore(i.queryTipScoreId)
                                    }), 2e3)
                                })), t.next = 21;
                                break;
                            case 18:
                                t.prev = 18, t.t0 = t.catch(7), e.loading = !1;
                            case 21:
                                return t.prev = 21, e.tipsTimer && window.clearTimeout(e.tipsTimer), t.finish(21);
                            case 24:
                                Object(_.c)({
                                    actionType: "exam-paper-finish"
                                });
                            case 25:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [7, 18, 21, 24]
                    ])
                })))), X(F(e), "getQuestionsForSubmit", (function () {
                    var t = e.state,
                        n = t.answers;
                    return t.questions.map((function (e, t) {
                        var r = n.get(t);
                        return (r = r && r.map((function (e) {
                            return {
                                answerId: e.answerId,
                                label: e.label,
                                value: e.value
                            }
                        })).toJS()) && {
                            questionId: e.questionId,
                            answers: r
                        }
                    })).filter((function (e) {
                        return !Object(h.isEmpty)(e)
                    })).toJS()
                })), X(F(e), "save", H(regeneratorRuntime.mark((function t() {
                    var n, r, o;
                    return regeneratorRuntime.wrap((function (t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (n = e.state, r = n.quizInfo, o = n.usedTime, n.status === J) {
                                    t.next = 3;
                                    break
                                }
                                return t.abrupt("return");
                            case 3:
                                return t.next = 5, L.h({
                                    type: C.b.PAPER,
                                    id: r.id,
                                    questions: e.getQuestionsForSubmit(),
                                    usedTime: o
                                });
                            case 5:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))), X(F(e), "getScore", function () {
                    var t = H(regeneratorRuntime.mark((function t(n) {
                        var r;
                        return regeneratorRuntime.wrap((function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, L.a(n);
                                case 2:
                                    r = t.sent, e.setState({
                                        scoreData: r || {},
                                        loading: !1
                                    });
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function (e) {
                        return t.apply(this, arguments)
                    }
                }()), e.state = {
                    questions: Object(y.a)(),
                    answers: Object(y.a)(),
                    curQuestionIndex: 0,
                    title: "",
                    practiceResult: null,
                    usedTime: 0,
                    status: Y,
                    scoreData: {},
                    loading: !1
                }, e.time = +new Date, e
            }
            return t = u, (n = [{
                key: "componentDidMount",
                value: (a = H(regeneratorRuntime.mark((function e() {
                    var t, n, r, o, a, i, u, s, l, f, p = this;
                    return regeneratorRuntime.wrap((function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (t = Object(c.g)(), n = t.id, r = t.examScoreId, this.setupBeforeunloadListener(), (a = r ? K : J) !== K) {
                                    e.next = 7;
                                    break
                                }
                                this.fetchSolution(n, r), e.next = 33;
                                break;
                            case 7:
                                return i = {
                                    type: C.b.PAPER,
                                    id: n
                                }, this.checkTimeout(n) && (i.reset = !0), e.prev = 9, e.next = 12, L.j(i);
                            case 12:
                                u = e.sent, e.next = 18;
                                break;
                            case 15:
                                e.prev = 15, e.t0 = e.catch(9), e.t0 && Object(g.a)({
                                    centered: !0,
                                    okText: "确定",
                                    title: "网络开小差~请稍后重试",
                                    onOk: function () {
                                        p.removeBeforeunloadListener(), window.location.href = "/points/exam-paper-list.html"
                                    }
                                });
                            case 18:
                                return e.prev = 18, this.tipsTimer && window.clearTimeout(this.tipsTimer), e.finish(18);
                            case 21:
                                if (te(u.questions), u) {
                                    e.next = 24;
                                    break
                                }
                                return e.abrupt("return");
                            case 24:
                                o = u.name, this.uniqueId = u.uniqueId, s = ee(u.questions), l = {
                                    questions: Object(y.a)(u.questions),
                                    title: o,
                                    quizInfo: u,
                                    usedTime: u.usedTime,
                                    status: a,
                                    visible: !1,
                                    curQuestionIndex: s
                                }, f = Object(y.a)(), u.questions.forEach((function (e, t) {
                                    e.chose && (f = f.set(t, Object(y.a)(e.chose)))
                                })), l.answers = f, this.setState(l, this.startTimer), this.debouncedSave = Object(h.debounce)(this.save, 5e3);
                            case 33:
                            case "end":
                                return e.stop()
                        }
                    }), e, this, [
                        [9, 15, 18, 21]
                    ])
                }))), function () {
                    return a.apply(this, arguments)
                })
            }, {
                key: "componentWillUnmount",
                value: function () {
                    this.tipsTimer && window.clearTimeout(this.tipsTimer), this.scoreTimer && window.clearTimeout(this.scoreTimer)
                }
            }, {
                key: "render",
                value: function () {
                    var e = this,
                        t = this.state,
                        n = t.questions,
                        r = t.answers,
                        a = t.curQuestionIndex,
                        i = t.usedTime,
                        u = t.title,
                        l = t.practiceResult,
                        p = t.quizInfo,
                        h = t.status,
                        g = t.scoreData,
                        M = t.loading,
                        k = r.get(a) || Object(y.a)(),
                        S = n.get(a),
                        I = [],
                        P = r.size;
                    return h === J ? I = null == n ? void 0 : n.map((function (e, t) {
                        var o = r.get(t),
                            a = {
                                type: "disabled"
                            };
                        if (t < P) 4 === e.questionDisplay && o.size < e.answers.length || 2 === e.questionDisplay && 0 === o.size ? a.type = "empty" : a.type = "filled";
                        else if (t === P && (a.type = "empty", P > 0)) {
                            var i = r.get(t - 1),
                                c = n.get(t - 1),
                                u = c.questionDisplay,
                                s = c.answers;
                            (4 === u && i.size < s.length || 2 === u && 0 === i.size) && (a.type = "disabled")
                        }
                        return a
                    })) : h === K && (I = this.isReadingSolutionNeverAnswered() ? new Array(l.questions.length).fill({
                        type: "empty"
                    }) : l.questions.map((function (e) {
                        return {
                            type: Object(c.l)(e) ? "correct" : "wrong"
                        }
                    }))), o.a.createElement(v.a, null, o.a.createElement(d.Helmet, null, o.a.createElement("title", null, "专项答题")), o.a.createElement("div", {
                        className: "exam-paper-detail"
                    }, o.a.createElement(b.a, {
                        navs: [b.b.HOME, b.b.MY_STUDY, b.b.EXAM_INDEX, b.b.EXAM_PAPER_INDEX, b.b.EXAM_DOING],
                        onLeave: function (t, n) {
                            var r;
                            h !== J || Object(c.n)() || (t.preventDefault(), Object(w.a)({
                                title: "确定要退出考试？",
                                onOk: function () {
                                    e.save()
                                },
                                onCancel: (r = H(regeneratorRuntime.mark((function t() {
                                    return regeneratorRuntime.wrap((function (t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return e.removeBeforeunloadListener(), t.next = 3, e.save();
                                            case 3:
                                                window.location.href = n.href;
                                            case 4:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                }))), function () {
                                    return r.apply(this, arguments)
                                }),
                                okText: "继续",
                                cancelText: "退出"
                            }))
                        }
                    }), o.a.createElement(E.a, null), h === W ? o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                        className: "header-row"
                    }, o.a.createElement("div", {
                        className: "title"
                    }, u)), o.a.createElement(m.a, {
                        spinning: M
                    }, o.a.createElement(j.a, q({
                        type: C.b.PAPER,
                        onClickSolutionButton: this.onClickSolutionButton
                    }, l, g)))) : o.a.createElement(o.a.Fragment, null, o.a.createElement(D, {
                        curQuestionIndex: a,
                        data: I,
                        onClick: function (t) {
                            e.setState({
                                curQuestionIndex: t
                            })
                        }
                    }), o.a.createElement("div", {
                        className: "header-row"
                    }, o.a.createElement("div", {
                        className: "title"
                    }, u), S && o.a.createElement("div", {
                        className: "pager"
                    }, o.a.createElement("span", {
                        className: "big"
                    }, a + 1), "/", n.size)), p && !this.isReadingSolutionNeverAnswered() && o.a.createElement("div", {
                        className: "sub-header"
                    }, o.a.createElement(f.a, {
                        type: "clock-circle"
                    }), h === J && o.a.createElement("span", null, o.a.createElement("span", {
                        className: "time"
                    }, " ", Object(c.f)(p.totalTime - i))), h === K && o.a.createElement("span", null, o.a.createElement("span", null, " 用时"), o.a.createElement("span", {
                        className: "time"
                    }, Object(c.f)(l.usedTime)))), S && o.a.createElement("div", {
                        className: "detail-body"
                    }, o.a.createElement(x.a, {
                        solutionMode: h === K,
                        readOnly: h !== J,
                        isPaper: !0,
                        isSolutionText: !0,
                        question: S,
                        answers: k,
                        onChange: function (t) {
                            e.setState({
                                answers: r.set(a, t)
                            })
                        }
                    }), o.a.createElement("div", {
                        className: "action-row"
                    }, a > 0 && o.a.createElement("div", {
                        className: "pre-btn",
                        onClick: this.onClickPre
                    }, "< 上一题"), o.a.createElement(s.a, {
                        type: "primary",
                        className: "next-btn",
                        disabled: h !== K && 4 === S.questionDisplay && k.size < S.answers.length || h !== K && 2 === S.questionDisplay && 0 === k.size || a >= n.size - 1 || a >= P && h === J,
                        onClick: this.onClickNext
                    }, "下一题"), h !== K && this.areAllQuestionAnswered() && o.a.createElement(s.a, {
                        type: "primary",
                        ghost: !0,
                        className: "submit-btn",
                        onClick: this.onClickSubmit
                    }, "交卷")), h === K && o.a.createElement(O.a, {
                        question: S
                    })))))
                }
            }, {
                key: "areAllQuestionAnswered",
                value: function () {
                    var e = this.state,
                        t = e.answers,
                        n = e.questions;
                    return t.size === n.size && !n.some((function (e, n) {
                        var r = t.get(n);
                        return !Object(c.o)(e, r)
                    }))
                }
            }, {
                key: "isReadingSolutionNeverAnswered",
                value: function () {
                    var e = this.state,
                        t = e.status,
                        n = e.practiceResult;
                    return t === K && !(null != n && n.questions[0].chose)
                }
            }]) && U(t.prototype, n), r && U(t, r), u
        }(o.a.Component);
        Object(c.q)() || i.a.render(o.a.createElement(ne, null), document.getElementById("app"))
    },
    "ON/i": function (e, t, n) {
        "use strict";
        var r = n("xwgP"),
            o = n.n(r);
        t.a = function () {
            return o.a.createElement("div", {
                style: {
                    fontSize: "14px",
                    color: "#BA9E83",
                    lineHeight: "20px",
                    position: "absolute",
                    right: 0,
                    top: 0
                }
            }, "请不要中途开启新的答题流程，不支持多端同时作答")
        }
    },
    Ttlu: function (e, t, n) {},
    XSgU: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return z
        }));
        n("0Dzv");
        var r = n("2Jmy"),
            o = n.n(r),
            a = (n("uBdh"), n("Pzti")),
            i = n.n(a),
            c = n("xwgP"),
            u = n.n(c),
            s = n("fK+4"),
            l = n.n(s);
        n("kT1j");

        function f(e) {
            return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function p(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function m(e, t) {
            return (m = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function d(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = v(e);
                if (t) {
                    var o = v(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return y(this, n)
            }
        }

        function y(e, t) {
            return !t || "object" !== f(t) && "function" != typeof t ? h(e) : t
        }

        function h(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function v(e) {
            return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function b(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var g = function (e) {
                ! function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && m(e, t)
                }(a, e);
                var t, n, r, o = d(a);

                function a() {
                    var e;
                    return function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, a), b(h(e = o.call(this)), "show", (function (t) {
                        e.setState({
                            txt: t,
                            show: !0
                        })
                    })), b(h(e), "hide", (function () {
                        e.setState({
                            txt: "",
                            show: !1
                        })
                    })), e.state = {
                        show: !1,
                        txt: ""
                    }, e
                }
                return t = a, (n = [{
                    key: "render",
                    value: function () {
                        var e = this.state,
                            t = e.show,
                            n = e.txt;
                        return t && n ? u.a.createElement("div", {
                            id: "notification"
                        }, n) : null
                    }
                }]) && p(t.prototype, n), r && p(t, r), a
            }(c.Component),
            w = function () {
                var e = document.createElement("div"),
                    t = null;
                document.body.appendChild(e);
                var n = l.a.render(u.a.createElement(g, null), e);
                return function (e, r) {
                    t && clearTimeout(t), n.show(e, r), t = setTimeout((function () {
                        n.hide(), clearTimeout(t), t = null
                    }), r)
                }
            }(),
            j = n("LBz4"),
            x = n("9kRk");
        n("3UcE");

        function O(e) {
            return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function E(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function M(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function k(e, t) {
            return (k = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function S(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = P(e);
                if (t) {
                    var o = P(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return I(this, n)
            }
        }

        function I(e, t) {
            return !t || "object" !== O(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function P(e) {
            return (P = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        var z = function (e) {
            ! function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && k(e, t)
            }(c, e);
            var t, n, r, a = S(c);

            function c() {
                return E(this, c), a.apply(this, arguments)
            }
            return t = c, (n = [{
                key: "render",
                value: function () {
                    var e, t = this.props,
                        n = t.correctNum,
                        r = t.wrongNum,
                        a = t.userScore,
                        c = t.tipScore,
                        s = void 0 === c ? "--" : c,
                        l = t.usedTime,
                        f = t.totalScore,
                        p = t.correctRate,
                        m = t.type,
                        d = void 0 === m ? j.b.WEEKLY : m,
                        y = t.onClickSolutionButton,
                        h = void 0 === y ? function () {} : y,
                        v = t.onClickReplayButton,
                        b = void 0 === v ? function () {
                            window.location.reload()
                        } : v,
                        g = t.tipScoreReasonType,
                        O = t.onlyTotalTipScore,
                        E = d === j.b.PAPER,
                        M = d === j.b.PRACTICE,
                        k = d === j.b.WEEKLY,
                        S = !(E && a === f);
                    E ? e = "再来一次" : M ? e = "再来一组" : k && (e = "再练一次");
                    var I = "",
                        P = "";
                    return O && s && "--" !== s && (P = "您的得分计入总积分"), 103 === g ? (I = "领取奖励已达今日上限", Object(x.m)("exam-paper-detail") && w("专项答题积分已达今日上限", 2e3)) : 102 === g && (I = "已领取积分"), I = P ? I ? u.a.createElement("div", {
                        style: {
                            textAlign: "center"
                        }
                    }, I, u.a.createElement("div", null, P)) : P : I, u.a.createElement("div", {
                        className: "practice-result"
                    }, E ? u.a.createElement(u.a.Fragment, null, u.a.createElement("div", {
                        className: "header"
                    }, u.a.createElement("div", {
                        className: "title"
                    }, "本次作答分数"), u.a.createElement("div", {
                        className: "number"
                    }, a)), u.a.createElement("div", {
                        className: "infos"
                    }, u.a.createElement("div", {
                        className: "info"
                    }, "用时：", function (e) {
                        var t = e % 60;
                        t < 10 && (t = "0".concat(t));
                        var n = (e = Math.floor(e / 60)) % 60;
                        n < 10 && (n = "0".concat(n));
                        var r = e = Math.floor(e / 60);
                        return r < 10 && (r = "0".concat(r)), "".concat(r, ":").concat(n, ":").concat(t)
                    }(l)), u.a.createElement("div", {
                        className: "info"
                    }, "积分：", u.a.createElement(i.a, {
                        title: I,
                        visible: !!I,
                        placement: "right"
                    }, "--" === s ? s : "+".concat(s || 0))))) : u.a.createElement(u.a.Fragment, null, u.a.createElement("div", {
                        className: "header"
                    }, u.a.createElement("div", {
                        className: "title"
                    }, "本次答对题目数"), u.a.createElement("div", {
                        className: "number"
                    }, n)), u.a.createElement("div", {
                        className: "infos"
                    }, u.a.createElement("div", {
                        className: "info"
                    }, "正确率：", p), u.a.createElement("div", {
                        className: "info"
                    }, "用时：", null == l ? void 0 : l.replace(/′+/g, ":")), u.a.createElement("div", {
                        className: "info"
                    }, "错题数：", r), u.a.createElement("div", {
                        className: "info"
                    }, "积分：", u.a.createElement(i.a, {
                        title: I,
                        visible: !!I,
                        placement: "right"
                    }, "--" === s ? s : "+".concat(s || 0))))), u.a.createElement("div", {
                        className: "action-row"
                    }, S && u.a.createElement(o.a, {
                        type: "primary",
                        ghost: E,
                        className: "action",
                        onClick: b
                    }, e), E && u.a.createElement(o.a, {
                        type: "primary",
                        className: "action",
                        onClick: h
                    }, "查看解析")))
                }
            }]) && M(t.prototype, n), r && M(t, r), c
        }(u.a.Component);
        z.propType = {}
    },
    ePow: function (e, t) {
        e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMjIuNDk1JSIgeDI9Ijc5LjE5MyUiIHkxPSIyMS42NjklIiB5Mj0iNzkuMzYlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjRkZGIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZGIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTIiIGZpbGw9IiNEOTNDM0QiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIGZpbGw9IiNDNzI4M0MiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjUzMyAxMy4zNmwyLjQ0IDIuNDU2YS45MTQuOTE0IDAgMDEtLjAyMSAxLjMyMi45ODIuOTgyIDAgMDEtMS4zNTUtLjAybC0yLjM5NS0yLjQxLTIuMjYgMi4yOTFhMS4wODUgMS4wODUgMCAwMS0xLjUuMDI1IDEuMDE3IDEuMDE3IDAgMDEtLjAyNy0xLjQ3bDIuMzA3LTIuMzM3LTIuNDUtMi40NjZhLjkxNC45MTQgMCAwMS4wMjItMS4zMjIuOTgyLjk4MiAwIDAxMS4zNTQuMDJsMi40MDQgMi40MiAyLjUyMS0yLjU1NmExLjA4NSAxLjA4NSAwIDAxMS41LS4wMjRjLjQyNi40MDMuNDM3IDEuMDUzLjAyNiAxLjQ3bC0yLjU2NiAyLjZ6Ii8+PHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNi4zMjUgNC4yMjZsMi4zMjcgMi4zMjZBMS4wOTcgMS4wOTcgMCAwMTcuMSA4LjEwM0w0Ljc3NCA1Ljc3NyAyLjQ0OCA4LjEwM2ExLjA5NyAxLjA5NyAwIDExLTEuNTUxLTEuNTVsMi4zMjYtMi4zMjdMLjg5NyAxLjg5OUExLjA5NyAxLjA5NyAwIDExMi40NDcuMzVsMi4zMjcgMi4zMjZMNy4xMDEuMzQ4QTEuMDk3IDEuMDk3IDAgMDE4LjY1IDEuOUw2LjMyNiA0LjIyNnoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcgOCkiLz48L3N2Zz4="
    },
    eULb: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return oe
        }));
        n("0I6J");
        var r = n("Fr7e"),
            o = n.n(r),
            a = (n("4q64"), n("LUJl")),
            i = n.n(a),
            c = n("xwgP"),
            u = n.n(c),
            s = n("EH+i"),
            l = n.n(s),
            f = n("jK+o"),
            p = n.n(f),
            m = n("404v"),
            d = n("/5R6"),
            y = n.n(d),
            h = n("LBz4"),
            v = n("9kRk"),
            b = n("D+7W"),
            g = n.n(b)()({
                loader: function () {
                    return n.e(1).then(n.bind(null, "e5xr"))
                },
                loading: function () {
                    return u.a.createElement("div", {
                        style: {
                            width: 590,
                            height: 350
                        }
                    })
                }
            }),
            w = n("fJgZ");
        n("BHoj");

        function j(e) {
            return (j = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function x(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function O(e, t) {
            return (O = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function E(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = S(e);
                if (t) {
                    var o = S(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return M(this, n)
            }
        }

        function M(e, t) {
            return !t || "object" !== j(t) && "function" != typeof t ? k(e) : t
        }

        function k(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function S(e) {
            return (S = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function I(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var P = function (e) {
            ! function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && O(e, t)
            }(a, e);
            var t, n, r, o = E(a);

            function a() {
                var e;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, a), I(k(e = o.call(this)), "initAudio", (function () {
                    var t = e.audioEl.current.duration;
                    e.setState({
                        isReady: !0,
                        totalTime: e.toPluralTime(t).timeStr,
                        duration: t
                    })
                })), I(k(e), "playAudio", (function () {
                    e.audioEl.current.play()
                })), I(k(e), "pauseAudio", (function () {
                    e.audioEl.current.pause()
                })), I(k(e), "onChangePlay", (function (t) {
                    e.setState({
                        isPlay: t
                    })
                })), I(k(e), "onPlaying", (function () {
                    e.setState({
                        isReady: !0
                    })
                })), I(k(e), "onWaiting", (function () {
                    e.setState({
                        isReady: !1
                    })
                })), I(k(e), "onError", (function () {
                    e.state.isPlay && i.a.warning("播放失败，请重新进入答题"), e.resetAudio()
                })), I(k(e), "changePlay", Object(w.throttle)((function () {
                    e.state.isPlay ? e.pauseAudio() : e.playAudio()
                }), 500, {
                    trailing: !1
                })), I(k(e), "resetAudio", (function () {
                    e.audioEl.current.load(), e.setState({
                        isPlay: !1,
                        playTime: "00:00"
                    })
                })), I(k(e), "timeupdate", (function () {
                    var t = e.state,
                        n = t.duration,
                        r = t.playTime,
                        o = e.toPluralTime(e.audioEl.current.currentTime),
                        a = o.timestamp,
                        i = o.timeStr;
                    a >= n ? e.resetAudio() : r !== i && e.setState({
                        playTime: i
                    })
                })), I(k(e), "toPluralTime", (function (e) {
                    var t = function (e) {
                            return e < 10 ? "0".concat(e) : e
                        },
                        n = Math.floor(e / 60),
                        r = Math.floor(e) % 60;
                    return {
                        timestamp: e,
                        timeStr: "".concat(t(n), ":").concat(t(r))
                    }
                })), e.audioEl = u.a.createRef(), e.playTimer = null, e.state = {
                    isReady: !1,
                    isPlay: !1,
                    duration: 0,
                    totalTime: "00:00",
                    playTime: "00:00"
                }, e
            }
            return t = a, (n = [{
                key: "render",
                value: function () {
                    var e = this,
                        t = this.props,
                        n = t.audioUrl,
                        r = t.audioTitle,
                        o = this.state,
                        a = o.isPlay,
                        i = o.isReady,
                        c = o.totalTime,
                        s = o.playTime;
                    return r || n ? u.a.createElement("div", {
                        className: "resource-wrap"
                    }, u.a.createElement("div", {
                        className: "audio-cont"
                    }, u.a.createElement("div", {
                        className: "info"
                    }, u.a.createElement("div", {
                        className: "title"
                    }, r), u.a.createElement("div", {
                        className: "times"
                    }, u.a.createElement("time", null, s), " / ", u.a.createElement("time", null, c))), u.a.createElement("div", {
                        className: p()({
                            "control-btns": !0,
                            "dis-control": !i || !n,
                            play: a
                        })
                    }, u.a.createElement("div", {
                        className: "play-btn",
                        onClick: this.changePlay
                    })), u.a.createElement("audio", {
                        ref: this.audioEl,
                        src: n,
                        onTimeUpdate: this.timeupdate,
                        onCanPlay: this.initAudio,
                        onPlay: function () {
                            e.onChangePlay(!0)
                        },
                        onPause: function () {
                            e.onChangePlay(!1)
                        },
                        onWaiting: this.onWaiting,
                        onPlaying: this.onPlaying,
                        onError: this.onError
                    }))) : null
                }
            }]) && x(t.prototype, n), r && x(t, r), a
        }(u.a.PureComponent);
        P.propTypes = {
            audioUrl: l.a.string,
            audioTitle: l.a.string
        };
        n("H26C");

        function z(e) {
            return (z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var N = ["icon", "style", "className"];

        function A() {
            return (A = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function T(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function D(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function L(e, t) {
            if (null == e) return {};
            var n, r, o = function (e, t) {
                if (null == e) return {};
                var n, r, o = {},
                    a = Object.keys(e);
                for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
            return o
        }

        function C(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function _(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function R(e, t) {
            return (R = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function q(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = H(e);
                if (t) {
                    var o = H(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return B(this, n)
            }
        }

        function B(e, t) {
            return !t || "object" !== z(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function H(e) {
            return (H = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        var U = function (e) {
                ! function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && R(e, t)
                }(a, e);
                var t, n, r, o = q(a);

                function a() {
                    return C(this, a), o.apply(this, arguments)
                }
                return t = a, (n = [{
                    key: "render",
                    value: function () {
                        var e = this.props,
                            t = e.icon,
                            n = e.style,
                            r = void 0 === n ? {} : n,
                            o = e.className,
                            a = L(e, N),
                            i = function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? T(Object(n), !0).forEach((function (t) {
                                        D(e, t, n[t])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : T(Object(n)).forEach((function (t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                    }))
                                }
                                return e
                            }({
                                fill: "currentColor",
                                width: "1em",
                                height: "1em",
                                verticalAlign: "-0.15em"
                            }, r);
                        return u.a.createElement("svg", A({
                            style: i,
                            className: o,
                            "aria-hidden": "true"
                        }, a), u.a.createElement("use", {
                            xlinkHref: "#icon-".concat(t.replace("icon-", ""))
                        }))
                    }
                }]) && _(t.prototype, n), r && _(t, r), a
            }(u.a.Component),
            V = n("rd3M"),
            Z = n.n(V),
            Q = n("ePow"),
            F = n.n(Q);
        n("x6qf");

        function G(e) {
            return (G = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function X(e, t) {
            return function (e) {
                if (Array.isArray(e)) return e
            }(e) || function (e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null == n) return;
                var r, o, a = [],
                    i = !0,
                    c = !1;
                try {
                    for (n = n.call(e); !(i = (r = n.next()).done) && (a.push(r.value), !t || a.length !== t); i = !0);
                } catch (e) {
                    c = !0, o = e
                } finally {
                    try {
                        i || null == n.return || n.return()
                    } finally {
                        if (c) throw o
                    }
                }
                return a
            }(e, t) || function (e, t) {
                if (!e) return;
                if ("string" == typeof e) return Y(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Y(e, t)
            }(e, t) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function Y(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function J(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function W(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? J(Object(n), !0).forEach((function (t) {
                    K(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : J(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function K(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function $(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function ee(e, t) {
            return (ee = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function te(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = re(e);
                if (t) {
                    var o = re(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return ne(this, n)
            }
        }

        function ne(e, t) {
            return !t || "object" !== G(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function re(e) {
            return (re = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        i.a.config({
            maxCount: 1
        });
        var oe = function (e) {
            ! function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && ee(e, t)
            }(c, e);
            var t, n, r, a = te(c);

            function c() {
                var e;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, c), (e = a.call(this)).state = {}, e.inputArr = [], e
            }
            return t = c, (n = [{
                key: "componentDidUpdate",
                value: function () {
                    var e = this,
                        t = this.props.question;
                    !this.span && this.createSpan(), t.questionDisplay === h.c.FILL && this.inputArr.forEach((function (t) {
                        t && e.setWidth(t)
                    }))
                }
            }, {
                key: "render",
                value: function () {
                    var e = this.props,
                        t = e.className,
                        n = e.question,
                        r = e.answers,
                        a = void 0 === r ? Object(m.a)() : r,
                        i = e.onChange,
                        c = void 0 === i ? function () {} : i,
                        s = e.isPaper,
                        l = e.readOnly,
                        f = e.isSolutionText,
                        d = this.isSolutionMode(),
                        v = n.questionDisplay === h.c.RATIO,
                        b = n.questionDisplay === h.c.RATIO || n.questionDisplay === h.c.CHECKBOX;
                    return u.a.createElement("div", {
                        className: p()("question", t)
                    }, u.a.createElement("div", {
                        className: "q-header"
                    }, u.a.createElement(U, {
                        icon: "bookmarks",
                        style: {
                            color: "#8C8C8C",
                            marginRight: 5
                        }
                    }), h.c.getName(n.questionDisplay), s && u.a.createElement("span", {
                        className: "score"
                    }, "（本道题", n.questionScore, "分）"), d && f && this.getSolutionText(n)), ("VIDEO" === n.resourceType || !n.resourceType) && n.videoUrl && u.a.createElement(g, {
                        className: "video-player",
                        videoUrl: n.videoUrl,
                        videoThumbnailUrl: n.videoThumbnailUrl
                    }), u.a.createElement("div", {
                        className: "q-body"
                    }, this.getBody(n)), "AUDIO" === n.resourceType && u.a.createElement(P, {
                        className: "audio-player",
                        audioUrl: n.videoUrl,
                        audioTitle: n.resourceTitle,
                        key: n.questionId
                    }), u.a.createElement("div", {
                        className: "q-footer"
                    }, n.questionDesc && !d && u.a.createElement(o.a, {
                        content: u.a.createElement("div", {
                            className: "line-feed",
                            style: {
                                maxWidth: "590px"
                            },
                            dangerouslySetInnerHTML: {
                                __html: y()(n.questionDesc)
                            }
                        }),
                        trigger: "click",
                        placement: "bottom"
                    }, u.a.createElement("span", {
                        className: "tips"
                    }, u.a.createElement(U, {
                        icon: "dengpao",
                        style: {
                            color: "#595959",
                            width: 20,
                            height: 20,
                            verticalAlign: -4
                        }
                    }), "查看提示"))), b && u.a.createElement("div", {
                        className: "q-answers"
                    }, d ? this.getSolutionAnswers(n) : n.answers.map((function (e) {
                        var t = a.findIndex((function (t) {
                                return t.answerId === e.answerId
                            })),
                            n = -1 !== t;
                        return u.a.createElement("div", {
                            className: p()("q-answer", {
                                chosen: n,
                                choosable: !l
                            }),
                            key: e.answerId,
                            onClick: function () {
                                l || c(v ? Object(m.a)([e]) : n ? a.delete(t) : a.push(e))
                            }
                        }, e.label, ". ", e.content)
                    }))), n.recommender && u.a.createElement("div", {
                        className: "q-tag"
                    }, "推荐：".concat(n.recommender)), u.a.createElement("br", null), n.supplier && u.a.createElement("div", {
                        className: "q-tag"
                    }, "出题：".concat(n.supplier)))
                }
            }, {
                key: "isSolutionMode",
                value: function () {
                    return this.props.solutionMode
                }
            }, {
                key: "getSolutionAnswers",
                value: function (e) {
                    var t = e.answers,
                        n = e.correct,
                        r = e.chose,
                        o = void 0 === r ? [] : r,
                        a = !0;
                    return t.map((function (e) {
                        var t = W(W({}, e), {}, {
                            target: !1,
                            choice: !1
                        });
                        return -1 !== n.findIndex((function (t) {
                            return t.answerId === e.answerId
                        })) && (t.target = !0), -1 !== o.findIndex((function (t) {
                            return t.answerId === e.answerId
                        })) && (t.choice = !0), t.target ^ t.choice && (a = !1), t
                    })).map((function (e) {
                        var t, n;
                        return e.target && a ? (n = "correct", t = Z.a) : !a && e.choice && (n = "false", t = F.a), u.a.createElement("div", {
                            className: p()("q-answer", n),
                            key: e.answerId
                        }, e.label, ". ", e.content, t && u.a.createElement("img", {
                            className: "icon",
                            src: t
                        }))
                    }))
                }
            }, {
                key: "getBody",
                value: function (e) {
                    var t = this,
                        n = this.isSolutionMode(),
                        r = this.props,
                        o = r.onChange,
                        a = r.readOnly,
                        c = X(e.body.split("--|--"), 3),
                        s = c[0],
                        l = c[1],
                        f = c[2],
                        m = 0,
                        d = s.replace(/\(\)/g, "（）");
                    return d = d.replace(/（）/g, "()（）()"), u.a.createElement("div", null, e.questionDisplay !== h.c.FILL ? s : d.split("()").map((function (r, c) {
                        if ("（）" !== r) return u.a.createElement("span", {
                            key: c
                        }, r);
                        var s = e.answers[m].answerId;
                        m++;
                        var l, f = n ? e.chose || [] : t.props.answers,
                            d = f.find((function (e) {
                                return e.answerId === s
                            })),
                            y = "";
                        n && e.chose && (y = d.value === (null === (l = e.correct.find((function (e) {
                            return e.answerId === d.answerId
                        }))) || void 0 === l ? void 0 : l.value) ? "correct" : "wrong");
                        var h = d ? d.value : "",
                            b = {};
                        return n && (b = t.getSolutionStyle(h)), u.a.createElement("input", {
                            ref: t.setRef(c),
                            className: p()("blank", y),
                            autoFocus: 1 === m,
                            type: "text",
                            key: s,
                            readOnly: a || n,
                            disabled: a || n ? "disabled" : "",
                            defaultValue: h,
                            maxLength: 51,
                            style: b,
                            onChange: function (n) {
                                t.span && (t.span.innerText = n.target.value), n.target.style.width = t.span && t.span.offsetWidth > 90 ? "".concat(t.span.offsetWidth, "px") : "90px";
                                var r, a = n.target.value;
                                if ((a = a.trim()).length > 50) return i.a.warn("输入的内容不能超过50个字"), void(n.target.value = a.substr(0, 50));
                                e.correct ? (null === (r = e.correct.find((function (e) {
                                    return e.answerId === s
                                }))) || void 0 === r ? void 0 : r.value) !== a && (a = Object(v.e)(a)) : a = Object(v.e)(a);
                                var c = f.findIndex((function (e) {
                                    return e.answerId === s
                                })); - 1 !== c && (f = f.delete(c)), a && (f = f.push({
                                    answerId: s,
                                    value: a
                                })), o(f)
                            }
                        })
                    })), l || f ? u.a.createElement("div", {
                        style: {
                            paddingTop: "14px"
                        }
                    }, l && u.a.createElement("span", {
                        style: {
                            color: "#ff7d00"
                        }
                    }, " ", "来源：".concat(l), " "), f && u.a.createElement("span", {
                        style: {
                            color: "#313ec3"
                        }
                    }, "（", f, "）")) : null)
                }
            }, {
                key: "createSpan",
                value: function () {
                    this.span = document.createElement("span"), this.span.style.height = "0px", this.span.style.display = "inline-block", this.span.style.overflow = "hidden", this.span.style.fontSize = "16px", this.span.style.paddingLeft = "15px", document.body.appendChild(this.span)
                }
            }, {
                key: "setRef",
                value: function () {
                    var e = this;
                    return function (t) {
                        e.inputArr.push(t)
                    }
                }
            }, {
                key: "setWidth",
                value: function (e) {
                    this.span.innerText = e ? e.value : "", this.span.offsetWidth > 90 && (e.style.width = "".concat(this.span.offsetWidth, "px"))
                }
            }, {
                key: "getSolutionText",
                value: function (e) {
                    var t = function (e) {
                        return u.a.createElement("span", {
                            className: p()("answer-situation", e.className)
                        }, e.children)
                    };
                    return e.chose && 0 !== e.chose.length ? Object(v.l)(e) ? u.a.createElement(t, {
                        className: "correct"
                    }, "回答正确") : u.a.createElement(t, {
                        className: "wrong"
                    }, "回答错误") : u.a.createElement(t, {
                        className: "chosen"
                    }, "未作答")
                }
            }, {
                key: "getSolutionStyle",
                value: function (e) {
                    return !this.span && this.createSpan(), this.span && (this.span.innerText = e), {
                        width: this.span && this.span.offsetWidth > 90 ? "".concat(this.span.offsetWidth, "px") : "90px"
                    }
                }
            }]) && $(t.prototype, n), r && $(t, r), c
        }(u.a.Component);
        oe.propTypes = {
            isPaper: l.a.bool,
            solutionMode: l.a.bool,
            readOnly: l.a.bool
        }, oe.defaultProps = {
            isPaper: !1,
            solutionMode: !1,
            readOnly: !1
        }
    },
    hgoN: function (e, t, n) {},
    kT1j: function (e, t, n) {},
    lw7w: function (e, t, n) {
        "use strict";
        n.d(t, "b", (function () {
            return g
        })), n.d(t, "a", (function () {
            return j
        }));
        n("4q64");
        var r = n("LUJl"),
            o = n.n(r),
            a = (n("Q3iC"), n("kexM")),
            i = n.n(a),
            c = n("91MD"),
            u = n.n(c),
            s = n("ZTfI"),
            l = n("8SHQ"),
            f = n("9kRk"),
            p = n("2OIm");

        function m(e, t, n, r, o, a, i) {
            try {
                var c = e[a](i),
                    u = c.value
            } catch (e) {
                return void n(e)
            }
            c.done ? t(u) : Promise.resolve(u).then(r, o)
        }

        function d(e) {
            return function () {
                var t = this,
                    n = arguments;
                return new Promise((function (r, o) {
                    var a = e.apply(t, n);

                    function i(e) {
                        m(a, r, o, i, c, "next", e)
                    }

                    function c(e) {
                        m(a, r, o, i, c, "throw", e)
                    }
                    i(void 0)
                }))
            }
        }
        u.a.defaults.headers.common.Pragma = "no-cache";
        var y = u.a.create({
            withCredentials: !0
        });
        y.interceptors.request.use((function (e) {
            return new Promise((function (t) {
                s.clientID.ready((function () {
                    s.clientID.setCookie(l.a.domain), s.clientID.renew(), t(e)
                }), (function (n) {
                    p.a.error(n, {
                        filename: "cookie-fp-error"
                    }), t(e)
                }))
            }))
        }), (function (e) {
            return Promise.reject(e)
        }));
        var h = !1;

        function v() {
            i.a.info({
                title: "登录信息已过期，请重新登录",
                onOk: function () {
                    Object(f.i)()
                },
                afterClose: function () {
                    h = !1
                }
            }), h = !0
        }
        y.interceptors.response.use((function (e) {
            return e.data && 200 !== e.data.code ? (401 == e.data.code && (h || v()), Promise.reject(e)) : e
        }), (function (e) {
            return e.response ? 401 === e.response.status ? h || v() : o.a.error("".concat(e.response.data.error.message || e.response.data.message)) : o.a.error("系统繁忙，请稍后再试"), Promise.reject(e)
        }));
        var b = l.a.pointApiHost;

        function g() {
            return w.apply(this, arguments)
        }

        function w() {
            return (w = d(regeneratorRuntime.mark((function e() {
                var t;
                return regeneratorRuntime.wrap((function (e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return "/open/api/user/info", e.next = 3, y.get(b + "/open/api/user/info");
                        case 3:
                            return t = e.sent, e.abrupt("return", t.data.data);
                        case 5:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function j() {
            return x.apply(this, arguments)
        }

        function x() {
            return (x = d(regeneratorRuntime.mark((function e() {
                var t;
                return regeneratorRuntime.wrap((function (e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return "/open/api/auth/check", e.next = 3, y.get(b + "/open/api/auth/check");
                        case 3:
                            return t = e.sent, e.abrupt("return", t.data.data);
                        case 5:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }
        u.a.create({}).interceptors.response.use((function (e) {
            return e.data && 0 !== e.data.status ? Promise.reject(e) : e
        }), (function (e) {
            return Promise.reject(e)
        }))
    },
    mjDs: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return d
        }));
        var r = n("xwgP"),
            o = n.n(r),
            a = n("/5R6"),
            i = n.n(a);
        n("FDJ4");

        function c(e) {
            return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function u(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function s(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function l(e, t) {
            return (l = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function f(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = m(e);
                if (t) {
                    var o = m(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return p(this, n)
            }
        }

        function p(e, t) {
            return !t || "object" !== c(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function m(e) {
            return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        var d = function (e) {
            ! function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && l(e, t)
            }(c, e);
            var t, n, r, a = f(c);

            function c() {
                return u(this, c), a.apply(this, arguments)
            }
            return t = c, (n = [{
                key: "render",
                value: function () {
                    var e = this.props.question;
                    return e.correct ? o.a.createElement("div", {
                        className: "solution"
                    }, o.a.createElement("div", {
                        className: "explain"
                    }, o.a.createElement("div", {
                        className: "logo"
                    }, "答案解析"), o.a.createElement("div", {
                        className: "answer"
                    }, "正确答案：", e.correct.map((function (e) {
                        return e.value || e.label
                    })).join(" ")), o.a.createElement("div", {
                        className: "detail line-feed",
                        dangerouslySetInnerHTML: {
                            __html: i()(e.questionDesc)
                        }
                    })), e.originTitle && o.a.createElement("div", {
                        className: "origin"
                    }, o.a.createElement("div", {
                        className: "logo"
                    }, "扩展阅读"), o.a.createElement("a", {
                        className: "link",
                        href: e.origin,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, e.originTitle))) : null
                }
            }]) && s(t.prototype, n), r && s(t, r), c
        }(o.a.Component)
    },
    "nF/r": function (e, t, n) {},
    qvEN: function (e, t, n) {
        var r = {
            "./af": "BnQO",
            "./af.js": "BnQO",
            "./ar": "bMJr",
            "./ar-dz": "sd6r",
            "./ar-dz.js": "sd6r",
            "./ar-kw": "fQss",
            "./ar-kw.js": "fQss",
            "./ar-ly": "QGTS",
            "./ar-ly.js": "QGTS",
            "./ar-ma": "Vq14",
            "./ar-ma.js": "Vq14",
            "./ar-sa": "rari",
            "./ar-sa.js": "rari",
            "./ar-tn": "UiF8",
            "./ar-tn.js": "UiF8",
            "./ar.js": "bMJr",
            "./az": "Gj/X",
            "./az.js": "Gj/X",
            "./be": "hLJa",
            "./be.js": "hLJa",
            "./bg": "ohPx",
            "./bg.js": "ohPx",
            "./bm": "izSd",
            "./bm.js": "izSd",
            "./bn": "NIIj",
            "./bn-bd": "mLtq",
            "./bn-bd.js": "mLtq",
            "./bn.js": "NIIj",
            "./bo": "o/bt",
            "./bo.js": "o/bt",
            "./br": "cup8",
            "./br.js": "cup8",
            "./bs": "+iwb",
            "./bs.js": "+iwb",
            "./ca": "8hdQ",
            "./ca.js": "8hdQ",
            "./cs": "G1SK",
            "./cs.js": "G1SK",
            "./cv": "rpww",
            "./cv.js": "rpww",
            "./cy": "dVTA",
            "./cy.js": "dVTA",
            "./da": "tHjo",
            "./da.js": "tHjo",
            "./de": "NanS",
            "./de-at": "W4hG",
            "./de-at.js": "W4hG",
            "./de-ch": "dHXR",
            "./de-ch.js": "dHXR",
            "./de.js": "NanS",
            "./dv": "TBbR",
            "./dv.js": "TBbR",
            "./el": "PzPl",
            "./el.js": "PzPl",
            "./en-au": "c/+J",
            "./en-au.js": "c/+J",
            "./en-ca": "v8km",
            "./en-ca.js": "v8km",
            "./en-gb": "QorY",
            "./en-gb.js": "QorY",
            "./en-ie": "a1wv",
            "./en-ie.js": "a1wv",
            "./en-il": "60qQ",
            "./en-il.js": "60qQ",
            "./en-in": "P78L",
            "./en-in.js": "P78L",
            "./en-nz": "ifjV",
            "./en-nz.js": "ifjV",
            "./en-sg": "E9Z8",
            "./en-sg.js": "E9Z8",
            "./eo": "39bN",
            "./eo.js": "39bN",
            "./es": "UiHi",
            "./es-do": "enDk",
            "./es-do.js": "enDk",
            "./es-mx": "plbb",
            "./es-mx.js": "plbb",
            "./es-us": "MIHp",
            "./es-us.js": "MIHp",
            "./es.js": "UiHi",
            "./et": "RfPf",
            "./et.js": "RfPf",
            "./eu": "0aHQ",
            "./eu.js": "0aHQ",
            "./fa": "Z3Pv",
            "./fa.js": "Z3Pv",
            "./fi": "JZ99",
            "./fi.js": "JZ99",
            "./fil": "MuKp",
            "./fil.js": "MuKp",
            "./fo": "DmDR",
            "./fo.js": "DmDR",
            "./fr": "BgDf",
            "./fr-ca": "ZSB1",
            "./fr-ca.js": "ZSB1",
            "./fr-ch": "K5wH",
            "./fr-ch.js": "K5wH",
            "./fr.js": "BgDf",
            "./fy": "I7v1",
            "./fy.js": "I7v1",
            "./ga": "+bsz",
            "./ga.js": "+bsz",
            "./gd": "CIox",
            "./gd.js": "CIox",
            "./gl": "2jpm",
            "./gl.js": "2jpm",
            "./gom-deva": "5yjE",
            "./gom-deva.js": "5yjE",
            "./gom-latn": "t4HF",
            "./gom-latn.js": "t4HF",
            "./gu": "qxrL",
            "./gu.js": "qxrL",
            "./he": "Lppt",
            "./he.js": "Lppt",
            "./hi": "d9m8",
            "./hi.js": "d9m8",
            "./hr": "M0xE",
            "./hr.js": "M0xE",
            "./hu": "n5bu",
            "./hu.js": "n5bu",
            "./hy-am": "8tl8",
            "./hy-am.js": "8tl8",
            "./id": "fm+v",
            "./id.js": "fm+v",
            "./is": "dwt7",
            "./is.js": "dwt7",
            "./it": "rtWn",
            "./it-ch": "cqjs",
            "./it-ch.js": "cqjs",
            "./it.js": "rtWn",
            "./ja": "1UYo",
            "./ja.js": "1UYo",
            "./jv": "Y7HQ",
            "./jv.js": "Y7HQ",
            "./ka": "UX03",
            "./ka.js": "UX03",
            "./kk": "EyA1",
            "./kk.js": "EyA1",
            "./km": "ufNo",
            "./km.js": "ufNo",
            "./kn": "2GFf",
            "./kn.js": "2GFf",
            "./ko": "zhP3",
            "./ko.js": "zhP3",
            "./ku": "7LhZ",
            "./ku.js": "7LhZ",
            "./ky": "iFoC",
            "./ky.js": "iFoC",
            "./lb": "qp3S",
            "./lb.js": "qp3S",
            "./lo": "V54Q",
            "./lo.js": "V54Q",
            "./lt": "uNdj",
            "./lt.js": "uNdj",
            "./lv": "G7Tf",
            "./lv.js": "G7Tf",
            "./me": "Zz0R",
            "./me.js": "Zz0R",
            "./mi": "Jq5R",
            "./mi.js": "Jq5R",
            "./mk": "4XS9",
            "./mk.js": "4XS9",
            "./ml": "SoT6",
            "./ml.js": "SoT6",
            "./mn": "qt30",
            "./mn.js": "qt30",
            "./mr": "oqXK",
            "./mr.js": "oqXK",
            "./ms": "0Yqj",
            "./ms-my": "ZrCg",
            "./ms-my.js": "ZrCg",
            "./ms.js": "0Yqj",
            "./mt": "f7DS",
            "./mt.js": "f7DS",
            "./my": "dNE8",
            "./my.js": "dNE8",
            "./nb": "X9hv",
            "./nb.js": "X9hv",
            "./ne": "ToTW",
            "./ne.js": "ToTW",
            "./nl": "b0Gr",
            "./nl-be": "b2lk",
            "./nl-be.js": "b2lk",
            "./nl.js": "b0Gr",
            "./nn": "5p6S",
            "./nn.js": "5p6S",
            "./oc-lnc": "jShU",
            "./oc-lnc.js": "jShU",
            "./pa-in": "sAD/",
            "./pa-in.js": "sAD/",
            "./pl": "UQwr",
            "./pl.js": "UQwr",
            "./pt": "cUsB",
            "./pt-br": "6fMR",
            "./pt-br.js": "6fMR",
            "./pt.js": "cUsB",
            "./ro": "qHb6",
            "./ro.js": "qHb6",
            "./ru": "unxm",
            "./ru.js": "unxm",
            "./sd": "Jdz4",
            "./sd.js": "Jdz4",
            "./se": "1UA5",
            "./se.js": "1UA5",
            "./si": "GwrB",
            "./si.js": "GwrB",
            "./sk": "v6PN",
            "./sk.js": "v6PN",
            "./sl": "0RIw",
            "./sl.js": "0RIw",
            "./sq": "j0GR",
            "./sq.js": "j0GR",
            "./sr": "Ye7L",
            "./sr-cyrl": "F+sw",
            "./sr-cyrl.js": "F+sw",
            "./sr.js": "Ye7L",
            "./ss": "DWbR",
            "./ss.js": "DWbR",
            "./sv": "ggyH",
            "./sv.js": "ggyH",
            "./sw": "278O",
            "./sw.js": "278O",
            "./ta": "cLbH",
            "./ta.js": "cLbH",
            "./te": "Z+if",
            "./te.js": "Z+if",
            "./tet": "lgms",
            "./tet.js": "lgms",
            "./tg": "oZrX",
            "./tg.js": "oZrX",
            "./th": "RZ1l",
            "./th.js": "RZ1l",
            "./tk": "sqEx",
            "./tk.js": "sqEx",
            "./tl-ph": "NBvC",
            "./tl-ph.js": "NBvC",
            "./tlh": "skwQ",
            "./tlh.js": "skwQ",
            "./tr": "j2xv",
            "./tr.js": "j2xv",
            "./tzl": "/qCZ",
            "./tzl.js": "/qCZ",
            "./tzm": "mCjq",
            "./tzm-latn": "qFme",
            "./tzm-latn.js": "qFme",
            "./tzm.js": "mCjq",
            "./ug-cn": "CmfU",
            "./ug-cn.js": "CmfU",
            "./uk": "gsyx",
            "./uk.js": "gsyx",
            "./ur": "rXKS",
            "./ur.js": "rXKS",
            "./uz": "AVrk",
            "./uz-latn": "Nb5G",
            "./uz-latn.js": "Nb5G",
            "./uz.js": "AVrk",
            "./vi": "kNse",
            "./vi.js": "kNse",
            "./x-pseudo": "fu7I",
            "./x-pseudo.js": "fu7I",
            "./yo": "uexc",
            "./yo.js": "uexc",
            "./zh-cn": "EO8f",
            "./zh-cn.js": "EO8f",
            "./zh-hk": "w6aR",
            "./zh-hk.js": "w6aR",
            "./zh-mo": "khgd",
            "./zh-mo.js": "khgd",
            "./zh-tw": "AURh",
            "./zh-tw.js": "AURh"
        };

        function o(e) {
            var t = a(e);
            return n(t)
        }

        function a(e) {
            if (!n.o(r, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return r[e]
        }
        o.keys = function () {
            return Object.keys(r)
        }, o.resolve = a, e.exports = o, o.id = "qvEN"
    },
    rMbk: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return f
        })), n.d(t, "b", (function () {
            return p
        }));
        n("fIEy");
        var r = n("fyyr"),
            o = n.n(r),
            a = n("xwgP"),
            i = n.n(a),
            c = n("9kRk");

        function u(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function s(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? u(Object(n), !0).forEach((function (t) {
                    l(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function l(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function f(e) {
            var t = e.navs,
                n = e.onLeave;
            return window.NAV_LIST = t, i.a.createElement(o.a, {
                style: {
                    marginBottom: 20,
                    marginTop: 10
                },
                separator: ">>"
            }, t.map((function (e, r) {
                var a = e.target,
                    u = void 0 === a ? "_blank" : a,
                    l = e.leave;
                return i.a.createElement(o.a.Item, {
                    key: e.label
                }, r === t.length - 1 ? e.label : i.a.createElement("a", {
                    onClick: function (t) {
                        l && n && n(t, s(s({}, e), {}, {
                            href: c.p(e.href)
                        }))
                    },
                    href: c.p(e.href),
                    rel: "noopener",
                    target: u
                }, e.label))
            })))
        }
        var p = {
            HOME: {
                href: n("8SHQ").a.homeUrl,
                label: "学习强国"
            },
            MY_STUDY: {
                href: "/my-study.html",
                label: "我的学习"
            },
            MY_POINTS: {
                href: "/my-points.html",
                label: "我的积分"
            },
            POINT_DETAIL: {
                href: "/point-detail.html",
                label: "积分明细"
            },
            POINT_INST: {
                href: "/point-instruction.html",
                label: "积分说明"
            },
            PTP: {
                href: "/ptp.html",
                label: "我的点点通"
            },
            PTP_DETAIL: {
                href: "/ptp.html",
                label: "点点通明细"
            },
            PTP_INST: {
                href: "/ptp.html",
                label: "点点通说明"
            },
            EXAM_INDEX: {
                href: "/exam-index.html",
                label: "我要答题",
                target: "_self",
                leave: !0
            },
            EXAM_HISTORY: {
                href: "/exam-history.html",
                label: "答题记录",
                target: "_self",
                leave: !0
            },
            EXAM_PRACTICE: {
                href: "/exam-practice.html",
                label: "每日答题"
            },
            EXAM_WEEKLY_INDEX: {
                href: "/exam-weekly-list.html",
                label: "每周答题",
                target: "_self",
                leave: !0
            },
            EXAM_PAPER_INDEX: {
                href: "/exam-paper-list.html",
                label: "专项答题",
                target: "_self",
                leave: !0
            },
            EXAM_DOING: {
                label: "答题练习"
            },
            EXAM_RANK: {
                href: "/exam-rank.html",
                label: "排行榜",
                target: "_self"
            },
            EXAM_CHALLENGE: {
                href: "/exam-challenge.html",
                label: "答题挑战",
                target: "_self",
                leave: !0
            }
        }
    },
    rd3M: function (e, t) {
        e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTIiIGZpbGw9IiMzREMwNzYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjk2OCAxNC44OTVsNC41NzItNS41MTRhLjY5Ny42OTcgMCAwMTEuMDg0LjAxM2MuMzExLjM5NS4zMDUuOTUzLS4wMTYgMS4zNGwtNS4yMTQgNi4yODlhLjY5OC42OTggMCAwMS0uNzc2LjIxLjc4NC43ODQgMCAwMS0uNDAxLS4yNkw3LjYxIDEzLjc5OGExLjE5NyAxLjE5NyAwIDAxLS4wMS0xLjUwOC43ODYuNzg2IDAgMDExLjIyMy0uMDA3bDIuMTQ0IDIuNjEyeiIgb3BhY2l0eT0iLjEiLz48cGF0aCBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMC45NjggMTMuNzY2bDQuNTcyLTUuNTE0YS42OTcuNjk3IDAgMDExLjA4NC4wMTNjLjMxMS4zOTQuMzA0Ljk1My0uMDE2IDEuMzRsLTUuMjE0IDYuMjg4YS42OTguNjk4IDAgMDEtLjc3Ni4yMS43ODQuNzg0IDAgMDEtLjQwMS0uMjZMNy42MSAxMi42N2ExLjE5NyAxLjE5NyAwIDAxLS4wMS0xLjUwOC43ODYuNzg2IDAgMDExLjIyMy0uMDA4bDIuMTQ0IDIuNjEzeiIvPjwvc3ZnPg=="
    },
    tDyU: function (e, t, n) {
        "use strict";
        n.d(t, "f", (function () {
            return N
        })), n.d(t, "d", (function () {
            return T
        })), n.d(t, "b", (function () {
            return L
        })), n.d(t, "e", (function () {
            return _
        })), n.d(t, "j", (function () {
            return q
        })), n.d(t, "k", (function () {
            return H
        })), n.d(t, "h", (function () {
            return V
        })), n.d(t, "g", (function () {
            return Q
        })), n.d(t, "c", (function () {
            return G
        })), n.d(t, "i", (function () {
            return Y
        })), n.d(t, "l", (function () {
            return W
        })), n.d(t, "a", (function () {
            return $
        }));
        var r = n("91MD"),
            o = n.n(r),
            a = n("jJIE"),
            i = n.n(a),
            c = n("ZTfI"),
            u = n("8SHQ"),
            s = n("2OIm"),
            l = function (e) {
                return new Promise((function (t) {
                    c.clientID.ready((function () {
                        c.clientID.setCookie(u.a.domain), c.clientID.renew(), t(e)
                    }), (function (n) {
                        s.a.error(n, {
                            filename: "cookie-fp-error"
                        }), t(e)
                    }))
                }))
            },
            f = function (e) {
                return Promise.reject(e)
            },
            p = (n("4q64"), n("LUJl")),
            m = n.n(p),
            d = n("LalF"),
            y = n("9kRk"),
            h = n("0B97"),
            v = !1;
        var b = n("tyG7"),
            g = n.n(b),
            w = n("C9sq");

        function j(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function x(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? j(Object(n), !0).forEach((function (t) {
                    O(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : j(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function O(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function E(e, t, n, r, o, a, i) {
            try {
                var c = e[a](i),
                    u = c.value
            } catch (e) {
                return void n(e)
            }
            c.done ? t(u) : Promise.resolve(u).then(r, o)
        }

        function M(e) {
            return function () {
                var t = this,
                    n = arguments;
                return new Promise((function (r, o) {
                    var a = e.apply(t, n);

                    function i(e) {
                        E(a, r, o, i, c, "next", e)
                    }

                    function c(e) {
                        E(a, r, o, i, c, "throw", e)
                    }
                    i(void 0)
                }))
            }
        }
        var k = !0,
            S = new g.a({
                scene: "exam",
                log: function (e) {
                    s.a.error(e, {
                        filename: "灰度异常"
                    })
                },
                jsonPath: "study-exam/gray-config/gray-config.json",
                pageGrayState: function (e, t) {
                    e !== t && k && (Object(w.a)({
                        title: "功能升级中，请刷新重试",
                        onOk: function () {
                            window.location.reload()
                        },
                        onCancel: function () {},
                        okText: "刷新",
                        cancelText: "暂不刷新"
                    }), k = !1)
                }
            }),
            I = o.a.create({
                withCredentials: !0,
                checkSign: !0
            });
        Object(y.b)() && (o.a.defaults.headers.common.Pragma = "no-cache"), I.interceptors.request.use((function (e) {
            return S.setRequestHeaders(e.headers), l(e)
        }), f), I.interceptors.response.use((function (e) {
            var t = e.headers && e.headers["page-version-control"];
            return S.checkIsGray(t),
                function (e) {
                    if (e.data && 200 !== e.data.code) {
                        var t = (e.data || {}).code;
                        if (v) return Promise.reject();
                        if (401 === t) return v || (Object(h.a)({
                            title: "登录信息已过期，请重新登录",
                            onOk: function () {
                                Object(y.c)(), Object(y.i)(), v = !1
                            },
                            afterClose: function () {
                                v = !1
                            }
                        }), v = !0), Promise.reject();
                        if (403 === t) return Object(h.a)({
                            title: "校验失败，请稍后再试",
                            onOk: function () {
                                v = !1
                            },
                            afterClose: function () {
                                v = !1
                            },
                            okText: "确定"
                        }), v = !0, Promise.reject();
                        if (406 === t) return Object(h.a)({
                            title: "还没全量开放，请耐心等待哦～",
                            onOk: function () {
                                v = !1, Object(y.c)(), location.href = "https://www.xuexi.cn/notFound.html"
                            },
                            afterClose: function () {
                                v = !1
                            },
                            okText: "确定"
                        }), v = !0, Promise.reject();
                        if (429 === t) return Object(h.a)({
                            title: "服务忙碌，请稍后再试",
                            onOk: function () {
                                v = !1
                            },
                            afterClose: function () {
                                v = !1
                            },
                            okText: "确定"
                        }), v = !0, Promise.reject();
                        if (100047 === t) return Object(y.c)(), window.location.href = "/points/exam-error.html", !1;
                        if (100002 === t) return Object(h.a)({
                            title: "试题已过期",
                            onOk: function () {
                                Object(y.c)(), location.href = "./exam-index.html", v = !1
                            },
                            afterClose: function () {
                                v = !1
                            },
                            okText: "返回我要答题"
                        }), v = !0, Promise.reject();
                        if (100046 === t) return Object(h.a)({
                            title: "您已经开启新的答题流程，本次答题流程已失效",
                            onOk: function () {
                                v = !1, Object(y.c)(), Object(y.j)()
                            },
                            afterClose: function () {
                                v = !1
                            },
                            okText: "确定"
                        }), v = !0, Promise.reject();
                        if (100049 === t) return Object(h.a)({
                            title: "今日本模块答题次数已达上限，继续作答请使用APP",
                            onOk: function () {
                                v = !1, Object(y.c)(), Object(y.j)()
                            },
                            afterClose: function () {
                                v = !1
                            },
                            okText: "确定"
                        }), v = !0, Promise.reject();
                        if (100050 === t && Object(h.a)({
                                centered: !0,
                                okText: "确定",
                                title: "网络开小差~请稍后重试"
                            }), 100051 === t) return Object(y.c)(), location.href = "https://www.xuexi.cn/notFound.html", Promise.reject();
                        if (140006 === t) return Object(h.a)({
                            title: "10s内仅可答题一次哦，请稍后再发起答题",
                            onOk: function () {
                                v = !1
                            },
                            afterClose: function () {
                                v = !1
                            },
                            okText: "确定"
                        }), v = !0, Promise.reject();
                        if (100001 === t) return Object(h.a)({
                            title: "该试卷已下线",
                            onOk: function () {
                                v = !1, Object(y.c)(), Object(y.j)()
                            },
                            afterClose: function () {
                                v = !1
                            },
                            okText: "确定"
                        }), v = !0, Promise.reject();
                        if (e.config.examNet) return Promise.reject(e);
                        m.a.error(e.data.message)
                    }
                    if (e.config.checkSign) {
                        delete e.data.data;
                        var n = (null == e ? void 0 : e.data) || {},
                            r = n.data_str,
                            o = n.sign;
                        if (!r) return e;
                        var a = d.Base64.decode(r);
                        if (!Object(y.a)(a, o)) {
                            var i = "网络传输错误，请重试！";
                            return m.a.error(i), Promise.reject(new Error(i))
                        }
                        try {
                            e.data.data = JSON.parse(a)
                        } catch (e) {
                            console.error("TODO", e)
                        }
                    }
                    return e
                }(e)
        }), (function (e) {
            return "Network Error" === e.message ? (m.a.error("网络错误，请重试！"), Promise.reject(e)) : e.config.examNet ? Promise.reject(e.message || "出错了！请稍后再试") : (e.response && e.response.data ? m.a.error("".concat((null === (t = e.response.data.error) || void 0 === t ? void 0 : t.message) || e.response.data.message || "出错了！请稍后再试")) : m.a.error("出错了！请稍后再试"), Promise.reject(e));
            var t
        }));
        var P = u.a.examApiHost,
            z = function () {
                for (var e = i.a.get("token"), t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return n[2] = n[2] || function (t) {
                    s.a.error(t, {
                        filename: "滑块异常 token:".concat(e)
                    })
                }, Object(c.sliderCaptcha)(n[0], n[2])
            };

        function N(e) {
            return A.apply(this, arguments)
        }

        function A() {
            return (A = M(regeneratorRuntime.mark((function e(t) {
                var n;
                return regeneratorRuntime.wrap((function (e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return "/api/exam/service/practice/pc/weekly/more", e.next = 3, I.get(P + "/api/exam/service/practice/pc/weekly/more", {
                                params: t
                            });
                        case 3:
                            return n = e.sent, e.abrupt("return", n.data.data);
                        case 5:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function T() {
            return D.apply(this, arguments)
        }

        function D() {
            return (D = M(regeneratorRuntime.mark((function e() {
                var t;
                return regeneratorRuntime.wrap((function (e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return "/api/exam/service/practice/statistic", e.next = 3, I.get(P + "/api/exam/service/practice/statistic");
                        case 3:
                            return t = e.sent, e.abrupt("return", t.data.data);
                        case 5:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function L(e) {
            return C.apply(this, arguments)
        }

        function C() {
            return (C = M(regeneratorRuntime.mark((function e(t) {
                var n;
                return regeneratorRuntime.wrap((function (e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return "/api/exam/service/answer/record/pc/list", e.next = 3, I.get(P + "/api/exam/service/answer/record/pc/list", {
                                params: t
                            });
                        case 3:
                            return n = e.sent, e.abrupt("return", n.data.data);
                        case 5:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function _(e) {
            return R.apply(this, arguments)
        }

        function R() {
            return (R = M(regeneratorRuntime.mark((function e(t) {
                var n;
                return regeneratorRuntime.wrap((function (e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return "/api/exam/service/detail/solution", e.next = 3, I.get(P + "/api/exam/service/detail/solution", {
                                params: t
                            });
                        case 3:
                            return n = e.sent, e.abrupt("return", n.data.data);
                        case 5:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function q(e) {
            return B.apply(this, arguments)
        }

        function B() {
            return (B = M(regeneratorRuntime.mark((function e(t) {
                var n;
                return regeneratorRuntime.wrap((function (e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return "/api/exam/service/detail/queryV3", e.next = 3, I.get(P + "/api/exam/service/detail/queryV3", {
                                params: x(x({}, t), {}, {
                                    forced: !0
                                }),
                                examNet: !0
                            });
                        case 3:
                            return n = e.sent, e.abrupt("return", n.data.data);
                        case 5:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function H(e, t) {
            return U.apply(this, arguments)
        }

        function U() {
            return (U = M(regeneratorRuntime.mark((function e(t, n) {
                var r, o, a;
                return regeneratorRuntime.wrap((function (e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (r = "/api/exam/service/detail/submitV3", o = {}, !i.a.get("abnormal_exam")) {
                                e.next = 6;
                                break
                            }
                            return e.next = 5, z(n, "专项答题");
                        case 5:
                            o = e.sent;
                        case 6:
                            return e.next = 8, I.post(P + r, t, {
                                examNet: !0,
                                headers: o
                            });
                        case 8:
                            return a = e.sent, e.abrupt("return", a.data.data);
                        case 10:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function V(e) {
            return Z.apply(this, arguments)
        }

        function Z() {
            return (Z = M(regeneratorRuntime.mark((function e(t) {
                var n;
                return regeneratorRuntime.wrap((function (e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return "/api/exam/service/detail/save", e.next = 3, I.post(P + "/api/exam/service/detail/save", t);
                        case 3:
                            return n = e.sent, e.abrupt("return", n.data.data);
                        case 5:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function Q(e) {
            return F.apply(this, arguments)
        }

        function F() {
            return (F = M(regeneratorRuntime.mark((function e(t) {
                var n;
                return regeneratorRuntime.wrap((function (e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return "/api/exam/service/paper/pc/list", e.next = 3, I.get(P + "/api/exam/service/paper/pc/list", {
                                params: t
                            });
                        case 3:
                            return n = e.sent, e.abrupt("return", n.data.data);
                        case 5:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function G() {
            return X.apply(this, arguments)
        }

        function X() {
            return (X = M(regeneratorRuntime.mark((function e() {
                var t;
                return regeneratorRuntime.wrap((function (e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return "/api/exam/service/common/deduplicateRandomSearchV3", e.next = 3, I.get(P + "/api/exam/service/common/deduplicateRandomSearchV3", {
                                params: {
                                    limit: 5,
                                    activityCode: "QUIZ_ALL",
                                    forced: !0
                                },
                                examNet: !0
                            });
                        case 3:
                            return t = e.sent, e.abrupt("return", t.data.data);
                        case 5:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function Y(e, t) {
            return J.apply(this, arguments)
        }

        function J() {
            return (J = M(regeneratorRuntime.mark((function e(t, n) {
                var r, o, a;
                return regeneratorRuntime.wrap((function (e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (r = "/api/exam/service/practice/quizSubmitV3", t.activityCode = "QUIZ_ALL", o = {}, !i.a.get("abnormal_exam")) {
                                e.next = 7;
                                break
                            }
                            return e.next = 6, z(n, "每日答题");
                        case 6:
                            o = e.sent;
                        case 7:
                            return e.next = 9, I.post(P + r, t, {
                                examNet: !0,
                                headers: o
                            });
                        case 9:
                            return a = e.sent, e.abrupt("return", a.data.data);
                        case 11:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function W(e, t) {
            return K.apply(this, arguments)
        }

        function K() {
            return (K = M(regeneratorRuntime.mark((function e(t, n) {
                var r, o, a;
                return regeneratorRuntime.wrap((function (e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (r = "/api/exam/service/practice/weekPracticeSubmitV3", o = {}, !i.a.get("abnormal_exam")) {
                                e.next = 6;
                                break
                            }
                            return e.next = 5, z(n, "每周答题");
                        case 5:
                            o = e.sent;
                        case 6:
                            return e.next = 8, I.post(P + r, t, {
                                examNet: !0,
                                headers: o
                            });
                        case 8:
                            return a = e.sent, e.abrupt("return", a.data.data);
                        case 10:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function $(e) {
            return ee.apply(this, arguments)
        }

        function ee() {
            return (ee = M(regeneratorRuntime.mark((function e(t) {
                var n;
                return regeneratorRuntime.wrap((function (e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return "/api/exam/service/detail/score", e.next = 3, I.get(P + "/api/exam/service/detail/score", {
                                params: {
                                    queryTipScoreId: t
                                }
                            });
                        case 3:
                            return n = e.sent, e.abrupt("return", n.data.data);
                        case 5:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }
    },
    tlJg: function (e, t, n) {
        "use strict";
        n.d(t, "b", (function () {
            return g
        })), n.d(t, "c", (function () {
            return w
        })), n.d(t, "a", (function () {
            return j
        }));
        var r, o = n("smGE"),
            a = n("yots"),
            i = n.n(a),
            c = n("8SHQ"),
            u = n("9kRk"),
            s = n("fJgZ"),
            l = n("ZQfu"),
            f = n.n(l),
            p = {
                EXAM_INDEX: {
                    pid: "44C1F9C5-26AC-4807-88BF-99A8459B1FFC",
                    page_name: "exam-index"
                },
                EXAM_WEEKLY_LIST: {
                    pid: "FE246B9E-FB8C-4659-AF9A-BA39279DFAA2",
                    page_name: "exam-weekly-list"
                },
                EXAM_WEEKLY_DETAIL: {
                    pid: "E68E3410-62BE-454E-95C9-A307604CDFF4",
                    page_name: "exam-weekly-detail"
                },
                EXAM_PAPER_LIST: {
                    pid: "185C07B2-EE78-442F-B7FD-CE526D64722C",
                    page_name: "exam-paper-list"
                },
                EXAM_PAPER_DETAIL: {
                    pid: "8F8F08E1-5599-4AFD-9C86-60CBDBE5C0DE",
                    page_name: "exam-paper-detail"
                },
                EXAM_CHALLENGE: {
                    pid: "C4ED3744-3922-448B-8A6D-0B3A53AB3EC7",
                    page_name: "exam-challenge"
                },
                EXAM_PRACTICE: {
                    pid: "00D6F668-1B6A-4324-BC93-CD9D3F26EAC2",
                    page_name: "exam-practice"
                },
                EXAM_RANK: {
                    pid: "5E213F73-2BAD-4316-9BE9-804708EF3AC9",
                    page_name: "exam-rank"
                },
                EXAM_HISTORY: {
                    pid: "3D0332AC-29FF-4246-9FC2-CBC521CECF98",
                    page_name: "exam-history"
                }
            },
            m = 1,
            d = 2,
            y = 3;

        function h() {
            var e = Object(s.trimEnd)(window.location.pathname, "/").split("/").pop();
            for (var t in p) {
                var n = p[t];
                if ("".concat(n.page_name, ".html") === e) return n
            }
        }

        function v() {
            if (r) return r;
            var e = h(),
                t = Object(u.h)(),
                n = Date.now();
            return r = "".concat(e.pid, "_").concat(t, "_").concat(n)
        }

        function b(e) {
            var t = h(),
                n = Date.now(),
                r = v();
            return {
                url: c.a.pclogUrl,
                params: {
                    url: window.location.href,
                    refer: document.referrer,
                    et: 1,
                    pid: t.pid,
                    tm: n,
                    track_id: f()(),
                    read_id: r,
                    ext: JSON.stringify(e)
                },
                key: r
            }
        }

        function g(e) {
            var t = {
                log_type: d,
                click_type: e.click_type
            };
            Object(o.dot)(b(t))
        }

        function w(e) {
            var t = {
                log_type: y,
                action_type: e.actionType
            };
            Object(o.dot)(b(t))
        }

        function j() {
            var e = h();
            if (c.a && c.a.pclogUrl && e) {
                e.log_type = m;
                var t = window.location.href,
                    n = new i.a({
                        interval: 3e4,
                        url: c.a.pclogUrl,
                        key: v(),
                        uid: Object(u.h)()
                    });
                n.addLog((function () {
                    return {
                        url: t,
                        refer: document.referrer || t,
                        read_id: v(),
                        tm: (new Date).getTime(),
                        ext: JSON.stringify(e),
                        et: 2
                    }
                })), n.init()
            }
        }
    },
    x6qf: function (e, t, n) {}
});
