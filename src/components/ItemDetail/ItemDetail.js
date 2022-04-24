import { useState, useContext } from 'react' 
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import CartContext from '../../context/CartContext'
import { useNotificationServices } from '../../services/Notification/notification'

const ItemDetail = ({ id, name, img, category, price, stock}) => {
    const [quantity, setQuantity] = useState(0)

    const { addItem } = useContext(CartContext)
    const { setNotificationServices } = useNotificationServices()

    const handleOnAdd = (count) => {
        setQuantity(count)
        addItem({ id, name, price}, count)
        setNotificationServices('success', 'Se agregaron correctamente los productos al carrito')
    }
        

    return (
        <div className="ContainerItem">
            <header >
                <h2 className="titulo">
                    {name}
                </h2>
            </header>
            <picture >
                <img src={img} alt={name} className="imagen" />
            </picture>
            <section className='Info'>
                <p>
                    Categoria: {category}
                </p>
        
                <p>
                    Precio: {price}
                </p>
            </section>           
            <footer className='footer'>
                {quantity === 0 ? <ItemCount onAdd={handleOnAdd}/> : <Link to='/cart' className='btn2'>Ir al carrito</Link>}
                
            </footer>
        </div>
    )
}

export default ItemDetail