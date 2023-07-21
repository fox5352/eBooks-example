import { createContext, useContext, useReducer } from 'react'
import filterReducer from "./filterReducer";
import { useFetch } from "../../hooks/useFetch";

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


    const values = {
        list: state.list,
        onlyInStock: state.onlyInStock,
        onlyBestSeller: state.onlyBestSeller,
        sortBy: state.sortBy,
        rating: state.rating,
    }

    return(
        <FilterContext.Provider value={values}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => useContext(FilterContext)