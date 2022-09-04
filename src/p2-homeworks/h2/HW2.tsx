import React, {useState} from 'react'
import Affairs from './Affairs'
import style from "./Affairs.module.css"

export type AffairPriorityType = 'high' | 'middle' | 'low'
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: AffairType[] = [
    {_id: 1, name: 'HTML', priority: 'high'},
    {_id: 2, name: 'CSS', priority: 'high'},
    {_id: 3, name: 'JavaScript', priority: 'high'},
    {_id: 4, name: 'React', priority: 'middle'},
    {_id: 5, name: 'Webpack', priority: 'low'},
    {_id: 6, name: 'Vue', priority: 'low'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => { // need to fix any
    if (filter === 'all') {
        return affairs
    } else if (filter === 'high') {
        return affairs.filter(word => word.priority === 'high')
    } else if (filter === 'middle') {
        return affairs.filter(word => word.priority === 'middle')
    } else {
        return affairs.filter(word => word.priority === "low")
    }
}

export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => {
    return affairs.filter((segment) => segment._id !== _id )
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    return (
        <div>
            <hr/>
            <h3 className={style.title}> Homeworks №2 </h3>
            <Affairs
                data = {filteredAffairs}
                setFilter = {setFilter}
                deleteAffairCallback = {deleteAffairCallback}
                filter={filter}
            />
            <hr/>
        </div>
    )
}

export default HW2
