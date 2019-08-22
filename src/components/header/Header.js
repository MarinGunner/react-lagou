import React from 'react'
import './style.scss'

export default (props)=>{
    const { title} = props;
    return (
        <header className="app-header border-bottom">
            <h1 className="title">{title}</h1>
        </header>
    )
}