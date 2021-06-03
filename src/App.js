import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";
import HomePage from './components/HomePage';
import Dashboard from "./components/Dashboard";
import NavBar from "./components/NavBar";
import ClassForm from "./components/ClassForm";
import ClassInfo from "./components/ClassInfo";
import EditClass from "./components/EditClass";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <PrivateRoute path="/editclass/:id" component={EditClass} />
        <PrivateRoute path="/class/:id" component={ClassInfo} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/classform" component={ClassForm} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
