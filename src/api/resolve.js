/* istanbul ignore file */
async function resolve (url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        if (!data || data.length === 0) {
            return null
        }
        return data
    } catch(_err) {
        return null
    }
}

export default resolve
