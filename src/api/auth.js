
export const path = "http://localhost:8080";

export const loginApi = (data)=>{

    const url = `${path}/auth/login`;


    const params = {
        method: "POST",
        body:JSON.stringify(data),
        headers:{
            "Content-Type": "application/json"
        }
    }

    return fetch(url,params)
    .then((res)=> res.json())
    .then((data)=> data)
    .catch((err)=> err)
}


export const registerApi = (data)=>{

    const url = `${path}/auth/register`;

    const params ={
        method: "POST",
        body:JSON.stringify(data),
        headers:{
            "Content-Type": "application/json"
        }
    }


    return fetch(url,params)
    .then((res)=> res.json())
    .then((data)=> data)
    .catch((err)=> err)

}


export const logOutApi = ()=>{
    localStorage.removeItem("token")
}