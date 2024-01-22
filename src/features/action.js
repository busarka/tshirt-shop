import { ADD_PRODUCT, DELETE_PRODUCT } from "../utils/const"

export const addCard = (selectedProduct) => {
    return {
        type: ADD_PRODUCT,
        payload: selectedProduct
    }
}

export const deleteCard = (product) => {
    return {
        type: DELETE_PRODUCT,
        payload: product
    }
}