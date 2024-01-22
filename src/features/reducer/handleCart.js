import { ADD_PRODUCT, DELETE_PRODUCT } from "../../utils/const";

const card = []

const handleCart = (state = card, action) => {
    const product = action.payload;
    console.log(product)
    console.log(state)
    switch (action.type) {
        case ADD_PRODUCT:
            console.log(state)
                const isAdded = () => {
                    state.find((item) => item.id === product.id)             
                }
            if (isAdded) {
                return state.map((x) => 
                    x.id === product.id ? {...x, quantity: x.quantity + 1} : x
                )
            } else {
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        quantity: 1
                    }
                ]
            }
            break

        case DELETE_PRODUCT: 
            const isAdded2 = state.find((item) => item.id === product.id)
            if (isAdded2.quantity === 1) {
                return state.filter((x) => x.id !== isAdded2.id)
            } else {
                return state.map((x)=>
                    x.id === product.id ? {...x, quantity: x.quantity - 1} : x
                )
            }
            break
        default:
            return state;
            
    }
}

export default handleCart