import React from 'react'
import Item from './Item'
import "./item.css";


function ItemList({products}) {
    return (
        <div className="itemContainer">
        {products.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    )
}

export default ItemList
