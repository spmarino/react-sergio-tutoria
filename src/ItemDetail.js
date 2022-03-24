import {React, useState, useEffect} from 'react'
import Counter from './Counter'
import './item.css'
import {UseCartContext} from './CartContext'

function Item({item}) {
const {title, price, image, stock, initial} = item
const {AddItem, CartList} = UseCartContext();

const [stock2, setStock2] = useState(stock)

useEffect (() =>{
    const index = CartList.findIndex((i) => i.item.id === item.id)
    if (index > -1 ){
        const oldStock = CartList[index].cantidad;
        setStock2(oldStock>stock?0:stock-oldStock)
    }else{
        setStock2(stock)
    }

 
})

const onAdd = (cantidad) => {
AddItem(item, cantidad)
}


    return (
        <div className= "itemBox2">
            <h4>{title}</h4>
            <img src={image} alt={title}/>
            <p>Precio ${price}</p>
            <Counter stock={stock2}  initial={initial} onAdd={onAdd}/>
            <h4>{stock2} Unidades Disponibles</h4>
            
        </div>
    )
}

export default Item
