

import axios from 'axios';
import { userData } from './userData';

export const postDataToBranch = async () => {

  let postData = {
    insuredInformation: {
      firstName: userData.first_name, 
      lastName: userData.last_name, 
      email: userData.email,
      dateOfBirth: userData.birthDay, 
      gender: userData.gender, 
      maritalStatus: userData.relationship, 
      phone: userData.phone, 
    },
    propertyInformation: {
      address: {
        address1: userData.address,
        city: userData.city,
        state: userData.state,
        zip: userData.zip_code,
        address2: ""
      },
    },
    leadId: "",
    policyTypeCode: "HA"
  }

  

  axios.post('http://localhost:4000/branch', postData)
    .then((res) => {
      console.log(res);
    }
  )
    .catch((err) => {
      console.log(err);
    } 
  )

}