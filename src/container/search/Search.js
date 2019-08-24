import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {requestCityAction,toggleLocation,selectCityAciton,requestJobListAcion,toggleSearchAciton,clearJobListAction} from '../../store/modules/search';
import Input from './children/Input';
import Location from './children/Location';
import SearchList from './children/SearchList';
import './style.scss';

//引入头部公共组件：
import Header from '../../components/header/Header';


const Search = (props)=>{
    
    let {isShow,city,goToLocation,backToSearch,requestCity,selectCity,selectedCity,requestJob,searchShow,jobList} = props;
    useEffect(
        // 挂载阶段
        () => {
            requestCity();
    },[requestCity])
    return(
        <div className='page' id='search'>
            <Header title='拉勾网' left={
                isShow && <span onClick={backToSearch}>back</span>
            }/>
            <div className="content">
            {
                isShow ? (
                    city.map((item,index)=>(
                        <Location key={index} {...item} select={{selectCity,selectedCity}}/>
                    ))
                ):
                <Input toggle={()=>goToLocation()} search={requestJob} data={selectedCity}/>
            }
            {
                searchShow && <SearchList list={jobList} loadmore={requestJob}/>
            }
            </div>
        </div>
    )
    
}
const mapStateToProps = (state)=>({
    isShow:state.search.isShow,
    city:state.search.cityList,
    selectedCity:state.search.selectedCity,
    jobList:state.search.jobList,
    searchShow:state.search.searchShow
});
const mapDispatchToProps = (dispatch)=>({
    // 请求城市列表
    requestCity(){
        let action = requestCityAction();
        dispatch(action);
    },
    goToLocation(){
        dispatch(toggleLocation(true));
    },
    backToSearch(){
        dispatch(toggleLocation(false));
    },
    // 选中城市
    selectCity(city){
        dispatch(selectCityAciton(city));
        localStorage.setItem("city",city)
        dispatch(toggleLocation(false));
        dispatch(clearJobListAction([]));
    },
    // 搜索详情
    requestJob(info){
        let CityStr = localStorage.getItem("city")
        let action = requestJobListAcion({city:CityStr,positionName:info})
        dispatch(action);
        dispatch(toggleSearchAciton(true));
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Search);