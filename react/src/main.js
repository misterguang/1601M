import React,{Component} from "react"
import ReactDOM from "react-dom"
// import { setInterval } from "timers";

// 无状态组件
// function render(){
//     const element = <h2>{new Date().toLocaleTimeString()}.</h2>
//     ReactDOM.render(
//         element,
//         document.getElementById('root')
//     );

// }
// setInterval(render,1000)

// react采用createClass方式进行组件的注册
// console.log(React)
// const Test=React.createClass({
//     // getInitialState:function(){
//     //   return {
//     //     name:"zhangsan"
//     //   }
//     // },
      
//     // getDefaultProps:function(){
//     //   return {
//     //     name:"zhangsan" //这里的zhangsan相当于默认值
//     //   }
//     // }
//     render(){
//         return <h2>啊哈哈</h2>
//     }
//   })

//   ReactDOM.render(
//     <Test />,
//     document.getElementById('root')
// );


// class App extends Component{
//     constructor(props){
//         super(props)
//         this.state={
//             name:props.name||'zhagnsan'
//         }
//     }
    

// }







// import "./css/reset.css"


import App from "./components/app"

ReactDOM.render(
    <App />,
    document.getElementById('root')
);