import IUserInfo from '../../types/user.type';
import './UserInfo.css';

function UserInfo(props: IUserInfo) {
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
