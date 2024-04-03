const filterReducer = (state = '', action) =>{
   if (action.type ==='FILTER') {
    return action.payload
    }
    return state
}

export const filter = (value) =>{
    return {
        type: 'FILTER', 
        payload: value}
}
export default filterReducer