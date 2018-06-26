import {
    createStore,
    applyMiddleware,
    combineReducers 
} from "redux"
import thunkMiddleware from 'redux-thunk'

import reducerTm from "./tm/reducer"
import reducerZfb from "./zfb/reducer"


export {default as actionsTm} from "./tm/actions.jsx"
export {default as actionsZfb} from "./zfb/actions.jsx"
export * from "./tm/types.jsx"
export * from "./zfb/types.jsx"

export default createStore(combineReducers({
    tm:reducerTm,
    zfb:reducerZfb
}),applyMiddleware(thunkMiddleware))

 