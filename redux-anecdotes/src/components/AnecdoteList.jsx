import { useSelector, useDispatch } from "react-redux"
import { addVote } from '../reducers/anecdoteReducer'
import { voteNotification } from "../reducers/notificationReducer";

const AnecdoteList = () => {
    const anecdotes = useSelector(({anecdotes, filter}) => {
      if (filter === ""){
        return anecdotes
      }
      return anecdotes.filter(anecdote => (anecdote.content.toLowerCase()).includes(filter.toLowerCase()))
    })
    
    const dispatch = useDispatch()

    const emptyMessage = <strong>Nothing to see here...</strong>

    const handleClick = (value) =>{
      dispatch(addVote(value))
      dispatch(voteNotification(value.content))
    }

    return (
    <div>
      {anecdotes.length === 0
        ? emptyMessage
        : (anecdotes.map((anecdote) => 
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleClick(anecdote)}>vote</button>
            <br />
            <br />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdoteList;
