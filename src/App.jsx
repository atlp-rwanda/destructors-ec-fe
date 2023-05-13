import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigator from './routes/index.jsx';

function App () {
  return (
    <Router>
      <Navigator />
    </Router>
  );
}
export default App;
