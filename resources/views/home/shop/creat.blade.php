@extends('home.personal.layout')
  @section('personal')
    <div class="main">
        <section class="m-select-account">
            <div class="m-uc-hd other">
            <div class="list">
                <a class="n-active" href="javascript:;">创建店铺</a>
            </div>
        </div>

            <form class="layui-form" id="art_form" action="{{ url('/home/shop')}}" method="post" >
                 {{csrf_field()}}
                店铺名称：<input type="text" name="shopname" value="" class="layui-input">
                店铺描述：<input type="text" name="desc" value="" class="layui-input">
            <br>
            <button  class="layui-btn" lay-filter="add" lay-submit="">
              申请创建
            </button>
            <br>
          
            </form>
            
        </section>
    </div>
</section>
</script> 
@endsection
<!-- 主体结束 -->
             

  