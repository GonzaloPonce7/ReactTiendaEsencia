import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { products } from "./Catalogo/Data/Products";

const ItemDetailContainer = () => {

    const {id: itemId } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        getItemDetails().then( response => {
            setItem (response)
        } )
    }, [])
    
    const getItemDetails = () => {
        return new Promise((resolve) => {
            setTimeout(()=>{
                resolve(products.find( p => p.id === Number(itemId)))
            }, 1000)
        })
    }

    return (
        <div>
            <div>
                <img src={item.img} alt=""></img>
            </div>
            <div>{item.nombre}</div>
            <div>{item.estilo}</div>
            <div>{item.precio}</div>
        </div>
    )
}
export default ItemDetailContainer