import React from "react"

import { useEffect, useState } from "react"

import ItemList from '../ItemList/ItemList'

import {getProducts} from '../asynmock'

const ItemListContainer = ({greeting}) =>{
const [products, setProducts] = useState ([])

useEffect (()=>{
    getProducts().then(response =>{
        setProducts (response)
    })
}, [])

console.log(products)

return(
    <div>
        <h1 className="sub"> {greeting} </h1>
        <ItemList products = {products} />
    </div>
)

}

export default ItemListContainer