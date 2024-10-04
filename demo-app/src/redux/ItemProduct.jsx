import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { fetchProducts } from './actions/productAction'

const ItemProduct = () => {
  const dispatch=useDispatch()
  const data=useSelector(store=>store.productsData)
  const products=data.products

  useEffect(()=>{
    try{
      dispatch(fetchProducts())
    }
    catch(error){
      console.log('Error in fetching datas')
    }
  },[dispatch])

  return (
    <>
    {products && products.map((item,i)=>(
      <div key={i}>
        <h1>{item.title}</h1>
      </div>
    ))}
    </>
  )
}

export default ItemProduct