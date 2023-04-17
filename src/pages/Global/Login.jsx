import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import ActionButton from '../../components/ActionButton';
import ButtonLink from '../../components/ButtonLink';
import GoogleLogin from '../../components/GoogleLogin';
import auth from '../../firebase.init';
import Loading from './Loading';

const Login = () => {
   const navigate = useNavigate();
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const handleEmailChange = event => {
      setEmail(event.target.value);
   };

   const handlePasswordChange = event => {
      setPassword(event.target.value);
   };

   const [signInWithEmailAndPassword, user, loading, error] =
      useSignInWithEmailAndPassword(auth);

   const handleLogin = async event => {
      event.preventDefault();
      try {
         await signInWithEmailAndPassword(email, password);
         navigate('/');
      } catch (error) {
         console.error(error.message);
         toast.error(error.message);
      }
   };

   if (loading) {
      return <Loading />;
   }

   return (
      <div className='flex justify-center items-center h-screen bg-gray-800'>
         <div className='bg-gray-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-72 md:w-80 lg:w-96'>
            <h2 className='text-xl font-bold mb-4 text-center'>Login</h2>
            <Link
               to='/'
               className='absolute top-3 left-3 font-semibold cursor-pointer text-green-600'
            >
               Home
            </Link>
            <GoogleLogin />
            <form onSubmit={handleLogin}>
               <div className='mb-4'>
                  <label
                     htmlFor='email'
                     className='block text-gray-700 font-bold mb-2'
                  >
                     Email:
                  </label>
                  <input
                     type='email'
                     id='email'
                     value={email}
                     onChange={handleEmailChange}
                     className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  />
               </div>
               <div className='mb-6'>
                  <label
                     htmlFor='password'
                     className='block text-gray-700 font-bold mb-2'
                  >
                     Password:
                  </label>
                  <input
                     type='password'
                     id='password'
                     value={password}
                     onChange={handlePasswordChange}
                     className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  />
               </div>
               <ActionButton type={'submit'} name={'Login'} />

               <div className='flex items-center pt-5 gap-2'>
                  <p>Not registered?</p>
                  <ButtonLink path='/register' name='Register Now!' />
               </div>
            </form>
            {error && <p className='text-red-500'>{error.message}</p>}
            {user && <p className='text-green-500'>Welcome, {user.email}!</p>}
         </div>
      </div>
   );
};

export default Login;
