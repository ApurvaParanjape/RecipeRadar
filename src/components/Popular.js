import React, { useEffect, useState } from 'react'

const Popular = () => {
    const [popular, setPopular] = useState([]);

    useEffect(()=>{
        trending();
    },[])

    const trending = async()=>{
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
        const data = await api.json();
        setPopular(data.recipes)
    }
  return (
    <div>
      {popular?.map((recipe) =>{
        return(
          <div kry={recipe.id}>{recipe.title}</div>
        )
      })}
    </div>
  )
}

export default Popular
