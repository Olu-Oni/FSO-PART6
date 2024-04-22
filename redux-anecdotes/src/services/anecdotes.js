import axios  from "axios"

const baseUrl = "http://localhost:3002/anecdotes/"

export const getAll = async ()=>{
    const result = await axios.get(baseUrl)

    return result.data
}

export const createNew = async (content)=>{
    const object = { content, votes: 0 }
    const result = await axios.post(baseUrl, object)
    return result.data
}

export const changeVote = async (obj)=>{
    const newObj = {...obj, votes: obj.votes+ 1}//changing the vote of the target obj
    const result = await axios.put(`${baseUrl}${obj.id}`, newObj)//replacing the changed object into the array copy
    return result.data
}
 