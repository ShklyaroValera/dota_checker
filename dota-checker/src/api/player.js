const api = "https://api.opendota.com/api"

export const getProfileData = async (id) => {
    const playerReq = fetch(`${api}/players/${id}`)
    const wlReq = fetch(`${api}/players/${id}/wl`)
    const [player1, wl1] = await Promise.all([playerReq, wlReq]).then((results) => 
        results.map(res => res.json()
    ))

    const player = await player1
    const wl = await wl1

    return {
        avatar: player.profile.avatarfull,
        name: player.profile.personaname,
        stats: {    
            wins: wl.win,
            loses: wl.lose,
            estimateMmr: player.mmr_estimate.estimate
        }
    }
}

export const getPlayerHeroes = async (id) => {
    const heroes = await fetch(`${api}/players/${id}/heroes`)
    
    return heroes.json()
}