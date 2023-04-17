import React, { useState } from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import NavItem from '../../components/NavItem';
import PrimaryButton from '../../components/PrimaryButton';
import auth from '../../firebase.init';
import Loading from './Loading';

const NavBar = () => {
   const [signOut, loading, error] = useSignOut(auth);
   const [user] = useAuthState(auth);
   const [isOpen, setIsOpen] = useState(false);

   if (error) {
      return (
         <div>
            <p>Error: {error.message}</p>
         </div>
      );
   }
   if (loading) {
      return <Loading />;
   }

   const handleMenuToggle = () => {
      setIsOpen(!isOpen);
   };

   return (
      <div>
         <nav className='bg-white border-gray-200 dark:bg-gray-900'>
            <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
               <Link to='/' className='flex items-center'>
                  <span className='text-green-600 self-center text-3xl font-semibold whitespace-nowrap dark:text-white'>
                     Breeze.AI
                  </span>
               </Link>
               <button
                  onClick={handleMenuToggle}
                  data-collapse-toggle='navbar-default'
                  type='button'
                  className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
                  aria-controls='navbar-default'
                  aria-expanded={isOpen}
               >
                  <span className='sr-only'>Open main menu</span>
                  <svg
                     className='w-6 h-6'
                     aria-hidden='true'
                     fill='currentColor'
                     viewBox='0 0 20 20'
                     xmlns='http://www.w3.org/2000/svg'
                  >
                     <path
                        fillRule='evenodd'
                        d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                        clipRule='evenodd'
                     ></path>
                  </svg>
               </button>
               <div
                  className={`${
                     isOpen ? 'block' : 'hidden'
                  } w-full md:block md:w-auto`}
                  id='navbar-default'
               >
                  <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
                     <NavItem path='/' name='Home' />
                     <NavItem path='/about' name='About' />
                     <NavItem path='/dashboard' name='Dashboard' />

                     {user ? (
                        <>
                           <button
                              onClick={async () => {
                                 const success = await signOut();
                                 if (success) {
                                    toast.success('You are sign out');
                                 }
                              }}
                              className='text-green-700 hover:text-white w-full border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-base px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-500 dark:focus:ring-green-800 mt-4'
                           >
                              Sign out
                           </button>
                        </>
                     ) : (
                        <>
                           <PrimaryButton path={'/login'} name={'Login'} />
                        </>
                     )}
                  </ul>
               </div>
            </div>
         </nav>
      </div>
   );
};

export default NavBar;
