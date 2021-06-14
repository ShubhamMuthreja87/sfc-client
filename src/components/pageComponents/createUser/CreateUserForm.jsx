import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@material-ui/core";

import React from "react";
import { URL_FETCH_BRANCHES } from "../../../urls";
import axios from "axios";

function CreateUserForm(props) {
  const [branchList, setBranches] = React.useState([]);
  const roles = [
    {
      name: "",
    },
    {
      name: "Feild Operative",
    },
    {
      name: "Operations Executive",
    },
    {
      name: "Management",
    }, {
      name: "Senior Management",
    },
  ];
  const [errors, setErrors] = React.useState({
    firstName: true,
    lastName: true,
    designation: true,
    branch: true,
    password: true,
    phone: true,
    role: true,
    email: true
  });
  const [values, setValues] = React.useState({
    firstName: "",
    lastName: "",
    designation: "",
    branch: "",
    password: "",
    phone: "",
    role: "",
    email: ""
  });

  React.useEffect(() => {
    if (Object.entries(props.values).length !== 0) {
      setValues(() => {
        return {
          ...props.values,
          role: "",
          branch: "",
        }
      });
      setErrors({
        firstName: false,
        lastName: false,
        designation: false,
        branch: true,
        password: false,
        phone: false,
        role: true,
        email: false
      });
    }
  }, [props.values]);

  function handleChange(event) {
    const { name, value } = event.target;

    setValues((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });

    if (value !== "") {
      setErrors((prevValue) => {
        return {
          ...prevValue,
          [name]: false,
        };
      });
    } else {
      setErrors((prevValue) => {
        return {
          ...prevValue,
          [name]: true,
        };
      });
    }
  }

  React.useEffect(() => {
    axios.get(URL_FETCH_BRANCHES).then((res) => {
      setBranches(res.data);
    });
  }, []);

  function confirmInputs() {
    if (
      values.firstName === "" ||
      values.lastName === "" ||
      values.designation === "" ||
      values.branch === "" ||
      values.password === "" ||
      values.phone === "" ||
      values.role === "" ||
      values.email === ""
    ) {
      alert("Please check all mandatory feilds !");
    } else {
      props.clicked(values);
    }
  }
  return (
    <div className="marginStart">
      <Grid container spacing={1} alignItems="center">
        <Grid item xs={12}>
          <form autoComplete="off" noValidate>
            <Card>
              <CardHeader
                subheader="Please specify all feilds."
                title="Create User"
              />
              <Divider />
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item md={3} sm={6} xs={12}>
                    <TextField
                      key="fname"
                      fullWidth
                      label="First Name"
                      name="firstName"
                      required
                      value={values.firstName}
                      error={errors.firstName}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={3} sm={6} xs={12}>
                    <TextField
                      key="lname"
                      fullWidth
                      label="Last Name"
                      name="lastName"
                      value={values.lastName}
                      error={errors.lastName}
                      required
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={3} sm={6} xs={12}>
                    <TextField
                      key="email"
                      fullWidth
                      label="Email"
                      name="email"
                      value={values.email}
                      error={errors.email}
                      required
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={3} sm={6} xs={12}>
                    <TextField
                      key="designation"
                      fullWidth
                      label="Designation"
                      name="designation"
                      value={values.designation}
                      error={errors.designation}
                      required
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={3} sm={6} xs={12}>
                    <TextField
                      fullWidth
                      key="role"
                      label="Role"
                      name="role"
                      error={errors.role}
                      select
                      onChange={handleChange}
                      SelectProps={{ native: true }}
                      variant="outlined"
                    >
                      {roles.map((option) => (
                        <option key={option.name} value={option.name}>
                          {option.name}
                        </option>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item md={3} sm={6} xs={12}>
                    <TextField
                      fullWidth
                      key="phone"
                      label="Phone Number"
                      name="phone"
                      required
                      value={values.phone}
                      error={errors.phone}
                      variant="outlined"
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item md={3} sm={6} xs={12}>
                    <TextField
                      fullWidth
                      key="password"
                      label="Password"
                      name="password"
                      required
                      value={values.password}
                      error={errors.password}
                      variant="outlined"
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item md={3} sm={6} xs={12}>
                    <TextField
                      fullWidth
                      key="branch"
                      label="Branch"
                      name="branch"
                      required
                      error={errors.branch}
                      select
                      onChange={handleChange}
                      SelectProps={{ native: true }}
                      variant="outlined"
                    >
                      {branchList.map((option) => (
                        <option key={option._id} value={option.branchName}>
                          {option.branchName}
                        </option>
                      ))}
                    </TextField>
                  </Grid>
                </Grid>
              </CardContent>
              <Divider />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  p: 2,
                }}
              >
                <Button
                  color="primary"
                  variant="contained"
                  onClick={confirmInputs}
                >
                  Confirm
                </Button>
              </Box>
            </Card>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}
export default CreateUserForm;
