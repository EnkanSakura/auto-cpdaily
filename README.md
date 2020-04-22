# auto-cpdaily
今日校园自动提交疫情信息收集表

每天调表好麻烦，尝试其他人的项目总是失败，就自己摸了一个

**项目使用[auto.js](https://hyb1996.github.io/AutoJs-Docs/#/)脚本**

## 使用方法

**1.下载安装auto.js**

![auto.js](https://github.com/EnkanSakura/auto-cpdaily/tree/master/Image/autojs.png)

**2.保存、导入并修改代码**

导入前可以先将js文件保存到方便找的位置

或者直接copy储存库中js文件的代码，然后新建文件将代码粘贴进去

![insert](https://github.com/EnkanSakura/auto-cpdaily/tree/master/Image/insert.png)

在代码起始部分修改你所在的省、市、区，然后保存，返回

```javascript
const province = "这里填省";    //分号内填入省
const city = "这里填市";        //分号内填入市
const district = "这里填区";    //分号内填入区
```

**要求：与今日校园中各项的文字严格一致**

**3.启动辅助功能**

这一步在运行auto.js时会引导完成，提一下以防万一

**4.运行脚本**

导入或新建文件后，在auto.js中可以看到该文件，点击小三角即可运行

![run](https://github.com/EnkanSakura/auto-cpdaily/tree/master/Image/run.png)

**5.手动切换到今日校园app**

由于不知名原因，在我的设备上auto.js自动启动今日校园总是失败（提示找到了应用，但就是无法启动应用），所以启动这一步我不得不采用**手动**方式

在脚本成功运行后，会显示一个气泡提示“五秒后开始填表”，对你来说只需要在五秒内将今日校园启动并且不切换到其他应用即可

**6.完成**

提交后有可能会仍然保留在表未提交的状态，不必担心，直接返回即可

如果担心填报错误可以自行将以下部分注释掉

```javascript
while(!click("提交给辅导员"));
sleep(1000);
while(!click("提交"));
```

注释后如下

```javascript
// while(!click("提交给辅导员"));
// sleep(1000);
// while(!click("提交"));
```

## 其他说明

本项目使用**MIT LICENSE**开源，转载请注明出处

若有bug或任何问题可以提交issue

想要学习auto.js可以自行查阅文档，本人也只是刚刚起步，链接在README开头已给出

