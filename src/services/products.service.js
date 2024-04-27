import { child, get, push, ref, set } from "firebase/database"
import { db } from "../config/firebase.config"
import { productEntity } from "../lib/firebase.entities"


const dbRef = ref(db)

export const getAllProducts = async () => {
    try {
        const response = await get(child(dbRef, productEntity))

        if (response.exists()) {
            const data = response.val()
            return Object.values(data)
        }
    } catch (error) {
        console.error('Error', error)
    }
}

export const addProduct = (data) => {
    try {
        const productKey = push(child(ref(db), productEntity)).key
        const productEntityRef = ref(db, productEntity + '/' + productKey)

        const response = set(productEntityRef, {
            pid: productKey,
            ...data
        })

        return response
    } catch (error) {
        console.error('Error', error)
    }
}

export const getProductById = async (pid) => {
    try {
        const productRef = child(dbRef, `products/${pid}`);
        const snapshot = await get(productRef);

        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            throw new Error(`Product with ID ${pid} not found`);
        }
    } catch (error) {
        console.error('Error fetching product:', error);
        throw error; // Rethrow the error so it can be caught and handled by the calling code
    }
};