import React, { useState, useEffect } from 'react'
import Card from './Card'
import { getProducts } from '../services/productService'

const CardContainer = () => {
  const [products, setProducts] = useState([])
  const [limit, setLimit] = useState(8)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let isMounted = true

    const fetchProducts = async () => {
      try {
        const data = await getProducts()
        if (isMounted) {
          setProducts(data)
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Failed to fetch product highlights.')
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    fetchProducts()

    return () => {
      isMounted = false
    }
  }, [])

  const loadMore = () => {
    setLimit(currentLimit => Math.min(currentLimit + 4, products.length))
  }

  const showLess = () => {
    setLimit(currentLimit => Math.max(4, currentLimit - 4))
  }

  return (
    <>
      <div className="container-fluid">
        {error ? <p className="alert alert-danger">{error}</p> : null}
        {loading ? <p className="my-3">Loading featured products...</p> : null}
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {!loading &&
            products &&
            products.slice(0, limit).map(item => (
              <Card key={item.id} data={item} />
            ))}
        </div>
        {!loading && products.length > 0 ? (
          <div className="d-flex justify-content-center gap-2 my-3">
            <button className='btn btn-primary' onClick={loadMore} disabled={limit >= products.length}>
              Load More
            </button>
            <button className='btn btn-outline-primary' onClick={showLess} disabled={limit <= 4}>
              Show Less
            </button>
          </div>
        ) : null}

      </div>
    </>
  )
}

export default CardContainer
