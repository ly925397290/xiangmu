<!DOCTYPE html>
<html>

  <head>
    <meta charset="UTF-8">
    <title>欢迎页面-X-admin2.0</title>
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width,user-scalable=yes, minimum-scale=0.4, initial-scale=0.8,target-densitydpi=low-dpi" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="shortcut icon" href="{{asset('admin/favicon.ico')}}" type="image/x-icon" />
    <link rel="stylesheet" href="{{asset('admin/css/font.css')}}">
  <link rel="stylesheet" href="{{asset('admin/css/xadmin.css')}}">
    <script type="text/javascript" src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
    <script src="{{asset('admin/lib/layui/layui.js')}}" charset="utf-8"></script>
    <script type="text/javascript" src="{{asset('admin/js/xadmin.js')}}"></script>
    <!-- 让IE8/9支持媒体查询，从而兼容栅格 -->
    <!--[if lt IE 9]>
      <script src="https://cdn.staticfile.org/html5shiv/r29/html5.min.js"></script>
      <script src="https://cdn.staticfile.org/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  
  <body>
    <div class="x-nav">
      <span class="layui-breadcrumb">
        <a href="">首页</a>
        <a href="">演示</a>
        <a>
          <cite>导航元素</cite></a>
      </span>
      <a class="layui-btn layui-btn-small" style="line-height:1.6em;margin-top:3px;float:right" href="javascript:location.replace(location.href);" title="刷新">
        <i class="layui-icon" style="line-height:30px">ဂ</i></a>
    </div>
    <div class="x-body">
      <div class="layui-row">
        <form class="layui-form layui-col-md12 x-so">
          <div class="layui-inline">
            <select name="num">
              <option value="2"
                      @if($request['num'] == 2)  selected  @endif
              >2
              </option>
              <option value="5"
                      @if($request['num'] == 5)  selected  @endif
              >5
              </option>
            </select>
          </div>
          <div class="layui-input-inline">
            <select name=" payment">
              <option value="">支付方式</option>
              <option value="1" @if($request['payment'] == 1)  selected  @endif>支付宝</option>
              <option value="2" @if($request['payment'] == 2)  selected  @endif>微信</option>
              <option value="3" @if($request['payment'] == 3)  selected  @endif>货到付款</option>
            </select>
          </div>
          <div class="layui-input-inline">
            <select name="order_status">
              <option value="">订单状态</option>
              <option value="1" @if($request['order_status'] == 1)  selected  @endif>待发货</option>
              <option value="2" @if($request['order_status'] == 2)  selected  @endif>已发货</option>
              <option value="3" @if($request['order_status'] == 3)  selected  @endif>待收货</option>
              <option value="4" @if($request['order_status'] == 4)  selected  @endif>已收货</option>
              <option value="5" @if($request['order_status'] == 5)  selected  @endif>已评论</option>
            </select>
          </div>
          <input type="text" name="oid"  placeholder="请输入订单号" autocomplete="off" class="layui-input" value="{{$request->oid}}">
          <button class="layui-btn"  lay-submit="" lay-filter="sreach"><i class="layui-icon">&#xe615;</i></button>
        </form>
      </div>
      <xblock>
        <button class="layui-btn layui-btn-danger" onclick="delAll()"><i class="layui-icon"></i>批量删除</button>
        <span class="x-right" style="line-height:40px">共有数据：{{$count}} 条</span>
      </xblock>
      <table class="layui-table">
        <thead>
          <tr>
            <th>
              <div class="layui-unselect header layui-form-checkbox" lay-skin="primary"><i class="layui-icon">&#xe605;</i></div>
            </th>
            <th>订单编号</th>
            <th>收货人</th>
            <th>总金额</th>
            <th>应付金额</th>
            <th>订单状态</th>
            <th>支付状态</th>
            <th>支付方式</th>
            <th>配送方式</th>
            <th>下单时间</th>
            <th >操作</th>
            </tr>
        </thead>
        <tbody>
          @foreach($data as $v)
          <tr>
            <td>
              <div class="layui-unselect layui-form-checkbox" lay-skin="primary" data-id='{{$v->id}}'><i class="layui-icon">&#xe605;</i></div>
            </td>
            <td>{{$v->oid}}</td>
            <td>{{$v->user_id}}</td>
            <td>{{$v->oprice}}</td>
            <td>{{$v->money}}</td>
            <td>{!!$v->order_status!!}</td>
            <td>{!!$v->pay_status!!}</td>
            <td>{!!$v->payment!!}</td>
            <td>{!!$v->delivery_method!!}</td>
            <td>2017-08-17 18:22</td>
            <td class="td-manage">
              <a title="查看"  onclick="x_admin_show('查看','{{url('admin/order')}}/{{$v->id}}')" href="javascript:;">
                <i class="layui-icon">&#xe63c;</i>
              </a>
              <a title="删除" onclick="member_del(this,'{{$v->id}}')" href="javascript:;">
                <i class="layui-icon">&#xe640;</i>
              </a>
            </td>
          </tr>
          @endforeach
        </tbody>
      </table>
      <div class="page">
        <div>
          {!! $data->appends($request->all())->render() !!}
        </div>
      </div>

    </div>
    <script>
      /*订单-删除*/
      function member_del(obj,id){
          layer.confirm('确认要删除吗？',function(index){
              //发异步删除数据
              $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                type : "DELETE",
                url : '/admin/order/'+id,
                dataType : "Json",
                success : function(msg){
                        // console.log(msg)
                    if(msg.status){
                        location.reload(true);
                        $(obj).parents("tr").remove();
                        layer.msg('删除成功!',{icon:1,time:1000});
                    }else{
                        location.reload(true);
                        layer.msg('删除失败!',{icon:1,time:1000});
                    }
                }
              });
              
          });
      }



      function delAll (argument) {
        var ids =   [];
        $('.layui-form-checked').not('.header').each(function(i,v){
             ids.push($(v).attr('data-id'));
        })
        layer.confirm('确认要删除吗？',function(index){
            //捉到所有被选中的，发异步进行删除
            $.ajax({
              headers: {
                  'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
              },
              type : "POST",
              url : '/admin/order/delAll',
              data : {"ids":ids},
              dataType : "Json",
              success : function(msg){
                // console.log(msg)
                if(msg.status){
                    layer.msg('删除成功', {icon: 1});
                    $(".layui-form-checked").not('.header').parents('tr').remove();
                    location.reload(true);

                }else{
                    location.reload(true);
                    layer.msg('删除失败', {icon: 1});
                }
              }
            });
        });
      }

      layui.use(['form','layer'], function(){
        $ = layui.jquery;
        var form = layui.form
        ,layer = layui.layer;

      /**确认发货**/
      form.on('submit(queren)', function(data){
            //发异步，把数据提交给php
            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                type : "POST",
                url : '/admin/order/queren',
                data : data.field,
                dataType : "Json",
                success : function(msg){
                    if(msg){
                          layer.msg("确认发货成功", {icon: 6},function () {
                          location.reload(true);
                        });
                    }else{
                        layer.msg("确认发货失败", {icon: 6},function () {
                        location.reload(true);
                        });
                    }
                }
            });
            return false;
          });
      });
    </script>
    <script>var _hmt = _hmt || []; (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?b393d153aeb26b46e9431fabaf0f6190";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();</script>
  </body>

</html>