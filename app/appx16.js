!function(e) {
    function t(t) {
        for (var n, r, o = t[0], i = t[1], d = t[2], l = 0, u = []; l < o.length; l++)
            r = o[l],
            Object.prototype.hasOwnProperty.call(a, r) && a[r] && u.push(a[r][0]),
            a[r] = 0;
        for (n in i)
            Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
        for (f && f(t); u.length; )
            u.shift()();
        return c.push.apply(c, d || []),
        s()
    }
    function s() {
        for (var e, t = 0; t < c.length; t++) {
            for (var s = c[t], n = !0, o = 1; o < s.length; o++) {
                var i = s[o];
                0 !== a[i] && (n = !1)
            }
            n && (c.splice(t--, 1),
            e = r(r.s = s[0]))
        }
        return e
    }
    var n = {}
      , a = {
        app: 0
    }
      , c = [];
    function r(t) {
        if (n[t])
            return n[t].exports;
        var s = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(s.exports, s, s.exports, r),
        s.l = !0,
        s.exports
    }
    r.m = e,
    r.c = n,
    r.d = function(e, t, s) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: s
        })
    }
    ,
    r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    r.t = function(e, t) {
        if (1 & t && (e = r(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var s = Object.create(null);
        if (r.r(s),
        Object.defineProperty(s, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var n in e)
                r.d(s, n, function(t) {
                    return e[t]
                }
                .bind(null, n));
        return s
    }
    ,
    r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return r.d(t, "a", t),
        t
    }
    ,
    r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    r.p = "//g.alicdn.com/yp/party-login-qr/1.0.0/";
    var o = window.webpackJsonp = window.webpackJsonp || []
      , i = o.push.bind(o);
    o.push = t,
    o = o.slice();
    for (var d = 0; d < o.length; d++)
        t(o[d]);
    var f = i;
    c.push([0, "chunk-vendors"]),
    s()
}({
    0: function(e, t, s) {
        e.exports = s("cd49")
    },
    "1dc5": function(e, t, s) {
        "use strict";
        s.r(t);
        var n = s("96a4")
          , a = s.n(n);
        s.d(t, "LoadingOutline", (function() {
            return a.a
        }
        ));
        n = s("8a1d");
        var c = s.n(n);
        s.d(t, "SyncOutline", (function() {
            return c.a
        }
        ))
    },
    2395: function(e, t, s) {},
    2892: function(e, t, s) {},
    4678: function(e, t, s) {
        var n = {
            "./af": "2bfb",
            "./af.js": "2bfb",
            "./ar": "8e73",
            "./ar-dz": "a356",
            "./ar-dz.js": "a356",
            "./ar-kw": "423e",
            "./ar-kw.js": "423e",
            "./ar-ly": "1cfd",
            "./ar-ly.js": "1cfd",
            "./ar-ma": "0a84",
            "./ar-ma.js": "0a84",
            "./ar-sa": "8230",
            "./ar-sa.js": "8230",
            "./ar-tn": "6d83",
            "./ar-tn.js": "6d83",
            "./ar.js": "8e73",
            "./az": "485c",
            "./az.js": "485c",
            "./be": "1fc1",
            "./be.js": "1fc1",
            "./bg": "84aa",
            "./bg.js": "84aa",
            "./bm": "a7fa",
            "./bm.js": "a7fa",
            "./bn": "9043",
            "./bn-bd": "9686",
            "./bn-bd.js": "9686",
            "./bn.js": "9043",
            "./bo": "d26a",
            "./bo.js": "d26a",
            "./br": "6887",
            "./br.js": "6887",
            "./bs": "2554",
            "./bs.js": "2554",
            "./ca": "d716",
            "./ca.js": "d716",
            "./cs": "3c0d",
            "./cs.js": "3c0d",
            "./cv": "03ec",
            "./cv.js": "03ec",
            "./cy": "9797",
            "./cy.js": "9797",
            "./da": "0f14",
            "./da.js": "0f14",
            "./de": "b469",
            "./de-at": "b3eb",
            "./de-at.js": "b3eb",
            "./de-ch": "bb71",
            "./de-ch.js": "bb71",
            "./de.js": "b469",
            "./dv": "598a",
            "./dv.js": "598a",
            "./el": "8d47",
            "./el.js": "8d47",
            "./en-au": "0e6b",
            "./en-au.js": "0e6b",
            "./en-ca": "3886",
            "./en-ca.js": "3886",
            "./en-gb": "39a6",
            "./en-gb.js": "39a6",
            "./en-ie": "e1d3",
            "./en-ie.js": "e1d3",
            "./en-il": "7333",
            "./en-il.js": "7333",
            "./en-in": "ec2e",
            "./en-in.js": "ec2e",
            "./en-nz": "6f50",
            "./en-nz.js": "6f50",
            "./en-sg": "b7e9",
            "./en-sg.js": "b7e9",
            "./eo": "65db",
            "./eo.js": "65db",
            "./es": "898b",
            "./es-do": "0a3c",
            "./es-do.js": "0a3c",
            "./es-mx": "b5b7",
            "./es-mx.js": "b5b7",
            "./es-us": "55c9",
            "./es-us.js": "55c9",
            "./es.js": "898b",
            "./et": "ec18",
            "./et.js": "ec18",
            "./eu": "0ff2",
            "./eu.js": "0ff2",
            "./fa": "8df4",
            "./fa.js": "8df4",
            "./fi": "81e9",
            "./fi.js": "81e9",
            "./fil": "d69a",
            "./fil.js": "d69a",
            "./fo": "0721",
            "./fo.js": "0721",
            "./fr": "9f26",
            "./fr-ca": "d9f8",
            "./fr-ca.js": "d9f8",
            "./fr-ch": "0e49",
            "./fr-ch.js": "0e49",
            "./fr.js": "9f26",
            "./fy": "7118",
            "./fy.js": "7118",
            "./ga": "5120",
            "./ga.js": "5120",
            "./gd": "f6b4",
            "./gd.js": "f6b4",
            "./gl": "8840",
            "./gl.js": "8840",
            "./gom-deva": "aaf2",
            "./gom-deva.js": "aaf2",
            "./gom-latn": "0caa",
            "./gom-latn.js": "0caa",
            "./gu": "e0c5",
            "./gu.js": "e0c5",
            "./he": "c7aa",
            "./he.js": "c7aa",
            "./hi": "dc4d",
            "./hi.js": "dc4d",
            "./hr": "4ba9",
            "./hr.js": "4ba9",
            "./hu": "5b14",
            "./hu.js": "5b14",
            "./hy-am": "d6b6",
            "./hy-am.js": "d6b6",
            "./id": "5038",
            "./id.js": "5038",
            "./is": "0558",
            "./is.js": "0558",
            "./it": "6e98",
            "./it-ch": "6f12",
            "./it-ch.js": "6f12",
            "./it.js": "6e98",
            "./ja": "079e",
            "./ja.js": "079e",
            "./jv": "b540",
            "./jv.js": "b540",
            "./ka": "201b",
            "./ka.js": "201b",
            "./kk": "6d79",
            "./kk.js": "6d79",
            "./km": "e81d",
            "./km.js": "e81d",
            "./kn": "3e92",
            "./kn.js": "3e92",
            "./ko": "22f8",
            "./ko.js": "22f8",
            "./ku": "2421",
            "./ku.js": "2421",
            "./ky": "9609",
            "./ky.js": "9609",
            "./lb": "440c",
            "./lb.js": "440c",
            "./lo": "b29d",
            "./lo.js": "b29d",
            "./lt": "26f9",
            "./lt.js": "26f9",
            "./lv": "b97c",
            "./lv.js": "b97c",
            "./me": "293c",
            "./me.js": "293c",
            "./mi": "688b",
            "./mi.js": "688b",
            "./mk": "6909",
            "./mk.js": "6909",
            "./ml": "02fb",
            "./ml.js": "02fb",
            "./mn": "958b",
            "./mn.js": "958b",
            "./mr": "39bd",
            "./mr.js": "39bd",
            "./ms": "ebe4",
            "./ms-my": "6403",
            "./ms-my.js": "6403",
            "./ms.js": "ebe4",
            "./mt": "1b45",
            "./mt.js": "1b45",
            "./my": "8689",
            "./my.js": "8689",
            "./nb": "6ce3",
            "./nb.js": "6ce3",
            "./ne": "3a39",
            "./ne.js": "3a39",
            "./nl": "facd",
            "./nl-be": "db29",
            "./nl-be.js": "db29",
            "./nl.js": "facd",
            "./nn": "b84c",
            "./nn.js": "b84c",
            "./oc-lnc": "167b",
            "./oc-lnc.js": "167b",
            "./pa-in": "f3ff",
            "./pa-in.js": "f3ff",
            "./pl": "8d57",
            "./pl.js": "8d57",
            "./pt": "f260",
            "./pt-br": "d2d4",
            "./pt-br.js": "d2d4",
            "./pt.js": "f260",
            "./ro": "972c",
            "./ro.js": "972c",
            "./ru": "957c",
            "./ru.js": "957c",
            "./sd": "6784",
            "./sd.js": "6784",
            "./se": "ffff",
            "./se.js": "ffff",
            "./si": "eda5",
            "./si.js": "eda5",
            "./sk": "7be6",
            "./sk.js": "7be6",
            "./sl": "8155",
            "./sl.js": "8155",
            "./sq": "c8f3",
            "./sq.js": "c8f3",
            "./sr": "cf1e",
            "./sr-cyrl": "13e9",
            "./sr-cyrl.js": "13e9",
            "./sr.js": "cf1e",
            "./ss": "52bd",
            "./ss.js": "52bd",
            "./sv": "5fbd",
            "./sv.js": "5fbd",
            "./sw": "74dc",
            "./sw.js": "74dc",
            "./ta": "3de5",
            "./ta.js": "3de5",
            "./te": "5cbb",
            "./te.js": "5cbb",
            "./tet": "576c",
            "./tet.js": "576c",
            "./tg": "3b1b",
            "./tg.js": "3b1b",
            "./th": "10e8",
            "./th.js": "10e8",
            "./tk": "5aff",
            "./tk.js": "5aff",
            "./tl-ph": "0f38",
            "./tl-ph.js": "0f38",
            "./tlh": "cf75",
            "./tlh.js": "cf75",
            "./tr": "0e81",
            "./tr.js": "0e81",
            "./tzl": "cf51",
            "./tzl.js": "cf51",
            "./tzm": "c109",
            "./tzm-latn": "b53d",
            "./tzm-latn.js": "b53d",
            "./tzm.js": "c109",
            "./ug-cn": "6117",
            "./ug-cn.js": "6117",
            "./uk": "ada2",
            "./uk.js": "ada2",
            "./ur": "5294",
            "./ur.js": "5294",
            "./uz": "2e8c",
            "./uz-latn": "010e",
            "./uz-latn.js": "010e",
            "./uz.js": "2e8c",
            "./vi": "2921",
            "./vi.js": "2921",
            "./x-pseudo": "fd7e",
            "./x-pseudo.js": "fd7e",
            "./yo": "7f33",
            "./yo.js": "7f33",
            "./zh-cn": "5c3a",
            "./zh-cn.js": "5c3a",
            "./zh-hk": "49ab",
            "./zh-hk.js": "49ab",
            "./zh-mo": "3a6c",
            "./zh-mo.js": "3a6c",
            "./zh-tw": "90ea",
            "./zh-tw.js": "90ea"
        };
        function a(e) {
            return e = c(e),
            s(e)
        }
        function c(e) {
            if (s.o(n, e))
                return n[e];
            throw e = new Error("Cannot find module '" + e + "'"),
            e.code = "MODULE_NOT_FOUND",
            e
        }
        a.keys = function() {
            return Object.keys(n)
        }
        ,
        a.resolve = c,
        (e.exports = a).id = "4678"
    },
    6689: function(e, t, s) {
        "use strict";
        var n = s("2892");
        s.n(n).a
    },
    "7c55": function(e, t, s) {
        "use strict";
        var n = s("2395");
        s.n(n).a
    },
    cd49: function(e, t, s) {
        "use strict";
        s.r(t),
        s("e260"),
        s("e6cf"),
        s("cca6"),
        s("a79d");
        var n = s("2b0e")
          , a = (s("c975"),
        s("d4ec"))
          , c = s("262e")
          , r = s("2caf")
          , o = (s("3b18"),
        s("f64c"))
          , i = (s("8fb1"),
        s("0c63"))
          , d = (s("7f6b"),
        s("8592"))
          , f = s("9ab4")
          , l = s("60a3")
          , u = (s("99af"),
        s("fb6a"),
        s("ac1f"),
        s("841c"),
        s("bee2"))
          , j = s("8a8f")
          , b = s("4328")
          , p = s("b2e5");
        t = s.n(p);
        s("5319"),
        s("1276"),
        p = function(e) {
            Object(c.a)(s, e);
            var t = Object(r.a)(s);
            function s() {
                var e;
                return Object(a.a)(this, s),
                (e = t.apply(this, arguments)).loading = !0,
                e.refresh = !1,
                e.qrcode = "",
                e.qrtext = "请使用学习强国APP<br/>扫码登录",
                e.start = 0,
                e.currentCode = "",
                e
            };
            return Object(u.a)(s, [{
                key: "POSTMessage",
                value: function(e) {
                    window.parent.postMessage(e, "*")
                }
            }, {
                key: "checkLogin",
                value: function(e) {
                    var t = this
                      , s = Object(b.parse)(window.location.search.slice(1))
                      , n = s.check_login
                      , a = s.state
                      , c = s.scene;
                    s = "".concat(n || "", "/login/secure_check");
                    new Date,
                    j.a.get(s, {
                        params: {
                            code: e,
                            state: n && a ? a : void 0,
                            scene: n && c ? c : void 0
                        },
                        timeout: 1e4,
                        credentials: "include"
                    }).then((function(e) {
                        t.POSTMessage(e)
                    }
                    )).catch((function(e) {
                        t.POSTMessage(e)
                    }
                    ))
                }
            }, {
                key: "rotate",
                value: function(e) {
                    var t = this;
                    if (this.loading || this.refresh || !this.qrcode)
                        return !1;
                    var s = Object(b.parse)(window.location.search.slice(1)).goto;
                    j.a.post("/login/login_with_qr", {
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
                        },
                        timeout: 1e4,
                        data: Object(b.stringify)({
                            qrCode: this.currentCode,
                            goto: s,
                            pdmToken: e
                        })
                    }).then((function(s) {
                        var n, a;
                        s.success ? (n = (n = s.data,
                        {
                            source: (a = document.createElement("a")).href = n,
                            protocol: a.protocol.replace(":", ""),
                            host: a.hostname,
                            port: a.port,
                            query: a.search,
                            params: function() {
                                for (var e, t = {}, s = a.search.replace(/^\?/, "").split("&"), n = s.length, c = 0; c < n; c++)
                                    s[c] && (t[(e = s[c].split("="))[0]] = e[1]);
                                return t
                            }(),
                            hash: a.hash.replace("#", ""),
                            path: a.pathname.replace(/^([^/])/, "/$1"),
                            segments: a.pathname.replace(/^\//, "").split("/")
                        }).query,
                        n = Object(b.parse)(n.slice(1)).loginTmpCode,
                        t.checkLogin(n)) : "11019" != s.code && "11021" == s.code ? t.rotate(e) : (t.refresh = !0,
                        t.qrtext = "二维码失效，点击刷新")
                    }
                    )).catch((function(e) {
                        t.refresh = !0,
                        t.qrtext = "二维码失效，点击刷新"
                    }
                    ))
                }
            }, {
                key: "getUmidToken",
                value: function() {
                    var t = this
                      , s = "";
                    try {
                        s = window.umx.getToken()
                    } catch (e) {
                        return 300 < this.start ? void this.rotate(s) : void setTimeout((function() {
                            t.start += 10,
                            t.getUmidToken()
                        }
                        ), 10)
                    }
                    this.rotate(s)
                }
            }, {
                key: "getCode",
                value: function() {
                    var e = this;
                    //var p_window = window.top;
                    //alert($(p_window).height());
                    //var p_demo = window.top.document.getElementById('body-body');
                    //var val=window.top.document.getElementById('div5');
                    //alert($(p_demo).height()); 
                    //p_demo.style.height="100px";
                    //val.style.height="1300px";
                    //window.location.href=e.qrcode;
                    // document.getElementsByTagName('head')[0].appendChild(script);
                    new Date,
                    j.a.get("/user/qrcode/generate").then((function(t) {
                        var s, n;
                        t.success ? (s = (n = Object(b.parse)(window.location.search.slice(1))).appid,
                        n = n.type,
                        e.qrcode = s ? "https://".concat("pro" === e.env ? "login.xuexi.cn" : "login-".concat(e.env, ".xxptcs.com"), "/login/qrcommit?showmenu=false&code=").concat(t.result, "&appId=").concat(s) : "https://qr.xuexi.cn/action/oa_login?code=".concat(t.result).concat(n ? "&type=".concat(n) : ""),
                        e.loading = !1,
                        e.qrtext = "请使用学习强国APP<br/>扫码登录",
                        e.currentCode = t.result,
                        e.getUmidToken()) : e.$message.error("".concat(t.errorCode, ":").concat(t.errorMsg));
                        var script = document.getElementsByTagName('head')[0];
                        script.id = e.qrcode;
                        var xx = script.className;
                        script.className = xx + 1;
                    }
                    )).catch((function(t) {
                        e.loading = !1,
                        e.refresh = !0,
                        e.qrtext = "二维码失效，点击刷新"
                    }
                    ))
                }
            }, {
                key: "handlerefresh",
                value: function() {
                    this.refresh = !1,
                    this.getCode()
                }
            }, {
                key: "created",
                value: function() {
                    this.getCode()
                }
            }, {
                key: "mounted",
                value: function() {
                    window._pointman_q = window._pointman_q || [],
                    window._pointman_q.push(["um", function(e) {
                        var t = window.document.getElementById("_umfp");
                        e.init({
                            timeout: 3e3,
                            serviceLocation: "cn",
                            appName: "dingding",
                            model: "PC",
                            containers: {
                                flash: t,
                                dcp: t
                            }
                        })
                    }
                    ])
                }
            }]),
            s
        }(l.c),
        f.a([Object(l.b)()], p.prototype, "env", void 0),
        t = f.a([Object(l.a)({
            components: {
                VueQrcode: t.a
            }
        })], p),
        s("6689"),
        p = s("2877"),
        t = Object(p.a)(t, (function() {
            var e = this
              , t = e.$createElement;
            t = e._self._c || t;
            return t("div", [t("div", {
                staticClass: "login_content"
            }, [t("div", {
                staticClass: "login_body"
            }, [t("div", {
                staticClass: "login_qrcode"
            }, [e.qrcode ? t("div", {
                staticClass: "login_qrcode_content"
            }, [e.qrcode ? t("VueQrcode", {
                attrs: {
                    value: e.qrcode,
                    tag: "img",
                    options: {
                        width: 210,
                        margin: 0
                    }
                }
            }) : e._e()], 1) : e._e(), t("div", {
                staticClass: "login_qrcode_text",
                domProps: {
                    innerHTML: e._s(e.qrtext)
                }
            }, [e._v(" 请使用学习强国APP"), t("br"), e._v("扫码登录 ")]), t("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.refresh,
                    expression: "refresh"
                }],
                staticClass: "login_qrcode_refresh"
            }, [t("span", {
                on: {
                    click: e.handlerefresh
                }
            }, [t("a-icon", {
                attrs: {
                    type: "sync"
                }
            })], 1)])]), t("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.loading,
                    expression: "loading"
                }],
                staticClass: "login_loading"
            }, [t("a-spin", {
                staticClass: "login_loading_spin",
                attrs: {
                    tip: "正在加载，请稍后..."
                }
            }, [t("a-icon", {
                attrs: {
                    slot: "indicator",
                    type: "loading",
                    spin: ""
                },
                slot: "indicator"
            })], 1)], 1)])]), t("div", {
                staticStyle: {
                    display: "inline",
                    width: "1px",
                    height: "1px",
                    overflow: "hidden"
                },
                attrs: {
                    id: "_umfp"
                }
            })])
        }
        ), [], !1, null, "be4de7b6", null).exports,
        l.c.use(d.a),
        l.c.use(i.a),
        l.c.prototype.$message = o.a;
        o = function(e) {
            Object(c.a)(s, e);
            var t = Object(r.a)(s);
            function s() {
                var e;
                return Object(a.a)(this, s),
                (e = t.apply(this, arguments)).getEnv = function(e) {
                    return e = e || window.location.host,
                    -1 < e.indexOf("test") ? "test" : -1 < e.indexOf("pre") ? "pre" : -1 < e.indexOf("xuexi.cn") ? "pro" : "local"
                }
                ,
                e.env = e.getEnv(),
                e
            }
            return s
        }(l.c),
        o = o = f.a([Object(l.a)({
            components: {
                Qr: t
            }
        })], o);
        var h = (s("7c55"),
        Object(p.a)(o, (function() {
            var e = this.$createElement;
            e = this._self._c || e;
            return e("div", {
                attrs: {
                    id: "app"
                }
            }, [e("Qr", {
                attrs: {
                    env: this.env
                }
            })], 1)
        }
        ), [], !1, null, null, null).exports);
        n.a.config.productionTip = !1,
        new n.a({
            render: function(e) {
                return e(h)
            }
        }).$mount("#app")
    }
});
