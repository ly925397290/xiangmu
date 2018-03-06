<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;

class role extends Model
{
    //链接角色表
    protected $table = 'data_role';
    /**
     * 该模型是否被自动维护时间戳
     *
     * @var bool
     */
    public $timestamps = false;
}
