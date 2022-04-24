import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { firestoreDb } from '../../services/firebase'
import { getDocs, collection, query, where, limit } from 'firebase/firestore' 

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()


    useEffect(() => {
        setLoading(true)
     

        const collectionRef = categoryId
        ? query(collection(firestoreDb, 'products'), where('category', '==', categoryId), limit(10))
        : collection(firestoreDb, 'products')

        getDocs(collectionRef).then(querySnapshot => {
            const products = querySnapshot.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            setProducts(products)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setProducts([])
        })          
    }, [categoryId])

    
    return (
        <div className="ItemListContainer">
            {
                loading ? 
                    <h1 className='sub' >Cargando...</h1> :  
                products.length > 0 ? 
                    <ItemList products={products}/> : 
                    <h1 className='sub' >No se encontraron productos!</h1>
            }
        </div>
    )    
    
}


export default ItemListContainer