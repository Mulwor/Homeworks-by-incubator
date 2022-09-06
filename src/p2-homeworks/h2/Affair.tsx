import React from 'react'
import {AffairType} from "./HW2";
import style from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    // export type AffairType = { _id: number; name: string; priority: AffairPriorityType }

    deleteAffairCallback: (id: number) => void // need to fix any
    // const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix

    const priorityClass = style.item + ' ' + style [props.affair.priority]

    return (
        <div className={style.affair}>
            <div className={style.item}>
                {props.affair.name}
            </div>

            <div className={priorityClass}>
                [{props.affair.priority}]
            </div>

      {/*      <button onClick={deleteCallback}
                    className = {style.item + " " + style.button}
            >X</button>*/}

            <SuperButton onClick={deleteCallback}> Delete </SuperButton>

        </div>
    )
}

export default Affair
