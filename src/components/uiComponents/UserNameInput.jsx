import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
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
        borderColor: "#1C2539",
      },
    },
  },
}));

export default function UserNameInput(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <FormControl className={clsx(classes.margin , classes.inputStyle)} variant="outlined">
          <InputLabel htmlFor="outlined-adornment">User Name</InputLabel>
          <OutlinedInput
            onChange = {props.inputChanged}
            id="outlined-adornment"
            name="email"
            error = {props.error}
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end">
                  <AccountCircleIcon />
                </IconButton>
              </InputAdornment>
            }
            labelWidth={90}
          />
        </FormControl>
      </div>
    </div>
  );
}
