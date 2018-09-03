import React, { Component } from 'react'
import Loading from '../Loading'
import Table from '../Overview/Table'
import { getHero } from '../../api/heroes'
import { getPlayerHeroes } from '../../api/player'

export default class Heroes extends Component {

    state = {
        heroes: [],
        titles: ["hero", "games", "wins", "losses", "winrate", "with", "wins with", "against", "wins against"],
        loading: true
    }

    componentDidMount = async () => {
        const id = this.props.match.params.id
        const heroes = await getPlayerHeroes(id)

        this.setState({
            heroes: heroes.map(hero => {
                return {
                    hero: {
                        name: getHero(hero.hero_id).name,
                        img: getHero(hero.hero_id).img,
                        id: hero.hero_id
                    },
                    games: hero.games,
                    wins: hero.win,
                    losses: (hero.games - hero.win),
                    winrate: (hero.win/hero.games) ? `${((hero.win/hero.games)*100).toFixed(1)} %` : "-",
                    withGames: hero.with_games,
                    withWins: hero.with_win,
                    againstGames: hero.against_games,
                    againstWins: hero.against_win
                }
            }),
            loading: false
        })
    }


    render () {
        const { heroes, titles, loading } = this.state;
        return (
            loading ? 
            <Loading />
            :
            <Table data={heroes} titles={titles} path="/heroes" />        
        )
    }
}