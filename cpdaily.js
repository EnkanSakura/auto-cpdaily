//常量定义部分
const CURRENT_TIME = new Date();
const CURRENT_DATE = (CURRENT_TIME.getMonth()+1)+"月"
                    +CURRENT_TIME.getDate()+"日";   //获取日期，用于定位当日的表
//可根据需求自行修改的常量
const DELAY_TIME = 300;     //每次操作的缓冲时间（根据具体情况可延长或缩短）
const PASSWORD = "";        //引号内填入密码
const HAVE_CODE = true;     //是否拥有健康码，填true或false
const CODE_COLOR = "绿";    //码的颜色，填绿、黄、红，没有可忽略该项
//对应所在地的三项
var province = "省";        //引号内填入省
var city = "市";            //引号内填入市
var district = "区";        //引号内填入区

/*
--------------------------------

    以下代码非开发请勿随意更改

--------------------------------
*/

//函数定义及实现部分
function Do(name)   //填一项，并等待
{
    while(!click(name));
    sleep(DELAY_TIME);
}

function Shake()
{
    for(var i = 0; i < 3; i++)
    {
        device.vibrate(300);
        sleep(600);
    }
}

function NumberPassword()    //纯数字密码
{
    for(var i = 0; i < PASSWORD.length; i++)
    {
        var key = PASSWORD[i];
        text(key).findOne().parent().click();
    }
}

function PicturePassword()  //手势密码
{
    toast("图案解锁开发中");
    toast("请手动解锁");
    Shake();
}

function MixedPassword()    //混合密码
{
    toast("混合密码解锁开发中");
    toast("请手动解锁");
    Shake();
}

function Unlock()
{
    gesture(500, [200,960], [880,960]);
    sleep(300);
    if(device.release >= 7)
    {
        if(desc("PIN 码区域").findOnce())
        {
            if(text("ABC").findOne())
            {
                NumberPassword();
            }
            else
            {
                MixedPassword();
            }
            sleep(1000);
        }
        else if(textContains("绘制").findOne())
        {
            PicturePassword();
        }
    }
    else
    {
        toast("系统版本过低，请手动解锁");
        Shake();
    }
}


function Fill()     //填表
{
    Do("消息");
    Do("辅导员通知");
    Do("未填写");

    Do("点击加载更多");
    Do("请选择省或海外");
    Do(province);
    Do("确认");
    Do("请选择市或洲");
    Do(city);
    Do("确认");
    Do("请选择区/县或者国家");
    Do(district);
    Do("确认");
    Do("点击加载更多");
    while(!textContains("本科").findOne().parent().child(1).click());
    while(!textContains("内地").findOne().parent().child(1).click());
    Do("点击加载更多");
    while(!textContains("37.2℃").find()[1].parent().child(1).click());
    var bottom = textContains("否").find();
    var b_end = bottom.size() - 1;
    for(var i = 0; i < b_end; i++)
    {
        bottom[i].parent().child(1).click();
    }
    bottom[b_end].parent().parent().child(0).child(1).click();
    // if(HAVE_CODE)
    // {
    //     bottom[b_end].parent().parent().child(0).child(1).click();
    //     while(!textContains(CODE_COLOR).findOne().parent().child(1).click());
    // }
    // else
    // {
    //     bottom[b_end].parent().parent().child(0).child(0).click();
    //     while(!textContains("未申请").findOne().parent().child(1).click());
    // }

    // Do("提交给辅导员");
    // sleep(1000);
    // Do("提交");
}

//脚本执行部分
auto.waitFor();     //等待辅助功能开启
setScreenMetrics(1080, 1920);

while(!device.isScreenOn())
{
    device.wakeUp();
    sleep(1000);
}
sleep(1000);
if(packageName("com.android.systemui").findOne(300))
{
    Unlock();   //唤醒屏幕，解锁
}

toast("即将启动今日校园");  //启动APP
sleep(2000);
launch("com.wisedu.cpdaily");
sleep(5000);

Fill();     //填表
