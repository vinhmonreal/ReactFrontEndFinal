
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../contexts/UserProvider"
import { Spinner } from "react-bootstrap"
import GetDrinksDetailsByID from "../components/GetDrinksDetailsByID"
import Body from "../components/Body"
import { useParams } from "react-router-dom"
const base_api_url = import.meta.env.VITE_APP_BASE_API

export default function HTMLUserDrinks() {
  const { user } = useContext(AuthContext)
  const [IDs, setIDs] = useState<string[]>([])
  const [headding, setHeadding] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(true)
  const {username} = useParams()
  
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
        IDs.length > 0 ? setHeadding(`${user.username} has ${IDs.length} fav in list`) : setHeadding(`${user.username} has no Fav Drinks yet!`)
        setLoading(false)
        }
    })()
    IDs.length > 0 ? setHeadding(`${user.username} has ${IDs.length} fav in list`) : setHeadding(`${user.username} has no Fav Drinks yet!`)
  }, [user.token, IDs.length, user.username])

  return (
    <Body sidebar={true} header={false}  footer={false}>
      {loading ? <Spinner animation="grow" /> :  <GetDrinksDetailsByID IDs={IDs} heading={headding} route="UserPage"/>}
    </Body> 
  )
}






