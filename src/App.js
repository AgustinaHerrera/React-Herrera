import NavBar from './components/NavBar/NavBar';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import ItemCount from "./components/ItemCount/ItemCount";

function App() {

const onAdd = (quantity) =>{
  console.log(quantity);
}

  return (
  
    <div className="App">
      <header className="App-header">
    
        <NavBar />

       <ItemListContainer greeting="Bienvenido" /> 

       <ItemCount initial = {1} stock={10} onAdd={onAdd} />

      </header>
      
    </div>
  );
}

export default App;
