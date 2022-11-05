import React, { createContext, useContext } from "react"
import LocalStorage from "../components/LocalStorage" 


const CartContext = createContext({
    cartList: [],
    addToCart: () => {},
    clearCart: () => {},
    deleteItem: () => {},
    increaseItem: () => {},
    decreaseItem: () => {},
    getItemQuantity: () => {},
    count: 0,
    getTotal: 0
})

const useCart = () => {
    return useContext(CartContext)
};

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = LocalStorage('items', [])

    const addToCart = ( item ) => {

        let auxList = [...cartList];

        let cartItem = auxList.find(e => e.item.id === item.id);
        if (cartItem !== undefined) {
            cartItem.quantity ++;
            cartItem.subtotal += item.price;
            setCartList(auxList);
        } else{
            setCartList( cartList => [...cartList, {item:item, quantity:1, subtotal:item.price}] )
        }
    };

    const deleteItem = (item) => {
        let auxList = [...cartList];
        let itemIdx = auxList.findIndex( (e)=> e.item === item );
        if (itemIdx > -1) {
            auxList.splice(itemIdx, 1);
            setCartList(auxList)
        }
    };

    const increaseItem = (item) => {
        let auxList = [...cartList];
        let itemFinded = auxList.find( (e)=> e.item === item );
        if(itemFinded && itemFinded.quantity)
            itemFinded.quantity ++;
            itemFinded.subtotal += item.price;
            setCartList(auxList)
    };

    const decreaseItem = (item) => {
        let auxList = [...cartList];
        let itemFinded = auxList.find( (e)=> e.item === item );
        if (itemFinded &&  itemFinded.quantity > 0)
        itemFinded.quantity --;
        itemFinded.subtotal -= item.price;
        setCartList(auxList)
    };

    const getItemQuantity = (id) => {
        const cartItem = cartList.find( (e)=> e.item.id === id )
        return cartItem? cartItem.quantity : 0;
    }

    const clearCart = () => {
        setCartList([])
    };

    const getTotal = () => {
        let sum = 0;
        cartList.forEach((e) => (sum += e.subtotal));
        return sum;
    };
    
    const context = {
        cartList: cartList,
        addToCart: addToCart,
        clearCart: clearCart,
        deleteItem: deleteItem,
        increaseItem: increaseItem,
        decreaseItem: decreaseItem,
        getItemQuantity: getItemQuantity,
        count: cartList.length,
        getTotal: getTotal()
    };
    
    return (
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    )
}
export  { CartContextProvider, useCart } 