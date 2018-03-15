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
		// 回收订单管理
		Route::resource('admin/huishou','Admin\HuishouController');
		// 回收订单批量删除
		Route::post('admin/huishou/delAll','Admin\HuishouController@delAll');
		// 商品管理
		Route::post('/admin/goods/gstatus/','Admin\GoodsController@gstatus');
		//商品批量修改
		Route::post('admin/goods/editAll','Admin\GoodsController@editAll');
		//商品详情
		Route::get('admin/goods/detail/{id}','Admin\GoodsController@detail');
	 	Route::resource('admin/goods','Admin\GoodsController');
	 	Route::post('admin/goods/upload','Admin\GoodsController@upload');
		// 商铺管理
		Route::resource('admin/shop','Admin\ShopController');
		Route::post('admin/shop/editAll','Admin\ShopController@editAll');
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
		// 分类批量删除
		Route::post('admin/cate/delAll','Admin\CateController@delAll');
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


// // 加载前台首页
// Route::get('home/index','home\IndexController@index');

// 加载账户管理页
Route::get('home/account','home\AccountController@index');
// 修改个人信息
Route::post('home/account/update/{id}','home\AccountController@update');
//用户头像处理
Route::post('home/account/upload','home\AccountController@upload');
//用户密码页加载
Route::get('home/account/password','Home\AccountController@password');
//用户密码处理
Route::post('home/password','Home\AccountController@edit');
// 加载添加地址页
Route::get('home/address','Home\AddressController@index');
// 添加地址页处理
Route::post('home/address/create','Home\AddressController@create');
// 加载地址管理页
Route::get('home/addrmanag','Home\AddrmanagController@index');
// 删除地址
Route::post('home/addrmanag/destroy/{id}','Home\AddrmanagController@destroy');
// 修改地址
Route::post('home/addrmanag/update/{id}','Home\AddrmanagController@update');
// 加载订单页
Route::get('home/order','Home\OrderController@index');
// 加载评论页
Route::get('home/pinglun/{id}','Home\OrderController@pinglun');
// 加载评论处理
Route::post('home/pinglun/{id}','Home\OrderController@store');


//加载商品详情页
Route::get('home/shoplist/{id}','Home\ShoplistController@index');
// 加载购物车
Route::get('home/settlement/{id}','Home\SettlementController@index');
//加入购物车处理
Route::post('home/sc/{id}','Home\SettlementController@shoucang');
//购物车删除处理
Route::post('home/delete/{id}','Home\SettlementController@delete');
//支付页面
Route::post('home/pay/{id}','Home\PayController@index');
//支付处理
Route::post('home/pay/store/{id}','Home\PayController@store');
// 加载售后页
Route::get('home/aftersale','Home\AftersaleController@index');

// 加载评估等待页
Route::get('home/assess','Home\AssessController@index');

// 加载添加评估信息页
Route::get('home/infomation','Home\InfomationController@index');


// 加载回收订单列表页
Route::get('home/reclaimorder','Home\ReclaimorderController@index');

// 加载回收机制页
Route::get('home/recovery','Home\RecoveryController@index');
//处理回收
Route::post('home/recovery/{id}','Home\RecoveryController@store');



//创建商铺
Route::resource('home/shop','Home\ShopController');
// Route::post('/home/shop/shenhe/{id}','Home\ShopController@shenhe');
Route::get('home/shop/shenhe/{id}','Home\ShopController@shenhe');
//前台发布闲置商品
Route::resource('home/goods','Home\goodsController');
// 文章图片上传处理
Route::post('home/goods/upload','Home\goodsController@upload');
//查看商品详情
Route::get('/home/shop/write/{id}','Home\goodsController@write');
//商品批量修改
Route::post('/home/goods/editAll/','Home\goodsController@editAll');
//商品描述修改
Route::post('/home/goods/edit/','Home\goodsController@edit');

Route::get('/home/index/show','Home\indexController@show');
Route::get('/home/index/slide','Home\indexController@slide');

//前台文章分类列表
Route::get('/home/articleslist','Home\indexController@articleslist');
