import React, { Component } from 'react'

import { getHero } from '../../api/heroes'

export default class BestHeroes extends Component {

    componentDidMount = () => {
        const hero = getHero(2)
        console.log(hero)
        
    }

    render() {
        return(
            <div>
                BestHeroes
            </div>
        )
    }
}