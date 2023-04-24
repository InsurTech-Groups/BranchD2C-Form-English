import React, { useState, useEffect } from "react";
import "../styles/forms.css";
import Banner from "../components/ProgressBar";
import { useNavigate } from "react-router-dom";
import CTA from "../components/CTA";
import { LinkWithQuery } from "../components/BackButton";
import { toast } from "react-toastify";
import { userData } from "../data/userData";
import { addressUserData } from "../data/addToUserData";
import { AddressAutofill } from "@mapbox/search-js-react";

function Address() {
  const navigate = useNavigate();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [bottomText, setBottomText] = useState();

  let color = '#1d2537'
  
  let lat = userData.lat
  let lon = userData.lon 

  let s = userData.business_address;
  let c = userData.business_city;
  let st = userData.business_state;
  let z = userData.business_zipcode

  useEffect(() => {
    if (s !== "" && c !== "" && st !== "" && z !== "") {
      setIsButtonDisabled(false);
    }
  }, []);

  function handleAddress(e) {

    e.preventDefault();

    let street = document.getElementById('street').value;
    let secondary = document.getElementById('secondary').value;
    let city = document.getElementById('city').value;
    let state = document.getElementById('state').value;
    let zipcode = document.getElementById('zipcode').value;

    if (street === " " || street === "") {
      toast.error('Please enter a valid address');
      return
    }
    else {
      street = street + ' ' + secondary;

      addressUserData(street, city, state, zipcode)
    navigate('/dob')
    }

    
  }

  return (
    <div className="bg-dark-purple pb-10">
      <Banner setProgress={16} />

      <div className="formArea flex items-center justify-top mt-20 py-5 px-4 sm:px-6 lg:px-4 flex-col">
        <div className="m-w-1/2 space-y-8">
          <div>
            <h2 className="mt-4 text-center text-4xl font-extrabold text-white">
              What is your current{" "}
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 xl:inline">
                Home Address
              </span>
              ?
            </h2>
          </div>
          <form className="mt-8 space-y-6">
            <AddressAutofill
              accessToken={
                "pk.eyJ1IjoiaW5zdXJ0ZWNoZ3JvdXBzIiwiYSI6ImNsZXdpeDViczBudmkzcnBpY3Fwb2R0NWkifQ.D3DfQTB9A_PXeXEVSddYUQ"
              }
              theme={{
                variables: {
                colorBackground: color,
                  colorText: 'white',
                  fontFamily: 'ThiccBoi, sans-serif',
                  borderRadius: '10px',
                  colorBackgroundActive: '#0f172a',
                  colorBackgroundHover: '#8b46ff'
                  
                
                }
              }}
              confirmOnBrowserAutofill={{
                minimap: true,
              }}

              popoverOptions={{
                placement: 'bottom-start',
                flip: true,
                offset: 5,
                
              }}
              
              options={{
                limit: 5,
              
              }}
              browserAutofillEnabled={true}
            
              
            >
              <input
                className="appearance-none p-3  text-lg font-semibold leading-none bg-input-purple rounded text-white h-16 w-full text-center"
                id="street"
                name="street"
                type="text"
                label="street"
                placeholder="Enter your address..."
                required={true}
                defaultValue={s}
                autoComplete="address-line1"
                onChange={() => {
                  setIsButtonDisabled(false);
                }}
            
               
              />
               </AddressAutofill>
               <input
                className="appearance-none p-3 mt-5  text-lg font-semibold leading-none bg-input-purple rounded text-white h-16 w-full text-center"
                id="secondary"
                name="secondary"
                type="text"
                label="secondary"
                placeholder="Suite, Apartment, PO Box"
                autoComplete="address-line2"                
              />

              <div>
                {/* make 2 grid columns */}
                <div className="grid grid-cols-3 gap-4">
                  <div>
                  <input
                className="appearance-none p-3 mt-5  text-lg font-semibold leading-none bg-input-purple rounded text-gray-500 h-16 w-full text-center"
                id="city"
                name="city"
                    type="text"
                    defaultValue={c}
                    label="city"
                    readOnly={true}

                placeholder="City"
                autoComplete="address-level2"

                required={true}
                
                    />
                  </div>
                  <div>
                  <input
                className="appearance-none p-3 mt-5  text-lg font-semibold leading-none bg-input-purple rounded text-gray-500 h-16 w-full text-center"
                id="state"
                name="state"
                type="text"
                    label="state"
                    readOnly={true}
defaultValue={st}
                placeholder="State"
                autoComplete="address-level1"

                required={true}
                
                    />
                  </div>

                  <div>
                  <input
                className="appearance-none p-3 mt-5  text-lg font-semibold leading-none bg-input-purple rounded text-gray-500 h-16 w-full text-center"
                id="zipcode"
                name="zipcode"
                type="text"
                label="zipcode"
                    placeholder="Zipcode"
                    readOnly={true}
                    defaultValue={z}

                autoComplete="postal-code"

                required={true}
                
                    />
                  </div>

                  </div>
              </div>
           

            <div className=" leading-5 ">
              <button
                type="submit"
                disabled={isButtonDisabled}
                className={`px-6 py-4 mt-5 text-lg justify-center text-center w-full bg-pink-600 ${
                  isButtonDisabled
                    ? "cursor-not-allowed disabled:opacity-75  bg-input-purple"
                    : ""
                } hover:shadow-lg text-white rounded transition duration-200`}
                id="zipCodeButton"
                onClick={handleAddress}
              >
                Next
              </button>
            </div>

            <LinkWithQuery to="/">Back</LinkWithQuery>
          </form>
        </div>
      </div>
      <CTA />
    </div>
  );
}

export default Address;
