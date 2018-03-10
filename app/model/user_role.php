<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;

class user_role extends Model
{
    //链接用户和角色关系表
    protected $table = 'user_role';
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

    
    /**
     * 链接用户与角色多对多关系
     */
    public function user_permission()
    {
    	return $this->belongsToMany('App\model\permission','role_permission','role_id','permission_id');
    }
}
