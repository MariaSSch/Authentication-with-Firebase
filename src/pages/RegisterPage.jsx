import React from 'react';
import { Link } from 'react-router-dom';
import SignUp from 'components/SignUp/SignUp';
import s from "./pageStyle.module.sass"

export default function RegisterPage() {
  return (
    <div>
      <h1  className={s.pageHeader}>Register</h1>
      <SignUp />
      <p  className={s.pageText}>
        Already have an account? <Link className={s.pageLink} to="/login">Sign in</Link>
      </p>
    </div>
  )
}
