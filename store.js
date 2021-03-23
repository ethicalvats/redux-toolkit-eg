import { createStore, combineReducers, applyMiddleware } from "redux";
import rootReducer from './reducer'
import { defaultMdl } from "./middlewares"

const reducer = combineReducers({
    root: rootReducer
})

export default createStore(reducer, applyMiddleware(defaultMdl))

// applyMiddleware(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),