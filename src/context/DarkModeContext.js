import { createContext } from "react";
import { useState } from "react";


const DarkModeContext = createContext(true)

export const useDarkModeContext = (children) => {

    const [DarkMode, setDarkMode] = useState ( true );

    const darkModeHandler = () =>{
        setDarkMode(!DarkMode)
    }

    return (
        <DarkModeContext.Provider value={darkModeHandler}>
            {children}
        </DarkModeContext.Provider>
    )
}

export { DarkModeContext }