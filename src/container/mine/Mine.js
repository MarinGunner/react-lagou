import React from 'react';
import './style.scss';
import { NavLink } from 'react-router-dom';

//引入头部公共组件：
import Header from '../../components/header/Header'
//引入登录页面：


const Mine = (props) => {
    return (
        <div className='page subpage' id='mine'>
            <Header title='拉勾网' />
            <div className="content">
                <div className="login">
                    <h2 className="zhuce">
                        <NavLink to="/mine/login/Login">登录/注册</NavLink>
                    </h2>
                </div>
                <div className="foot">
                    <ul className="items">
                        <li>
                            <NavLink to="/mine/login/Login">简历</NavLink>
                        </li>
                        <li>
                            <NavLink to="/mine/login/Login">面试</NavLink>
                        </li>
                        <li>
                            <NavLink to="/mine/login/Login">邀约</NavLink>
                        </li>
                        <li>
                            <NavLink to="/mine/login/Login">收藏</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Mine;
