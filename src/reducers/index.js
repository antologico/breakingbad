/* istanbul ignore file */
import { combineReducers } from 'redux'
import character from './character'
import language from './language'

const rootReducer = combineReducers({
    character,
    language,
})

export default rootReducer
