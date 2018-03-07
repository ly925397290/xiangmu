<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;


class Nav extends Model
{
   //链接轮播图表
    protected $table = 'data_nav';
    /**
     * 该模型是否被自动维护时间戳
     *
     * @var bool
     */
    public $timestamps = false;
    /**
     * 设置主键
     */
     public $primaryKey = 'nid';

     public $guarded = [];
}
