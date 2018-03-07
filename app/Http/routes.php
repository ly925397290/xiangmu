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

Route::get('/', function () {
    return view('welcome');
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
Route::group(['namespace'=>'Admin','namespace'=>'Admin','middleware'=>'login'],function(){
	// 暂时不往里面放东西项目测试之后再完善
});

// 设置路由组 统一命名空间下的控制器 有需要的再提出来
Route::group(['prefix'=>'admin','namespace'=>'Admin'],function(){
// 后台首页
Route::get('index','IndexController@index');
// 后台详情页
Route::get('welcome','IndexController@welcome');
// 退出登录
Route::get('outlogin','LoginController@outlogin');
});


//用户管理
Route::resource('user','Admin\UserController');
// // 订单管理
// Route::resource('user','OrderController');
// // 商品管理
// Route::resource('user','GoodsController');
// // 商铺管理
// Route::resource('user','ShopController');
// // 活动管理
// Route::resource('user','ActivityController');
// // 广告管理
// Route::resource('user','AdverController');
// // 轮播图管理
// Route::resource('user','SlidController');
// // 导航管理
// Route::resource('user','NavController');
// // 菜单管理
// Route::resource('user','GoodStyleController');
// // 文章管理
// Route::resource('user','WorksController');
// // 评论管理管理
// Route::resource('user','MessageController');
// //网站配置管理
// Route::resource('user','WebsController');
