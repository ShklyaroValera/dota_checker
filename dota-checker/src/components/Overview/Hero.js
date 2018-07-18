import React from 'react'
import { getHero } from '../../api/heroes'


const Hero = ({hero}) => {
    return (
        <div>
            Hero: {getHero(hero.hero_id)}, Games: {hero.games}, Wins: {hero.win}
        </div>
    );
};

export default Hero