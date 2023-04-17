import React from 'react';
import { Link } from 'react-router-dom';

const ButtonLink = ({ path, name }) => {
   return (
      <Link to={path} className='button-link text-green-600 font-medium'>
         {name}
      </Link>
   );
};

export default ButtonLink;
