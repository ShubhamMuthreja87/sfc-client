import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import LockOpenIcon from '@material-ui/icons/LockOpen';

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(3),
    backgroundColor : "#1C2539",
    color: "#F6DD39",
    "&:hover": {
        backgroundColor : "#F6DD39",
        color: "#1C2539",
      }
  },
}));

export default function LoginButton(props) {
  const classes = useStyles();

  return (
    <div>
     
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick = {()=>{
          props.clicked();
        }}
        className={classes.button}
        startIcon={<LockOpenIcon />}
      >
       Login
      </Button>
    </div>
  );
}
