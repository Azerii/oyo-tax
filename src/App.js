import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Landing from './containers/Landing';
import Payment from './containers/Payment';
import Register from './containers/Register';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/payment" component={Payment} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
