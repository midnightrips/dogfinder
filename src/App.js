import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import DogList from './DogList';
import DogDetails from './DogDetails';
import data from "./db.json";

function App() {
  return (
    <div className='App'>
      <div>
        <BrowserRouter>
          <Nav dogs={data.dogs} />
          <Routes>
            <Route exact path="/dogs" element={<DogList dogs={data.dogs} />} />
            <Route path="/dogs/:name" element={<DogDetails dogs={data.dogs} />} />
            <Route path="*" element={<Navigate to="/dogs" />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
