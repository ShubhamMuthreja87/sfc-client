import ConfirmCreate from "../pageComponents/createBranch/ConfirmCreate";
import CreateBranchForm from "../pageComponents/createBranch/CreateBranchForm";
import Failure from "../pageComponents/commons/Failure";
import React from "react";
import Success from "../pageComponents/commons/Success";
import { URL_ADD_BRANCH } from "../../urls";
import axios from "axios";

var qs = require("qs");

function CreateBranch() {
  const [nav, setNav] = React.useState(0);
  const [values, setValues] = React.useState({});
  function onClick(values) {
    setValues(values);
    setNav(1);
  }
  function onEdit() {
    setNav(0);
  }
  async function addBranch() {
    try {
      let res = await axios.request({
        method: "post",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        url: URL_ADD_BRANCH,
        data: qs.stringify(values),
      });
      if (res.data.message === "success") {
        setNav(2);
      } else {
        setNav(3);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong contact admin");
      setNav(3);
    }
  }
  if (nav === 0) {
    return <CreateBranchForm clicked={onClick} values={values} />;
  } else if (nav === 1) {
    return (
      <ConfirmCreate values={values} onEdit={onEdit} addBranch={addBranch} />
    );
  } else if (nav === 2) {
    return <Success subheader="The branch was created successfully, users can be added to the created branch"
      title="Branch Created Successfully" />;
  } else {
    return <Failure subheader="There was an error, branch wasn't created ! Please contact admin "
      title="Branch Not Created !" />;
  }
}
export default CreateBranch;
