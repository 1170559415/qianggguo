
setTimeout(()=>{
    hoke();
},"1000");

function hoke() {
// ==UserScript==
// @name         Everything-Hook
// @namespace    https://gitee.com/HGJing/everthing-hook/
// @updateURL    https://gitee.com/HGJing/everthing-hook/raw/master/src/everything-hook.js
// @version      0.5.9056
// @include      *
// @description  it can hook everything
// @author       Cangshi
// @match        http://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/**
 * ---------------------------
 * Time: 2017/9/20 18:33.
 * Author: Cangshi
 * View: http://palerock.cn
 * ---------------------------
 */


const eUtils = __webpack_require__(1);

~(function (global, factory) {

    "use strict";

    if ( true && typeof module.exports === "object") {
        var results = factory.bind(global)(global, eUtils, true) || [];
        var HookJS = {};
        results.forEach(function (part) {
            HookJS[part.name] = part.module;
        });
        module.exports = HookJS;
    } else {
        factory.bind(global)(global, eUtils);
    }

}(typeof window !== "undefined" ? window : this, function (_global, utils, noGlobal) {
    /**
     * @namespace EHook
     * @author Cangshi
     * @constructor
     * @see {@link https://palerock.cn/projects/006HDUuOhBj}
     * @license Apache License 2.0
     */
    var EHook = function () {
        var _autoId = 1;
        var _hookedMap = {};
        var _hookedContextMap = {};
        this._getHookedMap = function () {
            return _hookedMap;
        };
        this._getHookedContextMap = function () {
            return _hookedContextMap;
        };
        this._getAutoStrId = function () {
            return '__auto__' + _autoId++;
        };
        this._getAutoId = function () {
            return _autoId++;
        };
    };
    EHook.prototype = {
        /**
         * ???????????????????????????id???????????????????????????
         * @param context
         * @return {*}
         * @private
         */
        _getHookedId: function (context) {
            var contextMap = this._getHookedContextMap();
            var hookedId = null;
            Object.keys(contextMap).forEach(key => {
                if (context === contextMap[key]) {
                    hookedId = key;
                }
            });
            if (hookedId == null) {
                hookedId = this._getAutoStrId();
                contextMap[hookedId] = context;
            }
            return hookedId;
        },
        /**
         * ??????????????????????????????????????????????????????????????????
         * @param context
         * @return {*}
         * @private
         */
        _getHookedMethodMap: function (context) {
            var hookedId = this._getHookedId(context);
            var hookedMap = this._getHookedMap();
            var thisTask = hookedMap[hookedId];
            if (!utils.isExistObject(thisTask)) {
                thisTask = hookedMap[hookedId] = {};
            }
            return thisTask;
        },
        /**
         * ?????????????????????hook???????????????????????????????????????????????????
         * @param context
         * @param methodName
         * @private
         */
        _getHookedMethodTask: function (context, methodName) {
            var thisMethodMap = this._getHookedMethodMap(context);
            var thisMethod = thisMethodMap[methodName];
            if (!utils.isExistObject(thisMethod)) {
                thisMethod = thisMethodMap[methodName] = {
                    original: undefined,
                    replace: undefined,
                    task: {
                        before: [],
                        current: undefined,
                        after: []
                    }
                };
            }
            return thisMethod;
        },
        /**
         * ??????????????????????????????????????????????????????
         * @param context
         * @param methods
         * @param args
         * @return result ??????????????????????????????????????????
         * @private
         */
        _invokeMethods: function (context, methods, args) {
            if (!utils.isArray(methods)) {
                return;
            }
            var result = null;
            utils.ergodicArrayObject(context, methods, function (_method) {
                if (!utils.isFunction(_method.method)) {
                    return;
                }
                var r = _method.method.apply(this, args);
                if (r != null) {
                    result = r;
                }
            });
            return result;
        },
        /**
         * ???????????????????????????
         * @param parent
         * @param context
         * @param methodName {string}
         * @private
         */
        _hook: function (parent, methodName, context) {
            if (context === undefined) {
                context = parent;
            }
            var method = parent[methodName];
            var methodTask = this._getHookedMethodTask(parent, methodName);
            if (!methodTask.original) {
                methodTask.original = method;
            }
            if (utils.isExistObject(methodTask.replace) && utils.isFunction(methodTask.replace.method)) {
                parent[methodName] = methodTask.replace.method(methodTask.original);
                return;
            }
            var invokeMethods = this._invokeMethods;
            // ??????????????????
            var builder = new utils.FunctionBuilder(function (v) {
                return {
                    result: undefined
                };
            });
            if (methodTask.task.before.length > 0) {
                builder.push(function (v) {
                    invokeMethods(context || v.this, methodTask.task.before, [methodTask.original, v.arguments]);
                });
            }
            if (utils.isExistObject(methodTask.task.current) && utils.isFunction(methodTask.task.current.method)) {
                builder.push(function (v) {
                    return {
                        result: methodTask.task.current.method.call(context || v.this, parent, methodTask.original, v.arguments)
                    }
                });
            } else {
                builder.push(function (v) {
                    return {
                        result: methodTask.original.apply(context || v.this, v.arguments)
                    }
                });
            }
            if (methodTask.task.after.length > 0) {
                builder.push(function (v) {
                    var args = [];
                    args.push(methodTask.original);
                    args.push(v.arguments);
                    args.push(v.result);
                    var r = invokeMethods(context || v.this, methodTask.task.after, args);
                    return {
                        result: (r != null ? r : v.result)
                    };
                });
            }
            builder.push(function (v) {
                return {
                    returnValue: v.result
                };
            });
            // var methodStr = '(function(){\n';
            // methodStr = methodStr + 'var result = undefined;\n';
            // if (methodTask.task.before.length > 0) {
            //     methodStr = methodStr + 'invokeMethods(context, methodTask.task.before,[methodTask.original, arguments]);\n';
            // }
            // if (utils.isExistObject(methodTask.task.current) && utils.isFunction(methodTask.task.current.method)) {
            //     methodStr = methodStr + 'result = methodTask.task.current.method.call(context, parent, methodTask.original, arguments);\n';
            // } else {
            //     methodStr = methodStr + 'result = methodTask.original.apply(context, arguments);\n';
            // }
            // if (methodTask.task.after.length > 0) {
            //     methodStr = methodStr + 'var args = [];args.push(methodTask.original);args.push(arguments);args.push(result);\n';
            //     methodStr = methodStr + 'var r = invokeMethods(context, methodTask.task.after, args);result = (r!=null?r:result);\n';
            // }
            // methodStr = methodStr + 'return result;\n})';
            // ??????????????????
            var resultFunc = builder.result();
            for (var proxyName in methodTask.original) {
                Object.defineProperty(resultFunc, proxyName, {
                    get: function () {
                        return methodTask.original[proxyName];
                    },
                    set: function (v) {
                        methodTask.original[proxyName] = v;
                    }
                })
            }
            resultFunc.prototype = methodTask.original.prototype;
            parent[methodName] = resultFunc;
        },
        /**
         * ??????????????????
         * @inner
         * @memberOf EHook
         * @param parent{Object} ???????????????????????????
         * @param methodName{String} ?????????????????????
         * @param config{Object} ?????????????????????
         */
        hook: function (parent, methodName, config) {
            var hookedFailure = -1;
            // ????????????????????????
            var context = config.context !== undefined ? config.context : parent;
            if (parent[methodName] == null) {
                parent[methodName] = function () {
                }
            }
            if (!utils.isFunction(parent[methodName])) {
                return hookedFailure;
            }
            var methodTask = this._getHookedMethodTask(parent, methodName);
            var id = this._getAutoId();
            if (utils.isFunction(config.replace)) {
                methodTask.replace = {
                    id: id,
                    method: config.replace
                };
                hookedFailure = 0;
            }
            if (utils.isFunction(config.before)) {
                methodTask.task.before.push({
                    id: id,
                    method: config.before
                });
                hookedFailure = 0;
            }
            if (utils.isFunction(config.current)) {
                methodTask.task.current = {
                    id: id,
                    method: config.current
                };
                hookedFailure = 0;
            }
            if (utils.isFunction(config.after)) {
                methodTask.task.after.push({
                    id: id,
                    method: config.after
                });
                hookedFailure = 0;
            }
            if (hookedFailure === 0) {
                this._hook(parent, methodName, context);
                return id;
            } else {
                return hookedFailure;
            }

        },
        /**
         * ????????????????????????
         * @see ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????hookAfter,hookCurrent,hookBefore???????????????????????????????????????????????????hookReplace????????????????????????
         * @inner
         * @memberOf EHook
         * @param parent{Object} ???????????????????????????
         * @param context{Object=} ????????????????????????
         * @param methodName{String} ?????????????????????
         * @param replace {function} ????????????????????????????????????????????????????????? ???????????????????????????[ method:???????????????????????????:function return:???????????????????????????????????????:function ]
         * @return {number} ???????????????id
         */
        hookReplace: function (parent, methodName, replace, context) {
            return this.hook(parent, methodName, {
                replace: replace,
                context: context
            });
        },
        /**
         * ????????????????????????
         * @inner
         * @memberOf EHook
         * @param parent{Object} ???????????????????????????
         * @param methodName{String} ?????????????????????
         * @param before{function} ?????????????????????????????????????????????????????? ???????????????[ method:?????????????????? args:?????????????????????????????????????????????????????????????????????????????????????????? ]
         * @param context{Object=} ????????????????????????
         * @returns {number} ??????id????????????????????????
         */
        hookBefore: function (parent, methodName, before, context) {
            return this.hook(parent, methodName, {
                before: before,
                context: context
            });
        },
        /**
         * ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????current??????
         * @see ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????[?????????hookBefore,hookAfter????????????hookBefore???hookAfter???????????????????????????????????????]
         * @inner
         * @memberOf EHook
         * @param parent{Object} ???????????????????????????
         * @param methodName{String} ?????????????????????
         * @param current{function} ????????????????????????????????????????????????????????? ???????????????????????????[ parent:????????????????????????????????????:object method:???????????????????????????:function args:???????????????????????????:array return:??????????????????????????????????????????:* ]
         * @param context{Object=} ????????????????????????
         * @returns {number} ??????id????????????????????????
         */
        hookCurrent: function (parent, methodName, current, context) {
            return this.hook(parent, methodName, {
                current: current,
                context: context
            });
        },
        /**
         * ????????????????????????
         * @inner
         * @memberOf EHook
         * @param parent{Object} ???????????????????????????
         * @param methodName{String} ?????????????????????
         * @param after{function} ?????????????????????????????????????????????????????? ???????????????????????????[ method:???????????????????????????:function args:???????????????????????????:array result:??????????????????????????????:* return:??????????????????????????????????????????:* ]
         * @param context{Object=} ????????????????????????
         * @returns {number} ??????id????????????????????????
         */
        hookAfter: function (parent, methodName, after, context) {
            return this.hook(parent, methodName, {
                after: after,
                context: context
            });
        },
        hookClass: function (parent, className, replace, innerName, excludeProperties) {
            var _this = this;
            var originFunc = parent[className];
            if (!excludeProperties) {
                excludeProperties = [];
            }
            excludeProperties.push('prototype');
            excludeProperties.push('caller');
            excludeProperties.push('arguments');
            innerName = innerName || '_innerHook';
            var resFunc = function () {
                this[innerName] = new originFunc();
                replace.apply(this, arguments);
            };
            this.hookedToString(originFunc, resFunc);
            this.hookedToProperties(originFunc, resFunc, true, excludeProperties);
            var prototypeProperties = Object.getOwnPropertyNames(originFunc.prototype);
            var prototype = resFunc.prototype = {
                constructor: resFunc
            };
            prototypeProperties.forEach(function (name) {
                if (name === 'constructor') {
                    return;
                }
                var method = function () {
                    if (originFunc.prototype[name] && utils.isFunction(originFunc.prototype[name])) {
                        return originFunc.prototype[name].apply(this[innerName], arguments);
                    }
                    return undefined;
                };
                _this.hookedToString(originFunc.prototype[name], method);
                prototype[name] = method;
            });
            this.hookReplace(parent, className, function () {
                return resFunc;
            }, parent)
        },
        hookedToProperties: function (originObject, resultObject, isDefined, excludeProperties) {
            var objectProperties = Object.getOwnPropertyNames(originObject);
            objectProperties.forEach(function (property) {
                if (utils.contains(excludeProperties, property)) {
                    return;
                }
                if (!isDefined) {
                    resultObject[property] = originObject[property];
                } else {
                    Object.defineProperty(resultObject, property, {
                        configurable: false,
                        enumerable: false,
                        value: originObject[property],
                        writable: false
                    });
                }
            });
        },
        hookedToString: function (originObject, resultObject) {
            Object.defineProperties(resultObject, {
                toString: {
                    configurable: false,
                    enumerable: false,
                    value: originObject.toString.bind(originObject),
                    writable: false
                },
                toLocaleString: {
                    configurable: false,
                    enumerable: false,
                    value: originObject.toLocaleString.bind(originObject),
                    writable: false
                }
            })
        },
        /**
         * ????????????ajax
         * @inner
         * @memberOf EHook
         * @param methods {object} ???????????????
         * @return {*|number} ?????????id
         */
        hookAjax: function (methods) {
            if (this.isHooked(_global, 'XMLHttpRequest')) {
                return;
            }
            var _this = this;
            var hookMethod = function (methodName) {
                if (utils.isFunction(methods[methodName])) {
                    // ?????????????????????hook?????????
                    _this.hookBefore(this.xhr, methodName, methods[methodName]);
                }
                // ???????????????????????????xhr
                return this.xhr[methodName].bind(this.xhr);
            };
            var getProperty = function (attr) {
                return function () {
                    return this.hasOwnProperty(attr + "_") ? this[attr + "_"] : this.xhr[attr];
                };
            };
            var setProperty = function (attr) {
                return function (f) {
                    var xhr = this.xhr;
                    var that = this;
                    if (attr.indexOf("on") !== 0) {
                        this[attr + "_"] = f;
                        return;
                    }
                    if (methods[attr]) {
                        xhr[attr] = function () {
                            f.apply(xhr, arguments);
                        };
                        // on?????????set?????????
                        _this.hookBefore(xhr, attr, methods[attr]);
                        // console.log(1,attr);
                        // xhr[attr] = function () {
                        //     methods[attr](that) || f.apply(xhr, arguments);
                        // }
                    } else {
                        xhr[attr] = f;
                    }
                };
            };
            return this.hookReplace(_global, 'XMLHttpRequest', function (XMLHttpRequest) {
                var resFunc = function () {
                    this.xhr = new XMLHttpRequest();
                    for (var propertyName in this.xhr) {
                        var property = this.xhr[propertyName];
                        if (utils.isFunction(property)) {
                            // hook ?????????
                            this[propertyName] = hookMethod.bind(this)(propertyName);
                        } else {
                            Object.defineProperty(this, propertyName, {
                                get: getProperty(propertyName),
                                set: setProperty(propertyName)
                            });
                        }
                    }
                    // ????????????xhr?????????????????????
                    this.xhr.xhr = this;
                };
                _this.hookedToProperties(XMLHttpRequest, resFunc, true);
                _this.hookedToString(XMLHttpRequest, resFunc);
                return resFunc
            });
        },
        /**
         * ????????????ajax
         * @param methods {object} ???????????????
         * @return {*|number} ?????????id
         */
        hookAjaxV2: function (methods) {
            this.hookClass(window, 'XMLHttpRequest', function () {

            });
            utils.ergodicObject(this, methods, function (method) {

            });
        },
        /**
         * ????????????
         * @inner
         * @memberOf EHook
         * @param context ?????????
         * @param methodName ?????????
         * @param isDeeply {boolean=} ??????????????????[?????????false]
         * @param eqId {number=}  ????????????id?????????[??????]
         */
        unHook: function (context, methodName, isDeeply, eqId) {
            if (!context[methodName] || !utils.isFunction(context[methodName])) {
                return;
            }
            var methodTask = this._getHookedMethodTask(context, methodName);
            if (eqId) {
                if (this.unHookById(eqId)) {
                    return;
                }
            }
            if (!methodTask.original) {
                delete this._getHookedMethodMap(context)[methodName];
                return;
            }
            context[methodName] = methodTask.original;
            if (isDeeply) {
                delete this._getHookedMethodMap(context)[methodName];
            }
        },
        /**
         * ??????Id????????????
         * @inner
         * @memberOf EHook
         * @param eqId
         * @returns {boolean}
         */
        unHookById: function (eqId) {
            var hasEq = false;
            if (eqId) {
                var hookedMap = this._getHookedMap();
                utils.ergodicObject(this, hookedMap, function (contextMap) {
                    utils.ergodicObject(this, contextMap, function (methodTask) {
                        methodTask.task.before = methodTask.task.before.filter(function (before) {
                            hasEq = hasEq || before.id === eqId;
                            return before.id !== eqId;
                        });
                        methodTask.task.after = methodTask.task.after.filter(function (after) {
                            hasEq = hasEq || after.id === eqId;
                            return after.id !== eqId;
                        });
                        if (methodTask.task.current && methodTask.task.current.id === eqId) {
                            methodTask.task.current = undefined;
                            hasEq = true;
                        }
                        if (methodTask.replace && methodTask.replace.id === eqId) {
                            methodTask.replace = undefined;
                            hasEq = true;
                        }
                    })
                });
            }
            return hasEq;
        },
        /**
         *  ?????????????????????????????????
         * @inner
         * @memberOf EHook
         * @param context ?????????
         * @param methodName ?????????
         */
        removeHookMethod: function (context, methodName) {
            if (!context[methodName] || !utils.isFunction(context[methodName])) {
                return;
            }
            this._getHookedMethodMap(context)[methodName] = {
                original: undefined,
                replace: undefined,
                task: {
                    before: [],
                    current: undefined,
                    after: []
                }
            };
        },
        /**
         * ????????????????????????????????????
         * @inner
         * @memberOf EHook
         * @param context
         * @param methodName
         */
        isHooked: function (context, methodName) {
            var hookMap = this._getHookedMethodMap(context);
            return hookMap[methodName] !== undefined ? (hookMap[methodName].original !== undefined) : false;
        },
        /**
         * ???????????????????????????????????????
         * @inner
         * @memberOf EHook
         * @param parent
         * @param methodName
         */
        protect: function (parent, methodName) {
            Object.defineProperty(parent, methodName, {
                configurable: false,
                writable: false
            });
        },
        preventError: function (parent, methodName, returnValue, context) {
            this.hookCurrent(parent, methodName, function (m, args) {
                var value = returnValue;
                try {
                    value = m.apply(this, args);
                } catch (e) {
                    console.log('Error Prevented from method ' + methodName, e);
                }
                return value;
            }, context)
        },
        /**
         * ????????????
         * @inner
         * @memberOf EHook
         * @param option
         */
        plugins: function (option) {
            if (utils.isFunction(option.mount)) {
                var result = option.mount.call(this, utils);
                if (typeof option.name === 'string') {
                    _global[option.name] = result;
                }
            }
        }
    };
    if (_global.eHook && (_global.eHook instanceof EHook)) {
        return;
    }
    var eHook = new EHook();
    /**
     * @namespace AHook
     * @author Cangshi
     * @constructor
     * @see {@link https://palerock.cn/projects/006HDUuOhBj}
     * @license Apache License 2.0
     */
    var AHook = function () {
        this.isHooked = false;
        var autoId = 1;
        this._urlDispatcherList = [];
        this._getAutoId = function () {
            return autoId++;
        };
    };
    AHook.prototype = {
        /**
         * ???????????????????????????????????????
         * @param xhr
         * @param methodName
         * @param args
         * @private
         */
        _invokeAimMethods: function (xhr, methodName, args) {
            var configs = utils.parseArrayByProperty(xhr.patcherList, 'config');
            var methods = [];
            utils.ergodicArrayObject(xhr, configs, function (config) {
                if (utils.isFunction(config[methodName])) {
                    methods.push(config[methodName]);
                }
            });
            return utils.invokeMethods(xhr, methods, args);
        },
        /**
         * ??????url??????????????????
         * @param url
         * @return {Array}
         * @private
         */
        _urlPatcher: function (url) {
            var patcherList = [];
            utils.ergodicArrayObject(this, this._urlDispatcherList, function (patcherMap, i) {
                if (utils.UrlUtils.urlMatching(url, patcherMap.patcher)) {
                    patcherList.push(patcherMap);
                }
            });
            return patcherList;
        },
        /**
         * ??????xhr????????????????????????
         * @param xhr
         * @param fullUrl
         * @private
         */
        _xhrDispatcher: function (xhr, fullUrl) {
            var url = utils.UrlUtils.getUrlWithoutParam(fullUrl);
            xhr.patcherList = this._urlPatcher(url);
        },
        /**
         * ??????????????????
         * @param e
         * @param xhr
         * @private
         */
        _parseEvent: function (e, xhr) {
            try {
                Object.defineProperties(e, {
                    target: {
                        get: function () {
                            return xhr;
                        }
                    },
                    srcElement: {
                        get: function () {
                            return xhr;
                        }
                    }
                });
            } catch (error) {
                console.warn('??????????????????????????????????????????????????????');
            }
            return e;
        },
        /**
         * ??????open???????????????
         * @param args
         * @private
         */
        _parseOpenArgs: function (args) {
            return {
                method: args[0],
                fullUrl: args[1],
                url: utils.UrlUtils.getUrlWithoutParam(args[1]),
                params: utils.UrlUtils.getParamFromUrl(args[1]),
                async: args[2]
            };
        },
        /**
         * ??????ajax ????????????
         * @param argsObject
         * @param argsArray
         * @private
         */
        _rebuildOpenArgs: function (argsObject, argsArray) {
            argsArray[0] = argsObject.method;
            argsArray[1] = utils.UrlUtils.margeUrlAndParams(argsObject.url, argsObject.params);
            argsArray[2] = argsObject.async;
        },
        /**
         * ??????????????????????????? [?????????,???????????????,??????????????????]????????????????????????
         * @param args
         * @return {*|Array.<T>}
         * @private
         */
        _getHookedArgs: function (args) {
            // ????????????'?????????'??????
            return Array.prototype.slice.call(args, 0).splice(1);
        },
        /**
         * ?????????????????????????????????
         * @param outerXhr
         * @param funcArgs
         * @private
         */
        _onResponse: function (outerXhr, funcArgs) {
            // ????????????????????????????????????[method(?????????),args(??????)],?????????????????????????????????????????????
            var args = this._getHookedArgs(funcArgs);
            args[0][0] = this._parseEvent(args[0][0], outerXhr.xhr); // ????????????????????????xhr
            // ?????????????????????hookResponse????????????
            var results = this._invokeAimMethods(outerXhr, 'hookResponse', args);
            // ?????????????????????????????????????????????????????????????????????
            var resultIndex = -1;
            utils.ergodicArrayObject(outerXhr, results, function (res, i) {
                if (res != null) {
                    resultIndex = i;
                }
            });
            if (resultIndex !== -1) {
                outerXhr.xhr.responseText_ = outerXhr.xhr.response_ = results[resultIndex];
            }
        },
        /**
         * ??????????????????
         * @inner
         * @memberOf AHook
         */
        startHook: function () {
            var _this = this;
            var normalMethods = {
                // ????????????this????????????xhr
                // ????????????
                onreadystatechange: function () {
                    if (this.readyState == 4 && this.status == 200 || this.status == 304) {
                        _this._onResponse(this, arguments);
                    }
                },
                onload: function () {
                    _this._onResponse(this, arguments);
                },
                // ????????????
                open: function () {
                    var args = _this._getHookedArgs(arguments);
                    var fullUrl = args[0][1];
                    _this._xhrDispatcher(this, fullUrl);
                    var argsObject = _this._parseOpenArgs(args[0]);
                    this.openArgs = argsObject;
                    _this._invokeAimMethods(this, 'hookRequest', [argsObject]);
                    _this._rebuildOpenArgs(argsObject, args[0]);
                },
                send: function () {
                    var args = _this._getHookedArgs(arguments);
                    this.sendArgs = args;
                    _this._invokeAimMethods(this, 'hookSend', args);
                }
            };
            // ????????????hookId
            this.___hookedId = _global.eHook.hookAjax(normalMethods);
            this.isHooked = true;
        },
        /**
         * ??????ajaxUrl??????
         * @inner
         * @memberOf AHook
         * @param urlPatcher
         * @param configOrRequest
         * @param response
         * @return {number}
         */
        register: function (urlPatcher, configOrRequest, response) {
            if (!urlPatcher) {
                return -1;
            }
            if (!utils.isExistObject(configOrRequest) && !utils.isFunction(response)) {
                return -1;
            }
            var config = {};
            if (utils.isFunction(configOrRequest)) {
                config.hookRequest = configOrRequest;
            }
            if (utils.isFunction(response)) {
                config.hookResponse = response;
            }
            if (utils.isExistObject(configOrRequest)) {
                config = configOrRequest;
            }
            var id = this._getAutoId();
            this._urlDispatcherList.push({
                // ??????id??????????????????
                id: id,
                patcher: urlPatcher,
                config: config
            });
            // ???????????????register??????????????????????????????
            if (!this.isHooked) {
                this.startHook();
            }
            return id;
        }
        // todo ??????  cancellation: function (registerId){};
    };

    _global['eHook'] = eHook;
    _global['aHook'] = new AHook();

    return [{
        name: 'eHook',
        module: eHook
    }, {
        name: 'aHook',
        module: _global['aHook']
    }]

}));

/***/ }),
/* 1 */
/***/ (function(module) {

(function (global, factory) {

    "use strict";

    if ( true && typeof module.exports === "object") {
        module.exports = factory(global, true);
    } else {
        factory(global);
    }

}(typeof window !== "undefined" ? window : this, function (_global, noGlobal) {

    var map = Array.prototype.map;
    var forEach = Array.prototype.forEach;
    var reduce = Array.prototype.reduce;

    var BaseUtils = {
        /**
         * ?????????????????????
         * @param arr
         */
        isArray: function (arr) {
            return Array.isArray(arr) || Object.prototype.toString.call(arr) === "[object Array]";
        },
        /**
         * ?????????????????????
         * @param func
         * @return {boolean}
         */
        isFunction: function (func) {
            if (!func) {
                return false;
            }
            return typeof func === 'function';
        },
        /**
         * ????????????????????????????????????
         * @param obj
         * @return {*|boolean}
         */
        isExistObject: function (obj) {
            return obj && (typeof obj === 'object');
        },
        isString: function (str) {
            if (str === null) {
                return false;
            }
            return typeof str === 'string';
        },
        uniqueNum: 1000,
        /**
         * ???????????????????????????????????????id
         * @returns {string}
         */
        buildUniqueId: function () {
            var prefix = new Date().getTime().toString();
            var suffix = this.uniqueNum.toString();
            this.uniqueNum++;
            return prefix + suffix;
        }
    };

    //
    var serviceProvider = {
        _parseDepends: function (depends) {
            var dependsArr = [];
            if (!BaseUtils.isArray(depends)) {
                return;
            }
            forEach.call(depends, function (depend) {
                if (BaseUtils.isString(depend)) {
                    dependsArr.push(serviceProvider[depend.toLowerCase()]);
                }
            });
            return dependsArr;
        }
    };

    var factory = function (name, depends, construction) {
        if (!BaseUtils.isFunction(construction)) {
            return;
        }
        serviceProvider[name.toLowerCase()] = construction.apply(this, serviceProvider._parseDepends(depends));
    };

    var depend = function (depends, construction) {
        if (!BaseUtils.isFunction(construction)) {
            return;
        }
        construction.apply(this, serviceProvider._parseDepends(depends));
    };

    factory('BaseUtils', [], function () {
        return BaseUtils;
    });

    // logger
    factory('logger', [], function () {
        return console;
    });

    // DateTimeUtils
    factory('DateTimeUtils', ['logger'], function (logger) {
        return {
            /**
             * ??????????????????
             */
            printNowTime: function () {
                var date = new Date();
                console.log(this.pattern(date, 'hh:mm:ss:S'));
            },
            /**
             * ???????????????
             * @param date
             * @param fmt
             * @returns {*}
             */
            pattern: function (date, fmt) {
                var o = {
                    "M+": date.getMonth() + 1, //??????
                    "d+": date.getDate(), //???
                    "h+": date.getHours() % 12 === 0 ? 12 : date.getHours() % 12, //??????
                    "H+": date.getHours(), //??????
                    "m+": date.getMinutes(), //???
                    "s+": date.getSeconds(), //???
                    "q+": Math.floor((date.getMonth() + 3) / 3), //??????
                    "S": date.getMilliseconds() //??????
                };
                var week = {
                    "0": "/u65e5",
                    "1": "/u4e00",
                    "2": "/u4e8c",
                    "3": "/u4e09",
                    "4": "/u56db",
                    "5": "/u4e94",
                    "6": "/u516d"
                };
                if (/(y+)/.test(fmt)) {
                    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
                }
                if (/(E+)/.test(fmt)) {
                    fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468") : "") + week[date.getDay() + ""]);
                }
                for (var k in o) {
                    if (new RegExp("(" + k + ")").test(fmt)) {
                        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                    }
                }
                return fmt;
            },
            /**
             * ?????????????????????id
             * @returns {number}
             */
            getCurrentId: function () {
                var date = new Date();
                return date.getTime();
            },
            /**
             * ??????????????????????????????????????????
             * @param date {number|Date}
             * @param isCeil{boolean=} ????????????????????????????????????[false]
             * @param type {string=} ???????????????['day','month','year']??????'day'
             * @returns {number}
             */
            getNowBetweenADay: function (date, isCeil, type) {
                if (!type) {
                    type = 'day'
                }
                if (typeof date === 'number') {
                    date = new Date(date);
                }
                if (!(date instanceof Date)) {
                    throw new TypeError('????????????????????????Date')
                }
                var time = date.getTime();
                var now = new Date();
                var nowTime = now.getTime();
                if (nowTime - time < 0) {
                    logger.warn('????????????????????????????????????????????????');
                }
                var result = 0;
                switch (type) {
                    default:
                    case 'day':
                        result = (nowTime - time) / (1000 * 60 * 60 * 24);
                        break;
                    case 'month':
                        var yearDifference = now.getFullYear() - date.getFullYear();
                        if (yearDifference > 0) {
                            result += yearDifference * 12;
                        }
                        result += now.getMonth() - date.getMonth();
                        break;
                    case 'year':
                        result += now.getFullYear() - date.getFullYear();
                        break;
                }
                if (!isCeil) {
                    return Math.floor(result);
                } else {
                    if (result === 0 && isCeil) {
                        result = 1;
                    }
                    return Math.ceil(result);
                }
            }
        }
    });

    // ArrayUtils
    factory('ArrayUtils', ['BaseUtils'], function (BaseUtils) {
        return {
            isArrayObject: function (arr) {
                return BaseUtils.isArray(arr);
            },
            /**
             * ????????????
             * @param context {Object}
             * @param arr {Array}
             * @param cb {Function} ????????????
             */
            ergodicArrayObject: function (context, arr, cb) {
                if (!context) {
                    context = _global;
                }
                if (!BaseUtils.isArray(arr) || !BaseUtils.isFunction(cb)) {
                    return;
                }
                for (var i = 0; i < arr.length; i++) {
                    var result = cb.call(context, arr[i], i);
                    if (result && result === -1) {
                        break;
                    }
                }
            },
            /**
             * ?????????????????????????????????????????????
             * @param context {Object}
             * @param arr {Array}
             * @param propertyName {String}
             * @param cb {Function}
             * @param checkProperty {boolean} ???????????????????????????????????????[default:true]
             */
            getPropertyDo: function (context, arr, propertyName, cb, checkProperty) {
                if (checkProperty === null) {
                    checkProperty = true;
                }
                this.ergodicArrayObject(context, arr, function (ele) {
                    if (!checkProperty || ele.hasOwnProperty(propertyName)) {
                        cb.call(context, ele[propertyName], ele);
                    }
                })
            },
            /**
             * [????????????]?????????????????????????????????map
             * @param arr {Array}
             * @returns {{}}
             */
            parseKeyValue: function (arr) {
                var map = {};
                if (!(BaseUtils.isArray(arr))) {
                    return map;
                }
                this.ergodicArrayObject(this, arr, function (ele) {
                    if (ele.key === null) {
                        return;
                    }
                    if (!map.hasOwnProperty(ele.key)) {
                        map[ele.key] = ele.value;
                    }
                });
                return map;
            },
            /**
             * ????????????????????????
             * @param arr {Array}
             * @returns {number}
             */
            getHashCode: function (arr) {
                var str = arr.toString();
                var hash = 31;
                if (str.length === 0) return hash;
                for (var i = 0; i < str.length; i++) {
                    var char = str.charCodeAt(i);
                    hash = ((hash << 5) - hash) + char;
                    hash = hash & hash; // Convert to 32bit integer
                }
                return hash;
            },
            /**
             * ???????????????????????????????????????????????????????????????
             * @param arr {Array}
             * @param propertyName {String}
             */
            parseArrayByProperty: function (arr, propertyName) {
                var result = [];
                if (!this.isArrayObject(arr)) {
                    return result;
                }
                this.getPropertyDo(this, arr, propertyName, function (value) {
                    result.push(value);
                }, true);
                return result;
            },
            /**
             * ????????????????????????????????????
             * @param arr {Array}
             * @param obj
             * @param cb {function=}
             * @returns {boolean}
             */
            isContainsObject: function (arr, obj, cb) {
                var isContainsObject = false;
                this.ergodicArrayObject(this, arr, function (value, i) {
                    if (obj === value) {
                        isContainsObject = true;
                        if (BaseUtils.isFunction(cb)) {
                            cb.call(_global, i);
                        }
                        return -1;
                    }
                });
                return isContainsObject;
            },
            /**
             * ???????????????????????????
             * @param arr ???????????????????????????????????????????????????????????????????????????????????????
             * @param cb
             * @returns {*}
             */
            getMaxInArray: function (arr, cb) {
                var maxObject = null;
                var maxIndex = -1;
                while (maxObject === null && maxIndex < arr.length) {
                    maxObject = arr[++maxIndex]
                }
                for (var i = maxIndex + 1; i < arr.length; i++) {
                    // ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                    if (maxObject !== null && this.isArrayObject(maxObject) && this.isArrayObject(arr[i])) {
                        var classLength = maxObject.length;
                        var classLevel = 0;
                        // console.log(maxObject[classLevel],arr[i][classLevel]);
                        while (maxObject[classLevel] === arr[i][classLevel] && classLevel < classLength) {
                            classLevel++
                        }
                        if (maxObject[classLevel] !== null && maxObject[classLevel] < arr[i][classLevel]) {
                            maxObject = arr[i];
                            maxIndex = i;
                        }
                        continue;
                    }
                    if (maxObject !== null && maxObject < arr[i]) {
                        maxObject = arr[i];
                        maxIndex = i;
                    }
                }
                if (BaseUtils.isFunction(cb)) {
                    cb.call(this, maxObject, maxIndex);
                }
                return maxObject;
            },
            /**
             * ????????????????????????
             * @param arr{Array<number>}
             * @param cb {function=}
             */
            getSumInArray: function (arr, cb) {
                if (!this.isArrayObject(arr)) {
                    return;
                }
                var sum = 0;
                var count = 0;
                this.ergodicArrayObject(this, arr, function (value) {
                    if (typeof value === 'number' && !Number.isNaN(value)) {
                        sum += value;
                        count += 1;
                    }
                });
                if (BaseUtils.isFunction(cb)) {
                    cb.call(_global, sum, count);
                }
                return sum;
            },
            /**
             * ???????????????????????????
             * @param arr{Array<number>}
             */
            getAverageInArray: function (arr) {
                var average = 0;
                this.getSumInArray(arr, function (sum, i) {
                    i === 0 || (average = sum / i);
                });
                return average;
            },
            /**
             * ???????????????
             * @param arr
             * @param order
             * @param sortSetting {object=}
             */
            sortingArrays: function (arr, order, sortSetting) {
                if (!this.isArrayObject(arr)) {
                    return;
                }
                var DESC = 0;
                var ASC = 1;
                var thisArr = arr.slice(0);
                var _thisAction = null;
                // ????????????
                var isSetting = sortSetting && sortSetting.getComparedProperty &&
                    BaseUtils.isFunction(sortSetting.getComparedProperty);
                if (isSetting) {
                    thisArr = sortSetting.getComparedProperty(arr);
                }
                switch (order) {
                    default :
                    case DESC:
                        _thisAction = thisArr.push;
                        break;
                    case ASC:
                        _thisAction = thisArr.unshift;
                        break;
                }
                var resultArr = [];
                for (var j = 0; j < thisArr.length; j++) {
                    this.getMaxInArray(thisArr, function (max, i) {
                        delete thisArr[i];
                        _thisAction.call(resultArr, arr[i]);
                    });
                }
                if (sortSetting && sortSetting.createNewData) {
                    return resultArr.slice(0);
                }
                return resultArr;
            },
            /**
             * ???????????????????????????
             * @param arrLike ???????????????
             */
            toArray: function (arrLike) {
                if (!arrLike || arrLike.length === 0) {
                    return [];
                }
                // ????????????????????????????????????
                if (!arrLike.length) {
                    return arrLike;
                }
                // ??????IE8?????? DOM???COM??????
                try {
                    return [].slice.call(arrLike);
                } catch (e) {
                    var i = 0,
                        j = arrLike.length,
                        res = [];
                    for (; i < j; i++) {
                        res.push(arrLike[i]);
                    }
                    return res;
                }
            },
            /**
             * ????????????????????????
             * @param o
             * @returns {boolean}
             */
            isArrayLick: function (o) {
                if (o &&                                // o is not null, undefined, etc.
                    typeof o === 'object' &&            // o is an object
                    isFinite(o.length) &&               // o.length is a finite number
                    o.length >= 0 &&                    // o.length is non-negative
                    o.length === Math.floor(o.length) &&  // o.length is an integer
                    o.length < 4294967296)              // o.length < 2^32
                    return true;                        // Then o is array-like
                else
                    return false;                       // Otherwise it is not

            },
            /**
             * ??????????????????????????????
             * @param arr
             * @param obj
             */
            contains: function (arr, obj) {
                var contains = false;
                this.ergodicArrayObject(this, arr, function (a) {
                    if (a === obj) {
                        contains = true;
                        return -1;
                    }
                });
                return contains;
            }
        }
    });

    // ObjectUtils
    factory('ObjectUtils', ['ArrayUtils', 'BaseUtils'], function (ArrayUtils, BaseUtils) {
        return {
            /**
             * ??????????????????[?????????????????????,??????????????????????????????????????????(student.class.school):'class.school']
             * @param obj
             * @param linkProperty {string|Array} ????????????????????????????????????????????????
             * @param cb {function=}
             * @return ????????????
             */
            readLinkProperty: function (obj, linkProperty, cb) {
                var callback = null;
                if (BaseUtils.isFunction(cb)) {
                    callback = cb;
                }
                if (typeof linkProperty === 'string') {
                    // ?????????????????????
                    linkProperty = linkProperty.replace(/ /g, '');
                    // ?????????????????????
                    if (linkProperty === '') {
                        return null;
                    }
                    // ?????????','??????????????????????????????????????????????????????
                    if (linkProperty.indexOf(',') !== -1) {
                        var propertyNameArr = linkProperty.split(',');
                        return this.readLinkProperty(obj, propertyNameArr, callback);
                    }
                    if (linkProperty.indexOf('.') !== -1) {
                        var names = linkProperty.split('.');
                        var iterationObj = obj;
                        var result = null;
                        ArrayUtils.ergodicArrayObject(this, names, function (name, i) {
                            iterationObj = this.readLinkProperty(iterationObj, name);
                            if (names[names.length - 1] === name && names.length - 1 === i) {
                                result = iterationObj;
                                if (callback) {
                                    callback.call(_global, result, linkProperty);
                                }
                            }
                            // ????????????????????????????????????
                            if (typeof iterationObj === 'undefined') {
                                return -1;
                            }
                        });
                        return result;
                    }
                    var normalResult = null;
                    if (linkProperty.slice(linkProperty.length - 2) === '()') {
                        var func = linkProperty.slice(0, linkProperty.length - 2);
                        normalResult = obj[func]();
                    } else {
                        normalResult = obj[linkProperty];
                    }
                    if (normalResult === null) {
                        console.warn(obj, '?????????[\'' + linkProperty + '\']????????????');
                    }
                    if (callback) {
                        callback.call(_global, normalResult, linkProperty);
                    }
                    return normalResult;
                }
                if (BaseUtils.isArray(linkProperty)) {
                    var results = [];
                    ArrayUtils.ergodicArrayObject(this, linkProperty, function (name) {
                        var value = this.readLinkProperty(obj, name);
                        results.push(value);
                        if (callback && name !== '') {
                            return callback.call(_global, value, name);
                        }
                    });
                    results.isMultipleResults = true;
                    return results;
                }
            },
            /**
             * ?????????????????????
             * ?????????????????????????????????????????????????????????????????????????????????
             * @param obj
             * @param linkProperty {string|Array} ??????????????????????????????????????????
             * @param value
             */
            createLinkProperty: function (obj, linkProperty, value) {
                if (obj === null) {
                    obj = {};
                }
                if (typeof linkProperty === 'string') {
                    // ?????????????????????
                    linkProperty = linkProperty.replace(/ /g, '');
                    // ?????????????????????
                    if (linkProperty === '') {
                        throw new TypeError('???????????????????????????')
                    }
                    if (linkProperty.indexOf(',') !== -1) {
                        var propertyNameArr = linkProperty.split(',');
                        this.createLinkProperty(obj, propertyNameArr, value);
                        return obj;
                    }
                    if (linkProperty.indexOf('.') !== -1) {
                        var names = linkProperty.split('.');
                        if (!obj.hasOwnProperty(names[0])) {
                            obj[names[0]] = {}
                        }
                        // ?????????????????????????????????????????????????????????????????????
                        if (!Number.isNaN(parseInt(names[0]))) {
                            if (!ArrayUtils.isArrayObject(obj)) {
                                obj = [];
                            }
                        }
                        var propertyObj = obj[names[0]];
                        var newProperties = names.slice(1, names.length);
                        var newLinkProperty = '';
                        ArrayUtils.ergodicArrayObject(this, newProperties, function (property, i) {
                            if (i < newProperties.length - 1) {
                                newLinkProperty = newLinkProperty + property + '.'
                            } else {
                                newLinkProperty = newLinkProperty + property;
                            }
                        });
                        obj[names[0]] = this.createLinkProperty(propertyObj, newLinkProperty, value);
                        return obj;
                    }
                    // ?????????????????????????????????????????????????????????????????????
                    if (!Number.isNaN(parseInt(linkProperty))) {
                        if (!ArrayUtils.isArrayObject(obj)) {
                            obj = [];
                        }
                    }
                    obj[linkProperty] = value;
                    return obj;
                } else if (BaseUtils.isArray(linkProperty)) {
                    ArrayUtils.ergodicArrayObject(this, linkProperty, function (link) {
                        obj = this.createLinkProperty(obj, link, value);
                    });
                    return obj;
                }
            },
            /**
             * ??????????????????
             * @param context {object} ?????????
             * @param obj {object} ????????????
             * @param cb {function} ????????????
             * @param isReadInnerObject {boolean=} ?????????????????????????????????
             */
            ergodicObject: function (context, obj, cb, isReadInnerObject) {
                var keys = Object.keys(obj);
                ArrayUtils.ergodicArrayObject(this, keys, function (propertyName) {
                    // ???????????????????????????
                    var _propertyName = propertyName;
                    if (isReadInnerObject && obj[propertyName] !== null && typeof obj[propertyName] === 'object') {
                        this.ergodicObject(this, obj[propertyName], function (value, key) {
                            return cb.call(context, value, _propertyName + '.' + key);
                        }, true)
                    } else {
                        return cb.call(context, obj[propertyName], propertyName);
                    }
                })
            },
            /**
             * ?????????????????????????????????????????????????????????
             * @param context {object} ?????????
             * @param obj {object} ????????????
             * @param propertyNames{Array|string} ????????????????????????
             *                                     ???????????????????????????:'a.b.c.e'???
             *                                     ????????????????????????????????????????????????????????????','??????
             * @param cb {function} ????????????[???????????????????????????????????????,????????????'-1'?????????????????????????????????]
             */
            whileEmptyObjectProperty: function (context, obj, propertyNames, cb) {
                // ?????????????????????
                if (typeof propertyNames === 'string') {
                    // ?????????????????????
                    propertyNames = propertyNames.replace(/ /g, '');
                    // ?????????????????????
                    if (propertyNames === '') {
                        return;
                    }
                    // ?????????','??????????????????????????????????????????????????????
                    if (propertyNames.indexOf(',') !== -1) {
                        var propertyNameArr = propertyNames.split(',');
                        return this.whileEmptyObjectProperty(context, obj, propertyNameArr, cb);
                    }
                    // ?????????????????????
                    if (propertyNames.indexOf('.') !== -1) {
                        var names = propertyNames.split('.');
                        var iterationObj = obj;
                        var result = null;
                        ArrayUtils.ergodicArrayObject(this, names, function (name) {
                            if (iterationObj && iterationObj.hasOwnProperty(name)) {
                                iterationObj = iterationObj[name];
                            } else {
                                result = cb.call(_global, propertyNames);
                                // ????????????????????????????????????
                                return -1;
                            }
                        });
                        return result;
                    }
                    // ????????????
                    if (!obj.hasOwnProperty(propertyNames)) {
                        return cb.call(context, propertyNames);
                    }
                    if (obj[propertyNames] === null || obj[propertyNames] === '') {
                        return cb.call(context, propertyNames);
                    }
                } else if (BaseUtils.isArray(propertyNames)) {
                    // ????????????
                    var _this = this;
                    ArrayUtils.ergodicArrayObject(this, propertyNames, function (propertyName) {
                        // ????????????
                        return _this.whileEmptyObjectProperty(context, obj, propertyName, cb);
                    })
                }
            },
            whileEmptyObjectPropertyV2: function (context, obj, propertyNames, cb) {
                this.readLinkProperty(obj, propertyNames, function (value, propertyName) {
                    if (value === null || value === '' || parseInt(value) < 0) {
                        return cb.call(context, propertyName);
                    }
                })
            },
            /**
             * ????????????[????????????????????????????????????]
             * @param obj {*}
             */
            cloneObject: function (obj) {
                var newObj = {};
                // ?????????????????????????????????????????????????????????
                if (typeof obj === 'string' ||
                    typeof obj === 'number' ||
                    typeof obj === 'undefined' ||
                    typeof obj === 'function' ||
                    typeof obj === 'boolean') {
                    return obj;
                }
                // ?????????????????????
                if (BaseUtils.isArray(obj)) {
                    newObj = [];
                    // ??????????????????????????????????????????????????????????????????????????????push????????????
                    ArrayUtils.ergodicArrayObject(this, obj, function (arrObjValue) {
                        newObj.push(this.cloneObject(arrObjValue));
                    })
                } else if (typeof obj === 'object') {
                    // ?????????????????????????????? typeof ??? object
                    if (obj === null) {
                        // ????????????????????????????????????
                        return null;
                    }
                    // ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                    this.ergodicObject(this, obj, function (value, key) {
                        newObj[key] = this.cloneObject(value);
                    });
                }
                return newObj;
            },
            /**
             * ????????????????????????
             * @param obj {Object}
             * @returns {number}
             */
            getObjHashCode: function (obj) {
                var str = JSON.stringify(obj);
                var hash = 0, i, chr, len;
                console.log(str)
                console.log(hash)
                if (str.length === 0) return hash;
                for (i = 0, len = str.length; i < len; i++) {
                    chr = str.charCodeAt(i);
                    hash = ((hash << 5) - hash) + chr;
                    hash |= 0; // Convert to 32bit integer
                }
                console.log(str)
                console.log(hash)
                return hash;
            },
            /**
             * ??????????????????
             * @param obj ?????????
             * @param extendedObj ??????????????????
             * @param isCover {boolean=} ??????????????????????????????????????????????????? ??????[false]
             * @param isClone {boolean=} ???????????????????????????????????????[false]???????????????????????????
             */
            expandObject: function (obj, extendedObj, isCover, isClone) {
                var resultObj = obj;
                if (isClone) {
                    resultObj = this.cloneObject(obj);
                }
                this.ergodicObject(this, extendedObj, function (value, key) {
                    if (isCover && this.readLinkProperty(resultObj, key) !== null) {
                        return;
                    }
                    resultObj = this.createLinkProperty(resultObj, key, value);
                }, true);
                return resultObj;
            },
            /**
             * ????????????????????????????????????????????????????????????????????????????????????????????????
             * @param arr ??????
             * @param propertyName ?????????????????????????????????????????????????????????
             * @param order ?????????
             * @returns {*}
             */
            sortingArrayByProperty: function (arr, propertyName, order) {
                var _this = this;
                var sortSetting = {
                    // ?????????????????????
                    createNewData: false,
                    // ??????????????????????????????????????????????????????????????????
                    getComparedProperty: function (arr) {
                        var compareArr = [];
                        ArrayUtils.ergodicArrayObject(_this, arr, function (obj, i) {
                            if (typeof obj !== 'object') {
                                compareArr.push(obj);
                            } else {
                                var compareValue = this.readLinkProperty(obj, propertyName);
                                if (compareValue !== null) {
                                    compareArr.push(compareValue);
                                } else {
                                    compareArr.push(obj);
                                }
                            }
                        });
                        return compareArr.slice(0);
                    }
                };
                return ArrayUtils.sortingArrays(arr, order, sortSetting);
            },
            /**
             * ????????????????????????
             * @param constructor {function} ????????????
             * @param obj {object|Array}???????????????
             * @param defaultProperty {object=}
             */
            toAimObject: function (obj, constructor, defaultProperty) {
                if (BaseUtils.isArray(obj)) {
                    var originArr = [];
                    ArrayUtils.ergodicArrayObject(this, obj, function (value) {
                        originArr.push(this.toAimObject(value, constructor, defaultProperty));
                    });
                    return originArr;
                } else if (typeof obj === 'object') {
                    if (defaultProperty) {
                        this.ergodicObject(this, defaultProperty, function (value, key) {
                            if (obj[key] === null) {
                                obj[key] = value;
                            }
                        });
                    }
                    if (obj instanceof constructor) {
                        return obj;
                    }
                    var originObj = obj;
                    while (originObj.__proto__ !== null && originObj.__proto__ !== Object.prototype) {
                        originObj = originObj.__proto__;
                    }
                    originObj.__proto__ = constructor.prototype;
                    return originObj;
                }
            },
            /**
             * ???????????????????????????????????????????????????????????????
             * @param arr {Array}
             * @param propertyNames
             */
            parseTheSameObjectPropertyInArray: function (arr, propertyNames) {
                var result = {};
                var temp = {};
                ArrayUtils.ergodicArrayObject(this, arr, function (obj) {
                    // ??????????????????????????????????????????????????????????????????temp???
                    this.readLinkProperty(obj, propertyNames, function (value, property) {
                        if (!temp.hasOwnProperty(property) || !(BaseUtils.isArray(temp[property]))) {
                            temp[property] = [];
                        }
                        temp[property].push(value);
                    });
                });
                // ??????temp?????????????????????????????????????????????
                this.ergodicObject(this, temp, function (value, key) {
                    result = this.createLinkProperty(result, key, value);
                });
                return this.cloneObject(result);
            },
            /**
             * ???????????????????????????????????????????????????????????????
             * @param arr {Array}
             */
            parseTheSameObjectAllPropertyInArray: function (arr) {
                if (!ArrayUtils.isArrayObject(arr) || arr.length < 1) {
                    return;
                }
                // ???????????????????????????????????????????????????????????????
                var propertyNames = [];
                this.ergodicObject(this, arr[0], function (v, k) {
                    propertyNames.push(k);
                }, true);
                return this.parseTheSameObjectPropertyInArray(arr, propertyNames);
            },
            /**
             * ???????????????????????????????????????????????????????????????????????????
             * @param obj
             * @param propertyNames{Array<string>|string}
             * @param type
             */
            getCalculationInArrayByLinkPropertyNames: function (obj, propertyNames, type) {
                var resultObject = {};
                var _this = this;
                switch (type) {
                    default:
                    case 'sum':
                        this.readLinkProperty(obj, propertyNames, function (value, key) {
                            if (ArrayUtils.isArrayObject(value)) {
                                resultObject = _this.createLinkProperty(resultObject, key, ArrayUtils.getSumInArray(value));
                            }
                        });
                        break;
                    case 'average':
                        this.readLinkProperty(obj, propertyNames, function (value, key) {
                            if (ArrayUtils.isArrayObject(value)) {
                                resultObject = _this.createLinkProperty(resultObject, key, ArrayUtils.getAverageInArray(value));
                            }
                        });
                        break;
                }
                return resultObject;
            }
        }
    });

    // ColorUtils
    factory('ColorUtils', [], function () {
        return {
            /**
             * ????????????rgb???16??????
             * @param r
             * @param g
             * @param b
             * @return {string}
             */
            rgbToHex: function (r, g, b) {
                var hex = ((r << 16) | (g << 8) | b).toString(16);
                return "#" + new Array(Math.abs(hex.length - 7)).join("0") + hex;
            },
            /**
             * ????????????16?????????rgb
             * @param hex
             * @return {Array}
             */
            hexToRgb: function (hex) {
                hex = hex.replace(/ /g, '');
                var length = hex.length;
                var rgb = [];
                switch (length) {
                    case 4:
                        rgb.push(parseInt(hex[1] + hex[1], 16));
                        rgb.push(parseInt(hex[2] + hex[2], 16));
                        rgb.push(parseInt(hex[3] + hex[3], 16));
                        return rgb;
                    case 7:
                        for (var i = 1; i < 7; i += 2) {
                            rgb.push(parseInt("0x" + hex.slice(i, i + 2)));
                        }
                        return rgb;
                    default:
                        break
                }
            },
            /**
             * ?????????????????????????????????????????????????????????
             * @param start
             * @param end
             * @param percentage
             * @return {*}
             */
            gradientColorsPercentage: function (start, end, percentage) {
                var resultRgb = [];
                var startRgb = this.hexToRgb(start);
                if (end == null) {
                    return start;
                }
                var endRgb = this.hexToRgb(end);
                var totalR = endRgb[0] - startRgb[0];
                var totalG = endRgb[1] - startRgb[1];
                var totalB = endRgb[2] - startRgb[2];
                resultRgb.push(startRgb[0] + totalR * percentage);
                resultRgb.push(startRgb[1] + totalG * percentage);
                resultRgb.push(startRgb[2] + totalB * percentage);
                return this.rgbToHex(resultRgb[0], resultRgb[1], resultRgb[2])
            }
        }
    });

    factory('FunctionUtils', [], function () {
        return {
            /**
             * ?????????????????????
             * @param func
             * @returns {*}
             */
            getFunctionName: function (func) {
                if (typeof func === 'function' || typeof func === 'object') {
                    var name = ('' + func).match(/function\s*([\w\$]*)\s*\(/);
                }
                return func.name || name[1];
            },
            /**
             * ????????????????????????
             * @param func
             * @returns {*}
             */
            getFunctionParams: function (func) {
                if (typeof func === 'function' || typeof func === 'object') {
                    var name = ('' + func).match(/function.*\(([^)]*)\)/);
                    return name[1].replace(/( )|(\n)/g, '').split(',');
                }
            },
            /**
             * ???????????????arguments??????????????????????????????
             * @param func_arguments
             * @returns {string}
             */
            getCallerName: function (func_arguments) {
                var caller = func_arguments.callee.caller;
                var callerName = '';
                if (caller) {
                    callerName = this.getFunctionName(caller);
                }
                return callerName;
            },
            FunctionBuilder: function (func) {
                var _this = this;
                var fs = [];
                fs.push(func);
                var properties = ['push', 'unshift', 'slice', 'map', 'forEach', 'keys', 'find', 'concat', 'fill', 'shift', 'values'];
                map.call(properties, function (property) {
                    if (typeof Array.prototype[property] === 'function') {
                        Object.defineProperty(_this, property, {
                            get: function () {
                                return function () {
                                    fs[property].apply(fs, arguments);
                                    return this;
                                }
                            }
                        });
                    }
                });
                this.result = function (context) {
                    var rfs = [];
                    map.call(fs, function (f, index) {
                        if (typeof f === 'function') {
                            rfs.push(f);
                        }
                    });
                    return function () {
                        var declareVar = {
                            arguments: arguments,
                            this: this
                        };
                        map.call(rfs, function (f) {
                            var dv = f.apply(context || this, [declareVar]);
                            if (dv) {
                                map.call(Object.keys(dv), function (key) {
                                    declareVar[key] = dv[key];
                                });
                            }
                        });
                        return declareVar.returnValue;
                    }
                }
            },
            invokeMethods: function (context, methods, args) {
                if (!this.isArray(methods)) {
                    return;
                }
                var results = [];
                var _this = this;
                this.ergodicArrayObject(context, methods, function (method) {
                    if (!_this.isFunction(method)) {
                        return;
                    }
                    results.push(
                        method.apply(context, args)
                    );
                });
                return results;
            }
        }
    });

    factory('UrlUtils', [], function () {
        return {
            urlMatching: function (url, matchUrl) {
                var pattern = new RegExp(matchUrl);
                return pattern.test(url);
            },
            getUrlWithoutParam: function (url) {
                return url.split('?')[0];
            },
            getParamFromUrl: function (url) {
                var params = [];
                var parts = url.split('?');
                if (parts.length < 2) {
                    return params;
                }
                var paramsStr = parts[1].split('&');
                for (var i = 0; i < paramsStr.length; i++) {
                    var index = paramsStr[i].indexOf('=');
                    var ps = new Array(2);
                    if (index !== -1) {
                        ps = [
                            paramsStr[i].substring(0, index),
                            paramsStr[i].substring(index + 1),
                        ];
                    } else {
                        ps[0] = paramsStr[i];
                    }
                    params.push({
                        key: ps[0],
                        value: ps[1]
                    });
                }
                return params;
            },
            margeUrlAndParams: function (url, params) {
                if (url.indexOf('?') !== -1 || !(params instanceof Array)) {
                    return url;
                }
                var paramsStr = [];
                for (var i = 0; i < params.length; i++) {
                    if (params[i].key !== null && params[i].value !== null) {
                        paramsStr.push(params[i].key + '=' + params[i].value);
                    }
                }
                return url + '?' + paramsStr.join('&');
            }
        }
    });

    factory('PointUtils', [], function () {
        var Point2D = function (x, y) {
            this.x = x || 0;
            this.y = y || 0;
        };
        Point2D.prototype = {
            constructor: Point2D,
            /**
             * ?????????????????????????????????????????????
             * @param distance
             * @param deg
             */
            getOtherPointFromDistanceAndDeg: function (distance, deg) {
                var radian = Math.PI / 180 * deg;
                var point = new this.constructor();
                point.x = distance * Math.sin(radian) + this.x;
                point.y = this.y - distance * Math.cos(radian);
                return point;
            },
            /**
             * ?????????????????????????????????????????????????????????
             * @param p
             * @returns {number}
             */
            getDistanceFromAnotherPoint: function (p) {
                return Math.sqrt((this.x - p.x) * (this.x - p.x) + (this.y - p.y) * (this.y - p.y));
            },
            /**
             * ?????????????????????????????????????????????????????????
             * @param p
             * @returns {number}
             */
            getDegFromAnotherPoint: function (p) {
                var usedPoint = new Point2D(p.x * 1000000 - this.x * 1000000, p.y * 1000000 - this.y * 1000000);
                var radian = Math.atan2(usedPoint.x * 1000000, usedPoint.y * 1000000);
                var deg = radian * 180 / Math.PI;
                return 180 - deg;
            },
            /**
             * ???????????????????????????????????????
             * @param x ??????????????????x
             * @param y ??????????????????y
             * @param width ?????????
             * @param height ?????????
             * @returns {boolean}
             */
            isInRect: function (x, y, width, height) {
                var px = this.x;
                var py = this.y;
                if (px < x || px > x + width) {
                    return false;
                }
                return !(py < y || py > y + height);
            }
        };
        return {
            Point2D: Point2D
        }
    });


    factory('PropExpand', ['BaseUtils', 'ObjectUtils', 'ArrayUtils', 'UrlUtils'],
        function (BaseUtils, ObjectUtils, ArrayUtils, UrlUtils) {
            return {
                Object: {
                    getProperty: function (_self, propertyLink) {
                        return ObjectUtils.readLinkProperty(_self, propertyLink);
                    },
                    setProperty: function (_self, propertyLink, value) {
                        ObjectUtils.createLinkProperty(_self, propertyLink, value);
                    },
                    mapConvert: function (_self, mapper) {

                    },
                    keyMap: function (_self, cb) {
                    },
                    keyValues: function (_self, cb) {
                    },
                    keyFilter: function (_self, cb) {
                    },
                },
                Array: {
                    map: function () {
                    },
                    forEach: function () {
                    },
                    filter: function () {
                    },
                    reduce: function () {
                    },
                    keep: function () {
                    },
                    remove: function () {
                    }
                },
                String: {
                    join: function (_self, arr) {
                    },
                }
            }
        });

    _global.everyUtils = function () {
        if (BaseUtils.isArray(arguments[0])) {
            depend.call(arguments[2] || this, arguments[0], arguments[1]);
        } else if (BaseUtils.isFunction(arguments[0])) {
            var args = arguments;
            depend.call(arguments[1] || this, ['FunctionUtils'], function (FunctionUtils) {
                var depends = FunctionUtils.getFunctionParams(args[0]);
                depend(depends, args[0]);
            })
        }
    };

    _global.eUtils = (function () {
        var utils = {};
        if (_global.everyUtils) {
            _global.everyUtils([
                'ArrayUtils', 'ObjectUtils', 'BaseUtils', 'FunctionUtils', 'ColorUtils', 'PointUtils', 'UrlUtils'
            ], function (
                ArrayUtils,
                ObjectUtils,
                BaseUtils,
                FunctionUtils,
                ColorUtils,
                PointUtils,
                UrlUtils) {
                utils = {
                    ArrayUtils: ArrayUtils,
                    ObjectUtils: ObjectUtils,
                    BaseUtils: BaseUtils,
                    ColorUtils: ColorUtils,
                    UrlUtils: UrlUtils,
                    urlUtils: UrlUtils,
                    PointUtils: PointUtils,
                    FunctionUtils: FunctionUtils
                };
            });
        }
        var proxy = {};
        forEach.call(Object.keys(utils), function (utilName) {
            if (!utilName) {
                return;
            }
            Object.defineProperty(proxy, utilName, {
                get: function () {
                    return utils[utilName];
                }
            });
            forEach.call(Object.keys(utils[utilName]), function (key) {
                if (!key) {
                    return;
                }
                if (proxy[key]) {
                    return;
                }
                Object.defineProperty(proxy, key, {
                    get: function () {
                        return utils[utilName][key];
                    }
                })
            })
        });
        return proxy;
    })();

    return _global.eUtils;
}));

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })()
;
});
// ==UserScript==
// @name            ??????????????????Me
// @name:en         Me
// @namespace       https://gitee.com/HGJing/everthing-hook/
// @version         1.0.62
// @description     ???????????????????????????|??????????????????????????????|????????????????????????|????????????|????????????????????????.
// @description:en  it can hook the timer speed to change.
// @include         *
// @require         https://greasyfork.org/scripts/372672-everything-hook/code/Everything-Hook.js?version=881251
// @author          Cangshi
// @match           http://*/*
// @run-at          document-start
// @grant           none
// @license         GPL-3.0-or-later
// ==/UserScript==
/**
 * ---------------------------
 * Time: 2017/11/20 19:28.
 * Author: Cangshi
 * View: http://palerock.cn
 * ---------------------------
 */

/**
 * 1. hook Object.defineProperty | Object.defineProperties
 * 2. set configurable: true
 * 3. delete property
 * 4. can set property for onxx event method
 */

window.isDOMLoaded = false;
window.isDOMRendered = false;

document.addEventListener('readystatechange', function () {
    if (document.readyState === "interactive" || document.readyState === "complete") {
        window.isDOMLoaded = true;
    }
});

~function (global) {

    var workerURLs = [];
    var extraElements = [];
    var suppressEvents = {};

    var helper = function (eHookContext, timerContext, util) {
        return {
            me: function (timer) {
                setTimeout(()=>{
                    timer.change(1 / ((1 / timerContext._percentage) * 8));
                },"1000");
            },
            applyHooking: function () {
                var _this = this;
                // ?????????????????????
                eHookContext.hookReplace(window, 'setInterval', function (setInterval) {
                    return _this.getHookedTimerFunction('interval', setInterval);
                });
                // ??????????????????
                eHookContext.hookReplace(window, 'setTimeout', function (setTimeout) {
                    return _this.getHookedTimerFunction('timeout', setTimeout)
                });
                // ????????????????????????????????????
                eHookContext.hookBefore(window, 'clearInterval', function (method, args) {
                    _this.redirectNewestId(args);
                });
                // ????????????????????????????????????
                eHookContext.hookBefore(window, 'clearTimeout', function (method, args) {
                    _this.redirectNewestId(args);
                });
                var newFunc = this.getHookedDateConstructor();
                eHookContext.hookClass(window, 'Date', newFunc, '_innerDate', ['now']);
                Date.now = function () {
                    return new Date().getTime();
                };
                eHookContext.hookedToString(timerContext._Date.now, Date.now);
                var objToString = Object.prototype.toString;

                Object.prototype.toString = function toString() {
                    'use strict';
                    if (this instanceof timerContext._mDate) {
                        return '[object Date]';
                    } else {
                        return objToString.call(this);
                    }
                };

                eHookContext.hookedToString(objToString, Object.prototype.toString);
                eHookContext.hookedToString(timerContext._setInterval, setInterval);
                eHookContext.hookedToString(timerContext._setTimeout, setTimeout);
                eHookContext.hookedToString(timerContext._clearInterval, clearInterval);
                timerContext._mDate = window.Date;
                this.hookShadowRoot();
            },
            getHookedDateConstructor: function () {
                return function () {
                    if (arguments.length === 1) {
                        Object.defineProperty(this, '_innerDate', {
                            configurable: false,
                            enumerable: false,
                            value: new timerContext._Date(arguments[0]),
                            writable: false
                        });
                        return;
                    } else if (arguments.length > 1) {
                        var definedValue;
                        switch (arguments.length) {
                            case 2:
                                definedValue = new timerContext._Date(
                                    arguments[0],
                                    arguments[1]
                                );
                                break;
                            case 3:
                                definedValue = new timerContext._Date(
                                    arguments[0],
                                    arguments[1],
                                    arguments[2],
                                );
                                break;
                            case 4:
                                definedValue = new timerContext._Date(
                                    arguments[0],
                                    arguments[1],
                                    arguments[2],
                                    arguments[3],
                                );
                                break;
                            case 5:
                                definedValue = new timerContext._Date(
                                    arguments[0],
                                    arguments[1],
                                    arguments[2],
                                    arguments[3],
                                    arguments[4]
                                );
                                break;
                            case 6:
                                definedValue = new timerContext._Date(
                                    arguments[0],
                                    arguments[1],
                                    arguments[2],
                                    arguments[3],
                                    arguments[4],
                                    arguments[5]
                                );
                                break;
                            default:
                            case 7:
                                definedValue = new timerContext._Date(
                                    arguments[0],
                                    arguments[1],
                                    arguments[2],
                                    arguments[3],
                                    arguments[4],
                                    arguments[5],
                                    arguments[6]
                                );
                                break;
                        }

                        Object.defineProperty(this, '_innerDate', {
                            configurable: false,
                            enumerable: false,
                            value: definedValue,
                            writable: false
                        });
                        return;
                    }
                    var now = timerContext._Date.now();
                    var passTime = now - timerContext.__lastDatetime;
                    var hookPassTime = passTime * (1 / timerContext._percentage);
                    // console.log(__this.__lastDatetime + hookPassTime, now,__this.__lastDatetime + hookPassTime - now);
                    Object.defineProperty(this, '_innerDate', {
                        configurable: false,
                        enumerable: false,
                        value: new timerContext._Date(timerContext.__lastMDatetime + hookPassTime),
                        writable: false
                    });
                };
            },
            getHookedTimerFunction: function (type, timer) {
                var property = '_' + type + 'Ids';
                return function () {
                    var uniqueId = timerContext.genUniqueId();
                    var callback = arguments[0];
                    if (typeof callback === 'string') {
                        callback += ';timer.notifyExec(' + uniqueId + ')';
                        arguments[0] = callback;
                    }
                    if (typeof callback === 'function') {
                        arguments[0] = function () {
                            var returnValue = callback.apply(this, arguments);
                            timerContext.notifyExec(uniqueId);
                            return returnValue;
                        }
                    }
                    // ????????????????????????
                    var originMS = arguments[1];
                    // ????????????????????????
                    arguments[1] *= timerContext._percentage;
                    var resultId = timer.apply(window, arguments);
                    // ????????????????????????????????????id???????????????
                    timerContext[property][resultId] = {
                        args: arguments,
                        originMS: originMS,
                        originId: resultId,
                        nowId: resultId,
                        uniqueId: uniqueId,
                        oldPercentage: timerContext._percentage,
                        exceptNextFireTime: timerContext._Date.now() + originMS
                    };
                    return resultId;
                };
            },
            redirectNewestId: function (args) {
                var id = args[0];
                if (timerContext._intervalIds[id]) {
                    args[0] = timerContext._intervalIds[id].nowId;
                    // ???????????????id
                    delete timerContext._intervalIds[id];
                }
                if (timerContext._timeoutIds[id]) {
                    args[0] = timerContext._timeoutIds[id].nowId;
                    // ???????????????id
                    delete timerContext._timeoutIds[id];
                }
            },
            registerShortcutKeys: function (timer) {
                // ???????????????
                addEventListener('keydown', function (e) {
                    switch (e.keyCode) {
                        case 57:
                            if (e.ctrlKey || e.altKey) {
                                // custom
                                timer.changeTime();
                            }
                            break;
                        // [=]
                        case 190:
                        case 187: {
                            if (e.ctrlKey) {
                                // console.log('+2');
                                timer.changeTime(2, 0, true);
                            } else if (e.altKey) {
                                // console.log('xx2');
                                timer.changeTime(0, 2);
                            }
                            break;
                        }
                        // [-]
                        case 188:
                        case 189: {
                            if (e.ctrlKey) {
                                // console.log('-2');
                                timer.changeTime(-2, 0, true);
                            } else if (e.altKey) {
                                // console.log('xx-2');
                                timer.changeTime(0, -2);
                            }
                            break;
                        }
                        // [0]
                        case 48: {
                            if (e.ctrlKey || e.altKey) {
                                // console.log('reset');
                                timer.changeTime(0, 0, false, true);
                            }
                            break;
                        }
                        default:
                        // console.log(e);
                    }
                });
            },
            /**
             * ???????????????????????????????????????????????????
             * @param percentage
             * @private
             */
            percentageChangeHandler: function (percentage) {
                // ???????????????????????????
                util.ergodicObject(timerContext, timerContext._intervalIds, function (idObj, id) {
                    idObj.args[1] = Math.floor((idObj.originMS || 1) * percentage);
                    // ????????????????????????
                    this._clearInterval.call(window, idObj.nowId);
                    // ?????????????????????
                    idObj.nowId = this._setInterval.apply(window, idObj.args);
                });
                // ???????????????????????????
                util.ergodicObject(timerContext, timerContext._timeoutIds, function (idObj, id) {
                    var now = this._Date.now();
                    var exceptTime = idObj.exceptNextFireTime;
                    var oldPercentage = idObj.oldPercentage;
                    var time = exceptTime - now;
                    if (time < 0) {
                        time = 0;
                    }
                    var changedTime = Math.floor(percentage / oldPercentage * time);
                    idObj.args[1] = changedTime;
                    // ????????????????????????
                    idObj.exceptNextFireTime = now + changedTime;
                    idObj.oldPercentage = percentage;
                    // ????????????????????????
                    this._clearTimeout.call(window, idObj.nowId);
                    // ?????????????????????
                    idObj.nowId = this._setTimeout.apply(window, idObj.args);
                });
            },
            hookShadowRoot: function () {
                var origin = Element.prototype.attachShadow;
                eHookContext.hookAfter(Element.prototype, 'attachShadow',
                    function (m, args, result) {
                        extraElements.push(result);
                        return result;
                    }, false);
                eHookContext.hookedToString(origin, Element.prototype.attachShadow);
            },
            hookDefine: function () {
                const _this = this;
                eHookContext.hookBefore(Object, 'defineProperty', function (m, args) {
                    var option = args[2];
                    var ele = args[0];
                    var key = args[1];
                    var afterArgs = _this.hookDefineDetails(ele, key, option);
                    afterArgs.forEach((arg, i) => {
                        args[i] = arg;
                    })
                });
                eHookContext.hookBefore(Object, 'defineProperties', function (m, args) {
                    var option = args[1];
                    var ele = args[0];
                    if (ele && ele instanceof Element) {
                        Object.keys(option).forEach(key => {
                            var o = option[key];
                            var afterArgs = _this.hookDefineDetails(ele, key, o);
                            args[0] = afterArgs[0];
                            delete option[key];
                            option[afterArgs[1]] = afterArgs[2]
                        })
                    }
                })
            },
            hookDefineDetails: function (target, key, option) {
                if (option && target && target instanceof Element && typeof key === 'string' && key.indexOf('on') >= 0) {
                    option.configurable = true;
                }
                if (target instanceof HTMLVideoElement && key === 'playbackRate') {
                    option.configurable = true;
                    console.warn('[Timer Hook]', '?????????????????????????????????');
                    key = 'playbackRate_hooked'
                }
                return [target, key, option];
            },
            suppressEvent: function (ele, eventName) {
                if (ele) {
                    delete ele['on' + eventName];
                    delete ele['on' + eventName];
                    delete ele['on' + eventName];
                    ele['on' + eventName] = undefined;
                }
                if (!suppressEvents[eventName]) {
                    eHookContext.hookBefore(EventTarget.prototype, 'addEventListener',
                        function (m, args) {
                            var eName = args[0];
                            if (eventName === eName) {
                                console.warn(eventName, 'event suppressed.')
                                args[0] += 'suppressed';
                            }
                        }, false);
                    suppressEvents[eventName] = true;
                }
            },
            changePlaybackRate: function (ele, rate) {
                delete ele.playbackRate;
                delete ele.playbackRate;
                delete ele.playbackRate;
                ele.playbackRate = rate
                if (rate !== 1) {
                    timerContext.defineProperty.call(Object, ele, 'playbackRate', {
                        configurable: true,
                        get: function () {
                            return 1;
                        },
                        set: function () {
                        }
                    });
                }
            }
        }
    };

    var normalUtil = {
        isInIframe: function () {
            let is = global.parent !== global;
            try {
                is = is && global.parent.document.body.tagName !== 'FRAMESET'
            } catch (e) {
                // ignore
            }
            return is;
        },
        listenParentEvent: function (handler) {
            global.addEventListener('message', function (e) {
                var data = e.data;
                var type = data.type || '';
                if (type === 'changePercentage') {
                    handler(data.percentage || 0);
                }
            })
        },
        sentChangesToIframe: function (percentage) {
            var iframes = document.querySelectorAll('iframe') || [];
            var frames = document.querySelectorAll('frame');
            if (iframes.length) {
                for (var i = 0; i < iframes.length; i++) {
                    iframes[i].contentWindow.postMessage(
                        {type: 'changePercentage', percentage: percentage}, '*');
                }
            }
            if (frames.length) {
                for (var j = 0; j < frames.length; j++) {
                    frames[j].contentWindow.postMessage(
                        {type: 'changePercentage', percentage: percentage}, '*');
                }
            }
        }
    };

    var querySelectorAll = function (ele, selector, includeExtra) {
        var elements = ele.querySelectorAll(selector);
        elements = Array.prototype.slice.call(elements || []);
        if (includeExtra) {
            extraElements.forEach(function (element) {
                elements = elements.concat(querySelectorAll(element, selector, false));
            })
        }
        return elements;
    };

    var generate = function () {
        return function (util) {
            // disable worker
            workerURLs.forEach(function (url) {
                if (util.urlMatching(location.href, 'http.*://.*' + url + '.*')) {
                    window['Worker'] = undefined;
                    console.log('Worker disabled');
                }
            });
            var eHookContext = this;
            var timerHooker = {
                // ????????????????????????id?????????
                _intervalIds: {},
                _timeoutIds: {},
                _auoUniqueId: 1,
                // ???????????????
                __percentage: 1.0,
                // ???????????????????????????
                _setInterval: window['setInterval'],
                _clearInterval: window['clearInterval'],
                _clearTimeout: window['clearTimeout'],
                _setTimeout: window['setTimeout'],
                _Date: window['Date'],
                __lastDatetime: new Date().getTime(),
                __lastMDatetime: new Date().getTime(),
                videoSpeedInterval: 1000,
                defineProperty: Object.defineProperty,
                defineProperties: Object.defineProperties,
                genUniqueId: function () {
                    return this._auoUniqueId++;
                },
                notifyExec: function (uniqueId) {
                    var _this = this;
                    if (uniqueId) {
                        // ?????? timeout ??????????????????
                        var timeoutInfos = Object.values(this._timeoutIds).filter(
                            function (info) {
                                return info.uniqueId === uniqueId;
                            }
                        );
                        timeoutInfos.forEach(function (info) {
                            _this._clearTimeout.call(window, info.nowId);
                            delete _this._timeoutIds[info.originId]
                        })
                    }
                    // console.log(uniqueId, 'called')
                },
                /**
                 * ???????????????
                 */
                init: function () {
                    var timerContext = this;
                    var h = helper(eHookContext, timerContext, util);
                    h.hookDefine();
                    h.applyHooking();
                    // ???????????????????????????????????????
                    Object.defineProperty(timerContext, '_percentage', {
                        get: function () {
                            return timerContext.__percentage;
                        },
                        set: function (percentage) {
                            if (percentage === timerContext.__percentage) {
                                return percentage;
                            }
                            h.percentageChangeHandler(percentage);
                            timerContext.__percentage = percentage;
                            return percentage;
                        }
                    });

                    if (!normalUtil.isInIframe()) {
                        console.log('[TimeHooker]', 'loading outer window...');
                        //h.applyUI();
                        //h.applyGlobalAction(timerContext);
                        h.me(timerContext);
                        //h.registerShortcutKeys(timerContext);
                    } else {
                        console.log('[TimeHooker]', 'loading inner window...');
                        normalUtil.listenParentEvent((function (percentage) {
                            console.log('[TimeHooker]', 'Inner Changed', percentage)
                            this.change(percentage);
                        }).bind(this))
                    }
                },
                /**
                 * ????????????????????????????????????
                 * @param percentage
                 */
                change: function (percentage) {
                    this.__lastMDatetime = this._mDate.now();
                    this.__lastDatetime = this._Date.now();
                    this._percentage = percentage;
                    var oldNode = document.getElementsByClassName('_th-click-hover');
                    var oldNode1 = document.getElementsByClassName('_th_times');
                    var displayNum = (1 / this._percentage).toFixed(2);
                    (oldNode[0] || {}).innerHTML = 'x' + displayNum;
                    (oldNode1[0] || {}).innerHTML = 'x' + displayNum;
                    var a = document.getElementsByClassName('_th_cover-all-show-times')[0] || {};
                    a.className = '_th_cover-all-show-times';
                    this._setTimeout.bind(window)(function () {
                        a.className = '_th_cover-all-show-times _th_hidden';
                    }, 100);
                    this.changeVideoSpeed();
                    normalUtil.sentChangesToIframe(percentage);
                },
                changeVideoSpeed: function () {
                    var timerContext = this;
                    var h = helper(eHookContext, timerContext, util);
                    var rate = 1 / this._percentage;
                    rate > 16 && (rate = 16);
                    rate < 0.065 && (rate = 0.065);
                    var videos = querySelectorAll(document, 'video', true) || [];
                    if (videos.length) {
                        for (var i = 0; i < videos.length; i++) {
                            h.changePlaybackRate(videos[i], rate);
                        }
                    }
                }
            };
            // ???????????????
            timerHooker.init();
            return timerHooker;
        }
    };

    if (global.eHook) {
        global.eHook.plugins({
            name: 'timer',
            /**
             * ????????????
             * @param util
             */
            mount: generate()
        });
    }
}(window);
}
