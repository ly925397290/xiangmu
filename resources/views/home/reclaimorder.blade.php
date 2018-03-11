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
        <a class="item n-active" href="/saleorder/list.html"><i></i>回收服务</a>
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
            <a class="item n-active" href="/saleorder/list.html"><i></i>回收服务</a>
            <a class="item " href="/wxorder/list.html"><i></i>维修服务</a>
            <a class="item " href="/asorder/list.html"><i></i>售后服务</a>
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
        <div class="m-uc-hd other">
            <div class="title">回收订单</div>
            <div class="list">
                <a class="n-active" href="/saleorder/list.html">全部订单</a>
                <a class="" href="/saleorder/list/set/1.html">待取货</a>
                <a class="" href="/saleorder/list/set/2.html">待检测</a>
                <a class="" href="/saleorder/list/set/3.html">待确认</a>
                <a class="" href="/saleorder/list/set/4.html">已完成</a>
                <a class="other-item " href="/saleorder/list/set/5.html">已取消</a>
            </div>
        </div>
        <div class="m-order-list">
            <ul>
                            </ul>
        </div>
    </div>
<!--    <div class="main">
        <div class="m-uc-title">
            <nav>
                <a  href="/saleorder/list/set/1.html">待取货</a>
                <a  href="/saleorder/list/set/2.html">待检测</a>
                <a  href="/saleorder/list/set/3.html">待确认</a>
                <a  href="/saleorder/list/set/4.html">已完成</a>
                <a  href="/saleorder/list/set/5.html">已取消</a>
            </nav>
        </div>
        <div class="m-order-list">
            <div class="m-none c">
                    <img src="picture/list.png"/>
                    <p>没有相关订单</p>
                </div>
                    </div>
    </div>-->
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
    //展现时间轴
    $(document).on('click','.m-order-list .title strong',function(){
        var prt = $(this).parent();
        $(this).toggleClass('n-active');
        prt.siblings('.step').toggle();
        prt.siblings('.address').toggle();
    })
    
    //取消回收
    $(document).on('click','.cancel',function(){
        var id = $(this).parents('.action').data('id');
        var title = $(this).parents('.action').data('imei');
        $.amsg.c('取消','您确定取消产品IMEI【'+title+'】回收吗？',function(){
            $.ajax({
                url:"/saleset/canclesaleajax.html",
                type:'post',
                data:{id:id},
                dataType:'json',
                success:function(data){
                    if(data.status == 0){
                        location.reload(true);
                    }else{
                        $.amsg.a('提示',data.msg,function(){});
                    }
                },
                error:function(){
                    $.amsg.a("网络错误，请稍后再试...","",function(){});
                }
            });
        })
    });
    
        
    //确认回收
    $(document).on('click','.m-order-list .confirmsale',function(){
        var id = $(this).parents('.action').data('id');
        $.amsg.c("当您点击按钮确认交易后，爱否商城将无法退回您的设备。","",function(){
            $.ajax({
                url:"/saleset/confirmsaleajax.html",
                type:'post',
                data:{id:id},
                dataType:'json',
                success:function(data){
                    if(data.status == 0){
                        $.amsg.a('将在二个工作日内为您转账','',function(){
                            location.href = "/saleorder/list/set/4.html";
                        })
                    }else{
                        $.amsg.a(data.msg,"",function(){});
                    }
                }
            });
        });
    });
    
    //提示
    $(document).on('click','.checkbill',function(){
        var id = $(this).parents('.order').find('.action').data('id');
        location.href = "/saleinfo/report.html"+'?id='+id;
//        var id = $(this).parents('.order').find('.action').data('id');
//        $.ajax({
//            url:"/saleinfo/testerror.html",
//            type:'post',
//            data:{id:id},
//            dataType:'json',
//            success:function(data){
//                if($('#onlyone'))$('#onlyone').remove();
//                $('body').append(data.html);
//            },
//            error:function(){
//                $.amsg.a("网络错误，请稍后再试...","",function(){});
//            }
//        });
    });
    
    //物流信息
    $(document).on('click','.m-order-list .action a.logistics',function(){
        var no = $(this).parents('.action').data('no');
        $.ajax({
            url: "/logistics/no.html",
            type: 'post',
            data: {no:no},
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
            //如果没有了 lock = true
            lock = true;
            $.getJSON("/saleorder/more.html",{set:"",p:page},function(data){
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
   