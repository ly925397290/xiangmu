<?php

namespace App\Http\Controllers\home;

use Illuminate\Http\Request;
use App\model\good;
use App\model\Order;
use App\model\user;
use App\model\orderdetail;
use App\model\user_details;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use DB;

class PayController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request,$id)
    {
        //接收数据
        $input = $request->except('_token');
        //获取商品信息
        if(isset($input['ids'])){
            foreach ($input['ids'] as  $value) {
            $goods[] = good::find($value);
            }
            $goods['status'] = 1;
        }else{
            $goods = good::find($id);
            $goods['status'] = 0;
        }
        
        //获取用户的收货地址
        $addr = user_details::where('user_id',1)->get();
        $user = user::find(1);
        $good = $user->user_good;
        //计算购物车中商品总和
        $count = DB::table('user_good')->where('user_id',1)->count();
        return view('home.pay',compact('goods','request','addr','count','good'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request,$id)
    {
        // 1.接收数据
        //放入订单表中
            $input = $request->except('_token');
            // 2.生成订单号
            $order['oid'] = time()+$id+1;//session
            // 3.金额
            $order['oprice'] = $input['price'];
            $order['money'] = $input['price'];
            // 4.收货人信息
            $order['user_id'] = 1;//session
            $order['order_id'] = DB::table('data_order')->insertGetId(['oid'=>$order['oid'],'oprice'=>$order['oprice'],'money'=>$order['money'],'user_id'=>$order['user_id']]);
        // 放入订单详情表中    
            // 5.收货地址
            $order['addr_id'] = $input['addr'];
            //6.商品id
            $order['good_id'] = $id;
            //7.订单表id
            $orderdetail = orderdetail::create($order);
            if($orderdetail){
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
