import {ATTACK} from "../action"
import {DEFENSE} from "../action"
import {EVADE} from "../action"

export default function (state ={}, action={}){
    switch(action.type){
        case ATTACK:
            return{...state,...action.payload}
        
        case DEFENSE:
        return{...state,...action.payload}

        case EVADE:
            return{...state,...action.payload}
        
            default:
            return state
        }
}
