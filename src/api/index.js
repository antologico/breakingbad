export async function fetchCharacteres () {
    const items = await fetch("https://breakingbadapi.com/api/characters")
    const data = await items.json()
    console.log(data)
    return data.map(item => ({
        id: item.char_id,
        name: item.name,
    }))
}

export async function fetchCharacter (id) {
    const items = await fetch(`https://breakingbadapi.com//api/characters/${id}`)
    const data = await items.json()
    return {
        id,
        ...data,
    }
}
