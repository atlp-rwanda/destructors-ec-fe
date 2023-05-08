import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Counter from './components/counter';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Counter />} />
      </Routes>
    </Router>
  );
}

export default App;
