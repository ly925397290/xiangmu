<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\model\good;
use App\model\goodsdetail;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use DB;

class GoodsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function  gstatus($gid)
    {
        $good = good::find($gid);
        $status = !$good->status;
        $res = $good->update(['status'=>$status]);
        if($res){
            $data =[
                'gg'=> 0,
                'msg'=>'修改成功'
            ];
        }else{
            $data =[
                'gg'=> 1,
                'msg'=>'修改失败'
            ];
        }
        return $data;

    }



    public function index(Request $request)
    {
        
        $input = $request->input('username','');
        $goods = good::where('gname','like','%'.$input.'%')->orderBy('gid','desc')->paginate(10);
        $goodsdetail = goodsdetail::get();
       //查询商品所属分类
        foreach ($goods as $value) {
            $value['cid'] = $value->good_cate->title;
        }
        $count = count($goods);
        // return $goods;
        return view('admin.good.list',['goods'=>$goods,'count'=>$count,'request'=>$request,'goodsdetail'=>$goodsdetail]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */


    public function detail($id )
    {
       // dd($id);

        $goods = good::find($id);
        
        $goodsdetail = goodsdetail::get();

        return view('admin.good.det',['goods'=>$goods,'goodsdetail'=>$goodsdetail]);
    }
    public function create()
    {
        $cate = DB::table('data_cate')->select('*',DB::raw('concat(path,",",id) as paths'))->orderBy('paths','asc')->get();
        // 处理分类名称
        foreach ($cate as $key => $value) {
            // 统计字符串出现的次数
            $n = substr_count($value['path'],',');
            // 重复使用字符串 拼接分类名称
            $cate[$key]['title'] = str_repeat('|----',$n).$cate[$key]['title'];
        }
        return view('admin.good.add',compact('cate'));
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //1.接收数据

        
        $input = $request->except('_token');
        //2.添加到数据库
        $res = good::create($input);
        $res1 = goodsdetail::create($input);
        
        //3.判断是否成功并将结果返回到客户端
           if($res && $res1)
        {
            return  redirect('/admin/goods')->with('msg','添加成功');
        }else{
            return back()->with('msg','添加失败');
        }
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
            $res = $file->move(public_path().'/upload/goods',$newfilename);
            //将上传文件的位置返回给客户端
           return '/upload/goods/'.$newfilename;
       }
    }
}
