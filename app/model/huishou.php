<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;

class huishou extends Model
{
     //模型关联的表 ，如果命名符合规范可以不定义
    public $table = 'data_huishou';
    public $timestamps = false;

    // 不允许批量修改的字段
    public $guarded = [];
}
