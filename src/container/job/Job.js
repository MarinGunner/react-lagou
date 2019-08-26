import React from 'react'
import './style.scss'
import {connect} from 'react-redux'
//引入头部公共组件：
import Header from '../../components/header/Header'
//引入滚动组件
import AppScroll from '../../components/scroll/AppScroll'
import {requestList,requestListmore} from '../../store/modules/job'
import JobList from './childrenCom/JobList'


class Job extends React.Component {
    state={select:0,count:2}
    scroll = React.createRef();
    render(){
        let {list,listmore,isLogin} = this.props;
        return(
            
            <div className='page subpage' id='job'>
                    <Header title='拉勾网'/>
                    <AppScroll className="job-wrap" ref={this.scroll}>
                        <div className="custom-info">
                            <span>10秒钟定制职位</span>
                            {isLogin ? <span>编辑</span> :<span>去登录</span>}
                        </div>
                        <ul className="job-content">
                        {
                            list.length>0 && list.map((item,index)=>(
                                <JobList toDetail={this.toDetailPage}  key={index} data={item}/>
                            ))
                        }
                        {
                            listmore.length>0 && listmore.map((item,i)=>(
                                <JobList toDetail={this.toDetailPage} key={i} data={item}/>
                            ))
                        }
                        </ul>
                        <div className="getMore" onClick={this.props.requestListmoreData.bind(this,this.state.count)}>
                            加载更多
                        </div>

                        <div className="copyright">
                            <p>©2015 lagou.com, all right reserved</p>
                            <div className="copyright-item">
                                <span className={this.state.select===0 ? "active" :""} onClick={()=>{this.setState({select:0})}}>移动版</span>
                                <span className={this.state.select===1 ? "active" :""} onClick={()=>{this.setState({select:1})}}>电脑版</span>
                                <span onClick={this.scrollToTop}>回顶部</span>
                            </div>
                        </div>
                </AppScroll>
            </div>
        )
    }
    componentDidMount(){
        this.props.requestListData();
    }

    scrollToTop=()=>{
        this.scroll.current.scrollTo(0);
    }

    toDetailPage=(positionid)=>{
        this.props.history.push(`/job/detail/${positionid}`)
    }

}
const mapStateToProps = (state)=>({
    list:state.job.list,
    listmore:state.job.listmore,
    isLogin:state.user.isLogin
})

const mapDispatchToProps =(dispatch)=>({
    requestListData(){ 
        let action = requestList();
        dispatch(action);
    },
    requestListmoreData(count){
        let action = requestListmore(count);
        dispatch(action);
        this.setState({
            count:count+1
        })
    }
})


export default connect(mapStateToProps,mapDispatchToProps)(Job);