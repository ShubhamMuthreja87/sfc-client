import { URL_ADD_CLIENT, URL_UPLOAD_CONTRACT_CLIENT } from "../../urls";

import ConfirmCreateClient from "../pageComponents/createClient/ConfirmCreateClient"
import CreateClientForm from "../pageComponents/createClient/CreateClientForm"
import Failure from "../pageComponents/commons/Failure"
import React from "react";
import Success from "../pageComponents/commons/Success"
import UploadDocs from "../pageComponents/commons/UploadDocs"
import axios from "axios";

var qs = require('qs');

function CreateClient() {

  const [nav, setNav] = React.useState(0);
  const [values, setValues] = React.useState({});
  const [id, setId] = React.useState("");


  //navigate to confirm//  
  function onClick(values) {
    console.log(values);
    setValues(values);
    setNav(1);
  }


  //navigate back to form on edit//
  function onEdit() {
    setNav(0);
  }

  //add driver to db//
  async function addClient() {
    try {
      var res = await axios.request({
        method: "post",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        url: URL_ADD_CLIENT,
        data: qs.stringify(values)
      });
      if (res.data.message === "success") {
        console.log(res.data);
        setId(res.data._doc._id);
        if (values.contractType === "Contractual") {
          setNav(2);
        } else {
          setNav(6);
        }

      } else {
        setNav(3);
      }
    } catch (error) {
      alert("Something went wrong contact admin");
    }
  }


  //upload aadhar document after saving driver//
  async function uploadContract(formData) {
    formData.append("id", id);
    try {
      var res2 = await axios.post(URL_UPLOAD_CONTRACT_CLIENT, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (res2.data.message === "success") {
        console.log(res2.data);
        setNav(4);
      } else {
        setNav(5);
      }
    } catch (error) {
      console.log(error);
      error.response && alert("Some Error occured while uploading contact admin");
    }
  }


  //control navigation//
  if (nav === 0) {
    return <CreateClientForm clicked={onClick} values={values} />;
  } else if (nav === 1) {
    return <ConfirmCreateClient values={values} onEdit={onEdit} addUser={addClient} />
  } else if (nav === 2) {
    return <UploadDocs subheader="Please add Contract for the client" title="Add Contract" upload={uploadContract} />;
  } else if (nav === 3) {
    return <Failure subheader="There was an error, Client wasn't added ! Please contact admin " title="Client was not added !" />;
  } else if (nav === 4) {
    return <Success subheader="Contract for the client was added successfully." title="Contract Uploaded" />;
  } else if (nav === 5) {
    return <Failure subheader="There was an error, Client was added but Contract didn't upload ! Please contact admin " title="Contract not uploaded !" />;
  }else if (nav ===6){
    return <Success subheader="Client was added successfully." title="Client added" />;
  }
}
export default CreateClient;