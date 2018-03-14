<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Shop extends Model
{
    
    //链接轮播图表
    protected $table = 'data_home_shop';
    /**
     * 该模型是否被自动维护时间戳
     *
     * @var bool
     */
    public $timestamps = false;
    /**
     * 设置主键
     */
     public $primaryKey = 'id';

      // 不允许批量修改的字段
    public $guarded = [];

    protected $fillable = ['status','shopname','id','desc'];
}
