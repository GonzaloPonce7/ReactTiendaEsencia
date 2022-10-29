import React, {useState} from 'react'
import {addDoc, collection, doc, getFirestore, updateDoc} from 'firebase/firestore'


const Order = () => {

    const items = [ 'Apollo', 'Drago' ] // Este objeto viene de useContext
    //const { item } = useContext()

    const inOrder = ()=> {
        const user = {name: 'Gil', phone: '121212', email: 'gil@gmail.com'}
        const order = {
            buyer: user,
            items: items,
            total: 3
        }

        const db = getFirestore()
        const ordersCollection = collection( db, 'orders' )
        addDoc( ordersCollection, order ).then (({id}) => {
            console.log(id);
        })
    }

        // const modifyOrder = () => { 
        //     const db = getFirestore()
        //     const ordersCollection = collection
        //     const orderDoc = doc (ordersCollection, id)
        //     updateDoc(orderDoc, {total:10}).then(res =>{
        //         console.log(res);
        //     })
        // }



  return ( 
    <>
    <h1 className='text-3xl'>Order</h1>
    {items.map( (items, i) => <li key={i}>{items}</li> )}
    <button className='btn' onClick={inOrder}>Compar</button>
    <button className='btn' onClick={inOrder}>Modificar orden</button>
    </>
  )
}

export default Order