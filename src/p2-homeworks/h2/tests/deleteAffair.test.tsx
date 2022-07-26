import React from 'react'
import {AffairType, deleteAffair} from '../HW2'

let initialState: AffairType[]

beforeEach(() => {
    initialState = [
        {_id: 1, name: 'HTML', priority: 'high'},
        {_id: 2, name: 'CSS', priority: 'low'},
        {_id: 3, name: 'JavaScript', priority: 'low'},
        {_id: 4, name: 'React', priority: 'high'},
        {_id: 5, name: 'Webpack', priority: 'middle'},
        {_id: 6, name: 'Vue', priority: 'low'},
    ]
})

test('delete 0', () => {
    const newState = deleteAffair(initialState, 0)
    expect(newState.length).toBe(6)
})
test('delete 1', () => {
    const newState = deleteAffair(initialState, 1)
    expect(newState.length).toBe(5)
})
test('delete 3', () => {
    const newState = deleteAffair(initialState, 3)
    expect(newState.length).toBe(5)
})
test('delete 6', () => {
    const newState = deleteAffair(initialState, 6)
    expect(newState.length).toBe(5)
})
test('delete 7', () => {
    const newState = deleteAffair(initialState, 7)
    expect(newState.length).toBe(6)
})
