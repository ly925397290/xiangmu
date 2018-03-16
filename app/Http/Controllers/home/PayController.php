<?php

namespace App\Http\Controllers\home;

use Illuminate\Http\Request;
use App\model\good;
use App\model\Order;
use App\model\user;
use App\model\user_good;
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
        // return $input;
        //获取用户的收货地址
        $addr = user_details::where('user_id',session('user')['id'])->get();
        
        //获取所有购物车信息
        $user_good = user_good::where('user_id',session('user')['id'])->get();
        foreach ($user_good as  $value) {
            $goods = good::where('gid',$value['good_id'])->first();
            $value['price'] = $goods['price'];
            $value['gname'] = $goods['gname'];
            $value['urls'] = $goods['urls'];
        }
        // 获取请求中的商品
        foreach ($input['ids'] as $key => $value) {
            $good[] = good::find($value);
        }
        foreach ($good as  $key=>$value) {
            $value['number'] = $input['number'][$key];
            // $gid[$key] = $value['gid'];
            // $good['price'] = $input['price'];
        }
        // return $good;
        //计算购物车中商品总和
        $count = DB::table('user_good')->where('user_id',session('user')['id'])->count();
        return view('home.pay',compact('addr','count','gid','user_good','good','input'));
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
            // 开启事务处理
        DB::beginTransaction();
        try{
            // return $input;
            // 2.生成订单号
            $order['oid'] = date('YmdHis',time())+time()+$id+session('user')['id'];//session
            // 3.金额
            $order['oprice'] = $input['price'];
            $order['money'] = $input['price'];
            // 4.收货人信息
            $order['user_id'] = session('user')['id'];//session
            $order['time'] = time();
            // $order['order_id'] = DB::table('data_order')->insertGetId(['oid'=>$order['oid'],'oprice'=>$order['oprice'],'money'=>$order['money'],'user_id'=>$order['user_id']]);
            $oid = Order::create($order);
            $order['order_id'] = $oid->id;
            // return $oid;
            // 放入订单详情表中    
            // 5.收货地址
            $addr = user_details::where('user_id',session('user')['id'])->first();
            $order['addr_id'] = isset($input['addr']) ? $input['addr'] : $addr['id'];
            if($id == 0){
                foreach ($input['ids'] as $key => $value) {
                    //6.商品id
                    $order['good_id'] = $value;
                    //7.订单表id
                    $orderdetail = orderdetail::create($order);
                    //8购物车中的商品购买够删除(购物车中的商品信息)
                    user_good::where('user_id',session('user')['id'])->where('good_id',$value)->delete();
                }
            }else{ 
                //6.商品id
                $order['good_id'] = $id;
                //7.订单表id
                $orderdetail = orderdetail::create($order);
            }
            DB::commit();
            if($orderdetail){
                $data = 1;
            }else{
                $data = 0;
            }
            return $data;
        }catch (Exception $e){
            DB::rollBack();
            return redirect()->back();
        }

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

}
