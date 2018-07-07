import React from 'react'
import styled from 'styled-components'

const Stats = ({data}) => (
    <Stat>
        {Object.keys(data).map((key) => (
            <Item key={key}>
                <Label>{data[key].title}</Label>
                <Count className={data[key].className}>{data[key].isPercent?`${data[key].value}%` : data[key].value}</Count>
            </Item>))}
    </Stat>
)

const Stat = styled.div`
    display: flex;
`

const Item = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px 40px 0 0;
`

const Label = styled.div`
    font-size: 20px;
    text-transform: uppercase;
`

const Count = styled.div`
   font-size: 30px;

   &.wins {
       color: green;
   }

   &.losses {
       color: red;
   } 

   &.defaultStat {
       color: black;
   }
`


export default Stats