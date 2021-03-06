<!DOCTYPE html>
<html>
  
  <head>
    <meta charset="UTF-8">
    <title>欢迎页面-X-admin2.0</title>
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width,user-scalable=yes, minimum-scale=0.4, initial-scale=0.8,target-densitydpi=low-dpi" />
      <meta name="csrf-token" content="{{ csrf_token() }}">
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="stylesheet" href="{{ asset('admin/css/font.css') }}">
      <link rel="stylesheet" href="{{ asset('admin/css/xadmin.css') }}">
      <script type="text/javascript" src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
      <script src="{{ asset('admin/lib/layui/layui.js') }}" charset="utf-8"></script>
      <script type="text/javascript" src="{{ asset('admin/js/xadmin.js') }}"></script>
    <!-- 让IE8/9支持媒体查询，从而兼容栅格 -->
    <!--[if lt IE 9]>
      <script src="https://cdn.staticfile.org/html5shiv/r29/html5.min.js"></script>
      <script src="https://cdn.staticfile.org/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  
  <body>
    <div>
        {{--判断是否添加错误的提示信息--}}
        @if(!empty(session('msg')))
        <p>{{ session('msg') }}</p>
        @endif
    </div>
    <div class="x-body">
        <form class="layui-form" action="{{ url('admin/webs') }}" method="post">
          {{ csrf_field() }}
          <div class="layui-form-item">
              <label for="L_cate_name" class="layui-form-label">
                  <span class="x-red">*</span>标题
              </label>
              <div class="layui-input-inline">
                  <input type="text" id="L_cate_name" name="web_title" required=""
                  autocomplete="off" class="layui-input" placeholder="网站标题">
                  
              </div>
          </div>
            <div class="layui-form-item">
                <label for="L_cate_name" class="layui-form-label">
                    <span class="x-red">*</span>名称
                </label>
                <div class="layui-input-inline">
                    <input type="text" id="L_cate_name" name="web_name" required=""
                           autocomplete="off" class="layui-input" placeholder="web_title">
                </div>
            </div>
            <div class="layui-form-item">
                <label for="L_cate_title" class="layui-form-label">
                    <span class="x-red">*</span>内容
                </label>
                <div class="layui-input-block">
                    <input type="text" id="L_cate_title" name="web_content" required=""
                           autocomplete="off" class="layui-input" placeholder="后台首页">
                </div>
            </div>
          <div class="layui-form-item">
              <label for="L_pass" class="layui-form-label">
                  <span class="x-red">*</span>类型
              </label>
                  <div class="layui-input-block">
                      <input type="radio" name="field_type" value="input" title="文本框" checked="">
                      <input type="radio" name="field_type" value="textarea" title="文本域">
                      <input type="radio" name="field_type" value="radio" title="单选按钮" >
                      <input type="radio" name="field_type" value="file" title="文件上传" >
                  </div>

          </div>
            <div class="layui-form-item">
                <label for="L_cate_title" class="layui-form-label">
                    <span class="x-red">*</span>排序
                </label>
                <div class="layui-input-inline">
                    <input type="text" id="L_cate_title" name="web_order" required=""
                           autocomplete="off" class="layui-input">
                </div>
            </div>
            <div class="layui-form-item">
                <label for="L_pass" class="layui-form-label">
                    <span class="x-red">*</span>说明
                </label>
                <div class="layui-input-block">
                    <textarea name="web_tips" placeholder="请输入内容" class="layui-textarea"></textarea>
                </div>

            </div>

          <div class="layui-form-item">
              <label for="L_repass" class="layui-form-label">
              </label>
              <button  class="layui-btn" lay-filter="add" lay-submit="">
                  增加
              </button>
          </div>
      </form>
    </div>
    <script>var _hmt = _hmt || []; (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?b393d153aeb26b46e9431fabaf0f6190";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();</script>
  </body>

</html>