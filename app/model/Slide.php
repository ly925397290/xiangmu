<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;

class Slide extends Model
{
   
    //链接轮播图表
    protected $table = 'data_slid';
    /**
     * 该模型是否被自动维护时间戳
     *
     * @var bool
     */
    public $timestamps = false;
    /**
     * 设置主键
     */
     public $primaryKey = 'sid';

     protected $fillable  = ['simg','surl','status','order','sliname'];
}
