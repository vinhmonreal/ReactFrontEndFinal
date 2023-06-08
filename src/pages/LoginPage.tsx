
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
    } else if(res.status === 404){
      alert('Incorrect username or password')
    }
  }
  useEffect(()=>{
    const a = document.getElementsByClassName('hstack')[0] as HTMLElement
    a.style.display = 'none'
  },[])
  
  return (
    <Body sidebar={false} header={true} footer={false} >
      <form onSubmit={handleLoginForm} className='form'>
        <label><h3>Sign In</h3></label>
        <label>Username:<br/>
          <input className="form-input" type="text" ref={usernameField}/>
        </label><br/><br/>
        <label>Password:<br/>
          <input className="form-input" type="password" ref={passwordField}/>
        </label><br/><br/>
        <button >Sign In</button> <br/><br/>
      <label >Need an account? </label><a href="/register">Register</a>
      </form> 
    </Body>
  );
}