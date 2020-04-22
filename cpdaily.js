auto.waitFor();     //等待辅助功能开启
//常量定义部分
const DELAY_TIME = 300;     //延迟时间（根据具体情况可延长或缩短）
const WIDTH = device.width;     //设备屏幕分辨率宽度
const HEIGHT = device.height;   //高度
const CURRENT_TIME = new Date();
const CURRENT_DATE = CURRENT_TIME.getMonth()+1+"月"+CURRENT_TIME.getDate()+"日";   //日期，用于确定填写表项

function delay()
{
    sleep(DELAY_TIME);
}

function Fill()
{
    while(!click("消息"));
    delay();
    while(!click("辅导员通知"));
    delay();
    while(!click(CURRENT_DATE+"学生日报信息"));
    delay();
    while(!click("请选择省或海外"));
    delay();
    while(!click("湖北省"));
    delay();
    while(!click("确认"));
    delay();
    while(!click("请选择市或洲"));
    delay();
    while(!click("咸宁市"));
    delay();
    while(!click("确认"));
    delay();
    while(!click("请选择区/县或者国家"));
    delay();
    while(!click("咸安区"));
    delay();
    while(!click("确认"));
    delay();
    while(!text(" 正常").findOne().parent().child(1).click());
    while(!click("点击加载更多"));
    delay();
    while(!text(" <37.3℃").findOne().parent().child(1).click());
    var c = text(" 否").find();
    for(var i = 0; i < c.size(); i++)
    {
        c[i].parent().child(1).click();
    }
    delay();
    while(!click("提交给辅导员"));
    delay();
    while(!click("提交"));
}

toastLog("五秒后开始填表");
sleep(5000);
Fill();
