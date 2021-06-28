import { configureStore } from '@reduxjs/toolkit'
import infoReducer from './infoSlice'
import thunk from 'redux-thunk';

export default configureStore({
    reducer: {
        info: infoReducer
    },
    devTools: true,
    middleware: [thunk]
})