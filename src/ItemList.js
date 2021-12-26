import React, {useEffect, useState} from 'react'
import Item from './Item'
import './item.css'

function ItemList({productList}) {

const [products, setProducts] = useState([])
const [loading, setLoading] = useState(true)

useEffect(() => {
const promise = new Promise ((resolve, reject) => {
    
    if(productList.length === 0){
        reject("No hay datos para mostrar")
    }
    
    setTimeout(() =>{
        resolve(productList)
    },2000)
})

promise.then ((productList) => {
    setLoading(false)
    setProducts(productList)
}).catch((err) => console.log(err))
}, [])


    return (
        <div class="itemContainer">
            {loading ? (<div> ...Loading</div>): (products.map((product) => <Item key={product.id} product={product}/>))}
        </div>
    )
}

export default ItemList
