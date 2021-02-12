import {data} from '../../data'

const INITIAL_STATE = {
    bookList:data,
    card:[]
} 
export const reducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case 'ADD_BASKET':
            return {...state, card : [...state.card, action.payload]}
        case 'REMOVE_BASKET':
            return  { ...state, card: state.card.filter(
                        i => i.id !== action.payload.id
                    )}
        default: 
            return state
    }
}