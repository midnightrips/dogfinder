import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import DogList from './DogList';
import DogDetails from './DogDetails';
import dogs from "../db.json";

function App() {
  return (
    <div className='App'>
      <div>
        <Nav dogs={dogs} />
      </div>
      <div>
        <Switch>
          <Route exact path="/dogs" >
            <DogList dogs={dogs} />
          </Route>
          <Route path="/dogs/:name" >
            <DogDetails />
          </Route>
          <Redirect to="/dogs" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
