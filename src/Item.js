import React from 'react'

import './item.css'

function Item({product}) {
    const {title, price} = product
    return (
        <div class= "itemBox">
            <p>{title}</p>
            <p>Precio ${price}</p>
         </div>
    )
}

export default Item
