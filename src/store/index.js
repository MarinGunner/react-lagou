import { createStore, combineReducers, compose } from 'redux'

//引入reducer模块
import user from './modules/user'   

//合并reducer
const reducer = combineReducers({
    user,
});

//使用开发者工具：
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducer, composeEnhancers())