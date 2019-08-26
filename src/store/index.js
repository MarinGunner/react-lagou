
import { createStore, combineReducers, compose,applyMiddleware } from 'redux';
import thunk from "redux-thunk";

//引入reducer模块
import user from './modules/user';
import search from './modules/search';
import job from './modules/job'
import collect from './modules/collect'

//合并reducer
const reducer = combineReducers({
    user,
    search, 
//引入reducer模块

//合并reducer
    job,
    collect

});

// 使用redux开发者工具
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
))
