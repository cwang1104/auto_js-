auto.waitFor(); //检测是否打开无障碍

//唤醒开启屏幕

device.wakeUpIfNeeded();
sleep(1000);

var date = new Date();
var now_time = date.getTime();

var png_ad = "/storage/emulated/0/打卡截图/"+now_time+".png"
//定义截图函数
function getScreen(png_ad)
{
    threads.start(function () {
        var beginBtn;
           if (beginBtn = classNameContains("Button").textContains("立即开始").findOne(2000)) {
               beginBtn.click();
           }
       });
    
    sleep(2000);
    
    if(requestScreenCapture()){
        toast("ok")
    }
    sleep(3000);
    // 3、进行截图
    var img = captureScreen(png_ad);
}

//定义发送邮件函数

function send_emai(){
    app.sendEmail({
        email: ["45241397@qq.com"],
        subject: "阿狸的程序报告",
        text: "hello world"
        // attachment:"/storage/emulated/0/脚本/1644852279250.png"
    });
    sleep(2000);
    //点击通过邮件发送
    var email_send = text("电子邮件").findOne().bounds();
    click(email_send.centerX(), email_send.centerY());
    toast("ok222222222222");
    sleep(2000);
    
    print(currentActivity());
    
    waitForActivity(activity = "com.huawei.email.activity.MessageCompose",period = 200);
    sleep(3000);
    id("send_email_btn").findOne().click();
}

//打开钉钉APP
var appName = "钉钉";
launchApp(appName);
sleep(5000); 

//打卡操作
press(520,2120,1000); //工作台
sleep(10000); 
press(131,1170,10);  //我的考勤
sleep(10000);
press(543,1268,1500); // 打卡
press(542,1267,1500);
sleep(2000);


getScreen(png_ad);
sleep(2000);
send_emai();
sleep(2000);


//返回主页面
//最近任务
home();
sleep(1000);
recents();
sleep(2000);

//清除最近任务释放内存

press(551,2090,100); 
sleep(500); 


home();

exit();