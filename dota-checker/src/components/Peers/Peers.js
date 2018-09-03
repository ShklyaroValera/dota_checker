import React, { Component } from 'react'
import Loading from '../Loading'
import Table from '../Overview/Table'
import { getPlayerPeers } from '../../api/player'

export default class Peers extends Component {
    
    state = {
        peers: [],
        titles: ['player', 'matches', 'winrate', 'against', 'wins against'],
        loading: true
    }

    componentDidMount = async () => {
        const id = this.props.match.params.id
        const peers = await getPlayerPeers(id)

        this.setState({
            peers: peers.map(peer => {
                return {
                    player: {
                        name: peer.personaname,
                        img: peer.avatar,
                        id: peer.account_id
                    },
                    matches: peer.with_games,
                    winrate: `${(peer.with_win/peer.with_games*100).toFixed(1)}%`,
                    against: peer.against_games,
                    againstWins: peer.against_win
                }
            }),
            loading: false
        })
    }
    
    render() {
        const { peers, titles, loading } = this.state
        return (
            loading ? 
            <Loading />
            :
            <Table data={peers} titles={titles} path="/players" />
        )
    }
}