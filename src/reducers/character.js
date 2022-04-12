/* istanbul ignore file */
import {
    CHARACTERES_FETCH_SUCCEEDED,
    CHARACTERES_FETCH_REQUESTED,
    CHARACTER_FETCH_SUCCEEDED,
    CHARACTER_FETCH_REQUESTED,
} from '../constants/Types'
import updateCharacter from './util/updateCharacter'

const initialState = {
  data: [],
  error: null,
  loading: false,
  loaded: false,
}
  
export default function character(state = initialState, action) {
    switch (action.type) {
        case CHARACTERES_FETCH_REQUESTED:
            return {
                ...state,
                loading: true,
            }
            
        case CHARACTERES_FETCH_SUCCEEDED:
            return {
                ...state,
                data: updateCharacter(
                    null,
                    false,
                    action.characteres.map((item) => ({
                        data: item,
                        loaded: false,
                    }))
                ),
                error: !action.characteres,
                loaded: true,
                loading: false,
            }
            
        
        case CHARACTER_FETCH_REQUESTED:
            return {
                ...state,
                data: updateCharacter(
                    { id:  parseInt(action.id), },
                    false,
                    state.data
                ),
                loading: true,
            }
        

        case CHARACTER_FETCH_SUCCEEDED:
            return {
                ...state,
                data: updateCharacter(
                    action.character,
                    true,
                    state.data
                ),
                error: !action.character,
                loading: false,
            }

        default:
            return state
    }
}
  