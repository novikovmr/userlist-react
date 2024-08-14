import React, { useState } from 'react';
import Button from '../UI/Buttons/Button';

import styles from './InputForm.module.css';
import PopUpAgeError from '../ErrorPopUp/PopUpAgeError/PopUpError';


function InputForm(props) {

  const [inputName, setInputName] = useState('');
  const [inputAge, setInputAge] = useState('');
  const [error, setError] = useState();

  const userNameChangeHandler = (event) => {
    setInputName(event.target.value);
  }

  const userAgeChangeHandler = (event) => {
    setInputAge(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (inputName.trim().length === 0 || inputName.trim().length === 0) {
      setError({
        title: 'Некорректные данные!',
        message: 'Поля обязательны для заполнения'
      })
      return;
    }

    if (+inputAge <= 0) {
      setError({
        title: 'Некорректный возраст!',
        message: 'Возраст должен быть больше 0'
      })
      return;
    }

    const newUser = {
      id: Math.random().toString(),
      name: inputName,
      age: inputAge,
    }

    props.onAddNewUser(newUser)
    setInputName('');
    setInputAge('');
  }

  const exitPopUpHandle = () => {
    setError();
    setInputName('');
    setInputAge('');
  }

  return (
    <React.Fragment>
    {error && <PopUpAgeError onExitPopUp={exitPopUpHandle} title={error.title} message={error.message}/>}
      <form onSubmit={submitHandler} className={`${styles['input-form']}`}>
        <div className={`${styles['input__name']}`}>
          <label htmlFor="formName">Имя</label>
          <input className={`${styles['input__field']}`} type='text' name='formName' id='formName' value={inputName} onChange={userNameChangeHandler}></input>
        </div>
        <div className={`${styles['input__age']}`}>
          <label htmlFor="formAge">Возраст</label>
          <input className={`${styles['input__field']}`} type='number' name='formAge' id='formAge' value={inputAge} onChange={userAgeChangeHandler}></input>
        </div>
        <div className={`${styles['input__buttons']}`}>
          <Button type='submit'>Добавить пользователя</Button>
        </div>
      </form>
    </React.Fragment>
  )
}

export default InputForm