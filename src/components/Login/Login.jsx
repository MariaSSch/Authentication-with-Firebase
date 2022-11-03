import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from 'components/Form/Form';
import { user_get_in } from "store/reducers/userReducer";

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (email, password) => {//при вызове учетные данные из флрмы на сервер и получу пользователя
        const auth = getAuth(); 
        console.log(auth);                //firebase
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
              dispatch(user_get_in(user.email, user.uid, user.accessToken));
              navigate("/");
            })
            .catch(()=>alert("Invalid user"))
    }

  return (
    <div>
        <Form title="Sign In" handleClick={handleLogin}/>
    </div>
  )
}
