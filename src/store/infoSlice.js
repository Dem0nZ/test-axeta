import { createSlice } from '@reduxjs/toolkit'

export const infoSlice = createSlice( {
    name: 'info',
    initialState: {
        name: 'Your Name',
        location: 'Your location',
        skills: [
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
            state.skills = state.skills.filter( skill=> skill.id !== action.payload.id)
        },
        sortSkills: (state, action) => {
            state.skills = state.skills?.sort((a, b) => a.usageTime > b.usageTime ? -1 : 1)
        }
    }
} )


export const { editName, editLocation, addSkill, editUsageTime, removeSkill, sortSkills } = infoSlice.actions

export default infoSlice.reducer