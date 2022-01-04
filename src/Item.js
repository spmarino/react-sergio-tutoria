import React from 'react'

import './item.css'

function Item({product}) {
    const {title, price, stock, image} = product
    return (
        <div className= "itemBox">
            <h4>{title}</h4>
            <img src={image} alt={title}/>
            <p>Precio ${price}</p>
            <button>Ver detalle del producto</button>
            <h4>Stock disponible {stock}</h4>
         </div>
    )
}

export default Item


// const {title, price, category , image} = product
// return (
//     <div className= "itemBox">
//         <h4>{title}</h4>
//         <img src={image} alt={title}/>
//         <p>Precio ${price}</p>
//         <button>Ver detalle del producto</button>
//         <h4>{category}</h4>
//      </div>
// )