import React from 'react'
import ItemList from './ItemList'

const productList = [
  { id: 1, title: "Serie E", stock: 14, initial: 6, price: 42 },
  { id: 2, title: "GranTurismo", stock: 18, initial: 5, price: 8 },
  { id: 3, title: "Ram Van 1500", stock: 3, initial: 1, price: 63 },
  { id: 4, title: "Gran Marqués", stock: 3, initial: 1, price: 16 },
  { id: 5, title: "Sonata", stock: 2, initial: 1, price: 43 },
  { id: 6, title: "Clase S", stock: 20, initial: 2, price: 95 },
  { id: 7, title: "Equinoccio", stock: 19, initial: 5, price: 33 },
  { id: 8, title: "Espectros", stock: 8, initial: 5, price: 24 },
  { id: 9, title: "Serie E", stock: 15, initial: 1, price: 7 },
  { id: 10, title: "RX-7", stock: 16, initial: 5, price: 75 },
  { id: 11, title: "S80", stock: 20, initial: 6, price: 15 },
  { id: 12, title: "C30", stock: 9, initial: 3, price: 62 },
];


function ItemListContainer() {
    return (
        <div>
            <ItemList productList ={productList}/>
        </div>
    )
}

export default ItemListContainer
