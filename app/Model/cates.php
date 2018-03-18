<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;

class cates extends Model
{
    //链接回收商品分类表
    protected $table = 'data_cates';
    /**
     * 该模型是否被自动维护时间戳
     *
     * @var bool
     */
    public $timestamps = false;
    //批量赋值
    public $guarded = [];
}
