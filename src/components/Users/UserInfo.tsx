import './UserInfo.css';

interface IUser {
  name: string;
  age: number;
  backgroundColor: string;
}

function UserInfo(props: IUser) {
  const nameElement = <p className="name">Name: {props.name}</p>;
  const ageElement = <p className="age">Age: {props.age}</p>;

  return (
    <div
      className="user-box"
      style={{ backgroundColor: props.backgroundColor }}
    >
      {nameElement}
      {ageElement}
    </div>
  );
}

export default UserInfo;
