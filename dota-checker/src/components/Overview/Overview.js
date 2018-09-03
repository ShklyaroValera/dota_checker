import React, { Component } from 'react'
import Loading from '../Loading'
import styled from 'styled-components'
import BestHeroes from './BestHeroes'
import RecentMatches from './RecentMatches'
import Peers from './Peers'
import { getPlayerHeroes, getPlayerRecentMatches, getPlayerPeers } from '../../api/player'

export default class Overview extends Component {

    state = {
        heroes: [],
        matches: [],
        peers: [],
        loading: true
    }

    loadContent = async () => {
        this.setState({ loading: true })
        const id = this.props.match.params.id
        const heroes = await getPlayerHeroes(id)
        const matches = await getPlayerRecentMatches(id)
        const peers = await getPlayerPeers(id)
        this.setState({ heroes, peers, matches, loading: false })
    } 

    componentDidMount = () => {
        this.loadContent()
    }

    componentDidUpdate = (prevProps) => {
        if(this.props.match.params.id !== prevProps.match.params.id) this.loadContent()
    }

    render() {
        const { heroes, peers, matches, loading } = this.state
        return(
            <div>
                {loading ? 
                <Loading />
                :
                <Wrapper>
                    <RecentMatches matches={matches} />
                    <DisplayColumn>
                        <BestHeroes heroes={heroes.slice(0,10)} />
                        <Peers peers={peers.slice(0,7)} />
                    </DisplayColumn>
                </Wrapper>
                }
            </div>
        )
    }
}

const Wrapper = styled.div`
    display: flex;
`

const DisplayColumn = styled.div`
    display: flex;
    flex: 2;
    flex-direction: column
`