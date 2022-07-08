import logo from './logo.svg';
import './App.css';
import BigInversion from './components/BigInversion';

function App() {
  return (
    
    <div className="App">
      <h1>Person Cards</h1>
      <BigInversion personName={"Doe, Jane"} personAge={45} hairColor={"black"}></BigInversion>
      <BigInversion personName={"Smith, John"} personAge={88} hairColor={"brown"}></BigInversion>
      <BigInversion personName={"Fillmore, Millard"} personAge={50} hairColor={"brown"}></BigInversion>
      <BigInversion personName={"smith, Maria"} personAge={62} hairColor={"brown"}></BigInversion>
    </div>
  );
}

export default App;
