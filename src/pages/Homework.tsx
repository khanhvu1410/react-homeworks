import CheckBoxesList from '../components/CheckBox/CheckBoxesList';
import Counter from '../components/Counter/Counter';
import Pokemon from '../components/Pokemon/Pokemon';
import UsersList from '../components/User/UsersList';
import Form from '../components/Form/Form';
import { ChangeEvent, useState } from 'react';

const Homework = () => {
  const [option, setOption] = useState<string>('welcome');

  let component = <UsersList />;
  switch (option) {
    case 'welcome':
      component = <UsersList />;
      break;
    case 'counter':
      component = <Counter />;
      break;
    case 'checkboxes':
      component = <CheckBoxesList />;
      break;
    case 'pokemon':
      component = <Pokemon />;
      break;
    case 'form':
      component = <Form />;
      break;
  }

  const handleSelection = (e: ChangeEvent<HTMLSelectElement>) => {
    setOption(e.target.value);
  };

  return (
    <div className="App" style={{ fontFamily: 'Times New Roman' }}>
      <div style={{ marginBottom: '15px' }}>
        <select onChange={handleSelection}>
          <option value="welcome">Welcome</option>
          <option value="counter">Counter</option>
          <option value="checkboxes">Checkboxes</option>
          <option value="pokemon">Pokemon</option>
          <option value="form">Form</option>
        </select>
        <p style={{ margin: 0 }}>Option selected: {option}</p>
      </div>

      {component}
    </div>
  );
};

export default Homework;
