/* istanbul ignore file */
import {
    SET_LANGUAGE,
} from '../constants/Types'


export default function language(state = 'en', action) {
    switch (action.type) {
        case SET_LANGUAGE:
            return action.language
        default:
            return state
    }
}
  