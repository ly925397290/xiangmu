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
    <div class="x-body">
        <form class="layui-form" id="art_form" action="{{ url('admin/goods/') }}" method="post" enctype="multipart/form-data">
           {{csrf_field()}}
          <div class="layui-form-item">
              <label for="gname" class="layui-form-label">
                  <span class="x-red">*</span>商品名称
              </label>
              <div class="layui-input-inline">
                  <input type="text" id="" name="gname" required="" lay-verify="required"
                  autocomplete="off" class="layui-input">
              </div>
              <div class="layui-form-mid layui-word-aux">
                  <span class="x-red">*</span>
              </div>
          </div>
          <div class="layui-form-item">
              <label for="tid" class="layui-form-label">
                  <span class="x-red">*</span>商品分类
              </label>
              <div class="layui-input-inline">
                  <select class="layui-input" name="cid">
                            <option value="0">请选择</option>
                            @foreach($cate as $k=>$v)
                            <option value="{{$v['id']}}">{{$v['title']}}</option>
                            @endforeach
                      </select>
              </div>
              <div class="layui-form-mid layui-word-aux">
                  <span class="x-red">*</span>
              </div>
          </div>
          <div class="layui-form-item">
              <label for="username" class="layui-form-label">
                  <span class="x-red">*</span>商品状态
              </label>
              <div class="layui-input-inline">
                  <select id="status" name="status" class="valid">
                    <option value="1">上架</option>
                    <option value="0">下架</option>
                  </select>
              </div>
          </div>
         
          <div class="layui-form-item">
              <label for="username" class="layui-form-label">
                  <span class="x-red">*</span>推荐位
              </label>
              <div class="layui-input-inline">
                  <select id="" name="tuijian" class="valid">
                    <option value="1">位置一</option>
                    <option value="2">位置二</option>
                    <option value="3">位置三</option>
                    <option value="4">位置四</option>
                  </select>
              </div>
          </div>
          <div class="layui-form-item">
              <label for="L_pass" class="layui-form-label">
                  <span class="x-red">*</span>商品价格
              </label>
              <div class="layui-input-inline">
                  <input type="text" id="L_pass" name="price" required="" lay-verify="pass"
                  autocomplete="off" class="layui-input">
              </div>
              <div class="layui-form-mid layui-word-aux">
                 
              </div>
          </div>
          <div class="layui-form-item">
              <label for="L_pass" class="layui-form-label">
                  <span class="x-red">*</span>库存数量
              </label>
              <div class="layui-input-inline">
                  <input type="text" id="L_pass" name="inven" required="" lay-verify="pass"
                  autocomplete="off" class="layui-input">
              </div>
              <div class="layui-form-mid layui-word-aux">
                 
              </div>
          </div>            
          <div class="layui-form-item">
              <th>缩略图：</th>
              <td> 
                  <input type="file" id="file_upload" name="file_upload" value="">
                  <input type="hidden" name="urls" id="urls" value="">
                  <img src="" id="art_thumb_img" width="200">
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
                      var formData = new FormData($('#art_form')[0]);
                      console.log(formData)
                      //只将上传文件打包进formData
                      // var formData = new FormData();
                      // formData.append('fileupload',$('#file_upload')[0].files[0]);
                               $.ajax({
                                  type: "POST",
                                  url: '{{url('/admin/goods/upload')}}',
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
                                      $('#urls').val(data);
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
              </div>
              <div class="layui-form-item">
                <label for="user-intro" class="am-u-sm-3 am-form-label">商品描述</label>
                <div class="am-u-sm-9">
                    <script type="text/javascript" charset="utf-8" src="/ueditor/ueditor.config.js"></script>
                    <script type="text/javascript" charset="utf-8" src="/ueditor/ueditor.all.min.js"> </script>
                    <script type="text/javascript" charset="utf-8" src="/ueditor/lang/zh-cn/zh-cn.js"></script>
                    <script id="editor" name="gdesc" type="text/plain" style="width:600;px;height:100px;"></script>
                    <script>
                        var ue = UE.getEditor('editor');
                    </script>
                </div>
              </div>
              <tr>
              <th></th>
             
              <td>
                  <input type="submit" value="提交">
                  <input type="button" class="back" onclick="history.go(-1)" value="返回">
              </td>
          </tr>
        </form>
    <script>
        layui.use(['form','layer'], function(){
            $ = layui.jquery;
          var form = layui.form
          ,layer = layui.layer;
        
          //自定义验证规则
          form.verify({
            nikename: function(value){
              if(value.length < 5){
                return '昵称至少得5个字符啊';
              }
            }
            ,pass: [/(.+){6,12}$/, '密码必须6到12位']
            ,repass: function(value){
                if($('#L_pass').val()!=$('#L_repass').val()){
                    return '两次密码不一致';
                }
            }
          });

          //监听提交
          form.on('submit(add)', function(data){
            console.log(data);
            //发异步，把数据提交给php
            layer.alert("增加成功", {icon: 6},function () {
                // 获得frame索引
                var index = parent.layer.getFrameIndex(window.name);
                //关闭当前frame
                parent.layer.close(index);
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