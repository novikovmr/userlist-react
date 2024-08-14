import React, { useState } from 'react';
import './App.css';
import UserList from './components/List/UserList';
import InputForm from './components/Input/InputForm';
import Container from './components/UI/Containers/Container';
import PopUpError from './components/ErrorPopUp/PopUpAgeError/PopUpError';

function App() {

  const [users, setUsers] = useState([{
    id: 'u1',
    name: 'Max',
    age: '26',
  },
  {
    id: 'u2',
    name: 'Alex',
    age: '20',
  },
  {
    id: 'u3',
    name: 'Vika',
    age: '23',
  }])


  const addUserHandler = (newUser) => {
    setUsers((prevUsers) => {
      const updatedUsers = [newUser, ...prevUsers];
      return updatedUsers;
    })
  }

  const deleteUserHandler = (deleteUserData) => {
    console.log('Мы в App', deleteUserData);

    setUsers((prevUsers) => {
      const idDeleteUser = prevUsers.findIndex((elem) => elem.id === deleteUserData.id);
      prevUsers.splice(idDeleteUser, 1);

      return [...prevUsers]
    })
  }

  const exitPopUpHandler = () => {
  }

  return (
    <React.Fragment >
      <Container className='container__medium'>
        <h2>Список пользователей</h2>
        <InputForm onAddNewUser={addUserHandler}/>
        <UserList onDeleteUser={deleteUserHandler} usersData={users}/>
      </Container>
    </React.Fragment>
  );
}

export default App;
