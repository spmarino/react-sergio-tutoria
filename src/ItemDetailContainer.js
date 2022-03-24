import { React, useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom"
import "./item.css"


function ItemDetailContainer({productList}) {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const {id} = useParams();


  useEffect(() => {

    const getItem = new Promise((res, rej) => {

      setTimeout(() => {
        res(productList);
      }, 2000);
    });

    getItem
      .then((res) => {
        setProduct(res.find(product => product.id === +id))
        setLoading(true);
      })
      .catch((err) => console.log(err));

      return() =>{
        setLoading(false);
      }
  }, [id]);
  


  if (!loading) {
    return (
      <>
        
        <h2>...Loading</h2>
      </>
    );
  } 
  else{
    return (
      <div className="BoxCounter">
        
          <ItemDetail item={product} />
          {console.log(id)}
        
      </div>
    );
  }
}

export default ItemDetailContainer;
