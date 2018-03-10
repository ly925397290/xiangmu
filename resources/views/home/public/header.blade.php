<!DOCTYPE html>
<html lang="zh-cn">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
<title>{{ config('webconfig.web_title')}}</title>

<meta name="keywords" content="优雅吧youyaba.cn-专业的二手商城" />
<meta name="description" content="优雅吧youyaba.cn-专业的二手商城,提供网购、回收一条龙服务,为您提供愉悦的网上购物体验!" />
<meta name="baidu-site-verification" content="PcteigWN18" />
<link rel="icon" href="/favicon.ico" mce_href="/favicon.ico" type="image/x-icon">
<link rel="shortcut icon" href="/favicon.ico" mce_href="/favicon.ico" type="image/x-icon">
<link href="{{asset('home/css/style.css')}}" rel="stylesheet"/>
<script src="{{asset('home/js/jquery-2.1.1.min.js')}}"></script>
<script src="{{asset('home/js/common.js')}}"></script>
<script src="{{asset('home/js/aform.js')}}"></script>
</head>
<body  data-tpage="首页" data-tproduct="" data-tuserid="148240">
<header class="m-header">
        <!--l-proBarClear l-onlyUupperPart -->
    <div class="header-c  l-key-index">
        <div class="upper">
        <div class="headerW">
            <a class="logo" href="#">
                <img src="{{ config('webconfig.web_logo')}}" alt="爱否商城" width="140" height="45" />
            </a>
            <nav class="nav">
                <a href="#">商城首页</a>
                <a href="回收.html">回收服务</a>
                <a href="#">精品推荐</a>
            </nav>
            <!-- 购物车 -->
            <div class="cart">
                <a class="cartStyle">
                    <i class="i-icon"></i>
                    <span>购物车</span> <em>1</em>                </a>
                <div class="m-user-cart">
                    <i class="i-icon arrow"></i>
                    <!-- 购物车无货状态 -->
                    <!-- <div class="wrap">
                        <div class="n-none">
                            <img src="picture/index.png"><p>空空如也<br>赶紧去挑选几件中意商品吧</p>
                        </div>
                    </div> -->
                    <!-- 购物车有货状态 -->
                    <div class="wrap">
                        <ul>
                        <li data-id="167805">
                            <a class="thumb">
                                <img src="http://img002.fview.cn/Public/upload/shortperipheral/7f3a2db445a1017f0cb773b8112944d4.png">
                            </a>
                            <a class="details">
                                <p class="title">爱否【水滴】 大弧边钢化膜   超越常规 见所未见</p>
                                <p class="desc">iPhone X；</p><p class="price">¥39.90&nbsp;&nbsp;x&nbsp;&nbsp;1</p>
                            </a>
                            <i class="i-icon delete"></i>
                        </li>
                        </ul>
                        <div class="action">
                            <p class="cartinfo">
                                <span class="cartcount">共有<em>1</em>件商品</span>
                                <span class="countprice">￥39.9</span>
                            </p>
                        <a class="u-btn n-middle f-fr" href="/Cart/index">前往结算</a>
                        </div>
                    </div>
                    <!-- 购物车有货状态 -->
                </div>
            </div> 
           
            <div class="user">
                                <div class="uname">
                    <a class="avatar">Mr.feng</a>
                    <div class="menu">
                        <i class="i-icon arrow"></i>
                        <ul>
                            <li class="listItem"><a href="#">我的地址</a></li>
                            <li class="listItem"><a href="#">我的账户</a></li>
                            <li class="boderBottom"></li>
                            <li class="listItem"><a href="#">常见问题</a></li>
                            <li class="listItem"><a href="#">退出登录</a></li>
                        </ul>
                    </div>
                </div>
                <div class="order">
                    <a>我的订单</a>
                    <div class="menu">
                        <i class="i-icon arrow"></i>
                        <ul>
                            <li class="listItem"><a href="#">收购订单<em>1</em></a></li>
                            <li class="listItem"><a href="#">回收订单<em>1</em></a></li>
                            <li class="listItem"><a href="#">回退订单</a></li>
                        </ul>
                    </div>
                </div>
                <script>
                    $(function(){
                        var bindphone = 1;
                        if(bindphone == 0){
                            $.ajax({
                                url:'/bindphone/index.html',
                                type:'get',
                                dataType:'json',
                                success:function(data){
                                    if($('#onlyone'))$('#onlyone').remove();
                                    $('body').append(data.html);
                                }
                            });
                        }
                        $(document).on('click','.m-header a.signout',function(){
                            $.ajax({
                                url:'/tools/signout.html',
                                type:'get',
                                dataType:'json',
                                success:function(data){
                                    if(data.status == 0){
                                        location.reload(true);
                                    }
                                }
                            });
                        })
                    })
                </script>
                        </div>
        </div>
        </div>
        <!--bottombar-->
        <div class="lower">
            <div class="headerW">
                <a class="logo" href="#">
                    <img src="picture/logo.png" alt="爱否商城">
                </a>
                <ul class="product-bar">
                    @foreach($nav as $v)
                    <li>
                        <a href="{{$v->nlink}}" class="pointer" data-cid="1" >{{$v->nname}}</a>
                    </li>
                    @endforeach
                </ul>
           </div>
        </div>
        
    </div>
</header>
<section class="m-slide">
<ul>
    @foreach($slide as $v)
    <li style="background-color: ;">
        <a href="{{$v->surl}}">
            <img src="{{$v->simg}}"/>
        </a>
    </li> 
    @endforeach   
</ul>
<em></em>
<a class="prev i-icon"></a>
<a class="next i-icon"></a>
</section>