<!DOCTYPE html>
<html lang="zh-cn">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
<title>{{ config('webconfig.web_title')}}</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">

<meta name="keywords" content="优雅吧youyaba.cn-专业的二手商城" />
<meta name="description" content="优雅吧youyaba.cn-专业的二手商城,提供网购、回收一条龙服务,为您提供愉悦的网上购物体验!" />
<meta name="baidu-site-verification" content="PcteigWN18" />
<link rel="icon" href="/favicon.ico" mce_href="/favicon.ico" type="image/x-icon">
<link rel="shortcut icon" href="/favicon.ico" mce_href="/favicon.ico" type="image/x-icon">
<link href="{{asset('home/css/style.css')}}" rel="stylesheet"/>
<link rel="stylesheet" href="{{asset('/home/css/3db764be798d4f91b193968200a2ab86.css')}}">
<link rel="shortcut icon" href="{{asset('admin/favicon.ico')}}" type="image/x-icon" />
<link rel="stylesheet" href="{{asset('admin/css/font.css')}}">
<link rel="stylesheet" href="{{asset('admin/css/xadmin.css')}}">
<script type="text/javascript" src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
<script src="{{asset('admin/lib/layui/layui.js')}}" charset="utf-8"></script>
<script type="text/javascript" src="{{asset('admin/js/xadmin.js')}}"></script>
<link type="text/css" rel="stylesheet" href="{{asset('home/css/common.css')}}">
<link type="text/css" rel="stylesheet" href="{{asset('home/css/public.css')}}">
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
                <a href="/">商城首页</a>
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
                    
                    <li>
                        <a href="" class="pointer" data-cid="1" ></a>


                         @foreach(config('navconfig') as $k=>$v)
                    <li>
                        <a class="" data-code="1000000378-2" href="{{$k}}" target="_blank">
                            <span>{{$v}}</span></a>
                        <span class="tag_line"></span>
                    </li>
                     @endforeach
                    </li>
                    
                </ul>
           </div>
        </div>
        <!--gome_head -->
        <div class="category-box">
            <div class="category wbox">
                <div class="sidecategory">
                    <h2>
                        <a data-code="1000036957" href="//list.gome.com.cn" target="_blank">全部商品分类</a></h2>
                    <div id="navBox" class='lisnav'>
                        <div class="lisbg"></div>
                        <!-- 一级菜单 -->
                        <ul class="lisnav-ul" id="lisnav">
                            <li class="first edit-mode nav-item" data-index="0" modelType="4" modelId="1000037040">
                                <h3>
                                    <!-- 一级标题 -->
                                    <a data-code="1000037040-0" href="#" target="_blank">手机</a>
                                    <!-- 一级标题end -->
                                    <a data-code="1000037040-1" href="#" target="_blank">充值</a></h3>
                            </li>
                        </ul>
                        <!-- 一级菜单end -->

                        <div class="subnav" id="subnav" flag="0">
                            <div class="loading1-sync" id="loading1-sync">
                                <div class="fullcategory-left">
                                    <div class="fullcategory-content-box" id="fullcategory-content-box" style="width: 769px;">
                                        <div class="fullcategory-content" data-code="1000051970_0" style="width: 769px;">
                                            <ul class="fullcategory-list" style="width: 769px;">
                                                <!-- 一级标题 -->
                                                <div class="title" style="margin-top: -8px;_margin: -8px 0;">手机</div>
                                                <!-- 一级标题end -->
                                                <div class="list" style="width: 700px;">
                                                    <!-- 二级分类 -->
                                                    <a href="#" target="_blank" title="手机" data-code="1000051971-0">手机</a>
                                                    <!-- 二级分类 -->
                                                    <a href="#" target="_blank" title="对讲机" data-code="1000051971-1">对讲机</a>
                                                </div>
                                            </ul>
                                            <ul class="fullcategory-list" style="width: 769px;">
                                                <!-- 一级标题 -->
                                                <div class="title" style="margin-top: -8px;_margin: -8px 0;">充值</div>
                                                <!-- 一级标题end -->
                                                <div class="list" style="width: 700px;">
                                                    <!-- 二级分类 -->
                                                    <a href="#" target="_blank" title="手机" data-code="1000051971-0">联通</a>
                                                    <!-- 二级分类 -->
                                                    <a href="#" target="_blank" title="对讲机" data-code="1000051971-1">电信</a>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ul class="mainnav">

                      <!-- 导航 -->
                    @foreach(config('navconfig') as $k=>$v)
                    <li>
                        <a class="" data-code="1000000378-2" href="{{$k}}" target="_blank">
                            <span>{{$v}}</span></a>
                        <span class="tag_line"></span>
                    </li>
                     @endforeach
                    <!-- 导航end -->
                </ul>
            </div>
        </div>
        <!--gome_head end-->
    </div>
</header>
<section class="m-slide">
<ul>
    @foreach(config('slideconfig') as $k=>$v)
    <li style="background-color: ;">
        <a href="{{$k}}">
            <img src="{{$v}}"/>
        </a>
    </li> 
    @endforeach   
    </ul>
<em></em>
<a class="prev i-icon"></a>
<a class="next i-icon"></a>
</section>
<script>var productId_list = "";
            var keyword = "";
            var order = [];
            var orderby = ""
            var catid = "";</script>
        <script type="text/javascript">var isHyg = false; //;
            window.pageName = '三级列表页';</script>
        <script type="text/javascript">if (!document.getElementsByClassName) {
                document.getElementsByClassName = function(className, element) {
                    var children = (element || document).getElementsByTagName('*');
                    var elements = new Array();
                    for (var i = 0; i < children.length; i++) {
                        var child = children[i];
                        var classNames = child.className.split(' ');
                        for (var j = 0; j < classNames.length; j++) {
                            if (classNames[j] == className) {
                                elements.push(child);
                                break;
                            }
                        }
                    }
                    return elements;
                };
            }</script>
        <script src="{{asset('home/js/6052ddad28e5436fbee87f5918025856.js')}}"></script>
        <script src="{{asset('home/js/b14e46ee2b1e418298be1f361a4bcaa1.js')}}"></script>
        <script src="{{asset('home/js/category.bundle.js')}}"></script>