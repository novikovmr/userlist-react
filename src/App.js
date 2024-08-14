import { useState } from 'react';
import './App.css';
import UserList from './components/List/UserList';
import InputForm from './components/Input/InputForm';
import Container from './components/UI/Containers/Container';

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
      const newUsersList = prevUsers;
      newUsersList.splice(idDeleteUser, 1);

      return [...newUsersList]
    })
  }

  return (
    <div className="App">
      <h2>Список пользователей</h2>
      <Container className='container__medium'>
        <InputForm onAddNewUser={addUserHandler}/>
        <UserList onDeleteUser={deleteUserHandler} usersData={users}/>
      </Container>
    </div>
  );
}

export default App;
