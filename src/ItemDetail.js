import React from 'react'
import Counter from './Counter'
import './item.css'

function Item({product}) {
    const {title, price, stock, initial} = product
    return (
        <div class= "itemBox2">
            <p>{title}</p>
            <p>Precio ${price}</p>
            <Counter stock ={stock}  initial={initial}/>
        </div>
    )
}

export default Item
