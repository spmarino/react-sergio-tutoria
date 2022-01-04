import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import "./item.css";

function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      const promise = fetch("https://fakestoreapi.com/products");
  
      promise
        .then((res) => res.json())
        .then((res) => {
          setProducts(res);
          setLoading(true);
        })
        .catch((err) => console.log(err));
    }, []);
  
    if (!loading) {
      return <div> ...Loading</div>;
    } else {
      return (
        <div class="itemContainer">
          <ItemList products={products} />
        </div>
      );
    }
  
  }
  
  export default ItemListContainer;
  

 