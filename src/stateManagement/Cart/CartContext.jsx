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

    const add_to_cart = (data) => {
        const newData = state.list.concat(data)
        dispatch({
            type: "ADD",
            payload: {
                list: newData
            }
        })
    }
    const remove_from_cart = (data) => {
        const newData = state.list.filter(item => item.id !== data.id)
        dispatch({
            type: "REMOVE",
            payload: {
                list: newData
            }
        })
    }
    const clear_cart = (data) => {
        dispatch({
            type: 'CLEAR_LIST',
            payload: ''
        })
    } 
    
    const getTotal = (list) => {
        let num = 0
        list.forEach(item => {
            num += Number(item.price)
        });
        return num
    }
    const value = {
        list: state.list,
        cartLen: state.list.length,
        total: getTotal(state.list),
        add_to_cart,
        remove_from_cart,
        clear_cart
    }

    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)