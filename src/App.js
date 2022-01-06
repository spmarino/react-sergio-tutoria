import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import Header from  './Header'
import './header.css'
import ItemDetailContainer from "./ItemDetailContainer";


const productList = [
  {id: 1,title: "Serie E",stock: 14,initial: 6,price: 42,image: "/images/camioneta.jpeg",category:"Camioneta"},
  {id: 2,title: "GranTurismo",stock: 18,initial: 5,price: 8,image: "/images/camioneta.jpeg",category:"Camioneta"},
  {id: 3,title: "Ram Van 1500",stock: 3,initial: 1,price: 63,image: "/images/camioneta.jpeg",category:"Camioneta"},
  {id: 4,title: "Gran Marqués",stock: 3,initial: 1,price: 16,image: "/images/camioneta.jpeg",category:"Camioneta"},
  {id: 5,title: "Sonata",stock: 2,initial: 1,price: 43,image: "/images/familiar.jpeg", category:"Familiar"},
  {id: 6,title: "Clase S",stock: 20,initial: 2,price: 95,image: "/images/familiar.jpeg", category:"Familiar"},
  {id: 7,title: "Equinoccio",stock: 19,initial: 5,price: 33,image: "/images/familiar.jpeg", category:"Familiar"},
  {id: 8,title: "Espectros",stock: 8,initial: 5,price: 24,image: "/images/familiar.jpeg", category:"Familiar"},
  {id: 9,title: "Serie E",stock: 15,initial: 1,price: 7,image: "/images/coupe.jpeg", category:"Coupe"},
  {id: 10,title: "RX-7",stock: 16,initial: 5,price: 75,image: "/images/coupe.jpeg", category:"Coupe"},
  {id: 11,title: "S80",stock: 20,initial: 6,price: 15,image: "/images/coupe.jpeg", category:"Coupe"},
  {id: 12,title: "C30",stock: 9,initial: 3,price: 62,image: "/images/coupe.jpeg", category:"Coupe"}
];


function App() {
  return (
   
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ItemListContainer productList={productList}/>}/>
        <Route path="/category/:id" element={<ItemListContainer productList={productList}/>}/>
        <Route path="/product/:id" element={<ItemDetailContainer productList={productList}/>}/>
        </Routes>
</BrowserRouter>
    
  );
}

export default App;
