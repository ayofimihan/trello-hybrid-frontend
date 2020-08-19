import React from 'react';
import { NavLink } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import List from '@material-ui/core/List';
import { Styles } from './style';

const Routes = () => {
  const classes = Styles();
  return (
    <List>
      <NavLink to="/" activeClassName={classes.active}>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
      </NavLink>
      <NavLink to="/projects" activeClassName={classes.active}>
        <ListItem button>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Projects" />
        </ListItem>
      </NavLink>
      <NavLink to="/reports" activeClassName={classes.active}>
        <ListItem button>
          <ListItemIcon>
            <BarChartIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItem>
      </NavLink>
      <NavLink to="/settings" activeClassName={classes.active}>
        <ListItem button>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </NavLink>
      <NavLink to="/profile" activeClassName={classes.active}>
        <ListItem button>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="My Profile" />
        </ListItem>
      </NavLink>
    </List>
  );
};

export default Routes;
