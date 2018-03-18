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
     * 加载订单页
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('home/order');
    }


    /**
     * 确认收货处理
     */
    public function edit(Request $request){
        $id = $request->except('_token');
        //修改订单的状态
        $status = order::where('id',$id)->update(['order_status'=>4]);
        if($status){
            $data = 1;
        }else{
            $data = 0;
        }
        return $data;
    }

    /**
     * 评论页
     *
     * @return \Illuminate\Http\Response
     */
    public function pinglun($id)
    {
        return view('home.pinglun',compact('id'));
    }

    /**
     * 评论处理
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request,$id)
    {
        $input = $request->except('_token');
        // return $id;
        //修改订单的状态
        $status = order::where('oid',$id)->update(['order_status'=>5]);
        $res = message::create(['oid'=>$id,'content'=>$input['content'],'uid'=>session('user')['uid']]);
        if($res){
            $data = 1;
        }else{
            $data = 0;
        }
        return $data;

    }
    /**
     * 调用订单数据处理
     */
    public function change($id){
        $order = Order::change($id);
        return $order;
    }
}
