/* istanbul ignore file */
import {
    SET_LANGUAGE,
} from '../constants/Types'


export const setLanguage = (language) => ({
    type: SET_LANGUAGE,
    language,
})