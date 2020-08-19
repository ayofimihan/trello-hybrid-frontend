/* eslint-disable react/display-name */
import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import { Styles } from './style';
import Sidebar from './Sidebar';

const Layout = (Component) => () => {
  const classes = Styles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Sidebar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Component />
      </main>
    </div>
  );
};

export default Layout;
