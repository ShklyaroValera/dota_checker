import React, { Component } from 'react'
import Table from './Table'
import { getHero } from '../../api/heroes'

export default class RecentMatches extends Component {

    titles = ['hero', 'team', 'result', 'duration', 'kda']

    render() {
        const data = this.props.matches.map(match => {
            return {
                hero: {
                    name: getHero(match.hero_id).name,
                    img: getHero(match.hero_id).img,
                    id: match.match_id
                },
                team: (match.player_slot >= 100) ? 'Dire' : 'Radiant',
                result: (match.player_slot >= 100) ? (!match.radiant_win ? 'win' : 'loss') : (match.radiant_win ? 'win' : 'loss'),
                duration: `${(match.duration/60).toFixed(0)}:${(match.duration%60 < 10) ? `0${match.duration%60}` : match.duration%60}`,
                kda: `${match.kills}/${match.deaths}/${match.assists}`
            }
        })
        
        return (
            <div style={{ flex: 3 }}>
                <Table data={data} titles={this.titles} tableName="Recent Matches" path="/matches" />
            </div>
        )
    }
}
