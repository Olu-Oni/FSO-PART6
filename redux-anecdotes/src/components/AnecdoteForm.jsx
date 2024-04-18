import { useDispatch } from "react-redux"
import { addAnecdote } from '../reducers/anecdoteReducer'
import { annecNotification } from "../reducers/notificationReducer";
import { createNew } from "../services/anecdotes";

const AnecdoteForm = () => {
    
    const dispatch = useDispatch()
    
    const add = async(e) => {
        e.preventDefault()
        const content = e.target.note.value
        e.target.note.value = ''
        const anDote = await createNew(content)
        dispatch(addAnecdote(anDote))
        dispatch(annecNotification(anDote.content))
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