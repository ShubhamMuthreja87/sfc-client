import React from 'react';
import clsx from 'clsx';
import {  makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    // flexWrap: 'wrap',
  },
  margin: {
    marginTop: theme.spacing(2),
  },
  inputStyle: {
    "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
        borderColor: "#1C2539"
    }
}
}
}));

export default function InputPassword(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    showPassword: false,
  });


  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.root}>
      <div>
        <FormControl className={clsx(classes.margin,classes.inputStyle )} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password} 
            error = {props.error}
            onChange={props.inputChanged}
            name = "password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
      
      </div>
    </div>
  );
}
