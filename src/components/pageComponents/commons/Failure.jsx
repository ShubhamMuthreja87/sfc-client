import { Card, CardContent, CardHeader, Divider } from "@material-ui/core";

import CancelIcon from '@material-ui/icons/Cancel';
import React from "react";
import { red } from "@material-ui/core/colors";
import { useNavigate } from "react-router-dom";

function Failure(props) {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/app/dashboard");
  }, 6000);
  return (
    <div className="marginStart">
      <Card>
        <CardHeader
          subheader={props.subheader}
          title={props.title}
        />
        <Divider />
        <CardContent>
          <CancelIcon style={{ color: red[500], fontSize: 40 }} />
        </CardContent>
      </Card>
    </div>
  );
}
export default Failure;
