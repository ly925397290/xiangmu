<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;

class user_details extends Model
{
    // 关联的表名
    public $table = 'data_user_details';
    // 是否自动维护created_at/updated_at字段
    public $timestamps = false;
    /**
     * 设置批量赋值
     */
    protected $guarded = [];
}
