const api = "https://api.opendota.com/api"

export const getProfileData = async (id) => {
    const playerReq = fetch(`${api}/players/${id}`)
    const wlReq = fetch(`${api}/players/${id}/wl`)
    const [player1, wl1] = await Promise.all([playerReq, wlReq]).then((results) => 
        results.map(res => res.json()
    ))

    const player = await player1
    const wl = await wl1

    return (player.profile && wl) ? {
        avatar: player.profile.avatarfull,
        name: player.profile.personaname,
        stats: {    
            wins: wl.win,
            loses: wl.lose,
            estimateMmr: player.mmr_estimate.estimate
        }
    } : "Not profile data"
}

export const getPlayerHeroes = async (id) => {
    const heroes = await fetch(`${api}/players/${id}/heroes`)
    const data = await heroes.json()
    return data.error ? [] : data
}

export const getPlayerRecentMatches = async (id) => {
    const matches = await fetch(`${api}/players/${id}/recentMatches`)
    const data = await matches.json()
    return data.error ? [] : data
}

export const getPlayerMatches = async (id) => {
    const matches = await fetch(`${api}/players/${id}/matches`)
    const data = await matches.json()
    return data.error ? [] : data
}

export const getPlayerPeers = async (id) => {
    const peers = await fetch(`${api}/players/${id}/peers`)
    const data = await peers.json()
    return data.error ? [] : data
}