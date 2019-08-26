import {get,myGet,post} from '../../utils/request'
import api from '../../utils/api'

//types
const SET_LIST = 'job/set_list'
const SET_LISTMORE = 'job/set_listmore'





//state
const initialState = {
    list:[],
    listmore:[],
    
}


//reducer
export default (state=initialState,action)=>{
    switch(action.type){
        case SET_LIST:
            return {
                ...state,
                list:action.value
            };
        case SET_LISTMORE:
            return {
                ...state,
                listmore:[...state.listmore,...action.value]
            };
        
        default:
            return state;
    }
}




//同步actions
const setList = (value)=>({
    type:SET_LIST,
    value
})
const setListmore =(value)=>({
    type:SET_LISTMORE,
    value
})



//异步actions
//请求首页前十五条默认数据
export const requestList = ()=>async (dispatch)=>{
    //请求数据
    let data = await myGet(api.SET_LIST);
    dispatch(setList(data.data.result));
}

export const requestListmore = (count)=>async (dispatch)=>{
    //请求更多数据
    let data = await myGet(api.SET_LISTMORE_API,{pageNo:count,pageSize:15});
    
    let result = data.content.data.page.result;

    dispatch(setListmore(result));
}