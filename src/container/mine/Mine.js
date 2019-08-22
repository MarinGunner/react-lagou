import React from 'react'
import './style.scss'

//引入头部公共组件：
import Header from '../../components/header/Header'
const Mine = (props)=>{
    return(
        <div className='page subpage' id='mine'>
            <Header title='拉勾网'/>
            <h1>我的</h1>
        </div>
    )
}

export default  Mine;