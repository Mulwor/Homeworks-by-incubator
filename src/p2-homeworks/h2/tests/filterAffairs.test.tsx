import React from 'react'
import {AffairType, filterAffairs} from '../HW2'

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

test('filter by all', () => {
    const newState = filterAffairs(initialState, 'all')
    expect(newState.length).toBe(6)
})
test('filter by high', () => {
    const newState = filterAffairs(initialState, 'high')
    expect(newState.length).toBe(2)
})
test('filter by middle', () => {
    const newState = filterAffairs(initialState, 'middle')
    expect(newState.length).toBe(1)
})
test('filter by low', () => {
    const newState = filterAffairs(initialState, 'low')
    expect(newState.length).toBe(3)
})
