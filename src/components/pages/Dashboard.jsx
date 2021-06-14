import {
  Card,
  CardHeader,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import { URL_FETCH_DRIVER_DATA, URL_FETCH_VEHICLE_DATA } from "../../urls";

import React from "react";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: "5%"
  },
  divNumber: {
    margin: "auto"
  },
  dataCard: {
    margin: "40px 50px 40px 10px",
  },
  heading: {
    fontSize: "25px"
  }
});


function Dashboard() {
  const navigate = useNavigate();

  const [fleetCount, setFleetCount] = React.useState(0);
  const [fleetIssues, setFleetIssues] = React.useState(0);
  const [driverCount, setDriverCount] = React.useState(0);
  const [driverIssues, setDriverIssues] = React.useState(0);
  // const [clientCount, setClientCount] = React.useState(0);
  // const [clientIssues, setClientIssues] = React.useState(0);

  const user = useSelector((state) => state.user);
  if(user.code===1){
    console.log(user.user);
  }

  React.useEffect(() => {
    axios.get(URL_FETCH_VEHICLE_DATA).then((res) => {
      setFleetCount(res.data.length)
      setFleetIssues(res.data[res.data.length - 1].totalIssues)
    });
    axios.get(URL_FETCH_DRIVER_DATA).then((res) => {
      setDriverCount(res.data.length)
      setDriverIssues(res.data[res.data.length - 1].totalIssues)
    });


  }, []);

  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={2} className={classes.root} justify="center"
        alignItems="center">
        <Grid item xs={12} sm={12} md={6} >
          <Card className={classes.dataCard} onClick={() => { navigate("/app/vehicles"); }}>
            <CardHeader
              title="Fleet Vehicles"
              subheader="Click to view details"
            />
            <Divider />
            <Grid container >

              <div className={classes.divNumber}>
                <Typography className={classes.heading}>Current Fleet Count</Typography>
                <h2 key="ksk">{fleetCount}</h2>
              </div>

              <Divider orientation="vertical" flexItem />
              <div className={classes.divNumber} >
                <Typography className={classes.heading}>Issues</Typography>
                <h2>{fleetIssues}</h2>
              </div>
            </Grid>
          </Card>
        </Grid>



        <Grid item xs={12} sm={12} md={6} >
          <Card className={classes.dataCard} onClick={() => { navigate("/app/drivers"); }}>
            <CardHeader
              title="Drivers"
              subheader="Click to view details"
            />
            <Divider />
            <Grid container >

              <div className={classes.divNumber}>
                <Typography className={classes.heading}>Current Driver Count</Typography>
                <h2>{driverCount}</h2>
              </div>

              <Divider orientation="vertical" flexItem />
              <div className={classes.divNumber} >
                <Typography className={classes.heading}>Issues</Typography>
                <h2>{driverIssues}</h2>
              </div>
            </Grid>
          </Card>
        </Grid>



        <Grid item xs={12} sm={12} md={6} >
          <Card className={classes.dataCard} onClick={() => { navigate("/app/clients"); }}>
            <CardHeader
              title="Clients"
              subheader="Click to view details"
            />
            <Divider />
            <Grid container >

              <div className={classes.divNumber}>
                <Typography className={classes.heading}>Current Client Count</Typography>
                <h2>0</h2>
              </div>

              <Divider orientation="vertical" flexItem />
              <div className={classes.divNumber} >
                <Typography className={classes.heading}>Issues</Typography>
                <h2>0</h2>
              </div>
            </Grid>
          </Card>
        </Grid>



        <Grid item xs={12} sm={12} md={6} onClick={() => { console.log("cliclked") }}>
          <Card className={classes.dataCard}>
            <CardHeader
              title="Fleet Vehicles"
              subheader="Click to view details"
            />
            <Divider />
            <Grid container >

              <div className={classes.divNumber}>
                <Typography className={classes.heading}>Current Fleet Count</Typography>
                <h2>{fleetCount}</h2>
              </div>

              <Divider orientation="vertical" flexItem />
              <div className={classes.divNumber} >
                <Typography className={classes.heading}>Issues</Typography>
                <h2>{fleetIssues}</h2>
              </div>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
export default Dashboard;
