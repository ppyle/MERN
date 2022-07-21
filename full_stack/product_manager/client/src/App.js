import './App.css';
import Form from './components/Form';
import AllProducts from './components/AllProducts';
import {Routes, Link, Route} from 'react-router-dom';
import OneProduct from './components/OneProduct';

function App() {
  return (
    <div className="App">
      <h1>its product time</h1>
      <Routes>
        <Route exact path="/" element={
          <>
            <Form></Form>
            <hr />
            <AllProducts></AllProducts>
          </>

        }></Route>
        <Route exact path="/products/:id" element={<OneProduct/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
