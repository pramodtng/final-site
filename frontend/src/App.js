import './App.css';
import React from 'react';
import Header from './components/Header/Header'
import Work from './components/Work/Work'
import CV from './components/CV/CV'

function App() {
  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <Header />
      <Work />
      <CV />
    </div>
  );
}

export default App;
