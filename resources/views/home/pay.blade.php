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
<form class="layui-form">

<section class="m-select-address w">
    <div class="title">
        <strong>确认收货地址</strong>
    </div>
    <ul class="c x06 m04 xs30">
        <li class="g new">
              <select class="layui-input" name="addr" lay-verify="addr" id="addr">
                  <option value="0">===请选择收货地址===</option>
                    @if(isset($addr))
                        @foreach($addr as $v)
                            <option value="{{$v->id}}">{{$v->addr}}</option>
                        @endforeach
                    @endif
              </select>
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
        <li class="cell count">总计</li>
    </ul>
    
    <ul class="list c">
        @if(isset($good))
            @foreach($good as $k=>$v)
                <li>
                    <div class="cell name">
                        <a class="info">
                            <img src="{{$v['urls']}}"/>
                            <div class="details" data-format='{"1":"117"}'>
                                <strong>{{$v['gname']}}</strong>
                            </div>
                        </a>
                    </div>
                    <div class="cell price">
                        <span class="vlc">&#165;{{$v['price']}}</span>
                    </div>
                    <div class="cell num">
                        <span class="vlc">{{$v['number']}}</span>
                    </div>
                    <div class="cell count">
                        <span class="vlc">&#165;{{($v['price'])*$v['number']}}</span>
                    </div>
                </li>    
            @endforeach
        @else
            <li>
                <div class="cell name">
                    <a class="info">
                        <img src="{{$goods['urls']}}"/>
                        <div class="details" data-format='{"1":"117"}'>
                            <strong>{{$goods['gname']}}</strong>
                        </div>
                    </a>
                </div>
                <div class="cell price">
                    <span class="vlc">&#165;{{$goods['price']}}</span>
                </div>
                <div class="cell num">
                    <span class="vlc">{{$goods['number']}}</span>
                </div>
                <div class="cell count">
                    <span class="vlc">&#165;{{($goods['price'])*$goods['number']}}</span>
                </div>
            </li>  
        @endif
    </ul>
    <div class="use-coupon">
        <a class="u-btnl f-fr use-btn">使用</a>
        <input type="text" class="u-ipt f-fr use-code" placeholder="通关密码" value="">
    </div>    <div class="handle">
        <div class="pay-info c">
            <p class="f-fl"><span>商品总计：</span><em>&#165;{{$input['price']}}</em></p>
            <p class="f-fr"><span>应付金额：</span><strong>&#165;{{$input['price']}}</strong></p>
        </div>
        <div class="pay c">
            <input type="hidden" class="layui-input" name="price" value="{{$input['price']}}">
                @if(isset($good))
                    @foreach($good as $k=>$v)
                        <input type="hidden" class="layui-input" name="ids[{{$k}}]" value="{{($v['gid'])}}">
                    @endforeach
                @else
                    <input type="hidden" class="layui-input" name="id" value="{{($goods['gid'])}}">
                @endif
            <button class="u-btn n-middle n-blue f-fr" lay-filter="add" lay-submit=""><i class="layui-icon"></i>支付宝付款</button>
                  <i class="layui-icon"></i>支付宝付款
            </button>
            <div class="i-icon f-fr hint">
                <div class="hints">
                    <p>本站目前仅支持支付宝付款，</br>给您带来的不便还请谅解</p>
                    <i class="i-icon"></i>
                </div>
            </div>
        </div>
    </div>
    </form>
</section> 
<script>
    layui.use(['form','layer'], function(){
        $ = layui.jquery;
      var form = layui.form
      ,layer = layui.layer;
      // 自定义验证规则
          form.verify({
            addr: function(value){
                if($('#addr').val()== 0){
                    return '请选择收货地址';
                }
            }
          });
      //监听提交
      form.on('submit(add)', function(data){
        //发异步，把数据提交给php
        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            type : "POST",
            url : '/home/pay/store/0',
            data : data.field,
            dataType : "Json",
            success : function(msg){
                // console.log(msg)
                if(msg){
                    layer.alert("支付成功", {icon: 6},function () {
                        // 获得frame索引
                        var index = parent.layer.getFrameIndex(window.name);
                        //关闭当前frame
                        parent.layer.close(index);
                        parent.location.reload(true);
                    });
                }else{
                    layer.alert("支付失败", {icon: 6},function () {
                        // 获得frame索引
                        var index = parent.layer.getFrameIndex(window.name);
                        //关闭当前frame
                        parent.layer.close(index);
                        parent.location.reload(true);
                    });
                }
            }
        });
        return false;
      });
    });
</script>    
@endsection