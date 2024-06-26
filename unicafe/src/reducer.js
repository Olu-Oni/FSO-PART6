const initialState = {
    good: 0,
    ok: 0,
    bad: 0
  }
  
  const counterReducer = (state = initialState, action) => { 
    console.log(action)
    const copy = {...state}
    switch (action.type) {
      case 'GOOD':
        copy.good++
        return copy
      case 'OK':
        copy.ok++
        return copy
      case 'BAD':
        copy.bad++
        return copy
      case 'ZERO':
        return initialState
      default: return state
    }
    
  }
  
  export default counterReducer