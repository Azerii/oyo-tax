import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './containers/Dashboard';
import Landing from './containers/Landing';
import Login from './containers/Login';
import OTPverification from './containers/OTPverification';
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
          <Route path="/login" component={Login} />
          <Route path="/otp-verification" component={OTPverification} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
