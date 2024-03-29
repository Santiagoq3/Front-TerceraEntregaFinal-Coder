
 const path = "http://localhost:8080";

 export const pathHeroku = "https://tercera-back-entregacoderhouse.herokuapp.com"
export const createCartApi = (userID)=>{

    const url = `${pathHeroku}/cart/createcart/${userID}`;


    const params = {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        }
    }

    return fetch(url,params)
    .then((res)=> res.json())
    .then((data)=> data)
    .catch((err)=> err)

}