import React from 'react'
import {css, jsx} from '@emotion/core'
const boardStyle = css(`
max-width:288px;
max-height:455px;
display:flex;
flex-direction:column;
justify-content:flex-end;
`)
function ImageBoard() {
    return <div css={boardStyle}>
        <div>
            <div>World
                of Warcraft</div>
            <div>classic</div>
        </div>
        <div>
            <div>World
                of Warcraft</div>
            <div>BFA</div>
        </div>
        <div>Fortnite</div>
        <div>Hearthstone</div>
        <div>Overwatch</div>
    </div>


}
export default ImageBoard