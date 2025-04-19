import { ChangeEvent, useState } from 'react';
import './CheckBoxesList.css';

function CheckBoxesList() {
  const [interest, setInterests] = useState({
    coding: false,
    music: false,
    reading: false,
  });

  const handleCheckBox = (e: ChangeEvent<HTMLInputElement>) => {
    setInterests({
      ...interest,
      [e.target.name]: e.target.checked,
    });
  };

  const handleCheckAll = (e: ChangeEvent<HTMLInputElement>) => {
    setInterests({
      coding: e.target.checked,
      music: e.target.checked,
      reading: e.target.checked,
    });
  };

  return (
    <div className="interest-box">
      <p style={{ margin: '0 0 10px 0' }}>Choose your interest</p>
      <div className="checkbox-container">
        <input
          onChange={handleCheckAll}
          type="checkbox"
          id="all"
          name="all"
          value="all"
        />
        <label htmlFor="all">All</label>
      </div>
      <div>
        <input
          onChange={handleCheckBox}
          type="checkbox"
          id="coding"
          name="coding"
          value="coding"
          checked={interest.coding}
        />
        <label htmlFor="coding">Coding</label>
      </div>
      <div>
        <input
          onChange={handleCheckBox}
          type="checkbox"
          id="music"
          name="music"
          value="music"
          checked={interest.music}
        />
        <label htmlFor="music">Music</label>
      </div>
      <div>
        <input
          onChange={handleCheckBox}
          type="checkbox"
          id="reading"
          name="reading"
          value="reading"
          checked={interest.reading}
        />
        <label htmlFor="reading">Reading</label>
      </div>
      <p style={{ margin: '10px 0 0 0' }}>You selected:</p>
      <p style={{ margin: 0 }}>{JSON.stringify(interest)}</p>
    </div>
  );
}

export default CheckBoxesList;
