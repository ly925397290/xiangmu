<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;

class admin extends Model
{
    //链接管理员表
    protected $table = 'data_admin';
    /**
     * 该模型是否被自动维护时间戳
     *
     * @var bool
     */
    public $timestamps = false;
    
}
