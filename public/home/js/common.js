$(function(){
    //短网页容错
    !function short(){
        var docHeight = $('.m-footer').height()+$('.m-footer').offset().top;
        var winHeight = $(window).height();
        if(winHeight-docHeight >= 0){
            var top = winHeight-docHeight+80;
            $('.m-footer').css('marginTop',top);
        }
    }()
   
   //返回顶部
    $(window).scroll(function () {
        var top = $(document).scrollTop();
        var windowHeight = $(window).height();
        var footerTop = $('.m-footer').offset().top;
        if ($(document).scrollTop() > 1000) {
            $('.u-tool .top').css('visibility', 'visible');
        } else {
            $('.u-tool .top').css('visibility', 'hidden');
        }
        if(top+windowHeight > footerTop){
            var bottom = top+windowHeight - footerTop + 32;
        }else{
            var bottom = 32;
        }
        $('.u-tool').css({'bottom':bottom});
    });
    $('.u-tool .top').click(function () {
        $(this).css('visibility','hidden');
        $("html,body").stop().animate({scrollTop: "0"}, 300);
    });
   
   /*
    * 会员中心菜单展开
    */
   $('.m-uc-nav nav .item').on('click',function(){
       var t = $(this);
       t.addClass('n-active');
   })
   
   //hovers
    $(document).on("mouseenter mouseleave",'.m-product-list li , .m-phead .sort , .m-user-menu a , .m-pay-list .pay .hint',function(event){
        var t = $(this);
        if(event.type === "mouseenter"){
            t.addClass('n-hover');
        }else if(event.type === "mouseleave"){
            t.removeClass('n-hover');
        }
    });
    
    //导航菜单
//    $('.m-header .nav a , .m-header .info').on('mouseenter mouseleave',function(event){
//        var t = $(this),info = $('.m-header .info');
//        var nosub = t.hasClass('n-nosub');
//        var per = t.hasClass('n-per');
//        if(event.type === "mouseenter" && !nosub && !per){
//            var cid = t.data('cid');
//            getSubMenu(info,cid);
//            if(info.find('li').length>0)info.show();
//        }else if(event.type === "mouseenter" && !nosub && per){
//            getSubPMenu(info);
//            if(info.find('li').length>0)info.show();
//        }else if(event.type === "mouseleave" && !nosub){
//            info.hide();
//        }
//    });
    
    //导航菜单 子菜单
//    function getSubMenu(info,cid){
//        if(!cid)return false;
//        $.ajax({
//            async: false,
//            url:'/Tools/getSubM',
//            type:'get',
//            data:{cid:cid},
//            dataType:'json',
//            success:function(data){
//                var sub = '';
//                $.each(data,function(i,v){
//                    
//                    sub += '<li><a href="/Category/list/id/'+v.cid+'/brand/'+v.bid+'/model/'+v.id+'.html"><img src="'+v.image+'" /><span>'+v.name+'</span></a></li>';
//                });
//                info.children('ul').empty().append(sub);
//            }
//        });
//        var more = '/Category/list/id/'+cid+'.html';
//        info.children('.more').attr('href',more);
//    }
    
    //导航菜单 配件子菜单
//    function getSubPMenu(info){
//        $.ajax({
//            async: false,
//            url:'/Tools/getSubP',
//            type:'get',
//            dataType:'json',
//            success:function(data){
//                var sub = '';
//                $.each(data,function(i,v){
//                    
//                    sub += '<li><a href="/Peripheral/index/id/'+v.id+'.html"><img src="'+v.icon+'" /><span>'+v.name+'</span></a></li>';
//                });
//                info.children('ul').empty().append(sub);
//            }
//        });
//        var more = '/Peripheral/list.html';
//        info.children('.more').attr('href',more);
//    }
    $(document).on("mouseenter",".m-header .cart",function(event){
        event.stopPropagation();
        var t = $(this);
        t.addClass('n-hover');
        t.find('.m-user-cart').show();
        getMyCar($('.m-user-cart .wrap'));
    });
    $(document).on('mouseleave','.m-header .cart',function(event){
        $(this).removeClass('n-hover');
        hideCart();
    });
    function hideCart(){
        var t = $('.m-user-cart');
        t.hide();
        t.prev('.cartStyle').removeClass('n-hover');
        clearInterval(shct);
    }
    //登录及订单显隐切换
    $(document).on("mouseenter mouseleave",".m-header .user>div",function(event){
        event.stopPropagation();
        var t=$(this);
        t.find('.menu').toggle();
    });
    
    //用户登录
    userlogin();
    function userlogin(){
        $(document).on('click','.m-header .user .login',function(){
            var is = $('.m-login-modal').length;
            if(is){
                $('.m-login-modal').show();
            }
        })
    }
    //设置购物车倒计时
    var shct;
    function setHeadCarttime(_this,headcarttime){
        //获取本地时间
        var t = parseInt((new Date()).getTime()/1000);
        //未来时间 = 本地时间 + 剩余时间
        var endtime = t+headcarttime;
        showHeadCarttime(headcarttime);
        shct = setInterval(function(){
            //剩余时间 = 未来时间 - 当前时间
            var havetime = endtime - parseInt((new Date()).getTime()/1000);
            if(havetime <= 0){
                //提示时间到了，刷新页面
                clearInterval(shct);
                getMyCar(_this);
                return false;
            }
            showHeadCarttime(havetime);
        },1000)
    }
    function showHeadCarttime(carttime){
        var minute = parseInt((carttime % 3600) / 60);
        var seconds = carttime % 60 ;
        $('.m-user-cart .pointer span').text(minute+'分'+seconds+'秒');
    }
    function getMyCar(t){
        $.ajax({
            url:'/Tools/getMyCar',
            type:'get',
            dataType:'json',
            success:function(data){
                if(t)t.empty();
                var head = '';
                var num = 0;
                var pr = 0;
                if(data.main || data.accessory){
                    if(data.main){
                        head += '<p class="pointer" data-time="'+data.carttime+'"><i class="i-icon hint"></i>请于<span> -分-秒 </span>内完成该产品的支付</p>';
                    }
                    head += '<ul>';
                    if(data.main){
                        head += '<li data-id='+data.main.id+'><a class="thumb"><img src="'+data.main.image+'"/></a><a class="details"><p class="title">'+data.main.title+'</p><p class="desc">';
                        $.each(data.prosku,function(k,v){
                            head += v.name+'：'+v.desc+'、';
                        });
                        head += '</p><p class="price">&#165;'+data.main.price+'&nbsp;&nbsp;x&nbsp;&nbsp;'+data.main.number+'</p></a><i class="i-icon delete"></i></li>';
                        num += parseFloat(data.main.number);
                        pr += parseFloat(data.main.price) * parseFloat(data.main.number);
                    }
                    if(data.accessory){
                        $.each(data.accessory,function(k,v){
                            head += '<li data-id='+v.id+'><a class="thumb"><img src="'+v.image+'"/></a><a class="details"><p class="title">'+v.title+'</p><p class="desc">';
                                    $.each(JSON.parse(v.details),function(k,v){
                                         head += data.ars[v]+'；';
                                    })
                                    head += '</p><p class="price">&#165;'+v.price+'&nbsp;&nbsp;x&nbsp;&nbsp;'+v.number+'</p></a><i class="i-icon delete"></i></li>';
                            num += parseFloat(v.number);
                            pr += parseFloat(v.price) * parseFloat(v.number);
                        })
                    }
                    head += '</ul><div class="action"><p class="cartinfo"><span class="cartcount">共有<em>'+data.number+'</em>件商品</span><span class="countprice">￥'+pr+'</span></p><a class="u-btn n-middle f-fr" href="/Cart/index">前往结算</a></div>';
                }else{
                    head += '<div class="n-none"><img src="/Public/Pc/img/car.png"><p>空空如也<br>赶紧去挑选几件中意商品吧</p></div>';
                }
                t.append(head);
                var time_el = $('.m-user-cart .pointer');
                if((time_el.length>0) && (time_el.data('time')>0)){
                   setHeadCarttime($('.m-user-cart .wrap'),time_el.data('time'));
                }
            }
        });
    }
    
    $(document).on('click','.m-user-cart i',function(e){
        $.ajax({
            url:'/Cart/delAjax',
            type:'post',
            data:{id:$(this).parents('li').data('id')},
            dataType:'json',
            async: false,
            success:function(data){
                if(data.stuats != 0){
                   $.amsg.c(data.msg,"",function(){});
                   return false;
                }
                clearInterval(shct);
                getMyCar($('.m-user-cart .wrap'));
            },
            error:function(){
                $.amsg.c('网络错误，请稍后再试...',"",function(){});
            }
        });
    })

    //slide
    slide();
    function slide(){
        var l = $('.m-slide li').length;
        var em = '<span class="n-active"><i></i></span>';
        var h = $('.m-slide li').eq(0).height();
        var i;
        var si;
        $('.m-slide ul').height(h);
        $(window).resize(function(){
            h = $('.m-slide li.n-active').height();
            $('.m-slide ul').height(h);
        });
        for(var i=1 ;  i<l ; i++ ){
            em += '<span><i></i></span>';
        }
        $('.m-slide em').html(em);
        $('.m-slide em span').on('click',function(){
            clearInterval(si);
            i = $(this).index();
            am(i);
            sistar();
        });
        $('.m-slide>a').on('click',function(){
            if($('.m-slide li').is(":animated")) return false;
            clearInterval(si);
            var nowActive=$('.m-slide em span.n-active').index()
            if($(this).hasClass("prev")){
                am(nowActive-1,"faster");
            }else{
                if(nowActive==(l-1)){
                    am(0,"faster");
                }else{
                    am(nowActive+1,"faster");
                }
            }
        });
        $('.m-slide em span').on("selectstart", function () { return false; });
        sistar();
        function sistar(){
            clearInterval(si);
            si = setInterval(function(){
                i = $('.m-slide em .n-active').index()+1;
                if(i>=l)i=0;
                am(i);
            },3000);
        }
        function am(i,faster){
            $('.m-slide em .n-active').removeClass('n-active');
            $('.m-slide em span').eq(i).addClass('n-active');
            if(!faster) {
                $('.m-slide li').eq(i).addClass('n-active').fadeIn(1000).siblings().removeClass('n-active').fadeOut(1000);
            }else{
                $('.m-slide li').eq(i).addClass('n-active').fadeIn(320).siblings().removeClass('n-active').fadeOut(320);
            }

        }
        $('.m-slide').on("mouseenter mouseleave",function(event){
            var icon= $(this).find('a.i-icon');
            if(event.type == "mouseenter"){
                icon.addClass('n');
                clearInterval(si);
            }else if(event.type == "mouseleave"){
                icon.removeClass('n');
                sistar();
            }
        })
    }
    
    //parts-recommend
    partsRecommend();
    function partsRecommend(){
        var l = $('.m-parts-recommend ul').eq(0).find('li').length;
        var count = 0;
        var countwidth;
        var liwidth = $('.m-parts-recommend ul li').outerWidth();
        var ulwidth = l*liwidth;
        var slidewidth = ulwidth*2;
        var ul;
        var slide = $('.m-parts-recommend .slide');
        $(window).resize(function(){
            liwidth = $('.m-parts-recommend ul li').outerWidth();
            ulwidth = l*liwidth;
            slidewidth = ulwidth*2;
            countwidth = count*liwidth*-1;
            $('.m-parts-recommend ul').css({'width':ulwidth});
            slide.css({'width':slidewidth,'marginLeft':countwidth});
        });
        $('.m-parts-recommend ul').css({'width':ulwidth});
        ul = slide.html();
        slide.css({'width':slidewidth}).append(ul);
        $('.m-parts-recommend .left').on('click',function(){
            if(count>=l){
                count = 0;
                countwidth = 0;
                slide.css({'marginLeft':'0'});
            }
            countwidth = ++count*liwidth*-1;
            slide.stop().animate({'marginLeft':countwidth},200);
            
        });
        $('.m-parts-recommend .left').on("selectstart", function () { return false; });
        $('.m-parts-recommend .right').on('click',function(){
            if(count<=0){
                count = l;
                countwidth = count*liwidth*-1;
                slide.css({'marginLeft':countwidth});
            }
            countwidth = --count*liwidth*-1;
            slide.stop().animate({'marginLeft':countwidth},200);
        });
        $('.m-parts-recommend .right').on("selectstart", function () { return false; });
    }

     //关闭模态框
    $(document).on('click','.m-modal .close , .m-modal .modal-backdrop',function(){
        $('.m-modal').hide();
        $('body').css({'overflow':'auto'});
    })
    //http://amsg.aoove.com/
    ;$.amsg = function(){
        var h = '<div class="p-amsg">\
                    <div class="p-wrap">\
                        <i class="p-backdrop"></i>\
                        <div class="p-content">\
                            <div class="p-header"></div>\
                            <div class="p-body"></div>\
                            <div class="p-footer">\
                                <p>\
                                    <span class="p-confirm"><a>确定</a></span>\
                                    <span class="p-cancle"><a>取消</a></span>\
                                </p>\
                            </div>\
                        </div>\
                    </div>\
                </div>';
        var p = function(m,s,t){
            var r = $(h);
            r.addClass('n-p').find('.p-wrap').empty().html('<div class="p-content"><i></i><p></p></div>');
            $("body").append(r);
            m&&setText(m,r.find('p'));
            s&&r.find('i').attr('class',s);
            !t&&(t=1000);
            setTimeout(function(){
                r.remove();
            },t);
        };
        var a = function(t,m,f,b){
            var r = $(h);
            r.addClass('n-a');
            r.find('.p-cancle').remove();
            ac(r,t,m,f,b);
        };
        var c = function(t,m,f,b){
            var r = $(h);
            r.addClass('n-c');
            ac(r,t,m,f,b);
        }
        function ac(r,t,m,f,b){
            $("body").append(r);
            t&&setText(t,r.find('.p-header'));
            m&&setText(m,r.find('.p-body'));
            b&&setButton(b,r.find('.p-footer'));
            r.find('.p-cancle').on('click',function(){
                r.remove();
            });
            r.find('.p-confirm').on('click',function(){
                r.remove();
                f&&f();
            });
        }
        function setText(m,b){
            if(typeof m == 'string'){
                b.html(m);
            }else if(typeof m == 'object' && m.left){
                b.css({'textAlign':'left'}).html(m.left);
            }else if(typeof m == 'object' && m.center){
                b.css({'textAlign':'center'}).html(m.center);
            }else if(typeof m == 'object' && m.auto){
                b.html(m.auto);
                var lineHeight = parseInt(b.css('lineHeight'));
                var height = b.height();
                if(Math.floor(height/lineHeight) <=1)
                    b.css({'textAlign':'center'});
                else
                    b.css({'textAlign':'left'});
            }
        }
        function setButton(b,footer){
            b.confirm&&footer.find('.p-confirm a').text(b.confirm);
            b.cancle&&footer.find('.p-cancle a').text(b.cancle);
        }
        return{p:p,a:a,c:c};
    }();
})