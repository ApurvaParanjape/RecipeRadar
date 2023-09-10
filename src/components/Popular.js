import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Popular = () => {
    const [popular, setPopular] = useState([]);

    useEffect(()=>{
        trending();
    },[])

    const trending = async()=>{
        const check = localStorage.getItem('popular');
        if(check){
          setPopular(JSON.parse(check))
        }
        else{
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
        const data = await api.json();
        localStorage.setItem("popular",JSON.stringify(data.recipes))
        setPopular(data.recipes)
        console.log(data)
        }
    }
  return (
    <div>
          <Wrapper >
            <h2>Popular Picks</h2>
            <Splide options={{
              perPage : 4,
              arrows : false,
              pagination : false,
              drag : "free",
              gap : "5rem"
            }}
            >
              {popular?.map((recipe)=>{
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


export default Popular
