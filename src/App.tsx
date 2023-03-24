import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if(!token){
      navigate('/auth/login')
    }
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='bg-white'>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
