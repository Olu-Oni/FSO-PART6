import { createSlice } from "@reduxjs/toolkit"

export const shortenString = (value, length) =>{
    if(value.length > length){   
        value = value.slice(0,length)
        const array = value.split('')
        value = value.slice(0,array.lastIndexOf(' ')) + "...'"
    }
    return value
}

const notificationSlice = createSlice({
    name:"notification",
    initialState:"",
    reducers:{
        setNotification(state, action){
            return action.payload
         },
        rmNotification(state){
            state = ''
            return state
        }
    }
})

let timerID
export const newNotification = (content, time,amount) =>{
    return async (dispatch) =>{
        
        const timer = () => {
             timerID = setTimeout(()=>dispatch(rmNotification()), time*1000)
        }
        
        clearTimeout(timerID); // Clear the previous timeout if it exists
        
        dispatch(setNotification(`${shortenString(content, amount)}`))
        timer()
    }
}

export default notificationSlice.reducer
export const {setNotification,voteNotification, anecNotification, rmNotification} = notificationSlice.actions