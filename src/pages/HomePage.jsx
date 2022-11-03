import React from 'react';
import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { user_get_out, user_get_in } from "store/reducers/userReducer";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from 'hooks/use-auth';
import Button from 'UI/Button/Button';

export default function HomePage() {
  const {isAuth, email} = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();

  if (isSignInWithEmailLink(auth, window.location.href)) {
    let email = window.localStorage.getItem('emailForSignIn');
    if (!email) {
      email = window.prompt('Please provide your email for confirmation');
    }
    signInWithEmailLink(auth, email, window.location.href)
      .then((result) => {
        console.log(result);
        
        dispatch(user_get_in(result.user.email, result.user.uid, result.user.accessToken));
        // Clear email from storage.
        window.localStorage.removeItem('emailForSignIn');
        // You can access the new user via result.user
        // Additional user info profile not available via:
        // result.additionalUserInfo.profile == null
        // You can check if the user is new or existing:
        // result.additionalUserInfo.isNewUser
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }


  return isAuth ? (
    
      <div>
        <h1>Welcome!</h1>
        <Button onClick={()=>dispatch(user_get_out())}>Log out from {email}</Button>
      </div>
  )
      :
      (<div>
        <Navigate to="/login"/>
      </div>
      
  )
}
