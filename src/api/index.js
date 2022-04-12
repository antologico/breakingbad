/* istanbul ignore file */
import resolve from './resolve'

export async function fetchCharacteres () {
    const data = await resolve(`https://breakingbadapi.com/api/characters`)
    return data ? data.map(item => ({
        id: item.char_id,
        name: item.name,
        image: item.img,
    })).sort((itemA, itemB) => itemA.name > itemB.name ? 1 : -1) : null
}

export async function fetchCharacter (id) {
    const data = await resolve(`https://breakingbadapi.com/api/characters/${id}`)
    const item = data && data[0]
    return item ? {
        id: parseInt(id),
        name: item.name,
        image: item.img,
        nickname: item.nickname,
        appearance: item.appearance,
        occupation: item.occupation,
        birthday: item.birthday,
        status: item.status,
        portrayed: item.portrayed,
    } : null
}
