
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../contexts/UserProvider"
import { Spinner } from "react-bootstrap"
import GetDrinksDetailsByID from "./GetDrinksDetailsByID"
import Body from "../components/Body"
import { useParams } from "react-router-dom"



const base_api_url = import.meta.env.VITE_APP_BASE_API
export default function HTMLUserDrinks() {
  const { user } = useContext(AuthContext)
  const [IDs, setIDs] = useState<string[]>([])
  const [headding, setHeadding] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(true)
  const {username} = useParams()

  if(user.username !== username){
    return (
      <Body sidebar={false} header={false}>
        <h1>Not Authorized</h1>
      </Body>
    )
  }
  useEffect(() => {
    (async () => {
      const res = await fetch( `${base_api_url}/user/favdrinks`,{
        method : "POST",
        headers : {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
          token: user.token
        })
      })
      if(res.ok){
        const data = await res.json()
        console.log(data)
        setIDs(data.map((drink:any) => drink.idDrink))
        setHeadding(`${user.username}'s Fav Drinks`)
        setLoading(false)
      }
    })()
  }, [user.token])



  return (
    <Body sidebar={true} header={true}>
      {loading ? <Spinner animation="grow" /> : <GetDrinksDetailsByID IDs={IDs} heading={headding} route="UserPage"/>}
    </Body> 
  )
}






 




// import { useContext, useEffect, useState } from "react"
// import { AuthContext } from "../contexts/UserProvider"
// import { Spinner } from "react-bootstrap"
// import { Mock_Data } from "../components/MOCK_DATA"
// import { DisplayDrinksOnPage } from "./AlcoholicPage1"
// import { detailsDrink } from "../components/DisPlayDrinksOnPage"
// import { Mock_Data_Nonalcoholic } from "../components/MOCK_DATA_NON_ALCOHOLIC"




// const base_api_url = import.meta.env.VITE_APP_BASE_API
// export default function HTMLUserDrinks() {
//   const [loading, setLoading] = useState<boolean>(true)
//   const [arrayOfDrinks, setArrayOfDrinks] = useState<detailsDrink[]>([])
//   const [headding, setHeadding] = useState<string>("")
//   const { user } = useContext(AuthContext)
//   const [IDs, setIDs] = useState<string[]>([])
//   const token = user.token
  
//   useEffect(() => {
//     if (token) {
//       fetch(`${base_api_url}/user/favdrinks`, {
//         method : "POST",
//         headers : {
//           'Content-Type' : 'application/json',
//         },
//         body: JSON.stringify({
//           token: user.token
//         })
//       })
//       .then(res => res.json())
//       .then(data => {
//         setIDs(data.map((drink:any) => drink.idDrink))
//         setLoading(false)
//         const temp = Mock_Data.filter(drink => IDs.includes(drink.idDrink))
//         const temp2 = Mock_Data_Nonalcoholic.filter(drink => IDs.includes(drink.idDrink))
//         setArrayOfDrinks([...temp, ...temp2])
//       })
//     }
//   }, [token, IDs])


//   useEffect(() => {
//     if (arrayOfDrinks.length === 0 && loading === false) {
//       setHeadding("You have no drinks in your list")
//     } else if (!token) {
//       setHeadding("You need to be logged in to see your drinks")
//     }else {
//       setHeadding(`You have ${arrayOfDrinks.length} drinks in your list`)
//     }

//   }, [arrayOfDrinks])



//   return (
//     <div>
//       <h1>{headding}</h1>
//       {loading ? (
//         <Spinner animation="border" />
//       ) : (
//         <>
//           <DisplayDrinksOnPage arrayOfDrinks={arrayOfDrinks} route="UserPage" token={token}/>
//         </>
//       )}
//     </div>
//   )
// }


