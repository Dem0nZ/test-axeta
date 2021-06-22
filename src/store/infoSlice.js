import { createSlice } from '@reduxjs/toolkit'

export const infoSlice = createSlice({
    name: 'info',
    initialState: {
        name: 'John Smitty',
        location: 'Portland, Oregon, USA',
        skills: [
            {
                skill: 'JS',
                usageTime: ''
            },
            {
                skill: 'HTML',
                usageTime: ''
            },
            {
                skill: 'PHP',
                usageTime: ''
            },
        ]
    },

    reducers: {
        editName: (state, action) => {
            state.name += action.payload
        }
    },
})

export const { editName } = infoSlice.actions

export default infoSlice.reducer