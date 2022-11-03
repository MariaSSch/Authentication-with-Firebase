import React from 'react'
import { getAuth, sendSignInLinkToEmail } from 'firebase/auth';
import { useState } from 'react'
//import { useAuth } from 'hooks/use-auth'

import Button from 'UI/Button/Button';
import { useNavigate } from 'react-router-dom';

export default function EmailLinkAccess() {
    const [emailLink, setEmailLink] = useState();
  //const {isAuth, email} = useAuth();
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
    <form onSubmit = {(e) => {e.preventDefault(); handleGetLink(emailLink)}}>
        <input 
          type="email" 
          value={emailLink}
          onChange={e => setEmailLink(e.target.value)} 
          placeholder="email"
        />
        <Button>Get Link</Button>
    </form>
  )
}
