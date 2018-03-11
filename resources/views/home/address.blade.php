@extends('home.public.layout')
<!-- 主体开始 -->
@section('content')
     <section class="m-buy-step w">
    <i class="line left-line n-active"></i>
    <i class="line right-line"></i>
    <p class="left n-active">
        <i></i>
        <span>购物车</span>
    </p>
    <p class="center n-active n-now">
        <i></i>
        <span>确认支付</span>
    </p>
    <p class="right">
        <i></i>
        <span>购物成功</span>
    </p>
</section>

<section class="m-select-address w">
    <div class="title">
        <strong>确认收货地址</strong>
        <a class="u-btnl">管理地址</a>
        <a class="u-btn">退出管理</a>
    </div>
    <ul class="c x06 m04 xs30">
                <li class="g new">
            <a class="wrap add">
                <i class="i-icon"></i>
                <p>添加新地址</p>
            </a>
        </li>
    </ul>
</section>


<section class="m-pay-list w" data-stuats='1' data-order="201803092039075034" data-payable="39.90">
    <div class="title">
        <strong>购物清单</strong>
    </div>
    <ul class="head c">
        <li class="cell name">产品名称</li>
        <li class="cell price">单价</li>
        <li class="cell num">数量</li>
        <li class="cell count">小计</li>
    </ul>
    <ul class="list c">
                <li>
                <div class="cell name">
                    <a class="info">
                        <img src="picture/58761ebc7d376a417e3e62f2a37f81de.jpg"/>
                        <div class="details" data-format='{"1":"117"}'>
                            <strong>爱否【水滴】坚果Pro2 大弧边钢化膜</strong>
                        </div>
                    </a>
                </div>
                <div class="cell price">
                    <span class="vlc">&#165;39.90</span>
                </div>
                <div class="cell num">
                    <span class="vlc">1</span>
                </div>
                <div class="cell count">
                    <span class="vlc">&#165;39.9</span>
                </div>
            </li>    </ul>
    <div class="use-coupon">
        <a class="u-btnl f-fr use-btn">使用</a>
        <input type="text" class="u-ipt f-fr use-code" placeholder="通关密码" value="">
    </div>    <div class="handle">
        <div class="pay-info c">
            <p class="f-fl"><span>商品总计：</span><em>&#165;39.90</em></p>
            <p class="f-fr"><span>应付金额：</span><strong>&#165;39.90</strong></p>
        </div>
        <div class="pay c">
            <a onclick="_hmt.push(['_trackEvent', 'pay', 'click', '支付宝付款'])" class="u-btn n-middle n-blue f-fr">支付宝付款</a>
            <div class="i-icon f-fr hint">
                <div class="hints">
                    <p>本站目前仅支持支付宝付款，</br>给您带来的不便还请谅解</p>
                    <i class="i-icon"></i>
                </div>
            </div>
        </div>
    </div>
    <form action="/pay/dopay.html" method="post" id="pay-form" style="display: none">
        <input name='out_trade_no' value="201803092039075034" />
    </form>
</section>     
   
@endsection
<!-- 主体结束 -->
  