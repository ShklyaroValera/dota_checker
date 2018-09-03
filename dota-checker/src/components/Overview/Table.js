import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Pagination from './Pagination'

class Table extends Component {

    state = {
        currentPage: 1
    }

    goToPage = (page) => {
        this.setState({ currentPage: page })
    }

    render() {
        const { tableName, titles, data, path } = this.props
        const { currentPage } = this.state
        return (
            <Wrapper>
                <TableName>{tableName}</TableName>
                <Titles>{titles.map((title) => (<Item key={title} className={`${title} titles`}>{title}</Item>))}</Titles>
                {data.slice((currentPage-1)*20,currentPage*20).map((item, i) => (
                    <Data key={`${currentPage} ${i}`}>
                        {Object.keys(item).map((title, i) =>(
                            (title === "hero" || title === "player") ?
                            (
                                <StyledLink to={(title === "player") ? `${path}/${item[title].id}/overview` : `${path}/${item[title].id}`} key={item[title].name} className={title}>
                                    <Image src={item[title].img} />
                                    {item[title].name}
                                </StyledLink>
                            )
                            :
                            <Item key={i} className={`${title} ${item[title]}`}>{item[title]}</Item>
                        ))}
                    </Data>
                ))}
                {
                    (data.length > 20) ?
                    <Pagination currentPage={currentPage} pages={Math.ceil(data.length/20)} goToPage={this.goToPage} />
                    :
                    null
                }
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    flex: 1;
    padding: 10px;
    background-color: #1C242D;
`

const TableName = styled.div`
    color: #DCDCDC;
    font-size: 24px;
    padding: 0 0 14px 14px;
`

const Item = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    padding: 7px;
    font-size: 14px;
    color: rgb(102, 187, 255);
    align-items: center;

    &.hero {
        flex: 2;
        color: rgb(102, 187, 255);
    }

    &.player {
        flex: 2;
    }

    &.games {
        color: rgb(102, 187, 255);
    }

    &.wins {
        color: #66bb6a;
    }

    &.win {
        color: #66bb6a;
        text-transform: capitalize;
    }

    &.losses {
        color: #FF4C4C;
    }

    &.loss {
        color: #FF4C4C;
        text-transform: capitalize;
    }

    &.winrate {
        color: rgb(102, 187, 255);
    }

    &.titles {
        color: #DCDCDC;
    }
`

const Titles = styled.div`
    display: flex;
    flex-direction: row;
    text-transform: uppercase;
    background-color: rgb(25, 32, 35);
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
`

const Data = styled.div`
    display: flex;
    flex-direction: row;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
`

const Image = styled.img`
    height: 25px;
    margin-right: 8px;
`

const StyledLink = styled(Link)`
    display: flex;
    flex: 2;
    flex-direction: row;
    padding: 7px;
    font-size: 14px;
    color: rgb(102, 187, 255);
    align-items: center;    
`

export default Table