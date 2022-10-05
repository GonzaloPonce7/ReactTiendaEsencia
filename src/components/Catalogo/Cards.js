import React from "react"
import { Link } from "react-router-dom"

const Cards = ({id, estilo, nombre, precio}) => {
  return (
    <Link to={`/shop/item/${id}`}>
        <div>
            <div>{id}</div>
            <div>{estilo}</div>
            <div>{nombre}</div>
            <div>{precio}</div>
        </div>
    </Link>
  )
}

export default Cards