import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteFilter from './components/AnecdoteFilter'
import Notification from './components/Notification'

import { useEffect} from 'react'
import {useDispatch } from 'react-redux'
import { initializeAnec } from './reducers/anecdoteReducer'
import { newNotification, setNotification } from './reducers/notificationReducer'

const App = () => {
  const dispatch = useDispatch()
  useEffect( () => 
    {dispatch(initializeAnec())
      dispatch(newNotification("Welcome",5))}
  ,[])


  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification/>
      <AnecdoteFilter/>
      <AnecdoteList/>
      <AnecdoteForm/>
    </div>
  )
}

export default App