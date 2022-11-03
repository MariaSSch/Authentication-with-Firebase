import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {user_get_in} from "../../store/reducers/userReducer";
import Form from 'components/Form/Form';


export default function SignUp() {
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const handleSignup = (email, password) => {//при вызове учетные данные из флрмы на сервер и получу пользователя
        const auth = getAuth();   
        createUserWithEmailAndPassword(auth, email, password) //установка юзера, чтобы потом на главную
            .then(({user}) => {
                dispatch(user_get_in(user.email, user.uid, user.accessToken));
                navigate("/");
            })
            .catch(()=> alert("Smth wrong"))
    }
  return (
    <div>
        <Form title="Register" handleClick={handleSignup}/>
    </div>
  )
}
