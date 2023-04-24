import {useEffect, useState} from 'react'
import { CheckIcon } from '@heroicons/react/20/solid';
import { userData } from '../data/userData';

const includedFeatures = [
  'Best Price For Your Home',
  'Top Rated Insurance Company',
  'Secure Online Application',
  '24/7 Customer Service',
]


const BranchPricingTable = () => {

  const [price, setPrice] = useState('');
const [url, setUrl] = useState('');

  useEffect(() => {
  
    let price = userData.homePrice;

    // make price USD string
    price = price.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

  setPrice(price);
  setUrl(userData.quoteURL);
  
  console.log(price);
  console.log(url);
}, [userData.homePrice, userData.quoteURL])

  
  let name = userData.first_name;
  return (
    <div className="bg-dark-purple py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl sm:text-center">
        <h2 className="text-5xl font-bold tracking-tight text-white sm:text-4xl">{name}, Your Home Can Be Insured Today!</h2>
        <p className="mt-6 text-lg leading-8 text-white">
            Based on your responses Branch<sup>&reg;</sup> & Insurtech Groups has found the best estimated home insurance price for you.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-input-purple sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
        <div className="p-8 sm:p-10 lg:flex-auto">
          <h3 className="text-2xl font-bold tracking-tight text-white">Estimated Home Insurance Price</h3>
          <p className="mt-6 text-base leading-7 text-white">
            Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis
            repellendus etur quidem assumenda.
          </p>
          <div className="mt-10 flex items-center gap-x-4">
            <h4 className="flex-none text-sm font-semibold leading-6 text-white">What's included</h4>
            <div className="h-px flex-auto bg-input-purple" />
          </div>
          <ul
            role="list"
            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-white sm:grid-cols-2 sm:gap-6"
          >
            {includedFeatures.map((feature) => (
              <li key={feature} className="flex gap-x-3">
                <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
          <div className="rounded-2xl bg-input-purple py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
            <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-white">{name}'s Estimated Home Insurance Price</p>
              <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-white">{price}</span>
                <span className="text-sm font-semibold leading-6 tracking-wide text-white">/year</span>
              </p>
              <a
                  href={url}
                  target='_blank'
                className="mt-10 block w-full rounded-md bg-button-purple px-10 py-7 text-center text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Purchase Now
              </a>
              <p className="mt-6 text-xs leading-5 text-gray-600">
                Disclamer Goes Here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default BranchPricingTable