import { findByLabelText } from "@testing-library/react"
import React, { useEffect, useState } from "react";
import { products } from "./Catalogo/Data/Products";
import Cards from "./Catalogo/Cards"


const styles = {
    display: 'flex',
    justifyContent: 'center',
    border: 'solid 2px',
    padding: '30px'

};

const ItemListContainer = ( {greeting} ) => {

    const [items, setItems] = useState([])

    useEffect(() => {
        getCatalog().then( response =>
            setItems(response)
        )
    }, [])
    
    const getCatalog = ()=> {
        return new Promise(resolve => { 
            setTimeout( ()=> {
                resolve (products)
            }, 1000);
        })
    }

    return (

        <>
            <div style={ styles }>
                <h2>{greeting}</h2>
            </div>
            {items.map( i => <Cards key={i.id} {...i} /> )}
        </>
    )
}
export default ItemListContainer