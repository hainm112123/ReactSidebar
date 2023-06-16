import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar, Drawer, List, Stack, Toolbar} from '@mui/material'

import sizeConfigs from '../../configs/sizeConfigs'
import assets from '../../assets/index'
import colorConfigs from '../../configs/colorConfigs';
import appRoutes from '../../routes/appRoutes';
import SidebarItem from './SidebarItem';
import SidebarItemCollapse  from './SidebarItemCollapse'

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: sizeConfigs.sidebar.width,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: sizeConfigs.sidebar.width,
          boxSizing: 'border-box',
          borderRight: "0px",
          backgroundColor: colorConfigs.sidebar.bg,
          color: colorConfigs.sidebar.color,
        },
      }}
    > 
      <List disablePadding>
        <Toolbar sx={{marginBottom: "20px"}}>
          <Stack
            sx={{width: "100%"}}
            direction="row"
            justifyContent="center"
          > 
            <Avatar 
              src={assets.images.logo} 
              component={Link}
              to="/"
            />
          </Stack>
        </Toolbar>

        {appRoutes.map((route, index) => (
          route.sidebarProps ? (
            route.childs ? (
              <SidebarItemCollapse key={index} item={route}/>
            ) : (
              <SidebarItem key={index} item={route} />
            )
          ) : null
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;