import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import { ColorRing } from 'react-loader-spinner'
import { getProducts } from '../services/productService'


const Product = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let isMounted = true

    const fetchProduct = async () => {
      try {
        const data = await getProducts()
        if (isMounted) {
          setProducts(data)
        }
      }
      catch (error) {
        if (isMounted) {
          setError(error.message || 'Failed to fetch products.')
        }
      }
      finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    fetchProduct()

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <>
      {loading ? (
        <div className='d-flex justify-content-center align-items-center' style={{ height: '50vh' }}>
          <div className="col-md-3">
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
          </div>
        </div>
      ) : error ? (
        <div className="container my-5">
          <p className="alert alert-danger mb-0">{error}</p>
        </div>
      ) : (
        <div className="container-fluid">
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {products && products.map(item => (

              <Card key={item.id} data={item} />

            ))}
          </div>
        </div>
      )}

    </>
  )
}

export default Product
