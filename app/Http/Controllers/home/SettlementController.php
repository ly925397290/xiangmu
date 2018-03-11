<?php

namespace App\Http\Controllers\home;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\model\link;
use App\model\Nav;
use App\model\Slide;
use App\model\good;
use App\model\userGood;
use App\model\order;

class SettlementController extends Controller
{
    /**
     * 加载结算页
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request,$id)
    {   
        $data = good::find($id);
        return view('home/settlement',compact('data'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function shoucang($id)
    {
        $res = userGood::create(['user_id'=>1,'good_id'=>$id]);
        // $res = userGood::create(['user_id'=>session(''),'good_id'=>$id]);
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
    public function pay(Request $request)
    {   
        // 1.接收数据
        $data = $request->except('_token');
        // 2.生成订单号
        $order['oid'] = time()+$data['gid'];
        // 3.金额
        $order['oprice'] = $data['many'];
        $order['money'] = $data['many'];
        // 4.收货人信息
        $order['user_id'] = $data['gid'];
        $res = order::create($order);
        if($res){
            $data = 1;
        }else{
            $data = 0;
        }
        return $data;

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
