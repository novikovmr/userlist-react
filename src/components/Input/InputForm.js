import React, { useState, useRef } from 'react';
import Button from '../UI/Buttons/Button';

import styles from './InputForm.module.css';
import PopUpAgeError from '../ErrorPopUp/PopUpAgeError/PopUpError';


function InputForm(props) {

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
    const inputUserName = nameInputRef.current.value;
    const inputUserAge = ageInputRef.current.value;

    if (inputUserName.trim().length === 0 || inputUserAge.trim().length === 0) {
      setError({
        title: 'Некорректные данные!',
        message: 'Поля обязательны для заполнения'
      })
      return;
    }

    if (+inputUserAge <= 0) {
      setError({
        title: 'Некорректный возраст!',
        message: 'Возраст должен быть больше 0'
      })
      return;
    }

    const newUser = {
      id: Math.random().toString(),
      name: inputUserName,
      age: inputUserAge,
    }

    props.onAddNewUser(newUser)
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  }

  const exitPopUpHandle = () => {
    setError();

  }

  return (
    <React.Fragment>
    {error && <PopUpAgeError onExitPopUp={exitPopUpHandle} title={error.title} message={error.message}/>}
      <form onSubmit={submitHandler} className={`${styles['input-form']}`}>
        <div className={`${styles['input__name']}`}>
          <label htmlFor="formName">Имя</label>
          <input 
            className={`${styles['input__field']}`} 
            type='text' 
            name='formName' 
            id='formName' 
            ref={nameInputRef} 
          />
        </div>
        <div className={`${styles['input__age']}`}>
          <label htmlFor="formAge">Возраст</label>
          <input 
            className={`${styles['input__field']}`} 
            type='number' 
            name='formAge' 
            id='formAge' 
            ref={ageInputRef}
          />
        </div>
        <div className={`${styles['input__buttons']}`}>
          <Button type='submit'>Добавить пользователя</Button>
        </div>
      </form>
    </React.Fragment>
  )
}

export default InputForm