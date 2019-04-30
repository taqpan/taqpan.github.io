import * as React from "react";
import { Route, RouteComponentProps, Switch, withRouter } from "react-router-dom";
import Example from "../example/Example";
import Gengo from "../gengo/Gengo";
import Home from "../home/Home";
import Navigation from "../navigation/Navigation";
import { app } from "./App.scss";

class App extends React.Component<RouteComponentProps> {
  public render() {
    if (sessionStorage) {
      const path = sessionStorage.getItem("redirect");
      if (path) {
        this.props.history.replace(path);
        sessionStorage.removeItem("redirect");
      }
    }

    return <div className={app}>
      <Navigation/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/example" render={
          () => <Example content="Example Component &#x1f603;"/>
        }/>
        <Route path="/gengo" component={Gengo}/>
      </Switch>
    </div>;
  }
}

export default withRouter(App);
