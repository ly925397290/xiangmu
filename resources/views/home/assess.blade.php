﻿@extends('home.public.layout')
<!-- 主体开始 -->
@section('content')
    <section class="m-process-step w step-2">
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

<section class="m-recovery-info w">
    <div class="img"><img src="" alt=""/></div>
    <div class="info">
       <div class="uuper c">
          <div class="f-fl">
              <div class="title"></div>
              <div class="price"><span>估价</span><em>&#165;0</em></div>
              <div class="explain"><span>说明</span><em>工程师仔细检查后，会给您确切报价</em></div>
          </div>
           <div class="btnbox">
               <a id="confirm" class="u-btn" data-uid="148240">确定回收</a>
               <a id="reset" class="reset">重新估价</a>
           </div>
       </div>
        <div class="lower">
            <div class="desc c">
                <P class="f-fl">估价详情</P>
                <div>
                    <!--                    <span>、</span>
                                        -->
                </div>
                <i class="i-icon" ></i>
            </div>
        </div>
    </div>
</section>

<!--<section class="m-sale-info w">
    <div class="img"><img src=""/></div>
    <div class="info">
        <div class="title"></div>
        <div class="price"><span>估价：</span><em>&#165;0</em></div>
                <p><span>颜色：</span><em></em></p>
                        <div class="handle">
            <a id="confirm" class="u-btn n-middle" data-uid="148240">确定回收</a>
            <a id="reset" class="reset">重新估价</a>        
        </div>
    </div>
</section>-->

<section class="m-rule-ad w">
    <aside></aside>
    <ul class="c x06 l03 xs020">
        <li class="g ad1">
            <i class="i-icon"></i>
            <p>视频记录<br/>全程监控，安全放心</p>
        </li>
        <li class="g ad2">
            <i class="i-icon"></i>
            <p>专业评级<br/>卖的更高，卖的更快</p>
        </li>
        <li class="g ad3">
            <i class="i-icon"></i>
            <p>顺丰包邮<br/>全程顺丰，更快更省心</p>
        </li>
        <li class="g ad4">
            <i class="i-icon"></i>
            <p>顺丰包邮<br/>全程顺丰，更快更省心</p>
        </li>
    </ul>
</section>
<script>
$(function(){
    //属性折叠
    $('.m-recovery-info .desc i').click(function(){
        var lower=$(this).parents('.lower');
        var desc=$(this).parent('.desc');
        $(this).toggleClass('n');
        lower.toggleClass('selected');
        if(lower.hasClass('selected')){
            lower.append($(this).siblings('div'));
        }else{
            desc.append(desc.siblings('div'));
        }
    })

    //后退
    $('#reset').on('click',function(){
        //history.go(-1);
        location.href="/setattr/index.html";
    });

    //确定寄售
    $(document).on('click','#confirm',function(){
        var uid = $(this).data('uid');
        if(!uid){
            $('.m-login-modal').show();
        }else{
            window.location.href = "/setsale/index.html";
        }
    })
})
</script>
@endsection
<!-- 主体结束 -->
   
            
   