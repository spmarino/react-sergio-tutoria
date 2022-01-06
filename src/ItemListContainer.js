import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import "./item.css";
import {useParams} from 'react-router-dom'



function ItemListContainer({productList}) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const {id} = useParams()


  useEffect(() => {

    const promise = new Promise((res, rej) => {
      setTimeout(() => {
        res(productList);
      }, 2000);
    });

    promise
      .then((res) => {
        setProducts(!id ? res : (res.filter((product) =>{ return product.category === id})));
        setLoading(true);
      })
      .catch((err) => console.log(err));

      return() =>{
        setLoading(false);
      }

  }, [id]);

  if (!loading) {

    return <h2> ...Loading</h2>;

  } else {
    return (
      <div className="itemContainer">
        <ItemList products={products} />
      </div>
    );
  }
}

export default ItemListContainer;
