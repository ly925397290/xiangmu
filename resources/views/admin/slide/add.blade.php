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
                    <th><i class="require">*</i> 轮播图跳转网址：</th>
                    <td>
                        <input type="text" class="lg" name="surl">
                    </td>
                </tr>
                <tr>
                     <th><i class="require">*</i> 轮播图名称：</th>
                    <td>
                        <input type="text" class="lg" name="sliname">
                    </td>
                </tr>
                <tr>
                    <th>缩略图：</th>
                    <td>
                        
                        <input id="file_upload" name="file_upload" type="file" multiple="true" >
                        <img src="" id="art_thumb_img" width="150">
                        <input id="art_thumb" name="simg" type="hidden" >
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
                                 $.ajax({
                                    type: "POST",
                                    url: '{{url('/admin/slide/upload')}}',
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
                                        $('#art_thumb_img').attr('src',data);
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
                <tr>         
                </tr>        
                <th>排序：</th>
                    <td>
                        <input type="text" class="lg" name="order">
                    </td>
                    <tr>
                        <th><label for="L_pass" class="layui-form-label">
                         <i class="require">*</i>状态
                         </label>
                </th>
                        <td>
                            <div class="layui-form-item">
              
              <div class="layui-input-inline">
                  <select class="layui-input" name="status" lay-verify="status">
                      <option value="">请选择状态</option>
                      <option value="1">显示</option>
                      <option value="0">不显示</option>
                  </select>
              </div>
          </div>
                        </td>
                    </tr>
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

