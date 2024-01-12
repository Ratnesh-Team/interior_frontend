import React, { useState } from 'react';

const TimerSetter = () => {
  const [hours, setHours] = useState(12); // Default to 12 for the 12-hour format
  const [minutes, setMinutes] = useState(0);
  const [period, setPeriod] = useState('AM');
  const [lastUpdate, setLastUpdate] = useState('');

  const handleSetTime = () => {
    // Perform any actions when the time is set
    const newTime = `${hours}:${minutes} ${period}`;
    console.log(`Time set: ${newTime}`);
    setLastUpdate(newTime);
  };

  return (
    <div>
      <h2>Timer Setter</h2>
      <div>
        <label>Hours:</label>
        <input type="number" value={hours} min={1} max={12} onChange={(e) => setHours(parseInt(e.target.value, 10))} />
      </div>
      <div>
        <label>Minutes:</label>
        <input type="number" value={minutes} onChange={(e) => setMinutes(parseInt(e.target.value, 10))} />
      </div>
      <div>
        <label>Period:</label>
        <select value={period} onChange={(e) => setPeriod(e.target.value)}>
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
      </div>
      <div>
        <label>Last Update:</label>
        <div>{lastUpdate}</div>
      </div>
      <div>
        <label>Notes:</label>
        <textarea
          rows="4"
          cols="50"
          placeholder="Write any notes here..."
          // You can store the notes in state or handle it as needed
        />
      </div>
      <button onClick={handleSetTime}>Set Time</button>
    </div>
  );
};

export default TimerSetter;
