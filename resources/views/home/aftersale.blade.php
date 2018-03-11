@extends('home.public.layout')
<!-- 主体开始 -->
@section('content')
    <section class="m-uc-user">
    <div class="w">
        <div class="user">
            <a class="avatar"><img src="picture/a40db3cc250a40049320ae74bd800426.gif"/></a>
            <span>Mr.feng</span>
            <p class="phone">绑定手机号：13520249366<span>修改</span></p>
        </div>
    </div>
</section>
<section class="m-uc w">
     <!--<aside class="m-uc-nav">
    <h3>个人中心</h3>
    <nav>
        <a class="item " href="/order/list.html"><i></i>购买订单</a>
        <a class="item " href="/solutionorder/list/s/1.html"><i></i>解用服务</a>
        <a class="item " href="/saleorder/list.html"><i></i>回收服务</a>
        <a class="item " href="/wxorder/list.html"><i></i>维修服务</a>
        <a class="item " href="/address/index.html"><i></i>地址管理</a>
        <a class="item " href="/account/index.html"><i></i>账户管理</a>
        <a class="item" href="/help/help.html#sale"><i></i>常见问题</a>
    </nav>
</aside>-->
<aside class="m-uc-nav">
    <nav>
        <div class="list">
            <h3>我的订单</h3>
            <a class="item " href="/order/list.html"><i></i>购买订单</a>
            <a class="item " href="/saleorder/list.html"><i></i>回收服务</a>
            <a class="item " href="/wxorder/list.html"><i></i>维修服务</a>
            <a class="item n-active" href="/asorder/list.html"><i></i>售后服务</a>
        </div>
        <div class="list">
            <h3>信息管理</h3>
            <a class="item " href="/address/index.html"><i></i>地址管理</a>
            <a class="item " href="/account/index.html"><i></i>账户管理</a>
        </div>
<!--        <div class="list">
            <h3>售后服务</h3>
            <a class="item " href="/Address/index.html"><i></i>进度查询</a>
            <a class="item " href="/Account/index.html"><i></i>申请售后</a>
        </div>-->
        <div class="list">
            <h3><a href="/help/help.html#sale"><i></i>常见问题</a></h3>
        </div>
    </nav>
</aside> 
    <div class="main">
        <div class="m-uc-hd">
            <div class="title">售后订单</div>
            <div class="list">
                <a class="n-active" href="/asorder/list.html">全部订单</a>
                <a  href="/asorder/list/s/1.html">待审核</a>
                <a  href="/asorder/list/s/2.html">待取货</a>
                <a  href="/asorder/list/s/3.html">待检测</a>
                <a  href="/asorder/list/s/4.html">待处理</a>
                <a  href="/asorder/list/s/41.html">待确认</a>
                <a  href="/asorder/list/s/5.html">待发货</a>
                <a  href="/asorder/list/s/6.html">待收货</a>
                <a  href="/asorder/list/s/7.html">已完成</a>
            </div>
        </div>
        <div class="m-order-list">
            <div class="m-none c">
                    <img src="picture/list.png"/>
                    <p>没有相关售后单</p>
                </div>
                    </div>
    </div>
</section>
<script>
$(function(){
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
         $.amsg.c('取消','确认要取消售后订单？',function(){
             $.ajax({
                 url: "/asorder/cancelajax.html",
                 type: 'post',
                 data: {order:order},
                 dataType: 'json',
                 success: function (data) {
                    if(data.status !=0){
                        $.amsg.c(data.msg,'',function(){});
                        return false;
                    }
                    location.reload(true);
                 },
                 error:function(){
                     $.amsg.c("网络错误，请稍后再试...",'',function(){});
                 }
             });
         })
     })
     //收货
    $(document).on('click','.m-order-list .action a.collect',function(){
         var order = $(this).parents('.action').data('order');
         $.amsg.c('收货','确认已收货，完成售后订单？',function(){
             $.ajax({
                 url: "/asorder/collectajax.html",
                 type: 'post',
                 data: {order:order},
                 dataType: 'json',
                 success: function (data) {
                    if(data.status !=0){
                        $.amsg.c(data.msg,'',function(){});
                        return false;
                    }
                    location.reload(true);
                 },
                 error:function(){
                     $.amsg.c("网络错误，请稍后再试...",'',function(){});
                 }
             });
         })
     })
     $(document).on('click','.m-order-list .action a.collect1',function(){
         var order = $(this).parents('.action').data('order');
         $.amsg.c('收货','确认已收货，完成售后订单？',function(){
             $.ajax({
                 url: "/asorder/collect1ajax.html",
                 type: 'post',
                 data: {order:order},
                 dataType: 'json',
                 success: function (data) {
                    if(data.status !=0){
                        $.amsg.c(data.msg,'',function(){});
                        return false;
                    }
                    location.reload(true);
                 },
                 error:function(){
                     $.amsg.c("网络错误，请稍后再试...",'',function(){});
                 }
             });
         })
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
            //如果没有了 lock = true
            lock = true;
            $.getJSON("/asorder/more.html",{source:"",p:page},function(data){
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
   
            
