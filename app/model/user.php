<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;

class user extends Model
{
    //链接用户表
    protected $table = 'data_users';
    /**
     * 该模型是否被自动维护时间戳
     *
     * @var bool
     */
    public $timestamps = false;
    /**
     * 设置主键
     */
     public $primaryKey = 'uid';
}
