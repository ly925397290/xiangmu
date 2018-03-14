<!-- 左侧菜单开始 -->
<div class="left-nav">
 <div id="side-nav">
   <ul id="nav">
       <li>
           <a href="javascript:;">
               <i class="iconfont">&#xe6b8;</i>
               <cite>用户管理</cite>
               <i class="iconfont nav_right">&#xe697;</i>
           </a>
           <ul class="sub-menu">
               <li>
                   <a _href="{{url('/admin/user')}}">
                       <i class="iconfont">&#xe6a7;</i>

                       <cite>用户列表</cite>
                   </a>
               </li >
           </ul>
       </li>
       <li>
           <a href="javascript:;">
               <i class="iconfont">&#xe726;</i>
               <cite>管理员管理</cite>
               <i class="iconfont nav_right">&#xe697;</i>
           </a>
           <ul class="sub-menu">
               <li>
                   <a _href="{{url('admin/admin')}}">
                       <i class="iconfont">&#xe6a7;</i>
                       <cite>管理员列表</cite>
                   </a>
               </li >
               <li>
                   <a _href="{{url('admin/role')}}">
                       <i class="iconfont">&#xe6a7;</i>
                       <cite>角色管理</cite>
                   </a>
               </li >
               <li>
                   <a _href="{{url('admin/pcate')}}">
                       <i class="iconfont">&#xe6a7;</i>
                       <cite>权限分类管理</cite>
                   </a>
               </li >
               <li>
                   <a _href="{{url('admin/permission')}}">
                       <i class="iconfont">&#xe6a7;</i>
                       <cite>权限管理</cite>
                   </a>
               </li >
           </ul>
       </li>
       <li>
           <a href="javascript:;">
               <i class="layui-icon" style="top: 3px;"></i>
               <cite>订单管理</cite>
               <i class="iconfont nav_right">&#xe697;</i>
           </a>
           <ul class="sub-menu">
               <li>
                   <a _href="{{url('admin/order')}}">
                       <i class="iconfont">&#xe6a7;</i>
                       <cite>订单列表</cite>
                   </a>
               </li >
           </ul>
       </li>
       <li>
           <a href="javascript:;">
               <i class="layui-icon" style="top: 3px;"></i>
               <cite>分类管理</cite>
               <i class="iconfont nav_right">&#xe697;</i>
           </a>
           <ul class="sub-menu">
               <li>
                   <a _href="{{url('admin/cate')}}">
                       <i class="iconfont">&#xe6a7;</i>
                       <cite>分类列表</cite>
                   </a>
               </li >
           </ul>
       </li>
       <li>
           <a href="javascript:;">
               <i class="layui-icon" style="top: 3px;"></i>
               <cite>商品管理</cite>
               <i class="iconfont nav_right">&#xe697;</i>
           </a>
           <ul class="sub-menu">
               <li>
                   <a _href="{{url('/admin/goods')}}">
                       <i class="iconfont">&#xe6a7;</i>
                       <cite>商品列表</cite>
                   </a>
               </li >
           </ul>
       </li>

        <li>
           <a href="javascript:;">
               <i class="iconfont">&#xe723;</i>
               <cite>店铺管理</cite>
               <i class="iconfont nav_right">&#xe697;</i>
           </a>
           <ul class="sub-menu">
                
               <li>
                   <a _href="{{url('admin/shop')}}">
                       <i class="iconfont">&#xe6a7;</i>
                       <cite>店铺列表</cite>
                   </a>
               </li >
              
           </ul>
       </li>
        <li>
           <a href="javascript:;">
               <i class="iconfont">&#xe6b8;</i>
               <cite>轮播图管理</cite>
               <i class="iconfont nav_right">&#xe697;</i>
           </a>
           <ul class="sub-menu">
               <li>
                   <a _href="{{url('/admin/slide')}}">
                       <i class="iconfont">&#xe6a7;</i>
                       <cite>轮播图列表</cite>
                   </a>
               </li >
           </ul>
       </li>
       <li>
           <a href="javascript:;">
               <i class="iconfont">&#xe723;</i>
               <cite>导航管理</cite>
               <i class="iconfont nav_right">&#xe697;</i>
           </a>
           <ul class="sub-menu">
               <li>
                   <a _href={{url('/admin/nav')}}>
                       <i class="iconfont">&#xe6a7;</i>
                       <cite>导航列表</cite>
                   </a>
               </li >
           </ul>
       </li>
       
       <li>
           <a href="javascript:;">
               <i class="iconfont">&#xe723;</i>
               <cite>文章管理</cite>
               <i class="iconfont nav_right">&#xe697;</i>
           </a>
           <ul class="sub-menu">
               <li>
                   <a _href="{{url('/admin/article')}}">
                       <i class="iconfont">&#xe6a7;</i>
                       <cite>文章列表</cite>
                   </a>
               </li >
           </ul>
       </li>
       <li>
           <a href="javascript:;">
               <i class="layui-icon" style="top: 3px;"></i>
               <cite>评论管理</cite>
               <i class="iconfont nav_right">&#xe697;</i>
           </a>
           <ul class="sub-menu">
               <li>
                   <a _href="{{url('admin/message')}}">
                       <i class="iconfont">&#xe6a7;</i>
                       <cite>评论列表</cite>
                   </a>
               </li >
           </ul>
       </li>
       
       <li>
           <a href="javascript:;">
               <i class="iconfont">&#xe723;</i>
               <cite>网站配置管理</cite>
               <i class="iconfont nav_right">&#xe697;</i>
           </a>
           <ul class="sub-menu">
                <li>
                   <a _href="{{url('admin/webs/create')}}">
                       <i class="iconfont">&#xe6a7;</i>
                       <cite>网站配置添加</cite>
                   </a>
               </li >
               <li>
                   <a _href="{{url('admin/webs')}}">
                       <i class="iconfont">&#xe6a7;</i>
                       <cite>网站配置列表</cite>
                   </a>
               </li >
               <li>
                   <a _href={{url('/admin/link')}}>
                       <i class="iconfont">&#xe6a7;</i>
                       <cite>友情链接</cite>
                   </a>
               </li >
           </ul>
       </li>

       <li>
           <a href="javascript:;">
               <i class="iconfont">&#xe6ce;</i>
               <cite>系统统计</cite>
               <i class="iconfont nav_right">&#xe697;</i>
           </a>
           <ul class="sub-menu">
               <li>
                   <a _href="echarts1.html">
                       <i class="iconfont">&#xe6a7;</i>
                       <cite>拆线图</cite>
                   </a>
               </li >
               <li>
                   <a _href="echarts2.html">
                       <i class="iconfont">&#xe6a7;</i>
                       <cite>柱状图</cite>
                   </a>
               </li>
               <li>
                   <a _href="echarts3.html">
                       <i class="iconfont">&#xe6a7;</i>
                       <cite>地图</cite>
                   </a>
               </li>
               <li>
                   <a _href="echarts4.html">
                       <i class="iconfont">&#xe6a7;</i>
                       <cite>饼图</cite>
                   </a>
               </li>
               <li>
                   <a _href="echarts5.html">
                       <i class="iconfont">&#xe6a7;</i>
                       <cite>雷达图</cite>
                   </a>
               </li>
               <li>
                   <a _href="echarts6.html">
                       <i class="iconfont">&#xe6a7;</i>
                       <cite>k线图</cite>
                   </a>
               </li>
               <li>
                   <a _href="echarts7.html">
                       <i class="iconfont">&#xe6a7;</i>
                       <cite>热力图</cite>
                   </a>
               </li>
               <li>
                   <a _href="echarts8.html">
                       <i class="iconfont">&#xe6a7;</i>
                       <cite>仪表图</cite>
                   </a>
               </li>
           </ul>
       </li>
   </ul>
 </div>
</div>
<!-- <div class="x-slide_left"></div> -->
<!-- 左侧菜单结束 -->
