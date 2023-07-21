const filterReducer = (state, action) => {
    const {type, payload} = action

    switch (type) {
        case "PRODUCT_LIST":{
            return{
                ...state
            }
        }case "SORT_BY":{
            return{
                ...state
            }
        }case "RATING":{
            return{
                ...state
            }
        }case "BEST_SELLER":{
            return{
                ...state
            }
        }case "IN_STOCK":{
            return{
                ...state
            }
        }case "CLEAR":{
            return{
                ...state
            }
        }default:
            throw new Error("this method is not in filterReducer")
    }    
}

export default filterReducer