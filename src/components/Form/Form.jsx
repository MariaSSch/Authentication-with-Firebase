import React from 'react';
import { useState } from 'react';
import Button from 'UI/Button/Button';
import s from "./Form.module.sass"

export default function Form({title, handleClick}) {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
  return (
    <form className={s.form} onSubmit={(e)=> {e.preventDefault(); handleClick(email, pass)}}>
        <input 
                type="email"
                autoComplete="username"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="email"
        />
        <input 
                type="password"
                autoComplete="current-password"
                value={pass}
                onChange={e => setPass(e.target.value)}
                placeholder="password"
        />
        <Button>{title}</Button>
    </form>
  )
}
