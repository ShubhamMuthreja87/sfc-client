import CreateDriverForm from "../pageComponents/createDriver/CreateDriverForm"
import UploadDocs from "../pageComponents/commons/UploadDocs"
import ConfirmCreateDriver from "../pageComponents/createDriver/ConfirmCreateDriver"
import Failure from "../pageComponents/commons/Failure"
import React from "react";
import SuccessWithNext from "../pageComponents/commons/SuccessWithNext"
import Success from "../pageComponents/commons/Success"
import { URL_ADD_DRIVER, URL_UPLOAD_AADHAR_DRIVER, URL_UPLOAD_LICENCE_DRIVER } from "../../urls";
import axios from "axios";
var qs = require('qs');

function CreateDriver() {

  const [nav, setNav] = React.useState(0);
  const [values, setValues] = React.useState({});
  const [id, setId] = React.useState("");
  //navigate to confirm//
  function onClick(values) {
    setValues(values);
    console.log(values);
    setNav(1);
  }
  //navigate back to form on edit//
  function onEdit() {
    setNav(0);
  }
  //add driver to db//
  async function addDriver() {
    try {
      var res = await axios.request({
        method: "post",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        url: URL_ADD_DRIVER,
        data: qs.stringify(values)
      });
      if (res.data.message === "success") {
        console.log(res.data);
        setId(res.data._doc._id);
        setNav(2);
      } else {
        setNav(3);
      }
    } catch (error) {
      alert("Something went wrong contact admin");
    }
  }
  //upload aadhar document after saving driver//
  async function uploadAadhar(formData) {
    formData.append("id", id);
    try {
      var res2 = await axios.post(URL_UPLOAD_AADHAR_DRIVER, formData, {
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
  //navigate to licence upload //
  function moveToUploadLicence() {
    setNav(6);
  }
  //upload licence//
  async function uploadLicence(formData) {
    console.log("licence");
    formData.append("id", id);
    try {
      var res3 = await axios.post(URL_UPLOAD_LICENCE_DRIVER, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (res3.data.message === "success") {
        setNav(7);
      } else {
        setNav(8);
      }
    } catch (error) {
      console.log(error);
      error.response && alert("Some Error occured while uploading contact admin");
    }
  }
  //control navigation//
  if (nav === 0) {
    return <CreateDriverForm clicked={onClick} values={values} />;
  } else if (nav === 1) {
    return <ConfirmCreateDriver values={values} onEdit={onEdit} addUser={addDriver} />
  } else if (nav === 2) {
    return <UploadDocs subheader="Please add aadhar card for the driver" title="Add Aadhar Card" upload={uploadAadhar} />;
  } else if (nav === 3) {
    return <Failure subheader="There was an error, Driver wasn't added ! Please contact admin " title="Driver was not added !" />;
  } else if (nav === 4) {
    return <SuccessWithNext subheader="Aadhar card of the driver was added successfully. Please press next to upload Licence" title="Addhar Uploaded" next={moveToUploadLicence} />;
  } else if (nav === 5) {
    return <Failure subheader="There was an error, Driver was added but aadhar didn't upload ! Please contact admin " title="Aadhar not uploaded !" />;
  } else if (nav === 6) {
    return <UploadDocs subheader="Please add Licence of the driver" title="Add Licence" upload={uploadLicence} />;
  } else if (nav === 7) {
    return <Success subheader="The Driver was created successfully, and all the documets were uploaded" title="Driver Created Successfully" />
  } else if (nav === 8) {
    return <Failure subheader="There was an error, Driver was added ,aadhar uploaded but licence didn't upload ! Please contact admin " title="Licence not uploaded !" />;
  }
}
export default CreateDriver;