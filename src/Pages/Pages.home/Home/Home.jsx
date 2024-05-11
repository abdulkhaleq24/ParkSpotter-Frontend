import { useDispatch, useSelector } from "react-redux"
import { selectCurrentUser } from "../../../store/user/user.selector"
import { useEffect } from "react"
import { setCurrentUser } from "../../../store/user/user.reducer"

const Home = () => {
  /*testing reducers and selectors and state*/
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)
  console.log(currentUser)
  useEffect(() => {
    dispatch(setCurrentUser({ id: 1, name: "rahat khan" }))
  }, [dispatch])
  /*testing reducers and selectors and state*/

  return (
    <div>
      <h1>This is home page</h1>
    </div>
  )
}

export default Home
