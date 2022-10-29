import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import { DarkModeContext } from './context/DarkModeContext';
import Order from './components/Order';
import ItemListContainerF from './components/ItemListContainerF';
import { CartContextProvider } from './context/CartContext';
import Cart from './components/Cart';

function App() {


  return (
    <CartContextProvider>
    {/* <DarkModeContext> */}
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path={'/'} element={<ItemListContainerF/>} />
          <Route path={'/shop/'} element={<ItemListContainerF/>} />
          <Route path={'/detail/item/:id'} element={<ItemDetailContainer/>} />
          <Route path={'/'} element={<condicionalContainer/>} />
          <Route path={'/cart'} element={<Cart/>} />
          {/* <Route path={'/Order'} element={<Order/>}></Route> */}
        </Routes>
      </BrowserRouter>
    {/* </DarkModeContext> */}
    </CartContextProvider>
  );

}

export default App;
