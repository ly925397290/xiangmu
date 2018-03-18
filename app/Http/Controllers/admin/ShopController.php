<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\model\Shop;
use DB;

class ShopController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {


        $keywords1 = $request->input('keywords1','');
        $shop = Shop::where('shopname','like','%'.$keywords1.'%')->orderBy('id','desc')->paginate($request->input('num',4));
        $count = count($shop);
        // return $shop

        return view('admin.shop.list',['shop'=>$shop,'count'=>$count,'request'=>$request]);
      
    }


    //修改状态
    public function editAll(Request $request)
    {

        $input = $request->except('_token');
        if($input){
            foreach ($input['status'] as $key => $value) {
            if($value == '等待审核')
            {
                $input['status'][$key] = 0;
            }

            if ($value == '审核通过'){
                $input['status'][$key] = 1;
            }

        }

        // return ;
        // return $input;
        DB::beginTransaction();
        try{
            //根据id,遍历所有的记录
            foreach ($input['ids'] as $k=>$v){
               
            DB::table('data_home_shop')->where('id',$v)->update(['status' => $input['status'][$k]]);
                
           
            //如果所有的操作成功，提交事务
             }
            DB::commit();
            
            return redirect('/admin/shop');
            //如果网站配置项删除成功，调用putContent（）将数据同步到webconfig.php文件
        $this->putContent();
        }catch (Exception $e){
            DB::rollBack();
            return redirect()->back()
                ->withErrors(['error' => $e->getMessage()]);
        }
        }
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
    public function update(Request $request,$id)
    {
        //
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
}
