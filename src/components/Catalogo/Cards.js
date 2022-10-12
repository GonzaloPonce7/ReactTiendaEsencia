import React from "react"
import { Link } from "react-router-dom"

const Cards = ({id, estilo, nombre, precio,img}) => {
  return (
    <Link to={`/detail/item/${id}`}>
        <div>
            <div>
              <img src={img} alt=""></img>
            </div>
            <div>{estilo}</div>
            <div>{nombre}</div>
            <div>{precio}</div>
        </div>
    </Link>
  )
}

export default Cards