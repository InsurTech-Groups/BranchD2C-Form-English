import React, { useEffect} from "react";
import "../styles/LandingPage.css";
import LandingHeaderPic from "../assets/HomeImage.jpg";
import { BoltIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline';
import ZipCode from '../apis/zipCode'
import FAQ from "../components/faq";
import { ipAddress } from "../apis/ipCollection";
import { trustedForm } from "../apis/trustedForm";
import GetMoreQuotes from "../components/GetMoreQuotes";
function LandingPage() {
  
  // TODO: Add Specific Form Type
  // TODO: Add Specific Form Header

  let formType = 'Home Insurance'

  useEffect(() => {
    ipAddress();
    trustedForm();
  }, [])
  

  const features = [
    {
      name: `Competitive ${formType} Rates`,
      description:
        'We shop with over 20 of our partnered carriers to bring you the most competitive and best price tailored just for you.',
      icon: GlobeAltIcon,
    },
    {
      name: 'Getting A Quote Is Fast And Easy',
      description: 'Fill out a form takes less than 3 minutes, it is quick and easy!',
      icon: ScaleIcon,
    },
    {
      name: 'Get A Quote Fast',
      description:
        'Once you submit a form, one of our licensed agents will get in touch with you and let you know just how much you can save.',
      icon: BoltIcon,
    },
  ]


  return (
    <div className="bg-dark-purple">
      <main className="lg:relative">
        <div className="w-full pt-16 pb-20 mx-auto text-center max-w-7xl lg:py-48 lg:text-left">
          <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Buy Your</span> <br />
              <span className="block text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 xl:inline">
                {formType} {' '}
              </span>
              Online
            </h1>
            <p className="max-w-md mx-auto mt-3 text-lg text-white sm:text-xl md:mt-5 md:max-w-3xl">
              Fill out a form in less than 3 minutes, and get a quote tailored for you at a competitive price. Shopping for {formType} has never been easier.
            </p>
              <ZipCode />
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
          <img
            className="absolute inset-0 object-cover w-full h-full"
            src={LandingHeaderPic}
            alt=""
          />
        </div>
      </main>

      <div className="bg-input-purple py-36">
        <div className="max-w-xl px-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="mb-12 text-4xl font-bold tracking-tight text-center text-white  sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">Why Choose Us </h1>
        <dl className="space-y-10 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          {features.map((feature) => (
            <div key={feature.name} className='p-5 bg-white rounded-xl'>
              <dt>
                <div className="flex items-center justify-center w-12 h-12 text-white rounded-md bg-button-purple">
                  <feature.icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <p className="mt-5 text-lg font-extrabold leading-6 text-dark-purple">{feature.name}</p>
              </dt>
              <dd className="mt-2 text-base text-dark-purple">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
      </div>

<div className="elfsight-app-c43abc95-912b-4592-8284-6ee3d320a5a8 bg-input-purple pb-10"></div>

     
      <FAQ />

      <GetMoreQuotes/>
      
    </div>
  );
}

export default LandingPage;