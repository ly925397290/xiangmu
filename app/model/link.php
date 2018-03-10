<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;

class link extends Model
{
    //模型关联的表 
    public $table = 'date_links';


    // 定义时间戳  
    public $timestamps = false;

    /**
     * 设置批量赋值
     */
    protected $guarded = [];

}
