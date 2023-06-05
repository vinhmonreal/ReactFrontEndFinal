import { useContext, useEffect, useRef } from "react"
import { AuthContext } from "../contexts/UserProvider"
import { useNavigate } from "react-router-dom"
import Body from "../components/Body"


export default function Register() {
  const usernameField = useRef<HTMLInputElement>(null)
  const emailField = useRef<HTMLInputElement>(null)
  const passwordField = useRef<HTMLInputElement>(null)
  const { user, setUser } = useContext(AuthContext)
  const navigate = useNavigate()

  const base_api_url = import.meta.env.VITE_APP_BASE_API

  useEffect(()=>{
    if(user.token) {
      localStorage.setItem('token',JSON.stringify(user.token))
      localStorage.setItem('username',JSON.stringify(user.username))
      }
    if(user.token || localStorage.getItem('token')) navigate('/')
  },[user])
  
  async function handleRegisterForm(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    const res = await fetch(`${base_api_url}/auth/register`,{
      method : "POST",
      headers : {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify({
        username: usernameField.current?.value,
        email: emailField.current?.value,
        password: passwordField.current?.value
      })
    })
    if(res.ok){
      const data = await res.json()
      console.log(data)
      localStorage.setItem('token',JSON.stringify(data.token))
      localStorage.setItem('username',JSON.stringify(usernameField.current?.value))
      console.log(data)
      setUser({
        loggedIn:true, 
        username:usernameField.current?.value || '',
        token:data.token
      })
      navigate('/')
    }
  }

  return (
    <Body makepost={false} sidebar={ false }>
      <h2>Register Page</h2>
      <form onSubmit={handleRegisterForm}>
        <label>Username:<br/>
          <input type="text" ref={usernameField}/>
        </label><br/><br/>
        <label>Email:<br/>
          <input type="email" ref={emailField}/>
        </label><br/><br/>
        <label>Password:<br/>
          <input type="password" ref={passwordField}/>
        </label><br/><br/>
        <button>Register</button>
      </form>
    </Body>
  )
}