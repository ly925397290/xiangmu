<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    //链接角色和权限关系表
    protected $table = 'data_order';
    /**
     * 该模型是否被自动维护时间戳
     *
     * @var bool
     */
    public $timestamps = false;
    /**
     * 设置批量赋值
     */
    protected $guarded = [];

    //返回格式化的分类数据
    public function getTree(Request $request)
    {
        /*多条件查询*/
        $data = Order::orderBy('id','desc')
        ->where(function($query) use($request){
            $start = $request->input('start',''); //获取开始时间
            $end = $request->input('end','');     //获取结束时间
            $pay_status = $request->input('pay_status',''); //获取支付状态
            $payment = $request->input('payment',''); //获取支付方式
            $order_status = $request->input('order_status',''); //获取订单状态
            $oid = $request->input('oid',''); //获取订单号
            if(!empty($start) || !empty($end)){
            // $query->whereBetween('start',[$start,$end])->get(); //查询订单区间
            }
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
        return $this->tree($data);
    }

    //数据格式化
    public function tree($data)
    {
        foreach ($data as $value) {
            //1.处理订单状态
            switch ($value['order_status']) {
                case 1:
                    $value['order_status'] = '待确认';
                    break;
                case 2:
                    $value['order_status'] = '已确认';
                    break;
                case 3:
                    $value['order_status'] = '已收货';
                    break;
                case 4:
                    $value['order_status'] = '已取消';
                    break;
                case 5:
                    $value['order_status'] = '已完成';
                    break;
                case 6:
                    $value['order_status'] = '已作废';
                    break;
            }
            //2.处理支付状态
            switch ($value['pay_status']) {
                case 1:
                    $value['pay_status'] = '未支付';
                    break;
                case 2:
                    $value['pay_status'] = '已支付';
                    break;
            }
            //3.处理发货状态
            switch ($value['shipping_status']) {
                case 1:
                    $value['shipping_status'] = '已发货';
                    break;
                case 0:
                    $value['shipping_status'] = '未发货';
                    break;
            }
            //4.处理支付方式
            switch ($value['payment']) {
                case 1:
                    $value['payment'] = '支付宝';
                    break;
                case 2:
                    $value['payment'] = '微信';
                    break;
                case 3:
                    $value['payment'] = '货到付款';
                    break;
            }
        }
        //3. 返回格式化后的数据
        return $data;
    }
}
