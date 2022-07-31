import React from 'react'
import style from './Message.module.css'

type messageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message (props: messageDataType) {
    return (
        <div className={style.container}>
            <div className ={style.leftSide}>
                <img className={style.avatar} src = {props.avatar}  alt="icons"/>
            </div>

            <div className = {style.angle}/>

            <div className={style.rightSide}>
                <div className={style.naming}>{props.name}</div>
                <div className={style.message}>{props.message}</div>
                <div className={style.timing}> {props.time} </div>
            </div>
        </div>
    )
}

export default Message
