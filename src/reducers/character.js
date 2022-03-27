import {
    CHARACTERES_FETCH_SUCCEEDED,
    CHARACTERES_FETCH_REQUESTED,
    CHARACTER_FETCH_SUCCEEDED,
    FETCH_FAILED,
    CHARACTER_FETCH_REQUESTED,
} from '../constants/Types'

const initialState = {
  data: [],
  error: null,
  loading: false,
}


function updateCharacter(characterData = {}, characterStatus, characteres = []) {
    if (!characterData) {
        return characteres
    }
    return [...characteres].map(item => (item.data.id === characterData.id) 
        ? ({
            data: {
                ...item.data,
                ...characterData,
            },
            status: {
                ...item.status,
                ...characterStatus,
            }
        })
        : item
    )
}
  
export default function character(state = initialState, action) {
    console.log('ACTION', action)
    switch (action.type) {
        case CHARACTERES_FETCH_SUCCEEDED:
            return {
                ...state,
                data: updateCharacter(
                    null,
                    { loaded: false, loading: false },
                    action.characteres.map((item) => ({
                        data: item,
                        status: { 
                            loaded: false,
                            loading: false,
                        } }))
                ),
                error: false,
                loading: false,
            }
            
        
        case CHARACTER_FETCH_REQUESTED:
            return {
                ...state,
                data: updateCharacter(
                    { id: action.id },
                    { loaded: false, loading: true },
                    state.data
                ),
                error: false,
                loading: false,
            }
        
        case CHARACTERES_FETCH_REQUESTED:
            return {
                ...state,
                loading: true,
            }
            
        case CHARACTER_FETCH_SUCCEEDED:
            return {
                ...state,
                data: updateCharacter(
                    action.character,
                    { loaded: true, loading: false },
                    state.data
                ),
                error: false,
                loading: false,
            }
        
        case FETCH_FAILED:
            return {
                ...state,
                error: action.error,
                loading: false,
            }
            
        
    
        default:
            return state
    }
}
  