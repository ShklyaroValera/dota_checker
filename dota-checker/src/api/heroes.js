import heroes from '../data/heroes'

export const getHero = (id) => {
    return heroes[id-1]
    
}