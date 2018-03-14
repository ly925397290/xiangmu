<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;

class user_good extends Model
{
    // 关联的表名
    public $table = 'user_good';
    // 是否自动维护created_at/updated_at字段
    public $timestamps = false;
    /**
     * 设置批量赋值
     */
    protected $guarded = [];
}
