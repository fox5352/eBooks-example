export const userReducer = (state, action) => {
  const {type, payload} = action

  switch (type) {
    case "SET_DATA":{
        return {
            ...state,
            id: payload.id,
            token: payload.token
        }
    }case 'LOGOUT':{
        return{
            ...state,
            id: null,
            token: null
        }
    }default:{
        throw new Error('method nowt found in userReducer')
    }
  }
}
