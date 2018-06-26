import React, { Component } from 'react'
import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom"



import App from "../components/app"
import  Index from "../components/index"




export default function(){
  
    return <Router>
            <App>
                <Route path='/index' component={Index}/>
               
                <Route exact path='/' render={()=>{
                    return <Redirect to="/index" />
                }}/>
            </App>
    </Router>
}


// export default function(){
//     let childFn=(i)=>{
//         let Com=i.commponent
//         let Children=i.children.map((j)=>{
//             let ell
//             if(j.children&&j.children.length>0){
//                 ell=<Route key={j.name} path={j.path} component={()=>childFn(j)}/>
//             }else{
//                 ell=<Route key={j.name} path={j.path} component={j.commponent}/>
//             }
//             return ell
//         })
//         let el= <Com >
//                     {Children}
//             </Com>
        
//         return el
//     }
//     let dom=Config.map((i)=>{
//         let el
//         if(i.children&&i.children.length>0){
//            el=<Route key={i.name} path={i.path} component={()=>childFn(i)}/> 
//         }else{
//             el=<Route key={i.name} path={i.path} component={i.commponent}/>
//         }
       
//         return el
//     })
//     return <Router>
//             <App>
//                 {/* {dom} */}
//                 <Route exact path='/' render={()=>{
//                     return <Redirect to="/a" />
//                 }}/>
//             </App>
//     </Router>
// }