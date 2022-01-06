import { useState } from "react";


function Counter({ stock, initial }) {
  const [contador, setContador] = useState(initial);

  const aumentarContador = () => {
    if (contador < stock) setContador(contador + 1);
  };

  const disminuirContador = () => {
    if (contador > initial) setContador(contador - 1);
  };

  return (
    <div>
      <div className="Counter"> <button type="button" onClick={disminuirContador}>
        -
      </button>
      <p className="Cantidad">Cantidad {contador}</p>
     
      <button type="button" onClick={aumentarContador}>
        +
      </button></div>
  

      
      <button>Agregar al Carrito</button>

    </div>
  );
}

export default Counter;
