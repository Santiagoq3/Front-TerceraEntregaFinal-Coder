

export const path = "http://localhost:8080";
export const pathHeroku = "https://tercera-back-entregacoderhouse.herokuapp.com"


export const createOrderApi = (user,products)=>{


    const url = `${pathHeroku}/order/create-order/${user._id}`


    const params = {
        method :"POST",
        body: JSON.stringify({products}),
        headers:{
            "Content-type": "application/json"
        }
    }

    return fetch(url,params)
    .then((res)=> res.json())
    .then((data)=> data)
    .catch((err)=> err)
}


export const getOrderApi = (id)=>{

    const url = `${pathHeroku}/order/get-order/${id}`;


    
    return fetch(url)
    .then((res)=> res.json())
    .then((data)=> data)
    .catch((err)=> err)
}