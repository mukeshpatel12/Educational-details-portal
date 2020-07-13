import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import { Home } from './components/Home/components/Home';
import { Dashboard } from './components/Dashboard/components';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/main" render={() => <Dashboard />} />
        <Route exact path='/' render={() => <Home />} />
      </Switch>
    </div>
  );
}

export default App;
