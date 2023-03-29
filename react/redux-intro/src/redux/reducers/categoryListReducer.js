import * as actionTypes from '../actions/actionTypes'
import innitialState from './innitialState';

export default function changeCategoryReducer(state=innitialState.categories,action){
    switch (action.type) {
        case actionTypes.GET_CATEGORIES_SUCCESS:
               return action.payload          
            
    
        default:
            return state;
    }
}