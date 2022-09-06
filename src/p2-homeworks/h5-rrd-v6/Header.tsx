import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import style from './Header.module.css'

function Header() {
    return (
        <div className={style.container}>
            <NavLink to={PATH.PRE_JUNIOR}
                     className = {(isActive) => isActive ? style.link : style.active}
            > Pre-junior </NavLink>

            <NavLink to={PATH.JUNIOR}
                     className = {(isActive) => isActive ? style.link : style.active}
            > Junior </NavLink>

            <NavLink to={PATH.JUNIOR_PLUS}
                     className = {(isActive) => isActive ? style.link : style.active}
            > JuniorPlus </NavLink>

            <div className={style.block}/>

        </div>
    )
}

export default Header
