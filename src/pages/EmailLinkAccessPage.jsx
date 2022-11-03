import React from 'react'
import { Link } from 'react-router-dom';
import EmailLinkAccess from 'components/EmailLinkAccess/EmailLinkAccess';
import s from "./pageStyle.module.sass";

export default function EmailLinkAccessPage() {


  return (
    <>
      <h1 className={s.pageHeader}>Get Link to Sign In</h1>
      <EmailLinkAccess />
      <p  className={s.pageText}>
          Already have an account? <Link className={s.pageLink} to="/login">Sign in</Link>
      </p>
    </>
  )
}
