import React, { Component } from 'react'
import { getProfileData } from '../../api/player'
import styled from 'styled-components'

import Stats from './Stats'

export default class Header extends Component {

    state = {
        playerData: {},
        name: '',
        avatar: '',
        loading: true
    }

    componentDidMount = async () => {
        const playerId = 407902520 
        const playerData = await getProfileData(playerId)
        const winrate = (playerData.stats.wins/(playerData.stats.wins+playerData.stats.loses)*100).toFixed(2)
        this.setState({ playerData: {
                wins:{
                    className: 'wins',
                    isPercent: false,
                    value: playerData.stats.wins,
                    title: 'wins'
                },
                losses:{
                    className: 'losses',
                    isPercent: false,
                    value: playerData.stats.loses,
                    title: 'losses'
                },
                winrate:{
                    className: 'defaultStat',
                    isPercent: true,
                    value: winrate,
                    title: 'winrate'
                },
                estimateMmr:{
                    className: 'defaultStat',
                    isPercent: false,
                    value: playerData.stats.estimateMmr,
                    title: 'estimate mmr'
                }
            },
            name: playerData.name,
            avatar: playerData.avatar,
            loading: false
        })
    }
    

    render() {
        const { playerData, avatar, name, loading } = this.state   

        return (
            loading ?
            ('Loading...')
            :
            (<Container>
                <Avatar src={avatar} />
                <Info>
                    <Name>{name}</Name>
                    <Stats data={playerData} />
                </Info>
            </Container>)
        )
    }
}

const Container = styled.div`
    display: flex;
    width: calc(100% - 40px);
    padding: 20px;
    color: #DCDCDC;
    background-color: #1C242D;
`

const Avatar = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 100px;
`

const Name = styled.div`
    font-size: 28px;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 20px;
`