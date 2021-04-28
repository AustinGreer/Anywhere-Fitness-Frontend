import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';
import ClassForm from './components/ClassForm';
function App() {
  return (
    <div>
      <NavBar/>
      <Switch>
        <Route path='/signup' component={SignUp} />
        <Route path='/login' component={Login} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/classform' component={ClassForm} />
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;