import { createSlice } from "@reduxjs/toolkit"

const shortenString = (value, length) =>{
    if(value.length > length){   
        value = value.slice(0,length)
        const array = value.split('')
        value = value.slice(0,array.lastIndexOf(' ')) + '...'
    }
    return value
}
const notificationSlice = createSlice({
    name:"notification",
    initialState:"Welcome",
    reducers:{
        voteNotification(state, action){
           return `you voted '${shortenString(action.payload, 30)}'`
        },
        annecNotification(state, action){
            return `you created '${shortenString(action.payload, 30)}'`
        },
        rmNotification(state){
            state = ''
            return state
        }
    }
})


export default notificationSlice.reducer
export const {voteNotification, annecNotification, rmNotification} = notificationSlice.actions