var sa=sa||{};(function(i,q){var h=i,c=q,p="location",B="domain",a="substring",m="split",s="indexOf",d="match",g="push",C="-",f="|";var u=function(){this.isNullAdded=false;var D={};this.contains=function(E){if(E===null){return this.isNullAdded}else{if(E===undefined){return false}else{return D[E]?true:false}}};this.add=function(E){if(E===null){this.isNullAdded=true}else{if(E!==undefined){D[E]=true}}return this};this.addAll=function(F){if(F!==null&&F!==undefined&&F instanceof Array){for(var E=0;E<F.length;E++){this.add(F[E])}}return this};this.remove=function(E){if(E===null){this.isNullAdded=false}else{if(E!==undefined){delete D[E]}}return this};this.removeAll=function(F){if(F!==null&&F!==undefined&&F instanceof Array){for(var E=0;E<F.length;E++){this.remove(F[E])}}return this};this.clear=function(){this.isNullAdded=false;D={};return this};this.size=function(){return this.list().length};this.isEmpty=function(){return this.list().length>0?false:true};this.list=function(){var E=[];if(this.isNullAdded){E.push(null)}for(o in D){if(D.hasOwnProperty(o)){E.push(o)}}return E}};var v=function(){var D=0;var E=new Object();this.getThis=function(){return E};this.put=function(F,G){if(!this.containsKey(F)){D++}E[F]=G};this.get=function(F){if(this.containsKey(F)){return E[F]}else{return null}};this.remove=function(F){if(delete E[F]){D--}};this.containsKey=function(F){return(F in E)};this.containsValue=function(F){for(var G in E){if(E[G]==F){return true}}return false};this.values=function(){var F=new Array(D);for(var G in E){F.push(E[G])}return F};this.keys=function(){var F=new Array(D);for(var G in E){F.push(G)}return F};this.size=function(){return D}};var t=function(){var E=this;var F=G();E.getDefaultConfig=function(){return F};E.getDefaultConfigById=function(J){if(J==undefined||J==null||J==""){return null}var I=r(J);if(I==undefined||I==null){return null}var H=I.tagName.toLowerCase();if(H=="input"){H=I.type.toLowerCase()}return F.get(H)};E.getDefaultEvent=function(K){if(K==undefined||K==null||K==""){return null}var J=r(K);if(J==undefined||J==null){return null}var I=J.tagName.toLowerCase();if(I=="input"){I=J.type.toLowerCase()}var H=F.get(I);if(H==null){return null}return H.event};E.getDefaultAttr=function(K){if(K==undefined||K==null||K==""){return null}var J=r(K);if(J==undefined||J==null){return null}var I=J.tagName.toLowerCase();if(I=="input"){I=J.type.toLowerCase()}var H=F.get(I);if(H==null){return null}return H.attr};E.initDefaultConfig=function(){var I=true;var H=true;if(sa.events==undefined||sa.events==null||sa.events.length==0){sa.events=[];I=false}if(sa.customs==undefined||sa.customs==null||sa.customs.length==0){sa.customs=[];H=false}if(I&&H){return false}D("input",I,H);D("select",I,H);D("textarea",I,H);D("button",I,H);D("div",true,H);D("span",I,H);D("img",I,H);D("a",I,H)};function G(){var H=new v();H.put("text",{event:"blur",attr:"value"});H.put("password",{event:"blur,change",attr:"value"});H.put("select",{event:"change",attr:"value"});H.put("radio",{event:"click,change",attr:"value"});H.put("button",{event:"click,keypress",attr:"value"});H.put("checkbox",{event:"click,change",attr:"value"});H.put("color",{event:"change",attr:"value"});H.put("date",{event:"blur,change",attr:"value"});H.put("datetime",{event:"blur,change",attr:"value"});H.put("datetime-local",{event:"blur,change",attr:"value"});H.put("file",{event:"change",attr:"value"});H.put("image",{event:"click,change",attr:"value"});H.put("month",{event:"blur,change",attr:"value"});H.put("number",{event:"blur",attr:"value"});H.put("range",{event:"change",attr:"value"});H.put("reset",{event:"click,keypress",attr:"value"});H.put("search",{event:"blur,change",attr:"value"});H.put("submit",{event:"click,keypress",attr:"value"});H.put("tel",{event:"blur,change",attr:"value"});H.put("time",{event:"blur,change",attr:"value"});H.put("url",{event:"blur",attr:"value"});H.put("week",{event:"blur,change",attr:"value"});H.put("div",{event:"click",attr:"innerHTML"});H.put("span",{event:"click",attr:"innerHTML"});H.put("a",{event:"mousedown",attr:"innerHTML"});H.put("img",{event:"click",attr:"src"});H.put("select",{event:"change",attr:"value"});H.put("textarea",{event:"blur,change",attr:"value"});return H}function D(I,N,Q){var O=sa&&sa.bid&&sa.bid.event?sa.bid.event:sa.bid;var L=sa&&sa.bid&&sa.bid.fun?sa.bid.fun:sa.bid;var P=true;var M=true;if(O==undefined||O==null||O==""){P=false}if(L==undefined||L==null||L==""){M=false}if(!P&&!M){return false}var T=q.getElementsByTagName(I);var S;var R;for(var J=0;J<T.length;J++){S=T[J];if(S.id==undefined||S.id==null||S.id==""){continue}if(I=="input"){R=F.get(S.type)}else{R=F.get(I)}if(R==undefined||R==null){continue}if(!N&&P){var H=R.event.split(",");for(x in H){var K=H[x];if(K==undefined||K==null||K==""){continue}sa.events.push({id:S.id,event:K,attr:R.attr,bid:O})}}if(!Q&&M){sa.customs.push({id:S.id,attr:R.attr,bid:L})}}}};var z=function(){var D=this;D.addEvent=function(F,G,I){var E=this;if(F.addEventListener){F.addEventListener(G,I,false)}else{if(F.attachEvent){if(G.indexOf("custom")!=-1){if(isNaN(F[G])){F[G]=0}var H=function(J){J=J?J:i.event;if(J.propertyName==G){I.call(F)}};F.attachEvent("onpropertychange",H);if(!F["callback"+I]){F["callback"+I]=H}}else{F.attachEvent("on"+G,I)}}else{F["on"+G]=I}}return E};D.removeEvent=function(F,G,H){var E=this;if(F.removeEventListener){F.removeEventListener(G,H,false)}else{if(F.detachEvent){if(G.indexOf("custom")!=-1){F.detachEvent("onpropertychange",F["callback"+H]);F["callback"+H]=null}else{F.detachEvent("on"+G,H)}}else{F["on"+G]=null}}return E};D.triggerEvent=function(G,H){var F=this;try{if(G.dispatchEvent){var E=q.createEvent("Event");E.initEvent(H,true,true);G.dispatchEvent(E)}else{if(G.fireEvent){if(H.indexOf("custom")!=-1){G[H]++}else{G.fireEvent("on"+H)}}}}catch(I){}return F}};var l=function(E){var H=this;var F=new b();var K=new t();K.initDefaultConfig();H.version="SA-2.0";H.PID=(new Date()).getTime();H.server=E&&E.server?E.server:"auto";H.domainName=E&&E.domainName?E.domainName:"auto";H.events=E&&E.events?E.events:[];H.customs=E&&E.customs?E.customs:[];H.eventWiths=null;H.customWiths=null;H.maxLength=E&&E.maxLength?E.maxLength:80;H.securityTags=E&&E.securityTags?E.securityTags:["password"];H.securityTagIds=E&&E.securityTagIds?E.securityTagIds:[];H.ignoreTags=E&&E.ignoreTags?E.ignoreTags:[];H.ignoreTagIds=E&&E.ignoreTagIds?E.ignoreTagIds:[];H.regEvents=E&&E.regEvents?E.regEvents:[];H.sync=E&&E.sync?true:false;H.cusVar=E&&E.cusVar?E.cusVar:[];H.openAPI=E&&E.openAPI?true:false;G();I();H.isSecurityTag=function(Q){if(F.isEmpty(Q)){return false}if(F.isArrayEmpty(H.securityTagIds)&&F.isArrayEmpty(H.securityTags)){return false}if(!F.isArrayEmpty(H.securityTagIds)){var M;for(var L in H.securityTagIds){M=H.securityTagIds[L];if(F.isEmpty(M)){continue}if(M==Q){return true}}}if(F.isArrayEmpty(H.securityTags)){return false}var O=r(Q);if(O==undefined||O==null){return false}var N=O.tagName.toLowerCase();if(N=="input"){N=O.type.toLowerCase()}var P;for(var L in H.securityTags){P=H.securityTags[L];if(F.isEmpty(P)){continue}if(N==P){return true}}return false};H.isIgnoreTag=function(Q){if(F.isEmpty(Q)){return false}if(F.isArrayEmpty(H.ignoreTagIds)&&F.isArrayEmpty(H.ignoreTags)){return false}if(!F.isArrayEmpty(H.ignoreTagIds)){var M;for(var L in H.ignoreTagIds){M=H.ignoreTagIds[L];if(F.isEmpty(M)){continue}if(M==Q){return true}}}if(F.isArrayEmpty(H.ignoreTags)){return false}var O=r(Q);if(O==undefined||O==null){return false}var N=O.tagName.toLowerCase();if(N=="input"){N=O.type.toLowerCase()}var P;for(var L in H.ignoreTags){P=H.ignoreTags[L];if(F.isEmpty(P)){continue}if(N==P){return true}}return false};function G(){var ae=new v();var N=new v();if(!F.isArrayEmpty(H.events)){var Y;for(R in H.events){Y=H.events[R];if(Y.id==undefined||Y.id==null||Y.id==""){continue}var Z=Y.id.split(",");var T=Y.event;var ab=Y.attr;var ac=Y.bid?Y.bid:(E&&E.bid&&E.bid.event?E.bid.event:E.bid);var W=Y.withs;var X;for(var R in Z){X=Z[R];if(F.isEmpty(X)){continue}if(ae.containsKey(X)){if(F.isEmpty(T)){T=K.getDefaultEvent(X)}if(F.isEmpty(T)){continue}var V=new u();var S=null;var M=T.split(",");for(var Q in M){if(F.isEmpty(M[Q])){continue}if(!V.contains(M[Q])){V.add(M[Q]);if(S==null){S=M[Q]}else{S=S+","+M[Q]}}}if(V.size()>0){var U=ae.get(X);var O=U.event;var ad=O.split(",");for(var P in ad){if(F.isEmpty(ad[P])){continue}if(!V.contains(ad[P])){V.add(ad[P]);if(S==null){S=ad[P]}else{S=S+","+ad[P]}}}if(S!=null){if(F.isEmpty(ab)){ab=K.getDefaultAttr(X)}ae.put(X,{id:X,event:S,attr:ab,bid:ac})}}}else{if(F.isEmpty(T)){T=K.getDefaultEvent(X)}if(F.isEmpty(T)){continue}if(F.isEmpty(ab)){ab=K.getDefaultAttr(X)}ae.put(X,{id:X,event:T,attr:ab,bid:ac})}if(!F.isEmpty(W)&&!F.isEmpty(T)){var M=T.split(",");var L,af;for(var aa in M){L=M[aa];if(F.isEmpty(L)){continue}af=X+"&"+L;D(N,af,W)}}}}}H.events=ae;H.eventWiths=N;E.events=null}function I(){var R=new v();var Q=new v();if(!F.isArrayEmpty(H.customs)){var L;for(x in H.customs){L=H.customs[x];if(F.isEmpty(L.id)){continue}var P=L.id.split(",");var O=L.attr;var M=L.bid?L.bid:(E&&E.bid&&E.bid.fun?E.bid.fun:E.bid);var N=L.withs;var S;for(y in P){S=P[y];if(F.isEmpty(S)){continue}if(F.isEmpty(O)){O=K.getDefaultAttr(S)}if(F.isEmpty(O)){continue}R.put(S,{id:S,attr:O,bid:M});if(!F.isEmpty(N)){D(Q,S,N)}}}}H.customs=R;H.customWiths=Q;E.customs=null}function D(M,R,O){if(M.containsKey(R)){var S=new u();var L=J(O,S);if(L!=null){var Q=new Array();if(F.isObject(L.config)){Q.push(L.config)}else{Q=L.config}var P=M.get(R);var N=J(P,L.idList);if(N!=null){if(F.isObject(N.config)){Q.push(N.config)}else{for(j in N.config){Q.push(N.config[j])}}}M.put(R,Q)}}else{var S=new u();var T=null;var L=J(O,S);if(L!=null){var Q=new Array();if(F.isObject(L.config)){Q.push(L.config)}else{Q=L.config}M.put(R,Q)}}}function J(Q,S){if(Q==undefined||Q==null){return null}var L=new Array();if(S==undefined||S==null){S=new u()}var M=new Array();if(F.isObject(Q)){M.push(Q)}else{if(F.isArray(Q)){M=Q}else{return null}}var N,O,T=null,R,P;for(j in M){T=null;N=M[j];if(F.isEmpty(N)){continue}if(F.isEmpty(N.id)){continue}P=N.attr;O=N.id.split(",");for(k in O){R=O[k];if(F.isEmpty(R)){continue}if(!S.contains(R)){S.add(R);if(T==null){T=R}else{T=T+","+R}if(F.isEmpty(P)){P=K.getDefaultAttr(R)}}}if(T!=null){L.push({id:T,attr:P})}}if(F.isArrayEmpty(S)){return null}return{config:L,idList:S,ids:T}}};var b=function(){var D=this;D.isNull=function(E){return(undefined==E||""==E||C==E)};D.isEmpty=function(E){return(E==undefined||E==null||E=="")};D.isArrayEmpty=function(E){return(E==undefined||E==null||E.length==0)};D.isObject=function(E){return(typeof(E)).toLowerCase()=="object"&&!D.isArray(E)};D.isArray=function(E){return Object.prototype.toString.call(E).toLowerCase()=="[object array]"};D.isFunction=function(E){return(typeof(fun)).toLowerCase()=="function"};D.isContain=function(E,F){return(E[s](F)>-1)};D.encode=function(F,E){return E?encodeURIComponent(F):encodeURIComponent(F)};D.decode=function(F,E){return E?decodeURIComponent(F):decodeURI(F)};D.pick=function(J,H,I){var F="-",E;if(!D.isNull(J)&&!D.isNull(H)&&!D.isNull(I)){E=J.indexOf(H);if(E>-1){var G=J[s](I,E);if(G<0){G=J.length}F=J[a](E+H[s]("=")+1,G)}}return F};D.random=function(){return Math.round(Math.random()*2147483647)};D.sendByImg=function(F){var G=D.random(),E=new Image(1,1);h.__n=E;E.onload=E.onerror=function(){h.__n=null;E=null};E.src=F+"&i="+G};D.getCookie=function(F){var H=q.cookie.split("; ");for(var G=0;G<H.length;G++){var E=H[G].split("=");if(E[0]==F){return unescape(E[1]?E[1]:C)}}return C};D.removeHTMLTag=function(E){if(D.isEmpty(E)){return E}E=E.replace(/<\/?[^>]*>/g,"");E=E.replace(/[ | ]*\n/g,"\n");E=E.replace(/\n[\s| | ]*\r/g,"\n");E=E.replace(/&nbsp;/ig,"");return E};D.removeEnterWrap=function(E){if(D.isEmpty(E)){return E}E=E.replace(/[\r\n]/g,"");E=E.replace(/[\r]/g,"");E=E.replace(/[\n]/g,"");return E};D.getMaskCode=function(H){var F="*";if(D.isEmpty(H)){return H}var G="";for(var E=0;E<H.length;E++){G=G+"*"}return G};D.getStrTypes=function(M){var H="9";var F="a";var N="s";var L="c";var E="$";var J="?";var K="";if(D.isEmpty(M)){return K}for(var I=0;I<M.length;I++){var G=M.substr(I,1);if(D.isNumber(G)){K=K+H}else{if(D.isLetter(G)){K=K+F}else{if(D.isSpace(G)){K=K+N}else{if(D.isSpecialCharacter(G)){K=K+E}else{if(D.isChineseCharacter(G)){K=K+L}else{K=K+J}}}}}}return K};D.isNumber=function(F){var E=/^[0-9]$/;return E.test(F)};D.isLetter=function(F){var E=/^[A-Za-z]+$/;return E.test(F)};D.isSpace=function(F){var E=/\s/;return E.test(F)};D.isChineseCharacter=function(F){var E=new RegExp("[\\u4E00-\\u9FFF]+","g");return E.test(F)};D.isSpecialCharacter=function(F){var E=/[`~!@#$%^&*()-+_=|{}':;',"\[\]\\.<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]/;return E.test(F)}};b.Base64=function(){var F=this;var E="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";F.encode=function(J){var H="";var Q,O,M,P,N,L,K;var I=0;J=D(J);while(I<J.length){Q=J.charCodeAt(I++);O=J.charCodeAt(I++);M=J.charCodeAt(I++);P=Q>>2;N=((Q&3)<<4)|(O>>4);L=((O&15)<<2)|(M>>6);K=M&63;if(isNaN(O)){L=K=64}else{if(isNaN(M)){K=64}}H=H+E.charAt(P)+E.charAt(N)+E.charAt(L)+E.charAt(K)}return H};F.decode=function(J){var H="";var Q,O,M;var P,N,L,K;var I=0;J=J.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(I<J.length){P=E.indexOf(J.charAt(I++));N=E.indexOf(J.charAt(I++));L=E.indexOf(J.charAt(I++));K=E.indexOf(J.charAt(I++));Q=(P<<2)|(N>>4);O=((N&15)<<4)|(L>>2);M=((L&3)<<6)|K;H=H+String.fromCharCode(Q);if(L!=64){H=H+String.fromCharCode(O)}if(K!=64){H=H+String.fromCharCode(M)}}H=G(H);return H};var D=function(I){I=I.replace(/\r\n/g,"\n");var H="";for(var K=0;K<I.length;K++){var J=I.charCodeAt(K);if(J<128){H+=String.fromCharCode(J)}else{if((J>127)&&(J<2048)){H+=String.fromCharCode((J>>6)|192);H+=String.fromCharCode((J&63)|128)}else{H+=String.fromCharCode((J>>12)|224);H+=String.fromCharCode(((J>>6)&63)|128);H+=String.fromCharCode((J&63)|128)}}}return H};var G=function(H){var I="";var J=0;var K=c1=c2=0;while(J<H.length){K=H.charCodeAt(J);if(K<128){I+=String.fromCharCode(K);J++}else{if((K>191)&&(K<224)){c2=H.charCodeAt(J+1);I+=String.fromCharCode(((K&31)<<6)|(c2&63));J+=2}else{c2=H.charCodeAt(J+1);c3=H.charCodeAt(J+2);I+=String.fromCharCode(((K&15)<<12)|((c2&63)<<6)|(c3&63));J+=3}}}return I}};var n=function(F,E){var G=this;var D=function(){var L=this};var K=function(L){var M=this;M.addEvent=function(Q,P,R,O){if(h.addEventListener){Q.addEventListener(P,R,!!O)}else{h.attachEvent("on"+P,R)}};M.createPageViewId=function(){if(!sa.pvId){sa.pvId=N()}return sa.pvId};M.getVisitorId=function(){var Q=C;var O=M.getCookie("_snma");if(O&&O!=C){var P=O.split(f);if(P.length>=2){Q=P.slice(1,2)}}return Q};M.getSessionId=function(){var P=C;var O=M.getCookie("_snmb");if(O&&O!=C){P=O.split(f).slice(0,1)}return P};M.getCustNo=function(){return M.getCookie("custno")||C};M.getLoginUserName=function(){return M.getCookie("idsLoginUserIdLastTime")||C};M.getCommonID=function(){var U="_snma",S="_snmb",R="_snmz",X="_snmp";var O=C;var T=M.getCookie(U);if(T!=C){var Q=T.split(f);if(Q.length>=2){O=Q.slice(1,2)}}var P=M.getCookie("custno");var W=M.getCookie(S).split(f).slice(0,1);var V=M.createPageViewId();return O+f+P+f+W+f+V};M.getServer=function(){return"sa.suning.cn"};M.getProtocol=function(){return"https:"==c[p].protocol?"https://":"http://"};M.sendMessage=function(){if(E.isArrayEmpty(L.events)){return false}var S=i.event||arguments.callee.caller.arguments[0];var T=S.srcElement?S.srcElement:S.target;var O=T.id;if(!L.events.containsKey(O)){return false}var Q=L.events.get(O);if(Q==undefined||Q==null){return false}var X=T[Q.attr];if(Q.attr=="innerHTML"){X=E.removeHTMLTag(X)}X=E.removeEnterWrap(X);if(L.isSecurityTag(O)){X=E.getMaskCode(X)}if(!E.isEmpty(X)){if(X.toString().length>L.maxLength){X=X.toString().substr(0,L.maxLength)}X=E.encode(X)}var R=O+"="+X;if(!E.isArrayEmpty(L.eventWiths)){var Y=O+"&"+S.type;var U=new Array();var V=L.eventWiths.get(Y);if(E.isObject(V)){U.push(V)}else{U=V}if(!E.isArrayEmpty(U)){var P,W="";for(x in U){P=U[x];if(P==null){continue}W=M.getWithInfo(P);if(W!=""){R=R+"&"+W}}}}if(!E.isEmpty(R)){R=R+"&type=standard";M.sendByImg(R,Q.bid)}};M.getWithInfo=function(P){var U="";if(P==undefined||P==null){return U}var R=P.id;if(M.isEmpty(R)){return U}R=R.split(",");var V,O,T="",Q=false;var S=new u();for(x in R){V=R[x];if(M.isEmpty(V)){continue}if(S.contains(V)){continue}S.add(V);O=r(V);if(O==undefined||O==null){continue}T="";Q=false;if(!M.isEmpty(P.gethide)){Q=P.gethide}if(O.style.display=="none"){if(Q){T=O[P.attr]}}else{T=O[P.attr]}if(P.attr=="innerHTML"){T=E.removeHTMLTag(T)}T=E.removeEnterWrap(T);if(L.isSecurityTag(V)){T=E.getMaskCode(T)}if(!E.isEmpty(T)){if(T.toString().length>L.maxLength){T=T.toString().substr(0,L.maxLength)}T=E.encode(T)}if(T!=""){if(U==""){U=V+"="+T}else{U=U+"&"+V+"="+T}}}return U};M.sendByImg=function(T,U){try{var P=M.getCommonID(),R=(U?U:"-"),S=(new Date()).getTime(),X=M.getServer(),O=M.getProtocol(),Q=K.prototype.getCookie("idsLoginUserIdLastTime"),Q=Q?Q:C,V=L.version;T=P+f+Q+f+S+f+R+f+T+"&v="+V;X&&K.prototype.sendByImg.call(M,O+X+"/logc.gif?"+T)}catch(W){}};M.sendByImgV2=function(U,P){try{var T=M.getVisitorId(),O=M.getCustNo(),S=M.getSessionId(),Q=M.createPageViewId();_BID=P||"-",_PID=(new Date()).getTime(),_server=M.getServer(),_protocol=M.getProtocol(),_loginUserName=M.getLoginUserName(),_version=L.version;U="vid="+T+"&sid="+S+"&pvid="+Q+"&ct="+_PID+"&bizid="+_BID+U+"&v="+_version;_server&&K.prototype.sendByImg.call(M,_protocol+_server+"/excp.gif?"+U)}catch(R){}};function N(){var P=new Date();var O=Math.round(100000*Math.random());var Q=P.getTime().toString().concat(O);return Q}};D.prototype=F;K.prototype=E;var J=function(N,L,M){var O=this;O.bindEvent=function(){if(N.events==undefined||N.events==null){return false}if(N.events.keys()==null||N.events.keys().length==0){return false}var R,T,Q;var P;for(var S in N.events.getThis()){R=N.events.get(S);if(R==undefined||R==null){continue}if(L.isEmpty(R.id)){continue}T=r(R.id);if(T==undefined||T==null){continue}if(L.isEmpty(R.event)){continue}P=R.event.split(",");for(x in P){Q=P[x];if(L.isEmpty(Q)){continue}M.addEvent(T,Q,function(){L.sendMessage()})}}}};var I=function(M,L){var N=this;this.sendEvent=function(V){if(L.isArrayEmpty(M.customs)){return false}if(!M.customs.containsKey(V)){return false}var S=M.customs.get(V);if(S==undefined||S==null){return false}var P=r(V);if(P==undefined||P==null){return false}var U="";var R=P[S.attr];if(!L.isEmpty(R)){if(S.attr=="innerHTML"){R=L.removeHTMLTag(R)}R=L.removeEnterWrap(R);if(M.isSecurityTag(V)){R=L.getMaskCode(R)}if(!L.isEmpty(R)){if(R.toString().length>M.maxLength){R=R.toString().substr(0,M.maxLength)}R=L.encode(R)}U=V+"="+R}if(!L.isArrayEmpty(M.customWiths)){var Q=M.customWiths.get(V);if(!L.isArrayEmpty(Q)){var O,T="";for(x in Q){O=Q[x];if(O==null){continue}T=L.getWithInfo(O);if(T!=""){if(U==""){U=U+T}else{U=U+"&"+T}}}}}if(!L.isEmpty(U)){U=U+"&type=custom";L.sendByImg(U,S.bid)}}};var H=function(M,L){var N=this;N.sendMessage=function(V,X,O,S,R){if(V==undefined||V==null||V==""){return false}if(X==undefined||X==null){return false}if(R==undefined||R==null||R==""){R=sa.bid}if(O==undefined||O==null||O==""){var W=new t();var T=W.getDefaultConfigById(V);if(T){O=T.attr}else{O="value"}}if(S==undefined||S==null||S==""){S="_saMsgId"}var P="";var Q=r(V),U="";if(Q){U=Q[O]}if(!U){U=""}if(O=="innerHTML"){U=L.removeHTMLTag(U)}U=L.removeEnterWrap(U);if(M.isSecurityTag(V)){U=L.getMaskCode(U)}if(!L.isEmpty(U)){if(U.toString().length>M.maxLength){U=U.toString().substr(0,M.maxLength)}U=L.encode(U)}var P=V+"="+U;X=L.encode(X);P=P+"&"+S+"="+X;if(P!=""){P=P+"&type=standard";L.sendByImg(P,R)}};N.sendMsgV2=function(U){var W=U.bid||sa.bid;var R=U.type_name||C;var Z=U.error_type||C;var T=U.error_code;var Y=U.error_detail;var V=U.member_id;var O=U.member_level;var X=U.region;var Q=q.location.href;var P=navigator.userAgent;var S="";S=S+"&typname="+R+"&errtype="+Z+"&errcode="+T+"&errdetail="+encodeURIComponent(Y)+"&mbrid="+V+"&mbrlevel="+O+"&region="+X+"&url="+encodeURIComponent(Q)+"&ua="+encodeURIComponent(P);L.sendByImgV2(S,W)};N.sendJson=function(P,O){var Q="";if(O=undefined||O==null||O==""){O=sa.bid}if((typeof(P)).toLowerCase()=="object"&&!L.isArray(P)){for(x in P){Q=Q+L.encode(x,true)+"="+L.encode(P[x],true)+"&"}Q=Q[a](0,Q.length-1)}if(Q!=""){Q=Q+"&type=custom";L.sendByImg(Q,O)}}};G.startTracker=function(){var P=new D(F);var O=new K(P);var M=new z();var L=new J(P,O,M);sa.trriger=new I(P,O);var N=new H(P,O);P.events&&P.events.size()>0&&L.bindEvent();F.openAPI?(sa.openAPI={},sa.openAPI.sendMessage=N.sendMessage):false;F.openAPI?(sa.openAPI=sa.openAPI||{},sa.openAPI.sendMsgV2=N.sendMsgV2):false}};var A=new l(sa),w=new b();var e=new n(A,w);e.startTracker();sa.initTrackerConfig=function(){A=new l(sa),w=new b();e=new n(A,w);e.startTracker()};function r(G){try{var D=q.getElementById(G);if(D){return D}var E=q.getElementsByName(G);if(E&&E.length>0){D=E[0]}if(D){return D}}catch(F){}return null}})(window,document);(function(d,a){var c=function(){this.isNullAdded=false;var g={};this.contains=function(h){if(h===null){return this.isNullAdded}else{if(h===undefined){return false}else{return g[h]?true:false}}};this.add=function(h){if(h===null){this.isNullAdded=true}else{if(h!==undefined){g[h]=true}}return this};this.addAll=function(i){if(i!==null&&i!==undefined&&i instanceof Array){for(var h=0;h<i.length;h++){this.add(i[h])}}return this};this.remove=function(h){if(h===null){this.isNullAdded=false}else{if(h!==undefined){delete g[h]}}return this};this.removeAll=function(i){if(i!==null&&i!==undefined&&i instanceof Array){for(var h=0;h<i.length;h++){this.remove(i[h])}}return this};this.clear=function(){this.isNullAdded=false;g={};return this};this.size=function(){return this.list().length};this.isEmpty=function(){return this.list().length>0?false:true};this.list=function(){var h=[];if(this.isNullAdded){h.push(null)}for(o in g){if(g.hasOwnProperty(o)){h.push(o)}}return h}};var f=new c();var b=$.fn.show;$.fn.show=function(){var h=b.apply(this,arguments);try{var i=this.attr("id");if(i!=undefined&&i!=null){sa.trriger.sendEvent(i);if(!f.contains(i)){f.add(i)}}}catch(g){}return h};var e=$.fn.html;$.fn.html=function(g){var i=e.apply(this,arguments);try{var j=this.attr("id");if(j!=undefined&&j!=null){if(f.contains(j)){sa.trriger.sendEvent(j);f.remove(j)}}}catch(h){}return i}})(window,document);