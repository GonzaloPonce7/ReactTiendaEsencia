import React from 'react'
import { useCart } from '../context/CartContext'

const Cart = () => {

  const {orderList, clearCart, total} = useCart()


  return (
    <div>
        <div>Carrito</div>
        <div>
          { orderList.map( (e, i) => <li key={i}>{e.item.name} | precio ind: ${e.item.price} x cantidad: {e.quantity} = {e.subtotal}  </li> ) }
        </div>
        <div>Total: {total}</div>
        <button className='btn' onClick={clearCart}>Limpiar carrito</button>
        <button className='btn'>Compar</button>
    </div>
  )
}

export default Cart