import React from 'react';
import { getAuth, sendSignInLinkToEmail } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'UI/Button/Button';
import s from "../Form/Form.module.sass";

export default function EmailLinkAccess() {
    const [emailLink, setEmailLink] = useState();
  const navigate = useNavigate();
  
  const handleGetLink = (email) => {
    const auth = getAuth();
    const actionCodeSettings = {
      url: "http://localhost:3000/",
      handleCodeInApp: true,
    }
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
    .then(() => {
        window.localStorage.setItem('emailForSignIn', email);
      alert("check your email");
      navigate("/login");
    })
.catch(()=> alert("Smth goes wrong..."))
    
  }

  return (
    <form  className={s.form} onSubmit = {(e) => {e.preventDefault(); handleGetLink(emailLink)}}>
       <div className={s.field_container}>
        <label style={{width: "100%", marginRight: 0}}>
            <p>Email</p>
            <input 
              type="email" 
              autoComplete="username"
              value={emailLink}
              onChange={e => setEmailLink(e.target.value)} 
              placeholder="email"
            />
          </label>
        </div>
          <Button>Get Link</Button>
    </form>
  )
}
