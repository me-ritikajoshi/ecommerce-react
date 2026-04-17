import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
  const {title,image,price,id}=props.data
  const displayTitle = title?.length > 20 ? `${title.slice(0, 20)}...` : title

  return (
    <>
   
  <div className="col">
    <div className="card">
      <img src={image} className="card-img-top" alt={title}/>
      <div className="card-body">
        <h5 className="card-title">{displayTitle}</h5>
        <h5>${price}</h5>
        <Link to ={`/productdetails/${id}`} className='btn btn-success'>View Details</Link>
      </div>
    </div>
  </div>
  

    </>
  )
}

export default Card
