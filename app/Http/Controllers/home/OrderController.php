<?php

namespace App\Http\Controllers\home;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\model\Order;
use App\model\User;
use App\model\good;
use App\model\user_good;
use App\model\message;
use DB;
class OrderController extends Controller
{
    /**
     * 加载订单支付页
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // 获取用户的订单信息
        $user = user::find(session('use')['uid']);
        $user['show'] = $user->userShow;
        $user['order'] = $user->user_order;
        $user_good = user_good::where('user_id',session('user')['uid'])->get();
        foreach ($user_good as  $value) {
            $good = good::where('gid',$value['good_id'])->first();
            $value['price'] = $good['price'];
            $value['gname'] = $good['gname'];
            $value['urls'] = $good['urls'];
        }
        //格式化时间戳
        foreach ($user['order'] as  $value) {
            $value['time'] = date('Y-m-d H:i:s');
        }
        // return $user;
        //计算购物车中商品总和
        $count = DB::table('user_good')->where('user_id',session('user')['uid'])->count();
        return view('home/order',compact('user','count','user_good'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function pinglun($id)
    {
        return view('home.pinglun',compact('id'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request,$id)
    {
        $input = $request->except('_token');
        $res = message::create(['oid'=>$id,'content'=>$input['content'],'uid'=>1]);
        if($res){
            $data = 1;
        }else{
            $data = 0;
        }
        return $data;

    }

    public function edit(Request $request){
        $id = $request->except('_token');
        //修改订单的状态
        $status = order::where('id',$id)->update(['order_status'=>2]);
        if($status){
            $data = 1;
        }else{
            $data = 0;
        }
        return $data;
    }
}
