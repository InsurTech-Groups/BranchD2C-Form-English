import {useState, useEffect} from 'react';
import Banner from '../components/ProgressBar';
import CTA from '../components/CTA';
import { LinkWithQuery } from "../components/BackButton";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { userData } from '../data/userData';
import axios from 'axios';
import PhoneInput from "react-phone-number-input/input";
import { postDataToBranch } from '../apis/PostDataToBranch';


const EmailPhone = () => {


  const navigate = useNavigate();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isAutoCorrect, setIsAutoCorrect] = useState(false)
  const [autoCorrectText, setAutoCorrectText] = useState('')
  const aK = import.meta.env.VITE_PHONE_API_KEY;


  let e = userData.email;
  let p = userData.phone;


  useEffect(() => {
    if (e !== "" && p !== "") {
      setIsButtonDisabled(false);
    }
  }, [])
  

  function changeText() {
    document.getElementById('email').value = autoCorrectText;
    setIsAutoCorrect(false);

          //TODO: Add autoCorrectText to userData    
  }

  const handleEmail = (e) => {

    const apiKey = import.meta.env.VITE_EMAIL_API_KEY; 
let email = document.getElementById('email').value


    console.log(email)
    axios.get(`https://emailvalidation.abstractapi.com/v1/?api_key=${apiKey}&email=${email}`)
    .then(response => {
      console.log(response.data);

      let data = response.data;

      let autoCorrect = data.autocorrect;
      let dispo = data.is_disposable_email.value;
      let delivery = data.deliverability
      let format = data.is_valid_format.value;
 
      console.log(format)
      if (autoCorrect != ''){
        setIsAutoCorrect(true)
        setAutoCorrectText(autoCorrect)
        return
      }
      if (dispo) {
        toast.error('Please enter a valid email address');
        setIsButtonDisabled(true);
        return;
      }    
      if (delivery === 'UNDELIVERABLE') {
        toast.error('Please enter a valid email address');
        setIsButtonDisabled(true);
        return
      }
      if (format === 'false') {
        toast.error('Please enter a valid email address');
        setIsButtonDisabled(true);
        return
      }
      else {
      //TODO: Add to userData
    }
    })
    .catch(error => {
      console.log(error);
      toast.error('There seems to be a problem checking your email...')
    });
   
 }

  const handleNextStep = (e) => {

    e.preventDefault();

    let phone = document.getElementById('phone_home').value 

    console.log('ak', aK)

    //remove () and - from phone
    phone = phone.replace(/[- )(]/g, '');


  
    axios.get(`https://phonevalidation.abstractapi.com/v1/?api_key=75f89b138e344044ab0f3cd7ef56af67&phone=1${phone}`)
    .then(response => {
      let data = response.data;

      let valid = data.valid;

      console.log(valid)

      if (!valid) {

        toast.error('Please enter a valid phone number');
        setIsButtonDisabled(true);
        return
      }
      else {
      //TODO: Add to userData
      postDataToBranch(navigate);
        navigate('/submit')
      }
    })
    .catch(error => {
      console.log(error);
      toast.error('There seems to be a problem checking your phone number...')
    });

  

  }
  return (
    <div className="bg-dark-purple pb-10">
    <Banner setProgress={100} />
    



    <div className="formArea flex items-center justify-top mt-20 py-5 px-4 sm:px-6 lg:px-4 flex-col">
      <div className="m-w-1/2 space-y-8">
        <div>
          <h2 className="mt-4 text-center text-4xl font-extrabold text-white">
            What Is Your {' '}
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 xl:inline">
             Email & Phone
            </span>
             ?
          </h2>
        </div>
        <form className="mt-8 space-y-6">
          <div className=" space-y-6 flex flex-col  lg:w-1/2 md:w-full sm:w-full mx-auto">
            <div className="justify-center w-full">
         
           
            <div className='mb-5'>
                <input
                          type="email"
                          name="email"
                          id="email"
                  placeholder="Email Address"
                  required
                  autoComplete='email'
                          className="w-full appearance-none lg:text-xl text-center bg-input-purple text-white text-md rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-5 p-2.5"
                  defaultValue={e}
                  onChange={() => {
                    setIsButtonDisabled(false)
                  }}
                  onBlurCapture={handleEmail}
                  />
                  
                  {
                    isAutoCorrect ? (
                      <a className='text-white text-sm text-center mx-auto pt-1 cursor-pointer'  onClick={changeText}>
                    
      Did you mean <span className='font-bold underline'>{autoCorrectText}</span>?
    </a>
                    ) : (<div></div>)
                  }

           </div>
            
                 


                 <PhoneInput
                    defaultCountry="US"
                    country="US"
                    className="w-full lg:text-xl text-center bg-input-purple text-white text-md rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-5 p-2.5"
                  id="phone_home"
                  pattern="\d*"
                    placeholder="Phone Number"
                    name="phone_home"
                  onChange={() => {
                    setIsButtonDisabled(false)
                  }}
                  />


            </div>

              <div className='min-w-1/2'>

 <span className="text-white ">
                By clicking, “Get My Free Quote” below, I am providing my consent for Insurtech Groups and its service providers, Aktify and BoomAI, to use automated technology, including calls, texts, prerecorded messages and emails, to contact me about insurance offers at the number and email provided even if my number is on a corporate, state or national do not call list. This consent is not required to make a purchase.  Clicking the button below constitutes your electronic signature. <a
                    className="text-button-purple "
                    href="https://www.insurtechgroups.com/terms-conditions"
                  >
                    {" "}
                    Terms & conditions
                  </a>{" "} and <a
                    href="https://www.insurtechgroups.com/privacy-policy"
                    className="text-button-purple"
                  >
                    Privacy policy
                  </a>{" "} apply. Msg & data rates may apply. Text “stop” to unsubscribe.
 

                </span>
              </div>

            <button
          type="submit"
          disabled={isButtonDisabled}
          className={`px-6 py-4 w-full mt-5 text-lg ${isButtonDisabled ? 'cursor-not-allowed disabled:opacity-75  bg-input-purple' : "bg-pink-600"} hover:shadow-lg text-white rounded transition duration-200`}
                id="zipCodeButton"
                onClick={handleNextStep}
                
          >
          Get My Free Quotes
        </button>
          </div>

          <LinkWithQuery to="/name">Back</LinkWithQuery>
        </form>
      </div>
    </div>
      <CTA />
      

  </div>
  )
}

export default EmailPhone