import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from '../pages/Global/Loading';

const ProtectedRoute = () => {
   const navigate = useNavigate();
   const [user, loading, error] = useAuthState(auth);

   const checkAuth = async () => {
      try {
         await auth.currentUser;
      } catch (error) {
         console.log(error);
      }
   };

   if (loading) {
      return <Loading />;
   }

   if (error) {
      return <p>Error: {error.message}</p>;
   }

   if (!user) {
      return navigate('/login');
   }

   return <Outlet />;
};

export default ProtectedRoute;
