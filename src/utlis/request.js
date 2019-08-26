import 'whatwg-fetch'

export const get = async (url,params={})=>{
    try {
    //处理参数
    let paramStr = '';
    Object.entries(params).forEach(([key,value],index)=>{
        paramStr+=(index===0)?'?':'&';
        paramStr+=`${key}=${value}`
    });
    
        //发起请求
        let response = await fetch(url+paramStr);
        let result = await response.json();
        if(result.state===1){
            return result;
        }else{
            return result;
        }
     } catch (error) {
        console.log('请求错误',error)
     }

}



export const post =async (url,params={})=>{
    try {
        let response = await fetch(url,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(params)
        })
        //接收到响应处理数据
        let result  = await response.json();
        if(result.state===1){
            return result;
        }else{
            return result;
        }
    } catch (error) {
        
    }
}