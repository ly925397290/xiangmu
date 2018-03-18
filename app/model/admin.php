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

     /**
     * 设置批量修改
     */
    protected $guarded = [];
    /**
     * 链接用户与角色多对多关系
     */
    public function user_role()
    {
    	return $this->belongsToMany('App\model\role','user_role','user_id','role_id')->where('status','1');
    }
    public function role_permission()
    {
        return $this->belongsToMany('App\model\permission','role_permission','role_id','permission_id');
    }
}
