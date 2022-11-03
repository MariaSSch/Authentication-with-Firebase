import Login from 'components/Login/Login';
import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div>
      <h1>LogIn</h1>
      <Login />
      <p>
        or <Link to="/register">register</Link> or <Link to="/recover-pass">recover pass</Link>
      </p>
    </div>
  )
}
