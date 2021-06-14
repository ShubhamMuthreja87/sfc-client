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
import { URL_FETCH_CITIES, URL_FETCH_STATES } from "../../../urls";

import React from "react";
import axios from "axios";

function CreateBranchForm(props) {
  const [stateList, setStates] = React.useState([]);
  const [cityList, setCities] = React.useState([]);
  const [errors, setErrors] = React.useState({
    branchName: true,
    address: true,
    email: true,
    phone: true,
    branchCode: true,
    state: true,
    city: true,
    pincode: true
  });
  const [values, setValues] = React.useState({
    branchName: "",
    address: "",
    email: "",
    phone: "",
    branchCode: "",
    state: "",
    city: "",
    pincode: ""
  });

  React.useEffect(() => {
    if (Object.entries(props.values).length !== 0) {
      setValues(() => {
        return {
          ...props.values,
          state: "",
          city: "",
        }
      });
      setErrors({
        branchName: false,
        address: false,
        email: false,
        phone: false,
        branchCode: false,
        state: true,
        city: true,
        pincode: false
      });
    }
  }, [props.values]);
  function handleChange(event) {
    const { name, value } = event.target;

    setValues((prevValue) => {
      if (name === "state") {
        return {
          ...prevValue,
          state: value,
          city: "",
        };
      } else {
        return {
          ...prevValue,
          [name]: value,
        };
      }
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
  async function getStates(){
    try{
      let res = await axios.get(URL_FETCH_STATES);
      setStates(res.data);
    }catch(error){
      alert("Something went wrong contact admin");
    }
  }

  React.useEffect(() => {
    getStates();
  }, []);

 async function stateChanged(event) {
   try{
    let res = await  axios
    .get(URL_FETCH_CITIES, { params: { state: event.target.value } });
    setCities(res.data);
   }catch(error){
    alert("Something went wrong contact admin");
   }
    handleChange(event);
  }
  function confirmInputs() {
    if (
      values.branchName === "" ||
      values.address === "" ||
      values.phone === "" ||
      values.branchCode === "" ||
      values.state === "" ||
      values.city === "" ||
      values.pincode === ""
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
                title="Create Branch"
              />
              <Divider />
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item md={3} sm={6} xs={12}>
                    <TextField
                      fullWidth
                      key="branchname"
                      label="Branch Name"
                      name="branchName"
                      required
                      value={values.branchName}
                      error={errors.branchName}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={3} sm={6} xs={12}>
                    <TextField
                      fullWidth
                      key="address"
                      label="Branch Address"
                      name="address"
                      value={values.address}
                      error={errors.address}
                      required
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={3} sm={6} xs={12}>
                    <TextField
                      key="pincode"
                      fullWidth
                      label="Pincode"
                      name="pincode"
                      error={errors.pincode}
                      value={values.pincode}
                      required
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={3} sm={6} xs={12}>
                    <TextField
                      fullWidth
                      key="email"
                      label="Branch Email Address"
                      name="email"
                      variant="outlined"
                      value={values.email}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item md={3} sm={6} xs={12}>
                    <TextField
                      fullWidth
                      key="number"
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
                      key="code"
                      label="Branch Code"
                      name="branchCode"
                      required
                      value={values.branchCode}
                      error={errors.branchCode}
                      variant="outlined"
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item md={3} sm={6} xs={12}>
                    <TextField
                      key="state"
                      fullWidth
                      label="State"
                      name="state"
                      required
                      error={errors.state}
                      select
                      SelectProps={{ native: true }}
                      variant="outlined"
                      onChange={stateChanged}
                    >
                      {stateList.map((option) => (
                        <option key={option.name} value={option.name}>
                          {option.name}
                        </option>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item md={3} sm={6} xs={12}>
                    <TextField
                      key="city"
                      fullWidth
                      label="Select City"
                      name="city"
                      required
                      error={errors.city}
                      select
                      SelectProps={{ native: true }}
                      onChange={handleChange}
                      variant="outlined"
                    >
                      {cityList.map((option) => (
                        <option key={option.id} value={option.name}>
                          {option.name}
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
export default CreateBranchForm;
