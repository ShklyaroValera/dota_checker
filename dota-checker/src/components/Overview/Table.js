import React from 'react'
import styled from 'styled-components'

const Table = ({titles, data}) =>(
    <Wrapper>
        <Titles>{titles.map((title,i) => (<Item key={i} className={`${title} titles`}>{title}</Item>))}</Titles>
        {data.map((item,i) => (
            <Data key={i}>
                {Object.keys(item).map(title =>(
                    title === "hero" ?
                    (
                        <Item key={item[title]} className={title}>
                            <Image src={item[title].img} />
                            {item[title].name}
                        </Item>
                    )
                    :
                    <Item key={item[title]} className={title}>{item[title]}</Item>

                ))}
            </Data>
        ))}
    </Wrapper>
)

const Wrapper = styled.div`
    width: 50%;
    padding: 10px;
    background-color: #1C242D;
`

const Item = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    padding: 7px;
    color: rgb(102, 187, 255);
    align-items: center;

    &.hero {
        flex: 2;
        color: rgb(102, 187, 255);
    }

    &.games {
        color: rgb(102, 187, 255);
    }

    &.wins {
        color: green;
    }

    &.losses {
        color: red;
    }

    &.winrate {
        color: rgb(102, 187, 255);
    }

    &.titles {
        color: #DCDCDC
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

export default Table