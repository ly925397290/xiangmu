/**
 * Created by 14091150 on 14-11-7.
 *
 * theme				皮肤						类型：string			默认值：'a'
 * content				静态内容					类型：string			默认值：''
 * width				宽度						类型：number			默认值：372
 * showTitle			是否显示标题栏			类型：boolean		默认值：true
 * titleTxt				标题文字					类型：string			默认值：'标题'
 * showBtn				是否显示按钮栏			类型：boolean		默认值：true
 * showClose			是否显示右上角关闭按钮		类型：boolean		默认值：true
 * btnAlign				按钮对其方式				类型：string			默认值：'center'	left/right
 * showOneBtn			是否只显示一个按钮			类型：boolean		默认值：false
 * btnYes				确定按钮文本				类型：string			默认值：'确定'
 * btnNo				取消按钮文本				类型：string			默认值：'取消'
 * yesClose				确定按钮启用关闭功能		类型：boolean		默认值：true
 * showMask				是否启用遮罩				类型：boolean		默认值：true
 * maskClose			是否启用遮罩关闭			类型：boolean		默认值：false
 * keyClose				是否启用esc关闭			类型：boolean		默认值：false
 * 						(当多个弹出层时，所有弹出层将全部关闭)
 * autoShow				是否自动弹出				类型：boolean		默认值：false
 * callback				回调函数					类型：function		默认值：null
 * closeAfter()			关闭后回调函数			类型：function		默认值：null
 *
 * callback(o, fn, e)	回调函数有3个参数，o代表当前弹出层元素集合;
 * 						包含了弹出层（.popWin），遮罩层（.popWinMask），ie6下还附带frame层（.popWinFrame）；
 * 						弹出层内容容器获取方式：o.find('.popWinContent')；
 * 						回调后，关闭弹出层方式：o.remove();
 * 						fn用于调整ajax获取内容后，添加内容到弹出层内容容器后，调整当前弹出层的位置；
 * 						用法：fn()
 * 						e是弹出层点击对象
 *
 * 标签属性
 * disablePopWin		不启用弹出层
 *
 * 调用方式
 * $(selector).popwin({
 * 		......
 * });
 *
 *
 *
 *
 *                     _oo0oo_
 *                    o8888888o
 *                    88" . "88
 *                    (| -_- |)
 *                    0\  =  /0
 *                  ___/`---'\___
 *                .' \\|     |// '.
 *               / \\|||  :  |||// \
 *              / _||||| -:- |||||- \
 *             |   | \\\  -  /// |   |
 *             | \_|  ''\---/''  |_/ |
 *             \  .-\__  '-'  ___/-. /
 *           ___'. .'  /--.--\  `. .'___
 *        ."" '<  `.___\_<|>_/___.' >' "".
 *       | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *       \  \ `_.   \_ __\ /__ _/   .-` /  /
 *   =====`-.____`.___ \_____/___.-`___.-'=====
 *                     `=---='
 *
 *   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *             佛祖开光         永无BUG
 *
 *
 */
;(function($, undefined){
	$.fn.popWin = function(options){
		var $that = this,
			defaultSetting = {
				theme: 'a',
				content: '',
				width: 372,
				showTitle: true,
				titleTxt: '\u6807\u9898',
				showBtn: true,
				showOneBtn: false,
				showClose: true,
				btnAlign: 'center',
				btnYes: '\u786e\u5b9a',
				btnNo: '\u53d6\u6d88',
				yesClose: true,
				showMask: true,
				maskClose: false,
				keyClose: false,
				autoShow: false,
				callback: null,
				closeAfter: null
			},
			settings = $.extend({}, defaultSetting, options),
			o, zindex, _html, d, c, s, frameBody, ie6;
		frameBody = window.top.document.body || window.document.body;
		zindex = $(frameBody).find('.sf-popWin').length > 0 ? $(frameBody).find('.sf-popWin:last').css('z-index')*1+14 : 14;
		ie6 = !-[1,]&&!window.XMLHttpRequest;
		o = {
			creatEle: function(){
				_html[_html.length] = '<div popid="';
				_html[_html.length] = zindex;
				_html[_html.length] = '" class="sf-popWin ';
				_html[_html.length] = settings.theme;
				_html[_html.length] = '" style="width: ';
				_html[_html.length] = settings.width;
				_html[_html.length] = 'px; z-index: ';
				_html[_html.length] = zindex+1;
				_html[_html.length] = '">';
				_html[_html.length] = settings.showTitle ? ('<div class="sf-popWinTitle">' + settings.titleTxt + (settings.showClose ? '<a class="sf-popWinClose" popwinclose href="#">&times;</a>' : '') + '</div>') : (settings.showClose ? '<a class="sf-popWinClose" popwinclose href="#">&times;</a>' : '');
				_html[_html.length] = '<div class="sf-popWinMain"><div class="sf-popWinContent">';
				_html[_html.length] = settings.content ? settings.content : '<div class="sf-popWinLoading"><i></i>\u52a0\u8f7d\u4e2d...</div>';
				_html[_html.length] = '</div></div>';
				_html[_html.length] = settings.showBtn ? ('<div class="sf-popWinBtns ' + settings.theme + ' sf-popWinBtns-' + settings.btnAlign + '"><a href="#" class="sf-popWinBtnYes"' + (settings.yesClose ? 'popwinclose' : '') + '>' + settings.btnYes + '</a>' + (settings.showOneBtn ? '' :('<a href="#" popwinclose class="sf-popWinBtnNo">' + settings.btnNo + '</a>')) + '</div>') : '';
				_html[_html.length] = '</div>';
				_html[_html.length] = settings.showMask ? ('<div popid="' + zindex + '" class="sf-popWinMask ' +('mask_' + settings.theme)+ '" style="z-index: ' + zindex + '; height: ' + d + 'px" ' + (settings.maskClose ? 'popwinclose' : '') + '></div>' + (ie6 ? ('<iframe class="sf-popWinFrame" popid="' + zindex + '" scrolling="no" frameborder="0" style="height: ' + d + 'px"></iframe>') : "")) : '<div popid="' + zindex + '" class="sf-popWinMask" style="display: none; z-index: ' + zindex + '; height: ' + d + 'px"' + (settings.maskClose ? 'popwinclose' : '') + '></div>';
			},
			bindPop: function(){
				if(settings.autoShow){
					o.showBox(frameBody);
				}else{
					$that.live('click',function(e){
						e.preventDefault();
						o.showBox(this);
					});
				}
			},
			showBox: function(ele){
				c = window.top.document.body.clientHeight || window.document.body.clientHeight;
				s = window.top.document.body.scrollHeight || window.document.body.scrollHeight;
				h = $(window.top.document).height();
				d = c > s ? c : s;
				d = d > h ? d : h;
				_html = [];
				o.creatEle();
				//console.log(_html);
				if($(frameBody).find('.sf-popWin[popid='+ zindex +']').length > 0) return;
				if($(ele).attr('disablePopWin') === undefined) $(frameBody).append(_html.join(''));
				if($.type(settings.callback) == 'function') settings.callback(o.popContentBox(), o.setPos, $(ele));
				o.setPos();
				o.closeBox();
				o.resizeMask();
			},
			closeBox: function(){
				$(frameBody).find('.sf-popWin[popid='+ zindex +'] [popwinclose],.sf-popWinMask[popid='+ zindex +'][popwinclose]').on('click',function(e){
					e.preventDefault();
					$(frameBody).find('.sf-popWin[popid='+ zindex +'], .sf-popWinMask[popid='+ zindex +'], .sf-popWinFrame[popid='+ zindex +']').remove();
					if($.type(settings.closeAfter) == 'function') settings.closeAfter();
				});
				$(document).one('keyup',function(e){
					var ev = e.keyCode || e.which;
					if(ev == 27 && settings.keyClose){
						$(frameBody).find('.sf-popWin, .sf-popWinMask, .sf-popWinFrame').remove();
					}
				});
			},
			setPos: function(){
				var obj = $(frameBody).find('.sf-popWin'),
					wh = window.top.document.documentElement.clientHeight || window.document.documentElement.clientHeight;
				obj.each(function(){
					var _this = $(this),
						_thisWidth = _this.outerWidth(), _thisHeight,
						_scrollBox = _this.find('.sf-popWinMain'),
						_titleHeight = _this.find('.sf-popWinTitle').outerHeight(),
						_btnsHeight = _this.find('.sf-popWinBtns').outerHeight(),
						_conHeight = _this.find('.sf-popWinContent').outerHeight(),
						other = _titleHeight+_btnsHeight+72,
						total = other+_conHeight;
					if(total>=wh){
						_scrollBox.css({'overflow': 'hidden', 'overflow-y': 'auto', 'height': (wh-other < 300 ? 300: wh-other)});
					}else{
						_scrollBox.removeAttr('style');
					}
					_thisHeight = _this.outerHeight();
					_this.css({marginLeft: -_thisWidth / 2, marginTop: -_thisHeight / 2});
				});
			},
			popContentBox: function(){
				return $(frameBody).find('.sf-popWin[popid='+ zindex +'], .sf-popWinMask[popid='+ zindex +'], .sf-popWinFrame[popid='+ zindex +']');
			},
			resizeMask: function(){
				$(window).resize(function(){
					c = window.top.document.body.clientHeight || window.document.body.clientHeight;
					s = window.top.document.body.scrollHeight || window.document.body.scrollHeight;
					h = $(window.top.document).height();
					d = c > s ? c : s;
					d = d > h ? d : h;
					$(frameBody).find('.sf-popWinMask').css('height',d+'px');
					o.setPos();
				});
			}
		};
		o.bindPop();
		return $that || $(frameBody);
	};











/**
 * Created by 14091150 on 15-1-8.
 *
 *
 * list				图片列表			类型：array			必须 格式:[{ url: '', src: ''},{ url: '', src: ''}]
 * 														url表示图片超链，src表示图片地址
 *
 * height			焦点图高度			类型：number			默认值：300
 * showNum			是否显示数字栏		类型：boolean		默认值：true
 * showNumTxt		数字栏是否显示数字		类型：boolean		默认值：true
 * showArr			是否显示箭头			类型：boolean		默认值：true
 * showTxt			是否显示图片说明		类型：boolean		默认值：false
 * transitionTime	过渡时间				类型：number			默认值：500
 * time				轮播间隔时间			类型：number			默认值：4000
 * effect			轮播效果				类型：string			默认值：fade		fade/horizontal
 *
 *
 * 调用方式
 * $(selector).scrollpic({
 * 		list: [{
 * 			url: '',
 * 			src: '',
 * 			txt: ''
 * 		}]
 * });
 *
 */
	$.fn.scrollpic = function(options){
		var $that = this,
			defaultSetting = {
				list: [{
					url: '',
					src: '',
					txt: '',
					width: 'auto',
					height: 'auto'
				}],
				height: 300,
				showNum: true,
				showNumTxt: true,
				showArr: true,
				showTxt: false,
				transitionTime: 500,
				time: 4000,
				effect: 'fade'
			},
			settings = $.extend({}, defaultSetting, options),
			_list = '',
			_nums = '',
			_len = settings.list.length,
			o, _html, _index;

		o = {
			build: function(){
				if(_len < 1) return;
				for(var i = 0; i < _len; i++){
					var tempUrl = settings.list[i].url || '';
					var target = '';
					if (!(tempUrl==''|| tempUrl.indexOf('javascript') != -1)) {
						target = 'target="_blank"';
					}
					if(i == 0){
						_list += '<li style="z-index: 2; opacity: 1; filter:alpha(opacity=100)" class="focusShow"><a href="'+ settings.list[i].url +'" ' + target + ' style="height:'+ settings.height +'px"><img lazy-src="'+ settings.list[i].src +'" alt="" style="margin-left: -'+ settings.list[i].width/2 +'px; margin-top: -'+ settings.list[i].height/2 +'px" /></a>'+ (settings.showTxt && settings.list[i].txt ? ('<p>'+ settings.list[i].txt +'</p>') : '') +'</li>';
						_nums += '<a href="javascript:;" focusID="'+ i +'" class="focusSel">'+ (settings.showNumTxt ? i+1 : '') +'</a>';
					}else{
						if(settings.effect == 'fade'){
							_list += '<li style="opacity: 0;  filter:alpha(opacity=0)"><a href="'+ settings.list[i].url +'" ' + target + ' style="height:'+ settings.height +'px"><img lazy-src="'+ settings.list[i].src +'" alt="" style="margin-left: -'+ settings.list[i].width/2 +'px; margin-top: -'+ settings.list[i].height/2 +'px" /></a>'+ (settings.showTxt && settings.list[i].txt ? ('<p>'+ settings.list[i].txt +'</p>') : '') +'</li>';
						}else{
							_list += '<li style="opacity: 1; visibility: hidden"><a href="'+ settings.list[i].url +'" ' + target + ' style="height:'+ settings.height +'px"><img lazy-src="'+ settings.list[i].src +'" alt="" style="margin-left: -'+ settings.list[i].width/2 +'px; margin-top: -'+ settings.list[i].height/2 +'px" /></a>'+ (settings.showTxt && settings.list[i].txt ? ('<p>'+ settings.list[i].txt +'</p>') : '') +'</li>';
						}
						_nums += '<a href="javascript:;" focusID="'+ i +'">'+ (settings.showNumTxt ? i+1 : '') +'</a>';
					}
				}
				_html = '<ul class="focusImages" style="height: '+ settings.height +'px">'+ _list +'</ul>'+ (settings.showNum ? ('<div class="focusNumBox">'+ _nums +'</div>') : '') + (settings.showArr ? ('<a href="javascript:;" class="focusPreArr"></a><a href="javascript:;" class="focusNextArr"></a>') : '');
				$that.css({position: 'relative', overflow: 'hidden'}).html(_html);
			},
			pos: function(){
				var arrObj = $that.find('.focusPreArr,.focusNextArr'),
					numObj = $that.find('.focusNumBox'),
					txtObj = $that.find('.focusImages li p');
				arrObj.css({ marginTop: -arrObj.height()/2 });
				numObj.css({ marginLeft: -numObj.width()/2 });
				if(!txtObj.length) return;
				txtObj.each(function(){
					var th = $(this).innerHeight();
					$(this).css({ top: settings.height-th});
				});
			},
			automove: function(flag){
				_index = $that.find('.focusShow').index();
				if(flag == 'pre'){
					if(_index == 0){
						o.effectchange(_index, _len-1, settings.effect, flag);
					}else{
						o.effectchange(_index, _index-1, settings.effect, flag);
					}
				}else{
					if(_index == _len-1){
						o.effectchange(_len-1, 0, settings.effect);
					}else{
						o.effectchange(_index, _index + 1, settings.effect);
					}
				}
			},
			effectchange: function(hi,si,type,dir){
				var imgList = $that.find('.focusImages li'),
					numList = $that.find('.focusNumBox a'),
					w = $that.find('.focusImages li').width();
				if(hi == si || imgList.is(':animated')) return;
				if(type == 'fade'){
					imgList.eq(hi).css({zIndex: 1}).animate({opacity: 0},settings.transitionTime,function(){
						$(this).removeClass();
					});
					imgList.eq(si).css({ zIndex: 2 }).animate({opacity: 1},settings.transitionTime,function(){
						$(this).addClass('focusShow');
					});
				}else if(type == 'horizontal'){
					imgList.css({ opacity: 1});
					if(dir == 'pre'){
						imgList.eq(hi).css({ zIndex: 1}).animate({ left: w},settings.transitionTime,function(){
							$(this).removeClass().css({visibility: 'hidden'});
						});
						imgList.eq(si).css({ left: -w , zIndex: 2, visibility: 'visible'}).animate({ left: 0 },settings.transitionTime,function(){
							$(this).addClass('focusShow');
						});
					}else{
						imgList.eq(hi).css({ zIndex: 1 }).animate({ left: -w},settings.transitionTime,function(){
							$(this).removeClass().css({visibility: 'hidden'});
						});
						imgList.eq(si).css({ left: w , zIndex: 2, visibility: 'visible'}).animate({ left: 0 },settings.transitionTime,function(){
							$(this).addClass('focusShow');
						});
					}
				}
				numList.removeClass('focusSel').eq(si).addClass('focusSel');
			},
			act: function(){
				var timer = setInterval(o.automove, settings.time),
					btns = $that.children('a'),
					tips = $that.find('.focusImages li p');
				$that.hover(function(){
					clearInterval(timer);
					btns.add(tips).fadeIn();
				},function(){
					timer = setInterval(o.automove, settings.time);
					btns.add(tips).fadeOut();
				});

				btns.click(function(e){
					e.preventDefault();
					var _name = this.className;
					switch (_name){
						case 'focusPreArr':
							o.automove('pre');
							break;
						case 'focusNextArr':
							o.automove();
							break;
					}
				});

				$that.find('.focusNumBox a').mouseover(function(){
					var showIndex = $(this).attr('focusID');
					var hideIndex = $that.find('.focusShow').index();
					var defaultIndex = $that.find('.focusNumBox .focusSel').attr('focusID');
					if(defaultIndex < showIndex){
						o.effectchange(hideIndex, showIndex, settings.effect);
					}else{
						o.effectchange(hideIndex, showIndex, settings.effect, 'pre');
					}
				});
			},
			init: function(){
				o.build();
				o.pos();
				o.act();
			}
		};
		o.init();
		return $that;
	};













/**
 * Created by 14091150 on 15-2-6.
 *
 * 验证中英文长度
 * 用法：String.checklen()
 * 返回String字节，中文算2个字节，英文算1个字节
 *
 */
	String.prototype.checklen = function(){
		var l = 0,
			a = this.split('');
		for (var i = 0; i < a.length; i++) {
			if(a[i].charCodeAt(0) < 299) {
				l++;
			}else{
				l+=2;
			}
		}
		return l;
	};




























})(jQuery);
(function(a) {
    a.fn.lightbox = function(h) {
        var t = a.extend({},
            a.fn.lightbox.defaults, h);
        return this.each(function() {
            a(this).click(function() {
                e();
                o(this);
                return false
            })
        });
        function e() {
            a("#sf-overlay").remove();
            a("#sf-lightbox").remove();
            t.inprogress = false;
            if (t.jsonData && t.jsonData.length > 0) {
                var z = t.jsonDataParser ? t.jsonDataParser: a.fn.lightbox.parseJsonData;
                t.imageArray = [];
                t.imageArray = z(t.jsonData)
            }
            var w = '<div id="sf-outerImageContainer"><div id="sf-imageContainer"><iframe id="sf-lightboxIframe" /><img id="sf-lightboxImage"><div id="sf-hoverNav"><a href="javascript://" title="' + t.strings.prevLinkTitle + '" id="sf-prevLink"></a><a href="javascript://" id="nextLink" title="' + t.strings.nextLinkTitle + '"></a></div><div id="sf-loading"><a href="javascript://" id="sf-loadingLink"><img src="' + t.fileLoadingImage + '"></a></div></div></div>';
            var y = '<div id="sf-imageDataContainer" class="fixfloat"><div id="sf-imageData"><div id="imageDetails"><span id="caption"></span><span id="numberDisplay"></span></div><div id="sf-bottomNav">';
            if (t.displayHelp) {
                y += '<span id="helpDisplay">' + t.strings.help + "</span>"
            }
            y += '<a href="javascript://" id="sf-bottomNavClose" title="' + t.strings.closeTitle + '"><img src="' + t.fileBottomNavCloseImage + '"></a></div></div></div>';
            var x;
            if (t.navbarOnTop) {
                x = '<div id="sf-overlay"></div><div id="sf-lightbox">' + y + w + "</div>";
                a("body").append(x);
                a("#sf-imageDataContainer").addClass("sf-ontop")
            } else {
                x = '<div id="sf-overlay"></div><div id="sf-lightbox">' + w + y + "</div>";
                a("body").append(x)
            }
            a("#sf-overlay").click(function() {
                l()
            }).hide();
            a("#sf-lightbox").click(function() {
                l()
            }).hide();
            a("#sf-loadingLink").click(function() {
                l();
                return false
            });
            a("#sf-bottomNavClose").click(function() {
                l();
                return false
            });
            a("#sf-outerImageContainer").width(t.widthCurrent).height(t.heightCurrent);
            a("#sf-imageDataContainer").width(t.widthCurrent);
            if (!t.imageClickClose) {
                a("#sf-lightboxImage").click(function() {
                    return false
                });
                a("#sf-hoverNav").click(function() {
                    return false
                })
            }
        }
        function v() {
            var w = new Array(a(document).width(), a(document).height(), a(window).width(), a(window).height());
            return w
        }
        function g() {
            var y, w;
            if (self.pageYOffset) {
                w = self.pageYOffset;
                y = self.pageXOffset
            } else {
                if (document.documentElement && document.documentElement.scrollTop) {
                    w = document.documentElement.scrollTop;
                    y = document.documentElement.scrollLeft
                } else {
                    if (document.body) {
                        w = document.body.scrollTop;
                        y = document.body.scrollLeft
                    }
                }
            }
            var x = new Array(y, w);
            return x
        }
        function p(y) {
            var x = new Date();
            var w = null;
            do {
                w = new Date()
            } while ( w - x < y )
        }
        function o(A) {
            a("embed, object").hide();
            var x = v();
            a("#sf-overlay").hide().css({
                width: "100%",
                height: x[1] + "px",
                opacity: t.overlayOpacity
            }).fadeIn();
            imageNum = 0;
            if (!t.jsonData) {
                t.imageArray = [];
                if (!A.rel || (A.rel == "")) {
                    t.imageArray.push(new Array(A.href, t.displayTitle ? A.title: ""))
                } else {
                    a("a").each(function() {
                        if (this.href && (this.rel == A.rel)) {
                            t.imageArray.push(new Array(this.href, t.displayTitle ? this.title: ""))
                        }
                    })
                }
            }
            if (t.imageArray.length > 1) {
                for (i = 0; i < t.imageArray.length; i++) {
                    for (j = t.imageArray.length - 1; j > i; j--) {
                        if (t.imageArray[i][0] == t.imageArray[j][0]) {
                            t.imageArray.splice(j, 1)
                        }
                    }
                }
                while (t.imageArray[imageNum][0] != A.href) {
                    imageNum++
                }
            }
            var w = g();
            var z = w[1] + (x[3] / 10);
            var y = w[0];
            a("#sf-lightbox").css({
                top: z + "px",
                left: y + "px"
            }).show();
            if (!t.slideNavBar) {
                a("#sf-imageData").hide()
            }
            u(imageNum)
        }
        function u(w) {
            if (t.inprogress == false) {
                t.inprogress = true;
                t.activeImage = w;
                a("#sf-loading").show();
                a("#sf-lightboxImage").hide();
                a("#sf-hoverNav").hide();
                a("#sf-prevLink").hide();
                a("#nextLink").hide();
                if (t.slideNavBar) {
                    a("#sf-imageDataContainer").hide();
                    a("#sf-imageData").hide();
                    k()
                } else {
                    k()
                }
            }
        }
        function k() {
            imgPreloader = new Image();
            imgPreloader.onload = function() {
                var A = imgPreloader.width;
                var w = imgPreloader.height;
                if (t.fitToScreen) {
                    var y = v();
                    var z;
                    var x = y[2] - 2 * t.borderSize;
                    var B = y[3] - 200;
                    if (imgPreloader.height > B) {
                        A = parseInt((B / imgPreloader.height) * imgPreloader.width);
                        w = B
                    } else {
                        if (imgPreloader.width > x) {
                            w = parseInt((x / imgPreloader.width) * imgPreloader.height);
                            A = x
                        }
                    }
                }
                a("#sf-lightboxImage").attr("src", t.imageArray[t.activeImage][0]).width(A).height(w);
                m(A, w)
            };
            imgPreloader.src = t.imageArray[t.activeImage][0]
        }
        function l() {
            q();
            a("#sf-lightbox").hide();
            a("#sf-overlay").fadeOut();
            a("select, object, embed").show();
            a(".hide_select").hide()
        }
        function f() {
            if (t.loopImages && t.imageArray.length > 1) {
                preloadNextImage = new Image();
                preloadNextImage.src = t.imageArray[(t.activeImage == (t.imageArray.length - 1)) ? 0 : t.activeImage + 1][0];
                preloadPrevImage = new Image();
                preloadPrevImage.src = t.imageArray[(t.activeImage == 0) ? (t.imageArray.length - 1) : t.activeImage - 1][0]
            } else {
                if ((t.imageArray.length - 1) > t.activeImage) {
                    preloadNextImage = new Image();
                    preloadNextImage.src = t.imageArray[t.activeImage + 1][0]
                }
                if (t.activeImage > 0) {
                    preloadPrevImage = new Image();
                    preloadPrevImage.src = t.imageArray[t.activeImage - 1][0]
                }
            }
        }
        function m(z, x) {
            t.widthCurrent = a("#sf-outerImageContainer").outerWidth();
            t.heightCurrent = a("#sf-outerImageContainer").outerHeight();
            var w = Math.max(200, z + (t.borderSize * 2));
            var y = (x + (t.borderSize * 2));
            t.xScale = (w / t.widthCurrent) * 100;
            t.yScale = (y / t.heightCurrent) * 100;
            wDiff = t.widthCurrent - w;
            hDiff = t.heightCurrent - y;
            a("#sf-imageDataContainer").animate({
                    width: w
                },
                t.resizeSpeed, "linear");
            a("#sf-outerImageContainer").animate({
                    width: w
                },
                t.resizeSpeed, "linear",
                function() {
                    a("#sf-outerImageContainer").animate({
                            height: y
                        },
                        t.resizeSpeed, "linear",
                        function() {
                            d()
                        })
                });
            if ((hDiff == 0) && (wDiff == 0)) {
                if (jQuery.browser.msie) {
                    p(250)
                } else {
                    p(100)
                }
            }
            a("#sf-prevLink").height(x);
            a("#nextLink").height(x)
        }
        function d() {
            a("#sf-loading").hide();
            a("#sf-lightboxImage").fadeIn("fast");
            c();
            f();
            t.inprogress = false
        }
        function c() {
            a("#numberDisplay").html("");
            if (t.imageArray[t.activeImage][1]) {
                a("#caption").html(t.imageArray[t.activeImage][1]).show()
            }
            if (t.imageArray.length > 1) {
                var x;
                x = t.strings.image + (t.activeImage + 1) + t.strings.of + t.imageArray.length;
                if (!t.disableNavbarLinks) {
                    if ((t.activeImage) > 0 || t.loopImages) {
                        x = '<a title="' + t.strings.prevLinkTitle + '" href="#" id="sf-prevLinkText">' + t.strings.prevLinkText + "</a>" + x
                    }
                    if (((t.activeImage + 1) < t.imageArray.length) || t.loopImages) {
                        x += '<a title="' + t.strings.nextLinkTitle + '" href="#" id="nextLinkText">' + t.strings.nextLinkText + "</a>"
                    }
                }
                a("#numberDisplay").html(x).show()
            }
            if (t.slideNavBar) {
                a("#sf-imageData").slideDown(t.navBarSlideSpeed)
            } else {
                a("#sf-imageData").show()
            }
            var w = v();
            a("#sf-overlay").height(w[1]);
            r()
        }
        function r() {
            if (t.imageArray.length > 1) {
                a("#sf-hoverNav").show();
                if (t.loopImages) {
                    a("#sf-prevLink,#sf-prevLinkText").show().click(function() {
                        u((t.activeImage == 0) ? (t.imageArray.length - 1) : t.activeImage - 1);
                        return false
                    });
                    a("#nextLink,#nextLinkText").show().click(function() {
                        u((t.activeImage == (t.imageArray.length - 1)) ? 0 : t.activeImage + 1);
                        return false
                    })
                } else {
                    if (t.activeImage != 0) {
                        a("#sf-prevLink,#sf-prevLinkText").show().click(function() {
                            u(t.activeImage - 1);
                            return false
                        })
                    }
                    if (t.activeImage != (t.imageArray.length - 1)) {
                        a("#nextLink,#nextLinkText").show().click(function() {
                            u(t.activeImage + 1);
                            return false
                        })
                    }
                }
                b()
            }
        }
        function s(z) {
            var A = z.data.opts;
            var w = z.keyCode;
            var x = 27;
            var y = String.fromCharCode(w).toLowerCase();
            if ((y == "x") || (y == "o") || (y == "c") || (w == x)) {
                l()
            } else {
                if ((y == "p") || (w == 37)) {
                    if (A.loopImages) {
                        q();
                        u((A.activeImage == 0) ? (A.imageArray.length - 1) : A.activeImage - 1)
                    } else {
                        if (A.activeImage != 0) {
                            q();
                            u(A.activeImage - 1)
                        }
                    }
                } else {
                    if ((y == "n") || (w == 39)) {
                        if (t.loopImages) {
                            q();
                            u((A.activeImage == (A.imageArray.length - 1)) ? 0 : A.activeImage + 1)
                        } else {
                            if (A.activeImage != (A.imageArray.length - 1)) {
                                q();
                                u(A.activeImage + 1)
                            }
                        }
                    }
                }
            }
        }
        function b() {
            a(document).bind("keydown", {
                    opts: t
                },
                s)
        }
        function q() {
            a(document).unbind("keydown")
        }
    };
    a.fn.lightbox.parseJsonData = function(c) {
        var b = [];
        a.each(c,
            function() {
                b.push(new Array(this.url, this.title))
            });
        return b
    };
    a.fn.lightbox.defaults = {
        fileLoadingImage: "images/loading.gif",
        fileBottomNavCloseImage: "images/closelabel.png",
        overlayOpacity: 0.8,
        borderSize: 10,
        imageArray: new Array,
        activeImage: null,
        inprogress: false,
        resizeSpeed: 350,
        widthCurrent: 250,
        heightCurrent: 250,
        xScale: 1,
        yScale: 1,
        displayTitle: true,
        navbarOnTop: true,
        slideNavBar: false,
        navBarSlideSpeed: 350,
        displayHelp: false,
        strings: {
            help: " \u2190 / P - previous image\u00a0\u00a0\u00a0\u00a0\u2192 / N - next image\u00a0\u00a0\u00a0\u00a0ESC / X - close image gallery",
            prevLinkTitle: "previous image",
            nextLinkTitle: "next image",
            prevLinkText: "&laquo; Previous",
            nextLinkText: "Next &raquo;",
            closeTitle: "close image gallery",
            image: "Image ",
            of: " of "
        },
        fitToScreen: false,
        disableNavbarLinks: false,
        loopImages: false,
        imageClickClose: true,
        jsonData: null,
        jsonDataParser: null
    }
})(jQuery);

/**
 * @name 		:	carousel
 * @type		:	plugin
 * @explain		:
 */
(function(d){d.fn.carousel=function(e){e=d.extend({btnPrev:null,btnNext:null,btnGo:null,mouseWheel:false,auto:null,speed:200,easing:null,vertical:false,circular:true,visible:3,start:0,scrolls:1,beforeStart:null,afterEnd:null},e||{});return this.each(function(){var n=false,l=e.vertical?"top":"left",g=e.vertical?"height":"width";var f=d(this),p=d("ul",f),i=d("li:visible",p),t=i.size(),s=e.visible;if(e.circular){p.prepend(i.slice(t-s-1+1).clone()).append(i.slice(0,s).clone());e.start+=s}var r=d("li:visible",p),o=r.size(),u=e.start;f.css("visibility","visible");r.css({overflow:"hidden","float":e.vertical?"none":"left"});p.css({margin:"0",padding:"0",position:"relative","list-style-type":"none","z-index":"1"});f.css({overflow:"hidden",position:"relative","z-index":"2",left:"0px"});var k=e.vertical?a(r):c(r);var q=k*o;var m=k*s;r.css({width:r.width(),height:r.height()});p.css(g,q+"px").css(l,-(u*k));f.css(g,m+"px");d((u-e.scrolls<0&&e.btnPrev)).addClass("prev_disabled");d((u+e.scrolls>o-s&&e.btnNext)).addClass("next_disabled");d(e.btnPrev).hover(function(){if(!d(e.btnPrev).hasClass("prev_disabled")){d(e.btnPrev).addClass("prev_hover")}},function(){d(e.btnPrev).removeClass("prev_hover")});d(e.btnNext).hover(function(){if(!d(e.btnNext).hasClass("next_disabled")){d(e.btnNext).addClass("next_hover")}},function(){d(e.btnNext).removeClass("next_hover")});if(e.btnPrev){d(e.btnPrev).click(function(){return j(u-e.scrolls)})}if(e.btnNext){d(e.btnNext).click(function(){return j(u+e.scrolls)})}if(e.btnGo){d.each(e.btnGo,function(v,w){d(w).click(function(){return j(e.circular?e.visible+v:v)})})}if(e.mouseWheel&&f.mousewheel){f.mousewheel(function(v,w){return w>0?j(u-e.scrolls):j(u+e.scrolls)})}if(e.auto){setInterval(function(){j(u+e.scrolls)},e.auto+e.speed)}function h(){return r.slice(u).slice(0,s)}function j(v){if(!n){if(e.beforeStart){e.beforeStart.call(this,h())}if(e.circular){if(v<=e.start-s-1){p.css(l,-((o-(s*2))*k)+"px");u=v==e.start-s-1?o-(s*2)-1:o-(s*2)-e.scrolls}else{if(v>=o-s+1){p.css(l,-((s)*k)+"px");u=v==o-s+1?s+1:s+e.scrolls}else{u=v}}}else{if(v<0||v>o-s){return}else{u=v}}n=true;p.animate(l=="left"?{left:-(u*k)}:{top:-(u*k)},e.speed,e.easing,function(){if(e.afterEnd){e.afterEnd.call(this,h())}n=false});if(!e.circular){d(e.btnPrev).removeClass("prev_disabled");d(e.btnNext).removeClass("next_disabled");d((u-e.scrolls<0&&e.btnPrev)).addClass("prev_disabled");d((u+e.scrolls>o-s&&e.btnNext)).addClass("next_disabled")}}return false}})};function b(e,f){return parseInt(d.css(e[0],f))||0}function c(e){return e[0].offsetWidth+b(e,"marginLeft")+b(e,"marginRight")}function a(e){return e[0].offsetHeight+b(e,"marginTop")+b(e,"marginBottom")}})(jQuery);