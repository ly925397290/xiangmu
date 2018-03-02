<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;

class cate extends Model
{
    //链接菜单分类表
    protected $table = 'data_cate';
    /**
     * 该模型是否被自动维护时间戳
     *
     * @var bool
     */
    public $timestamps = false;
}
