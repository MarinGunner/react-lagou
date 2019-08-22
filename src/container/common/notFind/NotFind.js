import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

const NotFind = (props) => {
    return (
        <div className='page subpage' id='notfind'>
            <Link to='/job'>
                <h2>返回</h2>
            </Link>
            <div className='content'>
                <h3>404!</h3>
                <p>对不起，访问页面不存在...</p>
            </div>
        </div>
    )
}

export default NotFind;