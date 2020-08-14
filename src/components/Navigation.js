import React from 'react'
import { css,jsx } from  '@emotion/core'
const navigationStyle = css`
display:flex;
justify-content:space-between;
background-color:#00181D;
max-width:1440px;
height:64px;
`
function  Navigation(){
    return (<div css={navigationStyle}>
        <div>
            <div></div>
            <div>Booster.Games</div>
        </div>
        <div>
            <div>
                <div>Choose a game for boosting</div>
            </div>
        </div>
        <div>
            <div></div>
            <div></div>
            <div></div>
            <div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>)


}
export default Navigation