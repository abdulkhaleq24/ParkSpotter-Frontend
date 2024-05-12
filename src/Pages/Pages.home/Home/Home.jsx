import { useDispatch, useSelector } from "react-redux"
import { selectCurrentUser } from "../../../store/user/user.selector"
import { useEffect } from "react"
import { setCurrentUser } from "../../../store/user/user.reducer"

import AchivementSection from "./Sections/AchivementSection/AchivementSection.component"
import ClientSection from "./Sections/ClientsSection/ClientSection.component"
import MentionsSection from "./Sections/MentionsSection/MentionsSection.component"

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
    <>
      <AchivementSection />

      <ClientSection />

      <MentionsSection />
    </>
  )
}

export default Home
