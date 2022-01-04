import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import "./item.css";

const productList = [
  {id: 1,title: "Serie E",stock: 14,initial: 6,price: 42,image: "/images/images.jpeg"},
  {id: 2,title: "GranTurismo",stock: 18,initial: 5,price: 8,image: "/images/images.jpeg"},
  {id: 3,title: "Ram Van 1500",stock: 3,initial: 1,price: 63,image: "/images/images.jpeg"},
  {id: 4,title: "Gran Marqués",stock: 3,initial: 1,price: 16,image: "/images/images.jpeg"},
  {id: 5,title: "Sonata",stock: 2,initial: 1,price: 43,image: "/images/images.jpeg"},
  {id: 6,title: "Clase S",stock: 20,initial: 2,price: 95,image: "/images/images.jpeg"},
  {id: 7,title: "Equinoccio",stock: 19,initial: 5,price: 33,image: "/images/images.jpeg"},
  {id: 8,title: "Espectros",stock: 8,initial: 5,price: 24,image: "/images/images.jpeg"},
  {id: 9,title: "Serie E",stock: 15,initial: 1,price: 7,image: "/images/images.jpeg"},
  {id: 10,title: "RX-7",stock: 16,initial: 5,price: 75,image: "/images/images.jpeg"},
  {id: 11,title: "S80",stock: 20,initial: 6,price: 15,image: "/images/images.jpeg"},
  {id: 12,title: "C30",stock: 9,initial: 3,price: 62,image: "/images/images.jpeg"}
];

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const promise = new Promise((res, rej) => {
      setTimeout(() => {
        res(productList);
      }, 2000);
    });

    promise
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
      <div className="itemContainer">
        <ItemList products={products} />
      </div>
    );
  }
}

export default ItemListContainer;
