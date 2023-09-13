import styled from 'styled-components/macro'

export const GameListItem = styled.li`
    display: flex;
    flex-direction: column;
    padding: 10px;
`

export const GameHead = styled.h1`
    font-size:18px;
    color: ${props => props.color}
`

export const GameImage = styled.img`
    width:200px;
`