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
    <main>
      <div>
        <h1>This is home page</h1>
        <div className="flex w-10/12 m-auto">
          <div className="w-3/6 flex flex-col justify-center">
            <h1 className="text-5xl font-bold">Everything for your car</h1>
            <p className="text-lg pt-8 font-medium">Begin your car journey with Park+ and say goodbye to all your car-related worries - one service at a time</p>
          </div>
          <div className=" w-3/6">
            <img className="h-48 w-full object-cover md:h-full md:w-full" src="./image_4_a7c45621d6.png" alt="..." />
          </div>
        </div>
      </div>


      <div className="bg-[#f6f7fb] py-24">
        <div className="flex w-10/12 m-auto">
          <div className="w-3/6 flex flex-col justify-center">
            <h1 className="text-3xl font-bold">2 years. Multitude of solutions. <br />
              Countless Happy car owners</h1>

          </div>
          <div className="w-3/6 grid grid-cols-2 gap-4">
            <div>
              <h3>6 Million+</h3>
              <p>Cars listed on PARK+</p>
            </div>
            <div>
              <h3>6 Million+</h3>
              <p>Cars listed on PARK+</p>
            </div>
            <div>
              <h3>6 Million+</h3>
              <p>Cars listed on PARK+</p>
            </div>
            <div>
              <h3>6 Million+</h3>
              <p>Cars listed on PARK+</p>
            </div>
            <div></div>
          </div>
        </div>
      </div>

      <div className="w-10/12 m-auto py-16">
        <h1 className="text-4xl font-bold text-center">More reasons than one to love Park+</h1>
        <div className="grid grid-cols-4 gap-4">
          <div className="flex flex-col justify-center items-center">
            <img className="h-24 w-24 my-12" src="./Group_33680_d728cbaf93.webp" alt="..." />
            <p className="text-center">One fastag for all your needs - Parking, Tolls, Malls, Fuel payment</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img className="h-24 w-24 my-12" src="./Group_3_6c7e04abbc.webp" alt="..." />
            <p className="text-center">Save time, fuel and effort with smart parking</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img className="h-24 w-24 my-12" src="./Group_7_59de4a0585.webp" alt="..." />
            <p className="text-center">Reminders to never miss out on your insurance and PUCC renewal</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img className="h-24 w-24 my-12" src="./Group_9_3dfabe529a.webp" alt="..." />
            <p className="text-center">Easy to find information regarding RTO services, traffic rules etc</p>
          </div>
        </div>
      </div>
    </main >
  )
}

export default Home
