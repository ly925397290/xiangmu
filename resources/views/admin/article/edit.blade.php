<!DOCTYPE html>
<html>

  <head>
    <meta charset="UTF-8">
    <title>文章添加页</title>
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
    <div class="crumb_warp">
        <!--<i class="fa fa-bell"></i> 欢迎使用登陆网站后台，建站的首选工具。-->
        <i class="fa fa-home"></i> <a href="#">首页</a> &raquo; <a href="#">文章管理</a> &raquo; 添加文章
    </div>
    <!--面包屑导航 结束-->

  <!--结果集标题与导航组件 开始-->
  <div class="result_wrap">
        <div class="result_title">
            <h3>快捷操作</h3>
        </div>
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



        <form  id="art_form" action="{{ url('admin/article/') }}/{{$articles->aid}}" method="post" enctype="multipart/form-data">
            <input type="hidden" name="create_time" value="{{date('Y-m-d H:i:s',time())}}">
            <table class="add_tab">
                {{csrf_field()}}
                {{method_field('PUT')}}
                <tbody>
                 
            <tr>
                    <th><i class="require">*</i> 文章标题：</th>
                    <td>
                        <input type="text" class="lg" name="title" value="{{$articles->title}}">
                    </td>
                </tr>
                <tr>
                    <th>作者</th>
                    <td>
                        <input type="text" class="sm" name="auth" value="{{$articles->auth}}">
                    </td>
                </tr>
                <tr>
                    <th>缩略图：</th>
                    <td>
                        
                        <input id="file_upload" name="file_upload" type="file"  >
                        {{--<script src="http://www.myblog.com/resources/org/uploadify/jquery.uploadify.min.js" type="text/javascript"></script>--}}
                        {{--<link rel="stylesheet" type="text/css" href="http://www.myblog.com/resources/org/uploadify/uploadify.css">--}}
                        <script type="text/javascript">
                            $(function () {
                                $("#file_upload").change(function () {
                                    uploadImage();
                                });
                            });
                            function uploadImage() {
//                            判断是否有选择上传文件
                                var imgPath = $("#file_upload").val();
                                if (imgPath == "") {
                                    alert("请选择上传图片！");
                                    return;
                                }
                                //判断上传文件的后缀名
                                var strExtension = imgPath.substr(imgPath.lastIndexOf('.') + 1);

                                if (strExtension != 'jpg' && strExtension != 'gif'
                                    && strExtension != 'png' && strExtension != 'bmp') {
                                    alert("请选择图片文件");
                                    return;
                                }
                           
                                // var myform = document.getElementById('art_from');

                               //将整个表单打包进formData
                        // var formData = new FormData($('#art_form')[0]);

                        //只将上传文件打包进formData
                                var formData = new FormData();
                                formData.append('file_upload',$('#file_upload')[0].files[0]);
                                // formData.append('_token','{{ csrf_token() }}');
                                 $.ajax({
                                    type: "POST",
                                    url: '{{url('/admin/article/upload')}}',
                                     headers: {
                                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                                    },

                                    data: formData,
                                    async: true,
                                    cache: false,
                                    contentType: false,
                                    processData: false,
                                    success: function(data) {
                                      console.log(data);
                                        $('#thumb').attr('src',data);
                                         $('#art_thumb_img').attr('src','{{ env('QINIU_DOMAIN') }}'+data);
                                         $('#art_thumb').val(data);
                                    },
                                    error: function(XMLHttpRequest, textStatus, errorThrown) {
                                        alert("上传失败，请检查网络后重试");
                                    }
                                });
                            }
                        </script>
                        <style>
                            .uploadify{display:inline-block;}
                            .uploadify-button{border:none; border-radius:5px; margin-top:8px;}
                            table.add_tab tr td span.uploadify-button-text{color: #FFF; margin:0;}
                        </style>
                    </td>

                </tr>
                <div class="layui-form-item">
                <label for="L_art_tag" class="layui-form-label">
                    <span class="x-red">*</span>
                </label>
                <div class="layui-input-block">
                    <input type="hidden" name="art_thumb" id="art_thumb" value="">
                    {{--上传成功后显示上传图片--}}
                    <img src="{{$articles->art_thumb}}" id="thumb" alt="" style="width:100px;">
                </div>
            </div>
                <tr>
                    <th>关键词：</th>
                    <td>
                        <input type="text" class="lg" name="art_tag" value="{{$articles->art_tag}}">
                    </td>
                </tr>
              


                <tr>
                    <th>内容编辑：</th>
                    <td>
                        <script type="text/javascript" charset="utf-8" src="/ueditor/ueditor.config.js"></script>
                        <script type="text/javascript" charset="utf-8" src="/ueditor/ueditor.all.min.js"> </script>
                        <script type="text/javascript" charset="utf-8" src="/ueditor/lang/zh-cn/zh-cn.js"></script>


                        <script id="editor" type="text/plain" name="content" style="width:600px;height:50px;">{!!$articles->content!!}</script>
                        <script type="text/javascript">

                            //实例化编辑器
                            //建议使用工厂方法getEditor创建和引用编辑器实例，如果在某个闭包下引用该编辑器，直接调用UE.getEditor('editor')就能拿到相关的实例
                            var ue = UE.getEditor('editor');
                        </script>
                        <style>
                            .edui-default{line-height: 28px;}
                            div.edui-combox-body,div.edui-button-body,div.edui-splitbutton-body
                            {overflow: hidden; height:20px;}
                            div.edui-box{overflow: hidden; height:22px;}
                        </style>
                    </td>
                </tr>
                <th>排序：</th>
                    <td>
                        <input type="text" class="lg" name="number" value="{{$articles->number}}">
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

