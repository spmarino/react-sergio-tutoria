import React from 'react'
import './item.css'
import{Link} from 'react-router-dom'

function Item({product}) {
    const {title, price, stock, image, id} = product
    return (
        <div className= "itemBox">
            <h4>{title}</h4>
            <img src={image} alt={title}/>
            <p>Precio ${price}</p>
            <Link to={`/product/${id}`}><button >Ver detalle del producto</button></Link> 
           {/*<h4>Stock disponible {stock}</h4>*/}
         </div>
    )
}

export default Item

