import React from 'react'
import { Outlet } from 'react-router-dom'

const DashboardPageLayout = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default DashboardPageLayout;