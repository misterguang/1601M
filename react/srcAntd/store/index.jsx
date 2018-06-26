import {
    createStore,
    applyMiddleware 
} from "redux"
import thunkMiddleware from 'redux-thunk'

import reducer from "./reducer"

export {default as actions} from "./actions.jsx"
export * from "./types.jsx"

export default createStore(reducer,applyMiddleware(thunkMiddleware))

 