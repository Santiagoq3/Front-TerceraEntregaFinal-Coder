

export const path = "http://localhost:8080";
export const pathHeroku = "https://tercera-back-entregacoderhouse.herokuapp.com"
export const getProdutsApi = ()=>{


    const url  = `${path}/product/products`;

    
    return fetch(url)
    .then((res)=> res.json())
    .then((data)=> data)
    .catch((err)=> err)


}