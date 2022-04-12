
export default function updateCharacter(characterData = {}, characterLoaded, characteres = []) {
    if (!characterData) {
        return characteres
    }
    const found = characteres.find(item => (item.data.id === characterData.id))
    if (!found) {
        return [...characteres, {
            data: characterData,
            loaded: characterLoaded,
        }]
    }
    return [...characteres].map(item => (item.data.id === characterData.id) 
        ? ({
            data: {
                ...item.data,
                ...characterData,
            },
            loaded: characterLoaded,
        })
        : item
    )
}