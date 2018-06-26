import {
    Z_ADDNUM,
    Z_CHANGESHOPLIST,
    Z_CHANGESHOPITEM,
    Z_CHANGESHOPITEMSTATE,
    Z_CHANGESHOPITEMNUM,
    Z_CHANGESHOPCARCLASS,
    Z_CHANGESHOPSYNCCARCLASS
} from "./types"

export default {
    [Z_ADDNUM](item){
        return {
            type:Z_ADDNUM,
            text:item
        }
    },
    [Z_CHANGESHOPLIST](item){
        return {
            type:Z_CHANGESHOPLIST,
            text:item
        }
    },
    [Z_CHANGESHOPITEM](item){
        return {
            type:Z_CHANGESHOPITEM,
            text:item
        }
    },
    [Z_CHANGESHOPITEMSTATE](item){
        return {
            type:Z_CHANGESHOPITEMSTATE,
            text:item
        }
    },
    [Z_CHANGESHOPITEMNUM](item){
        return {
            type:Z_CHANGESHOPITEMNUM,
            text:item
        }
    },
    [Z_CHANGESHOPCARCLASS](item){
        return {
            type:Z_CHANGESHOPCARCLASS,
            text:item
        }
    },
    [Z_CHANGESHOPSYNCCARCLASS](item){
        return (dispatch)=>{
            fetch("/api/shopClass").then((res)=>{
                return res.json()
            }).then((data)=>{
                console.log(data)
                dispatch(this[Z_CHANGESHOPCARCLASS](data))
            })
        }
    }
}