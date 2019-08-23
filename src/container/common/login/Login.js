import React from 'react';
import { connect } from 'react-redux'
import Header from '../../../components/header/Header'
// import { Toast } from 'antd-mobile';
import './style.scss'
// import 'antd-mobile/lib/toast/style/css';  

class Login extends React.Component {

    loginWays = [
        { id: 'weixin', name: '微信', url: '/images/weixin.png' },
        { id: 'qq', name: 'QQ', url: '/images/qq.png' },
        { id: 'weibo', name: '微博', url: '/images/weibo.png' }
    ];

    state = {
        phone: '',
        code: ''
    }

    render() {
        // let { loginTip, sendCodeAction, loginByCodeAction } = this.props;
        // let disable = loginTip.endsWith('s');
        let { phone, code } = this.state;
        return (
            <div id="login" className="page subpage">
                <Header title='拉勾网' />
                <div className="content">
                    <img className="logo" src="/images/head.jpg" alt="logo" />

                    <div className="input-wrap phone-input">
                        <label>手机号：</label>
                        <input type="text" value={phone} onChange={this.phoneChangeAction} />
                        <span>发送验证码</span>
                    </div>
                    <div className="input-wrap code-input">
                        <label>验证码：</label>
                        <input type="text" value={code} onChange={this.codeChangeAction} />
                    </div>
                    {/* onClick={() => loginByCodeAction(phone, code)} */}
                    <div className="login-btn" >
                        登录
                    </div>

                    <div className="other-login-ways">
                        <p className="title">其他登录方式</p>
                        <ul className="login-ways">
                            {
                                this.loginWays.map(item => (
                                    <li className="login-item" key={item.id} onClick={() => this.handleLogin(item)}>
                                        <img src={item.url} alt="" />
                                        <span>{item.name}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                </div>
            </div>
        )
    };

    // componentDidMount(){
    //     // 检查登录是否过期
    //     this.props.checkLoginAction();

    //     // 检查是否是有第三方平台跳转返回的
    //     let path = window.location.href;
    //     if(path.includes('code=')){
    //         this.props.loginByWeiboAction(path);
    //     }

    // };

    phoneChangeAction = (ev) => {
        this.setState({ phone: ev.target.value });
    };
    codeChangeAction = (ev) => {
        this.setState({ code: ev.target.value });
    }

    // 第三方登录的点击事件
    // handleLogin({id}){
    //     if(id === "weibo"){
    //         window.location.href = 'https://api.weibo.com/oauth2/authorize?client_id=1189476203&response_type=code&redirect_uri=http://129.204.72.71:8000';

    //         // https://
    //         // api.weibo.com
    //         // /oauth2/authorize
    //         // ?client_id=
    //         // &response_type=code
    //         // &redirect_uri=
    //     }
    // }
}


const mapStateToProps = (state) => ({
    // loginTip: state.user.loginTip
})

const mapDispatchToProps = (dispatch) => ({
    // // 发送验证码
    // sendCodeAction(phone){
    //     // 得到验证码，验证数据格式，是不是电话号码
    //     if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(phone))){
    //         Toast.info('格式不正确!', 1.5);
    //     }
    //     else{
    //         // 正确就执行action事件请求code
    //         let action = requestSendCodeAction(phone);
    //         dispatch(action);
    //     }
    // },
    // // 登录，验证验证码
    // loginByCodeAction(phone, code){
    //     // 验证电话格式
    //     if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(phone))){
    //         Toast.info('格式不正确!', 1.5);
    //         return;
    //     }
    //     // 验证验证码格式
    //     if(!(/^\d{6}$/.test(code))){
    //         Toast.info('格式不正确!', 1.5);
    //         return;
    //     }
    //     // 发送请求给后台执行登录
    //     let action = requestLoginByCodeAction(phone, code);
    //     dispatch(action);
    // },
    // // 检查登录是否过期
    // checkLoginAction(){
    //     let action = requestCheckLoginAction();
    //     dispatch(action);
    // },
    // // 按微博方式登录
    // loginByWeiboAction(path){
    //     let action = requestLoginByWeibo(path);
    //     dispatch(action);
    // }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);



