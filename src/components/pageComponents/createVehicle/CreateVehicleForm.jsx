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
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { URL_FETCH_DRIVERS, URL_FETCH_MAKES, URL_FETCH_V_TYPES } from "../../../urls";

import DateFnsUtils from '@date-io/date-fns';
import InputAdornment from "@material-ui/core/InputAdornment";
import React from "react";
import axios from "axios";

function CreateVehicleForm(props) {
  const [vehicleTypeList, setVehicleTypes] = React.useState([]);
  const [driverList, setDrivers] = React.useState([]);
  const [makeList, setMake] = React.useState([]);
  const [purchaseDate, setPurchaseDate] = React.useState(new Date());
  const [insuranceExpiry, setinsuranceExpiry] = React.useState(new Date());
  const [fitnessExpiry, setfitnessExpiry] = React.useState(new Date());
  const [permitExpiry, setpermitExpiry] = React.useState(new Date());
  const [allTaxExpiry, setallTaxExpiry] = React.useState(new Date());

  const [errors, setErrors] = React.useState({
    vehicleType: true,
    vehicleNumber: true,
    make: true,
    ownerName: true,
    address: true,
    phone: true,
    altMobile: true,
    engineNumber: true,
    odoMeter: true,
    driverName: true,
    authorityName: true,
    model: true,
    pan: true,
    chasisNumber: true,
    rcNumber: true,

  });
  const [values, setValues] = React.useState({
    vehicleType: "",
    vehicleNumber: "",
    make: "",
    ownerName: "",
    address: "",
    phone: "",
    altMobile: "",
    engineNumber: "",
    odoMeter: "",
    driverName: "",
    authorityName: "",
    model: "",
    pan: "",
    chasisNumber: "",
    rcNumber: "",
  });

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
    if (Object.entries(props.values).length !== 0) {
      setValues(() => {
        return {
          ...props.values,
          vehicleType: "",
          make: "",
          driverName: ""
        }
      });
      setErrors({
        vehicleNumber: false,
        ownerName: false,
        address: false,
        phone: false,
        altMobile: false,
        engineNumber: false,
        odoMeter: false,
        authorityName: false,
        model: false,
        pan: false,
        chasisNumber: false,
        rcNumber: false,
      });
      setPurchaseDate(props.values.dop);
      setinsuranceExpiry(props.values.insuranceExp);
      setfitnessExpiry(props.values.fitnessExp);
      setpermitExpiry(props.values.permitExp);
      setallTaxExpiry(props.values.allTaxExp);
    }
  }, [props.values]);

  React.useEffect(() => {
    axios.get(URL_FETCH_V_TYPES).then((res) => {
      setVehicleTypes(res.data);
    });
    axios.get(URL_FETCH_DRIVERS).then((res) => {
      setDrivers(res.data);
    });
    axios.get(URL_FETCH_MAKES).then((res) => {
      setMake(res.data);
    });
  }, []);

  function confirmInputs() {
    if (
      values.vehicleType === "" ||
      values.vehicleNumber === "" ||
      values.make === "" ||
      values.ownerName === "" ||
      values.address === "" ||
      values.phone === "" ||
      values.engineNumber === "" ||
      values.odoMeter === "" ||
      values.driverName === "" ||
      values.authorityName === "" ||
      values.model === "" ||
      values.pan === "" ||
      values.chasisNumber === "" ||
      values.rcNumber === ""
    ) {
      alert("Please check all mandatory feilds !");
    } else {
      props.clicked({ ...values, dop: purchaseDate, insuranceExp: insuranceExpiry, permitExp: permitExpiry, fitnessExp: fitnessExpiry, allTaxExp: allTaxExpiry });
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
                title="Create Vehicle"
              />
              <Divider />
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item md={3} sm={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Vehicle Type"
                      name="vehicleType"
                      error={errors.vehicleType}
                      select
                      required
                      onChange={handleChange}
                      SelectProps={{ native: true }}
                      variant="outlined"
                    >
                      {vehicleTypeList.map((option) => (
                        <option key={option.type} value={option.type}>
                          {option.type}
                        </option>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item md={3} sm={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Vehicle Number"
                      name="vehicleNumber"
                      value={values.vehicleNumber}
                      error={errors.vehicleNumber}
                      required
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={3} sm={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Make"
                      name="make"
                      error={errors.make}
                      select
                      required
                      onChange={handleChange}
                      SelectProps={{ native: true }}
                      variant="outlined"
                    >
                      {makeList.map((option) => (
                        <option key={option.brandName} value={option.brandName}>
                          {option.brandName}
                        </option>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item md={3} sm={6} xs={12}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        label="Purchase Date"
                        fullWidth
                        name="dob"
                        format="dd/MM/yyyy"
                        required
                        value={purchaseDate}
                        onChange={setPurchaseDate}
                        animateYearScrolling
                      />
                    </MuiPickersUtilsProvider>
                  </Grid>
                  <Grid item md={3} sm={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Owner Name"
                      name="ownerName"
                      value={values.ownerName}
                      error={errors.ownerName}
                      required
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={3} sm={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Address"
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
                      fullWidth
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
                      label="Alternate Ph. No."
                      name="altMobile"
                      required
                      error={errors.altMobile}
                      value={values.altMobile}
                      variant="outlined"
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item md={3} sm={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Pan"
                      name="pan"
                      required
                      error={errors.pan}
                      value={values.pan}
                      variant="outlined"
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item md={3} sm={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Engine Number"
                      name="engineNumber"
                      required
                      error={errors.engineNumber}
                      value={values.engineNumber}
                      variant="outlined"
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item md={3} sm={6} xs={12}>
                    <TextField
                      fullWidth
                      label="ODO meter"
                      name="odoMeter"
                      required
                      error={errors.odoMeter}
                      value={values.odoMeter}
                      InputProps={{
                        endAdornment: <InputAdornment position="end">Kms</InputAdornment>
                      }}
                      variant="outlined"
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item md={3} sm={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Authority Name"
                      name="authorityName"
                      required
                      error={errors.authorityName}
                      value={values.authorityName}
                      variant="outlined"
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item md={3} sm={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Model"
                      name="model"
                      required
                      error={errors.model}
                      value={values.model}
                      variant="outlined"
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid item md={3} sm={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Chasis Number"
                      name="chasisNumber"
                      required
                      error={errors.chasisNumber}
                      value={values.chasisNumber}
                      variant="outlined"
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item md={3} sm={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Rc Number"
                      name="rcNumber"
                      required
                      error={errors.rcNumber}
                      value={values.rcNumber}
                      variant="outlined"
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item md={3} sm={6} xs={12}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        label="Insurance Expiry"
                        fullWidth
                        name="insuranceExpiry"
                        format="dd/MM/yyyy"
                        required
                        value={insuranceExpiry}
                        onChange={setinsuranceExpiry}
                        animateYearScrolling
                      />
                    </MuiPickersUtilsProvider>
                  </Grid>
                  <Grid item md={3} sm={6} xs={12}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        label="Fitness Expiry"
                        fullWidth
                        name="fitnessExpiry"
                        format="dd/MM/yyyy"
                        required
                        value={fitnessExpiry}
                        onChange={setfitnessExpiry}
                        animateYearScrolling
                      />
                    </MuiPickersUtilsProvider>
                  </Grid>
                  <Grid item md={3} sm={6} xs={12}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        label="Permit Expiry"
                        fullWidth
                        name="permitExpiry"
                        format="dd/MM/yyyy"
                        required
                        value={permitExpiry}
                        onChange={setpermitExpiry}
                        animateYearScrolling
                      />
                    </MuiPickersUtilsProvider>
                  </Grid>
                  <Grid item md={3} sm={6} xs={12}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        label="All Tax Expiry"
                        fullWidth
                        name="allTaxExpiry"
                        format="dd/MM/yyyy"
                        required
                        value={allTaxExpiry}
                        onChange={setallTaxExpiry}
                        animateYearScrolling
                      />
                    </MuiPickersUtilsProvider>
                  </Grid>
                  <Grid item md={3} sm={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Driver Name"
                      name="driverName"
                      required
                      error={errors.driverName}
                      select
                      onChange={handleChange}
                      SelectProps={{ native: true }}
                      variant="outlined"
                    >
                      {driverList.map((option) => (
                        option.firstName === "" ? <option key={option.firstName} value={option.firstName}>
                          {option.firstName}
                        </option> :
                          <option key={option.firstName + "S/O" + option.motherName} value={option.firstName}>
                            {option.firstName + " S/O " + option.motherName}
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
export default CreateVehicleForm;
