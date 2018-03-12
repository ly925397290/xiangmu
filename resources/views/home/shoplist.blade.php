﻿@extends('home.public.layout')
<!-- 主体开始 -->
@section('content')
    <section class="m-uc-user">
    <div class="w">
        <div class="user">
            <a class="avatar"><img src="picture/a40db3cc250a40049320ae74bd800426.gif"/></a>
            <span>Mr.feng</span>
            <p class="phone">绑定手机号：13520249366<span><a href="">修改</a></span></p>
        </div>
    </div>
</section>
<section class="m-uc w">
<aside class="m-uc-nav">
    <nav>
        <div class="list">
            <h3>我的订单</h3>
            <a class="item n-active" href="#"><i></i>购买订单</a>
            <a class="item " href="#"><i></i>回收服务</a>
            <a class="item " href="#"><i></i>维修服务</a>
            <a class="item " href="#"><i></i>售后服务</a>
        </div>
        <div class="list">
            <h3>信息管理</h3>
            <a class="item " href="#"><i></i>地址管理</a>
            <a class="item " href="#"><i></i>账户管理</a>
        </div>
        <div class="list">
            <h3><a href="#"><i></i>常见问题</a></h3>
        </div>
    </nav>
</aside> 
    <div class="main">
        <div class="m-uc-hd">
            <div class="title">购买订单</div>
            <div class="list">
                <a class="n-active" href="/order/list.html">全部订单</a>
                <a  href="#">待付款</a>
                <a  href="#">待发货</a>
                <a  href="#">已发货</a>
                <a  href="#">已完成</a>
            </div>
        </div>
        <div class="m-order-list">
            <ul>
                <li class="item">
                    <div class="title">
                        <strong><span>订单号：201803092039075034</span><i class="i-icon"></i></strong>
                        <em>等待买家付款</em>
                                            </div>
                                        <ul class="step c x03">
                        <li class="g n-active">
                            <i class="dot"></i>
                            <p class="status">下单</p>
                            <p class="date">2018-03-09</p>
                            <p class="time">20:39:07</p>
                        </li>
                        <li class="g ">
                            <i class="line"></i>
                            <i class="dot"></i>
                            <p class="status">付款</p>
                            <p class="date"></p>
                            <p class="time"></p>
                        </li>
                        <li class="g ">
                            <i class="line"></i>
                            <i class="dot"></i>
                            <p class="status">发货</p>
                            <p class="date"></p>
                            <p class="time"></p>
                        </li>
                        <li class="g ">
                            <i class="line"></i>
                            <i class="dot"></i>
                            <p class="status">完成</p>
                        </li>
                    </ul>                    <div class="address">
                        <p>收货人：</p>
                        <p>联系电话：</p>
                        <p>详细地址：</p>
                    </div>
                    <div class="order c" data-order='201803092039075034'>
                                                <ul class="left-cell f-fl c">
                                                        <li class="order-detail c">
                                    <a href="#"><img src="picture/58761ebc7d376a417e3e62f2a37f81de.jpg"></a>
                                    <div class="details c">
                                        <strong data-format='{"1":"117"}'>爱否【水滴】坚果Pro2 大弧边钢化膜</strong>
                                        <p class="price">&#165;39.90 X 1</p>
                                                                            </div>
                                </li>                        </ul>
                        <div class="action right-cell f-fr c" data-order='201803092039075034'>
                            <p class="priceinfo"><span>合计：</span><strong>&#165;39.90</strong></p>
                            <div class="handle">
                                    <a class="u-btn n-yellow f-fr" href="/order/pay/order/201803092039075034.html">付款</a>
                                    <a class="u-btn n-gray f-fr cancel">取消订单</a>
                                </div>
                                                    </div>
                    </div>
                </li>            </ul>
        </div>
    </div>
</section>
<script>
function setCarttime(starttime,el){
    //获取本地时间
    var t = parseInt((new Date()).getTime()/1000);
    //未来时间 = 本地时间 + 剩余时间
    var endtime = t+starttime;
    showCarttime(starttime,el);
    var si = setInterval(function(){
        //剩余时间 = 未来时间 - 当前时间
        var havetime = endtime - parseInt((new Date()).getTime()/1000);
        if(havetime <= 0){
            clearInterval(si);
            cancelOrder(el.parents('.order').data('order'));
        }
        showCarttime(havetime,el);
    },1000)
}
function showCarttime(carttime,el){
    var minute = parseInt((carttime % 3600) / 60);
    var seconds = carttime % 60 ;
    el.text(minute+'分'+seconds+'秒');
}
function cancelOrder(id){
    $.ajax({
        async: false,
        url:'/order/timecancelajax.html',
        type:'post',
        data:{order:id},
        dataType:'json',
        success:function(data){
            if(data.status == 0){
                $.amsg.a("产品锁定已过期",'',function(){
                    location.reload(true);
                });
            }else if(data.status == 100){
                location.reload(true);
            }else{
                $.amsg.a("程序出错啦~",'',function(){
                    location.reload(true);
                });
            }
        }
    });
}
$(function(){
    var ars = {
    "1": "\u767d\u8272",
    "2": "\u9ed1\u8272",
    "5": "\u91d1\u8272",
    "6": "\u9ec4\u8272",
    "15": "WIFI",
    "16": "\u84dd\u8272",
    "17": "\u4e09\u7f51\u7248",
    "18": "\u666e\u901a\u8054\u901a\u7248",
    "19": "\u7535\u4fe1\u5b9a\u5236\u7248",
    "20": "\u53cc4G\u7248\u672c",
    "21": "\u79fb\u52a8\u5b9a\u5236\u7248",
    "22": "\u5168\u7f51\u7248",
    "23": "8G",
    "24": "16G",
    "25": "32G",
    "26": "64G",
    "27": "128G",
    "28": "\u7eff\u8272",
    "29": "\u7c89\u8272",
    "30": "WiFi\u7248",
    "31": "Cellular\u7248",
    "32": "\u7ef4\u4fee\u8fc7",
    "33": "\u65e0\u7ef4\u4fee",
    "34": "\u63a5\u8fd1\u65b0\u673a",
    "35": "\u8f7b\u5fae\u5212\u75d5",
    "36": "\u4e25\u91cd\u78d5\u78b0",
    "37": "\u5269\u4f59\u4e00\u4e2a\u6708\u4ee5\u4e0a",
    "38": "\u5269\u4f59\u4e00\u4e2a\u6708\u4ee5\u5185",
    "39": "\u4e0d\u5728\u4fdd\u4fee\u671f",
    "40": "\u53ef\u89e3\u9664",
    "41": "\u4e0d\u53ef\u89e3\u9664",
    "42": "\u65e0\u7ef4\u4fee",
    "43": "\u7ef4\u4fee\u8fc7",
    "44": "\u65e0\u8fdb\u6c34",
    "45": "\u6709\u8fc7\u8fdb\u6c34",
    "46": "\u987a\u4e30",
    "47": "\u5168\u5cf0",
    "48": "\u73ab\u7470\u91d1",
    "49": "\u7ea2\u8272",
    "51": "\u7eff",
    "52": "\u9ad8\u900f",
    "53": "\u900f\u660e",
    "54": "\u5355\u5f20",
    "55": "\u4e24\u5f20\u7279\u4ef7\u5957\u9910",
    "59": "\u900f\u767d",
    "60": "\u900f\u9ed1",
    "61": "\u5b9e\u9ed1",
    "62": "\u900f\u767d\uff08\u4e24\u4e2a\uff09",
    "63": "\u900f\u9ed1\uff08\u4e24\u4e2a\uff09",
    "64": "\u5b9e\u9ed1\uff08\u4e24\u4e2a\uff09",
    "65": "\u900f\u767d+\u900f\u9ed1",
    "66": "\u900f\u767d+\u5b9e\u9ed1",
    "67": "\u900f\u9ed1+\u5b9e\u9ed1",
    "68": "\u4eae\u9ed1",
    "69": "\u4eae\u9ed1\uff08\u4e24\u4e2a\uff09",
    "70": "\u73ab\u7470\u91d1\uff08\u4e24\u4e2a\uff09",
    "71": "\u900f\u767d+\u73ab\u7470\u91d1",
    "72": "\u900f\u9ed1+\u73ab\u7470\u91d1",
    "73": "\u4e09\u5f20\u7279\u4ef7\u5957\u9910",
    "74": "24W\u5145\u7535\u5934+\u82f9\u679cLightning\u6570\u636e\u7ebf",
    "75": "\u767d\u8272 \u9650\u91cf\u4f18\u60e0",
    "76": "24W\u5145\u7535\u5668+\u539f\u88c5Lightning\u6570\u636e\u7ebf",
    "77": "\u5b9e\u7ea2",
    "78": "\u5b9e\u7ea2\uff08\u4e24\u4e2a\uff09",
    "79": "\u540c\u673a\u578b\u8584\u8377\u7cd6\u94a2\u5316\u819c \u7acb\u51cf10\u5143\uff08\u52ff\u5355\u62cd\uff09",
    "80": "\u58f3\u819c\u5957\u9910 \u7acb\u51cf10\u5143\uff08\u58f3\u548c\u819c\u90fd\u8bf7\u5230\u58f3\u9875\u9762\u62cd\u4e0b\uff09",
    "81": "iPhone 7 \u7ea2\u8272",
    "82": "iPhone 7 \u9ed1\u8272",
    "83": "iPhone 7 Plus \u7ea2\u8272",
    "84": "iPhone 7 Plus \u9ed1\u8272",
    "85": "iPhone 6\/6s \u7ea2\u8272",
    "86": "iPhone 6\/6s \u70ad\u7070\u8272",
    "87": "iPhone 6 Plus\/6s Plus \u7ea2\u8272",
    "88": "iPhone 6 Plus\/6s Plus \u70ad\u7070\u8272",
    "89": "iPhone 7 \u9752\u96fe\u84dd",
    "90": "iPhone 7 Plus \u9752\u96fe\u84dd",
    "91": "iPhone 6\/6s \u5348\u591c\u84dd",
    "92": "iPhone 6 Plus\/6s Plus \u5348\u591c\u84dd",
    "93": "\u524d\u819c\uff08\u4e00\u5f20\uff09",
    "94": "\u524d\u819c\uff08\u4e24\u5f20\uff09",
    "95": "\u80cc\u819c\uff08\u4e00\u5f20\uff09",
    "96": "\u80cc\u819c\uff08\u4e24\u5f20\uff09",
    "97": "\u524d\u819c+\u80cc\u819c",
    "98": "\u767d\u7802\u7cd6",
    "99": "\u767d\u7802\u7cd6\uff08\u4e24\u4e2a\uff09",
    "100": "iPhone 8 \u7ea2\u8272",
    "101": "iPhone 8 \u9ed1\u8272",
    "102": "iPhone 8 Plus \u7ea2\u8272",
    "103": "iPhone 8 Plus \u9ed1\u8272",
    "104": "iPhone X \u9ed1\u8272",
    "105": "iPhone X \u7ea2\u8272",
    "106": "\u9ed1\u8272\uff08\u666e\u901a\u6b3e\uff09",
    "107": "\u9ed1\u8272\uff08\u9632\u5c18\u7ec8\u6781\u7248\uff09",
    "108": "\u9ed1\u8272\uff08\u9632\u5c18\u7ec8\u6781\u7248\uff09\u4e24\u5f20\u7279\u4ef7\u5957\u9910",
    "109": "\u6697\u591c\u9ed1",
    "110": "\u70c8\u7130\u7ea2",
    "111": "\u5e7d\u5170\u7eff",
    "112": "\u51b0\u6676\u84dd",
    "113": "\u6a31\u82b1\u7c89",
    "114": "\u6a44\u6984\u7070",
    "115": "\u667a\u80fd\u94a2\u5316\u819c+\u8d85\u89e6\u611f\u4fdd\u62a4\u58f3",
    "116": "\u8d85\u89e6\u611f\u4fdd\u62a4\u58f3",
    "117": "\u4e00\u5f20",
    "118": "\u4e24\u5f20",
    "119": "\u5c0f\u7c736\u4e00\u5f20",
    "120": "\u5c0f\u7c736\u4e24\u5f20",
    "121": "MIX2\u4e00\u5f20",
    "122": "MIX2\u4e24\u5f20",
    "123": "\u5c0f\u7c736",
    "124": "MIX2\u8d85\u89e6\u611f\u4fdd\u62a4\u58f3",
    "125": "\u4e00\u5f20+\u8d85\u89e6\u611f\u4fdd\u62a4\u58f3",
    "126": "\u4e24\u5f20+\u8d85\u89e6\u611f\u4fdd\u62a4\u58f3",
    "127": "\u5c0f\u7c736\u4e00\u5f20+\u8d85\u89e6\u611f\u4fdd\u62a4\u58f3",
    "128": "\u5c0f\u7c736\u4e24\u5f20+\u8d85\u89e6\u611f\u4fdd\u62a4\u58f3",
    "129": "MIX2\u4e00\u5f20+\u8d85\u89e6\u611f\u4fdd\u62a4\u58f3",
    "130": "MIX2\u4e24\u5f20+\u8d85\u89e6\u611f\u4fdd\u62a4\u58f3",
    "131": "iPhone X",
    "132": "iPhone 7Plus\/8Plus",
    "133": "\u575a\u679c Pro 2",
    "134": "iPhone 6\/7\/8",
    "135": "iPhone X \u4e24\u5f20",
    "136": "iPhone 7Plus\/8Plus \u4e24\u5f20",
    "137": "\u575a\u679c Pro 2 \u4e24\u5f20",
    "138": "iPhone 6\/7\/8 \u4e24\u5f20",
    "139": "10\u5143\u987a\u4e30\u5305\u90ae",
    "140": "15\u5143\u987a\u4e30\u5305\u90ae"
};
var dlist = {
    "1": "\u989c\u8272",
    "2": "\u5185\u5b58",
    "5": "\u7248\u672c",
    "11": "\u54c1\u76f8",
    "12": "\u9500\u552e\u533a\u57df",
    "13": "\u5269\u4f59\u4fdd\u4fee\u671f",
    "14": "iCloud \u8d26\u53f7",
    "15": "\u7ef4\u4fee\u8bb0\u5f55",
    "16": "\u8fdb\u6c34\u60c5\u51b5",
    "17": "\u7269\u6d41\u65b9\u5f0f"
};
var rating = {
    "1": "S",
    "2": "A",
    "3": "B",
    "4": "C",
    "5": "D",
    "6": "H"
};
    //显示规格
    $('[data-format]').each(function(i,el){
        var format = $(el).data('format');
        if(format){
            var ftxt = '';
            $.each(format,function(k,v){
                    ftxt += ' '+ars[v]+' ';
            })
            $(el).append(ftxt);
        }
    })
    //显示评级
   $('[data-rating]').each(function(i,el){
        var k = $(el).data('rating');
        if(k){
             $(el).prepend('等级:'+rating[k]+'、');
        }
   })
    $(document).on('click','.m-order-list .title strong',function(){
        var prt = $(this).parent();
        $(this).toggleClass('n-active');
        prt.siblings('.step').toggle();
        prt.siblings('.address').toggle();
    })
    $(document).on('click','.m-uc-user .phone',function(){
        $.ajax({
            url:'/bindphone/change.html',
            type:'get',
            dataType:'json',
            success:function(data){
                if($('#onlyone'))$('#onlyone').remove();
                $('body').append(data.html);
            }
        });
    })
    //取消订单
    $(document).on('click','.m-order-list .action a.cancel',function(){
         var order = $(this).parents('.action').data('order');
         $.amsg.c('取消订单','确认要取消订单？',function(){
             $.ajax({
                 url: "/order/cancelajax.html",
                 type: 'post',
                 data: {order:order},
                 dataType: 'json',
                 success: function (data) {
                     if(data.status !=0){
                         $.amsg.c(data.msg,'',function(){});
                     }else{
                         location.reload(true);
                     }
                 },
                 error:function(){
                     $.amsg.c("网络错误，请稍后再试...",'',function(){});
                 }
             });
         })
     })
     //确认收货
     $(document).on('click','.m-order-list .action a.confirm',function(){
         var order = $(this).parents('.action').data('order');
         $.ajax({
             url: "/order/confirmajax.html",
             type: 'post',
             data: {order:order},
             dataType: 'json',
             success: function (data) {
                 if(data.status !=0){
                     $.amsg.c(data.msg,'',function(){});
                 }else{
                     window.location.href = "/order/list/s/4.html";
                 }
             },
             error:function(){
                 $.amsg.c("网络错误，请稍后再试...",'',function(){});
             }
         });
     })
    //删除订单
    $(document).on('click','.m-order-list .action a.delete',function(){
         var order = $(this).parents('.action').data('order');
         $.amsg.c('删除订单','确认要删除订单？',function(){
             $.ajax({
                 url: "/order/deleteajax.html",
                 type: 'post',
                 data: {order:order},
                 dataType: 'json',
                 success: function (data) {
                     if(data.status !=0){
                         $.amsg.c(data.msg,'',function(){});
                     }else{
                         window.location.href = "/order/list.html";
                     }
                 },
                 error:function(){
                     $.amsg.c("网络错误，请稍后再试...",'',function(){});
                 }
             });
         })
     })
    //物流信息
    $(document).on('click','.m-order-list .action a.logistics',function(){
        var order = $(this).parents('.action').data('order');
        $.ajax({
            url: "/logistics/no.html",
            type: 'post',
            data: {number:order},
            dataType: 'json',
            success: function (data) {
                if($('.m-modal'))$('.m-modal').remove();
                $('body').append(data.html);
            },
            error:function(){
                $.amsg.c("网络错误，请稍后再试...",'',function(){});
            }
        });
     })
    //加载更多
    var page = 2;
    var lock = false;
    $(window).scroll(function(){
        if(lock)return;
        var top = $(document).scrollTop();
        var windowHeight = $(window).height();
        var footerTop = $('.m-footer').offset().top;
        if(top+windowHeight+60 >footerTop){
            //alert('加载更多')
            //如果没有了 lock = tru
            lock = true;
            $.getJSON("/order/more.html",{source:"",p:page},function(data){
                if(data.html){
                    $('.m-order-list>ul').append(data.html);
                    page = data.next;
                    lock = false;
                }else{
                    lock = true;
                }
            });
        }
    });
    
 })
</script>

@endsection
<!-- 主体结束 -->
   