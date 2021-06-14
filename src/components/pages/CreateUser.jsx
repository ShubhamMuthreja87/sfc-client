import ConfirmCreateUser from "../pageComponents/createUser/ConfirmCreateUser";
import CreateUserForm from "../pageComponents/createUser/CreateUserForm";
import Failure from "../pageComponents/commons/Failure";
import React from "react";
import Success from "../pageComponents/commons/Success";
import { URL_ADD_USER } from "../../urls";
import axios from "axios";
var qs = require('qs');

function CreateUser() {
  const [nav, setNav] = React.useState(0);
  const [values, setValues] = React.useState({});
  function onClick(values) {
    setValues(values);
    setNav(1);
  }
  function onEdit() {
    setNav(0);
  }
  async function addUser() {
    try {
      let res = await axios.request({
        method: "post",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        url: URL_ADD_USER,
        data: qs.stringify(values)
      });
      console.log(res);
      if (res.data.message === "success") {
        setNav(2);
      } else {
        setNav(3);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong contact admin");
      setNav(3);
    }
    console.log(values);
  }
  if (nav === 0) {
    return <CreateUserForm clicked={onClick} values={values} />
  } else if (nav === 1) {
    return <ConfirmCreateUser values={values} onEdit={onEdit} addUser={addUser} />
  } else if (nav === 2) {
    return <Success subheader="The user was created successfully, user can start using his portal" title="User Created Successfully" />
  } else {
    return <Failure subheader="There was an error, User wasn't created ! Please contact admin" title="User Not Created !" />
  }
}
export default CreateUser;