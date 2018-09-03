import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default class Search extends Component {
    state = {
        id: ''
    }

    render () {
        return (
            <Wrapper>
                <Text>
                    Enter id here
                </Text>
                <StyledInput 
                    type="text"
                    value={this.state.id}
                    onChange={e => this.setState({ id: e.target.value })}    
                />
                <StyledLink to={{ pathname: `/players/${this.state.id}/overview`}}>Search</StyledLink>
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center; 
    justify-content: center; 
    overflow: auto;
`

const Text = styled.div`
    color: #DCDCDC;
    font-size: 32px;
    padding-bottom: 10px;
`

const StyledInput = styled.input`
    width: 40%;
    height: 40px;
    padding: 5px;
    margin: 10px;
    border: none;
    border-bottom: 1px solid #838383;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    background-color: #1C242D;
    color: #DCDCDC;
    font-size: 32px;
    text-align: center;
    outline: none;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    width: 20%;
    height: 40px;
    background-color: rgb(25, 32, 35);
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    text-align: center;
    padding: 10px;
    font-size: 28px;
    color: #DCDCDC;
`