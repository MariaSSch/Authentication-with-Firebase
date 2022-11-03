import React from 'react';
import { Link } from 'react-router-dom';
import Login from 'components/Login/Login';
import s from "./pageStyle.module.sass";

export default function LoginPage() {
  return (
    <div>
      <h1 className={s.pageHeader}>LogIn</h1>
      <Login />
      <p className={s.pageText}>
        or <Link className={s.pageLink} to="/register">Register</Link> or <Link  className={s.pageLink} to="/getlink">Get link</Link>
      </p>
    </div>
  )
}
