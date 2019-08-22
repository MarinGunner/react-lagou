import React from 'react'
import './style.scss'

//引入头部公共组件：
import Header from '../../components/header/Header'
const Search = (props)=>{
    return(
        <div className='page subpage' id='search'>
            <Header title='拉勾网'/>
            <h1>搜索</h1>
        </div>
    )
}

export default  Search;