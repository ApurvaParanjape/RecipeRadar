import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Searchresult = () => {
  const [searchRes, setSearchRes] = useState([]);
  const params = useParams();

  const getSearch = async(item)=>{
    const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=8&query=${item}`)
    const data = await api.json();

    setSearchRes(data.results);
  }

  useEffect(()=>{
    getSearch(params.item)
  },[params.item])

  return (
    <Grid>
      {searchRes?.map((item)=>{
        return(
          <Card key={item.id}>
            <Link to={"/recipe/"+ item.id}>
            <img src={item.image} alt={item.title} />
            <h5>{item.title}</h5>
            </Link>
          </Card>
        )
      })}
    </Grid>
  )
}

const Grid = styled.div `
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem,1fr));
  grid-gap: 3rem;
`

const Card = styled.div `
  img{
    width: 100%;
    border-radius: 2rem;
  }

  a{
    text-decoration: none;
  }

  h5{
    text-align: center;
    padding: 1rem;
  }
`


export default Searchresult
