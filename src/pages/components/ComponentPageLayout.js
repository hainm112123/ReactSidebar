import React from 'react'
import { Outlet } from 'react-router-dom'

const Props = {};

const ComponentPageLayout = (props = Props) => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default ComponentPageLayout;