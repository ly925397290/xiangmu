<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class shoucang extends Model
{
    
    //链接轮播图表
    protected $table = 'shoucang';
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

    protected $fillable = ['gid','uid'];
}
