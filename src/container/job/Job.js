import React from 'react'
import './style.scss'

//引入头部公共组件：
import Header from '../../components/header/Header'

const Job = (props)=>{
    return(
        <div className='page subpage' id='job'>
            <Header title='拉勾网' right={
                <span className="iconfont iconshouye"></span>
            } left={
                <span>back</span>
            } />
            <h1>职业</h1>
        </div>
    )
}

export default Job;