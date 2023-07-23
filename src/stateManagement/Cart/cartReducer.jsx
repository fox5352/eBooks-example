const cartReducer = (state, action) => {
    const {type, payload} = action

    switch (type) {
        case "ADD":{
            return{
                ...state,
                list: payload.list
            }
        }case 'REMOVE':{
            return{
                ...state,
                list: payload.list
            }
        }case 'SET_TOTAL':{
            return{
                ...state,
                total: payload.total
            }
        }
    
        default:
            throw new Error('method not found in cartReducer')
    }
}

export default cartReducer