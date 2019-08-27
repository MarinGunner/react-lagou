import React from 'react';
import AppScroll from '../../../../components/scroll/AppScroll'
import {connect} from 'react-redux'
import {setCollect} from '../../../../store/modules/collect'

import './style.scss'
class Detail extends React.Component {
    state={
        listData:[]
    }
    render() {
        let {collectJob} = this.props
        let {listData} = this.state
        let listDOM=listData.map(item=>(
                <div key={item.positionId}>
                    <div className="detail-wrap border-bottom">
                        <h2>{item.positionName}</h2>
                        <div className="collection" onClick={()=>{collectJob(item)}}>
                            <i></i>
                            <span>未收藏</span>
                        </div>
                    </div>
                    <div className="border-bottom detail-info">
                         <div className="info-item">
                             <i></i>
                             <span>{item.salary}</span>
                         </div>
                         <div className="info-item">
                             <i></i>
                             <span>{item.city}</span>
                         </div>
                         <div className="info-item">
                             <i></i>
                             <span>全职</span>
                         </div>
                         <div className="info-item">
                             <i></i>
                             <span>1-3年</span>
                         </div>
                         <div className="info-item">
                             <i></i>
                             <span>本科及以上</span>
                         </div>
                         <div className="goodness">职位诱惑：平台</div>
                    </div>
                    <div className="company-info border-bottom">
                    <div className="job-logo">
                        <img src={`https://www.lgstatic.com/${item.companyLogo}`} alt=""/>
                        </div>
                        <div className="job-detail">
                        <p className="company-name">{item.companyName}</p>
                        <p className="position"><span className="position-name">{item.positionName}[{item.city}]</span></p>
                        <p className="create-time">{item.createTime}</p>
                        </div>
                        <div className="job-image">
                            <span></span>
                        </div>
                    </div>
                    <h3 className="describle">
                        职位描述
                    </h3>
                    <div className="describle-word">
                        <p>岗位描述</p>
                        <p>描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</p>
                        <p>描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</p>
                        <p>描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</p>
                        <p>描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</p>
                        <p>描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</p>
                        <p>描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</p>
                        <p>描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</p>
                        <p>描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</p>
                        <p>描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</p>
                        <p>描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</p>
                        <p>描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</p>
                        <p>描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</p>
                    </div>
                    
                </div>
                
            ))
        
        return ( 
            <div className="page subpage" id="detail">
                <div className="detail-header">
                    <div className="btn left-btn" onClick={()=>{this.props.history.goBack()}}>back</div>
                    <div className="detail-title">职位详情</div>
                    <div className="btn right-btn" onClick={()=>{this.props.history.push('/job')}}>首页</div>
                </div>
                <AppScroll className="detail-scroll">
                    {listDOM}
                </AppScroll>
                <div className="detail-foot">
                    <span>简历投递</span>
                </div>
            </div>
        )
    }
    componentDidMount(){
        let pid = Number(this.props.match.params.positionid);
        let newList = this.props.list.filter(item=>(item.positionId===pid)).length>0 ? this.props.list.filter(item=>(item.positionId===pid))
        : this.props.listmore.filter(item=>(item.positionId===pid));
        console.log(newList)
        this.setState({
            listData:newList
        })
    }
}

const mapStateToProps = (state)=>({
     list:state.job.list,
     listmore:state.job.listmore
})

const mapDispatchToProps = (dispatch)=>({
    collectJob(info){
        console.log(info);
        dispatch(setCollect(info));
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Detail);