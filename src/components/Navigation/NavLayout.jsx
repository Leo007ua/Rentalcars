import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';
import { AppFooter } from '../AppFooter/AppFooter';


export const NavLayout = () => {   
  

  return (
    <div>
      <Navigation/>
      <main>
        <Outlet />
      </main>
      <AppFooter />
    </div>
  );
};