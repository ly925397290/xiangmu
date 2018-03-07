<!DOCTYPE html>
<html>

  <head>
    <meta charset="UTF-8">
    <title>轮播图添加页</title>
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width,user-scalable=yes, minimum-scale=0.4, initial-scale=0.8,target-densitydpi=low-dpi" />
     <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="shortcut icon" href="{{asset('admin/favicon.ico')}}" type="image/x-icon" />
    

    <link rel="stylesheet" href="{{ asset('admin/style/css/ch-ui.admin.css') }}">
    <link rel="stylesheet" href="{{ asset('admin/style/font/css/font-awesome.min.css') }}">
    <script type="text/javascript" src="{{ asset('admin/style/js/jquery.js') }}"></script>
    <script type="text/javascript" src="{{ asset('admin/style/js/ch-ui.admin.js') }}"></script>
    <!-- <script type="text/javascript" src="{{ asset('layer/layer.js') }}"></script> -->
    <!-- 让IE8/9支持媒体查询，从而兼容栅格 -->
    <!--[if lt IE 9]>
      <script src="https://cdn.staticfile.org/html5shiv/r29/html5.min.js"></script>
      <script src="https://cdn.staticfile.org/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
    <!--面包屑导航 开始-->
   
    <!--面包屑导航 结束-->

  <!--结果集标题与导航组件 开始-->
  <div class="result_wrap">
        
        <div class="result_content">
            <div class="short_wrap">
                <a href="#"><i class="fa fa-plus"></i>新增文章</a>
                <a href="#"><i class="fa fa-recycle"></i>批量删除</a>
                <a href="#"><i class="fa fa-refresh"></i>更新排序</a>
            </div>
        </div>
    </div>
    <!--结果集标题与导航组件 结束-->
    
    <div class="result_wrap">



        <form  id="art_form" action="{{ url('admin/slide') }}" method="post" enctype="multipart/form-data">
            <input type="hidden" name="" value="">
            <table class="add_tab">
                {{csrf_field()}}
                <tbody>
                 
            <tr>

                    <div class="am-form-group">
                            @if (count($errors) > 0)
                                <div style="margin-left: 300px;">
                                    <ul>
                                        @if(is_object($errors))
                                            @foreach ($errors->all() as $error)
                                                <li style="color:red">{{ $error }}</li>
                                            @endforeach
                                        @else
                                            <li style="color:red">{{ $errors }}</li>
                                        @endif
                                    </ul>
                                </div>
                            @endif
                       



                    
                </tr>
                <tr>
                     <th><i class="require">*</i> 导航名称：</th>
                    <td>
                        <input type="text" class="lg" name="sliname">
                    </td>
                </tr>
                <th><i class="require">*</i> 导航网址：</th>
                    <td>
                        <input type="text" class="lg" name="surl">
                    </td>

         
                <tr>
                    
                    <img src="">
                </tr>
               

                
                <th>排序：</th>
                    <td>
                        <input type="text" class="lg" name="order">
                    </td>
                <tr>
                    <th></th>
                    <td>
                        <input type="submit" value="提交">
                        <input type="button" class="back" onclick="history.go(-1)" value="返回">
                    </td>
                </tr>
                </tbody>
            </table>
        </form>

    </div>

