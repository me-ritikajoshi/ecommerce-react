import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layouts from './pages/Layouts'
const HomePage = lazy(() => import('./pages/HomePage'))
const Product = lazy(() => import('./pages/Product'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Gallery = lazy(() => import('./pages/Gallery'))
const ProductDetails = lazy(() => import('./pages/ProductDetails'))
const Cart = lazy(() => import('./pages/Cart'))
const Register = lazy(() => import('./pages/Register'))
const Login = lazy(() => import('./pages/Login'))
const Show = lazy(() => import('./context/Show'))
const DataCounter = lazy(() => import('./hooks/DataCounter'))
const TestNav = lazy(() => import('./redux/TestNav'))
const MyRoute = () => {
  return (
    <Router>
      <Suspense fallback={<div className="container my-4">Loading page...</div>}>
        <Routes>
          <Route path='/' element={<Layouts />}>
            <Route index element={<HomePage />} />
            <Route path='products' element={<Product />} />
            <Route path='gallery' element={<Gallery />} />
            <Route path='productdetails/:productId' element={<ProductDetails />} />
            <Route path='cart' element={<Cart />} />
            <Route path='register' element={<Register />} />
            <Route path='login' element={<Login />} />
            <Route path='context/test' element={<Show/>}/>
            <Route path='hooks/reducer' element={<DataCounter/>}/>
            <Route path='redux/first' element={<TestNav/>}/>
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default MyRoute
