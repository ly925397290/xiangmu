<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;
use App\model\user;
use App\model\huishou;
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
                    $value['order_status']  = "<form class='layui-form'>";
                    $value['order_status'] .= "<input type='hidden' name='id' value='{$value['id']}'>";
                    $value['order_status'] .= "<button class='layui-btn layui-btn-warm layui-btn-mini' lay-filter='queren' lay-submit=''><i class='layui-icon'></i>确定发货</button>";
                    $value['order_status'] .= "</form>";
                    break;
                case 2:
                    $value['order_status'] = "<span class='layui-btn layui-btn-normal layui-btn-mini'>已发货</span>";
                    break;
                case 3:
                    $value['order_status'] = "<span class='layui-btn layui-btn-danger layui-btn-mini'>待收货</span>";
                    break;
                case 4:
                    $value['order_status'] = "<span class='layui-btn layui-btn-normal layui-btn-mini'>已收货</span>";
                    break;
                case 5:
                    $value['order_status'] = "<span class='layui-btn layui-btn-normal layui-btn-mini'>已评价</span>";
                    break;
            }
            //2.处理支付状态
            switch ($value['pay_status']) {
                case 1:
                    $value['pay_status'] = "<span class='layui-btn layui-btn-danger layui-btn-mini'>未支付</span>";
                    break;
                case 2:
                    $value['pay_status'] = "<span class='layui-btn layui-btn-normal layui-btn-mini'>已支付</span>";
                    break;
            }
            //4.处理支付方式
            switch ($value['payment']) {
                case 1:
                    $value['payment'] = "<span class='layui-btn layui-btn-normal layui-btn-mini'>支付宝</span>";
                    break;
                case 2:
                    $value['payment'] = "<span class='layui-btn layui-btn-normal layui-btn-mini'>微信</span>";
                    break;
                case 3:
                    $value['payment'] = "<span class='layui-btn layui-btn-normal layui-btn-mini'>货到付款</span>";
                    break;
            }
            //5.处理配送方式
            switch ($value['delivery_method']) {
                case 1:
                    $value['delivery_method'] = "<span class='layui-btn layui-btn-normal layui-btn-mini'>中通</span>";
                    break;
                case 2:
                    $value['delivery_method'] = "<span class='layui-btn layui-btn-normal layui-btn-mini'>申通</span>";
                    break;
                case 3:
                    $value['delivery_method'] = "<span class='layui-btn layui-btn-normal layui-btn-mini'>圆通</span>";
                    break;
            }
            $user = user_details::where('user_id',$value['user_id'])->first();
            $value['user_id'] = empty($user) ? '' :$user->people;
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

    /**
     *前台订单处理 
     ***/
    static public function change($id){
    //根据获取到的参数查询对应的数据
        // 1.当获取的参数为 1 时代表获取所有的订单
        switch ($id) {
            case 1:
                // 1.1获取当前所有用户的订单
                $user = order::where('user_id',(session('user')['uid']))->orderBy('id','desc')->get();
                // return $user;
                //格式化时间戳
                foreach ($user as  $value) {
                    $value['time'] = date('Y-m-d H:i:s',$value['time']);
                }
                // 1.2将数据拼接并返回给客户端
                $order = '';
                foreach($user as $v) {
                    $order .= "<tr>";
                        $order .= "<td>{$v['oid']}</td>";
                        $order .= "<td>{$v['oprice']}</td>";
                        $order .= "<td>{$v['time']}</td>";
                        $order .= "<td>";
                            if($v['order_status'] == 1){
                                $order .= "<span class='layui-btn layui-btn-danger layui-btn-mini'>待发货</span>";
                            }elseif($v['order_status'] == 2){ 
                                $order .= "<span class='layui-btn layui-btn-normal layui-btn-mini'>已发货</span>";
                            }elseif($v['order_status'] == 3){
                                $order .= "<form class='layui-form'>";
                                $order .= "<input type='hidden' name='id' value='{$v['id']}'>";
                                $order .= "<button  class='layui-btn' lay-filter='add' lay-submit=''><i class='layui-icon'></i>确定收货</button>";
                                $order .= "</form>";
                            }elseif($v['order_status'] == 4){
                                $order .= '<button class="layui-btn" onclick="x_admin_show(\'评论\',\'/home/pinglun/'.$v["oid"].'\'600,400)"><i class="layui-icon"></i>评论</button>';
                            }elseif($v['order_status'] == 5){
                                $order .= "<span class='layui-btn layui-btn-normal layui-btn-mini'>已完成</span>";
                            }
                        $order .= "</td>";
                    $order .= "<tr>";
                }
            break;
            // 2.当获取的参数为 2 时代表获取所有的待发货的订单
            case 2:
                // 2.1获取当前所有用户的待发货的订单
                $user = order::where('user_id',(session('user')['uid']))->where('order_status','1')->orWhere('order_status','2')->orderBy('id','desc')->get();
                // return $user;
                //格式化时间戳
                foreach ($user as  $value) {
                    $value['time'] = date('Y-m-d H:i:s',$value['time']);
                }
                // 2.2将数据拼接并返回给客户端
                $order = '';
                foreach($user as $v) {
                    $order .= "<tr>";
                        $order .= "<td>{$v['oid']}</td>";
                        $order .= "<td>{$v['oprice']}</td>";
                        $order .= "<td>{$v['time']}</td>";
                        $order .= "<td class='td-status'>";
                            if($v['order_status'] == 1){
                                $order .= "<span class='layui-btn layui-btn-danger layui-btn-mini'>待发货</span>";
                            }else{
                                $order .= "<span class='layui-btn layui-btn-normal layui-btn-mini'>已发货</span>";
                            }
                        $order .= "</td>";
                    $order .= "<tr>";
                }
            break;
            // 3.当获取的参数为 3 时代表获取所有待收货的订单
            case 3:
                 // 3.1获取当前所有用户待收货的订单
                $user = order::where('user_id',(session('user')['uid']))->where('order_status','2')->orWhere('order_status','4')->orderBy('id','desc')->get();
                //格式化时间戳
                foreach ($user as  $value) {
                    $value['time'] = date('Y-m-d H:i:s',$value['time'] );
                }
                // 3.2将数据拼接并返回给客户端
                $order = '';
                foreach($user as $v) {
                    $order .= "<tr>";
                        $order .= "<td>{$v['oid']}</td>";
                        $order .= "<td>{$v['oprice']}</td>";
                        $order .= "<td>{$v['time']}</td>";
                        $order .= "<td class='td-status'>";
                            if($v['order_status'] == 2){
                                $order .= "<form class='layui-form'>";
                                $order .= "<input type='hidden' name='id' value='{$v['id']}'>";
                                $order .= "<button  class='layui-btn layui-btn-mini' lay-filter='add' lay-submit=''><i class='layui-icon'></i>确定收货</button>";
                                $order .= "</form>";
                            }else{
                                $order .= "<span class='layui-btn layui-btn-normal layui-btn-mini'>已收货</span>";
                            }
                        $order .= "</td>";
                    $order .= "<tr>";
                }
            break;
            // 4.当获取的参数为 4 时代表获取所待评价的订单
            case 4:
                // 4.1获取当前所有用户的待评价的订单
                $user = order::where('user_id',(session('user')['uid']))->where('order_status','4')->orWhere('order_status','5')->orderBy('id','desc')->get();
                // return $user;
                //格式化时间戳
                foreach ($user as  $value) {
                    $value['time'] = date('Y-m-d H:i:s',$value['time']);
                }
                // 4.2将数据拼接并返回给客户端
                $order = '';
                foreach($user as $v) {
                    $order .= "<tr>";
                        $order .= "<td>{$v['oid']}</td>";
                        $order .= "<td>{$v['oprice']}</td>";
                        $order .= "<td>{$v['time']}</td>";
                        $order .= "<td>";
                        if($v['order_status'] == 4){
                            $order .= '<button class="layui-btn" onclick="x_admin_show(\'评论\',\'/home/pinglun/'.$v["oid"].'\',600,400)"><i class="layui-icon"></i>评论</button>';
                        }else{
                            $order .= "<span class='layui-btn layui-btn-normal layui-btn-mini'>已评价</span>";
                        }
                        $order .= "</td>";
                    $order .= "<tr>";
                }
            break;
            // 5.当获取的参数为 5 时代表获取所有回收的订单
            case 5:
                // 5.1获取当前所有用户的回收的订单
                $user = huishou::where('user_id',(session('user')['uid']))->orderBy('id','desc')->get();
                // return $user;
                //格式化时间戳
                foreach ($user as  $value) {
                    $value['time'] = date('Y-m-d H:i:s',$value['time']);
                }
                // 5.2将数据拼接并返回给客户端
                $order = '';
                foreach($user as $v) {
                    $order .= "<tr>";
                        $order .= "<td>{$v['oid']}</td>";
                        $order .= "<td>{$v['oprice']}</td>";
                        $order .= "<td>{$v['time']}</td>";
                        $order .= "<td class='td-status'>";
                            if($v['status'] == 0){
                                $order .= "<span class='layui-btn layui-btn-danger layui-btn-mini'>待检测";
                            }else{
                                $order .= "<span class='layui-btn layui-btn-normal layui-btn-mini'>已检测";
                            }
                        $order .= "</span></td>";
                    $order .= "<tr>";
                }
            break;
        }
        return $order;
    }
}
