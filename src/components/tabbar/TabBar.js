import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.scss'


export default (props) => {
    const navList = [
        { id: 1, name: '职业', path: '/job',icon:'iconshouye'},
        { id: 2, name: '搜索', path: '/search',icon:'iconsearch'},
        { id: 3, name: '我的', path: '/mine',icon:'iconwode'}
    ];
    return (
        <nav className='tab-bar border-top'>
            <span className='iconfont .iconwode'></span>
            {
                navList.map(item => (
                    <NavLink className='tab-item' key={item.id} to={item.path}>
                        <span className={`iconfont ${item.icon}`}></span>
                        {item.name}
                    </NavLink>
                ))
            }
        </nav>
    )
}