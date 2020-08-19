import React, { Suspense, lazy } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';

const LandingPage = lazy(() => import('./components/landingPage'));

const Routes = () => (
  <Router>
    <Suspense
      fallback={
        <Backdrop
          open={true}
          style={{
            zIndex: 200,
            color: '#fff',
            backgroundColor: 'rgba(0, 0, 0, 0.9)'
          }}
        >
          <CircularProgress />
        </Backdrop>
      }
    >
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;
