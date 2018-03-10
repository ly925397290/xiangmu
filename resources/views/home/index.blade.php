﻿@extends('home.public.layout')
<!-- 主体开始 -->
@section('content')
    <section class="m-slide">
    <ul>
        <li style="background-color: ;">
            <a href="#">
                <img src="picture/fd9f2d043ee711118b80868e36fed6ef.jpg"/>
            </a>
        </li>
        <li style="background-color: ;">
            <a href="#">
                <img src="picture/c00183084daa1baa59780c5f63827a22.jpg"/>
            </a>
        </li>    
    </ul>
    <em></em>
    <a class="prev i-icon"></a>
    <a class="next i-icon"></a>
</section>
<section class="m-ad">
    <div class="w">
        <div class="c xs020">     
        <!-- 注: 控制广告商品个数 3*n 否则会改变页面布局 -->
        <a class="g x4" href="#"><img class="n-active" src="{{asset('home/picture/f5ca36832e3b0deeb6571b68729702e0.jpg')}}"></a>                 
        <a class="g x4" href="#"><img class="n-active" src="{{asset('home/picture/f5ca36832e3b0deeb6571b68729702e0.jpg')}}"></a>                 
        <a class="g x4" href="#"><img class="n-active" src="{{asset('home/picture/f5ca36832e3b0deeb6571b68729702e0.jpg')}}"></a> 
        <!--  -->
        <a class="g x4" href="#"><img class="n-active" src="{{asset('home/picture/f5ca36832e3b0deeb6571b68729702e0.jpg')}}"></a>                 
        <a class="g x4" href="#"><img class="n-active" src="{{asset('home/picture/f5ca36832e3b0deeb6571b68729702e0.jpg')}}"></a>       
        <a class="g x4" href="#"><img class="n-active" src="{{asset('home/picture/f5ca36832e3b0deeb6571b68729702e0.jpg')}}"></a>
        </div>       
    </div>
</section>

<section class="m-parts-recommend w">
    <div class="titles">
        <h2>更多周边</h2>
        <a href="#">更多</a>
    </div>
    <div class="wrap">
        <div class="slide c">
            <ul>
                <!-- 热度商品遍历最好不低于4个 -->
                <li>
                    <a href="#">
                        <p class="thumb"><img src="picture/05c67fc83d4f8374f02b78dd9eeeb193.png"/></p>
                        <span class="brand" data-brand="8"></span>
                        <span class="title">Apple EarPods 耳机</span>
                        <em>&#165;78.00</em>
                    </a>
                </li>
                <!-- 热度商品遍历结束 -->
                <li>
                    <a href="#">
                        <p class="thumb"><img src="picture/08ca83e64d2af73fd8b57045dcf92338.png"/></p>
                        <span class="brand" data-brand="14"></span>
                        <span class="title">【爱否棒棒糖】iPhone 6/6s 纤薄磨砂保护壳</span>
                        <em>&#165;24.90</em>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <p class="thumb"><img src="picture/566fd224ae582906867e7a95e3e13fc9.png"/></p>
                        <span class="brand" data-brand="14"></span>
                        <span class="title">【爱否棒棒糖】iPhone 7 Plus 纤薄磨砂保护壳</span>
                        <em>&#165;24.90</em>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <p class="thumb"><img src="picture/1306180a983f725c1282a8b47356ae30.png"/></p>
                        <span class="brand" data-brand="14"></span>
                        <span class="title">【爱否棒棒糖】iPhone 7 纤薄靓黑保护壳</span>
                        <em>&#165;29.90</em>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <a class="left i-icon"></a>
    <a class="right i-icon"></a>
</section>
<section class="m-pro-recommend">
    <div class="w">
        <div class="box-hd c">
        <h3 class="g">为您推荐</h3>
            <a class="fr" href="#">更多</a>
        </div>
        <div class="c xs020 m03 s04 x04">
            <!-- 推荐位遍历 -->
            <div class="g pro-item">
                 <a class="pro-item-a n-active" href="/category/list/id/1/brand/1/model/47.html">
                     <img src="picture/b7c2a835e261d66e8fd48e346721108e.png"/>
                     <p class="title" data-brand="1"></p>
                     <p class="title">iPhone 7</p>
                     <p class="price">&#165;2899.00</p>
                 </a>
             </div>
             <!-- 遍历结束 -->
             <!--  -->
             <div class="g pro-item">
                 <a class="pro-item-a n-active" href="/category/list/id/1/brand/1/model/47.html">
                     <img src="picture/b7c2a835e261d66e8fd48e346721108e.png"/>
                     <p class="title" data-brand="1"></p>
                     <p class="title">iPhone 7</p>
                     <p class="price">&#165;2899.00</p>
                 </a>
             </div>
             <div class="g pro-item">
                 <a class="pro-item-a n-active" href="/category/list/id/1/brand/1/model/47.html">
                     <img src="picture/b7c2a835e261d66e8fd48e346721108e.png"/>
                     <p class="title" data-brand="1"></p>
                     <p class="title">iPhone 7</p>
                     <p class="price">&#165;2899.00</p>
                 </a>
             </div>
             <div class="g pro-item">
                 <a class="pro-item-a n-active" href="/category/list/id/1/brand/1/model/47.html">
                     <img src="picture/b7c2a835e261d66e8fd48e346721108e.png"/>
                     <p class="title" data-brand="1"></p>
                     <p class="title">iPhone 7</p>
                     <p class="price">&#165;2899.00</p>
                 </a>
             </div>
             <div class="g pro-item">
                 <a class="pro-item-a n-active" href="/category/list/id/1/brand/1/model/47.html">
                     <img src="picture/b7c2a835e261d66e8fd48e346721108e.png"/>
                     <p class="title" data-brand="1"></p>
                     <p class="title">iPhone 7</p>
                     <p class="price">&#165;2899.00</p>
                 </a>
             </div>
             <!--  -->
        </div>
    </div>
</section>
<section class="m-ad-other w">
    <div class="box-hd c">
        <h3 class="g">特别推荐</h3>
    </div>
    <div class="xs020">
        <!-- 注: 特别推荐 -->
        <a class="g x6" href="#">
            <img class="n-active" src="picture/f5488a490e2cceaa3cead67f3856e13a.png">
        </a>
        <!-- 遍历结束 -->
        <a class="g x6" href="#">
            <img class="n-active" src="picture/f5488a490e2cceaa3cead67f3856e13a.png">
        </a>
        <a class="g x6" href="#">
            <img class="n-active" src="picture/f5488a490e2cceaa3cead67f3856e13a.png">
        </a>
        <a class="g x6" href="#">
            <img class="n-active" src="picture/e4066f9ae2dfb9393a7367672a1b35b8.png">
        </a>    
    </div>
</section>
<script>
    $(function(){
        var brand = {"1":"Apple","2":"Apple","6":"\u4f73\u80fd","7":"\u4f73\u80fd","8":"\u4e9a\u9a6c\u900a","9":"HTC","10":"\u4e09\u661f","11":"\u534e\u4e3a","12":"\u5c0f\u7c73","13":"\u82f9\u679c","14":"OPPO"};
        var perbrand = {"5":"\u5c0f\u7c73","2":"Apple","6":"FView","7":"Apple","8":"Apple","9":"Apple","13":"Apple","12":"\u534e\u4e3a","14":"\u7231\u5426FView","15":"\u7231\u5426FView","16":"\u7231\u5426Fview","17":"\u7231\u5426FView"};
        if(brand){
            $('[data-brand]').each(function(i,el){
                var id = $(el).data('brand');
                if(id)$(el).text(brand[id]);
            })
        }
        if(perbrand){
            $('[data-perbrand]').each(function(i,el){
                var id = $(el).data('perbrand');
                if(id)$(el).text(perbrand[id]);
            })
        }
    })
</script>
@endsection
<!-- 主体结束 -->
