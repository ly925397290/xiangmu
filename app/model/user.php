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


    /**
     * 创建用户详情一对一模型
     */
    public function userShow()
    {
    	return $this->hasOne('App\model\user_details','user_id');
    }

    /**
     * 创建用户订单一对多模型
     */
    public function user_order()
    {
        return $this->hasMany('App\model\Order','user_id');
    }

    // 创建用户商品多对多模型(购物车)
    public function user_good()
    {
        return $this->belongsToMany('App\model\good','user_good','user_id','good_id');
    }

    
}

