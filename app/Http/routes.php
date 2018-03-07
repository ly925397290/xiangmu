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
//验证后台用户权限
Route::group(['middleware'=>['permission']],function(){
//用户管理
Route::resource('admin/user','Admin\UserController');
// 用户状态
Route::post('admin/user/changestatus','Admin\UserController@changestatus');
// 用户批量删除
Route::post('admin/user/delAll','Admin\UserController@delAll');
// 管理员管理
Route::resource('admin/admin','Admin\AdminController');
//角色管理
Route::resource('admin/role','Admin\RoleController');
// 权限分类管理
Route::resource('admin/pcate','Admin\PcateController');
// 权限管
Route::resource('admin/permission','Admin\PermissionController');
// 订单管理
// Route::resource('user','Admin\OrderController');
// 商品管理
// Route::resource('user','Admin\GoodsController');
// 商铺管理
// Route::resource('user','Admin\ShopController');
// 活动管理
// Route::resource('user','Admin\ActivityController');
// 广告管理
// Route::resource('user','Admin\AdverController');
// 轮播图管理
// Route::resource('user','Admin\SlidController');
// 导航管理
// Route::resource('user','Admin\NavController');
// 分类管理
Route::resource('admin/cate','Admin\CateController');
// 文章管理
// Route::resource('user','Admin\WorksController');
// 评论管理管理
// Route::resource('user','Admin\MessageController');
//网站配置管理
Route::resource('admin/webs','Admin\WebsController');
// 网站配置批量删除
Route::post('admin/webs/delAll','Admin\WebsController@delAll');
// 网站配置批量修改
Route::post('admin/webs/editAll','Admin\WebsController@editAll');
});