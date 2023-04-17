import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavItem = ({ path, name }) => {
   const location = useLocation();
   const active = path === location.pathname;

   return (
      <Link
         className={`p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer  ${
            active ? 'text-green-500 border-opacity-100' : ''
         } `}
         to={path}
      >
         {name}
      </Link>
   );
};

export default NavItem;
