import { ChangeEvent, useEffect, useState } from 'react';
import './Form.css';

function Form() {
  const [values, setValues] = useState({
    userName: '',
    email: '',
    gender: 'male',
    password: '',
    retypePassword: '',
    agreement: false,
  });

  const [messageUserName, setMessageUserName] = useState<string>('');
  const [messageEmail, setMessageEmail] = useState<string>('');
  const [messagePassword, setMessagePassword] = useState<string>('');
  const [messageRetypePassword, setMessageRetypePassword] =
    useState<string>('');
  const [disableButton, setDisableButton] = useState<boolean>(true);

  const handleFieldChange = (event: any) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });

    if (event.target.name === 'userName') {
      if (event.target.value.length < 1) {
        setMessageUserName('User Name is required');
      } else if (event.target.value.length < 4) {
        setMessageUserName('User Name must have at least 4 characters');
      } else if (!/^[A-Za-z0-9]+$/.test(event.target.value)) {
        setMessageUserName(
          'User Name must only contain characters A-Z, a-z, 0-9'
        );
      } else {
        setMessageUserName('');
      }
    }

    if (event.target.name === 'email') {
      if (
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
          event.target.value
        )
      ) {
        setMessageEmail('Email is not valid');
      } else {
        setMessageEmail('');
      }
    }

    if (event.target.name === 'password') {
      if (event.target.value.length < 1) {
        setMessagePassword('Password is required');
      } else if (event.target.value.length < 8) {
        setMessagePassword('Password must have at least 8 characters');
      } else {
        setMessagePassword('');
      }
    }

    if (event.target.name === 'retypePassword') {
      if (event.target.value != values.password) {
        setMessageRetypePassword('Retype password must equal to password');
      } else {
        setMessageRetypePassword('');
      }
    }
  };

  const handleCheckBox = (event: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.checked,
    });
  };

  useEffect(() => {
    if (
      values.userName.length >= 4 &&
      /^[A-Za-z0-9]+$/.test(values.userName) &&
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email) &&
      values.password.length >= 8 &&
      values.retypePassword === values.password &&
      values.agreement
    ) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [values]);

  const handleSaveData = () => {
    console.log('saved data', values);
    // ToDo call API to save data
  };

  return (
    <div>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          marginBottom: '15px',
          alignItems: 'start',
        }}
      >
        <input
          value={values.userName}
          onChange={handleFieldChange}
          placeholder="User Name"
          name="userName"
        />
        {messageUserName && <div className="message">{messageUserName}</div>}
        <input
          value={values.email}
          onChange={handleFieldChange}
          placeholder="Email"
          name="email"
        />
        {messageEmail && <div className="message">{messageEmail}</div>}
        <select onChange={handleFieldChange} name="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input
          type="password"
          onChange={handleFieldChange}
          placeholder="Password"
          name="password"
          value={values.password}
        />
        {messagePassword && <div className="message">{messagePassword}</div>}
        <input
          type="password"
          onChange={handleFieldChange}
          placeholder="Retype password"
          name="retypePassword"
          value={values.retypePassword}
        />
        {messageRetypePassword && (
          <div className="message">{messageRetypePassword}</div>
        )}
        <div>
          <input
            onChange={handleCheckBox}
            type="checkbox"
            id="agreement"
            name="agreement"
            checked={values.agreement}
          />
          <label htmlFor="agreement">I have read agreement</label>
        </div>
      </form>
      <button disabled={disableButton} onClick={handleSaveData}>
        Save
      </button>
    </div>
  );
}

export default Form;
