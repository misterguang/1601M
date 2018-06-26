import {
    T_ADDNUM,
    T_CHANGESHOPLIST,
    T_CHANGESHOPITEM,
    T_CHANGESHOPITEMSTATE,
    T_CHANGESHOPITEMNUM,
    T_CHANGESHOPCARCLASS,
    T_CHANGESHOPSYNCCARCLASS
} from "./types"

export default {
    [T_ADDNUM](item){
        return {
            type:T_ADDNUM,
            text:item
        }
    },
    [T_CHANGESHOPLIST](item){
        return {
            type:T_CHANGESHOPLIST,
            text:item
        }
    },
    [T_CHANGESHOPITEM](item){
        return {
            type:T_CHANGESHOPITEM,
            text:item
        }
    },
    [T_CHANGESHOPITEMSTATE](item){
        return {
            type:T_CHANGESHOPITEMSTATE,
            text:item
        }
    },
    [T_CHANGESHOPITEMNUM](item){
        return {
            type:T_CHANGESHOPITEMNUM,
            text:item
        }
    },
    [T_CHANGESHOPCARCLASS](item){
        return {
            type:T_CHANGESHOPCARCLASS,
            text:item
        }
    },
    [T_CHANGESHOPSYNCCARCLASS](item){
        return (dispatch)=>{
            fetch("/api/shopClass").then((res)=>{
                return res.json()
            }).then((data)=>{
                console.log(data)
                dispatch(this[T_CHANGESHOPCARCLASS](data))
            })
        }
    }
}