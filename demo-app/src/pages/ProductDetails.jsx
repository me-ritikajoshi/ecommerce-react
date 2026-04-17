import React ,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { Helmet } from 'react-helmet';
import { getProductById } from '../services/productService';
import { getCartItems, saveCartItems } from '../utils/cartStorage';

const ProductDetails = () => {
    const [product,setProduct]=useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const params=useParams()
    const id=params.productId

    useEffect(()=>{
        let isMounted = true

        const fetchProduct = async () => {
          try {
            const data = await getProductById(id)
            if (isMounted) {
              setProduct(data)
            }
          } catch (err) {
            if (isMounted) {
              setError(err.message || 'Unable to load product details.')
            }
          } finally {
            if (isMounted) {
              setLoading(false)
            }
          }
        }

        fetchProduct()

        return () => {
          isMounted = false
        }

    },[id])

    //handling add to cart button
    const addToCart=()=>{
      if (!product.id) {
        return
      }

      //fetch items from the cart
      const cartItems=getCartItems()
      const productData={
        id:product.id,
        title:product.title,
        price:product.price,
        image:product.image,
        category:product.category,
        rating:product.rating,
        quantity:1

      }

      //check if item exists in localstorage
      const existingItem=cartItems.find(item=>item.id===product.id)
      if(existingItem){
        toast.error('Product is already in the cart')
      }else{
        cartItems.push(productData)
        saveCartItems(cartItems)
        toast.success(`${productData.title} is added to cart`)
      }
    }

  return (
    <>
    <Helmet>
      <title>{product.title || 'Product Details'}</title>
    </Helmet>
    <ToastContainer theme='colored' position='top-center'/>
    <div className="container my-5">
        {loading ? <p>Loading product details...</p> : null}
        {error ? <p className="alert alert-danger">{error}</p> : null}
        {!loading && !error ? (
        <div className="d-flex justify-content-center align-items-center">
             <div className="col-md-4">
                <img src={product.image} alt={product.title}  width={300}/>
             </div>
             <div className="col-md-6">
                <h5>{product.title}</h5>
                <h5>${product.price}</h5>
                <p>{product.description}</p>
                <p><small>Category:{product.category}</small></p>
                <p>{product.rating && product.rating.rate}</p>
                <div className="my-3">
                    <button className='btn btn-warning'onClick={addToCart}>Add to Cart</button>
                </div>


             </div>
        </div>
        ) : null}
    </div>
    </>
  )
}

export default ProductDetails
