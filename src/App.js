import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import { DarkModeContext } from './context/DarkModeContext';
import { useState } from 'react';


function App() {

  const [DarkMode, setDarkMode] = useState ( true );

  const darkModeHandler = () =>{
    setDarkMode(!DarkMode)
  }

  return (
    <DarkModeContext.Provider value={DarkMode}>
      <BrowserRouter>
        <NavBar/>
        <button className='btn' onClick={darkModeHandler}>DarkMode</button>
        <Routes>
          <Route path={'/'} element={<ItemListContainer/>} />
          <Route path={'/shop/'} element={<ItemListContainer/>} />
          <Route path={'/detail/item/:id'} element={<ItemDetailContainer/>} />
          <Route path={'/'} element={<condicionalContainer/>} />
        </Routes>
      </BrowserRouter>
      {/* <ItemListContainer greeting={"Bienvenido a la tienda de birra, camarada"}/> */}
    </DarkModeContext.Provider>
  );

}

export default App;
