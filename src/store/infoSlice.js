import { createSlice } from '@reduxjs/toolkit'

export const infoSlice = createSlice( {
    name: 'info',
    initialState: {
        name: 'John Smitty',
        location: 'Portland, Oregon, USA',
        skills: [
            {
                id: '1111111',
                skill: 'JS',
                usageTime: '2'
            },
            {
                id: '333222',
                skill: 'HTML',
                usageTime: '2'
            },
            {
                id: '6432221',
                skill: 'PHP',
                usageTime: '1'
            }
        ]
    },

    reducers: {
        editName: ( state, action ) => {
            state.name = action.payload
        },
        editLocation: ( state, action ) => {
            state.location = action.payload
        },
        addSkill: ( state, action ) => {
            state.skills.push( { id: (new Date().getTime()).toString(36), skill: action.payload, usageTime: '1' } )
        },
        editUsageTime: (state, action) => {
            state.skills.map( skill => {
                if ( skill.id === action.payload.id ) {
                    skill.usageTime = action.payload.usageTime
                } else return skill
            })
        },
        removeSkill: (state, action) => {
            state.skills = state.skills.filter( skill=> skill.id != action.payload.id)
        }
    }
} )


export const { editName, editLocation, addSkill, editUsageTime, removeSkill } = infoSlice.actions

export default infoSlice.reducer