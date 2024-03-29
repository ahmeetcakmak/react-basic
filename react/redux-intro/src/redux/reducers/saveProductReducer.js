import * as actionTypes from '../actions/actionTypes'
import innitialState from './innitialState';

export default function saveProductReducer(state=innitialState.savedProduct,action){
    switch (action.type) {
        case actionTypes.UPDATE_PRODUCT_SUCCESS:
               return action.payload    
         case actionTypes.CREATE_PRODUCT_SUCCESS:
               return action.payload      
        
        default:
            return state;
    }
}