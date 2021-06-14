/* eslint-disable eqeqeq */

import { URL_UPDATE_LICENCE_DATE, URL_UPLOAD_LICENCE_DRIVER } from "../../../urls";

import Failure from '../../pageComponents/commons/Failure';
import React from 'react';
import SetNewDate from "../commons/SetNewDate"
import Success from '../../pageComponents/commons/Success';
import UploadDocs from '../../pageComponents/commons/UploadDocs';
import axios from 'axios';
import { useParams } from 'react-router-dom';

var qs = require('qs');

export default function UpdateUploadVehicle() {
    const { id } = useParams();
    console.log(id);

    const [nav, setNav] = React.useState(0);
    var title = "Lcence Expiry";
    var uploadTitle = "Upload New Licence";
  
    //add driver to db//
    async function updateDate(newDate) {
        const values = { "id": id, "date": newDate }
        try {
            var res = await axios.request({
                method: "post",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                url: URL_UPDATE_LICENCE_DATE,
                data: qs.stringify(values)
            });
            if (res.data.message === "success") {
                console.log(res.data);
                setNav(2);
            }
            else {
                setNav(1);
            }
        } catch (error) {
            alert("Something went wrong contact admin");
        }
    }
    // uploads //
    async function uploadNewFile(formData) {
        formData.append("id", id);
        try {
            var res2 = await axios.post(URL_UPLOAD_LICENCE_DRIVER, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (res2.data.message === "success") {
                console.log(res2.data);
                setNav(3);
            } else {
                setNav(4);
            }
        } catch (error) {
            console.log(error);
            error.response && alert("Some Error occured while uploading contact admin");
        }
    }


    //control navigation//
    if (nav === 0) {
        return <SetNewDate title={title} next={updateDate} />;
    } else if (nav === 1) {
        return <Failure subheader="There was an error, Please contact admin " title="Date was not set !" />;
    } else if (nav === 2) {
        return <UploadDocs subheader="Please add New Document for the Driver" title={uploadTitle} upload={uploadNewFile} />;
    }else if ( nav === 3){
        return <Success subheader="The documet was uploaded" title="Document Uploaded Successfully" />
    }else if (nav === 4){
        return <Failure subheader="There was an error, Please contact admin " title="Document not uploaded !" />;
    }
}