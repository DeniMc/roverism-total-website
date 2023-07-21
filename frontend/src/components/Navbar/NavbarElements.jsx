import React from 'react'
import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'


export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#2b392b' : '#000')};
    position: fixed;
    width: 100%;
    height: 12vh;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000p) /2);
    z-index: 1000;
    `

    export const NavLink = styled(Link)`
        color: #fff;
        display: flex;
        align-items: center;
        text-decoration: none;
        font-size: 1.35rem;
        padding: 0 1rem;
        height: 100%;
        cursor: pointer;

        &.active {
            color: #BF40BF
        }
        &:hover {
            transition: all 0.2s ease-in-out;
            color: #228B22;
            border-bottom: 5px solid #228B22;
        }
    `


export const Bars = styled(FaBars)`
    display: none;
    color: #fff;
    margin-top: 6.5%;
    margin-right: 5%;

    
    

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate()(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
    
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }

    `

    export const NavBtnLink = styled(Link)`
        border-radius: 4px;
        background: #BF40BF;
        padding: 10px 22px;
        color: #fff;
        border: none;
        outline: none;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        text-decoration: none;

        &:hover {
            transition: all 0.2s ease-in-out;
            background: #228B22;
            color: #010606
        }
    `

