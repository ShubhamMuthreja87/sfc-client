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

function ConfirmCreate(props) {
  return (
    <div className="marginStart marginTopDashboard">
      <Grid container spacing={1} alignItems="center">
        <Grid item xs={12}>
          <form autoComplete="off" noValidate>
            <Card>
              <CardHeader
                subheader="Please Confirm all feilds."
                title="Create Branch"
              />
              <Divider />
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item sm={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Branch Name"
                      name="branchName"
                      disabled
                      error
                      variant="standard"
                      value={props.values.branchName}
                    />
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Branch Address"
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
                      label="Pincode"
                      name="pincode"
                      disabled
                      error
                      variant="standard"
                      value={props.values.pincode}
                    />
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Branch Email Address"
                      name="email"
                      disabled
                      error
                      variant="standard"
                      value={props.values.email}
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
                      label="Branch Code"
                      name="branchCode"
                      disabled
                      error
                      variant="standard"
                      value={props.values.branchCode}
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
                      label="Select City"
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
                <Button color="primary" variant="contained"  startIcon={<EditIcon />} onClick={props.onEdit}>
                  Edit
                </Button>
                <Button color="primary" variant="contained"  endIcon={<SaveIcon />} onClick={props.addBranch}>
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
export default ConfirmCreate;
