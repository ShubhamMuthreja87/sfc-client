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
                        label="Email"
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
                        label="Designation"
                        name="designation"
                        disabled
                        error
                        variant="standard"
                        value={props.values.designation}
                      />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Branch"
                        name="branch"
                        disabled
                        error
                        variant="standard"
                        value={props.values.branch}
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
                        label="Password"
                        name="password"
                        disabled
                        error
                        variant="standard"
                        value={props.values.password}
                      />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Role"
                        name="role"
                        disabled
                        error
                        variant="standard"
                        value={props.values.role}
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
                  <Button color="primary" variant="contained"  endIcon={<SaveIcon />} onClick={props.addUser}>
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
  