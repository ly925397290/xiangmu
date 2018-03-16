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
        $user = user::find(session('user')['uid']);
        $user['show'] = $user->userShow;
        $user['order'] = $user->user_order;
        $user_good = user_good::where('user_id',session('user')['uid'])->get();
        foreach ($user_good as  $value) {
            $good = good::where('gid',$value['good_id'])->first();
            $value['price'] = $good['price'];
            $value['gname'] = $good['gname'];
            $value['urls'] = $good['urls'];
        }
        //计算购物车中商品总和

        $count = DB::table('user_good')->where('user_id',session('user')['uid'])->count();
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
        $input['uid'] = session('user')['uid'];//1改成session用户id
        $res = Shop::create($input);
        if($res){
            return redirect('/home/shop/shenhe/1');
        }else{
            return back();
        }
        
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
        $user_good = user_good::where('user_id',session('user')['uid'])->get();
        foreach ($user_good as  $value) {
            $good = good::where('gid',$value['good_id'])->first();
            $value['price'] = $good['price'];
            $value['gname'] = $good['gname'];
            $value['urls'] = $good['urls'];
        }
        $count = DB::table('user_good')->where('user_id',session('user')['uid'])->count();
        $user = user::find(session('user')['uid']);
        $user['show'] = $user->userShow;
        $shop_status = Shop::where('uid',session('user')['uid'])->first(); //1改成session用户id
        return view('home.shop.deng',compact('shop_status','user_good','count','user'));
    }

}
