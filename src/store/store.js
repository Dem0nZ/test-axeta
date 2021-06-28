import { configureStore } from '@reduxjs/toolkit'
import infoReducer from './infoSlice'


const persistedState = localStorage.getItem('axeta')
    ? JSON.parse(localStorage.getItem('axeta'))
    : {}

const store = configureStore({
    reducer: {
        info: infoReducer
    },
    preloadedState: persistedState,
    devTools: true
})

store.subscribe(()=>{
    localStorage.setItem('axeta', JSON.stringify(store.getState()))
})

export default store