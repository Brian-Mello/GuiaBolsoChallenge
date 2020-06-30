import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import HomePage from "../HomePage";
import CategoryPage from "../CategoryJokePage"


export const routes = {
  home: "/",
  categoryPage: "/categories/:category"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.categoryPage} component={CategoryPage}/>
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
