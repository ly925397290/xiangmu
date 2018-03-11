@extends('home.public.layout')
<!-- 主体开始 -->
@section('content')
     <form action="/order/cartbuy.html" method="post" id="order-form">
<input type="hidden" name="cart" id="cart" value="">
<section class="m-buy-step w">
    <i class="line left-line"></i>
    <i class="line right-line"></i>
    <p class="left n-active n-now">
        <i></i>
        <span>购物车</span>
    </p>
    <p class="center">
        <i></i>
        <span>确认支付</span>
    </p>
    <p class="right">
        <i></i>
        <span>购物成功</span>
    </p>
</section>

<section class="m-cat-list w">
    <a class="continue" href="#"><i></i><span><<-- 继续购物</span></a>
    <ul class="title c">
        <li class="cell name">产品名称</li>
        <li class="cell price">单价</li>
        <li class="cell num">数量</li>
        <li class="cell count">小计</li>
        <li class="cell action">操作</li>
    </ul>
    <ul class="list c">
                    </ul>
    <div class="handle">
        <p class="c multiple">
            <a class="checkall">
                <i class="i-icon"></i>
                <span>全选</span>
            </a>
            <a class="delete">删除所选</a>
            <a class="pricecount"><span>合计（免运费）：</span><strong>&#165;<em>0</em></strong></a>
        </p>
        <p class="c">
            <a onclick="_hmt.push(['_trackEvent', 'accounts', 'click', '结算'])" class="buy u-btn n-yellow n-middle">结算</a>
        </p>
    </div>
</section>
</form> 

@endsection
<!-- 主体结束 -->
  