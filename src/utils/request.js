import 'whatwg-fetch';

export const get = async (url,params={})=>{
    try {
        let fullParams = '';
        Object.entries(params).forEach(([key,value],index)=>{
            if (index === 0){
                fullParams += '?';
                
            }else{
                fullParams += '&';
            }
            fullParams += `${key}=${encodeURIComponent(value)}`
        });
        let response = await fetch(`${url}${fullParams}`);
        let result = await response.json();
        if (result.code === 0){
            return result;
        }else {
            throw result;
        }
    } catch (error) {
        throw error;
    }
}
export const post = async (url, params = {})=>{
    try {
        // 发送请求
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        });
        // 接收到响应，处理数据
        let result = await response.json();
        if(result.code === 0){
            return result;
        }else{
            throw result;
        }
    } catch (error) {
        throw error;
    }
}

export const myGet = async (url,params={})=>{
    try {
        let fullParams = '';
        Object.entries(params).forEach(([key,value],index)=>{
            if (index === 0){
                fullParams += '?';
                
            }else{
                fullParams += '&';
            }
            fullParams += `${key}=${encodeURIComponent(value)}`
        });
        let response = await fetch(`${url}${fullParams}`);
        let result = await response.json();
        if(result.state===1){
            return result;
        }else{
            return result;
        }
            
       
    } catch (error) {
        throw error;
    }
}

export default {
    get,
    post
}