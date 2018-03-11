<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

/****************************后台路由************************************/
Route::get('/', function () {
    return view('welcome');
});
/***后台登录验证***/
Route::group(['middleware'=>['login']],function(){
	// 无权限访问页面
	Route::get('noaccess','Admin\IndexController@noaccess');
	// 后台登录页面显示
	Route::get('admin/login','Admin\LoginController@login');
	// 后台登录处理
	Route::post('admin/dologin','Admin\LoginController@dologin');
	// 后台首页
	Route::get('admin/index','Admin\IndexController@index');
	// 后台详情页
	Route::get('admin/welcome','Admin\IndexController@welcome');
	/**验证后台用户权限**/
	Route::group(['middleware'=>['permission']],function(){
		//用户管理
		Route::resource('admin/user','Admin\UserController');
		// 用户状态
		Route::post('admin/user/changestatus','Admin\UserController@changestatus');
		// 用户批量删除
		Route::post('admin/user/delAll','Admin\UserController@delAll');
		// 管理员管理
		Route::resource('admin/admin','Admin\AdminController');
		// 管理员批量删除
		Route::post('admin/admin/delAll','Admin\AdminController@delAll');
		//角色管理
		Route::resource('admin/role','Admin\RoleController');
		// 角色批量删除
		Route::post('admin/role/delAll','Admin\RoleController@delAll');
		// 权限分类管理
		Route::resource('admin/pcate','Admin\PcateController');
		// 权限分类批量删除
		Route::post('admin/pcate/delAll','Admin\PcateController@delAll');
		// 权限管理
		Route::resource('admin/permission','Admin\PermissionController');
		// 权限批量删除
		Route::post('admin/permission/delAll','Admin\PermissionController@delAll');
		// 订单管理
		Route::resource('admin/order','Admin\OrderController');
		// 订单批量删除
		Route::post('admin/order/delAll','Admin\OrderController@delAll');
		// 商品管理
		Route::post('/admin/goods/gstatus/','Admin\GoodsController@gstatus');
		//商品详情
		Route::get('admin/goods/detail/{id}','Admin\GoodsController@detail');
	 	Route::resource('admin/goods','Admin\GoodsController');
	 	Route::post('admin/goods/upload','Admin\GoodsController@upload');
		// 商铺管理
		Route::resource('admin/shop','Admin\ShopController');
		// 轮播图管理
		 Route::resource('admin/slide','Admin\SlideController');
		 //轮播图
		 Route::post('admin/slide/upload','Admin\SlideController@upload');
		 //调整轮播图顺序路由
		 Route::post('admin/slide/changeorder', 'SlideController@changeorder');
		 // 链接状态
		Route::post('admin/slide/changestatus','Admin\SlideController@changestatus');
		// 导航管理
		Route::resource('admin/nav','Admin\NavController');
		// 分类管理
		Route::resource('admin/cate','Admin\CateController');
		// 文章管理
		 Route::resource('admin/article','Admin\ArticleController');
		// 文章图片上传处理
		 Route::post('admin/article/upload','Admin\ArticleController@upload');
		// 评论管理管理
		Route::resource('admin/message','Admin\MessageController');
		// 评论批量删除
		Route::post('admin/message/delAll','Admin\MessageController@delAll');
		//网站配置管理
		Route::resource('admin/webs','Admin\WebsController');
		// 网站配置批量删除
		Route::post('admin/webs/delAll','Admin\WebsController@delAll');
		// 网站配置批量修改
		Route::post('admin/webs/editAll','Admin\WebsController@editAll');
		// 网站配置图片上传处理
		 Route::post('admin/webs/upload','Admin\WebsController@upload');
		// 友情链接
		Route::resource('admin/link','Admin\LinkController');
		// 链接状态
		Route::post('admin/link/changestatus','Admin\LinkController@changestatus');
	});
});
// 创建登录页面的 Admin 命名空间
Route::group(['prefix'=>'admin','namespace'=>'Admin'],function(){
	// 后台登录
	Route::get('login', 'LoginController@login')->name('admin.login');
	// 获取验证码
	Route::get('yzm', 'LoginController@yzm');
	// 提交后台登录数据
	Route::post('dologin', 'LoginController@dologin');
	// 未登录测试
	Route::get('ceshi', 'LoginController@ceshi');
});

// 加载验证码
Route::get('/code/captcha/{tmp}', 'Admin\LoginController@captcha');

/**
* 设置中间件
* @param 加载后台组件
*/

// 设置路由组 统一命名空间下的控制器 有需要的再提出来
Route::group(['prefix'=>'admin','namespace'=>'Admin'],function(){

// 退出登录
Route::get('outlogin','LoginController@outlogin');
});

/****************************前台路由************************************/
// 前台首页
Route::get('/','Home\IndexController@index');






