import React from 'react'
import Header from '../Header'
import PlayerRoutes from '../../PlayerRoutes'

const Player = (props) => (
    <div>
        <Header  id={props.location.pathname.split('/')[2]} />
        <PlayerRoutes/>
    </div>
)

export default Player