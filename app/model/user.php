<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    // 关联的表名
    protected $table = 'data_users';
    // 表的主键
    public $primaryKey = 'uid';
    // 是否自动维护
    public $timestamps = false;
<<<<<<< HEAD

    /**
     * 创建用户详情一对一模型
     */
    public function userShow()
    {
    	return $this->hasOne('App\model\user_details','user_id');
    }
}
=======
>>>>>>> 81f7a32432852e145aac4d3ef8e41600af7141bd
