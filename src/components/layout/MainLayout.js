import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box , Toolbar } from '@mui/material'

import sizeConfigs from '../../configs/sizeConfigs';
import colorConfigs from '../../configs/colorConfigs'
import Topbar from '../common/Topbar'
import Sidebar from '../common/Sidebar'

const MainLayout = () => {
  return (
    <Box sx={{display: "flex"}}>
      <Topbar/>
      <Box
        component="nav"
        sx={{
          width: sizeConfigs.sidebar.width,
          flexShrink: 0 
        }}
      >
        <Sidebar />
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: `calc(100% - ${sizeConfigs.sidebar.width})`,
          minHeight: "100vh",
          backgroundColor: colorConfigs.mainBg
        }}
      >
        <Toolbar/>
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;