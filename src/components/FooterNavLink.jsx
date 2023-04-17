import React from 'react';
import { Link } from 'react-router-dom';

const FooterNavLink = ({ path, name }) => {
   return (
      <Link
         to={path}
         className='block py-2 px-3 text-gray-500 hover:text-gray-900 transition-colors duration-300'
      >
         {name}
      </Link>
   );
};

export default FooterNavLink;
