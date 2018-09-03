import heroes from '../data/heroes'

const api = "https://api.opendota.com/api"

export const getHero = (id) => {
    const hero = heroes.find((hero)=>(
        Number(hero.id) === Number(id)
    ))
    if (hero) {
        return {
            name: hero.localized_name,
            img: hero.url_small_portrait,
            full: hero.url_full_portrait
        }
    }
    return "Not a hero"   
}

export const getHeroInfo = async (id) => {
    const data = await fetch(`${api}/heroes`)
    const heroesInfo = await data.json()
    const heroInfo = heroesInfo.find((hero) =>(
        Number(hero.id) === Number(id)
    ))
    return heroInfo ? heroInfo : []
}