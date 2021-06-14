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
import InputAdornment from "@material-ui/core/InputAdornment";
import EditIcon from '@material-ui/icons/Edit';
import React from "react";
import SaveIcon from '@material-ui/icons/Save';

function ConfirmCreateDriver(props) {
    return (
        <div className="marginStart marginTopDashboard">
            <Grid container spacing={1} alignItems="center">
                <Grid item xs={12}>
                    <form autoComplete="off" noValidate>
                        <Card>
                            <CardHeader
                                subheader="Please Confirm all feilds."
                                title="Create User"
                            />
                            <Divider />
                            <CardContent>
                                <Grid container spacing={2}>
                                    <Grid item sm={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="First Name"
                                            name="firstName"
                                            disabled
                                            error
                                            variant="standard"
                                            value={props.values.firstName}
                                        />
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Last Name"
                                            name="lastName"
                                            disabled
                                            error
                                            variant="standard"
                                            value={props.values.lastName}
                                        />
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="License"
                                            name="license"
                                            disabled
                                            error
                                            variant="standard"
                                            value={props.values.license}
                                        />
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Salary"
                                            name="salary"
                                            disabled
                                            error
                                            variant="standard"
                                            InputProps={{
                                                startAdornment: <InputAdornment position="start">₹</InputAdornment>
                                            }}
                                            value={props.values.salary}
                                        />
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Driver's Phonenumber"
                                            name="phone"
                                            disabled
                                            error
                                            variant="standard"
                                            value={props.values.phone}
                                        />
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Driver's Date Of Birth"
                                            name="dob"
                                            disabled
                                            error
                                            variant="standard"
                                            value={props.values.dob.toDateString()}
                                        />
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Driver's Date Of Joining"
                                            name="doj"
                                            disabled
                                            error
                                            variant="standard"
                                            value={props.values.doj.toDateString()}
                                        />
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Driver's License Expiry"
                                            name="lexp"
                                            disabled
                                            error
                                            variant="standard"
                                            value={props.values.licenceExp.toDateString()}
                                        />
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Guarantor"
                                            name="guarantor"
                                            disabled
                                            error
                                            variant="standard"
                                            value={props.values.guarantor}
                                        />
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Guarantor's Phonenumber"
                                            name="guarantorNumber"
                                            disabled
                                            error
                                            variant="standard"
                                            value={props.values.guarantorNumber}
                                        />
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Aadhar Card Number"
                                            name="aadharNo"
                                            disabled
                                            error
                                            variant="standard"
                                            value={props.values.aadharNo}
                                        />
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Address"
                                            name="address"
                                            disabled
                                            error
                                            variant="standard"
                                            value={props.values.address}
                                        />
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="State"
                                            name="state"
                                            disabled
                                            error
                                            variant="standard"
                                            value={props.values.state}
                                        />
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="City"
                                            name="city"
                                            disabled
                                            error
                                            variant="standard"
                                            value={props.values.city}
                                        />
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <Divider />
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    p: 2,
                                }}
                            >
                                <Button color="primary" variant="contained" startIcon={<EditIcon />} onClick={props.onEdit}>
                                    Edit
                  </Button>
                                <Button color="primary" variant="contained" endIcon={<SaveIcon />} onClick={props.addUser}>
                                    Save
                  </Button>
                            </Box>
                        </Card>
                    </form>
                </Grid>
            </Grid>
        </div>
    );
}
export default ConfirmCreateDriver;
