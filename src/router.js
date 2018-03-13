import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import { AuthorizedRoute } from './routes';
import { AuthorizedLayout, HomeLayout } from './layout/index.js'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/auth" component={ AuthorizedLayout }/>
        <AuthorizedRoute path="/" component={ HomeLayout }/>
        <Redirect to="/auth" />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
