import {
    createStore
} from "redux"

let Initstate={
    num:0,
    shoppingList:[]
}

 let reducer = (state = Initstate, action) => {
     console.log(action)
    let {type,text}=action
    switch (type) {
        case 'ADDNUM':{
            let obj={...state,...{num:text}}
            return obj
        }
           
        case 'CHANGESHOPLIST':{
            let obj={...state,...{shoppingList:text}}
            return obj
        }
        case 'CHANGESHOPITEM':{

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
        case 'CHANGESHOPITEMSTATE':{

            console.log(text)
           let arr=state.shoppingList.map((i)=>{
               i.state=text
               return i
            })
            let obj={...state,...{shoppingList:arr}}
            return obj
        }
        case 'CHANGESHOPITEMNUM':{

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
    },
    changeShopList(item){
        return {
            type:"CHANGESHOPLIST",
            text:item
        }
    },
    changeShopItem(item){
        return {
            type:"CHANGESHOPITEM",
            text:item
        }
    },
    changeShopItemState(item){
        return {
            type:"CHANGESHOPITEMSTATE",
            text:item
        }
    },
    changeShopItemNum(item){
        return {
            type:"CHANGESHOPITEMNUM",
            text:item
        }
    }
}

export default createStore(reducer)

 