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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { Auth: true };
  }
  render() {
    const PrivateRoute = ({ component: Component, ...rest }) => {
      <Route
        {...rest}
        render={(props) =>
          this.state.Auth === true ? (
            <component {...rest} />
          ) : (
            <Redirect to="/" />
          )
        }
      />;
    };
    return (
      <React.Fragment>
        <Nav />
        <Router>
          <Switch>
            <Route exact path="/" component={Counters}></Route>
            <PrivateRoute
              exact
              path="/user"
              component={userData}
            ></PrivateRoute>
            <Route path="*" render={() => <h1>404</h1>}></Route>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
