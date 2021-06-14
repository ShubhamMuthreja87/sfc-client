import Grid from "@material-ui/core/Grid";
import LoginButton from "../uiComponents/LoginButton";
import PasswordInput from "../uiComponents/PasswordInput";
import React from "react";
import UserNameInput from "../uiComponents/UserNameInput";
import { getUser } from "../../redux/ducks/userSlice";
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";

function Login(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userDetails, setUserDetails] = React.useState({
    email: "",
    password: "",
  });
  const user = useSelector((state) => state.user);
  if(user.code===1){
    props.setToken(user.user.email);
    navigate("/app/dashboard");
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setUserDetails((prevValue) => {
      if (name === "email") {
        return {
          email: value,
          password: prevValue.password,
        };
      } else if (name === "password") {
        return {
          email: prevValue.email,
          password: value,
        };
      }
    });
  }
  function onCLick() {
    console.log("login clicked test 2");
    dispatch(
      getUser({ email: userDetails.email, password: userDetails.password })
    );
  }
  return (
    <div className="container">
      <Grid container spacing={1} alignItems="center">
        <Grid item xs={12} sm={6}>
          <div className="bg"> </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="heading">
            <h1>Login</h1>
          </div>
          <div>
            <form noValidate autoComplete="off">
              <UserNameInput inputChanged={handleChange} />
              <PasswordInput inputChanged={handleChange} />
              <LoginButton clicked={onCLick} />
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
export default Login;
