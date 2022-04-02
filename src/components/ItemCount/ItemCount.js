import { useState } from 'react'
import '../NavBar/NavBar.css'

const ItemCount = ({ initial = 0, stock, onAdd}) => {
    const [count, setCount] = useState(initial)


    const increment = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }
    const decrement = () => {
        setCount(count - 1)
    }

    return(
        <div className='container'>
            <button  className='btn' onClick={decrement}>-</button>
            <p>{count}</p>
            <button className='btn' onClick={increment}>+</button>
            <button className='btn2' onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount