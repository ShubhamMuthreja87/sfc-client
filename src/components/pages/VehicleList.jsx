import { Button } from "@material-ui/core";
import ErrorIco from "../pageComponents/commons/ErrorIco"
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { URL_FETCH_VEHICLE_DATA } from "../../urls";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
    table: {
        width: "100%"
    },
    container: {
        width: "100vh",
        margin: "100px 5% 0px 10%",
        padding: "30px 50px ",
        background: "#fff",
        borderRadius: "20px",
    }
});

export default function VehicleList() {

    const [vehicleDataList, setVehicleData] = React.useState([]);

    React.useEffect(() => {
        axios.get(URL_FETCH_VEHICLE_DATA).then((res) => {
            setVehicleData(res.data);
        });
    }, []);
    const classes = useStyles();
    const navigate = useNavigate();
    return (
        <div className={classes.container}>

            <TableContainer >
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Vehicle Number</TableCell>
                            <TableCell align="center">Driver Name</TableCell>
                            <TableCell align="center">Odometer</TableCell>
                            <TableCell align="center">Rc</TableCell>
                            <TableCell align="center">Issues</TableCell>
                            <TableCell align="center">Open Details</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {vehicleDataList.map((vehicle, i) => (
                            <TableRow key={i}>
                                <TableCell component="th" scope="row">
                                    {vehicle.vehicleNumber}
                                </TableCell>
                                <TableCell align="center">{vehicle.driverName}</TableCell>
                                <TableCell align="center">{vehicle.odoMeter + " Kms"}</TableCell>
                                <TableCell align="center">{vehicle.rcNumber}</TableCell>
                                <TableCell align="center"><ErrorIco errorInsurance={vehicle.errorInsurance} errorPermit={vehicle.errorPermit} errorFitness={vehicle.errorFitness} errorAllTax={vehicle.errorAllTax} /></TableCell>
                                <TableCell align="center"><Button onClick={() => {
                                    navigate("/app/vehicle/" + vehicle._id);
                                }}>Details</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
