import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

//引入导航栏：
import TabBar from './components/tabbar/TabBar';
//引入加载页
import Loading from './container/common/loading/Loading';
//引入错误页：
import NotFind from './container/common/notFind/NotFind';


//引入跟页面：
const Job = lazy(() => import('./container/job/Job'));
const Search = lazy(() => import('./container/search/Search'));
const Mine = lazy(() => import('./container/mine/Mine'));
//引入子页面
const Detail = lazy(()=>import('./container/job/children/detail/Detail')); 


//引入子页面：
//我的子页面：
const Login = lazy(() => import('./container/common/login/Login'));
const MineLogin = lazy(() => import('./container/mine/child/MineLogin'))

const AppPanel = (props) => {
  return (
    <Router>
      <div className='appPanel'>
        {/* 根页面 */}
        <Switch>
          <Route path="/" exact render={() => {
            return <Redirect to="/job" />
          }} />
          <Route path='/job' component={Job} />
          <Route path='/search' component={Search} />
          <Route path='/mine' component={Mine} />
          <Route path='**' component={NotFind} />
        </Switch>

        <Route path='/mine/login' component={Login} />
        <Route path='/mine/login/Login/minelogin' component={MineLogin} />


        {/* 子页面 */}
          <Route path="/job/detail/:positionid" component={Detail} />

        <TabBar />
      </div>
    </Router>
  )
}

const App = (props) => {

  return (
    <Suspense fallback={<Loading />}>
      {props.isLogin ? <AppPanel /> : <Login />}
    </Suspense>
  );

}

const mapStateToProps = (state) => ({
  isLogin: state.user.isLogin
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
