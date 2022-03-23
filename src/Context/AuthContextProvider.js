import React, { useEffect, useState } from 'react'
import { logOutApi } from '../api/auth'
import { getAccessToken } from '../helpers/getToken'
import jwtDecode from "jwt-decode"

export const AuthContext = React.createContext()

export const AuthContextProvider = ({children}) => {

  const accessToken = getAccessToken();
  const [refresh, setRefresh] = useState(false)
  const [user, setUser] = useState({
    user: null,
  })

  useEffect(()=>{

    checkUserLogin(setUser)
    
  },[refresh])
  return (
    <AuthContext.Provider value={{user,setRefresh}}>
      {children}
    </AuthContext.Provider>
  )
}

const checkUserLogin = (setuser)=>{
  const accessToken = getAccessToken();
  if(!accessToken){

    
          logOutApi();
          setuser({
              user:null,
          })
     
  }else{
      setuser({
          user: jwtDecode(accessToken),
      })
  }
}