<?php

namespace App\Http\Controllers\admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\model\Order;
use App\model\message;
use App\model\user_details;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //获取数据
        $data = Order::orderBy('id','desc')
        ->where(function($query) use($request){
            $pay_status = $request->input('pay_status',''); //获取支付状态
            $payment = $request->input('payment',''); //获取支付方式
            $order_status = $request->input('order_status',''); //获取订单状态
            $oid = $request->input('oid',''); //获取订单号
            if(!empty($pay_status)){
                $query->where('pay_status','like','%'.$pay_status.'%'); //查询支付状态
            }
            if(!empty($payment)){
                $query->where('payment','like','%'.$payment.'%'); //查询支付方式
            }
            if(!empty($order_status)){
                $query->where('order_status','like','%'.$order_status.'%'); //查询订单状态
            }
            if(!empty($oid)){
                $query->where('oid','like','%'.$oid.'%'); //查询订单号
            }
        })->paginate($request->input('num', 2)); //分页
        $data = (new order())->tree($data);
        //格式化时间戳
        foreach ($data as  $value) {
            $value['time'] = date('Y-m-d H:i:s',$value['time']);
        }
        $count = count($data);
        return view('admin.order.list',compact('request','data','count'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.order.add');
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
        // return $id;
        // 获取订单信息
        $show = order::find($id);
        //4.处理支付方式
            switch ($show['payment']) {
                case 1:
                    $show['payment'] = '支付宝';
                    break;
                case 2:
                    $show['payment'] = '微信';
                    break;
                case 3:
                    $show['payment'] = '货到付款';
                    break;
            }
            //4.处理配送方式
            switch ($show['delivery_method']) {
                case 1:
                    $show['delivery_method'] = '中通';
                    break;
                case 2:
                    $show['delivery_method'] = '申通';
                    break;
                case 3:
                    $show['delivery_method'] = '圆通';
                    break;
            }
        // return $show;
        // 获取用户昵称
        $user = $show->order_user;
        // return $user;
        // 获取用户信息
        $userShow = $user->userShow;
        //获取用户评论
        $message = message::where('uid',$userShow['user_id'])->first();
        return view('admin.order.show',compact('show','user','userShow','message'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // 查询要删除的用户
        $res = order::find($id)->delete();
        // 判断是否成功,将结果返回客户端
        if($res){
            $data = [
                'status'=>1,
            ];
        }else{
            $data = [
                'status'=>0,
            ];
        }
        return $data;
    }

    /**
     * 批量删除
     */
    public function delAll(Request $request)
     {
        $input = $request->input('ids');
//        return $input;
        $res = order::destroy($input);
        if($res){
            $data = [
                'status'=>1,
            ];
        }else{
            $data = [
                'status'=>0,
            ];
        }

        return $data;
     }

     /**
      * 确认发货处理
      */
    public function queren(Request $request)
    {   
        // 接收参数
        $id = $request->input('id','');
        // 修改订单状态
        $res = order::where('id',$id)->update(['order_status'=>'2']);
        if($res){
            $data =1;
        }else{
            $data =0;
        }
        return $data;
    }
}
