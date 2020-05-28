# auto-cpdaily

今日校园自动提交疫情信息收集表

每天填表好麻烦，尝试其他人的项目总是失败，就自己摸了一个

**项目使用[auto.js](https://hyb1996.github.io/AutoJs-Docs/#/)脚本**

<u>04/24更新</u>

​	才发现auto.js从酷安下架了，GitHub上的release也没有了

​	以后更新都会发布release，目前版本是[1.2.5](https://github.com/EnkanSakura/auto-cpdaily/releases/tag/1.2.5)，点链接跳转下载页面

​	auto.js的安装包可以去[我的网站](http://enkansakura.top/)下载（服务器带宽比较小，下载速度会有点慢）

## 更新日志

* **2020/05/28更新**

  ```javascript
  Do("点击加载更多");
  while(!textContains("本科").findOne().parent().child(1).click());
  while(!textContains("内地").findOne().parent().child(1).click());
  Do("点击加载更多");
  while(!textContains("37.2℃").find()[1].parent().child(1).click());
  ```

  问卷大规模改动，代码微小改动

* **2020/05/23更新**

  增加有无码的选项，需根据自身具体状况在常量中修改

  ```javascript
  const HAVE_CODE = true;     //是否拥有健康码，填true或false
  const CODE_COLOR = "绿";    //码的颜色，填绿、黄、红，没有可忽略该项
  ```

* **2020/05/15更新**

  早上一起来就看到邮件issue说问卷改了
  
  看了一下，只是改了几个选择题，改了所在地选择框的位置，对大部分人还是全选否，所有并不影响脚本使用
  
  这里先**声明**一下，该脚本仅仅是为了**方便我**以及**跟我一样的没有异常状况的人**，对于这类人全选否是没有任何问题的，如果正在使用该脚本的**你**、**你的家人**或**你所在的小区**有特殊情况，请将以下三行代码注释（在代码前面加上两个/）后自行更改问卷选项
  
  ```javascript
  function Fill()     //填表
  {
      //Do("提交给辅导员");
      //sleep(1000);
      //Do("提交");
  }
  ```
  
* **2020/04/28第二次更新**

  有同学提交issue说脚本运行到通知部分就不再进行了
  
  根据对方的截图，问题出在寻找当日消息的逻辑上
  
  以下是我校的通知：
  
  <img src="https://i.loli.net/2020/04/28/mF2Jdxhyro4XUsn.png" alt="my-school.png"  />
  
  起初我采用检测“x月x日学生日报信息收集”这一条信息的方法
  
  ```javascript
  Do(CURRENT_DATE+"学生日报信息");
  ```

  而该同学学校的通知是这样的

  <img src="https://i.loli.net/2020/04/28/ZItmsibJYHzA4gR.png" alt="other-school.png" style="zoom: 80%;" />

  脚本找不到记录，就停留在这一步陷入死循环

  

* **2020/04/28更新**

  ```javascript
  //这里的特殊符号和一个空格" "不能删去
  ```

  谜之特殊符号消失了！

  今天填表发现选完居住地就死循环

  检查发现是选项中标签文本的特殊符号没了

  改用```textContains("")```来代替```text("")```

* **2020/04/25更新**

  有小伙伴提交issue说运行后没有反应

  然后我就检查了一下，发现我把Fill()注释掉了

  ![note.png](https://i.loli.net/2020/04/25/as2FP9WUR6vzYCN.png)

  失误，顺便增加锁屏检测

* **2020/04/24更新**

  **增加自动解锁功能（仅限纯数字密码）**

  由于测试环境为华为***EMUI***系统，解锁实现原理为：

  > **寻找界面内对应数字按钮的控件，然后模拟点击控件以达到输入密码**

  ***EMUI***系统中4位、6位、任意长度纯数字密码输入方式相同，均为九宫格数字控件，且九个数字所在的控件彼此相互独立，没有键盘参与该流程

  其他手机可能在使用长数字密码时需要通过键盘输入密码，此时该脚本的解锁方式无法实现

  开发过程中使用了***UI Automator Viewer***来获取控件的属性

  如下图，混合密码需要键盘输入，键盘按键不是控件（甚至键盘也不是控件），无法用相同方法定位

  目前完全没有头绪来解决

  <img src="https://i.loli.net/2020/04/24/G6exaYsESy5lf4I.png" alt="passBoard.png" style="zoom:50%;" />

  如下图，图案密码的九个点不是相互独立的控件，但***UI Automator Viewer***显示九个点组成的整体是一个控件

  目前有解决思路，先鸽着

  <img src="https://i.loli.net/2020/04/24/UhDQzgy1wqCxX2Y.png" alt="9-dots" style="zoom: 50%;" />

  ------------

* **2020/04/23更新**

  ~~**我是傻逼**~~

  我发现了为什么它不能正常启动今日校园的原因

  ![wssb.png](https://i.loli.net/2020/04/23/839lx2EJsyOzRog.png)	

  **不要过度依赖代码提示**



## 使用方法

（闲着没事再把说明书单独整理出来，暂时先搁在README）

###### **1. 下载安装auto.js**

![auto.js](https://i.loli.net/2020/04/23/nswepIrlRuWm9N1.png)

###### **2.保存、导入并修改代码**

导入前可以先将js文件保存到方便找的位置

或者直接copy储存库中js文件的代码，然后新建文件将代码粘贴进去

![insert](https://i.loli.net/2020/04/23/hE8yFCQogzAMe1p.png)

在代码起始部分修改你所在的省、市、区，然后保存，返回

```javascript
const province = "这里填省";    //引号内填入省
const city = "这里填市";        //引号内填入市
const district = "这里填区";    //引号内填入区
```

**要求：与今日校园中各项的文字严格一致**

（04/24更新）修改你的锁屏密码，目前仅支持纯数字密码

```javascript
const PASSWORD = "";        //引号内填入密码
```

###### **3.启动辅助功能**

这一步在运行auto.js时会引导完成，提一下以防万一

###### **4.运行脚本**

导入或新建文件后，在auto.js中可以看到该文件，点击小三角即可运行

![run](https://i.loli.net/2020/04/23/XzCTwBrPxDuaqMZ.png)

###### ~~**5.手动切换到今日校园app**~~

~~由于不知名原因，在我的设备上auto.js自动启动今日校园总是失败（提示找到了应用，但就是无法启动应用），所以启动这一步我不得不采用**手动**方式~~

~~在脚本成功运行后，会显示一个气泡提示“五秒后开始填表”，对你来说只需要在五秒内将今日校园启动并且不切换到其他应用即可~~

###### **5.没有⑤了，直接运行脚本等着就行了**

###### **6.完成**

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



## 进一步偷懒

**\*由于安卓会杀后台，定时运行不一定能生效\***

###### **1.打开auto.js，触摸cpdaily最右边的省略号，选择更多**

![timer0.png](https://i.loli.net/2020/04/23/5NvShuGcoz1D8f2.png)

###### **2.在更多里选择定时任务**

![timer1.png](https://i.loli.net/2020/04/23/e5dyFmSuBzba3kL.png)

###### **3.选择每天运行，时间根据自己喜好设置，确保在设定时间点前学校已经发布调查表即可**

我设置的是中午十二点

![timer2.png](https://i.loli.net/2020/04/23/bHfsh4ZXdIMvoxL.png)

## 其他说明

本项目使用**MIT LICENSE**开源，转载请注明出处

若有bug或任何问题可以提交issue

想要学习auto.js可以自行查阅文档，本人也只是刚刚起步，链接在README开头已给出

