import { useState } from 'react';
import UserInfo from './UserInfo';
import './Users.css';

const initialUsers = [
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
];

const newUsers = [
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
];

function Users() {
  const [users, setUsers] = useState(initialUsers);

  const changeUser = () => {
    setUsers([...newUsers]);
  };

  return (
    <div>
      <button className="change-button" onClick={changeUser}>
        Change user
      </button>
      {users.map((user: any, index: number) => (
        <UserInfo
          key={index}
          name={user.name}
          age={user.age}
          backgroundColor={user.backgroundColor}
        />
      ))}
    </div>
  );
}

export default Users;
