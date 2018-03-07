<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;

class role_permission extends Model
{
    //链接角色和权限关系表
    protected $table = 'role_permission';
    /**
     * 该模型是否被自动维护时间戳
     *
     * @var bool
     */
    public $timestamps = false;
    protected $guarded = [];
}
