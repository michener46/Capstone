import React, { useState } from 'react';
import './LoginTab.css';

function LoginTab() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // For now, just print the credentials to the console
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div id="login-tab">
        <input id="username-textbox" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
        <input id="password-textbox" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <button id="login-button"onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginTab;
