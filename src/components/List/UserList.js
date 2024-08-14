import React from 'react';
import UserItem from './UserItem';
import styles from './UserList.module.css';

function UserList(props) {

  const saveUsersDataHandler = (deleteUserData) => {
    const userDelete = {
      ...deleteUserData
    }
    props.onDeleteUser(userDelete);
    console.log('Мы в userList', userDelete);
  }

  return (
    <ul className={`${styles.userList}`}>
      {props.usersData.map((user) => (
        <UserItem onSaveUserData = {saveUsersDataHandler} key={user.id} id={user.id} name={user.name} age={user.age}>{user.name} - {user.age} лет</UserItem>
      ))}
    </ul>

  )
}

export default UserList;