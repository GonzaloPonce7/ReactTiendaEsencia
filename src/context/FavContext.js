import { createContext, useContext, useState } from "react";

const FavContext = createContext ([])

const useFavs = () => {
    return useContext ( FavContext )
}

const FavProvider = ({children}) => {

    const [favs, setFavs] = useState([])

    const add = (fav)=> {
        setFavs ( favs => favs.concat(fav) )
    }

    const context = {
        favs,
        add: add
    }


    return (
        <FavContext.Provider value={context}>
            {children}
        </FavContext.Provider>
    )
}

export {FavContext, FavProvider, useFavs}