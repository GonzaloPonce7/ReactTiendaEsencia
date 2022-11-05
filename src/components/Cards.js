import React from "react"
import { Link } from "react-router-dom"
import { useCart } from '../context/CartContext'


const Cards = ({id, style, name, price, img}) => {

  let quantityInCart=0;

  const {addToCart, getItemQuantity} = useCart()

  const addHandler = () => {
    let item = {id, style, name, price, img};
    addToCart(item)
  };

  const updateCounter = () => {
    return quantityInCart = getItemQuantity(id)
  };

  return (
    <div>
            <div>
              <img src={img} alt=""></img>
            </div>
            <div>{name}</div>
            <div>{style}</div>
            <div>{price}</div>
          <Link to={`/detail/item/${id}`}>
            <button className="btn">Detalles</button>
          </Link>
          <button className='btn' onClick={addHandler}>Agregar al carrito</button>
          <div>
            {updateCounter() > 0 ? <span className="font-bold text-lg">Hay {quantityInCart} en el carrito </span> : <span></span> }
          </div>
    </div>
  )
}

export default Cards