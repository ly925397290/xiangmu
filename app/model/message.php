<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;

class message extends Model
{
    //链接权限表
    protected $table = 'data_message';
    // 定义时间戳  larval会自动维护create_at update_at两个表字段，所以如果表中没有这两个字段，一定要关闭自维护

protected $guarded = [];
}
