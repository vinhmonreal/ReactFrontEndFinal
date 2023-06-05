import { useContext, useEffect, useRef } from 'react'
import Body from '../components/Body';
import { AuthContext } from '../contexts/UserProvider';
import { useNavigate } from 'react-router-dom';

const base_api_url = import.meta.env.VITE_APP_BASE_API

export default function LoginPage() {
  const usernameField = useRef<HTMLInputElement>(null)
  const passwordField = useRef<HTMLInputElement>(null)
  const { user, setUser } = useContext(AuthContext)
  const navigate = useNavigate()
  
  useEffect(()=>{
    if(user.token) {
      localStorage.setItem('token',user.token)
      localStorage.setItem('username',user.username)
      }
    if(user.token || localStorage.getItem('token')) navigate('/UserPage')
  },[user])
  
  async function handleLoginForm(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    const res = await fetch(`${base_api_url}/verifyuser`,{
      method : "POST",
      headers : {
        'Content-Type' : 'application/json',
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      },
      body: JSON.stringify({
        username: usernameField.current?.value,
        password: passwordField.current?.value
      })
    })
    if(res.ok){
      const data = await res.json()
      localStorage.setItem('token',JSON.stringify(data.token))
      localStorage.setItem('username',JSON.stringify(usernameField.current?.value))
       setUser({
        token: data.token,
        username: usernameField.current?.value || '',
        loggedIn: true,
      })
    }
  }
  
  return (
    <Body makepost={false} sidebar={ false }>
      <h2>LoginPage</h2>
      <form onSubmit={handleLoginForm}>
        <label>Username:<br/>
          <input type="text" ref={usernameField}/>
        </label><br/><br/>
        <label>Password:<br/>
          <input type="password" ref={passwordField}/>
        </label><br/><br/>
        <button>Sign In</button>
      </form>
    </Body>
  );
}