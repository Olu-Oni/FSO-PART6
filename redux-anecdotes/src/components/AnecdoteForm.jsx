import { useDispatch } from "react-redux"
import { addAnecdote } from '../reducers/anecdoteReducer'
import { annecNotification } from "../reducers/notificationReducer";

const AnecdoteForm = () => {
    
    const dispatch = useDispatch()
    
    const add = (e) => {
        e.preventDefault()
        const content = e.target.note.value
        e.target.note.value = ''
        dispatch(addAnecdote(content))
        dispatch(annecNotification(content))
        console.log(content)
      }

    return (
    <>
      <h2>create new</h2>
      <form onSubmit={add}>
        <div><input name='note' /></div>
        <button>create</button>
      </form>
    </>
  );
};

export default AnecdoteForm;