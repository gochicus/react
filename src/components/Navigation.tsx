import React from 'react'
import { css,jsx } from  '@emotion/core'
import styled from "@emotion/styled";
import {MenuButton} from "../ui/Navigation/MenuButton";
import {Booster} from "../ui/Navigation/Booster";
import {HeaderPlate} from "../ui/Navigation/HeaderPlate";
import {Search} from "../ui/Navigation/Search";
import {Bell} from "../ui/Navigation/Bell";
import {Profile} from "../ui/Navigation/Bell";
import {Balance} from "../ui/Navigation/Bell";
import {Main} from "../ui/theme/Main";


function  Navigation(){
    return (
        <div>
            <MenuButton></MenuButton>
            <Booster></Booster>
            <HeaderPlate></HeaderPlate>
            <Search></Search>
            <Bell></Bell>
            <Profile></Profile>
            <Balance></Balance>
        </div>
    )


}
export default Navigation