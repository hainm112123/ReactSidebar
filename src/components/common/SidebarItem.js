import React from 'react' 
import { Link } from 'react-router-dom'
import { ListItemButton, ListItemIcon } from '@mui/material'

import colorConfigs from '../../configs/colorConfigs'
import { useSelector } from 'react-redux'

const SidebarItem = ({ item }) => {
  const { appState } = useSelector((state) => state.appState) 

  return (
    item.sidebarProps && item.path ? (
      <ListItemButton
        component={Link}
        to={item.path}
        sx={{
          "&: hover": {
            backgroundColor: colorConfigs.sidebar.backgroundColor,
          },
          backgroundColor: appState === item.state ? colorConfigs.sidebar.activeBg : "unset",
          paddingY: "12px",
          paddingX: "24px"
        }}
      >
        <ListItemIcon sx={{
          color: colorConfigs.sidebar.color
        }}>
          {item.sidebarProps.icon && item.sidebarProps.icon}
        </ListItemIcon>
        {item.sidebarProps.displayText}
      </ListItemButton>
    ) : null 
  )
};

export default SidebarItem;
