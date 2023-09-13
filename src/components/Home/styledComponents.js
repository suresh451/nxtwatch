import styled from 'styled-components/macro' 

export const HomeDiv = styled.div`
    backgroundColor:${props => props.bgColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    color:${props => props.textColor}
    padding: 10px;
    width:100%;
`

export const BannerDiv = styled.div`
    display:${props => props.bannerItem}
    background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
    justify-content: space-between;
    height: 200px;
    width: 100%;
    background-size:cover;
`