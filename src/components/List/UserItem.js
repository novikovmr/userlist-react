import React from 'react';
import styles from './UserItem.module.css'

function UserItem(props) {

  const deleteHandler = () => {
    const deleteUser = {
      id: props.id,
      name: props.name,
      age: props.age
    }
    props.onSaveUserData(deleteUser);
    // console.log(deleteUser);
  }

  return (
    <li onClick={deleteHandler} className={`${styles.userItem}`}>
      {props.children}
    </li>

  )
}

export default UserItem