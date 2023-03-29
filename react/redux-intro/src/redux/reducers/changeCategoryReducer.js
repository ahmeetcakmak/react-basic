import * as actionTypes from '../actions/actionTypes'
import innitialState from './innitialState';

export default function changeCategoryReducer(state=innitialState.currentCategory,action){
    switch (action.type) {
        case actionTypes.CHANGE_CATEGORY:
               return action.payload          
            
    
        default:
            return state;
    }
}