import React from 'react';
import FooterNavLink from '../../components/FooterNavLink';

const Footer = () => {
   return (
      <React.Fragment>
         <footer class='bg-white rounded-lg shadow m-4 dark:bg-gray-800'>
            <div class='w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between'>
               <span class='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
                  © 2023{' '}
                  <a
                     href='https://devkbin.netlify.app/'
                     class='hover:underline'
                  >
                     Dev.Kbin™
                  </a>
                  . All Rights Reserved.
               </span>
               <ul class='flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0'>
                  <FooterNavLink path={'/about'} name={'About'} />
                  <FooterNavLink
                     path={'/privacy-policy'}
                     name={'Privacy Policy'}
                  />
                  <FooterNavLink path={'/licensing'} name={'Licensing'} />
                  <FooterNavLink path={'/Contact'} name={'Contact'} />
               </ul>
            </div>
         </footer>
      </React.Fragment>
   );
};

export default Footer;
