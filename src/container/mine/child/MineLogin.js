import React from 'react';
import { connect } from 'react-redux';
import { toggleLocation } from '../../../store/modules/search';
import './style.scss'

//引入头部公共组件：
import Header from '../../../components/header/Header'
const MineLogin = (props) => {
    let { isShow, backToSearch } = props;
    return (
        <div className='page subpage' id='mine'>
            <Header title='拉勾网' left={
                isShow && <span onClick={backToSearch}>back</span>
            } />
            <div className="content">
                <div className="login">
                    <img src="/images/pic.jpg" alt="" />
                    <span className="resume">
                        简历>
                    </span>
                </div>
                <div className="foot">
                    <ul className="items">
                        <li>投递</li>
                        <li>面试</li>
                        <li>邀约</li>
                        <li>收藏</li>
                    </ul>
                </div>
                <div>
                    <p>退出登录</p>
                </div>
            </div>
        </div>
    )

}
const mapStateToProps = (state) => ({
})
const mapDispatchToProps = (dispatch) => ({
    backToSearch() {
        dispatch(toggleLocation(false));
    },
})
export default connect(mapStateToProps, mapDispatchToProps)(MineLogin);
