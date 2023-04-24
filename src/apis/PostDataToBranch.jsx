

import axios from 'axios';
import { userData } from '../data/userData';
import { toast } from "react-toastify";

export const postDataToBranch = async (navigate) => {



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

  

  axios({
    method: 'POST',
    url: 'https://branch-d2c.herokuapp.com/branch',
    data: postData,

  })
    .then((res) => {
      console.log(res);

      userData.available = res.data.available;
      userData.homePrice = res.data.homePriceHint;
      userData.quoteURL = res.data.quoteUrl;

      toast.success('Your Form Has Been Submitted!')
      console.log(userData)
      navigate('/thank-you')
    }
    
  )
    .catch((err) => {

      console.log(err);
      toast.error('Something Went Wrong!')
     
      
      
    } 
  )

}