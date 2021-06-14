import { Card, CardContent, CardHeader, Divider, Button } from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import React from "react";
import { green } from "@material-ui/core/colors";

function SuccessWithNext(props) {

    return (
        <div className="marginStart">
            <Card>
                <CardHeader
                    subheader={props.subheader}
                    title={props.title}
                />
                <Divider />
                <CardContent>
                    <CheckCircleOutlineIcon style={{ color: green[500], fontSize: 40 }} />
                    <Divider />
                    <div className="marginTopPx">
                        <Button
                            color="primary"
                            variant="contained"
                            onClick={props.next}>
                            Next
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
export default SuccessWithNext;
