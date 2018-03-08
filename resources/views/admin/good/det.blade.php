<!DOCTYPE html>
<html>

  <head>
    <meta charset="UTF-8">
    <title>欢迎页面-X-admin2.0</title>
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width,user-scalable=yes, minimum-scale=0.4, initial-scale=0.8,target-densitydpi=low-dpi" />
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
        
      </div>
      <xblock>
        
        
      <table class="layui-table">
        <thead>
          <tr>

            <th width="100">项目名称</th>            
            <th width="">内容</th>
            <th>操作</th>
            
          </tr>
        </thead>
        <tbody>
            <tr>

            <th width="100">商品ID号</th>            
            <th width="">{{$goods->gid}}</th>
            <th>
             
            </th>
            <th></th>
          </tr>

           
            <tr>
           <th width="">商品所属分类</th>            
           <th width="">{{$goods->tid}}</th>
           <th>
             
            </th>
            </tr>
            <tr>
           <th width="">商品名称</th>            
           <th width="">{{$goods->gname}}</th>
           <th>
              <a href="/admin/goods/edit/">修改</a>
              
              <a href="">删除</a>
            </th>
            </tr>

            <tr>
              <th width="">商品来源</th>            
              <th width="">店铺名或本后台</th>
              <th>
              <a href="">修改</a>
              <a href="">删除</a>
            </th>

            </tr>
            <tr>
           <th width="">商品缩略图</th>            
           <th width="">{{$goods->pict}}</th>
           <th>
              <a href="">修改</a>
              <a href="">删除</a>
            </th>
            </tr>
            <tr>
           <th width="">商品价格</th>            
           <th width="">{{$goods->price}}</th>
           <th>
              <a href="">修改</a>
              <a href="">删除</a>
            </th>
            </tr>
            <tr>
           <th width="">商品发表时间</th>            
           <th width="">{{$goods->addtime}}</th>
           <th>
              
            </th>
            </tr>
          <tr>
           <th width="">商品状态</th>            
           <th width="">{{$goods->status}}</th>
           <th>
              
            </th>
            </tr>
            <tr>
           <th width="">商品库存</th>            
           <th width="">{{$goods->inven}}</th>
           <th>
              <a href="">修改</a>
              <a href="">删除</a>
            </th>
            </tr>
          <tr>
           <th width="">商品描述</th>            
           <th width=""></th>
           <th>
              <a href="">修改</a>
              <a href="">删除</a>
            </th>
        </tr>
         <tr>
           <th width="">商品留言</th>            
           <th width="">留言</th>
           <th>
             
              <a href="">删除</a>
            </th>
        </tr>

           
        </tbody>
      </table>
         
           <div class="page">
            
          </div>
      
  </body>

</html>
