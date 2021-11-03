import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Chart from './components/Chart';
import Form from './components/Form';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
    <div>
      <Nav/>
      <Switch>
        <Route exact path="/" component={Form} />
        <Route exact path="/chart" component={Chart} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
