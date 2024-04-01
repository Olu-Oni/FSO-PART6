import React from 'react'
import ReactDOM from 'react-dom/client'

import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  const feedBack = (option) => {
    store.dispatch({
      type: option
    })
   
  }

  return (
    <div>
      <button onClick={() => feedBack('GOOD')}>good</button> 
      <button onClick={
        () => feedBack('OK')}>ok</button> 
      <button onClick={() => feedBack('BAD')}>bad</button>
      <button onClick={() => feedBack('ZERO')}>reset stats</button>
      <div>good {store.getState().good}</div>
      <div>ok {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

const renderApp = () => {
  root.render(<App />)
}

renderApp()
store.subscribe(renderApp)