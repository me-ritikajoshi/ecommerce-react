import React from 'react'
import { useSelector } from 'react-redux'
import TestItem from './reducers/TestItem'
import Student from './Student'
import Form from './Form'
import ItemProduct from './ItemProduct'
const TestNav = () => {
  const data = useSelector(store => store.cart)
  return (
    <>
      <h1>The number of item in the cart is {data.cartCount} . </h1>
      <TestItem />
      <Student />
      <Form />
      <ItemProduct/>
    </>
  )
}

export default TestNav