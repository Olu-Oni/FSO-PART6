import { useSelector, useDispatch } from "react-redux";
import { newVote } from "../reducers/anecdoteReducer";
import { newNotification } from "../reducers/notificationReducer";

const AnecdoteList = () => {
  let anecdotes = useSelector(({ anecdotes, filter }) => {
    if (filter === "") {
      return anecdotes;
    }
    return anecdotes.filter((anecdote) =>
      anecdote.content.toLowerCase().includes(filter.toLowerCase())
    );
  });

  const dispatch = useDispatch();

  const emptyMessage = <strong>Nothing to see here...</strong>;

  const handleClick = (anecdote) => {
    dispatch(newVote(anecdote));
    dispatch(newNotification(`you voted for '${anecdote.content}'`, 5, 45));
  };

  return (
    <div>
      {anecdotes.length === 0
        ? emptyMessage
        : anecdotes.map((anecdote) => (
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
