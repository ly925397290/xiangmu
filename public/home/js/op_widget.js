(function(a) {
    a.fn.opWidget = function() {
        var B = this
          , j = {
            effect: "none",
            navCls: "ds-switchable-nav",
            contentCls: "ds-switchable-content",
            delay: 0.1,
            triggerType: "mouse",
            hasTriggers: true,
            activeTriggerCls: "ds-active",
            autoplay: true,
            circular: true,
            prevBtnCls: "ds-prev",
            nextBtnCls: "ds-next",
            disableBtnCls: "ds-disable",
            duration: 0.3,
            waitingTime: 3
        }
          , A = {
            endTime: 0,
            interval: 100,
            timeRunCls: ".ds-countdown-run",
            timeUnitCls: {
                d: ".ds-d",
                h: ".ds-h",
                m: ".ds-m",
                s: ".ds-s",
                i: ".ds-i"
            },
            timeEndCls: ".ds-countdown-end"
        }
          , v = {
            effect: "none",
            mainMenuCls: "ds-mainmenu",
            subMenuCls: "ds-submenu",
            duration: 0.3
        }
          , u = {
            effect: "none",
            maskLayoutCls: "ds-mask-layout",
            maskCls: "ds-mask",
            duration: 0.3
        }
          , k = {
            magnifyCls: "ds-magnify",
            bigDemoCls: "ds-bigDemo"
        }
          , t = {
            triggerCls: "ds-switchable-trigger",
            panelCls: "ds-switchable-panel",
            activeTriggerCls: "ds-active",
            triggerType: "mouse"
        };
        B.each(function() {
            var G = a(this)
              , E = G.attr("data-widget-type")
              , F = G.attr("data-widget-config")
              , D = {}
              , C = {};
            F = F ? s(F) : "{}";
            C = a.parseJSON(F);
            switch (E) {
            case "Tabs":
            case "Slide":
                D = a.extend(false, {}, j, C);
                D = z(D);
                g(G, D);
                break;
            case "Carousel":
                D = a.extend(false, {}, j, C);
                D = z(D);
                g(G, D, 1);
                break;
            case "Countdown":
                D = a.extend(false, {}, A, C);
                D = x(D);
                w(G, D);
                break;
            case "Nav":
                D = a.extend(false, {}, v, C);
                D = r(D);
                f(G, D);
                break;
            case "Mask":
                D = a.extend(false, {}, u, C);
                D = y(D);
                m(G, D);
                break;
            case "Magnify":
                D = a.extend(false, {}, k, C);
                D = c(D);
                e(G, D);
                break;
            case "Accordion":
                D = a.extend(false, {}, t, C);
                D = h(D);
                q(G, D);
                break;
            default:
                break
            }
        });
        function s(M) {
            var F = M.match(/[a-zA-Z0-9_]|\{|\}|\-|\_|\.|\:|\'|\"|\,/g);
            if (F) {
                M = F.join("")
            } else {
                return
            }
            M = M.replace(/'/g, '"').replace(/}$/, "").replace(/{/, "");
            var D = /"?endTime"?:?"?([0-9].+?[0-9])"?,/
              , L = /"?timeUnitCls"?:?"?{(.+?)}"?,/
              , G = M.match(D)
              , O = M.match(L)
              , M = M.replace(D, "")
              , M = M.replace(L, "");
            var H = []
              , H = M.split(",")
              , N = H.length
              , C = "{";
            if (G) {
                if (parseInt(G[1]) == G[1]) {
                    var J = G[1]
                } else {
                    var K = G[1].match(/.{8}$/)
                      , I = G[1].replace(/.{8}$/, "");
                    var J = I + " " + K[0]
                }
                C += '"endTime":"' + J + '",'
            }
            if (O) {
                C += '"timeUnitCls":' + s(O[1]) + ","
            }
            for (var E = 0; E <= N - 1; E++) {
                H[E] = H[E].split(/:/);
                if (H[E].length >= 2) {
                    H[E][1] = '"' + H[E][1].replace(/"/g, "") + '"';
                    H[E][0] = '"' + H[E][0].replace(/"/g, "") + '"';
                    C += H[E][0] + ":" + H[E][1];
                    if (E < N - 1) {
                        C += ","
                    }
                }
            }
            C += "}";
            return C
        }
        function z(C) {
            if (C.effect != "fade" && C.effect != "scrolly" && C.effect != "scrollx" && C.effect != "special") {
                C.effect = "none"
            }
            if (Number(C.delay) < 0 || !Number(C.delay)) {
                C.delay = 0.1
            }
            if (C.triggerType != "click") {
                C.triggerType = "mouseenter"
            }
            if (!C.hasTriggers || C.hasTriggers == "false") {
                C.hasTriggers = false
            }
            if (!C.autoplay || C.autoplay == "false") {
                C.autoplay = false
            }
            if (!C.circular || C.circular == "false") {
                C.circular = false
            }
            if (Number(C.duration) < 0 || !Number(C.duration)) {
                C.duration = 0.3
            }
            if (Number(C.waitingTime) <= 0.1 || !Number(C.waitingTime)) {
                C.waitingTime = 3
            }
            if (Number(C.waitingTime) <= Number(C.delay)) {
                C.delay = 0.1
            }
            C.navCls = l(C.navCls);
            C.contentCls = l(C.contentCls);
            C.activeTriggerCls = l(C.activeTriggerCls);
            C.prevBtnCls = l(C.prevBtnCls);
            C.nextBtnCls = l(C.nextBtnCls);
            C.disableBtnCls = l(C.disableBtnCls);
            return C
        }
        function x(C) {
            if (Number(C.interval) < 100 || !Number(C.interval)) {
                C.interval = 100
            }
            C.timeUnitCls.d = l(C.timeUnitCls.d);
            C.timeUnitCls.h = l(C.timeUnitCls.h);
            C.timeUnitCls.m = l(C.timeUnitCls.m);
            C.timeUnitCls.s = l(C.timeUnitCls.s);
            C.timeUnitCls.i = l(C.timeUnitCls.i);
            C.timeRunCls = l(C.timeRunCls);
            C.timeEndCls = l(C.timeEndCls);
            return C
        }
        function r(C) {
            if (C.effect != "slide") {
                C.effect = "none"
            }
            if (Number(C.duration) < 0 || !Number(C.duration)) {
                C.duration = 0.3
            }
            C.mainMenuCls = l(C.mainMenuCls);
            C.subMenuCls = l(C.subMenuCls);
            return C
        }
        function y(C) {
            if (C.effect != "fade") {
                C.effect = "none"
            }
            if (Number(C.duration) < 0 || !Number(C.duration)) {
                C.duration = 0.3
            }
            C.maskLayoutCls = l(C.maskLayoutCls);
            C.maskCls = l(C.maskCls);
            return C
        }
        function c(C) {
            C.magnifyCls = l(C.magnifyCls);
            C.bigDemoCls = l(C.bigDemoCls);
            return C
        }
        function h(C) {
            if (C.triggerType != "click") {
                C.triggerType = "mouseenter"
            }
            C.triggerCls = l(C.triggerCls);
            C.panelCls = l(C.panelCls);
            C.activeTriggerCls = l(C.activeTriggerCls);
            return C
        }
        function l(C) {
            return C.replace(/\{|\}|\.|\:|\'|\"|\,/g, "")
        }
        function g(G, J, F) {
            var H = G.find("." + J.navCls), L = G.find("." + J.contentCls), O = L.children(), P = O.size(), I = O.width(), D = O.height(), K = 0, M;
            if (H.size() <= 0) {
                d(L, P, J);
                H = G.find("." + J.navCls)
            }
            var N = H.children();
            if (J.effect == "special") {
                if (F) {
                    b(G, J, I, D, 0, 0);
                    J.hasTriggers = false;
                    J.circular = true
                } else {
                    J.effect = "none"
                }
            }
            if (J.effect == "none") {
                K = 0
            } else {
                K = J.duration * 1000
            }
            if (!J.hasTriggers) {
                H.hide()
            }
            N.off(J.triggerType + " click");
            N.on(J.triggerType + " click", function() {
                var R = a(this)
                  , Q = R.index()
                  , S = N.size();
                clearTimeout(M);
                M = setTimeout(function() {
                    R.addClass(J.activeTriggerCls).siblings().removeClass(J.activeTriggerCls);
                    if (J.effect == "none" || J.effect == "fade") {
                        O.eq(Q).stop(true, true).fadeIn(K).siblings().stop(true, true).fadeOut(K)
                    } else {
                        if (J.effect == "scrolly") {
                            var U = O.height();
                            L.stop(true, true).animate({
                                marginTop: -Q * U
                            }, K)
                        } else {
                            if (J.effect == "scrollx") {
                                var T = O.width();
                                L.stop(true, true).animate({
                                    marginLeft: -Q * T
                                }, K)
                            } else {
                                if (J.effect == "special") {
                                    b(G, J, I, D, K, Q)
                                }
                            }
                        }
                    }
                    if (F && !J.circular) {
                        var V = G.find("." + J.prevBtnCls)
                          , W = G.find("." + J.nextBtnCls);
                        if (Q <= 0) {
                            V.addClass(J.disableBtnCls)
                        } else {
                            V.removeClass(J.disableBtnCls)
                        }
                        if (Q >= S - 1) {
                            W.addClass(J.disableBtnCls)
                        } else {
                            W.removeClass(J.disableBtnCls)
                        }
                    }
                }, J.delay * 1000)
            });
            if (J.autoplay) {
                p(G, N, J)
            }
            if (F) {
                var C = G.find("." + J.prevBtnCls)
                  , E = G.find("." + J.nextBtnCls);
                if (!J.circular) {
                    C.addClass(J.disableBtnCls)
                }
                G.on("click", "." + J.prevBtnCls, function() {
                    var T = a(this)
                      , R = H.find("." + J.activeTriggerCls)
                      , Q = N.index(R)
                      , S = T.filter("." + J.disableBtnCls).size();
                    if (S <= 0) {
                        if (Q >= 1) {
                            R.prev().triggerHandler("click")
                        } else {
                            N.filter(":last").triggerHandler("click")
                        }
                    }
                });
                G.on("click", "." + J.nextBtnCls, function() {
                    var T = a(this)
                      , R = H.find("." + J.activeTriggerCls)
                      , Q = N.index(R)
                      , U = N.size()
                      , S = T.filter("." + J.disableBtnCls).size();
                    if (S <= 0) {
                        if (Q <= U - 2) {
                            R.next().triggerHandler("click")
                        } else {
                            N.filter(":first").triggerHandler("click")
                        }
                    }
                })
            }
        }
        function b(D, F, E, C, G, K) {
            var H = D.find("." + F.contentCls)
              , J = H.children()
              , L = J.size()
              , I = D.width();
            J.each(function(M) {
                var R = a(this);
                var N = Math.sin(2 * Math.PI / L * ((M - K + L) % L)) + 1
                  , P = Math.cos(2 * Math.PI / L * ((M - K) % L)) + 1
                  , T = Math.round(N * (I - E) / 2)
                  , Q = Math.round(Math.abs(P * E * 2 / 3) / 2 + E / 3)
                  , O = Math.round(Math.abs(P * C * 2 / 3) / 2 + C / 3)
                  , S = Math.round(P * L * 2);
                R.animate({
                    width: Q,
                    height: O,
                    left: T + (E - Q) / 2,
                    top: (C - O) / 2,
                    zIndex: S
                }, G)
            })
        }
        function d(C, D, F) {
            var G = '<ul class="' + F.navCls + '">';
            for (var E = 0; E < D; E++) {
                G += "<li";
                if (E == 0) {
                    G += ' class="' + F.activeTriggerCls + '"'
                }
                G += ">" + (E + 1) + "</li>"
            }
            G += "</ul>";
            C.after(G)
        }
        function p(F, D, C) {
            var E = setInterval(function() {
                i(D, C)
            }, C.waitingTime * 1000);
            F.mouseenter(function() {
                clearInterval(E)
            }).mouseleave(function() {
                clearInterval(E);
                E = setInterval(function() {
                    i(D, C)
                }, C.waitingTime * 1000)
            })
        }
        function i(F, E) {
            var C = F.size()
              , D = F.filter("." + E.activeTriggerCls);
            if (D.index() >= C - 1) {
                if (E.circular) {
                    F.eq(0).triggerHandler("click")
                }
            } else {
                D.next().triggerHandler("click")
            }
        }
        function w(G, F) {
            var D = 0;
            if (parseInt(F.endTime) == F.endTime) {
                D = parseInt(F.endTime)
            } else {
                var C = F.endTime.replace(/-/g, "/")
                  , C = new Date(C)
                  , E = new Date();
                D = parseInt(C.getTime()) - parseInt(E.getTime())
            }
            o(G, F, D)
        }
        function o(J, H, E) {
            var I = 0
              , G = 0
              , C = 0
              , F = 0
              , D = 0;
            if (E >= 0) {
                I = n(Math.floor(E / 1000 / 60 / 60 / 24));
                G = n(Math.floor(E / 1000 / 60 / 60 % 24));
                C = n(Math.floor(E / 1000 / 60 % 60));
                F = n(Math.floor(E / 1000 % 60));
                D = Math.floor((E % 1000) / 100)
            }
            J.find("." + H.timeUnitCls.d).text(I);
            J.find("." + H.timeUnitCls.h).text(G);
            J.find("." + H.timeUnitCls.m).text(C);
            J.find("." + H.timeUnitCls.s).text(F);
            J.find("." + H.timeUnitCls.i).text(D);
            if (E >= H.interval) {
                E -= H.interval;
                setTimeout(function() {
                    o(J, H, E)
                }, H.interval)
            } else {
                if (E > 0 && E <= H.interval) {
                    setTimeout(function() {
                        o(J, H, 0)
                    }, E)
                } else {
                    J.find("." + H.timeRunCls).hide();
                    J.find("." + H.timeEndCls).show()
                }
            }
        }
        function n(C) {
            return C >= 10 ? C : "0" + C
        }
        function f(G, D) {
            var E = G.find("." + D.mainMenuCls), F, C;
            if (D.effect == "slide") {
                F = D.duration * 1000
            } else {
                if (D.effect == "none") {
                    F = 0
                }
            }
            E.on("mouseenter", function() {
                var H = a(this).find("." + D.subMenuCls);
                H.stop(true, true);
                C = setTimeout(function() {
                    if (D.effect == "slide") {
                        H.slideDown(F)
                    } else {
                        H.fadeIn(F)
                    }
                }, 100)
            }).on("mouseleave", function() {
                clearTimeout(C);
                var H = a(this).find("." + D.subMenuCls);
                H.stop(true, true);
                if (D.effect == "slide") {
                    H.slideUp(F)
                } else {
                    H.fadeOut(F)
                }
            })
        }
        function m(G, D) {
            var E = G.find("." + D.maskLayoutCls), F, C;
            if (D.effect == "fade") {
                F = D.duration * 1000
            } else {
                if (D.effect == "none") {
                    F = 0
                }
            }
            E.on("mouseenter", function() {
                var H = a(this).find("." + D.maskCls);
                H.stop(true, true);
                H.fadeIn(F)
            }).on("mouseleave", function() {
                var H = a(this).find("." + D.maskCls);
                H.stop(true, true);
                H.fadeOut(F)
            })
        }
        function e(F, C) {
            var E = F.find("." + C.magnifyCls)
              , D = E.css("z-index");
            D = (D == "auto") ? 1 : D;
            E.on("mouseenter", function() {
                var H = a(this)
                  , G = H.find("." + C.bigDemoCls);
                G.show();
                H.css("z-index", D + 1).parents(".sf-layoutList").css("z-index", 2);
                H.parents(".sf-moduleList").css("z-index", 2)
            }).on("mouseleave", function() {
                var H = a(this)
                  , G = H.find("." + C.bigDemoCls);
                G.hide();
                H.css("z-index", D).parents(".sf-layoutList").css("z-index", 1);
                H.parents(".sf-moduleList").css("z-index", 1)
            })
        }
        function q(E, D) {
            var C = E.find("." + D.triggerCls);
            C.on(D.triggerType, function() {
                var G = a(this)
                  , F = C.index(G);
                C.removeClass(D.activeTriggerCls);
                G.addClass(D.activeTriggerCls);
                E.find("." + D.panelCls).hide().eq(F).show()
            })
        }
    }
}
)(jQuery);
$(function() {
    $(".SN_Widget").opWidget();
    var a = $('link[href*="/shts/cpopc/"]').size() == 0;
    if (a) {
        var e = $('link[href*="/shts/tpl/ds/"]').size() == 0;
        var d = $('link[href*="SN_T_1001/default/assets/css/skin"]').size() > 0;
        var b = "//resource.sop.suning.cn/shts/resource/SN_T_1001/default/assets/css/skin-default.css";
        //debug && console.info(e ? "是系统模板" : "是设计师模板");
        //debug && console.info(d ? "有系统模板皮肤" : "没有系统模板皮肤");
        if (e && !d) {
            //debug && console.info("是系统模板,没有配色，添加默认皮肤中...");
            var c = '<link rel="stylesheet" type="text/css" href="//resource.sop.suning.cn/shts/resource/SN_T_1001/default/assets/css/skin-default.css" />';
            $("head").append(c)
        }
    }
});
