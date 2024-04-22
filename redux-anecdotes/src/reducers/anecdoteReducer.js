import { createSlice , current} from "@reduxjs/toolkit";
import { changeVote, createNew, getAll } from "../services/anecdotes";
import { anecNotification, rmNotification, setNotification, shortenString, voteNotification } from "./notificationReducer";

const anecdoteSlice = createSlice({
  name:"anecdotes",
  initialState: [],
  reducers:{
    addAnecdote(state, action){
      return state.concat(action.payload)
    },
    addVote(state,action){
      const anecdote = action.payload;
      const newAnecdotes = state.map((a) =>//replacing the changed object into the array copy
        a.id === anecdote.id ? anecdote : a
      );
      return newAnecdotes.sort((a,b)=> b.votes-a.votes);//arranging the array acording the the number of votes
    }
  }
})

export const { setAnecdote, addAnecdote, addVote} = anecdoteSlice.actions

export const initializeAnec = () =>{
  return async (dispatch) =>{
    const response = await getAll()
      dispatch(addAnecdote(response))
  }
}

export const addAnec = (content) =>{
  return async (dispatch) =>{
    const response = await createNew(content)
      dispatch(addAnecdote(response))
  }
}

export const newVote = (content) =>{
  return async (dispatch) =>{
    const response = await changeVote(content)
      dispatch(addVote(response))  
  }
}

export default anecdoteSlice.reducer;
