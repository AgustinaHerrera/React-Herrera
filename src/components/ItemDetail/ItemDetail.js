import {useState} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantity, setQuantity] = useState (0)

    const handleOnAdd = (count) =>{
        console.log('Agregué al carrito');
        setQuantity(count)  
    }
    return (
        
        <article className="ContainerItem">
            <header className="Header">
                <h2 className="text">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="itemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: ${price}
                </p>
            </section>           
            <footer className='ItemFooter'>
         {quantity === 0 ?   <ItemCount onAdd={handleOnAdd} /> : <button className='btn2' >Ir al carrito</button>}
            </footer>
           
        </article>
    )
}

export default ItemDetail