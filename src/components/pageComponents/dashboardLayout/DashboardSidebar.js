import { Avatar, Box, Divider, Hidden, Typography } from "@material-ui/core";
import { Button, Collapse, Drawer, List, ListItem } from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { Link as RouterLink, matchPath, useLocation } from "react-router-dom";
import { forwardRef, useEffect, useState } from "react";

import PropTypes from "prop-types";
import clsx from "clsx";
import useStyles from "./menuBarStyles";

const user = {
  avatar: "/assets/avatar_6.png",
  jobTitle: "Senior Developer",
  name: "Shubham Muthreja",
};

const items = [
  {
    name: "Home",
    url: "/app/dashboard",
  },
  {
    name: "Inventory",
    children: [
      {
        name: "Create Branch",
        url: "/app/createBranch",
      }
      ,
      {
        name: "User Setup",
        url: "/app/createUser",
      },
      {
        name: "Vehicle Setup",
        url: "/app/createVehicle",
      },
      {
        name: "Driver Setup",
        url: "/app/createDriver",
      },
    ],
  },
  {
    name: "Client",
    children: [
      {
        name: "Client Setup",
        url: "/app/createClient",
      },
      {
        name: "Child32",
        url: "/app/account",
      },
      {
        name: "Child33",
        url: "/app/customers",
      },
    ],
  },
  {
    name: "Item4",
    children: [
      {
        name: "Child41",
        url: "/app/customers",
      },
      {
        name: "Child42",
        url: "/child42",
      },
    ],
  },
];

const DashboardSidebar = ({ onMobileClose, openMobile }) => {
  const location = useLocation();
  const classes = useStyles();
  const [menu, setMenu] = useState({});
  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);
  const handleClick = (item) => {
    let newData = { ...menu, [item]: !menu[item] };
    setMenu(newData);
  };

  const CustomRouterLink = forwardRef((props, ref) => (
    <div ref={ref} style={{ flexGrow: 1 }}>
      <RouterLink {...props} />
    </div>
  ));

  const handleMenu = (children, level = 0) => {
    return children.map(({ children, name, url }) => {
      const active = url
        ? !!matchPath(
            {
              path: url,
              end: false,
            },
            location.pathname
          )
        : false;
      if (!children) {
        return (
          <List component="div" disablePadding key={name}>
            <ListItem
              className={classes.item}
              disableGutters
              style={{ padding: "0px" }}
              key={name}
            >
              <Button
                sx={{
                  color: "text.secondary",
                  fontWeight: "medium",
                  justifyContent: "flex-start",
                  letterSpacing: 0,
                  py: 1.25,
                  textTransform: "none",
                  width: "100%",
                  ...(active && {
                    color: "primary.main",
                  }),
                  "& svg": {
                    mr: 1,
                  },
                }}
                component={CustomRouterLink}
                to={url}
              >
                <span>{name}</span>
              </Button>
            </ListItem>
          </List>
        );
      }
      return (
        <div key={name}>
          <ListItem
            className={classes.item}
            disableGutters
            key={name}
            onClick={() => handleClick(name)}
          >
            <Button
              className={clsx({
                [classes.btnRoot]: true,
                [classes.button]: true,
                [classes.subMenu]: level,
              })}
            >
              {name} {menu[name] ? <ExpandLess /> : <ExpandMore />}
            </Button>
          </ListItem>
          <Collapse in={menu[name] ? true : false} timeout="auto" unmountOnExit>
            {handleMenu(children, 1)}
          </Collapse>
        </div>
      );
    });
  };
  function clicked() {
    sessionStorage.removeItem("token");
    console.log(sessionStorage.getItem("token"));
    window.location.reload(true);
  }
  const content = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          p: 2,
        }}
      >
        <Avatar
          component={RouterLink}
          src={user.avatar}
          sx={{
            cursor: "pointer",
            width: 64,
            height: 64,
          }}
          to="/app/account"
        />
        <Typography color="textPrimary" variant="h5">
          {user.name}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {user.jobTitle}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <List className={clsx(classes.root)}>{handleMenu(items)}</List>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <Box
        sx={{
          backgroundColor: "background.default",
          m: 2,
          p: 2,
        }}
      >
        <Button
          color="primary"
          component="a"
          variant="contained"
          onClick={clicked}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
          PaperProps={{
            sx: {
              width: 256,
            },
          }}
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <Drawer
          anchor="left"
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: 256,
              top: 64,
              height: "calc(100% - 64px)",
            },
          }}
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

DashboardSidebar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false,
};

export default DashboardSidebar;
