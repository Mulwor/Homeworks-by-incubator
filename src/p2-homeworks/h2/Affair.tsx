import React from 'react'
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать

    affair: AffairType // need to fix any
    // export type AffairType = { _id: number; name: string; priority: AffairPriorityType }

    deleteAffairCallback: (id: number) => void // need to fix any
    // const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix

    return (
        <div>
            Тест №1
            Тест №2
            Тест №3
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
