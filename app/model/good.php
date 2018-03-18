<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;

class good extends Model
{
    //

        //模型关联的表 ，如果命名符合规范可以不定义
    public $table = 'data_goods';
    //定义主键  , 默认值就是id
    public $primaryKey = 'gid';

    // 定义时间戳  larval会自动维护create_at update_at两个表字段，所以如果表中没有这两个字段，一定要关闭自维护
    public $timestamps = false;

    // 不允许批量修改的字段
    public $guarded = [];

    //
     protected $fillable  = ['gname','status','price','inven','urls','cid','tuijian','addtime','uid'];

        
//返回格式化的分类数据
    public function getTree()
    {
        $cates = $this->orderBy('cate_order','asc')->get();
        return $this->tree($cates);
    }


    //数据格式化（缩进、排序）
    public function tree($Category)
    {
        // 处理分类名称
        foreach ($Category as $key => $value) {
            // 统计字符串出现的次数
            $n = substr_count($value['apath'],',');
            // 重复使用字符串 拼接分类名称
        $Category[$key]['title'] = str_repeat('|----',$n).$Category[$key]['title'];
        }
        return $Category;
    }

    /**
     * 创建商品属于分类模型
     */
    public function good_cate()
     {
        return $this->belongsTo('App\model\cate','cid');
     }

       public function data_goodsdetail()
     {
        return $this->hasOne('App\model\goodsdetail','gid');
     }

}
