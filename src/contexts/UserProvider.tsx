import { createContext, useState } from 'react'

interface UserContext{
  user: User,
  setUser: React.Dispatch<React.SetStateAction<User>>
}

interface User{
  token:string,
  username:string,
  loggedIn:boolean
}

export const AuthContext = createContext<UserContext>({} as UserContext)

export default function AuthProvider({ children }:{ children: JSX.Element | JSX.Element[]}){
  const [user, setUser] = useState<User>({token:'',username:'',loggedIn:false})
  

  const value = {
    user,
    setUser
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}