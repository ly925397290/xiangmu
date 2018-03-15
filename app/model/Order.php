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
    protected $fillable = ['oid','oprice','money','user_id','time'];


    public function order_good()
        {
            return $this->hasOne('App\model\good','good_id');
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
            //5.处理配送方式
            switch ($value['delivery_method']) {
                case 1:
                    $value['delivery_method'] = '中通';
                    break;
                case 2:
                    $value['delivery_method'] = '申通';
                    break;
                case 3:
                    $value['delivery_method'] = '圆通';
                    break;
            }
            $value['user_id'] = user_details::where('user_id',$value['user_id'])->first()->people;
        }
        //3. 返回格式化后的数据
        return $data;
    }


    /**
     * 关联订单属于用户模型
     */

    public function order_user()
    {
        return $this->belongsTo('App\Model\User','user_id');
    }
}
