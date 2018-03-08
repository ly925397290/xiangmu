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
    /**
     * 设置批量修改
     */
    protected $guarded = [];

    /**
     * 创建角色和权限多对多模型
     */
    public function role_permission()
    {
    	return $this->belongsToMany('App\model\permission','role_permission','role_id','permission_id');
    }
}
