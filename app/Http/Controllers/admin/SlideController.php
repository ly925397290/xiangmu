<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\model\Slide;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class SlideController extends Controller
{
    /**
     * 更改录播图列表的排序
     * 
     * 
     * @param request
     * @return:操作结果
     */
    public function changeorder(Request $request)
    {
        $sid = $request->input('sid');
        $order = $request->input('order');
        $slideshow = Slide::find($sid);
        $res = $slideshow->update(['order'=>$order]);
        if($res){
            $data =[
                'status'=> 0,
                'msg'=>'修改成功'
            ];
        }else{
            $data =[
                'status'=> 1,
                'msg'=>'修改失败'
            ];
        }

        return $data;
    }

    /**
     *
     * @return 列表视图
     */
    public function index()
    {

       
        $slideSlide = Slide::orderBy('order','asc')->get();

      
        return view('Admin.Slide.list',['slideSlide'=>$slideSlide]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('Admin.Slide.add');
    }

    /**
     * 把添加页面提交的数据存到数据库表.
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return 执行操作结果
     */
    public function store(Request $request)
    {
        $input = $request->except('_token','file_upload');



        
      //   //表单验证规则
      //   $rule = [
      //       'sliname'=>'required|regex:/^[\x{4e00}-\x{9fa5}_]+$/u',
      //       "order"=>'required|numeric',

      //   ];
      //   $mess = [
      //      // 'sliname.required'=>'标题必须输入',
      //      // 'sliname.regex'=>'标题必须是汉字',
      //       //'order.required'=>'排序必须输入',
      //       //'order.numeric'=>'排序必须是数字',

      //   ];

      // //  $validator =  Validator::make($input,$rule,$mess);
      //   // if ($validator->fails()) {
      //   //     return redirect('admin/slide/create')
      //   //        ->withErrors($validator)
      //   //         ->withInput();
      //   // }

      //  // $slidiesname = new SlideShow();
      //   $res = $slidiesname->create($input);

        $res = Slide::create($input);

        //判断
        if($res)
        {
            return  redirect('/admin/slide')->with('msg','添加成功');
        }else{
            return back()->with('msg','添加失败');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

    }

    /**
     * 展示要编辑轮播图的页面带历史数据
     
     * @param  要修改的数据id  $id
     * @return \Illuminate\Http\Response 视图页面
     */
    public function edit($id)
    {
        $slideshow = Slide::find($id);
        

        return view ('Admin.slide.edit',compact('slideshow'));
    }

    /**
     * 储存修改的数据到数据库
     
     * @param  提交的修改数据  $request
     * @param  要修改id  $id
     * @return 返回操作执行结果
     */
    public function update(Request $request, $id)
    {
        $input = $request->except('_token','file_upload','_method');
        

        //表单验证规则
        // $rule = [
        //     'slidiesname'=>'required|regex:/^[\x{4e00}-\x{9fa5}_]+$/u',
        //     "order"=>'required|numeric',
        // ];
        // //提示信息
        // $mess = [
        //     'slidiesname.required'=>'标题必须输入',
        //     'slidiesname.regex'=>'标题必须是汉字',
        //     'order.required'=>'排序必须输入',
        //     'order.numeric'=>'排序必须是数字',

        // ];

        // $validator =  Validator::make($input,$rule,$mess);
        // if ($validator->fails()) {
        //     return redirect("admin/slide/{$id}/edit")
        //         ->withErrors($validator)
        //         ->withInput();
        // }
        $res = Slide::find($id)->update($input);
        //判断
        if($res)
        {
            return redirect('/admin/slide')->with('msg','修改成功');;
        }else{
            return back()->with('msg','修改失败');;
        }
    }

    /**
     * 删除一条轮播图数据
     
     * @param  要删除的id  $id
     * @return 返回删除结果
     */
    public function destroy($id)
    {

        $res = Slide::find($id)->delete();
        if($res){
            $data = 1;
        }else{
            $data = 0;
        }

        //return  json_encode($data);

        return $data;
    }
}
