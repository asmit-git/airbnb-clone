import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'> 
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>About</h5>
            <p>How Airbnb works?</p>
            <p>Newsroom</p>
            <p>Investors</p>
            <p>Airbnb Plus</p>
            <p>Airbnb Luxe</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>Community</h5>
            <p>Accessibility</p>
            <p>Queries</p>
            <p>Fake website4</p>
            <p>Referrals</p>
            <p>Yoyo</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>Host</h5>
            <p>Know your host?</p>
            <p>Presents</p>
            <p>Next js demo</p>
            <p>Hundreds of Guests</p>
            <p>Reviews</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>Support</h5>
            <p>Help Center</p>
            <p>Trust and safety</p>
            <p>FAQs</p>
            <p>easy</p>
            <p>refunds</p>
        </div>       
    </div>
  )
}

export default Footer