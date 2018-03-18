@extends('home.public.layout')
<!-- 主体开始 -->
@section('content')
<link type="text/css" rel="stylesheet" href="{{asset('home/css/common.css')}}">
<link type="text/css" rel="stylesheet" href="{{asset('home/css/public.css')}}">
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
    <div class="container">
    <!-- 购物车开始 -->
        <form action="{{url('home/pay')}}/{{$data['gid'] or $post['gid']}}" method="post">
        {{csrf_field()}}
        <div class="cart-panel">
        <div class="hd">
            <ul class="order-title">
                <li class="selecter"></li>
                <li class="product">商品名称</li>
                <li class="market-price">市场价</li>
                <li class="order-price">订购价</li>
                <li class="num">数量</li>
                <li class="operate">操作</li>
            </ul>
        </div>
        <div class="bd">
            @if(isset($user_good))
                @foreach($user_good as $v)
                    <ul class="order-list" id="goods">
                        <li class="img-box"><img src="{{$v['urls'] or ''}}" height="56" width="50"></li>
                            <li class="product">
                                <a href="/product/9012149.html" target="_blank">
                                    <span class="product-title">{{$v['gname'] or ''}}</span>
                                    <span class="feature"></span>
                                </a>
                            </li>
                        <li class="market-price">
                            <span class="price-sign">¥</span>
                            <span class="price-num">829</span>
                        </li>
                        <li class="order-price">
                            <span class="price-sign">¥</span>
                            <span class="price-num price_price">{{$v['price'] or ''}}</span>
                            <input type="hidden" name="jrPrice" value="897">
                        </li>
                        <li class="num">
                            <div class="input-num">
                                <input type="hidden" class="form-control input-sm" name="number[]" value="{{$v['num'] or ''}}" maxlength="3" id="number">
                                <a href="javascript:void(0);" class="btn btn-default no" onclick="fun_del(this)"><i class="ico ico-minus"></i></a>
                                <input type="text" class="form-control input-sm" name="cpsl" value="{{$v['num'] or ''}}" maxlength="3" id="num">
                                <a href="javascript:void(0)" class="btn btn-default" onclick="fun_add(this)"><i class="ico ico-add"></i></a>
                            </div>
                        </li>
                        <li class="operate"><a href="javascript:void(0)" class="delBtn" onclick="member_del(this,'{{$v['good_id'] or ''}}')">删除</a><br><a href="javascript:void(0)" class="collectBtn" onclick="member_sc(this,{{$v->good_id}})">加入购物车</a></li>
                    </ul>
                @endforeach
            @else
                <ul class="order-list" id="goods">
                        <li class="img-box"><img src="{{$post['urls'] or ''}}" height="56" width="50"></li>
                            <li class="product">
                                <a href="/product/9012149.html" target="_blank">
                                    <span class="product-title">{{$post['gname'] or ''}}</span>
                                    <span class="feature"></span>
                                </a>
                            </li>
                        <li class="market-price">
                            <span class="price-sign">¥</span>
                            <span class="price-num">829</span>
                        </li>
                        <li class="order-price">
                            <span class="price-sign">¥</span>
                            <span class="price-num price_price">{{$post['price'] or ''}}</span>
                            <input type="hidden" name="jrPrice" value="897">
                        </li>
                        <li class="num">
                            <div class="input-num">
                                <input type="hidden" class="form-control input-sm" name="number[]" value="{{$post['number'] or ''}}" maxlength="3" id="number">
                                <a href="javascript:void(0);" class="btn btn-default no" onclick="fun_del(this)"><i class="ico ico-minus"></i></a>
                                <input type="text" class="form-control input-sm" name="cpsl" value="{{$post['number'] or ''}}" maxlength="3" id="num">
                                <a href="javascript:void(0)" class="btn btn-default" onclick="fun_add(this)"><i class="ico ico-add"></i></a>
                            </div>
                        </li>
                        <li class="operate"><a href="javascript:void(0)" class="delBtn" onclick="member_del(this,'{{$post['gid'] or ''}}')">删除</a><br><a href="javascript:void(0)" class="collectBtn" onclick="member_sc(this,{{$post['gid'] or ''}})">加入购物车</a></li>
                    </ul>
            @endif
        </div>
    </div>
    <!-- 购物车结束 -->
    
    <!-- 计算金额开始 -->
    <div class="set-bar">
        <div class="set-info">
            <a class="back" href="/" style="width:90px;"><span class="ico ico-back"></span>继续挑选</a>
            <div class="set-stat">
                应付金额:
                <div class="price">
                    <span class="price-sign">¥</span>
                    <span class="price-num" id="totalMoney">{{$price or $post['price']}}</span>
                </div>
            </div>
        </div>
            @if(isset($user_good))
                @foreach($user_good as $v)
                <input type="hidden" class="form-control input-sm" name="ids[]" value="{{$v->good_id}}" maxlength="3">
                @endforeach
            @else
                <input type="hidden" class="form-control input-sm" name="id" value="{{$post['gid'] or ''}}" maxlength="3">
            @endif
            <input type="hidden" class="form-control input-sm" name="price" value="{{$price or $post['price']}}" maxlength="3" id="price">
            <button class="layui-btn"><i class="layui-icon"></i>立即支付</button>
        </form>
        
    </div>
    <!-- 计算金额结束 -->
    <script type="text/javascript">
        layui.use(['form','laydate','layer'], function(){
        var laydate = layui.laydate;
        var form = layui.form;
        var layer = layui.layer;
      });
        var totalMoney = document.getElementById('totalMoney');
        var price_price = document.getElementsByClassName('price_price');
        //减少商品
        function fun_del(obj){
            //获取商品数量
            var num = parseInt(obj.nextSibling.nextSibling.value);
            var new_num = num-1;
            //商品不能小于1
            if(new_num < 1){
               return new_num = num-1;  
            }
            obj.nextSibling.nextSibling.value = new_num;
             // 单个商品的价格
            var price = parseFloat(obj.parentNode.parentNode.previousSibling.previousSibling.firstChild.nextSibling.nextSibling.nextSibling.innerHTML);
             // 原来的总价格
            var totalMoney_val = parseFloat(totalMoney.innerHTML);
             // 赋值
            totalMoney.innerHTML = totalMoney_val-price;
            $('#number').attr('value',new_num)
            $('#price').attr('value',totalMoney_val-price)
        }
        //增加商品
        function fun_add(obj){
            // 获取价格和数据
            var num = parseInt(obj.previousSibling.previousSibling.value);
            var new_num = num+1;
            obj.previousSibling.previousSibling.value = new_num;

            // 单个商品的价格
            var price = parseFloat(obj.parentNode.parentNode.previousSibling.previousSibling.firstChild.nextSibling.nextSibling.nextSibling.innerHTML);

          
            // 原来的总价格
            var totalMoney_val = parseFloat(totalMoney.innerHTML);
            // 单个商品计算的总价格
            // var price_num = price * new_num;
            // 赋值
            totalMoney.innerHTML = totalMoney_val+price;
            $('#number').attr('value',new_num)
            $('#price').attr('value',totalMoney_val+price)
        }


        // 触发总价格
        // function prices(){
        //     var s = 0;
        //     for(var i = 0;i<price_price.length;i++){
        //        s += parseFloat(price_price[i].innerHTML);
        //     }
        //     totalMoney.innerHTML = s;
        // }
        // prices();
        /*商品-删除*/
      function member_del(obj,id){
        $.ajax({
          headers: {
              'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          },
          type : "POST",
          url : '/home/delete/'+id,
          dataType : "Json",
          success : function(msg){
            // console.log(msg)
            if(msg){
                layer.msg('删除成功', {icon: 1});
                $(obj).parents("ul").remove();
            }else{
                layer.msg('删除失败', {icon: 1});
            }
          }
        });
      }
      /*商品-收藏*/
      function member_sc(obj,id){
        //获取商品数量
        var num = $('#number').val()
          $.ajax({
          headers: {
              'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          },
          type : "POST",
          url : '/home/sc/'+id,
          data:{'num':num},
          dataType : "Json",
          success : function(msg){
            if(msg){
                layer.msg('收藏成功', {icon: 1});
            }else{
                layer.msg('收藏失败', {icon: 1});
            }
          }
        });
      }


    </script>
</div>
</section>

@endsection
<!-- 主体结束 -->
  