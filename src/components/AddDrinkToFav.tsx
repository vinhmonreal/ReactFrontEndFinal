import { useContext, useRef } from "react"
import { AuthContext } from "../contexts/UserProvider"
import { useNavigate } from "react-router-dom"

const base_api_url = import.meta.env.VITE_APP_BASE_API

export default function AddDrink() {

  const { user } = useContext(AuthContext)
  const idDrinkpostField = useRef<HTMLInputElement>(null)
  // const strDrinkpostField = useRef<HTMLInputElement>(null)
  // const strDrinkThumbpostField = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  async function handlePostForm(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    const res = await fetch(`${base_api_url}/user/addfavdrinks`,{
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json',
      },
      body:JSON.stringify({
        token: user.token,
        idDrink: idDrinkpostField.current?.value,
        strDrink: "dummy",
        strDrinkThumb: "dymmy"
      })
    })
    if(res.ok){
      const data = await res.json()
      console.log(data)
      navigate(`/user/${user.username}`)
    }
  }

  return (
    <form onSubmit={handlePostForm}>
        <label>Add you you Fav<br/>
          <input type="text" ref={idDrinkpostField} placeholder="idDrink "/> <br/> 
          {/* <input type="text" ref={strDrinkpostField} placeholder="name drink "/> <br/>
          <input type="text" ref={strDrinkThumbpostField} placeholder="strDrinkThumb url "/> <br/> */}
        </label>
        <button>Add</button>
      </form>
    
  )
}