import { useState} from "react";

const ItemCount = ({initial=0 , stock, onAdd}) => {

  const [count, setCount] = useState(initial);

const decrement = () => {
  if (count > 0){
    setCount(count - 1)
  }
}

const increment = () => {
  if (count < stock){
    setCount(count + 1)
}
}

  return (
    <div className='container'> 
    
        <button className='btn' onClick={decrement}>-</button>
            <p className='text' >{count}</p>
            <button className='btn' onClick={increment}>+</button>
            <button onClick={() => onAdd(count)} className='btn2' >Agregar al carrito</button>
    </div>

  )
}

export default ItemCount;
