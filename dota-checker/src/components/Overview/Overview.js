import React, { Component } from 'react'
import BestHeroes from './BestHeroes'
import { getPlayerHeroes } from '../../api/player'

export default class Overview extends Component {

    state = {
        heroes: [],
        loading: true
    }

    componentDidMount = async () => {
        const id = 407902520
        const heroes = await getPlayerHeroes(id)
        this.setState({ heroes, loading: false })  
    }

    render() {
        const { heroes, loading } = this.state
        return(
            <div>
                {loading ? ("Loading...") : <BestHeroes heroes={heroes.slice(0,10)} />}
            </div>
        )
    }
}