import React, { useState, useEffect, useMemo } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';
import { FaTrash } from "react-icons/fa";
import { getCartItems, saveCartItems } from '../utils/cartStorage';


const Cart = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        setItems(getCartItems())
    }, [])

    const increaseQty=id=>{
        const updateItems=items.map(item=>{
            if(item.id===id){
                return {...item,quantity:item.quantity+1}
            }
            return item
        })
        setItems(updateItems)
        saveCartItems(updateItems)
    }

    const decreaseQty=id=>{
        const updateItems=items.map(item=>{
            if(item.id===id && item.quantity>1){
                return {...item,quantity:item.quantity-1}
            }
            return item
        })
        setItems(updateItems)
        saveCartItems(updateItems)
    }
    const removeCartHandler=(id,name)=>{
        const confirm=window.confirm('Are you sure you want to delete the item?')
        if(confirm){
            const filterCart=items.filter(item=>item.id!==id)
            saveCartItems(filterCart)
            setItems(filterCart)
            toast.success(`${name} is removed from the cart`)

        }
    }

    const totalUnits = useMemo(
      () => items.reduce((ac, item) => ac + item.quantity, 0),
      [items]
    )

    const totalCost = useMemo(
      () => items.reduce((ac, item) => ac + item.quantity * item.price, 0),
      [items]
    )


    return (
        <>
            <Helmet>
                <title>Cart</title>
            </Helmet>
            <ToastContainer theme='colored' position='top-center' />
            <div className="container">
                <div className="row d-flex justify-content-between my-4">
                    {items.length === 0 ?
                        <h2 className='text-danger text-center my-5'>Your cart is empty.</h2>
                        : (
                            <>
                                <h2 className='text-center'>Your Cart Items</h2>
                                <div className="col-md-8 shadow">
                                    {items.map(item => (
                                        <div key={item.id}>
                                            <hr />
                                            <div className="row d-flex align-items-center">
                                                <div className="col-2">
                                                    <img src={item.image} alt={item.title} width={'50'} />
                                                </div>
                                                <div className="col-3">
                                                    <strong>{item.title}</strong>
                                                </div>
                                                <div className="col-2 text-warning">
                                                    ${item.price}
                                                </div>
                                                <div className="col-3">
                                                    <div className="d-flex">
                                                        <button className='btn btn-danger'onClick={()=>decreaseQty(item.id)}>-</button>
                                                        &nbsp;
                                                        <input type='number' value={item.quantity} readOnly className='form-control border-0 text-center' />
                                                        &nbsp;
                                                        <button className='btn btn-primary'onClick={()=>increaseQty(item.id)}>+</button>
                                                    </div>
                                                </div>
                                                <div className="col-1">
                                                    <button className='btn btn-danger'onClick={()=>removeCartHandler(item.id,item.title)}><FaTrash/></button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="col-md-3">
                                    <div className="shadow p-2">
                                        <h5>Cart Summary</h5>
                                        <hr />
                                        <p><strong>Units:</strong> {totalUnits}</p>
                                        <p><strong>Total:</strong> ${totalCost.toFixed(2)}</p>
                                        <hr />
                                        <button className='btn btn-warning'>Checkout</button>
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>

        </>
    )
}

export default Cart
