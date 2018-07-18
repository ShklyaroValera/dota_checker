import React, { Component } from 'react'
import Hero from './Hero'
import Table from './Table'
import { getHero } from '../../api/heroes'

export default class BestHeroes extends Component { 

    getData = () => {
        const data = []

        this.props.heroes.forEach(hero => {
            data.push({
                hero: getHero(hero.hero_id),
                games: hero.games,
                wins: hero.win,
                losses: (hero.games - hero.win),
                winrate: `${((hero.win/hero.games)*100).toFixed(1)} %`
            })
        })

        return data
    }

    titles = ["hero", "games", "wins", "losses", "winrate"]

    render() {
        console.log(this.props.heroes)
        return(
            <div>
                {
                    <Table titles={this.titles} data={this.getData()} />
                }
            </div>
        )
    }
}