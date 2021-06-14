import { Button, Card, CardContent, CardHeader, Divider, Grid, Typography } from "@material-ui/core";
import { URL_DOWNLOAD_VEHICLE_DOCS, URL_FETCH_VEHICLE_BY_ID } from "../../urls";

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
        margin: '20px 30px',
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
    const [vehicleData, setVehicleData] = React.useState({});
    async function getVehicleData() {
        try {
            let res = await axios.get(URL_FETCH_VEHICLE_BY_ID, { params: { id: slug } });
            console.log(res);
            setVehicleData(res.data);
        } catch (error) {
            alert("Something went wrong contact admin");
        }
    }

    React.useEffect(() => {
        getVehicleData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function downloadFile(type) {
        console.log("download");
        try {
            const result = await axios.get(URL_DOWNLOAD_VEHICLE_DOCS, {
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
                title="Vehicle Details"
            />
            <Divider />
            <CardContent>
                <Grid container spacing={2}>


                    <Grid item md={3} sm={6} xs={12}>
                        <div className={classes.innerContainer}>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.title}>{"Vehicle Number :-"} </Typography></div>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.value}>{vehicleData.vehicleNumber}</Typography></div>
                        </div>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <div className={classes.innerContainer}>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.title}>{"Vehicle Type :-"} </Typography></div>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.value}>{vehicleData.vehicleType}</Typography></div>
                        </div>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <div className={classes.innerContainer}>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.title}>{"Vehicle Make :-"} </Typography></div>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.value}>{vehicleData.make}</Typography></div>
                        </div>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <div className={classes.innerContainer}>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.title}>{"RC Number :-"} </Typography></div>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.value} >{vehicleData.rcNumber}</Typography></div>
                        </div>

                    </Grid>


                    <Grid item md={3} sm={6} xs={12}>
                        <div className={classes.innerContainer}>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.title}>{"Owner Name :-"} </Typography></div>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.value} >{vehicleData.ownerName}</Typography></div>
                        </div>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <div className={classes.innerContainer}>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.title}>{"Address :-"} </Typography></div>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.value} >{vehicleData.address}</Typography></div>
                        </div>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <div className={classes.innerContainer}>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.title}>{"Phone :-"} </Typography></div>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.value} >{vehicleData.phone}</Typography></div>
                        </div>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <div className={classes.innerContainer}>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.title}>{"Alt Phone :-"} </Typography></div>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.value} >{vehicleData.altMobile}</Typography></div>
                        </div>
                    </Grid>


                    <Grid item md={3} sm={6} xs={12}>
                        <div className={classes.innerContainer}>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.title}>{"Engine Number:-"} </Typography></div>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.value}>{vehicleData.engineNumber}</Typography></div>
                        </div>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <div className={classes.innerContainer}>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.title}>{"Odo Meter :-"} </Typography></div>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.value} >{vehicleData.odoMeter + " Kms"}</Typography></div>
                        </div>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <div className={classes.innerContainer}>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.title}>{"Driver Name :-"} </Typography></div>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.value} >{vehicleData.driverName}</Typography></div>
                        </div>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <div className={classes.innerContainer}>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.title}>{"Authority Name :-"} </Typography></div>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.value} >{vehicleData.authorityName}</Typography></div>
                        </div>
                    </Grid>


                    <Grid item md={3} sm={6} xs={12}>
                        <div className={classes.innerContainer}>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.title}>{"Model :-"} </Typography></div>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.value} >{vehicleData.model}</Typography></div>
                        </div>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <div className={classes.innerContainer}>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.title}>{"Pan :-"} </Typography></div>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.value} >{vehicleData.pan}</Typography></div>
                        </div>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <div className={classes.innerContainer}>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.title}>{"Chasis Number :-"} </Typography></div>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.value} >{vehicleData.chasisNumber}</Typography></div>
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
                            <div className={classes.divSingleDataContainer}><Typography className={classes.title}>{"Purchase Date :-"} </Typography></div>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.value} >{getDateString(vehicleData.purchaseDate)}</Typography></div>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={classes.innerWideContainer}>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.title}>{"Insurance Expiry Date :-"} </Typography></div>
                            <div className={classes.divSingleDataContainer}><ErrorDate error={vehicleData.errorInsurance} date={vehicleData.insuranceExpiry} /></div>
                            <div className={classes.divSingleDataContainer}><Button className={classes.downloadButton} onClick={() => {
                                navigate("/app/updateAndUploadVehicle/" + slug + "/1");
                            }}>Upload New Insurance</Button></div>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={classes.innerWideContainer}>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.title}>{"Fitness Expiry Date :-"} </Typography></div>
                            <div className={classes.divSingleDataContainer}><ErrorDate error={vehicleData.errorFitness} date={vehicleData.fitnessExpiry} /></div>
                            <div className={classes.divSingleDataContainer}><Button className={classes.downloadButton} onClick={() => {
                                navigate("/app/updateAndUploadVehicle/" + slug + "/2");
                            }}>Upload New Fitness</Button></div>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={classes.innerWideContainer}>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.title}>{"Permit Expiry Date :-"} </Typography></div>
                            <div className={classes.divSingleDataContainer}><ErrorDate error={vehicleData.errorPermit} date={vehicleData.permitExpiry} /></div>
                            <div className={classes.divSingleDataContainer}><Button className={classes.downloadButton} onClick={() => {
                                navigate("/app/updateAndUploadVehicle/" + slug + "/3");
                            }}>Upload New Permit</Button></div>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={classes.innerWideContainer}>
                            <div className={classes.divSingleDataContainer}><Typography className={classes.title}>{"All Tax Expiry Date :-"} </Typography></div>
                            <div className={classes.divSingleDataContainer}><ErrorDate error={vehicleData.errorAllTax} date={vehicleData.allTaxExpiry} /></div>
                            <div className={classes.divSingleDataContainer}><Button className={classes.downloadButton} onClick={() => {
                                navigate("/app/updateAndUploadVehicle/" + slug + "/4");
                            }}>Upload New All Tax</Button></div>
                        </div>
                    </Grid>
                </Grid>
                <Divider className={classes.divider} />
                <div>
                    <Typography className={classes.sectionTitle}>:: Saved Files ::</Typography>
                </div>
                <Divider className={classes.divider} />
                <Grid container spacing={2}>
                    <Grid item sm={4} xs={12}>
                        <Button className={classes.downloadButton} onClick={() => { downloadFile(1) }}>Download Vehicle RC</Button>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Button className={classes.downloadButton} onClick={() => { downloadFile(2) }}>Download Insurance Copy</Button>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Button className={classes.downloadButton} onClick={() => { downloadFile(3) }}>Download Fitness Copy</Button>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Button className={classes.downloadButton} onClick={() => { downloadFile(4) }}>Download Permit Copy</Button>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Button className={classes.downloadButton} onClick={() => { downloadFile(5) }}>Download All Tax Copy</Button>
                    </Grid>
                </Grid>
                <Divider className={classes.divider} />
                <div>
                    <Typography className={classes.sectionTitle}>:: Vehicle Options ::</Typography>
                </div>
                <Divider className={classes.divider} />
                <Grid container spacing={2}>
                    <Grid item sm={4} xs={12}>
                        <Button className={classes.downloadButton}>Edit Data</Button>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Button className={classes.downloadButton}>Track Vehicle</Button>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Button className={classes.discontinue}>Discontinue Vehicle</Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    </div>
}