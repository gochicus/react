import React from 'react'
import {css, jsx} from '@emotion/core';
import {ImgBlock} from "../ui/ImageBoard/ImageBlock";
import {Textblock} from "../ui/ImageBoard/Textblock";

function ImageBoard() {
    return(<div>
        <ImgBlock>
            <Textblock></Textblock>
        </ImgBlock>
    </div>);

}
export default ImageBoard