import React, { createContext, useContext } from "react"
import LocalStorage from "../components/LocalStorage" 


const CartContext = createContext({
    orderList: [],
    addToCart: () => {},
    clearCart: () => {},
    count: 0,
    total: 0
})

const useCart = () => {
    return useContext(CartContext)
}

const CartContextProvider = ({children}) => {

    const [orderList, setOrderList] = LocalStorage('items', [])


    const addToCart = ( item ) => {
        //recorrer la orderlist buscando el id del item recibido
        //Si lo encuentra sumar cantidad
        //Si no lo encuentra, agregar a la listOrder
        let orderItem = orderList.find(e => e.item.id === item.id);
        if (orderItem !== undefined) {
            orderItem.quantity ++;
            orderItem.subtotal += item.price
            setOrderList(orderList);
        } else{
            setOrderList( orderList => [...orderList, {item:item, quantity:1, subtotal:item.price}] )
        }
        
    }


    const clearCart = () => {
        setOrderList([])
    }


    const context = {
        orderList: orderList,
        addToCart: addToCart,
        clearCart: clearCart,
        count: orderList.length,
        total: (orderList.map(e => e.subtotal)).reduce((pv,cv) => pv+cv)
        }
    


    return (
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    )
}
export  { CartContextProvider, useCart } 