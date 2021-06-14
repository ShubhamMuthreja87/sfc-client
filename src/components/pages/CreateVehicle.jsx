import { URL_ADD_VEHICLE, URL_UPLOAD_ALL_TAX, URL_UPLOAD_FITNESS, URL_UPLOAD_INSURANCE, URL_UPLOAD_PERMIT, URL_UPLOAD_RC } from '../../urls';

import ConfirmCreateVehicle
  from '../pageComponents/createVehicle/ConfirmCreateVehicle';
import CreateVehicleForm
  from '../pageComponents/createVehicle/CreateVehicleForm';
import Failure from '../pageComponents/commons/Failure';
import React from 'react';
import Success from '../pageComponents/commons/Success';
import SuccessWithNext from '../pageComponents/commons/SuccessWithNext';
import UploadDocs from '../pageComponents/commons/UploadDocs';
import axios from 'axios';

var qs = require('qs');
function CreateVehicle() {
  const [nav, setNav] = React.useState(0);
  const [values, setValues] = React.useState({});
  const [id, setId] = React.useState("");
  //navigate to confirm//
  function onClick(values) {
    setValues(values);
    console.log(values);
    setNav(1);
  }
  //navigation functions//
  function onEdit() {
    setNav(0);
  }
  function moveToUploadInsurance() {
    setNav(6);
  }
  function moveToUploadPermit() {
    setNav(9);
  }
  function moveToUploadFitness() {
    setNav(12);
  }
  function moveToUploadAllTax() {
    setNav(15);
  }
  //add driver to db//
  async function addVehicle() {
    try {
      var res = await axios.request({
        method: "post",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        url: URL_ADD_VEHICLE,
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
  //uploads //
  async function uploadRc(formData) {
    console.log("aaaaaaaaaaaaaaaaa");
    formData.append("id", id);
    try {
      var res2 = await axios.post(URL_UPLOAD_RC, formData, {
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

  async function uploadInsurance(formData) {
    console.log("bbbbbbbbbbbb");
    formData.append("id", id);
    try {
      var res3 = await axios.post(URL_UPLOAD_INSURANCE, formData, {
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

  async function uploadPermit(formData) {
    console.log("cccccccccccc");
    formData.append("id", id);
    try {
      var res4 = await axios.post(URL_UPLOAD_PERMIT, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (res4.data.message === "success") {
        setNav(10);
      } else {
        setNav(11);
      }
    } catch (error) {
      console.log(error);
      error.response && alert("Some Error occured while uploading contact admin");
    }
  }

  async function uploadFitness(formData) {
    console.log("dddddddddddd");
    formData.append("id", id);
    try {
      var res5 = await axios.post(URL_UPLOAD_FITNESS, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (res5.data.message === "success") {
        setNav(13);
      } else {
        setNav(14);
      }
    } catch (error) {
      console.log(error);
      error.response && alert("Some Error occured while uploading contact admin");
    }
  }

  async function uploadAllTax(formData) {
    console.log("eeeeeeeeeeeeeeenpm");
    formData.append("id", id);
    try {
      var res6 = await axios.post(URL_UPLOAD_ALL_TAX, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (res6.data.message === "success") {
        setNav(16);
      } else {
        setNav(17);
      }
    } catch (error) {
      console.log(error);
      error.response && alert("Some Error occured while uploading contact admin");
    }
  }

  //control navigation//
  if (nav === 0) {
    return <CreateVehicleForm clicked={onClick} values={values} />;
  } else if (nav === 1) {
    return <ConfirmCreateVehicle values={values} onEdit={onEdit} add={addVehicle} />
  } else if (nav === 2) {
    return <UploadDocs subheader="Please add RC for the Vehicle" title="Upload RC" upload={uploadRc} />;
  } else if (nav === 3) {
    return <Failure subheader="There was an error, Vehicle wasn't added ! Please contact admin " title="Vehicle was not added !" />;
  } else if (nav === 4) {
    return <SuccessWithNext subheader="Rc of the Vehicle was added successfully. Please press next to upload Insurance" title="Rc Uploaded" next={moveToUploadInsurance} />;
  } else if (nav === 5) {
    return <Failure subheader="There was an error, Vehicle was added but Rc didn't upload ! Please contact admin " title="Rc not uploaded !" />;
  } else if (nav === 6) {
    return <UploadDocs subheader="Please upload Insurance of the vehicle" title="Upload Insurance" upload={uploadInsurance} />;
  } else if (nav === 7) {
    return <SuccessWithNext subheader="Insurance of the Vehicle was added successfully. Please press next to upload Permit" title="Insurance Uploaded" next={moveToUploadPermit} />;
  } else if (nav === 8) {
    return <Failure subheader="There was an error, Vehicle details,Rc were added but Insurance didn't upload ! Please contact admin " title="Insurance not uploaded !" />;
  } else if (nav === 9) {
    return <UploadDocs subheader="Please upload Permit of the vehicle" title="Upload Permit" upload={uploadPermit} />;
  } else if (nav === 10) {
    return <SuccessWithNext subheader="Permit of the Vehicle was added successfully. Please press next to upload Fitness" title="Permit Uploaded" next={moveToUploadFitness} />;
  } else if (nav === 11) {
    return <Failure subheader="There was an error, Vehicle details ,Rc, Insurance were added but Permit didn't upload ! Please contact admin " title="Permit not uploaded !" />;
  } else if (nav === 12) {
    return <UploadDocs subheader="Please upload Fitness of the vehicle" title="Upload Fitness" upload={uploadFitness} />;
  } else if (nav === 13) {
    return <SuccessWithNext subheader="Fitness of the Vehicle was added successfully. Please press next to upload All-Tax/ Goods-Tax" title="Fitness Uploaded" next={moveToUploadAllTax} />;
  } else if (nav === 14) {
    return <Failure subheader="There was an error, Vehicle details,Rc,Insurance,Permit were added but Fitness didn't upload ! Please contact admin " title="Fitness not uploaded !" />;
  } else if (nav === 15) {
    return <UploadDocs subheader="Please upload All-Tax/ Goods-Tax of the vehicle" title="Upload All-Tax/ Goods-Tax" upload={uploadAllTax} />;
  } else if (nav === 16) {
    return <Success subheader="The vehicle was Added successfully, and all the documets were uploaded" title="Vehicle Created Successfully" />
  } else if (nav === 17) {
    return <Failure subheader="There was an error,  Vehicle details,Rc,Insurance,Permit,fitness were uploaded but All-Tax/Goods-Tax didn't upload ! Please contact admin " title="All-Tax/Goods-Tax not uploaded !" />;
  }
}
export default CreateVehicle;
