
const ADD_BASKET = 'ADD_BASKET'
const REMOVE_BASKET ='REMOVE_BASKET'

// sebete elave et actionu
export const addBasket = book =>{
    return {
        type: ADD_BASKET,
        payload: book
    }
}
// sebetden sil actionu
export const removeBasket = id =>{
    return {
        type: REMOVE_BASKET,
        payload: id
    }
}


