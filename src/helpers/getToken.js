
export const getAccessToken = ()=>{

    const accessToken = localStorage.getItem("token")


    if(!accessToken || accessToken === "null"){
        return null
    }
   
    return accessToken

}