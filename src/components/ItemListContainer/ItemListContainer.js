import { useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import { getProducts } from '../../services/firebase/firestore'
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
  
useEffect(() => {
setLoading(true)
        
getProducts(categoryId).then(items => {
setProducts(items)
}).catch(err  => {
console.log(err)
}).finally(() => {
setLoading(false)
})
        

return (() => {
setProducts([])
})          
}, [categoryId])

    if(loading) {
        return (
            <>
                <h1 className='Sub'>Cargando...</h1>
            </>
        )
    }
    
    if(products.length === 0) {
        return <h1 className='Sub'>No se encontraron productos!</h1>
    }
    
    return (
        <div className="ItemListContainer">
            <ItemList products={products}/> 
        </div>
    )    
    
}


export default ItemListContainer