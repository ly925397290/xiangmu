﻿@extends('home.public.layout')
<!-- 主体开始 -->
@section('content')
    <section class="m-process-step open w step-3">
    <div class="row c">
        <div class="step">
            <i class="line"></i>
            <p>
                <i class="spot"></i><span>商品信息</span>
            </p>
        </div>
        <div class="step">
            <i class="line"></i>
            <p>
                <i class="spot"></i><span>评估审核</span>
            </p>
        </div>
        <div class="step">
            <i class="line"></i>
            <p>
                <i class="spot"></i><span>提交订单</span>
            </p>
        </div>
        <div class="step">
            <i class="line"></i>
            <p>
                <i class="spot"></i><span>订单生成</span>
            </p>
        </div>
    </div>
</section>

<section class="m-sale-info w">
    <div class="img"><img src=""/></div>
    <div class="info">
        <div class="title"></div>
        <div class="price"><span>估价：</span><em>&#165;0</em></div>
        <p><span>估价详情：</span><em>
                </em></p>
    </div>
</section>

<section class="m-sale-data w">
    <form id="formsale" name="" action="/saleend/index.html" method="post">
        <div class="m-sale-pricecode">
            <div class="title">填写相关信息</div>
            <ul class="c x012 xs30">
                <li class="g formitm">
                    <p><strong>产品编号</strong><span>[手机填写IMEI码(拨号界面输入*#06#) / 平板填写序列号(设置-通用-关于本机)]</span></p>
                    <input id="imei" name="imei" type="text"/>
                </li>
                <li class="g formitm">
                    <p><strong>身份证号</strong><span>[根据国家相关法律法规请提供您的身份证号码]</span></p>
                    <input id="idcard" name="idcard" type="text"/>
                </li>
            </ul>
        </div>
        <section class="m-select-address w formitm">
                        <input id="address" name="address" type="hidden" value="" />
            <div class="title">
                <strong>确认收货地址</strong>
                <a class="u-btnl">管理地址</a>
                <a class="u-btn">退出管理</a>
            </div>
            <ul class="c x06 m04 xs30">
                                <li class="g new addaddress">
                    <a class="wrap">
                        <i class="i-icon"></i>
                        <p>添加新地址</p>
                    </a>
                </li>
            </ul>
        </section>
        <section class="m-select-account w formitm">
                        <input id="saleaccount" name="saleaccount" type="hidden" value="" />
            <div class="title">
                <strong>确认收款账户</strong>
                <a class="u-btnl">管理收款账户</a>
                <a class="u-btn">退出管理</a>
            </div>
            <ul class="c x06 m04 xs30">
                                <li class="g new addaccount">
                    <a class="wrap">
                        <i class="i-icon"></i>
                        <p>添加新账户</p>
                    </a>
                </li>
            </ul>
        </section>
        <div class="m-sale-handle">
            <p>为了您的隐私安全，请清除产品内的的个人信息</p>
            <a class="u-btn n-middle f-fr">提交订单</a>
        </div>
    </form>
</section>

@endsection
<!-- 主体结束 -->
   