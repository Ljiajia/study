# React组件
### 组件创建方式

> React.createClass ——  es5的方式创建，已经废弃
>
> 函数创建组件 ——  函数组件/无状态组件
>
> class App extends React.Component ——es6创建组件

### es6创建组件

> React目前极为推荐的创建有状态组件的方式

```javascript
// 如何定义一个类组件
import React,{Component} from 'react'

class Header extends Component {
  render(){
    return (
      <header>我是头部</header>
    )
  }
}

export default Header
```

### 函数组件/无状态组件

```javascript
import React, { Component } from 'react';

export default (props)=>(
  <div>main</div>
)
```

> 创建纯展示组件，只负责根据传入的`props`来展示，不涉及到要`state`状态的操作
>
> 内部无生命周期
>
> 组件不会实例化，性能好
>
> 不能访问this

### css

> style 传入一个对象
>
> ```jsx
> <header style={{color:'red',backgroundColor:'blue'}}>我是头部</header>
> ```
>
> css引入
>
> ```javascript
> import "./style.css";
> ```
>
> css module
>
> > create-react-app已经配置好，不需要额外配置
> >
> > 针对class名，会替换成以。  文件名 class名 哈希值   的组合
> >
> > css文件命名见下方
> >
> > 使用css moudle
> >
> > 如果使用sass，只需要安装node-sass，将文件改成sass文件即可，不需要额外的配置
> >
> > ```javascript
> > //引入css ---- 注意与上面的区分，文件命名
> > import style from './header.module.css'
> > 
> > //使用
> > <header className={style.header}>我是头部</header>
> > 
> > ```



