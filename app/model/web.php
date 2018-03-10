<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;

class web extends Model
{
    //链接菜单分类表
    protected $table = 'data_webs';
    /**
     * 该模型是否被自动维护时间戳
     *
     * @var bool
     */
    public $timestamps = false;
    /**
     * 可以批量赋值
     */
    protected $fillable = ['web_title','web_name','web_content','web_order','field_type','field_value'];
}
