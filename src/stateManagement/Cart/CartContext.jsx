import { useContext, createContext, useReducer } from "react"
import cartReducer from "./cartReducer"

const InitialCartState = {
    list: [],
    cartLen: 0,
    total: 0
}

const CartContext = createContext(InitialCartState)

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, InitialCartState)

    const add = (data) => {
        const newData = state.list.concat(data)
        dispatch({
            type: "ADD",
            payload: {
                list: newData
            }
        })
    }
    const remove = (data) => {
        const newData = state.filter(item => item.id !== data.id)
        dispatch({
            type: "REMOVE",
            payload: {
                list: newData
            }
        })
    }
    
    const value = {
        list: state.list,
        cartLen: state.list.length,
        total: state.total,
        add,
        remove,
    }

    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)