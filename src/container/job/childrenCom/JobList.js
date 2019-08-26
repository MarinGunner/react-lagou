import React from 'react';

class JobList extends React.Component{
   jobList  = React.createRef();
    render(){
        let {data,toDetail} = this.props
        
        return (
            
            <li className="job-list border-bottom" onClick={()=>{toDetail(data.positionId)}}
                ref={this.jobList}>
                <div className="job-logo">

                    <img src={`https://www.lgstatic.com/${data.companyLogo}`} alt=""/>
                </div>
                <div className="job-detail">
                    <p className="company-name">{data.companyName}</p>
                    <p className="position"><span className="position-name">{data.positionName}[{data.city}]</span><span className="salary">{data.salary}</span></p>
                    <p className="create-time">{data.createTime}</p>
                </div>
                
            </li>
        )
    }

    
}


export default JobList;