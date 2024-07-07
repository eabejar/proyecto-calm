import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <h2>My Layout</h2>
      <Outlet />
    </div>
  );
};

export default Layout;
