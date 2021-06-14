import { Card, CardContent, CardHeader, Divider } from "@material-ui/core";

import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import React from "react";
import { green } from "@material-ui/core/colors";
import { useNavigate } from "react-router-dom";

function Success(props) {
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
          <CheckCircleOutlineIcon style={{ color: green[500], fontSize: 40 }} />
        </CardContent>
      </Card>
    </div>
  );
}
export default Success;
