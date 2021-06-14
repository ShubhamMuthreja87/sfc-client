import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    TextField,
} from '@material-ui/core';

import EditIcon from '@material-ui/icons/Edit';
import InputAdornment from "@material-ui/core/InputAdornment";
import React from 'react';
import SaveIcon from '@material-ui/icons/Save';

function ConfirmCreateVehicle(props) {
    return (
        <div className="marginStart marginTopDashboard">
            <Grid container spacing={1} alignItems="center">
                <Grid item xs={12}>
                    <form autoComplete="off" noValidate>
                        <Card>
                            <CardHeader
                                subheader="Please Confirm all feilds."
                                title="Create Vehicle"
                            />
                            <Divider />
                            <CardContent>
                                <Grid container spacing={2}>
                                    <Grid item sm={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Vehicle Type"
                                            name="vehicleType"
                                            disabled
                                            error
                                            variant="standard"
                                            value={props.values.vehicleType}
                                        />
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Vehicle Number"
                                            name="vehicleNumber"
                                            disabled
                                            error
                                            variant="standard"
                                            value={props.values.vehicleNumber}
                                        />
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Make"
                                            name="make"
                                            disabled
                                            error
                                            variant="standard"
                                            value={props.values.make}
                                        />
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Owner's Name"
                                            name="ownerName"
                                            disabled
                                            error
                                            variant="standard"
                                            value={props.values.ownerName}
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
                                            label="Date of purchase"
                                            name="dop"
                                            disabled
                                            error
                                            variant="standard"
                                            value={props.values.dop.toDateString()}
                                        />
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Phone Number"
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
                                            label="Alternate number"
                                            name="altphone"
                                            disabled
                                            error
                                            variant="standard"
                                            value={props.values.altMobile}
                                        />
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Engine Number"
                                            name="engineNumber"
                                            disabled
                                            error
                                            variant="standard"
                                            value={props.values.engineNumber}
                                        />
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="ODO Meter"
                                            name="odoMeter"
                                            disabled
                                            error
                                            InputProps={{
                                                endAdornment: <InputAdornment position="end">Kms</InputAdornment>
                                            }}
                                            variant="standard"
                                            value={props.values.odoMeter}
                                        />
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Driver's Name"
                                            name="driverName"
                                            disabled
                                            error
                                            variant="standard"
                                            value={props.values.driverName}
                                        />
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Authority Name"
                                            name="authorityName"
                                            disabled
                                            error
                                            variant="standard"
                                            value={props.values.authorityName}
                                        />
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Model"
                                            name="model"
                                            disabled
                                            error
                                            variant="standard"
                                            value={props.values.model}
                                        />
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Pan"
                                            name="pan"
                                            disabled
                                            error
                                            variant="standard"
                                            value={props.values.pan}
                                        />
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Chasis Number"
                                            name="chasisNumber"
                                            disabled
                                            error
                                            variant="standard"
                                            value={props.values.chasisNumber}
                                        />
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="RC Number"
                                            name="rcNumber"
                                            disabled
                                            error
                                            variant="standard"
                                            value={props.values.rcNumber}
                                        />
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Insurance Expiry"
                                            name="insuranceExp"
                                            disabled
                                            error
                                            variant="standard"
                                            value={props.values.insuranceExp.toDateString()}
                                        />
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Permit Expiry"
                                            name="permitExp"
                                            disabled
                                            error
                                            variant="standard"
                                            value={props.values.permitExp.toDateString()}
                                        />
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Fitness Exp"
                                            name="fitnessExp"
                                            disabled
                                            error
                                            variant="standard"
                                            value={props.values.fitnessExp.toDateString()}
                                        />
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="All Tax Expiry"
                                            name="allTaxExp"
                                            disabled
                                            error
                                            variant="standard"
                                            value={props.values.allTaxExp.toDateString()}
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
                                <Button color="primary" variant="contained" endIcon={<SaveIcon />} onClick={props.add}>
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
export default ConfirmCreateVehicle;
