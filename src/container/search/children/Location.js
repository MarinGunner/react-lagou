import React from 'react';

const Location = (props) =>{
    let {cityList,nameStr} = props;
    let {selectCity,selectedCity} = props.select
    return( 
        <div className="location">
            <h3 className="city-header border-bottom">{nameStr}</h3>
            <ul className = "city-list border-bottom">
            {
                cityList.map((item,index)=>(
                    <li className = {`city-item ${selectedCity===item?"selected":''}`}
                    key={index} onClick={()=>selectCity(item)}>{item}</li>
                ))
            }
            </ul>
        </div>
    )
}

export default Location;