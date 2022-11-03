import React from 'react';
import { useState } from 'react';
import Button from 'UI/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faEyeSlash } from '@fortawesome/free-regular-svg-icons';
 
import s from "./Form.module.sass"

export default function Form({title, handleClick}) {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const [visible, setVisibility] = useState(false);
    const eye = <FontAwesomeIcon icon={faEye} />
    const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />

  return (
    <form className={s.form} onSubmit={(e)=> {e.preventDefault(); handleClick(email, pass)}}>
      <div className={s.field_container}>
        <label>
          <p>Email</p>
          <input 
                    type="email"
                    autoComplete="username"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email"
            />
        </label>
          
          <label className={s.label_pass}>
            <p>Create Password</p>
            <input
                  type={!visible ? "password": "text"}
                  autoComplete="current-password"
                  value={pass}
                  onChange={e => setPass(e.target.value)}
                  placeholder="Password"
          />
            <p className={s.eye} onClick={()=>setVisibility(!visible)}>{visible ? eyeSlash : eye}</p>
          </label>
        </div>
        <Button>{title}</Button>
    </form>
  )
}
