import logo from './logo.svg';
import './App.css';
import './components/prueba';
import Saludo from './components/prueba';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenido a la tienda de birra, camarada"}/>
    </>
  );

}

export default App;
