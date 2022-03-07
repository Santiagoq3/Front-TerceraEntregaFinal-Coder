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

    console.log(products)
    
  return (
    <div className='products'>

        
            {
                products.map(product=>{
                    return <Product product={product} />
                })
            }
        
        
    </div>
  )
}
