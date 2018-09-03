import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Overview from './components/Overview'
import Heroes from './components/Heroes'
import Peers from './components/Peers'
import Matches from './components/Matches'


const PlayerRoutes = () => (
    <Switch>
        <Route path="/players/:id/overview" component={Overview} />
        <Route path="/players/:id/heroes" component={Heroes} />
        <Route path="/players/:id/peers" component={Peers} />
        <Route path="/players/:id/matches" component={Matches} />   
    </Switch>
)

export default PlayerRoutes