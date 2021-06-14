import 'date-fns';
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
import DateFnsUtils from '@date-io/date-fns';
import InputAdornment from "@material-ui/core/InputAdornment";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import React from "react";
import { URL_FETCH_CITIES, URL_FETCH_STATES } from "../../../urls";
import axios from "axios";

function CreateDriverForm(props) {
  const [selectedDob, handleChangeDob] = React.useState(new Date());
  const [selectedDoj, handleChangeDoj] = React.useState(new Date());
  const [stateList, setStates] = React.useState([]);
  const [cityList, setCities] = React.useState([]);
  const [selectedLicenceExp, handleChangeLicenceExp] = React.useState(new Date());
  const [errors, setErrors] = React.useState({
    firstName: true,
    lastName: true,
    mothersName: true,
    license: true,
    salary: true,
    guarantor: true,
    guarantorNumber: true,
    aadharNo: true,
    address: true,
    phone: true,
    state: true,
    city: true
  });
  const [values, setValues] = React.useState({
    firstName: "",
    lastName: "",
    mothersName: "",
    license: "",
    salary: "",
    guarantor: "",
    guarantorNumber: "",
    aadharNo: "",
    address: "",
    phone: "",
    state: "",
    city: ""
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
        firstName: false,
        lastName: false,
        mothersName: false,
        license: false,
        salary: false,
        guarantor: false,
        guarantorNumber: false,
        aadharNo: false,
        address: false,
        phone: false,
        state: true,
        city: true
      });
      handleChangeDob(props.values.dob);
      handleChangeDoj(props.values.doj);
      handleChangeLicenceExp(props.values.licenceExp);
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
      values.firstName === "" ||
      values.lastName === "" ||
      values.mothersName === "" ||
      values.license === "" ||
      values.salary === "" ||
      values.guarantor === "" ||
      values.guarantorNumber === "" ||
      values.aadharNo === "" ||
      values.address === "" ||
      values.phone === "" ||
      values.state === "" ||
      values.city === ""
    ) {
      alert("Please check all mandatory feilds !");
    } else {
      props.clicked({...values,dob:selectedDob,doj:selectedDoj,licenceExp:selectedLicenceExp});
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
                title="Create Driver"
              />
              <Divider />
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item md={3} sm={6} xs={12}>
                    <TextField
                      fullWidth
                      key="fname"
                      value={values.firstName}
                      label="First Name"
                      name="firstName"
                      required
                      error={errors.firstName}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={3} sm={6} xs={12}>
                    <TextField
                      fullWidth
                      key="lname"
                      value={values.lastName}
                      label="Last Name"
                      name="lastName"
                      error={errors.lastName}
                      required
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={3} sm={6} xs={12}>
                    <TextField
                      fullWidth
                      key="mname"
                      value={values.mothersName}
                      label="Mother's Name"
                      name="mothersName"
                      error={errors.mothersName}
                      required
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={3} sm={6} xs={12}>
                    <TextField
                      fullWidth
                      key="phone"
                      value={values.phone}
                      label="Driver's Mobile Number"
                      name="phone"
                      error={errors.phone}
                      required
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={3} sm={6} xs={12}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        label="Date Of Birth"
                        fullWidth
                        name="dob"
                        format="dd/MM/yyyy"
                        required
                        value={selectedDob}
                        onChange={handleChangeDob}
                        animateYearScrolling
                      />
                    </MuiPickersUtilsProvider>
                  </Grid>
                  <Grid item md={3} sm={6} xs={12}>
                    <TextField
                      fullWidth
                      key="lnum"
                      value={values.license}
                      label="Licence Number"
                      name="license"
                      error={errors.license}
                      required
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={3} sm={6} xs={12}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        label="Licence Expiry"
                        fullWidth
                        name="licenceExp"
                        format="dd/MM/yyyy"
                        required
                        value={selectedLicenceExp}
                        onChange={handleChangeLicenceExp}
                        animateYearScrolling
                      />
                    </MuiPickersUtilsProvider>
                  </Grid>
                  <Grid item md={3} sm={6} xs={12}>
                    <TextField
                      fullWidth
                      key="salary"
                      value={values.salary}
                      label="Salary"
                      name="salary"
                      required
                      error={errors.salary}
                      InputProps={{
                        startAdornment: <InputAdornment position="start">₹</InputAdornment>
                      }}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={3} sm={6} xs={12}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        label="Date Of Joining"
                        fullWidth
                        name="joiningDate"
                        format="dd/MM/yyyy"
                        required
                        value={selectedDoj}
                        onChange={handleChangeDoj}
                        animateYearScrolling
                      />
                    </MuiPickersUtilsProvider>
                  </Grid>
                  <Grid item md={3} sm={6} xs={12}>
                    <TextField
                      fullWidth
                      key="guarantor"
                      value={values.guarantor}
                      label="Guarantor"
                      name="guarantor"
                      error={errors.guarantor}
                      required
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={3} sm={6} xs={12}>
                    <TextField
                      fullWidth
                      key="guarantornumber"
                      value={values.guarantorNumber}
                      label="Guarantor Number"
                      name="guarantorNumber"
                      error={errors.guarantorNumber}
                      required
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={3} sm={6} xs={12}>
                    <TextField
                      fullWidth
                      key="aadhar"
                      value={values.aadharNo}
                      label="Aadhar Number"
                      name="aadharNo"
                      error={errors.aadharNo}
                      required
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={3} sm={6} xs={12}>
                    <TextField
                      fullWidth
                      key="address"
                      value={values.address}
                      label="Address"
                      name="address"
                      error={errors.address}
                      required
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={3} sm={6} xs={12}>
                    <TextField
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
export default CreateDriverForm;
