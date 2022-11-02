import React, { createContext, useContext } from "react"
import LocalStorage from "../components/LocalStorage" 


const CartContext = createContext({
    orderList: [],
    addToCart: () => {},
    clearCart: () => {},
    deleteItem: () => {},
    increaseItem: () => {},
    decreaseItem: () => {},
    count: 0,
    total: 0
})

const useCart = () => {
    return useContext(CartContext)
}

const CartContextProvider = ({children}) => {

    const [orderList, setOrderList] = LocalStorage('items', [])

    const addToCart = ( item ) => {

        let auxList = [...orderList];

        let orderItem = auxList.find(e => e.item.id === item.id);
        if (orderItem !== undefined) {
            orderItem.quantity ++;
            orderItem.subtotal += item.price
            setOrderList(auxList);
        } else{
            setOrderList( orderList => [...orderList, {item:item, quantity:1, subtotal:item.price}] )
        }
        
    };

    // const deleteItem = (item) => {
    //     let auxList = [...orderList];
    //     let itemIdx = auxList.findIndex( (e)=> e.item === item );
    //     if (itemIdx > -1) {
    //         auxList.splice(itemIdx, 1);
    //         setOrderList(auxList)
    //     }
    // };

    const deleteItem = (item) => {
        console.log("asdasd");
        let auxList = [...orderList];
        let itemIdx = auxList.findIndex( (e)=> e.item === item );
        if (itemIdx > -1) {
            auxList.splice(itemIdx, 1);
            //console.log(auxList);
            setOrderList(auxList)
        }
    };

    const increaseItem = (item) => {
        if(item.quantity)
            item.quantity ++
    };

    const decreaseItem = (item) => {
        if (item.quantity && item.quantity > 0)
        item.quantity --
    };

    const clearCart = () => {
        setOrderList([])
    };

    const total = () => {
        let sum = 0;
        orderList.forEach((e) => (sum += e.subtotal));
        return sum;
    };
    
    const context = {
        orderList: orderList,
        addToCart: addToCart,
        clearCart: clearCart,
        deleteItem: deleteItem,
        increaseItem: increaseItem,
        decreaseItem: decreaseItem,
        count: orderList.length,
        total: total()
        //(orderList.map(e => e.subtotal)).reduce((pv,cv) => pv+cv)
        };
    
    return (
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    )
}
export  { CartContextProvider, useCart } 