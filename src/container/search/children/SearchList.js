import React from 'react';

const SearchList = (props) =>{
    let {list,loadmore}=props;

    let listDOM = (list.length>0) && list.map(item=>{
        // 处理图片路径
        let newItem = item.companyLogo.split('');
        newItem.unshift("https://www.lgstatic.com/");
        return(
            <li key={item.companyId} className="search-item border-bottom">
                <div className="companyLogo">
                    <img src={newItem.join('')} alt=""/>
                </div>
                <div className ="info-wrap">
                    <div className ="info">
                        <p className="companyName ellipsis">{item.companyName}</p>
                        <p className="positionName ellipsis">{item.positionName}[{item.city}]</p>
                        <p className="createTime">{item.createTime}</p>
                    </div>
                    <div className="salary">{item.salary}</div>
                </div>   
            </li>
        )
    });
    return (
        <ul className="search-list">
            {listDOM}
            {
                (list.length>0) && <li className="loadmore" onClick={loadmore}>加载更多</li>
            }
        </ul>
    )
}


export default SearchList;