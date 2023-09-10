import React from 'react'
import Pages from './Pages/Pages';
import Filters from './components/Filters';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>

      <Filters/>
      <Pages/>
      </Router>
    </div>
  );
}

export default App;
