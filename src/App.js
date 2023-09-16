import React from 'react'
import Pages from './Pages/Pages';
import Filters from './components/Filters';
import { BrowserRouter as Router } from 'react-router-dom';
import Search from './components/Search';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GiKnifeFork } from 'react-icons/gi';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav>
          <GiKnifeFork/>
          <Logo to={'/'}>RecipeRadar</Logo>
        </Nav>
      <Search/>
      <Filters/>
      <Pages/>
      </Router>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: cursive;
  color: black;
`

const Nav = styled.div`
  padding: 1.5rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg{
    font-size: 2rem;
  }
`

export default App;
