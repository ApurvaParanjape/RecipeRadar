import React, { useState } from 'react'
import styled from 'styled-components';
import{FaSearch} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
 

const Search = () => {
    const [input,setInput] = useState("")
    const navigate = useNavigate()

    const submitHandler = (e)=>{
        e.preventDefault();
        navigate("/searched/"+input)
    }
  return (
    <StyledForm onSubmit={submitHandler}>
        <div>
            <FaSearch></FaSearch>
            <input 
            onChange={(e)=> setInput(e.target.value)} 
            type="text" 
            value={input} />
        </div>
    </StyledForm>
  )
}

const StyledForm = styled.form `
margin: 0 20rem;

div{
    width: 100%;
    position: relative;
}
input{
    border: none;
    background: linear-gradient(45deg , grey, black);
    border-radius: 1rem;
    outline: none;
    font-size: 1rem;
    color: white;
    padding: 1rem 3rem;
    width: 100%;

}
svg{
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%,-50%);
    color: white;
}
` 

export default Search
