import { useState } from "react";
import {Link} from "react-router-dom"


function Counter({ stock, initial, onAdd }) {
  const [cantidad, setCantidad] = useState(initial);
  const [show, setShow] = useState(true)

  const aumentarCantidad = () => {
    if (cantidad < stock) setCantidad(cantidad + 1);
  };

  const disminuirCantidad = () => {
    if (cantidad > initial) setCantidad(cantidad - 1);
  };

  const addProduct = () => {
    onAdd(cantidad)
    setShow(false)
  }

  return (
    <div>
      {show?
      <div>
      <div className="Counter"> <button type="button" onClick={disminuirCantidad}>
        -
      </button>
      <p className="Cantidad">Cantidad {cantidad}</p>
     
      <button type="button" onClick={aumentarCantidad}>
        +
      </button></div>

      <button onClick={addProduct}>Agregar al Carrito</button>
  
      </div>
      :(<Link to="/cart"><button>Ir al carrito</button></Link>)}
     

    </div>
  );
}

export default Counter;
