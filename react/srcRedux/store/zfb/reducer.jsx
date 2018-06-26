import {
    Z_ADDNUM,
    Z_CHANGESHOPLIST,
    Z_CHANGESHOPITEM,
    Z_CHANGESHOPITEMSTATE,
    Z_CHANGESHOPITEMNUM,
    Z_CHANGESHOPCARCLASS
} from "./types"

let Initstate={
    num:0,
    shoppingList:[],
    carList:[]
}

export default (state = Initstate, action) => {

    let {type,text}=action
    switch (type) {
        case Z_ADDNUM:{
            let obj={...state,...{num:text}}
            return obj
        }
        case Z_CHANGESHOPLIST:{
            let obj={...state,...{shoppingList:text}}
            return obj
        }
        case Z_CHANGESHOPITEM:{
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
        case Z_CHANGESHOPITEMSTATE:{

            console.log(text)
           let arr=state.shoppingList.map((i)=>{
               i.state=text
               return i
            })
            let obj={...state,...{shoppingList:arr}}
            return obj
        }
        case Z_CHANGESHOPITEMNUM:{

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
        case Z_CHANGESHOPCARCLASS:{

            let obj={...state,...{carList:text}}
            console.log(obj)
            return obj
        }
        default:
            return state
    }
}