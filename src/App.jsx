import { Toaster } from 'react-hot-toast';
import { useLocation } from 'react-router-dom';
import Footer from './pages/Global/Footer';
import NavBar from './pages/Global/NavBar';
import Router from './router/Router';

function App() {
   const location = useLocation();
   const hideNavBarFooterRoutes = ['/login', '/register'];

   return (
      <div>
         {!hideNavBarFooterRoutes.includes(location.pathname) && <NavBar />}
         <Router />
         <Toaster />
         {!hideNavBarFooterRoutes.includes(location.pathname) && <Footer />}
      </div>
   );
}

export default App;
