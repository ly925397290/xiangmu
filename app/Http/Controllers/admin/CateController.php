<?php

namespace App\Http\Controllers\admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\model\cate;
use DB;
class CateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $cate = DB::table('data_cate')->select('*',DB::raw('concat(path,",",id) as paths'))->orderBy('paths','asc')->get();
        // 处理分类名称
        foreach ($cate as $key => $value) {
            // 统计字符串出现的次数
            $n = substr_count($value['path'],',');
            // 重复使用字符串 拼接分类名称
            $cate[$key]['title'] = str_repeat('|----',$n).$cate[$key]['title'];
        }
        $count = count($cate);
        return view('admin.cate.category',['cate'=>$cate,'count'=>$count]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // 1.接收数据
        $data = $request->except('_token');
        // return $data;
        // 处理数据
        if($data['pid'] == 0){
            // 顶级分类
            $data['path'] = 0;
        }else{
            // 子分类
            // 查询父级分类的数据
            $parent_data = cate::where('id',$data['pid'])->first();
            // 处理数据 
            $data['path'] = $parent_data['path'].','.$parent_data['id'];
        }
        // 2.添加到数据库
        $cate = new cate;
        $cate->pid = $data['pid'];
        $cate->path = $data['path'];
        $cate->title = $data['cate_name'];
        $res = $cate->save();
        // 3.判读是否成功返回给客户端
        if($res){
            return redirect('/admin/cate')->with('success','添加成功');
        }else{
            return back()->with('error','添加失败');
        }

    }
    public function edit($id)
    {
        $cates = DB::table('data_cate')->select('*',DB::raw('concat(path,",",id) as paths'))->orderBy('paths','asc')->get();
        // 处理分类名称
        foreach ($cates as $key => $value) {
            // 统计字符串出现的次数
            $n = substr_count($value['path'],',');
            // 重复使用字符串 拼接分类名称
            $cates[$key]['title'] = str_repeat('|----',$n).$cates[$key]['title'];
        }
        //查询分类名
        $cate = cate::find($id);
        //查询分类的父类
        $parent = cate::where('id',$cate['pid'])->first();
        // return $parent;
        if($parent){
            $pid = $parent['id'];
        }else{
             $pid = 0;
        }
        return view('admin.cate.edit',compact('cate','cates','$pid'));
    }

    public function update(Request $request, $id)
    {
         // 1.接收数据
        $data = $request->except('_token');
        // 处理数据
        if($data['pid'] == 0){
            // 顶级分类
            $data['path'] = 0;
        }else{
            // 子分类
            // 查询父级分类的数据
            $parent_data = cate::where('id',$data['pid'])->first();
            // 处理数据 
            $data['path'] = $parent_data['path'].','.$parent_data['id'];
        }

        // 2.更新到数据库
        $cate = cate::where('id',$id)->update(['path'=>$data['path'],'pid'=>$data['pid'],'title'=>$data['title']]);
        // 3.判读是否成功返回给客户端
        if($cate){
            $data = 1;
        }else{
            $data = 0;
        }
        return $data;
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //查询分类下是否有子分类
        $cate = cate::where('pid',$id)->first();
        if($cate){
            $data = 1;
        }else{
            // 查询要删除的用户
             $res = cate::find($id)->delete();
            // 判断是否成功,将结果返回客户端
            if($res){
                $data = 0;
            }else{
                $data = 2;
            }
        }
        return $data;
    }

    public function delAll(Request $request)
     {
        $input = $request->input('ids');
        foreach ($input as $value) {
            $cate = cate::where('pid',$value)->first();
            if($cate){
                return $data = 1;
            }else{
                return 2;
                // 查询要删除的用户
                 $res = cate::find($value)->delete();
                // 判断是否成功,将结果返回客户端
                if($res){
                    return  $data = 0;
                }else{
                    return $data = 2;
                }
            }
        }
     }
}
