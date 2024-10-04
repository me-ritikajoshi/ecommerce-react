import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import { ColorRing } from 'react-loader-spinner'


const Product = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products`)
        setProducts(response.data)
        setLoading(false)
      }
      catch (error) {
        console.error(error.message)
      }
    }
    setTimeout(() => {
      fetchProduct()
    }, 3000)
  }, [])

  return (
    <>
      {loading ? (
        <div className='d-flex justify-content-center align-items-center' style={{ height: '50vh' }}>
          <dic className="col-md-3">
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
          </dic>
        </div>
      ) : (
        <div className="container-fluid">
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {products && products.map(item => (

              <Card data={item} />

            ))}
          </div>
        </div>
      )}

    </>
  )
}

export default Product