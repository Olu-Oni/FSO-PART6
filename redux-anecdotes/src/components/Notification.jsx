import { useSelector } from "react-redux/es/hooks/useSelector"
import { useDispatch } from "react-redux"
import { rmNotification } from "../reducers/notificationReducer"
const Notification = () => {
  
  const dispatch = useDispatch()
  const notification = useSelector(state=>state.notifications)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    color:'black'
  }
  
  if(notification != ''){
    setTimeout(()=>dispatch(rmNotification()), 5000)
    return (
      <div style={style}>
        {notification}
      </div>
    )
  }
  return null
}

export default Notification