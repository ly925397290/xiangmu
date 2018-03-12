<?php

namespace App\Http\Controllers\home;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\model\order;
use App\model\user;
use App\model\good;
use App\model\user_good;
use DB;
class SettlementController extends Controller
{

    public function putContent()
    {
        // 1.从数据库中读取相关内容数据
            $data = user_good::lists('user_id','good_id')->all();

        // 2.创建webconfig.php文件并将数据写入webconfig.php文件
            // 将数组转化为字符串
            $str = "<?php \n return ".var_export($data,true).';';
            file_put_contents(config_path().'\webconfig.php', $str);
    }
    /**
     * 加载购物车
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request,$id)
    {   
        $data = good::find($id);
        //获取用户加入购物车商品
        $user = user::find(1);
        $good = $user->user_good;
        foreach ($good as  $value) {

            $ids[] = $value['gid'];
        }
        //获取购物车商品数量

        // 获取当前用户购物车关联表中的信息
        // $user_good = user_good::where('user_id',1)->get();
        // foreach ($user_good as  $value) {
        //     $good_id[] = $value['good_id'];
        // }
        //计算购物车中商品总和
        $count = DB::table('user_good')->where('user_id',1)->count();
        return view('home/settlement',compact('data','good','ids','count'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function shoucang(Request $request,$id)
    {
        $input = $request->all();
        $res = user_good::create(['user_id'=>1,'good_id'=>$id,'num'=>$input['num']]);
        // $res = userGood::create(['user_id'=>session(''),'good_id'=>$id]);
        if($res){
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
    public function delete($id)
    {
        // 1.查看此权限分类下有没有权限
        $res = user_good::where('user_id',1)->where('good_id',$id)->delete();
        // 2.有权限不让删除
        if($res){
            $data = 1;
        }else{
            $data = 0;
        }
        return $data;
    }
}
