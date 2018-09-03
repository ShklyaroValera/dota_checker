import React from 'react'
import styled from 'styled-components'
import Loader from 'react-loader-spinner'

const Loading = () => (
    <Wrapper>
        <Loader
            type="Oval"
            color="#DCDCDC"
            height="60"	
            width="60"
        />
    </Wrapper>
)

const Wrapper = styled.div`
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

export default Loading