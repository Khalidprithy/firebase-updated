import React from 'react';
import { Link } from 'react-router-dom';

const PrimaryButton = ({ name, path }) => {
   return (
      <Link
         to={path}
         class='text-green-700 hover:text-white w-full border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-base px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-500 dark:focus:ring-green-800'
      >
         {name}
      </Link>
   );
};

export default PrimaryButton;
