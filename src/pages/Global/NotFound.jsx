import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
   return (
      <div className='flex flex-col items-center justify-center h-screen bg-gray-800'>
         <h4 className='text-3xl text-orange-500 font-bold mb-4'>
            404 - Page Not Found
         </h4>
         <p className='text-lg mb-4 text-gray-100'>
            Looks like you&apos;ve hit a snag. But don&apos;t worry, we
            won&apos;t leave you hanging.
         </p>
         <p className='text-base font-medium mb-8 text-gray-300'>
            Let&apos;s head back to the homepage and pretend this never
            happened, okay?
         </p>
         <Link
            to='/'
            className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
         >
            Get me out of here!
         </Link>
      </div>
   );
};

export default NotFound;
