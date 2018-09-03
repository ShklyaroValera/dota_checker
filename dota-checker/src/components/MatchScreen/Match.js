import React, { Component } from 'react'
import styled from 'styled-components'
import Loading from '../Loading'
import { getMatch } from '../../api/matches'
import {  getHero } from '../../api/heroes'
import Table from '../Overview/Table'

export default class Match extends Component {

    state = {
        matchData: {},
        loading: true
    }
    
    componentDidMount = async () => {
        const id = this.props.match.params.id
        const match = await getMatch(id)
        this.setState({
            matchData: {
                radiantScore: { score: match.radiant_score, class: "radiant" },
                direScore: { score: match.dire_score, class: "dire" },
                duration: `${(match.duration/60).toFixed(0)}:${(match.duration%60 < 10) ? `0${match.duration%60}` : match.duration%60}`,
                win: match.radiant_win ? { text: "Radiant Victory", class: "radiant" } : { text: "Dire Victory", class: "dire" },
                skill: (match.skill === 1) ? "Normal Skill" : (match.skill === 2) ? "Hight Skill" : "Very Hight Skill",
                radiantTeam: match.players.slice(0,5).map(player => {
                    return {
                        player: {
                            name: player.personaname ? ((player.personaname.length <= 10) ? player.personaname : `${player.personaname.slice(0,10)}...`) : "NoInfo",
                            img: getHero(player.hero_id).img,
                            id: player.account_id
                        },
                        lvl: player.level,
                        kills: player.kills,
                        death: player.deaths,
                        assists: player.assists,
                        gpm: player.gold_per_min,
                        xpm: player.xp_per_min,
                        lh: player.last_hits,
                        dn: player.denies,
                        hd: player.hero_damage,
                        hh: player.hero_healing,
                        td: player.tower_damage
                    }
                }),
                direTeam: match.players.slice(5,10).map(player => {
                    return {
                        player: {
                            name: player.personaname ? ((player.personaname.length <= 10) ? player.personaname : `${player.personaname.slice(0,10)}...`) : "NoInfo",
                            img: getHero(player.hero_id).img,
                            id: player.account_id
                        },
                        lvl: player.level,
                        kills: player.kills,
                        death: player.deaths,
                        assists: player.assists,
                        gpm: player.gold_per_min,
                        xpm: player.xp_per_min,
                        lh: player.last_hits,
                        dn: player.denies,
                        hd: player.hero_damage,
                        hh: player.hero_healing,
                        td: player.tower_damage
                    }
                })
            },
            loading: false
        })
        console.log(match)
        console.log(this.state)
    }

    render() {
        const { matchData, loading } = this.state
        const titles = ["player", "lvl", "k", "d", "a", "gpm", "xpm", "lh", "dn", "hd", "hh", "td"]

        return (
            loading ?
            <Loading />
            :
            <Wrapper>
                <MatchInfo>
                    <Win className={matchData.win.class}>{matchData.win.text}</Win>
                    <Info>
                        <Score className={matchData.radiantScore.class}>{matchData.radiantScore.score}</Score>
                        <Score>{matchData.duration}</Score>
                        <Score className={matchData.direScore.class}>{matchData.direScore.score}</Score>
                    </Info>
                    <Info>
                        <Column>
                            <ColumnTitle>MATCH ID</ColumnTitle>
                            <ColumnValue>{this.props.match.params.id}</ColumnValue>
                        </Column>
                        <Column>
                            <ColumnTitle>SKILL</ColumnTitle>
                            <ColumnValue>{matchData.skill}</ColumnValue>
                        </Column>
                    </Info>
                </MatchInfo>
                <Players>
                    <Table data={matchData.radiantTeam} titles={titles} path="/players" tableName="Radiant Team" />
                    <Table data={matchData.direTeam} titles={titles} path="/players" tableName="Dire Team" />
                </Players>
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(100% - 80px);
    padding: 40px;
    color: #DCDCDC;
`

const MatchInfo = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    border-bottom: 1px solid #838383;
`

const Win = styled.div`
    display: flex;
    font-size: 30px;
    padding: 20px;

    &.radiant{
        color: #66bb6a;
    }

    &.dire{
        color: #FF4C4C;
    }
`

const Info = styled.div`
    display: flex;
`

const Score = styled.div`
    font-size: 40px;
    padding: 20px;

    &.dire{
        color: #FF4C4C;
        font-size: 50px;
    }

    &.radiant{
        color: #66bb6a;
        font-size: 50px;
    }
`

const Column = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
`

const ColumnTitle = styled.div`
    font-size: 12px;
    color: #DCDCDC;
`

const ColumnValue = styled.div`
    font-size: 16px;
`

const Players = styled.div`
    display: flex;
    flex-direction: column;
`