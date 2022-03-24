import React from 'react'
import Counter from './Counter'
import './item.css'
import {UseCartContext} from './CartContext'

function Item({item}) {
    const {title, price, image, stock, initial} = item
  
const {AddItem} = UseCartContext();

const onAdd = (cantidad) => {
AddItem(item, cantidad)
}


    return (
        <div className= "itemBox2">
            <h4>{title}</h4>
            <img src={image} alt={title}/>
            <p>Precio ${price}</p>
            <Counter stock ={stock}  initial={initial} onAdd={onAdd}/>
            <h4>{stock} Unidades Disponibles</h4>
            
        </div>
    )
}

export default Item
