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

import EditIcon from '@material-ui/icons/Edit';
import React from "react";
import SaveIcon from '@material-ui/icons/Save';

function ConfirmCreateClient(props) {
    return (
        <div className="marginStart marginTopDashboard">
            <Grid container spacing={1} alignItems="center">
                <Grid item xs={12}>
                    <form autoComplete="off" noValidate>
                        <Card>
                            <CardHeader
                                subheader="Please Confirm all feilds."
                                title="Create Client"
                            />
                            <Divider />
                            <CardContent>
                                <Grid container spacing={2}>
                                    <Grid item sm={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Client Name"
                                            name="clientName"
                                            disabled
                                            error
                                            variant="standard"
                                            value={props.values.clientName}
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
                                    <Grid item sm={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="GST Number"
                                            name="gst"
                                            disabled
                                            error
                                            variant="standard"
                                            value={props.values.gst}
                                        />
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Contact Name"
                                            name="contact"
                                            disabled
                                            error
                                            variant="standard"
                                            value={props.values.contactName}
                                        />
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Contact's Phone Number"
                                            name="contactNumber"
                                            disabled
                                            error
                                            variant="standard"
                                            value={props.values.contactNumber}
                                        />
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Contact Designation"
                                            name="designation"
                                            disabled
                                            error
                                            variant="standard"
                                            value={props.values.contactDesignation}
                                        />
                                    </Grid>
                                    {props.values.contractStart !==""? <Grid item sm={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Contract Start"
                                            name="contractStart"
                                            disabled
                                            error
                                            variant="standard"
                                            value={props.values.contractStart.toDateString()}
                                        />
                                    </Grid> : <div></div>}
                                    {props.values.contractExpiry !==""  ? <Grid item sm={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Contract End"
                                            name="contractEnd"
                                            disabled
                                            error
                                            variant="standard"
                                            value={props.values.contractExpiry.toDateString()}
                                        />
                                    </Grid> : <div></div>}

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
export default ConfirmCreateClient;
