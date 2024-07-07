import React from 'react';
import './App.css';
import BlackDiv from './components/BlackDiv';
import Container from './components/Container';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <BlackDiv className="upper">
        <h1>Versatile.Ai</h1>
      </BlackDiv>
      <Container />
      <BlackDiv className="lower">
        <footer>&copy; 2024 Versatile. All Rights Reserved.</footer>
      </BlackDiv>
      <Sidebar />
    </>
  );
}

export default App;
