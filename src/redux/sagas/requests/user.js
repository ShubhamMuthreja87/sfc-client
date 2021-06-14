import {URL_USER_AUTH} from "../../../urls"
import axios from "axios";

var qs = require('qs');
export function requestGetUser(user) {
  console.log(URL_USER_AUTH);
  return axios.request({
    method: "post",
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    url: URL_USER_AUTH,
    data: qs.stringify({email:user.email,password:user.password})
  });
}
