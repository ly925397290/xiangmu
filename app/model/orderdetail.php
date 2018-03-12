<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;

class orderdetail extends Model
{
    // 关联的表名
    public $table = 'data_orderdetail';
    // 是否自动维护created_at/updated_at字段
    public $timestamps = false;
    protected $fillable = ['good_id','addr_id','order_id'];
}
