import * as React from "react";
import { Route, RouteComponentProps, Switch, withRouter } from "react-router-dom";
import { BorderRadius } from "../border-radius/BorderRadius";
import { Gengo } from "../gengo/Gengo";
import { Home } from "../home/Home";
import { Navigation } from "../navigation/Navigation";
import { app } from "./App.scss";

// tslint:disable-next-line: no-var-requires
require("@blueprintjs/core/lib/css/blueprint.css");

class AppRoot extends React.Component<RouteComponentProps> {
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
        <Route path="/border-radius" component={BorderRadius}/>
        <Route path="/gengo" component={Gengo}/>
      </Switch>
    </div>;
  }
}

export const App = withRouter(AppRoot);
