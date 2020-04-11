import React from 'react';
import Signup from './components/signUp';
import Signin from './components/signIn';
import Navbar from './components/dropdown'
import "./App.css";

function App() {
  return (
    <div>
      <h1 style= {{ color: "white" }}>COVID 19</h1>
      <div>
        <Signin />
      </div>
    </div>

  );
}

export default App;
