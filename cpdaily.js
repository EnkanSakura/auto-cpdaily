auto.waitFor();     //等待辅助功能开启
//常量定义部分
const CURRENT_TIME = new Date();
const CURRENT_DATE = CURRENT_TIME.getMonth()+1+"月"+CURRENT_TIME.getDate()+"日";   //获取日期，用于定位当日的表
//可根据需求自行修改的常量
const DELAY_TIME = 300;     //每次操作的缓冲时间（根据具体情况可延长或缩短）
//对应所在地的三项
const province = "";    //分号内填入省
const city = "";        //分号内填入市
const district = "";    //分号内填入区

function Do(name)   //填一项，并等待
{
    while(!click(name));
    sleep(DELAY_TIME);
}

function Fill()
{
    Do("消息");
    Do("辅导员通知");
    Do(CURRENT_DATE+"学生日报信息");
    Do("请选择省或海外");
    Do(province);
    Do("确认");
    Do("请选择市或洲");
    Do(city);
    Do("确认");
    Do("请选择区/县或者国家");
    Do(district);
    Do("确认");
    while(!text(" 正常").findOne().parent().child(1).click());
    Do("点击加载更多");
    while(!text(" <37.3℃").findOne().parent().child(1).click());
    var bottom = text(" 否").find();
    for(var i = 0; i < bottom.size(); i++)
    {
        bottom[i].parent().child(1).click();
    }
    Do("提交给辅导员");
    sleep(1000);
    Do("提交");
}

toastLog("即将启动今日校园");
sleep(2000);
launch("com.wisedu.apdaily");
sleep(5000);
Fill();
