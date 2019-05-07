---
sidebar: auto
sidebarDepth: 2
---
# JavaScript基本功

JavaScript是一种基于对象和事件驱动的、并具有安全性能的脚本语言,已经被广泛用于Web应用开发,常用来为网页添加各式各样的动态功能,为用户提供更流畅美观的浏览效果。通常JavaScript脚本是通过嵌入在HTML中来实现自身的功能的。


## JavaScript特点
是一种解释性脚本语言（代码不进行预编译）。 

主要用来向HTML（标准通用标记语言下的一个应用）页面添加交互行为。 

可以直接嵌入HTML页面，但写成单独的js文件有利于结构和行为的分离。 

跨平台特性，在绝大多数浏览器的支持下，可以在多种平台下运行（如Windows、Linux、Mac、Android、iOS等）。

## JavaScript组成
                    Javascript

            ECMAcript    DOM     BOM

## JavaScript日常用途
嵌入动态文本于HTML页面。 

对浏览器事件做出响应。 

读写HTML元素。 

在数据被提交到服务器之前验证数据。 

检测访客的浏览器信息。 

控制cookies，包括创建和修改等。 

基于Node.js技术进行服务器端编程。


## js的基本数据类型有哪些？
5种简单类型： undefined null number boolean string

1种复杂类型： object

undefined null number boolean string都属于基本类型

object、array、function 属于引用类型

string有些特殊

数据类型 | 转换为true的值  |  转换为false的值
---|--- |---
Boolean| true | false
String| 任何非空的字符串 | ""(空字符串)
Number| 任何非0数值（包括无穷大） | 0和NAN
Object| 任何对象 | null
Undefined| 不适用 | undefined
                                 
## javascript 的基本规范
    1.减少全局污染
    2.变量名的提升，应该在函数内部中所有使用var声明的变量都会提示到函数体头部。以免造成不必要的错误。
    3.for循环
    4.用‘===’取代‘==’，前者是严格相等的意思，数据类型也是需要相等的，后者会提前进行隐式的转换
    5.{}括号，使用for循环或者if语句，都要使用{}
    6.命名规则，构造函数首字母大写
    7.写注释
    8.Switch语句中要带有default分支

## JavaScript核心语法：
    语法约定-----变量-----数据类型-----数组-----运算符号-----控制语句-----注释-----输入/输出

**1. 变量**

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

     

## javascript数据类型

①undefined：

    示例：var width;

    变量width没有初始值，将被赋予值undefined

②null：
    
    表示一个空值，与undefined值相等

③number：

    var iNum=23;     //整数

    var iNum=23.0;    //浮点数

④Boolean：

    true和false   但是JS会把他们解析成1；0

⑤String：
    
    一组被引号（单引号或双引号）括起来的文本 var string1="This is a string";

## typeof运算符

typeof检测变量的返回值；typeof运算符返回值如下：

①undefined：

    变量被声明后，但未被赋值.

②string：

    用单引号或双引号来声明的字符串。

③boolean：
    
    true或false。

④number：
    
    整数或浮点数。

⑤object：
    
    javascript中的对象、数组和null。


## String属性和方法

①对象属性：

    属性 | 描述
    ---|---
constructor| 对创建该对象的函数的引用
length| 字符串的长度
prototype| 允许您向对象添加属性和方法


②对象方法：

    字符串对象.方法名();

方法名称 | 说明 | 返回值
---|--- |---
slice(start,end)| 提取字符串的片断，并在新的字符串中返回被提取的部分|返回一个新的数组，包含从 start 到 end （不包括end），该方法并不会修改数组，而是返回一个子数组
split(separator，howmany)| separator 必需。字符串或正则表达式，从该参数指定的地方分割 str。 howmany	可选。该参数可指定返回的数组的最大长度。如果设置了该参数，返回的子串不会多于这个参数指定的数组。如果没有设置该参数，整个字符串都会被分割，不考虑它的长度。|一个字符串数组。该数组是通过在 separator 指定的边界处将字符串 str 分割成子串创建的。返回的数组中的字串不包括 separator 自身
substr(start,length)| start	必需。要抽取的子串的起始下标。必须是数值。如果是负数，那么该参数声明从字符串的尾部开始算起的位置。也就是说，-1 指字符串中最后一个字符，-2 指倒数第二个字符，以此类推。length	可选。子串中的字符数。必须是数值。如果省略了该参数，那么返回从 str 的开始位置到结尾的字串。|一个新的字符串，包含从 str 的 start（包括 start 所指的字符） 处开始的 length 个字符。如果没有指定 length，那么返回的字符串包含从 start 到 str 的结尾的字符。
substring(start,stop)| start	必需。一个非负的整数，规定要提取的子串的第一个字符在 str 中的位置。stop可选。一个非负的整数，比要提取的子串的最后一个字符在 str 中的位置多 1。| 一个新的字符串，该字符串值包含 str 的一个子字符串，其内容是从 start 处到 stop-1 处的所有字符，其长度为 stop 减 start如果省略该参数，那么返回的子串会一直到字符串的结尾。
concat(stringX,stringX,...,stringX)| stringX	必需。将被连接为一个字符串的一个或多个字符串对象|concat() 方法将把它的所有参数转换成字符串，然后按顺序连接到字符串 str 的尾部，并返回连接后的字符串
indexOf(value,index)| 必需。规定需检索的字符串值。index	可选的整数参数。规定在字符串中开始检索的位置。它的合法取值是 0 到 str.length - 1。如省略该参数，则将从字符串的首字符开始检索。|该方法将从头到尾地检索字符串 str，看它是否含有子串 value。开始检索的位置在字符串的 index 处或字符串的开头（没有指定index 时）。如果找到一个value，则返回value 的第一次出现的位置。str 中的字符位置是从 0 开始的replace(regexp/substr,replacement)| regexp/substr	必需。规定子字符串或要替换的模式的 RegExp 对象。请注意，如果该值是一个字符串，则将它作为要检索的直接量文本模式，而不是首先被转换为 RegExp 对象。| 一个新的字符串，是用 replacement 替换了 regexp 的第一次匹配或所有匹配之后得到的。replacement	必需。一个字符串值。规定了替换文本或生成替换文本的函数。
lastIndexOf(searchvalue,start)| searchvalue	必需。规定需检索的字符串值。start	可选的整数参数。规定在字符串中开始检索的位置。它的合法取值是 0 到 stringObject.length - 1。如省略该参数，则将从字符串的最后一个字符处开始检索。|返回值为Number	查找的字符串最后出现的位置，如果没有找到匹配字符串则返回 -1。
sub()| 把字符串显示为下标
sup()| 把字符串显示为上标
anchor()| 创建HTML锚
big| 用大号字体显示字符串
blink| 显示闪动字符串
bold| 使用粗体显示字符串
charAt(index)| 返回在指定位置的字符
charCodeAt()| 返回在指定的位置的字符的 Unicode 编码
fixed| 以打字机文本显示字符串
fontcolor()| 使用指定的颜色来显示字符串
fontsize()| 使用指定的尺寸来显示字符串
fromCharCode()| 从字符编码创建一个字符串
italics()| 使用斜体显示字符串
link()| 将字符串显示为链接
localeCompare()| 用本地特定的顺序来比较两个字符串
match()| 找到一个或多个正则表达式的匹配
small()| 使用小字号来显示字符串
strike()| 使用删除线来显示字符串
toLocaleLowerCase()| 把字符串转换为小写
toLocaleUpperCase()| 把字符串转换为大写
toLowerCase()| 把字符串转换为小写
toUpperCase()| 	把字符串转换为大写
toSource()| 代表对象的源代码
toString()| 返回字符串
valueOf()| 返回某个字符串对象的原始值
bsubstring(index1,index2)| 返回位于指定索引index1和index2之间的字符串，并且包括索引index1对应的字符，不包括索引index2对应的字符


## 数组

①创建数组：

    var 数组名称=new Array(size)

    new表示数组的关键字   size表示数组中可存放的元素总数

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

## 数组的常用属性和方法

数组的属性：

    length：
    
            1.告诉我们数组的长度：数组名.length

            2.通过该属性可以改变数组的长度

数组的常用方法：

**1) join()**

join(separator): 将数组的元素组起一个字符串，以separator为分隔符，省略的话则用默认用逗号为分隔符，该方法只接收一个参数：即分隔符。
```
var arr = [1,2,3];
console.log(arr.join()); // 1,2,3
console.log(arr.join("-")); // 1-2-3
console.log(arr); // [1, 2, 3]（原数组不变）
```
通过join()方法可以实现重复字符串，只需传入字符串以及重复的次数，就能返回重复后的字符串，函数如下：
```
function repeatString(str, n) {
return new Array(n + 1).join(str);
}
console.log(repeatString("abc", 3)); // abcabcabc
console.log(repeatString("Hi", 5)); // HiHiHiHiHi
```

**2) push()和pop()**

push(): 可以接收任意数量的参数，把它们逐个添加到数组末尾，并返回修改后数组的长度。 

pop()：数组末尾移除最后一项，减少数组的 length 值，然后返回移除的项。

```
var arr = ["Lily","lucy","Tom"];
var count = arr.push("Jack","Sean");
console.log(count); // 5
console.log(arr); // ["Lily", "lucy", "Tom", "Jack", "Sean"]
var item = arr.pop();
console.log(item); // Sean
console.log(arr); // ["Lily", "lucy", "Tom", "Jack"]
```
**3)shift() 和 unshift()**

shift()：删除原数组第一项，并返回删除元素的值；如果数组为空则返回undefined 。 

unshift:将参数添加到原数组开头，并返回数组的长度 。

这组方法和上面的push()和pop()方法正好对应，一个是操作数组的开头，一个是操作数组的结尾。
```
var arr = ["Lily","lucy","Tom"];
var count = arr.unshift("Jack","Sean");
console.log(count); // 5
console.log(arr); //["Jack", "Sean", "Lily", "lucy", "Tom"]
var item = arr.shift();
console.log(item); // Jack
console.log(arr); // ["Sean", "Lily", "lucy", "Tom"]
```

**4) sort()**

sort()：按升序排列数组项——即最小的值位于最前面，最大的值排在最后面。

在排序时，sort()方法会调用每个数组项的 toString()转型方法，然后比较得到的字符串，以确定如何排序。即使数组中的每一项都是数值， sort()方法比较的也是字符串，因此会出现以下的这种情况：
```
var arr1 = ["a", "d", "c", "b"];
console.log(arr1.sort()); // ["a", "b", "c", "d"]
arr2 = [13, 24, 51, 3];
console.log(arr2.sort()); // [13, 24, 3, 51]
console.log(arr2); // [13, 24, 3, 51](元数组被改变)
```

为了解决上述问题，sort()方法可以接收一个比较函数作为参数，以便我们指定哪个值位于哪个值的前面。比较函数接收两个参数，如果第一个参数应该位于第二个之前则返回一个负数，如果两个参数相等则返回 0，如果第一个参数应该位于第二个之后则返回一个正数。以下就是一个简单的比较函数：

```
function compare(value1, value2) {
    if (value1 < value2) {
        return -1;
    } else if (value1 > value2) {
        return 1;
    } else {
        return 0;
    }
}
arr2 = [13, 24, 51, 3];
console.log(arr2.sort(compare)); // [3, 13, 24, 51]
```
如果需要通过比较函数产生降序排序的结果，只要交换比较函数返回的值即可：

```function compare(value1, value2) {
    if (value1 < value2) {
        return 1;
    } else if (value1 > value2) {
        return -1;
    } else {
        return 0;
    }
}
arr2 = [13, 24, 51, 3];
console.log(arr2.sort(compare)); // [51, 24, 13, 3]
```

**5) reverse()**

reverse()：反转数组项的顺序。
```
var arr = [13, 24, 51, 3];
console.log(arr.reverse()); //[3, 51, 24, 13]
console.log(arr); //[3, 51, 24, 13](原数组改变)
```
**6) concat()**

concat() ：将参数添加到原数组中。这个方法会先创建当前数组一个副本，然后将接收到的参数添加到这个副本的末尾，最后返回新构建的数组。在没有给 concat()方法传递参数的情况下，它只是复制当前数组并返回副本。
```
var arr = [1,3,5,7];
var arrCopy = arr.concat(9,[11,13]);
console.log(arrCopy); //[1, 3, 5, 7, 9, 11, 13]
console.log(arr); // [1, 3, 5, 7](原数组未被修改)
```
从上面测试结果可以发现：传入的不是数组，则直接把参数添加到数组后面，如果传入的是数组，则将数组中的各个项添加到数组中。但是如果传入的是一个二维数组呢？
```
var arrCopy2 = arr.concat([9,[11,13]]);
console.log(arrCopy2); //[1, 3, 5, 7, 9, Array[2]]
console.log(arrCopy2[5]); //[11, 13]
```
上述代码中，arrCopy2数组的第五项是一个包含两项的数组，也就是说concat方法只能将传入数组中的每一项添加到数组中，如果传入数组中有些项是数组，那么也会把这一数组项当作一项添加到arrCopy2中。

**7) slice()**

slice()：返回从原数组中指定开始下标到结束下标之间的项组成的新数组。slice()方法可以接受一或两个参数，即要返回项的起始和结束位置。在只有一个参数的情况下， slice()方法返回从该参数指定位置开始到当前数组末尾的所有项。如果有两个参数，该方法返回起始和结束位置之间的项——但不包括结束位置的项。
```
var arr = [1,3,5,7,9,11];
var arrCopy = arr.slice(1);
var arrCopy2 = arr.slice(1,4);
var arrCopy3 = arr.slice(1,-2);
var arrCopy4 = arr.slice(-4,-1);
console.log(arr); //[1, 3, 5, 7, 9, 11](原数组没变)
console.log(arrCopy); //[3, 5, 7, 9, 11]
console.log(arrCopy2); //[3, 5, 7]
console.log(arrCopy3); //[3, 5, 7]
console.log(arrCopy4); //[5, 7, 9]
```
arrCopy只设置了一个参数，也就是起始下标为1，所以返回的数组为下标1（包括下标1）开始到数组最后。 

arrCopy2设置了两个参数，返回起始下标（包括1）开始到终止下标（不包括4）的子数组。 

arrCopy3设置了两个参数，终止下标为负数，当出现负数时，将负数加上数组长度的值（6）来替换该位置的数，因此就是从1开始到4（不包括）的子数组。

arrCopy4中两个参数都是负数，所以都加上数组长度6转换成正数，因此相当于slice(2,5)。

**8) splice()**

splice()：很强大的数组方法，它有很多种用法，可以实现删除、插入和替换。

删除：可以删除任意数量的项，只需指定 2 个参数：要删除的第一项的位置和要删除的项数。例如， splice(0,2)会删除数组中的前两项。

插入：可以向指定位置插入任意数量的项，只需提供 3 个参数：起始位置、 0（要删除的项数）和要插入的项。例如，splice(2,0,4,6)会从当前数组的位置 2 开始插入4和6。
替换：可以向指定位置插入任意数量的项，且同时删除任意数量的项，只需指定 3 个参数：起始位置、要删除的项数和要插入的任意数量的项。插入的项数不必与删除的项数相等。例如，splice (2,1,4,6)会删除当前数组位置 2 的项，然后再从位置 2 开始插入4和6。

splice()方法始终都会返回一个数组，该数组中包含从原始数组中删除的项，如果没有删除任何项，则返回一个空数组。
```
var arr = [1,3,5,7,9,11];
var arrRemoved = arr.splice(0,2);
console.log(arr); //[5, 7, 9, 11]
console.log(arrRemoved); //[1, 3]
var arrRemoved2 = arr.splice(2,0,4,6);
console.log(arr); // [5, 7, 4, 6, 9, 11]
console.log(arrRemoved2); // []
var arrRemoved3 = arr.splice(1,1,2,4);
console.log(arr); // [5, 2, 4, 4, 6, 9, 11]
console.log(arrRemoved3); //[7]
```
**9) indexOf()和 lastIndexOf()**

indexOf()：接收两个参数：要查找的项和（可选的）表示查找起点位置的索引。其中， 从数组的开头（位置 0）开始向后查找。

lastIndexOf：接收两个参数：要查找的项和（可选的）表示查找起点位置的索引。其中， 从数组的末尾开始向前查找。

这两个方法都返回要查找的项在数组中的位置，或者在没找到的情况下返回1。在比较第一个参数与数组中的每一项时，会使用全等操作符。
```
var arr = [1,3,5,7,7,5,3,1];
console.log(arr.indexOf(5)); //2
console.log(arr.lastIndexOf(5)); //5
console.log(arr.indexOf(5,2)); //2
console.log(arr.lastIndexOf(5,4)); //2
console.log(arr.indexOf("5")); //-1
```
**10) forEach()**

forEach()：对数组进行遍历循环，对数组中的每一项运行给定函数。这个方法没有返回值。参数都是function类型，默认有传参，参数分别为：遍历的数组内容；第对应的数组索引，数组本身。
```
var arr = [1, 2, 3, 4, 5];
arr.forEach(function(x, index, a){
console.log(x + '|' + index + '|' + (a === arr));
});
// 输出为：
// 1|0|true
// 2|1|true
// 3|2|true
// 4|3|true
// 5|4|true
```
**11) map()**

map()：指“映射”，对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组。

下面代码利用map方法实现数组中每个数求平方。
```
var arr = [1, 2, 3, 4, 5];
var arr2 = arr.map(function(item){
return item*item;
});
console.log(arr2); //[1, 4, 9, 16, 25]
```
**12) filter()**

filter()：“过滤”功能，数组中的每一项运行给定函数，返回满足过滤条件组成的数组。
```
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arr2 = arr.filter(function(x, index) {
return index % 3 === 0 || x >= 8;
}); 
console.log(arr2); //[1, 4, 7, 8, 9, 10]
```
**13) every()**

every()：判断数组中每一项都是否满足条件，只有所有项都满足条件，才会返回true。
```
var arr = [1, 2, 3, 4, 5];
var arr2 = arr.every(function(x) {
return x < 10;
}); 
console.log(arr2); //true
var arr3 = arr.every(function(x) {
return x < 3;
}); 
console.log(arr3); // false
```
**14) some()**

some()：判断数组中是否存在满足条件的项，只要有一项满足条件，就会返回true。
```
var arr = [1, 2, 3, 4, 5];
var arr2 = arr.some(function(x) {
return x < 3;
}); 
console.log(arr2); //true
var arr3 = arr.some(function(x) {
return x < 1;
}); 
console.log(arr3); // false
```
**15) reduce()和 reduceRight()**

这两个方法都会实现迭代数组的所有项，然后构建一个最终返回的值。reduce()方法从数组的第一项开始，逐个遍历到最后。而 reduceRight()则从数组的最后一项开始，向前遍历到第一项。

这两个方法都接收两个参数：一个在每一项上调用的函数和（可选的）作为归并基础的初始值。

传给 reduce()和 reduceRight()的函数接收 4 个参数：前一个值、当前值、项的索引和数组对象。这个函数返回的任何值都会作为第一个参数自动传给下一项。第一次迭代发生在数组的第二项上，因此第一个参数是数组的第一项，第二个参数就是数组的第二项。

下面代码用reduce()实现数组求和，数组一开始加了一个初始值10。
```
var values = [1,2,3,4,5];
var sum = values.reduceRight(function(prev, cur, index, array){
return prev + cur;
},10);
console.log(sum); //25
```
## dom增删查改
增：

```document.createElement(tag);```

```document.createTextNode();```

```document.createDocumentFragment()``` 

```dom.appendChild(sondom);```

```dom.insertBefore(newdom,targetdom);```

删：

```document.removeChild();```

改：

```document.replaceChild();```

查：

```getElementById()```

```getElementsByTagName()```

```getElementsByName();```


## 运算符号
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

## 逻辑控制语句
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

##循环中断
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
## 注释
①单行注释以 // 开始，以行末结束：

//alert("恭喜你！注册会员成功");

//在页同上弹出注册会员成功的提示框

//注释

如果在页面里单行注释中回车打一些东西此时就会报错：
```
    Uncaught ReferenceError: XXXX is not defined
```
②多行注释以 /* 开始，以 */ 结束，符号 /*…… */ 指示中间的语句是该程序中的注释
```
/*   使用for循环运行“document.write("<h3>Hello World</h3>");”5次

使用document.write在页面上输出“Hello World”   */
```

## 常用的输入/输出

【输出一般使用alert；输入使用prompt；但是后期不建议使用alert，在真实的开发中一般使用console.Log( )】

①alert()【一般用在一些警告或者提示中】：

```alert("提示信息");```

②prompt()

```prompt("提示信息", "输入框的默认信息");```

```prompt("请输入你喜欢的颜色","红色");```

```prompt("请输入你喜欢的颜色","");```

 

## 语法约定

①代码区分大小写

小写写成大写会报错：
```
Uncaught SyntaxError: Unexpected identifier
```
②变量、对象和函数的名称

当声明变量、对象和函数的名称时大小写，数字，下划线，美元符号都可以，但是必须以字母，下划线，美元符号开头

否则会报错：
```
Uncaught SyntaxError: Invalid or unexpected token
```

③分号

如果不写会报错：
```
Uncaught SyntaxError: Invalid or unexpected token
```
 

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

 

## 函数

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
```
function 函数名(参数1，参数2，参数3){
    //javascript语句
    [return 返回值]
}
```
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
## 变量的作用域:
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

## event事件对象

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


**事件流**

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

**焦点事件**

焦点：使浏览器能够区分用户输入的对象，当一个元素有焦点的时候，那么他就可以接收用户的输入

设置焦点方式：点击、tab、js

onfocus:当元素获取到焦点的时候触发

onblur:当元素失去焦点的时候触发

obj.focus();给指定的元素设置焦点

obj.blur();取消指定元素的焦点

obj.select();选择制定元素里面的文本内容（用户输入的内容，可以操作可交互性元素的内容，例如P，div内的内容是无法全选的）

 
```
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
```

**键盘事件**

 1、onkeydown:当键盘按键按下的时候触发，如果按下不抬起，那么会连续触发

     onkeyup:当键盘按键抬起的时候触发

2、event.keyCode:数字类型  键盘按键的值  键值

    ctrlKey,shiftKey,altKey  布尔值

    当一个事件发生的时候，如果ctrl||shift||alt是按下的状态，返回true

    不是所有元素都能够接收键盘事件，能够响应用户输入的元素，能够接收焦点的元素就能够接收键盘事件

3、如何取消连续输入时间间隔

**事件默认行为**

1、定义：当一个事件发生的时候，浏览器自己会默认做得事情

2、如何阻止？

（1）当前这个行为是什么事件触发的，然后在这个事件处理函数中使用return false;

（2）oncontextmenu:右键菜单事件，当右键菜单（环境菜单）显示处理的时候触发

**拖拽事件**

1、setCapture   //设置全局捕获，当我们给一个元素设置全局捕获以后，那么这个元素就会监听后续发生的所有事件，当有事件发生的时候，就会被当前设置了全局捕获的元素所触发

ie:有,并且有效果

ff:有，但是没有效果

chrome:没有

 
释放全局捕获：releaseCapture

**鼠标滚轮**

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


## cookie存储数据

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


## JavaScript原型，原型链 ? 有什么特点？
特点：原型链实现了继承
原型链：每个继承父函数的子函数的对象都包含一个内部属性__propt__,该属性包含一个指针，指向父元素的prototype，若父元素的原型对象的__proto__属性为再上一层函数，在此过程中就形成了原型链。
原型：在javascript中，一共有两种类型的值，原始值和对象值，每个对象都有一个内部属性[[prototype]]，我们通常称为原型

## JavaScript constructor 属性详解
对象的constructor属性用于返回创建该对象的函数，也就是我们常说的构造函数。

在javascript中，每个具有原型的对象都会自动获得constructor属性。除了arguments、Enumerator、Error、Global、Math、RegExp、Regular Expression等一些特殊对象之外，其他所有的JavaScript内置对象都具备constructor属性。例如：Array、Boolean、Date、Function、Number、Object、String等。

**语法**

Object.constructor

**返回值**

对象的constructor属性返回创建该对象的函数的引用

**示例&说明**

```
// 字符串：string()
var str='张三';
console.log(str.constructor); // function String() { [native code] }
console.log(str.constructor===String) // true

// 数组：Array()
var arr = [1, 2, 3];
alert(arr.constructor); // function Array() { [native code] }
alert(arr.constructor === Array); // true
 
// 数字：Number()
var num = 5;
alert(num.constructor); // function Number() { [native code] }
alert(num.constructor === Number); // true
 
// 自定义对象：Person()
function Person(){
    this.name = "CodePlayer";
}
var p = new Person();
alert(p.constructor); // function Person(){ this.name = "CodePlayer"; }
alert(p.constructor === Person); // true
 
// JSON对象：Object()
var o = { "name" : "张三"};
alert(o.constructor); // function Object() { [native code] }
alert(o.constructor === Object); // true
 
// 自定义函数：Function()
function foo(){
    alert("CodePlayer");
}
alert(foo.constructor); // function Function() { [native code] }
alert(foo.constructor === Function); // true
 
// 函数的原型：bar()
function bar(){
    alert("CodePlayer");
}
alert(bar.prototype.constructor); // function bar(){ alert("CodePlayer"); }
alert(bar.prototype.constructor === bar); // true
```

### 构造函数  原型  实例化对象   之间的关系
构造函数中存在一个属性叫  prototype  也就是原型,原型本身又是一个对象,它内部存储着  constructor 构造器,还用用户定义的需要共享的属性以及方法

prototype 原型对象中的constructor属性 指向的是prototype自己所在的构造函数

在实例化对象中存在着一个叫 __proto__的属性,同时它本身是一个对象,确切地说  它指向构造函数中的 prototype对象所在的内存空间,所以  ```__proto__ ==Prototype ```,

但是__proto__是一个非标准化的对象,  它内部的方法 可以直接 被它的父级对象直接调用,  如上段代码中  introduce方法在 __proto__对象中, __proto__是p1的属性, 正常调用方式是  p1.__proto__.introduce(),   由于__proto__的非标准化, p1.introduce()  调用方法也是行得通的.