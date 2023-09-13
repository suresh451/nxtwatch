import {FailureHeading, FailureContainer,} from './styledComponents'
import NxtWatchThemeContext from '../../context/NxtWatchThemeContext'
import './index.css'

const FailedView = props => {
    const {onRetry} = props

    const onClickRetryBtn = () => {
        onRetry()
    }

    return (
        <NxtWatchThemeContext.Consumer>
        {value => {
            const {isDark} = value
            const headingColor = isDark ? '#f9f9f9' : '#1e293b'

            const failureImgUrl = isDark 
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png' 

            return (
                <FailureContainer>
                    <img src={failureImgUrl} className="" alt="failure view" />
                    <FailureHeading headingColor={headingColor}>Oops! something went wrong</FailureHeading>
                    <p>We are having some truoble to completing to your request</p>
                    <button type="button" onClick={onClickRetryBtn}>
                        Retry
                    </button>
                </FailureContainer>
            )
        }}
        </NxtWatchThemeContext.Consumer>
    )
    
            
}
export default FailedView