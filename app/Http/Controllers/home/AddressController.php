<?php

namespace App\Http\Controllers\home;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\model\user_details;
use App\model\user;

class AddressController extends Controller
{
    
    public function index()
    {
        // 获取用户的订单信息
        $user = user::find(1);
        $user['show'] = $user->userShow;
        $good = $user->user_good;
//计算购物车中商品总和
        $count = DB::table('user_good')->where('user_id',1)->count();
        return view('home/addr_add',compact('user','count','good'));
    }
    // public function index()
    // {

    //     return view('home/address');
    // }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        //1.接收数据
        $input = $request->except('_token');
        // 2.入库
        $res = user_details::create(['addr'=>$input['addr'],'user_id'=>1,'people'=>$input['people'],'phone'=>$input['phone']]);
        if($res){
            $data = 1;
        }else{
            $data = 0;
        }
        return $data;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
    }
}
