<?php

namespace App\Http\Controllers\home;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\model\good;
use App\model\user;
use App\model\Shop;
use App\model\user_good;
use DB;

class ShopController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // 获取用户的订单信息
        $user = user::find(1);
        $user['show'] = $user->userShow;
        $user['order'] = $user->user_order;
        $user_good = user_good::where('user_id',1)->get();
        foreach ($user_good as  $value) {
            $good = good::where('gid',$value['good_id'])->first();
            $value['price'] = $good['price'];
            $value['gname'] = $good['gname'];
            $value['urls'] = $good['urls'];
        }
        //计算购物车中商品总和

        $count = DB::table('user_good')->where('user_id',1)->count();
        return view('home.shop.creat',compact('user_good','good','count','user'));

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // 1.接收请求数据
        $input = $request->except('_token');
        $input['uid'] = 1;//1改成session用户id
        $res = Shop::create($input);
        // 获取用户的订单信息
        $user = user::find(1);
        $user['show'] = $user->userShow;
        $user['order'] = $user->user_order;
        $user_good = user_good::where('user_id',1)->get();
        foreach ($user_good as  $value) {
            $good = good::where('gid',$value['good_id'])->first();
            $value['price'] = $good['price'];
            $value['gname'] = $good['gname'];
            $value['urls'] = $good['urls'];
        }
        $count = DB::table('user_good')->where('user_id',1)->count();
        //查询用户的店铺状态
        $shop_status = Shop::where('uid',1)->first(); //1改成session用户id
        return view('home.shop.deng',compact('shop_status','user_good','count'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // 1.接收请求数据
        $res =Shop::find($id);

        return view('home.shop.deng',compact('link','nav','slide','res'));
    }


    public function shenhe($id)
    {
        // $nav = Nav::get();
        // //前台轮播图显示
        // $slide = Slide::where('status','1')->get();
        // //前台商品展示
        // $good = good::where('status','1')->get();
        // //前台友情链接
        // $link = link::where('status','1')->get();

        // // 1.接收请求数据
        // $res =Shop::find($id);

        // return view('home.shop.deng',compact('link','nav','slide','res'));
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //

        return 44;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        return 333;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        return 66;
    }
}
