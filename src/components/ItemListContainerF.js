import React from 'react'
import {getFirestore, collection, getDocs} from "firebase/firestore"
import { useState,useEffect } from "react"
import Cards from './Cards'


const ItemListContainerF = () => {

    const [items, setItems] = useState([])


    useEffect(() => {
        getItems()
    }, [])

    const getItems = () => { 
        const db = getFirestore()
        const itemsRef = collection(db, 'items')
        getDocs(itemsRef).then(snapshot => {
            const data = snapshot.docs.map( e => ({id: e.id, ...e.data(  )}) )
            setItems(data)
        })
        .catch(err=> {
            console.log(err);
        })
    }


    return (
        <>
            <div>
                {items.map( i => <Cards key={i.id} {...i} /> )}
            </div>
            
        </>
    )
}

export default ItemListContainerF