import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './components/globalStyles';
import Main from './components/Main';

function App() {
  return (
    <Router>
     <GlobalStyle/>
     <Main/>
    </Router>
  );
}

export default App;
