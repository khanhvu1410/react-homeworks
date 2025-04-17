import { ChangeEvent, useState } from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import Users from './components/Users/Users';
import CheckBoxes from './components/CheckBoxes/CheckBoxes';
import Pokemon from './components/Pokemon/Pokemon';

function App() {
  const [option, setOption] = useState<string>('welcome');

  let component = <Users />;
  switch (option) {
    case 'welcome':
      component = <Users />;
      break;
    case 'counter':
      component = <Counter />;
      break;
    case 'checkboxes':
      component = <CheckBoxes />;
      break;
    case 'pokemon':
      component = <Pokemon />;
      break;
  }

  const handleSelection = (e: ChangeEvent<HTMLSelectElement>) => {
    setOption(e.target.value);
  };

  return (
    <div className="App" style={{ fontFamily: 'Times New Roman' }}>
      <div style={{ marginBottom: '15px' }}>
        <select className="select-box" onChange={handleSelection}>
          <option value="welcome">Welcome</option>
          <option value="counter">Counter</option>
          <option value="checkboxes">Checkboxes</option>
          <option value="pokemon">Pokemon</option>
        </select>
        <p style={{ margin: 0 }}>Option selected: {option}</p>
      </div>

      {component}
    </div>
  );
}

export default App;
