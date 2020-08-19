/* eslint-disable react/display-name */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Sidebar from './Sidebar';

const Layout = (Component) => () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={2} sm={2} md={4} lg={4}>
        <Sidebar />
      </Grid>
      <Grid item xs={10} md={8} lg={8}>
        <Component />
      </Grid>
    </Grid>
  );
};

export default Layout;
