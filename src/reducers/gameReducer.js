import {ATTACK, GET_GAMES} from "../action"
import {UPDATE_GAMES} from "../action"

export default function (state =[], action={}){
    switch(action.type){
        case ATTACK:
            return action.payload
        case UPDATE_GAMES:
            return action.payload
        case GET_GAMES:
            return action.payload
        default:
            return state
    }
}