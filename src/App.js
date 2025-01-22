import React, { useState } from 'react';
import './App.css';
import LoginTab from './LoginTab';
import SSOTab from './SSOTab';

function App() {

  const [state, setState] = useState("login-tab");

  function switchStates(){
    if(state === "login-tab"){
      setState("sso-tab");
    }else{
      setState("login-tab");
    }
  }

  return (
    <div id="login-page">
      {(() => {
        switch (state) {
          case "login-tab":
            return (<LoginTab />);
          case "sso-tab":
            return (<SSOTab />);
          default:
            return (<LoginTab />);
        }
      })()}
      <button onClick={switchStates}>Click Me</button>
    </div>
  );
}

export default App;
