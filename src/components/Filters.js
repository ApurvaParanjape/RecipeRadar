import {FaPizzaSlice, FaHamburger} from "react-icons/fa"
import {GiIndianPalace, GiNoodles} from "react-icons/gi"
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

import React from 'react'

const Filters = () => {
  return (
    <List>
      <StyleLink to={'/cusine/indian'}>
        <GiIndianPalace/>
        <p>Indian</p>
      </StyleLink>
      <StyleLink to={'/cusine/italian'}>
        <FaPizzaSlice/>
        <p>Italian</p>
      </StyleLink>
      <StyleLink to={'/cusine/american'}>
        <FaHamburger/>
        <p>American</p>
      </StyleLink>
      <StyleLink to={'/cusine/chinese'}>
        <GiNoodles/>
        <p>Chinese</p>
      </StyleLink>
    </List>
  )
}

const List = styled.div `
    margin: 2rem 0rem;
    display: flex;
    justify-content: center;
`
const StyleLink = styled(NavLink) `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-right: 2rem;
border-radius: 50%;
text-decoration: none;
height: 6rem;
width: 6rem;
transform: scale(0.8);
/* background-color: black; */
background: linear-gradient(45deg , grey, black);
cursor: pointer;

p{
    color: white;
    font-size: 0.8rem;
}
svg{
    color: white;
    font-size: 1.5rem;
}

&.active{
    background: linear-gradient(to right, orange, deeppink);
    /* background-color: pink; */
    svg{
        color: white;
    }

    p{
        color: white;
    }
}
`
export default Filters
