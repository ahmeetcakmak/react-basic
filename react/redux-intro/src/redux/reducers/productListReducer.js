import * as actionTypes from '../actions/actionTypes'
import innitialState from './innitialState';

export default function productListReducer(state=innitialState.products,action){
    
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_SUCCESS:
               return action.payload          
            
    
        default:
            return state;
    }
}