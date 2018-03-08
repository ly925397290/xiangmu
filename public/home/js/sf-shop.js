;var STORE =STORE || {};
STORE.fit = (function(){

    //输入获取焦点文字消失
    var textShow = function (text,defVal) {
        $(text).each(function(){
            $(this).on('focus',function(){
                if(this.tagName == "INPUT"){
                    defVal = this.defaultValue;
                }
                var v = $.trim($(this).val());
                if(v == defVal){
                    $(this).val("").css("color","#333");
                }
            });
            $(this).on('blur',function(){
                if(this.tagName == "INPUT"){
                    defVal = this.defaultValue;
                }
                var v = $.trim($(this).val());
                if(v == "" || v == defVal){
                    $(this).val(defVal).css("color","#999");
                }
            });
        });
    };



    //模拟下拉
    var simulateSelect = function(){
        $(".sf-mockselect").each(function(){
            var _selectedVal = $(this).find(".sf-subcate").find("li.sf-selected").html();
            if($(this).find(".sf-subcate li").hasClass("sf-selected")){
                $(this).find(".sf-hd h3").html(_selectedVal);
            }


            // $(this).find(".sf-hd h3").text($(".sf-subcate li"));
            $(this).click(function(){
                $(this).find(".sf-subcate").show();
            });
            $(this).hover(function(){
            },function(){
                $(this).find(".sf-subcate").hide();
            });


            //var _Option = $(this).find(".sf-seccate li");
            $(this).on("click",".sf-seccate li",function(){
                var _cLen = $(this).children().length;
                var _h3 = $(this).parents(".sf-mockselect").find(".sf-hd h3");
                if(_cLen==0){
                    _h3.text($(this).text());
                    $(this).parents(".sf-subcate").hide();
                }else{
                    $(this).off("click");
                    $(this).on("click","h5",function(){
                        _h3.text($(this).text());
                        $(this).parents(".sf-subcate").hide();
                    });
                }
            });
            $(this).on("click","li.sf-h5 b",function(){
                $(this).parents("li").toggleClass("sf-down");
                $(this).parents("li").nextAll().toggle();
            });
        });
    };

    //焦点图
    var focusImage = function(){
        $('.focusBox').each(function(){
            var data = eval($(this).attr('focus-data'));
            var h = $(this).attr('focus-height');
            var type = $(this).attr('focus-type');
            type = type ? type : 'fade';
            //console.log(data);
            $(this).scrollpic({
                list: data,
                height: h,
                effect: type,
                showNumTxt: false
            });
        });
    };

    //placeholder兼容
    var JPlaceHolder = {
        _check : function(){	//检测
            return 'placeholder' in document.createElement('input');
        },
        init : function(){		//初始化
            if(!this._check()){
                this.fix();
            }
        },
        fix : function(){		 //修复
            jQuery(':input[placeholder]').each(function(index, element) {
                var self = $(this),
                    txt = self.attr('placeholder'),
                    sw = self.outerWidth(),
                    sf = self.css('float');
                self.wrap($('<div></div>').css({position:'relative', zoom:'1', border:'none', background:'none', padding:'none', margin:'none', 'width': sw, 'float':sf}));
                var pos = self.position(),
                    h = self.outerHeight(true),
                    paddingleft = self.css('padding-left');
                var holder = $('<span></span>').text(txt).css({position:'absolute', left:pos.left, top:pos.top, height:h, lineHeight:h+'px', paddingLeft:paddingleft, color:'#aaa', border: 0,'font-family':'Arial, Helvetica, sans-serif'}).appendTo(self.parent());
                self.focusin(function(e) {
                    holder.hide();
                }).focusout(function(e) {
                        if(!self.val()){
                            holder.show();
                        }
                    });
                holder.click(function(e) {
                    holder.hide();
                    self.focus();
                });
                setInterval(function(){
                    if(self.val().length){
                        holder.hide();
                    }else{
                        holder.show();
                    }
                },10);
            });
        }
    };

    //价格区间
    var searchSlide = function(){
        $('.sf-searchLayoutConfig .sf-searchPrice input,.sf-filterType .sf-searchPrice input').live('click',function(){
            var sprice = $(this).parents('.sf-searchPrice');
			if( sprice.find('.sf-searchPlug').size() > 0 ){
				sprice.addClass('sf-searchPriceOpen').parents('.sf-layoutList').css('zIndex',2);
			}
        });
        $('body').click(function(e){
            var _o = $(e.target);
            var _s = $('.sf-searchPrice *');
            if(_o.is(_s) && _o.parents('.sf-searchPrice').find('.sf-searchPlug').is(':visible')) return;
            var sprice = $('.sf-searchLayoutConfig .sf-searchPrice,.sf-filterType .sf-searchPrice')
			if( sprice.find('.sf-searchPlug').size() > 0 ){
				sprice.removeClass('sf-searchPriceOpen').parents('.sf-layoutList').css('zIndex',1);
			}
        });
        $('.sf-searchPrice a,.sf-searchBtn').live('click',function(e){
            e.preventDefault();
            var o = $(this).parents('.sf-search');
            o = o.length ? o : $(this).parents('.sf-filterType');
            var sp = o.find('.sf-startPrice').val()*1;
            var ep = o.find('.sf-endPrice').val()*1;
            if(e.target.className == 'sf-clear'){
                o.find('.sf-searchPrice input').val('');
            }else{
                
            }
            $('.sf-searchLayoutConfig .sf-searchPrice,.sf-filterType .sf-searchPrice').removeClass('sf-searchPriceOpen')
                .parents('.sf-layoutList').css('zIndex',1);
				
			var sprice = $('.sf-searchLayoutConfig .sf-searchPrice,.sf-filterType .sf-searchPrice');
			if( sprice.find('.sf-searchPlug').size() > 0 ){
				sprice.removeClass('sf-searchPriceOpen').parents('.sf-layoutList').css('zIndex',1);
			}
        });
        setInterval(function(){
            $('.sf-searchPrice input').each(function(){
                var _val = $(this).val();
                var _check = /^[0-9]*$/.test(_val);
                if(!_check){
                    _val = _val.slice(0,_val.length-1)
                }
                $(this).val(_val);
            });
        },50);
    };

    //更多
    var slideMore = function(){
        $('.sf-filterBrand>a,.sf-filterPrice>a').live('click',function(e){
            e.preventDefault();
            var _this = $(this);
           	var _thisP = _this.toggleClass('sf-filterOpen').prev(".sf-filterBrandList");
			      var _thisPrevH1 = _thisP.height();
		     	 var filterP = $(this).parents(".sf-filters");
			      var fH = filterP.height();
            
            _thisP.toggleClass('sf-heightAuto');
            var _thisPrevH2 = _thisP.height();
		        var tH = fH+_thisPrevH2-_thisPrevH1;  
		        var tHup = fH-_thisPrevH1+_thisPrevH2;    
            if(_this.hasClass('sf-filterOpen')){
                _this.text('\u6536\u8d77');
                filterP.height(tH);
            }else{
            	filterP.height(tHup);
                _this.text('\u5c55\u5f00');
            }

        });
    };

    //商品分类导航
    var category = function(){
        $('.sf-category dt').click(function(){
            $(this).toggleClass('sf-categoryClose').next('dd').toggle();
        });
    };

    //榜单
    var floorRank = function(){
        $('.sf-floorRight li').mouseover(function(){
            $('.sf-floorRight li .sf-floorDetail').hide();
            $(this).find('.sf-floorDetail').show();
        });
    };
    
    var toggleMenu = function(){
        $('.sf-allcate').hover(function(){
            $(this).parents('.sf-moduleList').css({'zIndex': 2});
            $(this).find('dd').show();
			if($(".slideFloat").length>0){
            	$(".slideFloat").parents('.sf-layoutList').css({'zIndex': 11});
            }
        },function(){
            $(this).find('dd').hide();
            $('.sf-moreList').hide();
            $('.sf-allcate .sf-it a').removeClass('sf-sel');
			if($(".slideFloat").length>0){
	            $(".slideFloat").parents('.sf-layoutList').css({'zIndex': 15});
	        }
        });
		//导航项的悬浮颜色
        $('.sf-navbar .sf-navlist li').hover(function(){
        	if ($(this).parents('.sf-navbar').attr('navFirstcolor')) {
        		$(this).css('background-color',$(this).parents('.sf-navbar').attr('navFirstcolor'));
        	}
        },function(){
        	if ($(this).parents('.sf-navbar').attr('navBgColor')) {
        		$(this).css('background-color',$(this).parents('.sf-navbar').attr('navBgColor'));
        	}
        });
        //一级分类的悬浮颜色
        $('.sf-allcate .sf-it a').hover(function(){
        	if ($(this).parents('.sf-navbar').attr('navFirstcolor')) {
        		$(this).css('background-color',$(this).parents('.sf-navbar').attr('navFirstcolor'));
        	}
        },function(){
        	if ($(this).parents('.sf-navbar').attr('navBgColor')) {
        		$(this).css('background-color',$(this).parents('.sf-navbar').attr('navBgColor'));
        	}
        });
        //二级分类的悬浮颜色
        $('.sf-moreList a').live('mouseover',(function(){
        	if ($(this).parents('.sf-navbar').attr('navSecondcolor')) {
        		$(this).css('background-color',$(this).parents('.sf-navbar').attr('navSecondcolor'));
				$(this).parents('.sf-navbar').find('.sf-sel').css('background-color',$(this).parents('.sf-navbar').attr('navFirstcolor'));
        	}
        }));
        $('.sf-moreList a').live('mouseout',(function(){
        	if ($(this).parents('.sf-navbar').attr('navFirstcolor')) {
        		$(this).css('background-color',$(this).parents('.sf-navbar').attr('navFirstcolor'));
        	}
        }));
		//线条颜色
        if ($('.sf-navbar').attr('navFirstcolor')) {
        	$('.sf-navlist').css('border-left-color',$('.sf-navbar').attr('navFirstcolor'));
        	$('.sf-allcate dd ul li').css('border-top-color',$('.sf-navbar').attr('navFirstcolor'));
        }
        $('.sf-allcate .sf-it a').mouseover(function(){
            var _this = $(this);
            var _top = _this.position().top;
            $('.sf-moreList').css('top', _top-1);
            $('.sf-allcate .sf-it a').removeClass('sf-sel');
            _this.addClass('sf-sel');
            if(!_this.hasClass('sf-more')){
            $('.sf-moreList').hide();
                return;
            }
            var _data = eval(_this.attr('moreData'));
            var _html = [];
			//二级分类的背景颜色(如果有设置的话)
            var _color = _this.parents('.sf-navbar').attr('navFirstcolor') || 'none';
			if(_data.length > 0 && _data[0].txt){
				for(var i = 0; i < _data.length; i++){
					if(_data[i]){
						var sf_sort = _data[i]["sf-sort"] || '';
			            var sf_category_item = _data[i]["sf-category-item"] || '';
			            var attrs = sf_sort ? " sf-sort='"+sf_sort+"'" : '';
			            attrs += sf_category_item ? " sf-category-item='"+sf_category_item+"'" : "";
			            var sa_uv = _data[i]["sa-uv"] || '';
			            attrs += sa_uv ? " sa-uv='"+sa_uv+"'":"";
			            _html[_html.length] = '<a href="javascript:void(0);" style="background-color:' +_color+ '" ' +attrs+ '>'+html_encode(_data[i].txt)+'</a>';
					}
				}
				$('.sf-moreList').html(_html.join('')).show();
				if ($('.sf-navbar').attr('navFirstcolor')) {
					$('.sf-allcate li.sf-moreList a').css('border-bottom-color',$('.sf-navbar').attr('navFirstcolor'));
				}
            }else{
            	$('.sf-moreList').hide();
            }
        });
		var _cates = $('.sf-navbar .sf-subnav .sf-it a');
		for (var j = 0; j < _cates.length ; j++ ) {
			   var _catedata = eval($(_cates[j]).attr('moreData'));
               if( _catedata && _catedata.length > 0 && _catedata[0].txt){
			   }else {
				    $(_cates[j]).removeClass('sf-more');
			   }
		};
    };
    
    //视频模块：视频播放  added on 2016-2-5
    var videoPlay = function(){
		//790视频播放
    	$(".sf-shipmask").click(function(){
    		var videoUrl = $("#videoUrl").attr("videourl");
            $(this).hide();
            
            var html =  '<object width="790" height="500" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">'
			+'<param name="allowScriptAccess" value="never">'
			+'<param name="movie" value="'+videoUrl+'"/>'
			+'<param name="allowFullScreen" value="true">'
			+'<param name="autostart" value="true">'
			+'<param name="flashvars" value="MMplayerType=ActiveXn&reservelt=false&showplayinglogo=false"/>'
			+'<embed src="'+videoUrl+'" width="790" height="500" autostart="true" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" allowscriptaccess="never"/>'
			+'</object>';
            $(this).parents(".sf-noPadding").html(html);
        });
		//通栏视屏播放
    	$(".sf-shiparea a").click(function(){
    		var videoUrl = $("#videoUrl").attr("videourl");
    		var width = $("#videoUrl").attr("width") || 790;
    		var height = $("#videoUrl").attr("height") || 500;
            var html =  '<object width="'+width+'" height="'+height+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">'
			+'<param name="allowScriptAccess" value="never">'
			+'<param name="movie" value="'+videoUrl+'"/>'
			+'<param name="allowFullScreen" value="true">'
			+'<param name="autostart" value="true">'
			+'<param name="flashvars" value="MMplayerType=ActiveXn&reservelt=false&showplayinglogo=false"/>'
			+'<embed src="'+videoUrl+'" width="'+width+'" height="'+height+'" autostart="true" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" allowscriptaccess="never"/>'
			+'</object>';
            if ($("#videoUrl").find("object").length == 0) {
            	$("#videoUrl").append(html);
            }
        });
    };
    
  //编码
    function html_encode(str)   
    {   
      var s = "";   
      if (str.length == 0) return "";   
      s = str.replace(/&/g, "&gt;");   
      s = s.replace(/</g, "&lt;");   
      s = s.replace(/>/g, "&gt;");   
      s = s.replace(/ /g, "&nbsp;");   
      s = s.replace(/\'/g, "&#39;");   
      s = s.replace(/\"/g, "&quot;");   
      s = s.replace(/\n/g, "<br>");   
      return s;   
    };

	var effectContainer = {
    		flower : function() {
                var snowflakeURl = ['http://resource.sop.suning.cn/resource/sfs/project/default/o_1.png','http://resource.sop.suning.cn/resource/sfs/project/default/o_2.png','http://resource.sop.suning.cn/resource/sfs/project/default/o_3.png','http://resource.sop.suning.cn/resource/sfs/project/default/o_4.png','http://resource.sop.suning.cn/resource/sfs/project/default/o_5.png','http://resource.sop.suning.cn/resource/sfs/project/default/o_6.png'];  //js设置数组存储6张花瓣的图片
    			 var container = $("#content");
    			    visualWidth = container.width();
    			    visualHeight = container.height();
    			    //获取content的宽高
    			    function snowflake() {
    			    // 雪花容器
    			    var flakeContainer = $('#snowflake');

    			    // 随机六张图
    			    function getImagesName() {
    			        return snowflakeURl[[Math.floor(Math.random() * 6)]];
    			    }
    			    // 创建一个雪花元素
    			    function createSnowBox() {
    			        var url = getImagesName();
    			        return $('<div class="snowbox" />').css({
    			        'width': 41,
    			        'height': 41,
    			        'position': 'absolute',
    			        'backgroundSize': 'cover',
    			        'zIndex': 100000,
    			        'top': '-41px',
    			        'backgroundImage': 'url(' + url + ')'
    			    }).addClass('snowRoll');
    			    }
    			    // 开始飘花
    			    setInterval(function() {
    			        // 运动的轨迹
    			        var startPositionLeft = Math.random() * visualWidth - 100,
    			        startOpacity    = 1,
    			        endPositionTop  = visualHeight - 40,
    			        endPositionLeft = startPositionLeft - 100 + Math.random() * 500,
    			        duration        = visualHeight * 10 + Math.random() * 5000;
    			        // 随机透明度，不小于0.5
    			        var randomStart = Math.random();
    			        randomStart = randomStart < 0.5 ? startOpacity : randomStart;
    			        // 创建一个雪花
    			        var flake = createSnowBox();
    			        // 设计起点位置
    			        flake.css({
    			            left: startPositionLeft,
    			            opacity : randomStart
    			        });

    			        // 加入到容器
    			        flakeContainer.append(flake);
    			        // 开始执行动画
    			        flake.transition({
    			            top: endPositionTop,
    			            left: endPositionLeft,
    			            opacity: 0.7
    			        }, duration, 'ease-out', function() {
    			            $(this).remove() //结束后删除
    			        });
    			    }, 200);
    			    }
    			    snowflake();
    		},
    		fireworks : function () {
    			$("body").append("<canvas id='cas' width='100%' height='100%'></canvas>");
				var firecworkscanvas = document.getElementById("cas");
    			var ctx = firecworkscanvas.getContext("2d");
    			firecworkscanvas.width = window.innerWidth;
    			firecworkscanvas.height = window.innerHeight;
    			var bigbooms = [];
    			
    			function initAnimate() {
    			    drawBg();
    			    lastTime = new Date();
    			    animate();
    			}
    			
    			var lastTime;
    			function animate() {
    			    ctx.save();
    			    ctx.globalCompositeOperation = 'destination-out';
    			    ctx.globalAlpha = 0.1;
    			    ctx.fillRect(0, 0, firecworkscanvas.width, firecworkscanvas.height);
    			    ctx.restore();
    			    var newTime = new Date();
    			    if (newTime - lastTime > 800 + (window.innerHeight - 767) / 2) {
    			        var random = Math.random() * 100 > 2 ? true : false;
    			        var x = getRandom(firecworkscanvas.width / 5, firecworkscanvas.width * 4 / 5);
    			        var y = getRandom(50, 200);
    			        if (random) {
    			            var bigboom = new Boom(getRandom(firecworkscanvas.width / 3, firecworkscanvas.width * 2 / 3), 2, "#FFF", {x: x, y: y});
    			            bigbooms.push(bigboom)
    			        }
    			        else {
    			            var bigboom = new Boom(getRandom(firecworkscanvas.width / 3, firecworkscanvas.width * 2 / 3), 2, "#FFF", {
    			                x: firecworkscanvas.width / 2,
    			                y: 200
    			            }, document.querySelectorAll(".shape")[parseInt(getRandom(0, document.querySelectorAll(".shape").length))]);
    			            bigbooms.push(bigboom)
    			        }
    			        lastTime = newTime;
    			    }
    			    stars.foreach(function() {
    			        this.paint();
    			    })
    			    bigbooms.foreach(function(index) {
    			        var that = this;
    			        if (!this.dead) {
    			            this._move();
    			            this._drawLight();
    			        }
    			        else {
    			            this.booms.foreach(function(index) {
    			                if (!this.dead) {
    			                    this.moveTo(index);
    			                }
    			                else if (index === that.booms.length - 1) {
    			                    bigbooms.splice(bigbooms.indexOf(that), 1);
    			                }
    			            })
    			        }
    			    });
    			    raf(animate);
    			}
    			Array.prototype.foreach = function(callback) {
    			    for (var i = 0; i < this.length; i++) {
    			        if (this[i] !== null) callback.apply(this[i], [i])
    			    }
    			}
    			var raf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
    			        uid4=window.setTimeout(callback, 1000 / 60);
    			    };
    			firecworkscanvas.onclick = function() {
    			    var x = event.clientX;
    			    var y = event.clientY;
    			    var bigboom = new Boom(getRandom(firecworkscanvas.width / 3, firecworkscanvas.width * 2 / 3), 2, "#FFF", {x: x, y: y});
    			    bigbooms.push(bigboom)
    			}
    			var Boom = function(x, r, c, boomArea) {
    			    this.booms = [];
    			    this.x = x;
    			    this.y = (firecworkscanvas.height + r);
    			    this.r = r;
    			    this.c = c;
    			    this.boomArea = boomArea;
    			    this.theta = 0;
    			    this.dead = false;
    			    this.ba = parseInt(getRandom(80, 200));
    			    var audio = document.getElementsByTagName("audio");
    			    for (var i = 0; i < audio.length; i++) {
    			        if (audio[i].src.indexOf("shotfire") >= 0 && (audio[i].paused || audio[i].ended)) {
    			            audio[i].play();
    			            break;
    			        }
    			    }
    			}
    			Boom.prototype = {
    			    _paint: function() {
    			        ctx.save();
    			        ctx.beginPath();
    			        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    			        ctx.fillStyle = this.c;
    			        ctx.fill();
    			        ctx.restore();
    			    },
    			    _move: function() {
    			        var dx = this.boomArea.x - this.x, dy = this.boomArea.y - this.y;
    			        this.x = this.x + dx * 0.01;
    			        this.y = this.y + dy * 0.01;
    			        if (Math.abs(dx) <= this.ba && Math.abs(dy) <= this.ba) {
    			            if (this.shape) {
    			                this._shapBoom();
    			            }
    			            else this._boom();
    			            this.dead = true;
    			        }
    			        else {
    			            this._paint();
    			        }
    			    },
    			    _drawLight: function() {
    			        ctx.save();
    			        ctx.fillStyle = "rgba(255,228,150,0.3)";
    			        ctx.beginPath();
    			        ctx.arc(this.x, this.y, this.r + 3 * Math.random() + 1, 0, 2 * Math.PI);
    			        ctx.fill();
    			        ctx.restore();
    			    },
    			    _boom: function() {
    			        var fragNum = getRandom(100, 300);
    			        var style = getRandom(0, 10) >= 5 ? 1 : 2;
    			        var color;
    			        if (style === 1) {
    			            color = {
    			                a: parseInt(getRandom(128, 255)),
    			                b: parseInt(getRandom(128, 255)),
    			                c: parseInt(getRandom(128, 255))
    			            }
    			        }
    			        var fanwei = fragNum;
    			        for (var i = 0; i < fragNum; i++) {
    			            if (style === 2) {
    			                color = {
    			                    a: parseInt(getRandom(128, 255)),
    			                    b: parseInt(getRandom(128, 255)),
    			                    c: parseInt(getRandom(128, 255))
    			                }
    			            }
    			            var a = getRandom(-Math.PI, Math.PI);
    			            var x = getRandom(0, fanwei) * Math.cos(a) + this.x;
    			            var y = getRandom(0, fanwei) * Math.sin(a) + this.y;
    			            var radius = getRandom(0, 2)
    			            var frag = new Frag(this.x, this.y, radius, color, x, y);
    			            this.booms.push(frag);
    			        }
    			    },
    			    _shapBoom: function() {
    			        var that = this;
    			        putValue(ocas, octx, this.shape, 5, function(dots) {
    			            var dx = firecworkscanvas.width / 2 - that.x;
    			            var dy = firecworkscanvas.height / 2 - that.y;
    			            for (var i = 0; i < dots.length; i++) {
    			                color = {a: dots[i].a, b: dots[i].b, c: dots[i].c}
    			                var x = dots[i].x;
    			                var y = dots[i].y;
    			                var radius = 1;
    			                var frag = new Frag(that.x, that.y, radius, color, x - dx, y - dy);
    			                that.booms.push(frag);
    			            }
    			        })
    			    }
    			}
    			function putValue(firecworkscanvas, context, ele, dr, callback) {
    			    context.clearRect(0, 0, firecworkscanvas.width, firecworkscanvas.height);
    			    var img = new Image();
    			    if (ele.innerHTML.indexOf("img") >= 0) {
    			        img.src = ele.getElementsByTagName("img")[0].src;
    			        imgload(img, function() {
    			            context.drawImage(img, firecworkscanvas.width / 2 - img.width / 2, firecworkscanvas.height / 2 - img.width / 2);
    			            dots = getimgData(firecworkscanvas, context, dr);
    			            callback(dots);
    			        })
    			    }
    			    else {
    			        var text = ele.innerHTML;
    			        context.save();
    			        var fontSize = 200;
    			        context.font = fontSize + "px 宋体 bold";
    			        context.textAlign = "center";
    			        context.textBaseline = "middle";
    			        context.fillStyle = "rgba(" + parseInt(getRandom(128, 255)) + "," + parseInt(getRandom(128, 255)) + "," + parseInt(getRandom(128, 255)) + " , 1)";
    			        context.fillText(text, firecworkscanvas.width / 2, firecworkscanvas.height / 2);
    			        context.restore();
    			        dots = getimgData(firecworkscanvas, context, dr);
    			        callback(dots);
    			    }
    			}
    			function imgload(img, callback) {
    			    if (img.complete) {
    			        callback.call(img);
    			    }
    			    else {
    			        img.onload = function() {
    			            callback.call(this);
    			        }
    			    }
    			}
    			function getimgData(firecworkscanvas, context, dr) {
    			    var imgData = context.getImageData(0, 0, firecworkscanvas.width, firecworkscanvas.height);
    			    context.clearRect(0, 0, firecworkscanvas.width, firecworkscanvas.height);
    			    var dots = [];
    			    for (var x = 0; x < imgData.width; x += dr) {
    			        for (var y = 0; y < imgData.height; y += dr) {
    			            var i = (y * imgData.width + x) * 4;
    			            if (imgData.data[i + 3] > 128) {
    			                var dot = {x: x, y: y, a: imgData.data[i], b: imgData.data[i + 1], c: imgData.data[i + 2]};
    			                dots.push(dot);
    			            }
    			        }
    			    }
    			    return dots;
    			}
    			function getRandom(a, b) {
    			    return Math.random() * (b - a) + a;
    			}
    			var maxRadius = 1, stars = [];
    			function drawBg() {
    			    for (var i = 0; i < 100; i++) {
    			        var r = Math.random() * maxRadius;
    			        var x = Math.random() * firecworkscanvas.width;
    			        var y = Math.random() * 2 * firecworkscanvas.height - firecworkscanvas.height;
    			        var star = new Star(x, y, r);
    			        stars.push(star);
    			        star.paint()
    			    }
    			}
    			var Star = function(x, y, r) {
    			    this.x = x;
    			    this.y = y;
    			    this.r = r;
    			}
    			Star.prototype = {
    			    paint: function() {
    			        ctx.save();
    			        ctx.beginPath();
    			        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    			        ctx.fillStyle = "rgba(255,255,255," + this.r + ")";
    			        ctx.fill();
    			        ctx.restore();
    			    }
    			}
    			var focallength = 250;
    			var Frag = function(centerX, centerY, radius, color, tx, ty) {
    			    this.tx = tx;
    			    this.ty = ty;
    			    this.x = centerX;
    			    this.y = centerY;
    			    this.dead = false;
    			    this.centerX = centerX;
    			    this.centerY = centerY;
    			    this.radius = radius;
    			    this.color = color;
    			}
    			Frag.prototype = {
    			    paint: function() {
    			        ctx.beginPath();
    			        ctx.arc(this.x , this.y , this.radius , 0 , 2*Math.PI);
    			        ctx.fillStyle = "rgba(" + this.color.a + "," + this.color.b + "," + this.color.c + ",1)";
    			        ctx.fillRect(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2)
    			    },
    			    moveTo: function(index) {
    			        this.ty = this.ty + 0.3;
    			        var dx = this.tx - this.x, dy = this.ty - this.y;
    			        this.x = Math.abs(dx) < 0.1 ? this.tx : (this.x + dx * 0.1);
    			        this.y = Math.abs(dy) < 0.1 ? this.ty : (this.y + dy * 0.1);
    			        if (dx === 0 && Math.abs(dy) <= 80) {
    			            this.dead = true;
    			        }
    			        this.paint();
    			    }
    			}
    			
    			initAnimate();
    		},
    		snow: function(){
    			var $flake 		= $('<div class="snowboxwrap" />').css({'position': 'absolute', 'top': '-50px',"zIndex":"10000"}).html('&#10052;'),
				documentHeight 	= $(document).height(),
				documentWidth	= $(document).width(),
				defaults		= {
									minSize		: 10,		 
									maxSize		: 50,		 
									newOn		: 1000,		 
									flakeColor	: "#FFFFFF"	 
								},
				options			= $.extend({}, defaults, options);
			
			    snowinterval		= setInterval( function(){
				var startPositionLeft 	= Math.random() * documentWidth - 100,
				 	startOpacity		= 0.5 + Math.random(),
					sizeFlake			= options.minSize + Math.random() * options.maxSize,
					endPositionTop		= documentHeight - 40,
					endPositionLeft		= startPositionLeft - 100 + Math.random() * 500,
					durationFall		= documentHeight * 10 + Math.random() * 5000;
				$flake.clone().appendTo('body').css({
							left: startPositionLeft,
							//opacity: startOpacity,
							'font-size': sizeFlake,
							color: options.flakeColor
						}).animate({
							top: endPositionTop,
							left: endPositionLeft,
							opacity: 0.2
						},durationFall,'linear',function(){
							$(this).remove();
						}
					);
					
			     }, options.newOn);
	
		    },
    		stars : function() {
    			for (var i = 0; i <= 150; i++) {
    			    var size = Math.random()*7;
    			    var color = '#fff';
    			    $('#starsBox').prepend('<span style=" width: ' + size + 'px; height: ' + size + 'px; top: ' + Math.random()*100 + '%; left: '
    			        + Math.random()*100 + '%; background: ' + color + '; box-shadow: 0 0 4px 1px #134695,0 0 4px 1px #134695 inset"></span>') ;
    			};

    			setTimeout(function(){
    			    $('#starsBox span').each(function(){
    			        $(this).css('top', Math.random()*100 + '%').css('left', Math.random()*100 + '%');
    			    });
    			}, 1);

    			setInterval(function(){
    			    $('#starsBox span').each(function(){
    			        $(this).css('top', Math.random()*100 + '%').css('left', Math.random()*100 + '%');
    			    });
    			}, 100000);
    		}
    };
    
    var fullEffect = function(){
    	
    	if ($(".sf-sortbox").attr("effectShow")) {
        	var effectType = $(".sf-sortbox").attr("effectShow");
        	switch(effectType) {
            case "0" :
            	//花瓣
            	$(document.body).append('<div id="content"><div id="snowflake"></div></div>');
            	effectContainer.flower();
            	break;
            case "1" :
            	//烟花
            	effectContainer.fireworks();
            	break;
            case "2" :
            	//雪花
            	effectContainer.snow();
            	break;
            case "3" :
            	//星空
            	$(document.body).append('<div id="starsBox"></div>');
            	effectContainer.stars();
            	break;
            default :
            	break;
            }
        } 
    	
    };


    return{
    	toggleMenu : toggleMenu,
        textShow:textShow,
        focusImage:focusImage,
        category:category,
        floorRank:floorRank,
        JPlaceHolder:JPlaceHolder,
        searchSlide:searchSlide,
        simulateSelect:simulateSelect,
        slideMore:slideMore,
        videoPlay:videoPlay,
		fullEffect:fullEffect
    };
})(jQuery);


/*函数调用*/
$(function(){

    //storeFitting.initSet();
    STORE.fit.focusImage();
    STORE.fit.category();
    STORE.fit.floorRank();
    STORE.fit.JPlaceHolder.init();
    STORE.fit.searchSlide();
    STORE.fit.toggleMenu();
    STORE.fit.slideMore();
    STORE.fit.videoPlay();
	STORE.fit.fullEffect();


});