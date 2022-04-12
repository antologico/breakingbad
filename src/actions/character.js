/* istanbul ignore file */
import {
    CHARACTERES_FETCH_SUCCEEDED,
    CHARACTERES_FETCH_REQUESTED,
    CHARACTER_FETCH_SUCCEEDED,
    CHARACTER_FETCH_REQUESTED,
} from '../constants/Types'


export const fetchCharacteres = () => ({
    type: CHARACTERES_FETCH_REQUESTED,
})

export const updateCharacteres = (characteres) => ({
    type: CHARACTERES_FETCH_SUCCEEDED,
    characteres,
})


export const fetchCharacter = (id) => ({
    type: CHARACTER_FETCH_REQUESTED,
    id,
})

export const updateCharacter = (character) => ({
    type: CHARACTER_FETCH_SUCCEEDED,
    character,
})
