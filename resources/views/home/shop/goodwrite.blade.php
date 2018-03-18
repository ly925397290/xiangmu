@extends('home.personal.layout')
  @section('personal')
    <div class="main">
        <section class="m-select-account">
            <div class="title">
                <a class="item n-active" href="{{url('home/goods/show')}}"><i>返回商品列表</i></a>
                
                <a class="u-btn">商品描述编辑</a>
            </div>
            <form  id="layui-form" action="{{url('home/goods/')}}/{{$det->gid}}" method="post" enctype="multipart/form-data">
                  {{ csrf_field() }}
                  {{method_field('PUT')}}
                 <td>
                    <script type="text/javascript" charset="utf-8" src="/ueditor/ueditor.config.js"></script>
                    <script type="text/javascript" charset="utf-8" src="/ueditor/ueditor.all.min.js"> </script>
                    <script type="text/javascript" charset="utf-8" src="/ueditor/lang/zh-cn/zh-cn.js"></script>
                    <script id="editor" type="text/plain" name="gdesc" style="width:700px;height:200px;">{{$det['gdesc']}}</script>
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
            <tr>
                    <th></th>
                    <td>
                        <button  class="layui-btn" lay-filter="add" lay-submit="">
                          修改
                      </button>
                    </td>
                </tr>
                </tbody>
            </table>
        </form>
        </section>
    </div>
</section>
@endsection
<!-- 主体结束 -->
             

  