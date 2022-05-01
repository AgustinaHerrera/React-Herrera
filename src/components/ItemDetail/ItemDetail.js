import { useState, useContext } from 'react' 
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import CartContext from '../../context/CartContext'
import { useNotificationServices } from '../../services/Notification/notification'

const ItemDetail = ({ id, name, img, category, Description, price, stock }) => {
    const [quantity, setQuantity] = useState(0)

    const { addItem } = useContext(CartContext)

    const setNotification = useNotificationServices()

    const handleOnAdd = (quantity) => {
        setQuantity(quantity)

        const productToAdd = {
            id,
            name,
            price,
            img,
            category,
            Description,
            stock
        }

        addItem(productToAdd, quantity)
        setNotification('success',`Se agrego ${name} al carrito`)
    }
 
    return (
        <article className="ContainerItem">
            <header >
                <h2 className="titulo">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="imagen"/>
            </picture>
            <section className="Info">
                <p >
                    Categoria: {category}
                </p>
                <p >
                    Descripción: {Description}
                </p>
                <p >
                    Precio: {price}
                </p>
            </section>           
            <footer className='footer'>
                {
                    quantity > 0 ? 
                        <Link to={'/cart'} className='Option'>Ir al carrito de compras</Link> :
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                } 
            </footer>
        </article>
    )
}

export default ItemDetail