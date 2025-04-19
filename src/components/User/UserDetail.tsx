import UserInfo from '../../types/user.type';
import './UserDetail.css';

function UserDetail(props: UserInfo) {
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

export default UserDetail;
