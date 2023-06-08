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
      const username = data.username
      const token = data.token
      console.log(data)
      localStorage.setItem('token',JSON.stringify(token))
      localStorage.setItem('username',JSON.stringify(username))
      setUser({
        loggedIn:true, 
        username: username,
        token:token
      })
      console.log(user)
      window.location.reload()
      navigate('/login')  
    } else if(res.status === 409){
      alert('Username or Email already exists')
    } else if (res.status === 408){
      alert('Username must be a string')
    }    
  }  
  // bootstrap elert
  // <div className="alert alert-danger" role="alert">

  return (
    <Body sidebar={false} header={false}  footer={false}>
      <form onSubmit={handleRegisterForm} className="form">
        <label><h3>Register</h3></label>
        <label>Username:<br/>
          <input className="form-input" type="text" ref={usernameField}/>
        </label><br/><br/>
        <label>Email:<br/>
          <input className="form-input" type="email" ref={emailField}/>
        </label><br/><br/>
        <label>Password:<br/>
          <input className="form-input" type="password" ref={passwordField}/>
        </label><br/><br/>
        <button>Register</button>
      </form>
    </Body>
  )
}