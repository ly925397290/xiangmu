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
}
