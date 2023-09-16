import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Recipe = () => {
  const params = useParams()
  const [details,setDetails] = useState({})
  const [activeTab, setActiveTab] = useState('ingredients')

  const getRecipe = async()=>{
      const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
      const detailedData = await data.json();
      setDetails(detailedData);
  }

  useEffect(()=>{
    getRecipe();
  },[params.name])

  return (
    <DetailWrapper
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:0.5}}
    >

      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>

      <Info>
        <Button className={activeTab==='instructions'?"active":""} onClick={()=>{setActiveTab('instructions')}}>Instructions</Button>
        <Button className={activeTab==='ingredients'?"active":""} onClick={()=>{setActiveTab('ingredients')}}>Ingredients</Button>
        {activeTab==='instructions' &&
        <div>
        <p dangerouslySetInnerHTML={{__html: details.summary}}></p>
        <p style={{marginTop: "1rem"}} dangerouslySetInnerHTML={{__html: details.instructions}}></p>
      </div>
        }

        {activeTab==='ingredients' && (
          <ul>
        {details.extendedIngredients?.map((ingredient)=>(
          <li key={ingredient.id}>{ingredient.original}</li>
))}
        </ul>)
        }
        
      </Info>

    </DetailWrapper>
  )
}

const DetailWrapper = styled(motion.div)`
margin-top: 3rem;
margin-bottom: 5rem;
display: flex;
.active{
  background: linear-gradient(45deg, grey, black);
  color: white;
}
h2{
  margin-bottom: 2rem;
}
li{
  font-size: 1rem;
  line-height: 2.5rem;
  margin-left: 1rem;
}
ul{
  margin-top: 2rem;
}
`

const Button = styled.button`
margin-bottom: 2rem;
padding: 1rem 2rem;
color: black;
background: white;
border: 2px solid black;
margin-right: 2rem;
font-weight: 600;
`
const Info = styled.div`
margin-left: 5rem;
`

export default Recipe
