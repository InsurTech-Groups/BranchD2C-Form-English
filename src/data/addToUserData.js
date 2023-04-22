
import { userData } from "./userData";


export const landingPageData = (id, zipCodeValue, cityValue, stateValue, url) => {

  userData.userId = id;
  userData.zip_code = zipCodeValue;
  userData.city = cityValue;
  userData.state = stateValue;

  let tF = document.getElementById('xxTrustedFormToken_0').value;

  userData.trusted_form_token = tF;

  console.log('userData', userData);

};

export const addressUserData = (address, city, state, zipCode) => {
  
    userData.address = address;
    userData.city = city;
    userData.state = state;
    userData.zip_code = zipCode;
  
    console.log('userData', userData);
  
}

export const birthDayUserData = (formattedBDay) => {
    
      userData.birthDay = formattedBDay;
    
      console.log('userData', userData);
    
} 

export const genderUserData = (gender) => {

  userData.gender = gender;

  console.log('userData', userData);
}
  
export const relationshipUserData = (relationship) => {
  
    userData.relationship = relationship;
  
    console.log('userData', userData);
}
  
export const nameUserData = (firstName, lastName) => {
    
      userData.first_name = firstName;
      userData.last_name = lastName;
    
      console.log('userData', userData);
};

export const emailUserData = (email) => {
    
      userData.email = email;
    
      console.log('userData', userData);
}
  
export const phoneUserData = (phone) => {
      
        userData.phone = phone;
      
        console.log('userData', userData);
} 
  