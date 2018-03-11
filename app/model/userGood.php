<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;

class userGood extends Model
{
    //链接用户和角色关系表
    protected $table = 'user_good';
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
