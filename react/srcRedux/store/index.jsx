import {
    createStore
} from "redux"

let Initstate={
    num:0
}

 let reducer = (state = Initstate, action) => {
     console.log(action)
    let {type,text}=action
    switch (type) {
        case 'ADDNUM':
            let obj={...state,...{num:text}}
            console.log(obj)
            return obj
        default:
            return state
    }
}

export let actions={
    addNum(item){
        return {
            type:"ADDNUM",
            text:item
        }
    }
}

export default createStore(reducer)

 