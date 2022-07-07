import React from 'react';
import './App.css';
import PropItUp from './components/PropItUp';

function App() {
  return (
    <div className="App">
      <PropItUp personName={"Doe, Jane"} personAge={45} hairColor={"black"}/>
      <PropItUp personName={"Smith, John"} personAge={88} hairColor={"brown"}/>
      <PropItUp personName={"Fillmore, Millard"} personAge={50} hairColor={"brown"}/>
      <PropItUp personName={"Smith, Maria"} personAge={62} hairColor={"brown"}/>
    </div>
  );
}

export default App;
