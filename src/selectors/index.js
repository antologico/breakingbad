/* istanbul ignore file */
import { useSelector } from 'react-redux'

const getCharacter = (id) => useSelector(state => {
    if (!state.character.loading && state.character.data) {
        return (state.character.data||[]).find(item => (item.data.id === id) && item.loaded)
    }
    return null
})

const getCharacteres = () => useSelector(state => {
    if (state.character.loaded) {
        return state.character.data
    }
    return null
})

const getError = () => useSelector(state => state.character.error)
const getLoading = () => useSelector(state => state.character.loading)
const getLanguage = () => useSelector(state => state.language)

export {
    getCharacter,
    getCharacteres,
    getError,
    getLoading,
    getLanguage,
}