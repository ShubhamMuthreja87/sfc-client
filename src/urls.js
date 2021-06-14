const HOST = window.location.hostname;
const BASE_URL = "http://" + HOST + ":5000/";
// const BASE_URL = "ec2-34-229-220-65.compute-1.amazonaws.com:5000/";

////////////            Basic data fetch        //////////////

const URL_USER_AUTH = BASE_URL + "login";
const URL_FETCH_STATES = BASE_URL + "states";
const URL_FETCH_CITIES = BASE_URL + "cities";
const URL_FETCH_BRANCHES = BASE_URL + "branches";
const URL_FETCH_V_TYPES = BASE_URL + "vehicleTypes";
const URL_FETCH_DRIVERS = BASE_URL + "drivers";
const URL_FETCH_MAKES = BASE_URL + "vehicleBrands";
const URL_FETCH_VEHICLE_DATA = BASE_URL + "getVehicleData";
const URL_FETCH_VEHICLE_BY_ID = BASE_URL + "vehicleById";
const URL_FETCH_DRIVER_DATA = BASE_URL + "getDriverData";
const URL_FETCH_DRIVER_BY_ID = BASE_URL + "getDriverById";
const URL_FETCH_CLIENT_DATA = BASE_URL +"getClientData";
const URL_FETCH_CLIENT_BY_ID = BASE_URL +"getClientById";

////////////            Data Post              //////////////

const URL_ADD_BRANCH = BASE_URL + "addBranch";
const URL_ADD_USER = BASE_URL + "register";
const URL_ADD_DRIVER = BASE_URL + "addDriver";
const URL_ADD_VEHICLE = BASE_URL + "addVehicle";
const URL_UPDATE_VEHICLE_DATES = BASE_URL + "updateVehicleDate";
const URL_UPDATE_LICENCE_DATE = BASE_URL + "updateLicenceDate";
const URL_ADD_CLIENT = BASE_URL + "addClient";

///////////             Upload Download       //////////////

const URL_UPLOAD_AADHAR_DRIVER = BASE_URL + "uploadAadharDriver";
const URL_UPLOAD_LICENCE_DRIVER = BASE_URL + "uploadLicenceDriver";
const URL_UPLOAD_RC = BASE_URL + "uploadRCVehicle";
const URL_UPLOAD_INSURANCE = BASE_URL + "uploadInsuranceVehicle";
const URL_UPLOAD_FITNESS = BASE_URL + "uploadFitnessVehicle";
const URL_UPLOAD_PERMIT = BASE_URL + "uploadPermitVehicle";
const URL_UPLOAD_ALL_TAX = BASE_URL + "uploadAllTaxVehicle";
const URL_DOWNLOAD_VEHICLE_DOCS = BASE_URL + "downloadVehicleDocuments";
const URL_DOWNLOAD_DRIVER_DOCS = BASE_URL + "downloadDriverDocuments";
const URL_UPLOAD_CONTRACT_CLIENT = BASE_URL + "uploadContractClient";

///////////             Exports            //////////////

export {
  URL_ADD_BRANCH,
  URL_ADD_DRIVER,
  URL_ADD_USER,
  URL_ADD_VEHICLE,
  URL_FETCH_BRANCHES,
  URL_FETCH_CITIES,
  URL_FETCH_DRIVERS,
  URL_FETCH_MAKES,
  URL_FETCH_STATES,
  URL_FETCH_V_TYPES,
  URL_UPLOAD_AADHAR_DRIVER,
  URL_UPLOAD_LICENCE_DRIVER,
  URL_USER_AUTH,
  URL_UPLOAD_RC,
  URL_UPLOAD_INSURANCE,
  URL_UPLOAD_FITNESS,
  URL_UPLOAD_PERMIT,
  URL_UPLOAD_ALL_TAX,
  URL_FETCH_VEHICLE_DATA,
  URL_FETCH_VEHICLE_BY_ID,
  URL_DOWNLOAD_VEHICLE_DOCS,
  URL_UPDATE_VEHICLE_DATES,
  URL_FETCH_DRIVER_DATA,
  URL_UPDATE_LICENCE_DATE,
  URL_FETCH_DRIVER_BY_ID,
  URL_DOWNLOAD_DRIVER_DOCS,
  URL_ADD_CLIENT,
  URL_UPLOAD_CONTRACT_CLIENT,
  URL_FETCH_CLIENT_DATA,
  URL_FETCH_CLIENT_BY_ID
};