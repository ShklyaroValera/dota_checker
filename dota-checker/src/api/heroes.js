import heroes from '../data/heroes'

export const getHero = (id) => {
    const hero = heroes.find((hero)=>(
        Number(hero.id) === Number(id)
    ))
    if (hero) {
        return {
            name: hero.localized_name,
            img: hero.url_small_portrait
        }
    }
    return "Not a hero"   
}