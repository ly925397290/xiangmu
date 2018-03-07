<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;

class permission extends Model
{
    //链接权限表
    protected $table = 'data_permission';
    /**
     * 该模型是否被自动维护时间戳
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 批量赋值
     */
     protected $fillable  = ['permission','urls','pcate_id'];

     /**
      * 创建权限属于权限分类模型
      */
     public function permission_pcate()
     {
        return $this->belongsTo('App\model\pcate','pcate_id');
     }
}
