---
sidebar: auto
sidebarDepth: 2
---
# JavaScript基本功
JavaScript是一种基于对象和事件驱动的、并具有安全性能的脚本语言,已经被广泛用于Web应用开发,常用来为网页添加各式各样的动态功能,为用户提供更流畅美观的浏览效果。通常JavaScript脚本是通过嵌入在HTML中来实现自身的功能的。

### JavaScript特点
是一种解释性脚本语言（代码不进行预编译）。 

主要用来向HTML（标准通用标记语言下的一个应用）页面添加交互行为。 

可以直接嵌入HTML页面，但写成单独的js文件有利于结构和行为的分离。 

跨平台特性，在绝大多数浏览器的支持下，可以在多种平台下运行（如Windows、Linux、Mac、Android、iOS等）。

### JavaScript组成
                    Javascript

            ECMAcript    DOM     BOM

### JavaScript日常用途
嵌入动态文本于HTML页面。 

对浏览器事件做出响应。 

读写HTML元素。 

在数据被提交到服务器之前验证数据。 

检测访客的浏览器信息。 

控制cookies，包括创建和修改等。 

基于Node.js技术进行服务器端编程。


### js的基本数据类型有哪些？
    5种简单类型： undefined null number boolean string
    1种复杂类型： object
    undefined null number boolean string都属于基本类型
    object、array、function 属于引用类型
    string有些特殊

    
    数据类型	        转换为true的值	         转换为false的值
    Boolean 	    true	            false
    String	        任何非空的字符串	         ""(空字符串)
    Number	        任何非0数值（包括无穷大）	    0和NAN
    Object	        任何对象	                    null
    Undefined        不适用                     undefined
### javascript 的基本规范
    1.减少全局污染
    2.变量名的提升，应该在函数内部中所有使用var声明的变量都会提示到函数体头部。以免造成不必要的错误。
    3.for循环
    4.用‘===’取代‘==’，前者是严格相等的意思，数据类型也是需要相等的，后者会提前进行隐式的转换
    5.{}括号，使用for循环或者if语句，都要使用{}
    6.命名规则，构造函数首字母大写
    7.写注释
    8.Switch语句中要带有default分支

### JavaScript核心语法：
    语法约定-----变量-----数据类型-----数组-----运算符号-----控制语句-----注释-----输入/输出

1. 变量
    ①先声明变量再赋值

    var   width;

    width = 5;

    var －  用于声明变量的关键字

    width － 变量名

    ②同时声明和赋值变量

    var catName= "皮皮";

    var x, y, z = 10;

    ③不声明直接赋值【一般不使用】

    width=5;

    变量可以不经声明而直接使用，但这种方法很容易出错，也很难查找排错，不推荐使用。

     

2. 数据类型
    ①undefined：示例：var width;

    变量width没有初始值，将被赋予值undefined

    ②null：表示一个空值，与undefined值相等

    ③number：

    var iNum=23;     //整数

    var iNum=23.0;    //浮点数

    ④Boolean：true和false   但是JS会把他们解析成1；0

    ⑤String：一组被引号（单引号或双引号）括起来的文本 var string1="This is a string";

3. typeof运算符
    typeof检测变量的返回值；typeof运算符返回值如下：

    ①undefined：变量被声明后，但未被赋值.

    ②string：用单引号或双引号来声明的字符串。

    ③boolean：true或false。

    ④number：整数或浮点数。

    ⑤object：javascript中的对象、数组和null。

     

4. String对象
    ①属性：

    字符串对象.length

    var str="this is JavaScript";

    var strLength=str.length;      //长度是18

    ②方法：

    字符串对象.方法名();

     方法名称 | 说明
    ---|---
    charAt(index)| 返回在指定位置的字符
    indexOf(str,index) | 查找某个指定的字符串在字符串首次出现的位置
    bsubstring(index1,index2)| 返回位于指定索引index1和index2之间的字符串，并且包括索引index1对应的字符，不包括索引index2对应的字符
    split(str)| 将字符串切割为字符串数组

split(str)：如果语法写成width.split(" ")【冒号中间有空格】此时：width height hello world会被拆分成：width,height,hello,world；如果语法写成width.split("")【冒号中间没有空格】此时：width height hello world会被拆分成：w,i,d,t,h, ,h,e,i,g,h,t, ,h,e,l,l,o, ,w,o,r,l,d

5. 数组
    ①创建数组：
    var 数组名称=new Array(size)

    new表示数组的关键字
    size表示数组中可存放的元素总数

②为数组元素赋值：

方法一：var fruit= new Array("apple", "orange", " peach","banana");

方法二：

var fruit = new Array(4);

fruit [0] = " apple ";

fruit [1] = " orange ";

fruit [2] = " peach ";

fruit [3] = " banana ";

 
③访问数组：

数组名[下标]

6.数组的常用属性和方法

数组的属性：

length：1.告诉我们数组的长度：数组名.length

2.通过该属性可以改变数组的长度

数组的常用方法：

1）unshift：在数组最前面添加一个或者多个元素，多个元素之间用逗号隔开，返回值是新数组的长度。

var a = [2,3,4,5,6];
var b = a.unshift(1);//在最前面插入1
alert(a);
alert(b);



shift：删除数组最前面的元素，返回值是删除的元素。

var a = [2,3,4,5,6];
var c = a.shift();
alert(a);
alert(c);



2）indexOf：查找在数组中重复出现的元素第一次出现的位置，返回值是该元素的下标。

在数组中找指定元素，如果找到返回元素下标，否则：返回-1，

 var a = ["我","爱","中","国","更","爱","自","己"];
var b = a.indexOf("爱");
alert(a);
alert(b);



lastIndexOf：查找数组中重复出现的元素最后一次出现的位置，返回值是该元素的下标。

var a = ["我","爱","中","国","更","爱","自","己"];
var c = a.lastIndexOf("爱");
alert(a);
alert(c);



3）push：在数组最后面添加一个或者多个元素，多个元素之间用逗号隔开，返回值是新数组的长度。

var a = ["我","爱","中","国","更","爱","自","己"];
a.push("!","#");
alert(a);


pop：在数组中删除并返回数组的最后一个元素，返回值是删除的元素。

var a = ["我","爱","中","国","更","爱","自","己"];
a.pop();//删除元素
alert(a);


4）slice(start,end)：提取数组中指定连续的子数组。含start，不含end

var a = ["我","爱","中","国","更","爱","自","己"];
var b = a.slice(2,4);//显示为“中，国”
alert(b);


5）splice(开始删除/插入位置的下标，要删除元素的个数，需要删除/插入的元素)，splice有“剪接”的含义。前面两个参数定义“剪”的部分，第三个参数定义“接”的部分，经过不同的参数组合就可以实现以下三个功能：

1.删除操作：删除数组中指定的任意元素；

2.插入操作：在数组中指定位置插入元素；

3.替换操作：在数组中替换指定位置的元素。

注意：(1)操作返回的结果是：被删除元素 组成的数组；

  如果操作没有元素，则返回空。
     (2)操作(删除/添加)是直接对数组本身进行操作。

var a = ["我","爱","中","国","更","爱","自","己"];
a.splice(4,4);//从下标为4的元素开始删除后面4个元素
alert(a);
 

var a = ["我","爱","中","国"];
a.splice(3,0,"华","人","民","共","和");//“华”从下标为3开始的位置插入
alert(a);


var a = ["我","爱","中","国"];
a.splice(2,2,"自","己");//将“中国”替换为“自己”，显示为“我,爱,自,己”
alert(a);


6）reverse：将数组中的元素，反序输出。在原数组的基础上进行反序输出，不会重新创建新数组。

var a = [1,2,3,4];
a.reverse();//输出结果为4，3，2，1
alert(a);


7）map：原数组的映射，经过函数的加工，返回给一个新数组。

一般我们传递的参数都是数值、字符串等类型的数据，有些时候可能需要传递一个函数，那么如何去传递一个函数呢？

```
var a = [2,3,4,5];
var b = a.map(fun);
function fun(value,index,self){
    return value * value;
}
```
我们可以将以上内容简写为：
```
var a = [2,4,6,8];
var b = a.map(function(value,index,self){
    return value * value; 
```
这就是匿名函数。

7.运算符号
类型 | 运算符
---|---
算术运算符| + - * / % ++ --
赋值运算符| = += -=
比较运算符| > < >= <= == != === !===
逻辑运算符| && || ！

1、JS中的||符号：

运算方法：

     只要“||”前面为false,不管“||”后面是true还是false，都返回“||”后面的值。

     只要“||”前面为true,不管“||”后面是true还是false，都返回“||”前面的值。

总结：真前假后

2、JS中的&&符号：

运算方法：

     只要“&&”前面是false，无论“&&”后面是true还是false，结果都将返“&&”前面的值;

     只要“&&”前面是true，无论“&&”后面是true还是false，结果都将返“&&”后面的值;

总结：假前真后

8. 逻辑控制语句
①if条件语句
```
if(条件)
 
{  //JavaScript代码;  }
 
else
 
{  //JavaScript代码;  }
```
If·中0，null，” ”，undefined，NaN，false--------结果是false；其他的都是true！

②switch多分支语句
```
switch (表达式)
 
{  case 常量1 :
 
      JavaScript语句1;
 
  break;
 
   case 常量2 :
 
        JavaScript语句2;
 
  break;
 
default :
 
      JavaScript语句3;  }
```
③for、while循环语句

```
for(初始化;  条件;  增量)
 
 {  JavaScript代码;  }
 
while(条件)
 
 {  JavaScript代码;  }
```
④for-in
```
var fruit=[ "apple", "orange", "peach","banana"];
 
for(var i in fruit){
 
   document.write(fruit[i]+"<br/>");  }
```
i就是数组的下标，in这个数组要查询所有的数组下标

9. 循环中断
①break
```
<script type="text/javascript">
 
var i=0;
 
for(i=0;i<=5;i++){
 
if(i==3){  break;  }
 
  document.write("这个数字是："+i+"<br/>");  }
 
</script>
```
②continue
```
<script type="text/javascript">
 
var i=0;
 
for(i=0;i<=5;i++){
 
if(i==3){  continue;  }
 
  document.write("这个数字是："+i+"<br/>");  }
 
</script>
```
10. 注释
①单行注释以 // 开始，以行末结束：

//alert("恭喜你！注册会员成功");

//在页同上弹出注册会员成功的提示框

//注释

如果在页面里单行注释中回车打一些东西此时就会报错：Uncaught ReferenceError: XXXX is not defined

②多行注释以 /* 开始，以 */ 结束，符号 /*…… */ 指示中间的语句是该程序中的注释

/*   使用for循环运行“document.write("<h3>Hello World</h3>");”5次

使用document.write在页面上输出“Hello World”   */

 

11. 常用的输入/输出
【输出一般使用alert；输入使用prompt；但是后期不建议使用alert，在真实的开发中一般使用console.Log( )】

①alert()【一般用在一些警告或者提示中】：

alert("提示信息");

②prompt()

prompt("提示信息", "输入框的默认信息");

prompt("请输入你喜欢的颜色","红色");

prompt("请输入你喜欢的颜色","");

 

12. 语法约定
①代码区分大小写

小写写成大写会报错：Uncaught SyntaxError: Unexpected identifier

②变量、对象和函数的名称

当声明变量、对象和函数的名称时大小写，数字，下划线，美元符号都可以，但是必须以字母，下划线，美元符号开头

否则会报错：Uncaught SyntaxError: Invalid or unexpected token

 

③分号

如果不写会报错：Uncaught SyntaxError: Invalid or unexpected token

 

程序调试：
Chrome开发人员工具：
停止断点调试
单步调试，不进入函数体内部
单步调试，进入函数体内部
跳出当前函数
禁用所有的断点，不做任何调试
alert()方法：
直接打印信息，直接在页面上看到具体信息

【但是一般使用console.Log( )，因为使用alert( )很容易忘掉删除，当使用alert( )进行弹出时，最后产品上线后，会降低用户体验，所以使用console.Log( )就会避免这个问题】

 

函数：
什么是函数？
函数的含义：类似于Java中的方法，是完成特定任务的代码语句块；使用更简单：不用定义属于某个类，直接使用；函数分类：系统函数和自定义函数

 

常用系统函数：
parseInt ("字符串")：将字符串转换为整型数字

如: parseInt ("86")将字符串“86“转换为整型值86

当为parseInt ("86a")时输出还是86

当为parseInt ("86a21")时输出还是86

当为parseInt ("a86a")时输出NaN

 

parseFloat("字符串")：将字符串转换为浮点型数字

如: parseFloat("34.45")将字符串“34.45“转换为浮点值34.45

isNaN( )：用于检查其参数是否是非数字

isNaN("111")会输出false

isNaN(true)会输出false

isNaN("true")会输出true

isNaN("aaa")会输出true

isNaN("111a")会输出true

1.定义函数

function 函数名(参数1，参数2，参数3){
    //javascript语句
    [return 返回值]
}
2.调用函数

函数调用一般和表单元素的事件一起使用，调用格式

事件名＝ "函数名( )" ;

一、调用无参函数

调用无参函数，输出5次“欢迎学习JavaScript”
```
function study( ){
        for(var i=0;i<5;i++){
            document.write("<h4>欢迎学习JavaScript</h4>");
        }
    }
```
单击此按钮时，调用函数study( )，执行函数体中的代码
```
<input name="btn" type="button"
   value="显示5次欢迎学习JavaScript"  onclick="study( )" />
```

二、调用有参函数

根据输入的次数，显示“欢迎学习JavaScript“

示例：
```
function study(count){
        for(var i=0;i<count;i++){
            document.write("<h4>欢迎学习JavaScript</h4>");
        }
    }
```
单击此按钮时，调用函数study (count )，执行函数体中的代码
```
<input name="btn" type="button" value="请输入显示欢迎学习JavaScript的次数"
  onclick="study(prompt('请输入显示欢迎学习JavaScript的次数:',''))" />
```
### 变量的作用域:
全局变量
局部变量
```
<body onload="second( )">
 
    var i=20;    【这是一个全局变量】
 
    function first( ){
 
        var i=5;    【这是一个局部变量】
 
        for(var j=0;j<i;j++){
 
            document.write("&nbsp;&nbsp;&nbsp;&nbsp;"+j);  }  }
 
    function second( ){
 
        var t=prompt("输入一个数","")
 
        if(t>i)     【此时t和全局变量i作比较】
 
            document.write(t);
 
        else
 
            document.write(i);
 
        first( );  }
```
一、焦点事件

焦点：使浏览器能够区分用户输入的对象，当一个元素有焦点的时候，那么他就可以接收用户的输入

设置焦点方式：点击、tab、js

onfocus:当元素获取到焦点的时候触发

onblur:当元素失去焦点的时候触发

obj.focus();给指定的元素设置焦点

obj.blur();取消指定元素的焦点

obj.select();选择制定元素里面的文本内容（用户输入的内容，可以操作可交互性元素的内容，例如P，div内的内容是无法全选的）

 

oText.onfocus=function(){

　　if(this.value=="请输入内容"){

　　　　this.value="";

　　}

}

oText.onblur=function(){

　　if(this.value==""){

　　　　this.value="请输入内容";

　　}

}

### event事件对象

定义：当一个事件发生的时候，和当前这个对象发生的这个事件有关的一些详细信息都会被临时保存到一直指定地方——event对象，供我们在需要的时候调用

事件函数：事件调用的函数，一个函数是不是事件函数，不在定义的时候决定，而是取决于这个函数调用的时候

ie/chrome:event是内置全局对象

标准下:事件对象是通过事件函数的第一个参数传入

如果一个函数是被事件调用的，那么 这个函数定义的第一个参数就是事件对象

 
兼容处理：vav ev=ev||event; 

 
clientX:当一个事件发生的时候，鼠标到页面可视区的距离

clientY:当一个事件发生的时候，鼠标到页面可视区的顶部距离


onmousemove:当鼠标在一个元素上面移动的时候触发

触发的频率不是像素，而是间隔时间，在一个指定的时间内（很短），如果鼠标的位置和上一次的位置发生了变化，那么就会触发一次

三、事件流

1、事件冒泡：当一个元素接收到事件，会吧他接收到的所有传播给他的父级

　  阻止冒泡：当前要阻止冒泡的事件函数中调用event.cancelBubble=true;

2、时间捕获：当一个元素接收到事件

　 　  

3、事件绑定

（1）给一个对象绑定一个事件处理函数：obj.onclick=fn;　　　　会覆盖前面绑定的函数，属于赋值形式

（2）给一个对象的同一个事件绑定多个不同的函数：

ie:obj.attachEvent(事件名称，事件函数)             document.attachEvent("onclick",fn1);

没有捕获
事件名称有on
事件函数执行的顺序：标准ie——正序      非标准ie——倒序
this指向window
标准：obj.addEventListener(事件名称，事件函数，是否捕获)        document.addEventListener("click",fn2)      //默认是false  false:冒泡   true：捕获

 

有捕获
事件名称没有有on
事件函数执行的顺序：正序
this指向触发该事件的对象
call()函数下的一个方法，call方法的第一个参数可以改变函数执行过程中的内部this的执行

调用函数：fn1()=fn1.call();

4、取消事件绑定

（1）第一种事件绑定取消方法：document.onclick=null;

（2）第二种事件绑定取消方法：

ie:obj.detachEvent(事件名称，事件函数)；

标准：obj.removeEventListener(事件名称，事件函数，是否捕获);

四、键盘事件

 

 1、onkeydown:当键盘按键按下的时候触发，如果按下不抬起，那么会连续触发

     onkeyup:当键盘按键抬起的时候触发

2、event.keyCode:数字类型  键盘按键的值  键值

    ctrlKey,shiftKey,altKey  布尔值

    当一个事件发生的时候，如果ctrl||shift||alt是按下的状态，返回true

    不是所有元素都能够接收键盘事件，能够响应用户输入的元素，能够接收焦点的元素就能够接收键盘事件

3、如何取消连续输入时间间隔

五、事件默认行为

1、定义：当一个事件发生的时候，浏览器自己会默认做得事情

2、如何阻止？

（1）当前这个行为是什么事件触发的，然后在这个事件处理函数中使用return false;

（2）oncontextmenu:右键菜单事件，当右键菜单（环境菜单）显示处理的时候触发

六、拖拽事件

1、setCapture   //设置全局捕获，当我们给一个元素设置全局捕获以后，那么这个元素就会监听后续发生的所有事件，当有事件发生的时候，就会被当前设置了全局捕获的元素所触发

ie:有,并且有效果

ff:有，但是没有效果

chrome:没有

 

释放全局捕获：releaseCapture

七、鼠标滚轮

ie/chrome : onmousewheel
event.wheelDelta（数字类型的值）
上：120
下：-120

firefox : DOMMouseScroll 必须用addEventListener
event.detail（数字类型的值）
上：-3
下：3

return false阻止的是 obj.on事件名称=fn 所触发的默认行为
addEventListener绑定的事件需要通过event下面的preventDefault();


八、cookie存储数据

定义：当用户访问某个网站（网页）的时候，我们可以通过cookie来像访问者电脑上存储数据

1、不同的浏览器存放cookie的位置不一样，也是不能通用的

2、cookie的存储是以域名形式进行区分的

3、cookie的数据可以设置名字的  document.cookie=“名字=值”——可读可写的属性

4、一个域名下存放的cookie的个数是有限制的，不同的浏览器存放的个数不一样

5、每个cookie存放的内容大小也是有限制的，不同的浏览器存放的大小不一样

 

我们通过document.cookie来获取当前网站下的cookie的时候，得到的字符串形式的值，他包含了当前网站下所有的cookie，他会把所有的cookie通过一个分号+空格的形式串联起来

 

var oDate=new Date();

oDate.setDate(oDate.getDate()+5);

oDate.toGMTSring();
如果我们想长时间存放一个cookie。需要在设置这个cookie的时候同时给他设置一个过期的时间：document.cookie = '名称=值;expires=' + 字符串格式的时间;


cookie默认是临时存储的，当浏览器关闭进程的时候自动撤销


内容最好编码存放，encodeURI，解码读取：decodeURI


### JavaScript原型，原型链 ? 有什么特点？
特点：原型链实现了继承
原型链：每个继承父函数的子函数的对象都包含一个内部属性__propt__,该属性包含一个指针，指向父元素的prototype，若父元素的原型对象的__proto__属性为再上一层函数，在此过程中就形成了原型链。
原型：在javascript中，一共有两种类型的值，原始值和对象值，每个对象都有一个内部属性[[prototype]]，我们通常称为原型
