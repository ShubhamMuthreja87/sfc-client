import { Button, Card, CardContent, CardHeader, Divider, Grid, Typography } from "@material-ui/core";
import { URL_DOWNLOAD_DRIVER_DOCS, URL_FETCH_DRIVER_BY_ID } from "../../urls";

import ErrorDate from "../pageComponents/commons/ErrorDate";
import React from "react";
import axios from 'axios';
import download from 'downloadjs';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';

const useStyles = makeStyles({
    cardStyle: {
        width: "70vw",
        borderRadius: '20px'
    },
    innerContainer: {
        minWidth: "150px"
    },
    divSingleDataContainer: {
        display: "inline-block",
    },
    title: {
        fontSize: "20px",
        fontWeight: "bold"
    },
    sectionTitle: {
        fontSize: "25px",
        fontWeight: "bold",
        marginBottom: '20px'
    },
    value: {
        fontSize: "18px",
        marginLeft: "5px"
    },
    innerWideContainer: {
        width: "auto",
        display: 'flex',
        justifyContent: 'space-around',
        marginLeft: '30px',
    },
    innerWideContainerNoSpace: {
        width: "auto",
        margin: '10px 30px',
    },

    divider: {
        margin: "20px 0px"
    },
    downloadButton: {
        margin: "0px 0px 0px 20px",
        backgroundColor: "#1C2539",
        color: "#757575",
        "&:hover": {
            color: "#fff",
            backgroundColor: "#1C2539",
        }
    },
    discontinue: {
        margin: "0px 0px 0px 20px",
        backgroundColor: "#ef9a9a",
        color: "#212121",
        "&:hover": {
            color: "#fff",
            backgroundColor: "#e53935",
        }
    }
});
export default function Vehicle(routerProps) {
    const classes = useStyles();
    const { slug } = useParams();
    const navigate = useNavigate();
    const [driverData, setDriverData] = React.useState({});

    async function getDriverData() {
        try {
            let res = await axios.get(URL_FETCH_DRIVER_BY_ID, { params: { id: slug } });
            console.log(res);
            setDriverData(res.data);
        } catch (error) {
            alert("Something went wrong contact admin");
        }
    }

    React.useEffect(() => {
        getDriverData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function downloadFile(type) {
        console.log("Download");
        try {
            const result = await axios.get(URL_DOWNLOAD_DRIVER_DOCS, {
                params: { id: slug, fileType: type },
                responseType: 'blob'
            });

            return download(result.data);
        } catch (error) {
            if (error.response && error.response.status === 400) {
                alert("error in downloading")
            }
        }
    };

    function getDateString(date) {
        var d = new Date(date);
        var str = d.toString().split(" ");
        return (str[2] + " / " + str[1] + " / " + str[3] + " ~ Day ( " + str[0] + " )");
    }
    return <div className="marginStart marginTopDashboard">

        <Card className={classes.cardStyle} >
            <CardHeader
                title="Driver Details"
            />
            <Divider />
            <CardContent>
                <Grid container spacing={2}>


                    <Grid item md={3} sm={6} xs={12}>
                        <div className={classes.innerContainer}>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.title}>{"Driver Name :-"} </Typography></div>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.value}>{driverData.firstName + " " + driverData.lastName}</Typography></div>
                        </div>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <div className={classes.innerContainer}>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.title}>{"Mother's Name :-"} </Typography></div>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.value}>{driverData.motherName}</Typography></div>
                        </div>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <div className={classes.innerContainer}>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.title}>{"Licence Number :-"} </Typography></div>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.value}>{driverData.licenseNumber}</Typography></div>
                        </div>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <div className={classes.innerContainer}>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.title}>{"Salary :-"} </Typography></div>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.value} >{driverData.salary}</Typography></div>
                        </div>

                    </Grid>


                    <Grid item md={3} sm={6} xs={12}>
                        <div className={classes.innerContainer}>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.title}>{"Guarantor Name :-"} </Typography></div>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.value} >{driverData.guarantor}</Typography></div>
                        </div>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <div className={classes.innerContainer}>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.title}>{"Guarantor Number :-"} </Typography></div>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.value} >{driverData.guarantorNumber}</Typography></div>
                        </div>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <div className={classes.innerContainer}>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.title}>{"AadharNo :-"} </Typography></div>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.value} >{driverData.aadharNo}</Typography></div>
                        </div>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <div className={classes.innerContainer}>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.title}>{"Address :-"} </Typography></div>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.value} >{driverData.address}</Typography></div>
                        </div>
                    </Grid>


                    <Grid item md={3} sm={6} xs={12}>
                        <div className={classes.innerContainer}>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.title}>{"Phone Number:-"} </Typography></div>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.value}>{driverData.phone}</Typography></div>
                        </div>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <div className={classes.innerContainer}>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.title}>{"State :-"} </Typography></div>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.value} >{driverData.state}</Typography></div>
                        </div>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <div className={classes.innerContainer}>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.title}>{"City :-"} </Typography></div>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.value} >{driverData.city}</Typography></div>
                        </div>
                    </Grid>
                </Grid>
                <Divider className={classes.divider} />
                <div>
                    <Typography className={classes.sectionTitle}>:: Dates ::</Typography>
                </div>
                <Divider />
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <div className={classes.innerWideContainerNoSpace}>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.title}>{"Date Of Birth :-"} </Typography></div>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.value} >{getDateString(driverData.dob)}</Typography></div>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={classes.innerWideContainerNoSpace}>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.title}>{"Joining Date :-"} </Typography></div>
                            <div className={classes.divSingleDataContainer}> <Typography className={classes.value} >{getDateString(driverData.doj)}</Typography></div>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={classes.innerWideContainer}>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.title}>{"Licence Expiry Date :-"} </Typography></div>
                            <div className={classes.divSingleDataContainer}><ErrorDate error={driverData.errorLicence} date={driverData.licenseExpiry} /></div>
                            <div className={classes.divSingleDataContainer}><Button className={classes.downloadButton} onClick={() => {
                                navigate("/app/updateAndUploadLicence/" + slug);
                            }}>Upload New Licence</Button></div>
                        </div>
                    </Grid>
                </Grid>
                <Divider className={classes.divider} />
                <div>
                    <Typography className={classes.sectionTitle}>:: Saved Files ::</Typography>
                </div>
                <Divider className={classes.divider} />
                <Grid container spacing={2}>
                    <Grid item sm={6} xs={12}>
                        <Button className={classes.downloadButton} onClick={() => { downloadFile(1) }}>Download Driver's Aadhar</Button>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <Button className={classes.downloadButton} onClick={() => { downloadFile(2) }}>Download Driver's Licence</Button>
                    </Grid>
                </Grid>
                <Divider className={classes.divider} />
                <div>
                    <Typography className={classes.sectionTitle}>:: Driver Options ::</Typography>
                </div>
                <Divider className={classes.divider} />
                <Grid container spacing={2}>
                    <Grid item sm={6} xs={12}>
                        <Button className={classes.downloadButton}>Edit Data</Button>
                    </Grid>

                    <Grid item sm={6} xs={12}>
                        <Button className={classes.discontinue}>Discontinue Driver</Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    </div>
}