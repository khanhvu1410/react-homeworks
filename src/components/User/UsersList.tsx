import { useState } from 'react';
import UserDetail from './UserDetail';

function UsersList() {
  const [users, setUsers] = useState([
    {
      name: 'Sarah',
      age: 25,
      backgroundColor: 'green',
    },
    {
      name: 'Peter',
      age: 20,
      backgroundColor: 'red',
    },
    {
      name: 'Gonzalo',
      age: 35,
      backgroundColor: 'yellow',
    },
  ]);

  const changeUser = () => {
    setUsers([
      {
        name: 'Sarah change',
        age: 25,
        backgroundColor: 'green',
      },
      {
        name: 'Peter change',
        age: 20,
        backgroundColor: 'red',
      },
      {
        name: 'Gonzalo change',
        age: 35,
        backgroundColor: 'yellow',
      },
    ]);
  };

  return (
    <div>
      <button onClick={changeUser} style={{ marginBottom: '15px' }}>
        Change user
      </button>
      {users.map((user: any, index: number) => (
        <UserDetail
          key={index}
          name={user.name}
          age={user.age}
          backgroundColor={user.backgroundColor}
        />
      ))}
    </div>
  );
}

export default UsersList;
