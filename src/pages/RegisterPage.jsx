import SignUp from 'components/SignUp/SignUp';
import React from 'react';
import { Link } from 'react-router-dom';

export default function RegisterPage() {
  return (
    <div>
      <h1>Register</h1>
      <SignUp />
      <p>
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </div>
  )
}
