import { createContext, useContext, useReducer } from "react"

import { userReducer } from "./userReducer"

const initialState = {
    id: JSON.parse(sessionStorage.getItem('cbid')) || null,
    token: JSON.parse(sessionStorage.getItem('token')) || null,
    loggedIn: false
}

const UserContext = createContext(initialState)

export const UserProvider = ({children}) => {
    const [state, dispatch] = useReducer(userReducer, initialState)

    const login = (id, token) => {
        dispatch({
            type: 'SET_DATA',
            payload: {
                id: id,
                token: token
            }
        })
        sessionStorage.setItem('token', JSON.stringify(token))
        sessionStorage.setItem('cbid', JSON.stringify(id))
    }
    const logout = () => {
        dispatch({
            type: "LOGOUT"
        })
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('cbid')
    }

    const loggedIn = (id, token) =>{
        if (id) {
            if (token) {
                return true
            }
            return false
        }
        return false
    }
    const value = {
        id: state.id,
        token: state.token,
        loggedIn: loggedIn(state.id, state.token),
        login,
        logout
    }

    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )

}

export const useUser = () => useContext(UserContext)