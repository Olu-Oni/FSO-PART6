import reducer from "./anecdoteReducer";
import deepFreeze from "deep-freeze";

describe("anecdoteReducer", () => {
  test("Adds a vote to anecdote", () => {
    const state = [
      {
        content: "ok",
        id: 5,
        votes: 0
      }
    ];

    const action = {
      type: "ADD_VOTE",
      payload: { id: 5 }
    };
    deepFreeze(state)
    const newState = reducer(state, action);
    expect(newState[0].votes).toEqual(1);
  });

  
});
