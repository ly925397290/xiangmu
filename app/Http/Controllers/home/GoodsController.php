<?php

namespace App\Http\Controllers\home;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\model\good;
use App\model\Show;
use App\model\Shop;
use App\model\cate;
use App\model\user_good;
use App\model\goodsdetail;

use DB;

class GoodsController extends Controller
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
        $user_good = user_good::where('user_id',1)->get();
        foreach ($user_good as  $value) {
            $good = good::where('gid',$value['good_id'])->first();
            $value['price'] = $good['price'];
            $value['gname'] = $good['gname'];
            $value['urls'] = $good['urls'];
        }
        //计算购物车中商品总和

        $count = DB::table('user_good')->where('user_id',1)->count();
        return view('home.shop.goodadd',compact('count','user_good','slide','good','cate'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return 000;
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
        $addtime = date('Y-m-d H:i:s',time());
        $input['addtime'] = $addtime;
        $input['gdesc'] = strip_tags($input['gdesc']);
         // return  $input;
        //2.添加到数据库
        $res = good::create($input);
        $input['gid'] = $res['gid'];
        
        // $input['gdesc'] =$input['gdesc'];
       
        $res1 = goodsdetail::create($input);


        //3.判断是否成功并将结果返回到客户端
        if($res && $res1)
        {
            return  redirect('/home/goods/show/')->with('msg','添加成功');
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

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function show($id)
    {
        

       // return 1111;
        /**
         * 前台首页显示
         */
        // 前台导航显示
        $nav = Nav::get();
        //前台轮播图显示
        $slide = Slide::where('status','1')->get();
        //前台商品展示
        $good = good::where('status','1')->get();
        //前台友情链接
        $link = link::where('status','1')->get();

       
        //2.添加到数据库  
       $goods = good::where('gid','125')->get();


        return view('home.shop.goodlist',compact('link','nav','slide','good','goods'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
       
        $input = $request->except('_token','_method');
        // $res = Article::find($id)->update($input);
        //判断
        if($res)
        {
            return redirect('/admin/article');
        }else{
            return back()->with('msg','修改失败');
        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function editAll(Request $request)
    {

        $input = $request->except('_token');
        foreach ($input['status'] as $key => $value) {
            if($value == '下架')
            {
                $input['status'][$key] = 0;
            }

            if ($value == '已上架'){
                $input['status'][$key] = 1;
            }

        }
        // return ;
        // return $input;
        DB::beginTransaction();
        try{
            //根据id,遍历所有的记录
            foreach ($input['id'] as $k=>$v){
               
            DB::table('data_goods')->where('gid',$v)->update(['status' => $input['status'][$k]]);
                
           
            //如果所有的操作成功，提交事务
             }
            DB::commit();
            
            return redirect('/home/shop/show');
            //如果网站配置项删除成功，调用putContent（）将数据同步到webconfig.php文件
        $this->putContent();
        }catch (Exception $e){
            DB::rollBack();
            return redirect()->back()
                ->withErrors(['error' => $e->getMessage()]);
        }
    }

    public function write($id)
    {
         // return 111;
        $det = goodsdetail::find($id);
        return view('home.shop.goodwrite',['det'=>$det]);
    }

    
}
