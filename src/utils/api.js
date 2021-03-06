// 发送电话号码验证码的接口
const SEND_CODE_API = '/api/user/login/send_phone_code';

// 根据电话号码和验证码登录的接口
const LOGIN_BY_CODE_API = '/api/user/login/login_by_code';

// 检查登录是否过期
const CHECK_LOGIN_API = '/api/user/check_login';

// 城市数据
const SEARCH_CITY_URL = "/api/search/city";
const SEARCH_DETAIL_URL = "/api/search/detail";
const SEARCH_MORE_DETAIL_URL = "/api/search/detail/more";

//请求首页前十五条的数据
const SET_LIST = '/api/list'
const SET_LISTMORE_API = '/listmore'

export default {
    SEND_CODE_API,
    LOGIN_BY_CODE_API,
    CHECK_LOGIN_API,
    SEARCH_CITY_URL,
    SEARCH_DETAIL_URL,
    SEARCH_MORE_DETAIL_URL,
    SET_LIST,
    SET_LISTMORE_API
}