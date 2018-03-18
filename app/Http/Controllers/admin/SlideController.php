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

        if($res)
        {
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
        $count = count($slideSlide);
        return view('Admin.Slide.list',['slideSlide'=>$slideSlide,'count'=>$count]);
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
        $input = $request->except('_token');
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
        $input = $request->except('_token','_method');
        $res = Slide::find($id)->update($input);
        //判断
        if($res)
        {
            return redirect('/admin/slide')->with('msg','修改成功');
        }else{
            return back()->with('msg','修改失败');
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

        if($res)
         {   $data = 1;
        }else{
            $data = 0;
        }

        //return  json_encode($data);

        return $data;
    }


    public function upload(Request $request)
    {
        //1.获取上传文件
        $file = $request->file('file_upload');
        //  2.判断上传文件的有效性
         if($file->isValid()){
            //获取文件后缀名
             $ext = $file->getClientOriginalExtension();    //文件拓展名
            //生成新文件名
            $newfilename = md5(date('YmdHis').rand(1000,9999).uniqid()).'.'.$ext;
             // 将图片上传到本地服务器
            $res = $file->move(public_path().'/upload/silde',$newfilename);
            //将上传文件的位置返回给客户端
           return '/upload/silde/'.$newfilename;
       }
    }
    /**
     * 轮播图状态修改
     */
     public function changestatus(Request $request)
     {
        //接收数据
        $input = $request->except('_token');
        // 修改数据库信息
        $status = ($input['status'] == 0) ? 1 : 0;
        $res = slide::where('sid',$input['id'])->update(['status'=>$status]);
        // 判断是否成功,将结果返回客户端
        if($res)
        {
            $data = 1;
        }else{
            $data = 0;
        }
        return $data;
     }
}
