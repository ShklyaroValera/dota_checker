import React, { Component } from 'react'
import styled from 'styled-components'
import { getHero, getHeroInfo } from '../../api/heroes'
import Loading from '../Loading'

export default class Hero extends Component {

    state = {
        heroInfo: {},
        loading: true
    }
    
    componentDidMount = async () => {
        const id = this.props.match.params.id
        const hero = getHero(id)
        const heroInfo = await getHeroInfo(id)
        this.setState({
            heroInfo: {
                name: hero.name,
                img: hero.full,
                attackType: heroInfo.attack_type,
                primaryAttribute: (heroInfo.primary_attr === "int") ? "Intelligance" : (heroInfo.primary_attr === "str") ? "Strength" : "Agility",
                roles: heroInfo.roles
            },
            loading: false
        })
    }

    render() {
        const { loading, heroInfo } = this.state
        return (
            loading ?
            <Loading />
            :
            <Wrapper>
                <Avatar src={heroInfo.img} />
                <Info>
                    <Name>{heroInfo.name}</Name>
                    <Roles>Attack Type - {heroInfo.attackType}</Roles>
                    <Roles>Primary Attribute - {heroInfo.primaryAttribute}</Roles>
                    <Roles>Roles - {heroInfo.roles.join(" ")}</Roles>
                </Info>
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    display: flex;
    width: calc(100% - 80px);
    padding: 40px;
    color: #DCDCDC;
    background-color: #1C242D;
`

const Avatar = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 100px;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
`

const Name = styled.div`
    padding: 10px 40px;
    font-size: 55px;
    color: #DCDCDC;
`

const Roles = styled.div`
    font-size: 20px;
    font-style: italic;
    color: #DCDCDC;
    padding: 0 40px;
`