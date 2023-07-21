const filterReducer = (state, action) => {
    const {type, payload} = action

    switch (type) {
        case "PRODUCT_LIST":{
            return{
                ...state,
                list: payload.list
            }
        }case "SORT_BY":{
            return{
                ...state,
                sortBy: payload
            }
        }case "RATING":{
            return{
                ...state,
                rating: payload
            }
        }case "BEST_SELLER":{
            return{
                ...state,
                onlyBestSeller: payload
            }
        }case "IN_STOCK":{
            return{
                ...state,
                onlyInStock: payload
            }
        }case "CLEAR":{
            return{
                ...state,
                ...payload
            }
        }default:
            throw new Error("this method is not in filterReducer")
    }    
}

export default filterReducer