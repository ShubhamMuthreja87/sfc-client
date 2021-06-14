import { Button, Card, CardContent, CardHeader, Divider } from "@material-ui/core";
import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';

import DateFnsUtils from '@date-io/date-fns';
import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
container:{
    padding:"40px 50px"
}
});
function SetNewDate(props) {
    const classes = useStyles();
    const [newDate, setNewDate] = React.useState(new Date());
    return (
        <div className="marginStart">
            <Card>
                <CardHeader
                    subheader={"Set New Date"}
                    title={props.title}
                />
                <Divider />
                <CardContent>
                   
                    <div className={classes.container}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                label={props.title}
                                fullWidth
                                name="dob"
                                format="dd/MM/yyyy"
                                required
                                value={newDate}
                                onChange={setNewDate}
                                animateYearScrolling
                            />
                        </MuiPickersUtilsProvider>
                    </div>

                    <Divider />

                    <div className="marginTopPx">
                        <Button
                            color="primary"
                            variant="contained"
                            onClick={()=>props.next(newDate)}>
                            Next
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
export default SetNewDate;
