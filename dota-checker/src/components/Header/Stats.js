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
    padding: 20px 30px 0 0;
`

const Label = styled.div`
    font-size: 16px;
    text-transform: uppercase;
`

const Count = styled.div`
   font-size: 20px;

   &.wins {
       color: #66bb6a;
   }

   &.losses {
       color: #FF4C4C;
   } 

   &.defaultStat {
       color: #DCDCDC;
   }
`


export default Stats