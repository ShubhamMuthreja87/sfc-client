import {Typography} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    noErrorDiv:{
       backgroundColor:"#c8e6c9",
       textAlign:"center",
       borderRadius:"15px"
    },
    modErrorDiv:{
        backgroundColor:"#ffecb3",
        textAlign:"center",
        borderRadius:"15px"
    },
    sevErrorDiv:{
        backgroundColor:"#ffcdd2",
        textAlign:"center",
        borderRadius:"15px"
    }
});
export default function ErrIco(props) {
    const classes = useStyles();

    if (props.errorInsurance === 2||props.errorPermit === 2||props.errorFitness === 2||props.errorAllTax === 2) {
        return (<div className={classes.sevErrorDiv}><Typography>Fatal Issues</Typography></div>)
    } else if (props.errorInsurance === 1||props.errorPermit === 1||props.errorFitness === 1||props.errorAllTax === 1) {
        return (<div className={classes.modErrorDiv}><Typography>Moderate Issues</Typography></div>)
    } else {
        return (<div className={classes.noErrorDiv}><Typography>No Issues</Typography></div>)
    }
}
