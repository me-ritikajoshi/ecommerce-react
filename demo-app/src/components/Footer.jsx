import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <>
    <div className="container-fluid">
  <footer className="py-5">
    <div className="row">
      <div className="col-6 col-md-2 mb-3">
        <h5>Shop</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Home</Link></li>
          <li className="nav-item mb-2"><Link to="/products" className="nav-link p-0 text-body-secondary">Products</Link></li>
          <li className="nav-item mb-2"><Link to="/gallery" className="nav-link p-0 text-body-secondary">Gallery</Link></li>
          <li className="nav-item mb-2"><Link to="/cart" className="nav-link p-0 text-body-secondary">Cart</Link></li>
          <li className="nav-item mb-2"><Link to="/register" className="nav-link p-0 text-body-secondary">Create account</Link></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5>Account</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to="/login" className="nav-link p-0 text-body-secondary">Login</Link></li>
          <li className="nav-item mb-2"><button type="button" className="btn btn-link nav-link p-0 text-body-secondary text-start">Orders</button></li>
          <li className="nav-item mb-2"><button type="button" className="btn btn-link nav-link p-0 text-body-secondary text-start">Wishlist</button></li>
          <li className="nav-item mb-2"><button type="button" className="btn btn-link nav-link p-0 text-body-secondary text-start">Help center</button></li>
          <li className="nav-item mb-2"><button type="button" className="btn btn-link nav-link p-0 text-body-secondary text-start">Return policy</button></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5>Company</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><button type="button" className="btn btn-link nav-link p-0 text-body-secondary text-start">About us</button></li>
          <li className="nav-item mb-2"><button type="button" className="btn btn-link nav-link p-0 text-body-secondary text-start">Careers</button></li>
          <li className="nav-item mb-2"><button type="button" className="btn btn-link nav-link p-0 text-body-secondary text-start">Blog</button></li>
          <li className="nav-item mb-2"><button type="button" className="btn btn-link nav-link p-0 text-body-secondary text-start">Press</button></li>
          <li className="nav-item mb-2"><button type="button" className="btn btn-link nav-link p-0 text-body-secondary text-start">Contact</button></li>
        </ul>
      </div>

      <div className="col-md-5 offset-md-1 mb-3">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
            <button className="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>&copy; {year} Demo Store. All rights reserved.</p>
      <ul className="list-unstyled d-flex gap-3 mb-0">
        <li><button type="button" className="btn btn-link p-0 text-body-secondary">Privacy</button></li>
        <li><button type="button" className="btn btn-link p-0 text-body-secondary">Terms</button></li>
        <li><button type="button" className="btn btn-link p-0 text-body-secondary">Cookies</button></li>
      </ul>
    </div>
  </footer>
</div>
    </>
  )
}

export default Footer
