import './cart.css'
import { useContext } from "react"
import CartContext from '../../context/CartContext'


const Cart = () => {
    const { products, removeItem, getTotal } = useContext(CartContext)



    if(products.length === 0) {
        return <h1 className="sub">No hay productos en el carrito</h1>
    }

    const handleRemoveItem = (id, name) => {
        removeItem(id)
       
    }

    return (
        <>
            <h1 className="sub" >Cart</h1>
            {
                products.map(prod => {
                    return (
                        <div key={prod.id} className='Cart'>
                            <h3 >{prod.name}</h3>
                            <h3 >Cantidad: {prod.quantity}</h3>
                            <button className="btn" onClick={() => handleRemoveItem(prod.id, prod.name)}>X</button>
                        </div>
                    )
            })}
            <h1 className="text">Total: ${getTotal()}</h1>
        </>
    )
}

export default Cart