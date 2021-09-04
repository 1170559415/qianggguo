!function(e) {
    function t(t) {
        for (var r, i, s = t[0], c = t[1], u = t[2], d = 0, f = []; d < s.length; d++)
            i = s[d],
            Object.prototype.hasOwnProperty.call(o, i) && o[i] && f.push(o[i][0]),
            o[i] = 0;
        for (r in c)
            Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
        for (l && l(t); f.length; )
            f.shift()();
        return a.push.apply(a, u || []),
        n()
    }
    function n() {
        for (var e, t = 0; t < a.length; t++) {
            for (var n = a[t], r = !0, s = 1; s < n.length; s++) {
                var c = n[s];
                0 !== o[c] && (r = !1)
            }
            r && (a.splice(t--, 1),
            e = i(i.s = n[0]))
        }
        return e
    }
    var r = {}
      , o = {
        1: 0
    }
      , a = [];
    function i(t) {
        if (r[t])
            return r[t].exports;
        var n = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, i),
        n.l = !0,
        n.exports
    }
    i.m = e,
    i.c = r,
    i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    i.t = function(e, t) {
        if (1 & t && (e = i(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (i.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var r in e)
                i.d(n, r, function(t) {
                    return e[t]
                }
                .bind(null, r));
        return n
    }
    ,
    i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return i.d(t, "a", t),
        t
    }
    ,
    i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    i.p = "/points/";
    var s = window.webpackJsonp = window.webpackJsonp || []
      , c = s.push.bind(s);
    s.push = t,
    s = s.slice();
    for (var u = 0; u < s.length; u++)
        t(s[u]);
    var l = c;
    a.push(["SurW", 0]),
    n()
}({
    "2hfb": function(e, t, n) {},
    "57go": function(e, t, n) {
        e.exports = n.p + "study-login/asset/08bffb161f044ee01c173793f553599b.mp3"
    },
    "8SHQ": function(e, t, n) {
        "use strict";
        var r = n("d5mg")
          , o = n.n(r);
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
                outerLinkHost: "https://pc-ref-link-pre.xxptcs.com",
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
                outerLinkHost: "https://pc-ref-link.xuexi.cn",
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
    "8z7O": function(e, t, n) {
        e.exports = n.p + "study-login/asset/35131a17802d051385ff98c46ab34d3b.mp3"
    },
    "9kRk": function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return b
        }
        )),
        n.d(t, "c", (function() {
            return v
        }
        )),
        n.d(t, "j", (function() {
            return j
        }
        )),
        n.d(t, "a", (function() {
            return y
        }
        )),
        n.d(t, "i", (function() {
            return w
        }
        )),
        n.d(t, "e", (function() {
            return x
        }
        )),
        n.d(t, "d", (function() {
            return k
        }
        )),
        n.d(t, "h", (function() {
            return E
        }
        )),
        n.d(t, "g", (function() {
            return O
        }
        )),
        n.d(t, "f", (function() {
            return I
        }
        ));
        var r = n("jJIE")
          , o = n.n(r)
          , a = n("2juG")
          , i = n.n(a)
          , s = n("c+9I")
          , c = n.n(s)
          , u = n("d5mg")
          , l = n.n(u)
          , d = n("35ia")
          , f = n.n(d)
          , p = (n("fJgZ"),
        n("8SHQ"))
          , m = n("lw7w");
        function g(e, t) {
            var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = function(e, t) {
                    if (!e)
                        return;
                    if ("string" == typeof e)
                        return h(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return h(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var r = 0
                      , o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return r >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[r++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var a, i = !0, s = !1;
            return {
                s: function() {
                    n = n.call(e)
                },
                n: function() {
                    var e = n.next();
                    return i = e.done,
                    e
                },
                e: function(e) {
                    s = !0,
                    a = e
                },
                f: function() {
                    try {
                        i || null == n.return || n.return()
                    } finally {
                        if (s)
                            throw a
                    }
                }
            }
        }
        function h(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function b() {
            return o.a.get("token")
        }
        function v() {
            var e = o.a.get("__UID__");
            return e || (e = c()(),
            o.a.set("__UID__", e, {
                expires: 365,
                domain: p.a.domain
            })),
            e
        }
        function j(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
              , n = [];
            for (var r in e) {
                var o = t ? encodeURIComponent(e[r]) : e[r];
                n.push("".concat(r, "=").concat(o))
            }
            return n.join("&")
        }
        function y() {
            var e = {}
              , t = location.search.replace("?", "");
            if (!t)
                return e;
            var n, r = g(t.split("&"));
            try {
                for (r.s(); !(n = r.n()).done; ) {
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
        function w() {
            if (!b())
                return k(),
                !0;
            Object(m.c)()
        }
        function x() {
            window.addEventListener = window.addEventListener || window.attachEvent,
            window.addEventListener("message", (function(e) {
                var t = new f.a(e.origin);
                "loginRefresh" === e.data && t.hostname.endsWith(p.a.domain) && window.location.reload()
            }
            ))
        }
        function k() {
            window.location.href = "".concat(p.a.loginUrl, "?").concat(j({
                ref: location.href
            }))
        }
        function E(e) {
            o.a.set("ref", e, {
                domain: p.a.domain
            })
        }
        function O() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return e.startsWith("http") ? e : R(e)
        }
        function R(e) {
            return l()("/points/", e)
        }
        function I() {
            var e = !1;
            return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) && (e = !0),
            e
        }
        i.a.init({
            publicKey: "\n    -----BEGIN PUBLIC KEY-----\n    MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAy7DZvpmQP9YIuUo9c2ZH\n    /wHQPmBTTRDHpo04zOWxqBxaSq5imt4G9ErotkRLW6mp3V8z1IIwOVN0yxPbO02d\n    Oa8JU2PaEX+idt4sggxAlkXNQayeQvw5Wd2kKK7ea6c5nnJUTanRM99lFvQr9QbB\n    4RZ9UGzDPeHTFLB/8/LzxCAXEi8xl9EpmFR9ED9uR7+doxdUjP0dFZrpbQHghf3N\n    ZrBvjkSkc6orbEfFEU3Cc81pofOIoDFhIjtlYYcqHdfo0t2WAMFDvCrcIrsYv6TC\n    vaFoXZ3wyLI0vY3cZnzwUqXR+iPLDS7z0UUNevnnOPr2IIp6VKv+yMWUqQlcL1pH\n    NQIDAQAB\n    -----END PUBLIC KEY-----"
        })
    },
    "I/Ru": function(e, t, n) {
        "use strict";
        n("wNYO");
        var r, o = n("YFH1"), a = n.n(o), i = n("xwgP"), s = n.n(i), c = (n("nzUQ"),
        n("8SHQ")), u = n("9kRk"), l = (n("hDHV"),
        n("ej2Y")), d = (n("EO8f"),
        n("smGE"),
        n("yots")), f = n.n(d), p = n("fJgZ"), m = (n("ZQfu"),
        {
            MY_STUDY: {
                pid: "833df3c0-ddb3-11e8-bd1e-e55eb3af9cab",
                page_name: "my-study"
            }
        }), g = 1;
        function h() {
            var e = Object(p.trimEnd)(window.location.pathname, "/").split("/").pop();
            for (var t in m) {
                var n = m[t];
                if ("".concat(n.page_name, ".html") === e)
                    return n
            }
        }
        function b() {
            if (r)
                return r;
            var e = h()
              , t = Object(u.c)()
              , n = Date.now();
            return r = "".concat(e.pid, "_").concat(t, "_").concat(n)
        }
        n("nF/r"),
        n("hgoN");
        function v(e) {
            return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function j(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function y(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function w(e, t) {
            return (w = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function x(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = E(e);
                if (t) {
                    var o = E(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return k(this, n)
            }
        }
        function k(e, t) {
            return !t || "object" !== v(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function E(e) {
            return (E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        Object(u.e)();
        var O = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && w(e, t)
            }(d, e);
            var t, n, r, o = x(d);
            function d() {
                return j(this, d),
                o.apply(this, arguments)
            }
            return t = d,
            (n = [{
                key: "componentDidMount",
                value: function() {
                    !function() {
                        var e = h();
                        if (c.a && c.a.pclogUrl && e) {
                            e.log_type = g;
                            var t = window.location.href
                              , n = new f.a({
                                interval: 3e4,
                                url: c.a.pclogUrl,
                                key: b(),
                                uid: Object(u.c)()
                            });
                            n.addLog((function() {
                                return {
                                    url: t,
                                    refer: document.referrer || t,
                                    read_id: b(),
                                    tm: (new Date).getTime(),
                                    ext: JSON.stringify(e),
                                    et: 2
                                }
                            }
                            )),
                            n.init()
                        }
                    }()
                }
            }, {
                key: "render",
                value: function() {
                    return s.a.createElement(a.a, {
                        locale: l.a
                    }, s.a.createElement(i.Fragment, null, s.a.createElement("div", null, s.a.createElement("div", {
                        className: "layout-header"
                    }, s.a.createElement("iframe", {
                        src: c.a.headerIframeUrl,
                        scrolling: "no",
                        frameBorder: "0",
                        style: {
                            width: "100%",
                            height: "100%"
                        }
                    })), s.a.createElement("div", {
                        style: {
                            margin: "0 auto",
                            width: 1e3,
                            paddingTop: 0
                        },
                        className: "layout-body"
                    }, this.props.children), s.a.createElement("div", {
                        className: "layout-footer"
                    }, s.a.createElement("iframe", {
                        src: c.a.footerIframeUrl,
                        scrolling: "no",
                        frameBorder: "0",
                        style: {
                            width: "1000px",
                            height: "100%"
                        }
                    })))))
                }
            }]) && y(t.prototype, n),
            r && y(t, r),
            d
        }(s.a.Component);
        t.a = O
    },
    SurW: function(e, t, n) {
        "use strict";
        n.r(t);
        n("QY5e");
        var r = n("xwgP")
          , o = n.n(r)
          , a = n("fK+4")
          , i = n.n(a)
          , s = (n("4q64"),
        n("LUJl"))
          , c = n.n(s)
          , u = n("KJDX")
          , l = n("jJIE")
          , d = n.n(l)
          , f = n("s+4w")
          , p = n("35ia")
          , m = n.n(p)
          , g = n("ZTfI")
          , h = n("I/Ru")
          , b = n("8SHQ")
          , v = n("9kRk");
        var j = n("lw7w")
          , y = n("8z7O")
          , w = n.n(y)
          , x = n("57go")
          , k = n.n(x);
        n("2hfb");
        function E(e) {
            return (E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function O(e, t, n, r, o, a, i) {
            try {
                var s = e[a](i)
                  , c = s.value
            } catch (e) {
                return void n(e)
            }
            s.done ? t(c) : Promise.resolve(c).then(r, o)
        }
        function R(e) {
            return function() {
                var t = this
                  , n = arguments;
                return new Promise((function(r, o) {
                    var a = e.apply(t, n);
                    function i(e) {
                        O(a, r, o, i, s, "next", e)
                    }
                    function s(e) {
                        O(a, r, o, i, s, "throw", e)
                    }
                    i(void 0)
                }
                ))
            }
        }
        function I(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function S(e, t) {
            return (S = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function _(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = H(e);
                if (t) {
                    var o = H(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return q(this, n)
            }
        }
        function q(e, t) {
            return !t || "object" !== E(t) && "function" != typeof t ? U(e) : t
        }
        function U(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function H(e) {
            return (H = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var z = window.QRCODE_ONLY
          , P = b.a.pcDomain
          , D = Object(f.detect)()
          , L = Object(v.a)()
          , N = b.a.dingdingAppId
          , Q = b.a.dingHostOapi
          , C = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && S(e, t)
            }(f, e);
            var t, n, r, a, i, s, l = _(f);
            function f(e) {
                var t, n, r, o;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, f),
                t = l.call(this, e),
                n = U(t),
                r = "renderQGLogin",
                o = function() {
                    var e = R(regeneratorRuntime.mark((function e(n) {
                        var r, o;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return r = n,
                                    e.prev = 1,
                                    e.next = 4,
                                    g.clientID.aes(r);
                                case 4:
                                    r = e.sent,
                                    e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7,
                                    e.t0 = e.catch(1),
                                    console.error("Failed to encrypt login state: ", e.t0);
                                case 10:
                                    a = {
                                        id: "qglogin",
                                        state: r,
                                        query: {
                                            appid: N,
                                            goto: "https://oa.xuexi.cn",
                                            type: 1,
                                            state: r,
                                            check_login: b.a.pointApiHost
                                        },
                                        width: 284,
                                        height: 241
                                    },
                                    i = void 0,
                                    s = void 0,
                                    c = void 0,
                                    s = document.createElement("iframe"),
                                    c = "".concat(b.a.qgHostLogin, "/login/xuexiWeb?").concat(Object(v.j)(a.query, !0)),
                                    console.log("ddd", c),
                                    s.src = c,
                                    s.frameBorder = "0",
                                    s.allowTransparency = "true",
                                    s.scrolling = "no",
                                    s.width = a.width ? a.width + "px" : "365px",
                                    s.height = a.height ? a.height + "px" : "400px",
                                    (i = document.getElementById(a.id)).innerHTML = "",
                                    s.id = "ddlogin-iframe",
                                    i.appendChild(s),
                                    o = function(e) {
                                        var n = e.origin;
                                        console.log("...", e),
                                        0 === b.a.qgHostLogin.replace(/(https?:)?\/\//, "").indexOf(n.replace(/https?:\/\//, "")) && "object" === E(e.data) && (0 !== e.data.errorCode && !0 !== e.data.sucesss || t.loginJudge())
                                    }
                                    ,
                                    void 0 !== window.addEventListener ? window.addEventListener("message", o, !1) : void 0 !== window.attachEvent && window.attachEvent("onmessage", o);
                                case 13:
                                case "end":
                                    return e.stop()
                                }
                            var a, i, s, c
                        }
                        ), e, null, [[1, 7]])
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                r in n ? Object.defineProperty(n, r, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[r] = o,
                t.state = {
                    loginJam: !0,
                    useDD: !0
                },
                t
            }
            return t = f,
            (n = [{
                key: "componentDidMount",
                value: (s = R(regeneratorRuntime.mark((function e() {
                    var t, n;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (!this.loginJudge()) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return e.next = 4,
                                this.loginNonce();
                            case 4:
                                if (e.t0 = e.sent,
                                e.t0) {
                                    e.next = 7;
                                    break
                                }
                                e.t0 = {};
                            case 7:
                                if (t = e.t0,
                                n = t.sign,
                                t.xxqgLogin,
                                !t.login) {
                                    e.next = 21;
                                    break
                                }
                                return this.setState({
                                    loginJam: !1,
                                    useDD: !1
                                }),
                                e.next = 16,
                                this.renderQGLogin(n);
                            case 16:
                                return e.abrupt("return");
                            case 17:
                                if (this.dingError()) {
                                    e.next = 21;
                                    break
                                }
                                return this.setState({
                                    loginJam: !1
                                }),
                                e.next = 21,
                                this.renderDDLogin(n);
                            case 21:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, this)
                }
                ))),
                function() {
                    return s.apply(this, arguments)
                }
                )
            }, {
                key: "loginJudge",
                value: function() {
                    if (Object(v.b)()) {
                        if (z)
                            window.parent.postMessage({
                                name: "login",
                                code: 200,
                                message: "登陆成功"
                            }, P);
                        else {
                            var e = new m.a(L.ref,{});
                            e.hostname.endsWith(".xuexi.cn") || e.hostname.endsWith(".xxptcs.com") ? location.href = L.ref || b.a.myStudyUrl : location.href = b.a.myStudyUrl
                        }
                        return !0
                    }
                    return !1
                }
            }, {
                key: "dingError",
                value: function() {
                    var e = d.a.get("dingding-error");
                    return !!e && (console.error("dingding-error: ".concat(e)),
                    d.a.remove("dingding-error", {
                        domain: ".xuexi.cn"
                    }),
                    z ? window.parent.postMessage({
                        name: "login",
                        code: -1,
                        message: "当前登录人数过多，请您稍后再来"
                    }, P) : c.a.warning("当前登录人数过多，请您稍后再来", 10),
                    !0)
                }
            }, {
                key: "loginNonce",
                value: (i = R(regeneratorRuntime.mark((function e() {
                    var t, n, r, o;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return "".concat(Date.now()),
                                e.prev = 1,
                                e.next = 4,
                                Object(j.a)();
                            case 4:
                                return t = e.sent,
                                n = t.sign,
                                r = void 0 === n ? "".concat(Date.now()) : n,
                                o = t.headers,
                                e.abrupt("return", {
                                    sign: r,
                                    xxqgLogin: o["xxqg-login"],
                                    login: !0
                                });
                            case 12:
                                e.prev = 12,
                                e.t0 = e.catch(1),
                                window.__bl.error && __bl.error(e.t0, {
                                    filename: "login-sign-error"
                                }),
                                e.t0 && e.t0.data && 50001 === e.t0.data.code && (z ? window.parent.postMessage({
                                    name: "login",
                                    code: 50001,
                                    message: "当前登录人数过多，请您稍后再来"
                                }, P) : c.a.warning("当前登录人数过多，请您稍后再来", 10)),
                                e.t0 && "Error: Network Error" === e.t0.toString() && z && window.parent.postMessage({
                                    name: "login",
                                    code: -2,
                                    message: "网络错误"
                                }, P),
                                console.error("Failed to get login nonce: ", e.t0);
                            case 18:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[1, 12]])
                }
                ))),
                function() {
                    return i.apply(this, arguments)
                }
                )
            }, {
                key: "renderDDLogin",
                value: (a = R(regeneratorRuntime.mark((function e(t) {
                    var n, r, o, a, i;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return n = t,
                                r = "".concat(b.a.pointApiHost, "/open/api/sns/callback"),
                                o = {
                                    appid: N,
                                    response_type: "code",
                                    scope: "snsapi_login",
                                    redirect_uri: r
                                },
                                e.prev = 3,
                                e.next = 6,
                                g.clientID.aes(n);
                            case 6:
                                n = e.sent,
                                e.next = 14;
                                break;
                            case 9:
                                e.prev = 9,
                                e.t0 = e.catch(3),
                                z && window.parent.postMessage({
                                    name: "login",
                                    code: -3,
                                    message: "指纹错误"
                                }, P),
                                window.__bl.error && __bl.error(e.t0, {
                                    filename: "login-fp-error"
                                }),
                                console.error("Failed to encrypt login state: ", e.t0);
                            case 14:
                                a = "https://".concat(Q, "/connect/qrconnect?").concat(Object(v.j)(o)),
                                s = {
                                    id: "ddlogin",
                                    state: n,
                                    goto: encodeURIComponent(a),
                                    width: 218,
                                    height: 254,
                                    style: "border:none;background-color:#FFFFFF;"
                                },
                                c = void 0,
                                u = void 0,
                                l = void 0,
                                u = document.createElement("iframe"),
                                l = "https://".concat(b.a.dingHostLogin, "/login/qrcode.htm?goto=") + s.goto,
                                l += s.style ? "&style=" + encodeURIComponent(s.style) : "",
                                l += s.href ? "&href=" + s.href : "",
                                u.src = l,
                                u.frameBorder = "0",
                                u.allowTransparency = "true",
                                u.scrolling = "no",
                                u.width = s.width ? s.width + "px" : "365px",
                                u.height = s.height ? s.height + "px" : "400px",
                                (c = document.getElementById(s.id)).innerHTML = "",
                                u.id = "ddlogin-iframe",
                                c.appendChild(u),
                                i = function(e) {
                                    if (e.origin.endsWith("dingtalk.com")) {
                                        if ("object" === E(e.data))
                                            return;
                                        var t = e.data
                                          , o = {
                                            appid: N,
                                            state: n,
                                            response_type: "code",
                                            scope: "snsapi_login",
                                            redirect_uri: r,
                                            loginTmpCode: t
                                        };
                                        L.ref && Object(v.h)(L.ref),
                                        z && Object(v.h)(window.location.href);
                                        var a = "https://".concat(Q, "/connect/oauth2/sns_authorize?").concat(Object(v.j)(o));
                                        location.href = a
                                    } else {
                                        var i = e.data
                                          , s = i.name
                                          , c = i.code;
                                        "login" === s && 1 === c && self.refreshQRCode()
                                    }
                                }
                                ,
                                void 0 !== window.addEventListener ? window.addEventListener("message", i, !1) : void 0 !== window.attachEvent && window.attachEvent("onmessage", i);
                            case 18:
                            case "end":
                                return e.stop()
                            }
                        var s, c, u, l
                    }
                    ), e, null, [[3, 9]])
                }
                ))),
                function(e) {
                    return a.apply(this, arguments)
                }
                )
            }, {
                key: "refreshQRCode",
                value: function() {
                    var e = document.getElementById("ddlogin-iframe");
                    e && (e.src = e.src)
                }
            }, {
                key: "renderQRCode",
                value: function() {
                    return console.log(this.state.loginJam),
                    this.state.loginJam ? null : o.a.createElement("div", {
                        className: "qrcode-box ".concat(z ? "qrcode-only" : "")
                    }, o.a.createElement("div", {
                        className: "ddloginbox"
                    }, o.a.createElement("div", {
                        className: "loginbox-outer"
                    }, o.a.createElement("div", {
                        className: "loginbox-inner"
                    }, this.state.useDD ? o.a.createElement("div", {
                        id: "ddlogin"
                    }) : o.a.createElement("div", {
                        id: "qglogin"
                    }))), o.a.createElement("span", {
                        className: "refresh",
                        onClick: this.refreshQRCode
                    }, "刷新")), o.a.createElement("div", null, o.a.createElement("div", {
                        className: "ddlogintext"
                    }, "用学习强国扫码登录，如未安装扫码下载")))
                }
            }, {
                key: "render",
                value: function() {
                    var e = Object(v.f)();
                    return z ? this.renderQRCode() : o.a.createElement(h.a, null, o.a.createElement(u.Helmet, null, o.a.createElement("title", null, "用户登录")), !e && "chrome" === D.name && o.a.createElement("iframe", {
                        src: k.a,
                        allow: "autoplay",
                        id: "audio",
                        style: {
                            display: "none"
                        }
                    }), !e && o.a.createElement("audio", {
                        autoPlay: !0,
                        src: w.a
                    }), o.a.createElement("div", {
                        className: "redflagbox"
                    }, o.a.createElement("div", {
                        className: "redflag-2"
                    }, o.a.createElement("div", {
                        className: "logo"
                    }), o.a.createElement("div", {
                        className: "movetextbox fadeindown"
                    }, o.a.createElement("div", {
                        className: "movetitle"
                    }), o.a.createElement("div", {
                        className: "moveword"
                    }, o.a.createElement("span", null, "我志愿加入中国共产党，拥护党的纲领，遵守党的"), "章程，履行党员义务，执行党的决定，严守党的纪律，保守党的秘密，对党忠诚，积极工作，为共产主义奋斗终身，随时准备为党和人民牺牲一切，永不叛党。")))), this.renderQRCode())
                }
            }]) && I(t.prototype, n),
            r && I(t, r),
            f
        }(o.a.Component);
        i.a.render(o.a.createElement(C, null), document.getElementById("app"))
    },
    hDHV: function(e, t, n) {
        "use strict";
        var r = n("s+4w")
          , o = n("ZTfI")
          , a = n("8SHQ")
          , i = n("K9Av")
          , s = n.n(i)
          , c = Object(r.detect)();
        function u(e) {
            window.__bl.sum && __bl.sum("风控异常 ".concat({
                11: "webgl不兼容",
                12: "audio不兼容",
                13: "canvas不兼容",
                14: "获取指纹异常统计（不影响功能）"
            }[e], " msg: ").concat(JSON.stringify(c) + window.navigator.userAgent))
        }
        for (var l = 11; l <= 14; l++)
            o.FpLog.push(u.bind(null, l));
        t.a = s()({
            use: [],
            serviceLocation: "xxqg",
            domain: a.a.domain,
            timeout: 2e3
        })
    },
    hgoN: function(e, t, n) {},
    lw7w: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return y
        }
        )),
        n.d(t, "c", (function() {
            return x
        }
        )),
        n.d(t, "b", (function() {
            return E
        }
        ));
        n("4q64");
        var r = n("LUJl")
          , o = n.n(r)
          , a = (n("Q3iC"),
        n("kexM"))
          , i = n.n(a)
          , s = n("91MD")
          , c = n.n(s)
          , u = n("ZTfI")
          , l = n("8SHQ")
          , d = n("9kRk")
          , f = n("hDHV");
        function p(e, t, n, r, o, a, i) {
            try {
                var s = e[a](i)
                  , c = s.value
            } catch (e) {
                return void n(e)
            }
            s.done ? t(c) : Promise.resolve(c).then(r, o)
        }
        function m(e) {
            return function() {
                var t = this
                  , n = arguments;
                return new Promise((function(r, o) {
                    var a = e.apply(t, n);
                    function i(e) {
                        p(a, r, o, i, s, "next", e)
                    }
                    function s(e) {
                        p(a, r, o, i, s, "throw", e)
                    }
                    i(void 0)
                }
                ))
            }
        }
        c.a.defaults.headers.common.Pragma = "no-cache";
        var g = c.a.create({
            withCredentials: !0
        });
        g.interceptors.request.use((function(e) {
            return new Promise((function(t) {
                u.clientID.ready((function() {
                    u.clientID.setCookie(l.a.domain),
                    u.clientID.renew(),
                    t(e)
                }
                ), (function(n) {
                    window.__bl.error && __bl.error(n, {
                        filename: "cookie-fp-error"
                    }),
                    t(e)
                }
                ))
            }
            ))
        }
        ), (function(e) {
            return Promise.reject(e)
        }
        ));
        var h = !1;
        function b() {
            i.a.info({
                title: "登录信息已过期，请重新登录",
                onOk: function() {
                    Object(d.d)()
                },
                afterClose: function() {
                    h = !1
                }
            }),
            h = !0
        }
        g.interceptors.response.use((function(e) {
            return e.data && 200 !== e.data.code ? (401 == e.data.code && (h || b()),
            Promise.reject(e)) : e
        }
        ), (function(e) {
            return e.response ? 401 === e.response.status ? h || b() : o.a.error("".concat(e.response.data.error.message || e.response.data.message)) : o.a.error("系统繁忙，请稍后再试"),
            Promise.reject(e)
        }
        ));
        var v = l.a.pointApiHost
          , j = l.a.outerLinkHost;
        function y() {
            return w.apply(this, arguments)
        }
        function w() {
            return (w = m(regeneratorRuntime.mark((function e() {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            f.a;
                        case 2:
                            return "/open/api/sns/sign",
                            e.next = 5,
                            g.get(v + "/open/api/sns/sign");
                        case 5:
                            return t = e.sent,
                            e.abrupt("return", {
                                sign: t.data.data.sign,
                                headers: t.headers
                            });
                        case 7:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function x() {
            return k.apply(this, arguments)
        }
        function k() {
            return (k = m(regeneratorRuntime.mark((function e() {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return "/open/api/auth/check",
                            e.next = 3,
                            g.get(v + "/open/api/auth/check");
                        case 3:
                            return t = e.sent,
                            e.abrupt("return", t.data.data);
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function E() {
            return O.apply(this, arguments)
        }
        function O() {
            return (O = m(regeneratorRuntime.mark((function e() {
                var t;
                return regeneratorRuntime.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return "/open/api/usr/menu",
                            e.next = 3,
                            g.get(j + "/open/api/usr/menu");
                        case 3:
                            return t = e.sent,
                            e.abrupt("return", t.data.data);
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        c.a.create({}).interceptors.response.use((function(e) {
            return e.data && 0 !== e.data.status ? Promise.reject(e) : e
        }
        ), (function(e) {
            return Promise.reject(e)
        }
        ))
    },
    "nF/r": function(e, t, n) {},
    qvEN: function(e, t, n) {
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
                throw t.code = "MODULE_NOT_FOUND",
                t
            }
            return r[e]
        }
        o.keys = function() {
            return Object.keys(r)
        }
        ,
        o.resolve = a,
        e.exports = o,
        o.id = "qvEN"
    }
});

setTimeout(()=>{
    var hook_windows = document.getElementById("ddlogin-iframe");
    var hook_box = document.getElementsByClassName("ddloginbox")[0];
    hook_box.childNodes[0].className = "hhh";
    hook_windows.style.width = "600px";
    hook_windows.style.height = "800px";
},500)
