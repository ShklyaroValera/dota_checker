import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Player from './components/PlayerScreen'
import Hero from './components/HeroScreen'
import Match from './components/MatchScreen'
import Search from './components/Search'


const Routes = () => (
    <Switch>
        <Route path="/players" component={Player} />
        <Route path="/matches/:id" component={Match} />
        <Route path="/heroes/:id" component={Hero} />
        <Route path="/" component={Search} />
    </Switch>
)

export default Routes