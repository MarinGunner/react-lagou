import api from '../../utils/api';
import {get} from '../../utils/request';

// types
const TOGGLE_LOCATION = "search/toggle_location";
const SET_CITY = "search/set_city";
const SELECT_CITY = "search/select_city";
const SET_JOB_LIST = "search/set_job_list";
const TOGGLE_SEARCH = "search/toggle_search";
const CLEAR_JOB_LIST = "search/clear_job_list"

//state
let CityStr = localStorage.getItem("city")

const initialState = {
  isShow:false,
  cityList:[],
  selectedCity:CityStr?CityStr:"全国",
  jobList:[],
  searchShow:false
}

//reducer
export default (state = initialState,action)=>{
    switch (action.type){
        case TOGGLE_LOCATION:
            return{
                ...state,
                isShow:action.value
            }
        case SET_CITY:
            return{
                ...state,
                cityList:action.value
            }
        case SELECT_CITY:
            return{
                ...state,
                selectedCity:action.value
            }
        case SET_JOB_LIST:
            return{
                ...state,
                jobList:[...state.jobList,...action.value]
            }
        case TOGGLE_SEARCH:
            return{
                ...state,
                searchShow:action.value
            }
        case CLEAR_JOB_LIST:{
            return{
                ...state,
                jobList:action.value
            }
        }
        default:
            return state; 
    }
}

// 同步action
    //切换城市组件 
export const toggleLocation = (value)=>({
    type:TOGGLE_LOCATION,
    value
})
    //城市列表
const setCityData = (value)=>({
    type:SET_CITY,
    value
});

export const selectCityAciton = (value) =>({
    type:SELECT_CITY,
    value
})
    //搜索详情组件 
export const toggleSearchAciton = (value) =>({
    type:TOGGLE_SEARCH,
    value
})

    // 请求工作详情
const setJobListAcion = (value) =>({
    type:SET_JOB_LIST,
    value
})
    // 清空搜索列表
export const clearJobListAction = (value) =>({
    type:CLEAR_JOB_LIST,
    value
})

// 异步action
    // 请求城市列表
export const requestCityAction = () => async (dispatch)=>{
    let {data} = await get(api.SEARCH_CITY_URL);
    dispatch(setCityData(data))
}
    // 请求搜索详情
export const requestJobListAcion = (params)=> async (dispatch) =>{
    let {data} = await get(api.SEARCH_DETAIL_URL ,{city:params.city,positionName:params.positionName})
    // console.log(data);
    dispatch(setJobListAcion(data))
}