<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;

class cate extends Model
{
    //链接菜单分类表
    protected $table = 'data_cate';
    /**
     * 该模型是否被自动维护时间戳
     *
     * @var bool
     */
    public $timestamps = false;

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
}
