import { Button } from "@material-ui/core";
import ErrorIcoSingleDate from "../pageComponents/commons/ErrorIcoSingleDate"
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { URL_FETCH_DRIVER_DATA } from "../../urls";
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

export default function DriverList() {

    const [driverDataList, setDriverData] = React.useState([]);

    React.useEffect(() => {
        axios.get(URL_FETCH_DRIVER_DATA).then((res) => {
            setDriverData(res.data);
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
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="center">Mother's Name</TableCell>
                            <TableCell align="center">Licence Number</TableCell>
                            <TableCell align="center">Salary</TableCell>
                            <TableCell align="center">Phone Number</TableCell>
                            <TableCell align="center">Issues</TableCell>
                            <TableCell align="center">Open Details</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {driverDataList.map((driver, i) => (
                            <TableRow key={i}>
                                <TableCell component="th" scope="row">
                                    {driver.firstName + " " + driver.lastName}
                                </TableCell>
                                <TableCell align="center">{driver.motherName}</TableCell>
                                <TableCell align="center">{driver.licenseNumber}</TableCell>
                                <TableCell align="center">{driver.salary}</TableCell>
                                <TableCell align="center">{driver.phone}</TableCell>
                                <TableCell align="center"><ErrorIcoSingleDate error={driver.errorLicence} /></TableCell>
                                <TableCell align="center"><Button onClick={() => {
                                    navigate("/app/driver/" + driver._id);
                                }}>Details</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
