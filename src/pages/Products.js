import React, { useEffect, useState } from 'react'
import { getProdutsApi } from '../api/products'
import { Product } from '../Components/Product'
import "./products.scss"
export const Products = () => {

    const [products, setProducts] = useState([])

    useEffect(()=>{

        getProdutsApi()
        .then(({products})=>{
            setProducts(products)
        })
        .catch((err)=> console.log(err))
    },[])

    
  return (
    <div className='products'>

        
            {
                products.map((product, index)=>{
                    return <Product key={index} product={product} />
                })
            }
        
        
    </div>
  )
}
