import logo from './logo.svg';
import './App.css';
import AllAuthors from './components/AllAuthors';
import {Routes, Route, Link} from "react-router-dom";
import CreateAuthor from './components/CreateAuthor';
import EditAuthor from './components/EditAuthor';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element= {<AllAuthors/>}> </Route>
        <Route exact path="/authors/create" element={<CreateAuthor/>}></Route>
        <Route exact path = "/authors/edit/:id" element={<EditAuthor/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
