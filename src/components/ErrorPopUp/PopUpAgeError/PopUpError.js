import React from 'react';
import styles from './PopUpError.module.css';
import Button from '../../UI/Buttons/Button';

function PopUpAgeError(props) {
  return (
    <div className={`${styles.ageError}`}>
      <div className={`${styles.ageError__window}`}>
        <div>
          <h2>{props.title}</h2>
          <p>{props.message}</p>
        </div>
        <Button type={'button'} onClick={props.onExitPopUp}>Закрыть</Button>
      </div>
    </div>
  )
  
}

export default PopUpAgeError