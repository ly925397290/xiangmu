<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;

class pcate extends Model
{
    //链接权限分类表
    protected $table = 'data_pcate';
    /**
     * 该模型是否被自动维护时间戳
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 批量赋值
     */
    protected $guarded = [];

    /**
     * 创建权限分类和权限一对多模型
     */
    public function pcate_permission()
    {
        return $this->hasMany('App\model\permission','pcate_id');
    }
}
