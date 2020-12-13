import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Counters from "./components/counters";
import Nav from "./components/nav";
import userData from "./components/userData";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Counter from "./components/counter";
import Form from  "./components/form"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { Auth: true };
    console.log('App - constructor')
    
  }



  render() {
    console.log('App - Rendering')
  const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => (
        this.state.Auth ? 
        <Component {...rest} />
        : <Redirect to='/' />
       )} />
  )
  return (
    <React.Fragment>
      <Router>
      <Nav /> 
      <Form />
        <Switch>
          <Route exact path="/" component={ Counters }></Route>
          <PrivateRoute
            exact
            path="/user"
            component={ userData }
          />
          <Route path="*" render={() => <h1>404</h1>}></Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}
}

export default App;
