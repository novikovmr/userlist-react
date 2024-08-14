import React from 'react';
import styles from './PopUpError.module.css';
import Button from '../../UI/Buttons/Button';
import ReactDom from 'react-dom';

const Backdrop = (props) => {
  return (
    <div className={`${styles.backdrop}`} onClick={props.onExitPopUp}></div>
  )
}

const Modal = (props) => {
  return (
    <div className={`${styles.ageError__window}`}>
      <div>
        <h2>{props.title}</h2>
        <p>{props.message}</p>
      </div>
      <Button type={'button'} onClick={props.onExitPopUp}>Закрыть</Button>
    </div>
  )
}

function PopUpAgeError(props) {
  return (
    <React.Fragment >
      {ReactDom.createPortal(<Backdrop onExitPopUp={props.onExitPopUp}/>, document.getElementById('backdrop'))}
      {ReactDom.createPortal(<Modal title={props.title} message={props.message} onExitPopUp={props.onExitPopUp}/>, document.getElementById('modal'))}
    </React.Fragment>
  )

}

export default PopUpAgeError