import React from 'react'
import Counter from './Counter'
import './item.css'

function Item({product}) {
    const {title, price, image, stock, initial} = product
    return (
        <div className= "itemBox2">
            <p>{title}</p>
            <img src={image} alt={title}/>
            <p>Precio ${price}</p>
            <Counter stock ={stock}  initial={initial}/>
            <h4>{stock} Unidades Disponibles</h4>
        </div>
    )
}

export default Item
