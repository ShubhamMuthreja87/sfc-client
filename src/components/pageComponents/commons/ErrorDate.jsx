import React from 'react'
import { Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    noErrorDiv: {
        backgroundColor: "#c8e6c9",
        textAlign: "center",
        borderRadius: "5px",
        marginLeft:"10px"
    },
    modErrorDiv: {
        backgroundColor: "#ffecb3",
        textAlign: "center",
        borderRadius: "5px",
        marginLeft:"10px"
    },
    sevErrorDiv: {
        backgroundColor: "#ffcdd2",
        textAlign: "center",
        borderRadius: "5px",
        marginLeft:"10px"
    },
    text:{
        padding:"0px 10px 0px 15px"
    }
});
export default function ErrorDate(props) {
    const classes = useStyles();

    function getDateString(date) {
        var d = new Date(date);
        var str = d.toString().split(" ");
        //  d.getDay() +" / "+ d.getDate()+" / "+d.getMonth()+" / "+d.getFullYear();
        return (str[2] + " / " + str[1] + " / " + str[3] + " ~ Day ( " + str[0]+" )");
    }
    if (props.error === 2) {
        return (<div className={classes.sevErrorDiv}><Typography className={classes.text}>{getDateString(props.date)+" expiry passed please fix immediately"}</Typography></div>)
    } else if (props.error === 1) {
        return (<div className={classes.modErrorDiv}><Typography className={classes.text}>{getDateString(props.date)+" expiry comming up please fix"}</Typography></div>)
    } else {
        return (<div className={classes.noErrorDiv}><Typography className={classes.text}>{getDateString(props.date) }</Typography></div>)
    }
}