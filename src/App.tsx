import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Landing from './containers/Landing';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={Landing} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;