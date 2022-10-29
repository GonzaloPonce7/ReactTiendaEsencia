import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {getFirestore, doc, getDoc, collection} from "firebase/firestore"


const ItemDetailContainer = () => {

    const {id: itemId } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        getItem()
    }, [])
    
    const getItem = () => { 
        const db = getFirestore()
        const itemCollection = collection (db, 'items')
        const itemRef = doc(itemCollection, itemId )
        getDoc(itemRef).then(snapshot => {
            if (snapshot.exists()) {
                setItem(snapshot.data())
            }
        })
    }


    return (
        <div>
            <div>
                <img src={item.img} alt=""></img>
            </div>
            <div>{item.name}</div>
            <div>{item.style}</div>
            <div>{item.price}</div>
            <div>{item.description}</div>
        </div>
    )
}
export default ItemDetailContainer