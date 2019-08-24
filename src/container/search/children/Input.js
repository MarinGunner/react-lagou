import React,{useState} from 'react';

//引入头部公共组件：


const Input = (props)=>{
    // state
    let [message,setMessgae] = useState('');
    let {toggle,data,search} = props;
    const setInput = (e)=>{
        setMessgae(e.target.value);
    }
    return(
        <div className="linputer border-bottom">
            <div className="city border-right" onClick={toggle}>{data}</div>
            <div className="rinput">
                <input className="inputer" type="text" placeholder="搜索职位或公司" value={message} onChange={(e)=>setInput(e)}/>
                <span className="search iconfont iconsearch" onClick={()=>{message.includes("前端") && search(message)}}></span>
            </div>
        </div>
    )
    
}


export default Input;