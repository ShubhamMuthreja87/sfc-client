import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar
} from '@material-ui/core';

import InputIcon from '@material-ui/icons/Input';
import Logo from '../../uiComponents/logo';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';

const DashboardNavbar = ({ onMobileNavOpen, ...rest }) => {
  const [notifications] = useState([]);

  return (
    <AppBar
      elevation={0}
      {...rest}
    >
      <Toolbar>
        <RouterLink to="/">
        <div className="marginStart">
        <Logo />
        </div>
        </RouterLink>
        <Box sx={{ flexGrow: 1 }} />
        <Hidden lgDown>
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onMobileNavOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

DashboardNavbar.propTypes = {
  onMobileNavOpen: PropTypes.func
};

export default DashboardNavbar;
