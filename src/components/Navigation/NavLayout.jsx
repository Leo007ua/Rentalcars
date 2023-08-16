import { Outlet } from 'react-router-dom';
import { Nav } from './Navigation';
import { AppFooter } from '../AppFooter/AppFooter';


export const NavLayout = () => {   

  return (
    <div>
      <Nav/>
      <main>
        <Outlet />
      </main>
      <AppFooter/>
    </div>
  );
};