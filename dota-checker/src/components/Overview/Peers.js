import React, { Component } from 'react'
import Table from './Table'

export default class Peers extends Component {

    titles = ['player', 'matches', 'winrate']

    render() {
        const data = this.props.peers.map(peer => {
            return {
                player: {
                    name: peer.personaname,
                    img: peer.avatar,
                    id: peer.account_id
                },
                matches: peer.with_games,
                winrate: `${(peer.with_win/peer.with_games*100).toFixed(1)}%`
            }
        })

        return (
            <Table data={data} titles={this.titles} tableName="Peers" path="/players" />
        )
    }
}
