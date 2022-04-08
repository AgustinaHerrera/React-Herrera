import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import{CartContextProvider} from './context/CartContext'

function App() {



  return (
    <div className="App">
<CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Bienvenido'}/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Bienvenido'}/>} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

//React.createElement('Avatar', { className: "Avatar" }, [])

export default App;
