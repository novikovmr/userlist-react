import React from 'react';
import styles from './Button.module.css';

function Button(props) {
  return (
    <button className={`${styles['button']}`} type={props.type} onClick={props.onClick}>{props.children}</button>
  )
}

export default Button