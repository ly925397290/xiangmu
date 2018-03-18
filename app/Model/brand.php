<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;

class brand extends Model
{
     //链接品牌表
    protected $table = 'data_brand';
    /**
     * 该模型是否被自动维护时间戳
     *
     * @var bool
     */
    public $timestamps = false;

    public $guarded = [];

    //关联品牌对应分类
    public function brand_cate()
    {
    	return $this->hasOne('App\model\cates','cate_id');
    }
}
