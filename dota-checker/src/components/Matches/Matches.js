import React, { Component } from 'react'
import Loading from '../Loading'
import { getPlayerMatches } from '../../api/player'
import { getHero } from '../../api/heroes' 
import Table from '../Overview/Table'

export default class Matches extends Component {

    state = {
        matches: [],
        titles: ['hero', 'team', 'skill', 'party', 'result', 'duration', 'kda'],
        loading: true
    }

    componentDidMount = async () => {
        const id = this.props.match.params.id
        const matches = await getPlayerMatches(id)

        this.setState({
            matches: matches.map(match => {
                return {
                    hero: {
                        name: getHero(match.hero_id).name,
                        img: getHero(match.hero_id).img,
                        id: match.match_id
                    },
                    team: (match.player_slot >= 100) ? 'Dire' : 'Radiant',
                    skill: (match.skill === 1) ? 'Normal Skill' : (match.skill === 2) ? 'Hight Skill' : (match.skill === 3) ? 'Very Hight Skill' : 'Unknown skill',
                    partySize: (match.party_size === 1) ? 'Solo' : match.party_size ? match.party_size : "-", 
                    result: (match.player_slot >= 100) ? (!match.radiant_win ? 'win' : 'loss') : (match.radiant_win ? 'win' : 'loss'),
                    duration: `${(match.duration/60).toFixed(0)}:${(match.duration%60 < 10) ? `0${match.duration%60}` : match.duration%60}`,
                    kda: `${match.kills}/${match.deaths}/${match.assists}`
                }
            }),
            loading: false
        })
    }

    render() {
        const { loading, matches, titles } = this.state
        return (
            loading ? 
            <Loading />
            :
            <Table data={matches} titles={titles} path="/matches" />
        )
    }
}