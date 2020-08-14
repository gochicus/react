import React from "react"
import {css, jsx} from '@emotion/core'
import Navigation from "./Navigation";
import ImageBoard from "./ImageBoard";

function App() {

    const nav =<Navigation/>;
    const img = <ImageBoard/>;
    return nav & img;

}

export default App