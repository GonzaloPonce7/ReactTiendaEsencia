import React from 'react'
import { useCart } from '../context/CartContext'

const Cart = () => {

  const {orderList, clearCart, total, increaseItem, decreaseItem, deleteItem} = useCart()


  return (
    <div>
    <div>Carrito</div>
      <table>
        <thead>
          <tr>
            <th className='tableCartHead'></th>
            <th className='tableCartHead'>Producto</th>
            <th className='tableCartHead'>Precio uni</th>
            <th className='tableCartHead'>Cantidad</th>
            <th className='tableCartHead'>Subtotal</th>
            <th className='tableCartHead'></th>
          </tr>
        </thead>
        <tbody>
          { orderList.map ( (e, i) =>
          <tr key={i}>
            <td className='tableCartBody'>
              <img src={e.item.img} alt='' width='70px'></img>
            </td>
            <td className='tableCartBody'>{e.item.name}</td>
            <td className='tableCartBody'>${e.item.price}</td>
            <td className='tableCartBody'>
              <span>
                <button className='btn' onClick={decreaseItem}>-</button>
                <>{e.quantity}</>
                <button className='btn' onClick={increaseItem}>+</button>
              </span>
            </td>
            <td className='tableCartBody'>{e.subtotal}</td>
            <td className='tableCartBody'>
              {/* <button className='btn' onClick={deleteItem()} >X</button> */}
            </td>
          </tr>
          //<div key={i}>{e.item.name} | precio ind: ${e.item.price} x cantidad: {e.quantity} = {e.subtotal}  </div> 
          )}
        </tbody>
      </table>
    <div>Total: {total}</div>
    <button className='btn' onClick={clearCart}>Limpiar carrito</button>
    <button className='btn'>Compar</button>
  </div>
  )
}

export default Cart