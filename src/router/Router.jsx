import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../pages/About/About';
import Dashboard from '../pages/Dashboard/Dashboard';
import Login from '../pages/Global/Login';
import NotFound from '../pages/Global/NotFound';
import Register from '../pages/Global/Register';
import Home from '../pages/Home/Home';
import ProtectedRoute from './ProtectedRoute';

const MainRouter = () => {
   return (
      <div className='min-h-screen'>
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />

            <Route path='/*' element={<ProtectedRoute />}>
               <Route path='dashboard' element={<Dashboard />} />
            </Route>

            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />

            <Route path='*' element={<NotFound />}></Route>
         </Routes>
      </div>
   );
};

export default MainRouter;
