import React, { useEffect, useState } from 'react'
import { logOutApi } from '../api/auth'
import { getAccessToken } from '../helpers/getToken'
import jwtDecode from "jwt-decode"

export const AuthContext = React.createContext()

export const AuthContextProvider = ({children}) => {


  const [user, setUser] = useState({
    user: null,
    isLoading: true
  })

  useEffect(()=>{

    checkUserLogin(setUser)
  },[])
  return (
    <AuthContext.Provider value={user}>
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
              isLoading: false
          })
     
  }else{
      setuser({
          user: jwtDecode(accessToken),
          isLoading: false
      })
  }
}