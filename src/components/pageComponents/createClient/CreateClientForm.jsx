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
import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { URL_FETCH_CITIES, URL_FETCH_STATES } from "../../../urls";

import DateFnsUtils from '@date-io/date-fns';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import React from "react";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    divider: {
        margin: "20px 0px"
    },
});

function CreateClientForm(props) {

    const classes = useStyles();

    const [setContractStart, handleChangeContractStart] = React.useState(new Date());
    const [setContractExpiry, handleChangeContractExpiry] = React.useState(new Date());

    const [stateList, setStates] = React.useState([]);
    const [cityList, setCities] = React.useState([]);
    const [contractType, setContractType] = React.useState("");
    const [visible, setVisible] = React.useState(false);


    const handleRadioChange = (event) => {
        setContractType(event.target.value);
        if (event.target.value === "Contractual") {
            setVisible(true);
        } else if (event.target.value === "Non Contractual") {
            setVisible(false);
        }
    };

    const [errors, setErrors] = React.useState({
        clientName: true,
        address: true,
        state: true,
        city: true,
        gst: true,
        contactName: true,
        contactNumber: true,
        contactDesignation: true,
    });
    const [values, setValues] = React.useState({
        clientName: "",
        address: "",
        state: "",
        city: "",
        gst: "",
        contactName: "",
        contactNumber: "",
        contactDesignation: "",
    });


    React.useEffect(() => {
        if (Object.entries(props.values).length !== 0) {
            console.log(props.values);
            setValues(() => {
                return {
                    ...props.values,
                    state: "",
                    city: "",
                }
            });
            setErrors({
                clientName: false,
                address: false,
                state: false,
                city: false,
                gst: false,
                contactName: false,
                contactNumber: false,
                contactDesignation: false,
            });

            handleChangeContractStart(new Date());
            handleChangeContractExpiry(new Date());


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

    async function getStates() {
        try {
            let res = await axios.get(URL_FETCH_STATES);
            setStates(res.data);
        } catch (error) {
            alert("Something went wrong contact admin");
        }
    }

    React.useEffect(() => {
        getStates();
    }, []);

    async function stateChanged(event) {
        try {
            let res = await axios
                .get(URL_FETCH_CITIES, { params: { state: event.target.value } });
            setCities(res.data);
        } catch (error) {
            alert("Something went wrong contact admin");
        }
        handleChange(event);
    }

    function confirmInputs() {
        if (
            values.clientName === "" ||
            values.address === "" ||
            values.state === "" ||
            values.city === "" ||
            values.gst === "" ||
            values.contactName === "" ||
            values.contactNumber === "" ||
            values.contactDesignation === "" ||
            contractType === ""
        ) {
            alert("Please check all mandatory feilds !");
        } else {
            if (contractType === "Contractual") {
                console.log("contractual")
                props.clicked({ ...values, contractType: contractType, contractStart: setContractStart, contractExpiry: setContractExpiry });
            } else {
                console.log(" non contractual")
                props.clicked({ ...values, contractStart: "", contractExpiry: "", contracType: contractType });
            }

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
                                title="Create Client"
                            />
                            <Divider />
                            <CardContent>
                                <Grid container spacing={2}>
                                    <Grid item md={3} sm={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            key="cName"
                                            value={values.clientName}
                                            label="Client Name"
                                            name="clientName"
                                            required
                                            error={errors.clientName}
                                            onChange={handleChange}
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item md={3} sm={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            key="addr"
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
                                    <Grid item md={3} sm={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            key="gst"
                                            value={values.gst}
                                            label="GST Number"
                                            name="gst"
                                            error={errors.gst}
                                            required
                                            onChange={handleChange}
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item md={3} sm={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            key="contactName"
                                            value={values.contactName}
                                            label="Contact Name"
                                            name="contactName"
                                            error={errors.contactName}
                                            required
                                            onChange={handleChange}
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item md={3} sm={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            key="contactNumber"
                                            value={values.contactNumber}
                                            label="Contact Number"
                                            name="contactNumber"
                                            error={errors.contactNumber}
                                            required
                                            onChange={handleChange}
                                            variant="outlined"
                                        />
                                    </Grid>


                                    <Grid item md={3} sm={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            key="contactDesignation"
                                            value={values.contactDesignation}
                                            label="Contact Designation"
                                            name="contactDesignation"
                                            error={errors.contactDesignation}
                                            required
                                            onChange={handleChange}
                                            variant="outlined"
                                        />
                                    </Grid>

                                    <Grid item md={3} sm={6} xs={12}>

                                        <RadioGroup
                                            row
                                            value={contractType}
                                            onChange={handleRadioChange}
                                        >
                                            <FormControlLabel
                                                value="Contractual"
                                                control={<Radio />}
                                                label="Contractual"
                                            />
                                            <FormControlLabel
                                                value="Non Contractual"
                                                control={<Radio />}
                                                label="Non Contractual"
                                            />
                                        </RadioGroup>

                                    </Grid>
                                </Grid>

                                {visible ? <div>
                                    <Divider className={classes.divider} />
                                    <Grid container spacing={2}>
                                        <Grid item md={3} sm={6} xs={12}>
                                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                <KeyboardDatePicker
                                                    label="Contract Start"
                                                    fullWidth
                                                    name="contractStart"
                                                    format="dd/MM/yyyy"
                                                    required
                                                    value={setContractStart}
                                                    onChange={handleChangeContractStart}
                                                    animateYearScrolling
                                                />
                                            </MuiPickersUtilsProvider>
                                        </Grid>

                                        <Grid item md={3} sm={6} xs={12}>
                                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                <KeyboardDatePicker
                                                    label="Contract End"
                                                    fullWidth
                                                    name="contractEnd"
                                                    format="dd/MM/yyyy"
                                                    required
                                                    value={setContractExpiry}
                                                    onChange={handleChangeContractExpiry}
                                                    animateYearScrolling
                                                />
                                            </MuiPickersUtilsProvider>
                                        </Grid>
                                    </Grid>
                                </div> : <div></div>}

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
export default CreateClientForm;
