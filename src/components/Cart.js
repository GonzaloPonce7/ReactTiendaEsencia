import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'

const Cart = () => {

  const { cartList, clearCart, total, increaseItem, decreaseItem, deleteItem} = useCart()

  const deleteItemHandler = (event,item) => {
    deleteItem(item)
  };

  const increaseItemHandler = (event,item) => {
    increaseItem(item)
  };

  const decreaseItemHandler = (event,item) => {
    decreaseItem(item)
  }


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
          { cartList.map ( (e, i) =>
          <tr key={i}>
            <td className='tableCartBody'>
              <img src={e.item.img} alt='' width='70px'></img>
            </td>
            <td className='tableCartBody'>{e.item.name}</td>
            <td className='tableCartBody'>${e.item.price}</td>
            <td className='tableCartBody'>
              <span>
                <button className='btn' onClick={(event)=> decreaseItemHandler (event,e.item)}>-</button>
                <>{e.quantity}</>
                <button className='btn' onClick={(event)=> increaseItemHandler (event,e.item)}>+</button>
              </span>
            </td>
            <td className='tableCartBody'>{e.subtotal}</td>
            <td className='tableCartBody'>
            <button className='btn' onClick={(event)=> deleteItemHandler(event,e.item) } >X</button>
            </td>
          </tr>
          )}
        </tbody>
      </table>
    <div>Total: {total}</div>
    <button className='btn' onClick={clearCart}>Limpiar carrito</button>
    {cartList.length === 0? <button disabled className='btn'>Compar</button> : <Link to='/checkout'><button  className='btn'>Compar</button></Link>}
  </div>
  )
};

export default Cart