import React from 'react'
import styled from 'styled-components'

const Pagination = ({currentPage, pages, goToPage}) => {
    return (
        <Wrapper>
            {(currentPage > 1) ? 
            (   <div style={{ display: "flex" }}>
                    <Item onClick={() => goToPage(1)}>First</Item>
                    <Item onClick={() => goToPage(currentPage-1)}>{"<"}</Item>
                </div>
            ) : null}
            <Item className="active">{currentPage}</Item>
            {(currentPage < pages) ? 
            (   <div style={{ display: "flex" }}>
                    <Item onClick={() => goToPage(currentPage+1)}>></Item>
                    <Item onClick={() => goToPage(pages)}>Last</Item>
                </div>
            ) : null}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 0 15px;
`

const Item = styled.div`
    color: rgb(102, 187, 255);
    font-size: 20px;
    padding: 0 10px 0 10px
    cursor: pointer;

    &.active {
        color: #DCDCDC;
        cursor: default;
    }
`

export default Pagination