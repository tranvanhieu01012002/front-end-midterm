import React from 'react'

export default function Product(props) {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
    <figure className="effect-ming tm-video-item">
        <img src={`http://localhost:8000/img/${props.item.image}`} alt="Image" className="img-fluid" />
        <figcaption className="d-flex align-items-center justify-content-center">
        <h2>{props.item.name}</h2>
        <a href="photo-detail.html">View more</a>
        </figcaption>                    
    </figure>
    <div className="d-flex justify-content-between tm-text-gray">
        <span >description: {props.item.description}</span>
        <span className="tm-text-gray-light">Old price: {props.item.old_price}</span>
        <span>new price: {props.item.new_price}</span>
    </div>
    </div>
  )
}
