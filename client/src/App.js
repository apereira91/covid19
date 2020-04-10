import React from 'react';
import Signup from './components/signUp';
import Signin from './components/signIn';
import Navbar from './components/dropdown'

function App() {
  return (
    <div className="home">
      <h1>COVID 19</h1>
      <div>
        <Signin />
      </div>
    </div>

  );
}

export default App;
