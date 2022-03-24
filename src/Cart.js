import {React, useState} from 'react'
import {UseCartContext} from './CartContext'
import CartItem from './CartItem'

const Cart = () => {
  const { CartList, EmptyCart, PriceTotal } = UseCartContext();
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <div>
      {loading ? (
        <h1>Loading..</h1>
      ) : (
        <div>
          <h2>Cart</h2>

          {CartList.length < 1 ? (
            <h2>You have no items in your shopping cart</h2>
          ) : (
            <div>
              <div>
                <div>
                  {CartList.map((i) => (
                    <CartItem
                      key={i.item.id}
                      Item={i.item}
                      Quantity={i.cantidad}
                    />
                  ))}
                </div>
              </div>
              <button onClick={EmptyCart}>Empty Cart</button>
              <h2>Total: {PriceTotal()} U$D</h2>
            
            </div>
          )}
        </div>
      )}
    </div>
  );
};



export default Cart