import { configureStore } from '@reduxjs/toolkit'
import anecdoteReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import notificationReducer from './reducers/notificationReducer'

const store = configureStore({
    reducer:{
    filter: filterReducer,
    anecdotes: anecdoteReducer,
    notifications: notificationReducer
  }
})


export default store