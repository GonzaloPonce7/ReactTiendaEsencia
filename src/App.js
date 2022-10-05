import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path={'/'} element={<ItemListContainer/>} />
          <Route path={'/shop/'} element={<ItemListContainer/>} />
          <Route path={'/detail/item/:id'} element={<ItemDetailContainer/>} />
          {/* <Route path={'/'} element={} /> */}
        </Routes>
      </BrowserRouter>
      <ItemListContainer greeting={"Bienvenido a la tienda de birra, camarada"}/>
    </>
  );

}

export default App;
