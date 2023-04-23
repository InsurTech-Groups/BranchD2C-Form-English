import React from 'react'

const NoPriceAvailable = () => {
  return (
    <div className="px-6 py-24 sm:py-32 lg:px-8">
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">We Are Sorry...</h2>
      <p className="mt-6 text-lg leading-8 text-white">
        Unfortunately, we are not able to offer you a price for home insurance at this time. Feel free to call us at <a href="tel:8777141714" className='text-button-purple'>877-714-1714</a> to speak with a representative.
      </p>
    </div>
  </div>
  )
}

export default NoPriceAvailable