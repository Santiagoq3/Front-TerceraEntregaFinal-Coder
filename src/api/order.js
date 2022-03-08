

export const path = "http://localhost:8080";



export const createOrderApi = (user,products)=>{


    const url = `${path}/order/create-order/${user._id}`


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

    const url = `${path}/order/get-order/${id}`;


    
    return fetch(url)
    .then((res)=> res.json())
    .then((data)=> data)
    .catch((err)=> err)
}