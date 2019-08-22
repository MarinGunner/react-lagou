import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.scss'


export default (props) => {
    const navList = [
        { id: 1, name: '职业', path: '/job', },
        { id: 2, name: '搜索', path: '/search' },
        { id: 3, name: '我的', path: '/mine' }
    ];
    return (
        <nav className='tab-bar border-top'>
            <span className='iconfont .iconwode'></span>
            {
                navList.map(item => (
                    <NavLink className='tab-item' key={item.id} to={item.path}>
                        {item.name}
                    </NavLink>
                ))
            }
        </nav>
    )
}