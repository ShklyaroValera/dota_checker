const api = "https://api.opendota.com/api"

export const getMatch = async (id) => {
    const data = await fetch(`${api}/matches/${id}`)
    const match = await data.json()
    return match.error ? [] : match
}