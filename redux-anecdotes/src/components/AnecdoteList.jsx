import { useSelector, useDispatch } from "react-redux"
import { addVote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(({anecdotes, filter}) => 
      anecdotes.filter(anecdote => (anecdote.content.toLowerCase()).includes(filter.toLowerCase())))
    const dispatch = useDispatch()

    const emptyMessage = <strong>Nothing to see here...</strong>

    
    return (
    <div>
      {anecdotes.length === 0
        ? emptyMessage
        : (anecdotes.map((anecdote) => 
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => dispatch(addVote(anecdote.id))}>vote</button>
            <br />
            <br />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdoteList;
