import { createContext, useContext, useReducer } from 'react'
import filterReducer from "./filterReducer";

const initialFilter = {
    list: [],
    onlyInStock: false,
    onlyBestSeller: false,
    sortBy: null,
    rating: null
}


const FilterContext = createContext(initialFilter)

export const FilterProvider = ({children}) => {
    const [state, dispatch] = useReducer(filterReducer, initialFilter)

    // sets the initial value of the list
    const initialProducts = (data) => {
        dispatch({
            type: "PRODUCT_LIST",
            payload: {
                list: data
            }
        })
    }
    
    // updating filters state
    const toggleSort = (value) => {
        dispatch({
            type: "SORT_BY",
            payload: value
        })
    }
    const toggleInStock = (value) => {
        dispatch({
            type: "IN_STOCK",
            payload: !state.onlyInStock
        })
    }
    const toggleBestSeller = (value) => {
        dispatch({
            type: "BEST_SELLER",
            payload: !state.onlyBestSeller
        })
    }
    const setRating = (value) => {
        dispatch({
            type: "RATING",
            payload: value
        })
    }
    const clearFilter = () => {
        dispatch({
            type: "CLEAR",
            payload: {
                onlyInStock: false,
                onlyBestSeller: false,
                sortBy: null,
                rating: null
            }
        })
    }

    // filters
    const best_seller = (products) => { 
        return  state.onlyBestSeller ? products.filter(item=> item.best_seller === true): products
    }
    const in_stock = (products) => {
        return state.onlyInStock ? products.filter(item=> item.in_stock === true): products
    }
    const sort_by = (products) => {
        if (state.sortBy === "high") {
            return products.sort((a, b)=> Number(b.price) - Number(a.price))
        }
        if (state.sortBy === "low") {
            return products.sort((a, b)=> Number(a.price) - Number(b.price))
        }

        return products
    }
    const rating = (products) => {
        return state.rating ? products.filter(item=> item.rating >= state.rating): products
    }



    const filterList = () => rating(sort_by(in_stock(best_seller(state.list))))

    const values = {
        list: filterList(),
        onlyInStock: state.onlyInStock,
        onlyBestSeller: state.onlyBestSeller,
        sortBy: state.sortBy,
        rating: state.rating,
        initialProducts,
        toggleSort,
        toggleInStock,
        toggleBestSeller,
        setRating,
        clearFilter
    }

    return(
        <FilterContext.Provider value={values}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => useContext(FilterContext)