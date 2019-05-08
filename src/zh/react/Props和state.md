# Props和state
#### 1、和props相关
- 只读，不准修改
- componentWillReceiveProps  / 生命周期
- propTypes
- defaultProps
- children
#### 2、类型检查

```
import PropTypes from 'prop-types';

List.propTypes = {
    list:PropTypes.array/object/number/string
}
```

### props和defaultProps
>
> props可以传入： 值，组件，函数
>
> 定义默认的props
>
> ```javascript
>  class Header extends Component {
>   constructor(props){
>     super(props)
>   }
>   // static defaultProps = {
>   //   dis:'我是默认的props'
>   // }
>   render(){
> 
>     return (
>       <header>header</header>
>     )
>   }
> }
> Header.defaultProps = {
>   dis:'我是默认的props'
> }
> ```

### props和state

> props 父传入
>
> state自身状态
>
> 发生变化时会触发render，视图更新

### state

> state的更改
>
> 更改state的方法
>
> ```javascript
> //setState为**异步**操作，第二个参数为回掉，在更改state后执行，可在此获取更改后的state的值 
> this.setState({
>      title:'我是更改后的值'
>  },()=>{
>      console.log(this.state.title)      
>  });
> ```
