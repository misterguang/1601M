import {
    T_ADDNUM,
    T_CHANGESHOPLIST,
    T_CHANGESHOPITEM,
    T_CHANGESHOPITEMSTATE,
    T_CHANGESHOPITEMNUM,
    T_CHANGESHOPCARCLASS
} from "./types"

let Initstate={
    num:0,
    shoppingList:[],
    carList:[]
}

export default (state = Initstate, action) => {

    let {type,text}=action
    switch (type) {
        case T_ADDNUM:{
            let obj={...state,...{num:text}}
            return obj
        }
        case T_CHANGESHOPLIST:{
            let obj={...state,...{shoppingList:text}}
            return obj
        }
        case T_CHANGESHOPITEM:{
            console.log(text)
           let arr=state.shoppingList.map((i)=>{
                if(i.id==text.id){
                    return text
                }else{
                    return i
                }
            })
            let obj={...state,...{shoppingList:arr}}
            return obj
        }
        case T_CHANGESHOPITEMSTATE:{

            console.log(text)
           let arr=state.shoppingList.map((i)=>{
               i.state=text
               return i
            })
            let obj={...state,...{shoppingList:arr}}
            return obj
        }
        case T_CHANGESHOPITEMNUM:{

            console.log(text)
            let arr=state.shoppingList.map((i)=>{
                if(i.id==text.id){
                    return text
                }else{
                    return i
                }
            })
            let obj={...state,...{shoppingList:arr}}
            return obj
        }
        case T_CHANGESHOPCARCLASS:{

            let obj={...state,...{carList:text}}
            console.log(obj)
            return obj
        }
        default:
            return state
    }
}