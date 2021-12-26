import { useState } from "react";


function Counter({ stock, initial }) {
  const [contador, setContador] = useState(initial);

  const aumentarContador = () => {
    if (contador <= stock) setContador(contador + 1);
  };

  const disminuirContador = () => {
    if (contador > initial) setContador(contador - 1);
  };

  return (
    <div>
      <button type="button" onClick={aumentarContador}>
        +
      </button>
      <button type="button" onClick={disminuirContador}>
        -
      </button>

      <p>Cantidad {contador}</p>
      <button>Agregar</button>

    </div>
  );
}

export default Counter;
