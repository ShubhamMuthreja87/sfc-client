import { Button } from "@material-ui/core";
import ErrorIcoSingleDate from "../pageComponents/commons/ErrorIcoSingleDate"
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { URL_FETCH_CLIENT_DATA } from "../../urls";
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

export default function ClientList() {

    const [clientDataList, setClientData] = React.useState([]);

    React.useEffect(() => {
        axios.get(URL_FETCH_CLIENT_DATA).then((res) => {
            setClientData(res.data);
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
                            <TableCell align="center">Address</TableCell>
                            <TableCell align="center">GST Number</TableCell>
                            <TableCell align="center">Contact Name</TableCell>
                            <TableCell align="center">Contact Number</TableCell>
                            <TableCell align="center">Issues</TableCell>
                            <TableCell align="center">Open Details</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {clientDataList.map((client, i) => (
                            <TableRow key={i}>
                                <TableCell component="th" scope="row">
                                    {client.clientName}
                                </TableCell>
                                <TableCell align="center">{client.address}</TableCell>
                                <TableCell align="center">{client.gst}</TableCell>
                                <TableCell align="center">{client.contactName}</TableCell>
                                <TableCell align="center">{client.contactNumber}</TableCell>
                                <TableCell align="center"><ErrorIcoSingleDate error={client.errorContract} /></TableCell>
                                <TableCell align="center"><Button onClick={() => {
                                    navigate("/app/driver/" + client._id);
                                }}>Details</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
