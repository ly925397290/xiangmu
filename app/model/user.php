<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    // 关联的表名
    public $table = 'data_users';
    // 表的主键
    public $primaryKey = 'uid';
    // 是否自动维护created_at/updated_at字段
    public $timestamps = false;

    /**
     * 创建用户详情一对一模型
     */
    public function userShow()
    {
    	return $this->hasOne('App\model\user_details','user_id');
    }
}
