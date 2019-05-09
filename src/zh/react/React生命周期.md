# React生命周期
### react16当前生命周期
##### 1、componentDidMount() // 组件挂载完成之后触发的生命周期 相当于vue的mounted
```
componentDidMount(){
    setInterval(()=>{
        // 修改state的唯一方法
        // @param 要修改的数据
        // @param 修改完成之后的回调函数
        this.setState({
            index:this.state.index++
        },()=>{
            consloe.log(this.state.index)
        })
    },1000)
}

```
##### 2、componentWillMount()  // 组件挂载之前 相当于vue的beforeMount
##### 3、componentWillReceiveProps(nextProps)  // 组件将要接收新的props vue没有

```
// 和props相关的唯一一个生命周期
// 执行完成之后，this.props指向新的props
componentWillReceiveProps(nextProps){
    // 旧的props   this.props
    // 新的props   nextProps
    
}


```
##### 4、shouldComponentUpdate(nextProps,nextState)  // 通过返回值判断组件是否需要更新,用于react优化，vue没有 true更新，false不更新
```
shouldComponentUpdate(nextProps,nextState){
    // 旧的props   this.props
    // 新的props   nextProps
    // 旧的State   this.state
    // 新的state   nextState
    // 返回值是Boolean  默认true
}


```
##### 5、componentWillUpdate // 组件将要更新 相当于vue的beforeUpdate
##### 6、componentDidUpdate // 组件更新完成 相当于vue的updated
##### 7、componentWillUnmount() // 组件将要卸载
##### 8、unmountComponentAtNode() // 卸载组件
```
ReactDom.unmountComponentAtNode(document.getElementById('root'))
```
##### 9、分为三个阶段
**1. 实例化阶段**

```
首次使用一个组件类时会有getDefaultProps
对于组件类的所有后续应用没有getDefaultProps
1、getDefaultProps
2、getInitialState
3、componentWillMount
4、render
5、componentDidMount
```
**2. 更新阶段(存在期)**


```
1. componentWillReceiveProps 
2. shouldComponentUpdate 
3. componentWillUpdate 
4. render 
5. componentDidUpdate
```
**3. 销毁&清理期**

```
componentWillUnmount
```

react官方打算在未来提出一种实现异步渲染的方法以提高性能，主要的特点就是在渲染完成之前可以被中断，中断之后不会继续执行生命周期，而是重头开始执行生命周期。

##### 从v17开始删除以下三个生命周期钩子：
```
componentWillMount
componentWillReceiveProps
componentWillUpdate
```

###  新增两个新生命周期钩子

#### static getDerivedStateFromProps

用法：

    触发时间：
    实例创建之后
    每次获取到新的props或者新的state（即setState）之后

参数

    nextProps
    nextState

返回值

    如果返回一个Object，则相当于进行一次setState操作（注意，这里返回对象虽然改变了state，但不会再次触发此函数）
    如果为null，则不更新state
    如果无返回值（即默认return undefined），报错
    如果返回一个基本类型值（如return 666;），则与返回null无区别

这里需要注意的是：

    1.getDerivedStateFromProps是一个静态方法，this为undefined，不指向实例，所以也拿不到实例的属性和方法。至于为什么要将此方法设计为静态方法，官方文档解释：以后的组件将进行异步渲染，防止实例属性的被不安全访问，编写出异步兼容的代码

    2.此方法不提供一个prevProps的参数，官方解释为，首次执行此方法，prevProps是null，那么每次调用此方法都要判断一次，很耗性能。其次，如果大家以后都习惯没有prevProps的日子，那么react就不保存prevProps的引用了，节省内存，提高性能（心里一万匹***奔腾而过）

    3.如果要访问prevProps，只能将一些props的属性记录到state里面去了

    4.不能同上述提到即将要被删除掉的三个生命周期钩子同时使用

#### getSnapshotBeforeUpdate

用法:

    1.触发时间：update发生的时候，在render之后，在组件dom渲染之前
    2.参数：prevProps, prevState（prevState为上一次更新中getDerivedStateFromProps方法执行后state的值）
    3.返回值可以为任意值，且返回值将作为componentDidUpdate的第三个参数

这里需要注意的是：

    1.与componentDidUpdate成对使用，否则会报错
    2.不能同上述提到即将要被删除掉的三个生命周期钩子同时使用


#### 为什么要删除三个生命周期钩子
其实官方解释是，很多react用户（包括我）都存在错误的使用这三个生命周期钩子的行为，导致以后异步渲染时，会导致极大的性能损耗，所以强制将这三个钩子删除掉（v17版本之后，现在还是可以使用的）。那接下来看看在这三个生命周期到底存在什么错误的用法：
#### componentWillMount

错误做法：

* 天真地认为在这里请求异步数据，首屏渲染就会有数据了
* 在此添加事件监听方法
* 在此初始化state（根据props进行setState）

缺点：

* 在此发起异步数据请求之后，会立刻调用render方法，那么首屏渲染还是没有数据
* 服务器渲染，不会调用componentWillUnmount方法，那么在此钩子里面添加的事件监听方法就无法被浏览器移除，导致内存泄露；同时，在此钩子请求异步数据，也无法首屏渲染数据（原因同上一点），返回到前端还是空白页面。
* 上面提到多，渲染可被打断，如果被打断，那么就可能会多次调用此钩子，导致多次请求数据，消耗性能

优化

* 在constructor里面进行state的初始化
* 在componentDidMount里面请求异步数据和添加事件监听方法（因为此时能够确保componentWillUnmount钩子一定会执行，就可在这个地方进行销毁事件监听器，回收内存）
* 解决服务端渲染的问题，可以查阅一下react的同构直出的方法

#### componentWillReceiveProps


错误做法：

* 根据前后props数据的对比更新state
* 根据前后props数据的对比请求异步数据

缺点：

* 更新state方式不优雅
* 职能不专，同时进行setState和获取异步数据等会触发新一轮组件更新的操作
* 渲染可被中断，会多次请求数据

优化：

* 使用getDerivedStateFromProps返回值来更新state
* 在componentDidUpdate获取数据

#### componentWillUpdate

错误做法：

* 根据新的state发起异步数据请求
* 在此进行外部函数调用（如nextProps.someMethod()）
* 记录更新前一些节点的属性（这个做法没错，只是现在有更好的方式）

缺点：

* 异步数据和外部函数调用请求的缺点同前面两个钩子的一样
* 记录的信息如果放在state中，需要额外的判断（会进行两次更新）

优化：

* 在componentDidUpdate 在此处数据请求和外部函数调用
* 在getSnapshotBeforeUpdate记录当前节点信息，记录的信息通过返回值传递给componentDidUpdate作为第三个参数（省内存，仅一次更新）
