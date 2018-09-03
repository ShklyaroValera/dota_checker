import React, { Component } from 'react'
import Loading from '../Loading'
import { getProfileData } from '../../api/player'
import styled from 'styled-components'
import { NavLink, Link } from 'react-router-dom'

import Stats from './Stats'

export default class Header extends Component {

    state = {
        playerData: {},
        name: '',
        avatar: '',
        loading: true,
        empty: false
    }

    loadHeader = async () => {
        this.setState({ loading: true })
        const playerData = await getProfileData(this.props.id)
        if (!playerData.stats) {
            this.setState({ 
                empty: true,
                loading: false
            })
        } else {
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
                loading: false,
                empty: false
            })
        }
    }

    componentDidMount = () => { 
        this.loadHeader()
    }

    componentDidUpdate = (prevProps) => {
        if(this.props.id !== prevProps.id ) this.loadHeader()    
    }
    

    render() {
        const { playerData, avatar, name, loading, empty } = this.state   

        return (
            loading ?
            <Loading />
            :
            empty ?
            (
            <div>
                <NoInfoDiv>No profile information </NoInfoDiv>
                <StyledLink to="/">To Search</StyledLink>
            </div>
            )
            :
            (
            <div>
                <Container>
                    <Avatar src={avatar} />
                    <Info>
                        <Name>{name}</Name>
                        <Stats data={playerData} />
                    </Info>
                </Container>
                <Navigation>
                    <NavigationLink to={`/players/${this.props.id}/overview`} activeClassName="active">Overview</NavigationLink>
                    <NavigationLink to={`/players/${this.props.id}/matches`} activeClassName="active">Matches</NavigationLink>
                    <NavigationLink to={`/players/${this.props.id}/heroes`} activeClassName="active">Heroes</NavigationLink>
                    <NavigationLink to={`/players/${this.props.id}/peers`} activeClassName="active">Peers</NavigationLink>
                </Navigation>
                <StyledLink to="/">To Search</StyledLink>
            </div>
            )
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

const Navigation = styled.div`
    display: flex;
    margin: 12px;
    border-bottom: 1px solid #838383;
`

const NavigationLink = styled(NavLink)`
    color: #DCDCDC;
    padding: 15px 35px 15px 35px;
    font-size: 18px;
    /* border-bottom: 1px solid #838383; */
    text-decoration: none;

    &.active {
        border-bottom: 2px solid;
        border-color: rgb(102, 187, 255);
    }
`

const StyledLink = styled(Link)`
    z-index: 1;
    position: fixed;
    right: 10px;
    top: 10px;
    text-decoration: none;
    color: #DCDCDC;
`

const NoInfoDiv = styled.div`
    z-index: 1;
    background-color: #1C242D;
    color: #DCDCDC;
    font-size: 24px;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    align-content: center; 
    justify-content: center; 
    overflow: auto;
`