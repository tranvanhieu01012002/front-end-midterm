import React from 'react'
import Product from './Product'

export default function Content(props) {

  return (
    <div className="row tm-mb-90 tm-gallery">
       {props.data.map(item=><Product item={item}/>)}
    </div>
  )
}
