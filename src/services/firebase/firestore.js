import { getDocs,  collection,  query, where, limit,  doc, getDoc,  writeBatch,  documentId, addDoc, Timestamp } from 'firebase/firestore' 
import { firestoreDb } from './index'
import { createAdaptedProduct } from '../../adapters/productAdapter'
import { createAdaptedCategory } from '../../adapters/categoryAdapter'

export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) => {
        const collectionRef = categoryId
        ? query(collection(firestoreDb, 'products'), where('category', '==', categoryId), limit(10))
        : collection(firestoreDb, 'products')

        getDocs(collectionRef).then(querySnapshot => {
            const products = querySnapshot.docs.map(doc => {
                return createAdaptedProduct(doc)
            })
            resolve(products)
        }).catch(error => {
            reject(error)
        })
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve, reject) => {
        const docRef = doc(firestoreDb, 'products', productId)
    
        getDoc(docRef).then(querySnapshot => {
            const product = createAdaptedProduct(querySnapshot)
            resolve(product)
        }).catch(error => {
            resolve(error)
        })
    })
}

export const createOrderAndUpdateStock = (products, objOrder) => {
    return new Promise((resolve) => {

        const objOrderWithTimestamp = {
            ...objOrder,
            date: Timestamp.fromDate(new Date())
        }

        const batch = writeBatch(firestoreDb)
        const outOfStock = []

        const ids = products.map(prod => prod.id);

        const collectionRef = collection (firestoreDb, 'products')

        getDocs (query(collectionRef, where(documentId(), 'in', ids)))
            .then((response) => {
              response.docs.forEach((docSnapshot) => {
                if (docSnapshot.data().stock >=
                  objOrder.items.find((prod) => prod.id === docSnapshot.id).quantity
                ) {
                  batch.update(docSnapshot.ref, {
                    stock:
                      docSnapshot.data().stock -
                      objOrder.items.find((prod) => prod.id === docSnapshot.id)
                        .quantity,
                  });
                } else {
                  outOfStock.push({ id: docSnapshot.id, ...docSnapshot.data() });
                }
              });
            })
            .then(() => {
                if(outOfStock.length === 0) {
                    const collectionRef = collection(firestoreDb, 'orders')
                    return addDoc(collectionRef, objOrderWithTimestamp)
                }
            }).then(({ id }) => {
                batch.commit()
                resolve(id)
            }).catch(error => {
                resolve(error)
            })
    }
)}


export const getCategories = () => {
    return new Promise((resolve, reject) => {
        const collectionRef = collection(firestoreDb, 'categories')

      getDocs(collectionRef).then(querySnapshot => {
        const categories = querySnapshot.docs.map(doc => {
            return createAdaptedCategory(doc)
        })
        resolve(categories)
        }).catch(error => {
            reject(error)
        })
    })
}