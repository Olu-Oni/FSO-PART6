import { useDispatch } from "react-redux"
import { addAnec} from '../reducers/anecdoteReducer'
import { newNotification } from "../reducers/notificationReducer";

const AnecdoteForm = () => {
    
    const dispatch = useDispatch()
    
    const add = async(e) => {
        e.preventDefault()
        const content = e.target.note.value
        e.target.note.value = ''
        dispatch(addAnec(content))
        dispatch(newNotification(`you created '${content}'`,5,40))
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