import {useState, useEffect} from 'react';
import Banner from '../components/ProgressBar';
import CTA from '../components/CTA';
import { LinkWithQuery } from "../components/BackButton";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { userData } from '../data/userData';
import { nameUserData } from '../data/addToUserData';

const Name = () => {


  const navigate = useNavigate();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  let f = userData.first_name;
  let l = userData.last_name;

  useEffect(() => {
    if (f !== "" && l !== "") {
      setIsButtonDisabled(false);
    }
  }, [])
  


  const handleNameInput = (e) => {

    e.preventDefault();

    let first = document.getElementById('firstName').value.replace(/ /g, "")
    let last = document.getElementById('lastName').value.replace(/ /g, "")

    if (first === "") {
      toast.error("Please enter a first name");
      setIsButtonDisabled(true);
      return;
    }
    if (last === "") {
      toast.error("Please enter a last name");
      setIsButtonDisabled(true);
      return;
    }
    else {
      setIsButtonDisabled(false);
      nameUserData(first, last)
      navigate('/email-phone')
    }
    
    
  }

  return (
    <div className="bg-dark-purple pb-10">
    <Banner setProgress={83} />
    



    <div className="formArea flex items-center justify-top mt-20 py-5 px-4 sm:px-6 lg:px-4 flex-col">
      <div className="m-w-1/2 space-y-8">
        <div>
          <h2 className="mt-4 text-center text-4xl font-extrabold text-white">
            What Is Your {' '}
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 xl:inline">
             Name
            </span>
             ?
          </h2>
        </div>
        <form className="mt-8 space-y-6">
          <div className=" space-y-6 flex flex-col  items-center justify-center">
            <div className="justify-center w-full">
         
           
            <input
                          type="text"
                          name="firstName"
                          id="firstName"
                  placeholder="First Name"
                  required
                  autoComplete='given-name'
                  autoCapitalize='words'
                          className="w-full appearance-none mb-5 lg:text-xl text-center bg-input-purple text-white text-md rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-5 p-2.5"
                  defaultValue={f}
                    
                  onChange={() => {
                    setIsButtonDisabled(false)
                  }}
                />
                 


                 <input
                          type="text"
                          name="lastName"
                          id="lastName"
                  placeholder="Last Name"
                  required
                  autoComplete='family-name'
                  autoCapitalize='words'
                          className="w-full appearance-none mb-5 lg:text-xl text-center bg-input-purple text-white text-md rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-5 p-2.5"
                  defaultValue={l}
                    
                  onChange={() => {
                    setIsButtonDisabled(false)
                  }}
                />

            </div>

            <button
          type="submit"
          disabled={isButtonDisabled}
          className={`px-6 py-4 w-full mt-5 text-lg ${isButtonDisabled ? 'cursor-not-allowed disabled:opacity-75  bg-input-purple' : "bg-pink-600"} hover:shadow-lg text-white rounded transition duration-200`}
                id="zipCodeButton"
                onClick={handleNameInput}
                
          >
          Next
        </button>
          </div>

          <LinkWithQuery to="/relationship">Back</LinkWithQuery>
        </form>
      </div>
    </div>
      <CTA />
      

  </div>
  )
}

export default Name