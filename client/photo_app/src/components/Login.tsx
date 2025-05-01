import React, { useState, useEffect } from 'react';

interface LoginProps {
  setStatusMessage: (message: string) => void;
  setLoginToken: (token: string) => void;
}

const Login: React.FC<LoginProps> = ({ setStatusMessage, setLoginToken }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignup, setIsSignup] = useState(false);


  const handleSubmit = async (e: React.FormEvent) => {
    setStatusMessage("arghhh");

    e.preventDefault();
    if (isSignup) {
        // manage the user creation (email, password)
        let req = await fetch("http://127.0.0.1:3000/api/signup", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password,
                name: "batman"
            })
        });
        let resp = await req.json();
        if (resp.resultCode !== 1) {
            setStatusMessage("Account creation failed: ");
        } else {
            // setLoginToken(resp.token);
            setStatusMessage("Account created");
        }
        console.log("response from signup api: ", resp);

    } else {
        // manage the use login (email, password)
        let req = await fetch("http://127.0.0.1:3000/api/login", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });
        let resp = await req.json();
        if (resp.resultCode !== 1) {
            setStatusMessage("login failed !");
        } else {
            setLoginToken(resp.token);
            setStatusMessage("Logged IN !");
        }
        console.log("response from login api: ", resp);
    }
  };

  return (
    <div className="auth-form">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
          required
        />
        <button type="submit" className="button">
          {isSignup ? 'Create Account' : 'Log In'}
        </button>
      </form>
      <p style={{ marginTop: '1rem' }}>
        {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
        <button
          onClick={() => setIsSignup(!isSignup)}
          style={{
            background: 'none',
            border: 'none',
            color: '#0077cc',
            cursor: 'pointer',
            textDecoration: 'underline'
          }}
        >
          {isSignup ? 'Log in here' : 'Sign up here'}
        </button>
      </p>
    </div>
  );
};

export default Login;
