import React, { useState } from 'react';
import Button from '../UI/Buttons/Button';

import styles from './InputForm.module.css';


function InputForm(props) {

  const [inputName, setInputName] = useState();
  const [inputAge, setInputAge] = useState();

  const userNameChangeHandler = (event) => {
    setInputName(event.target.value);
  }

  const userAgeChangeHandler = (event) => {
    setInputAge(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const newUser = {
      id: Math.random().toString(),
      name: inputName,
      age: inputAge,
    }

    props.onAddNewUser(newUser)
    setInputName('');
    setInputAge('');
  }

  return (
    <form onSubmit={submitHandler} className={`${styles['input-form']}`}>
      <div className={`${styles['input__name']}`}>
        <label htmlFor = "formName">Имя</label>
        <input className={`${styles['input__field']}`} type='text' name='formName' id='formName' value={inputName} onChange={userNameChangeHandler}></input>
      </div>
      <div className={`${styles['input__age']}`}>
        <label htmlFor = "formAge">Возраст</label>
        <input className={`${styles['input__field']}`}  type='number' name='formAge' id='formAge' value={inputAge} onChange={userAgeChangeHandler}></input>
      </div>
      <div className={`${styles['input__buttons']}`}>
        <Button type='submit'>Добавить пользователя</Button>
      </div>
    </form>
  )
}

export default InputForm