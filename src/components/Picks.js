import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Picks = () => {
  const [picks, setPicks] = useState([]);

  useEffect(()=>{
      getPicks();
  },[])

  const getPicks = async()=>{
      const check = localStorage.getItem('picks');
      if(check){
        setPicks(JSON.parse(check))
      }
      else{
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`)
      const data = await api.json();
      localStorage.setItem("picks",JSON.stringify(data.recipes))
      setPicks(data.recipes)
      console.log(data)
      }
  }
  return (
    <div>
       <Wrapper >
        <h2>Vegetarian picks</h2>
            <Splide options={{
              perPage : 4,
              arrows : false,
              pagination : false,
              drag : "free",
              gap : "5rem"
            }}
            >
              {picks?.map((recipe)=>{
                return(
                  <SplideSlide key={recipe.id}>
                <Card >
                <img src={recipe.image} alt={recipe.title} />
                <Gradient/>
                <h5>{recipe.title}</h5>

                </Card>
                </SplideSlide>
                
                )
              })}
              </Splide>
            </Wrapper>
        
    </div>
  )
}

const Wrapper = styled.div `
  margin: 4rem 0rem;
`

const Card  = styled.div`
  min-height: 15rem;
  overflow: hidden;
  position: relative;
  border-radius: 2rem;
  

  img{
    border-radius: 2rem;
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h5{
    z-index: 10;
    position: absolute;
    color: white;
    text-align: center;
    font-size: 1rem;
    height: 40%;
    width: 100%;
    transform: translate(-50%, 0%);
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    left: 50%;
    bottom: 0%;
  }
`

const Gradient = styled.div `
  z-index: 3;
  position: absolute;
  height: 100%;
  width: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`

export default Picks
