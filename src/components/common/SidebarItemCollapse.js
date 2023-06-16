import { useState } from 'react';
import { List, Collapse, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

import colorConfigs from '../../configs/colorConfigs'
import SidebarItem from './SidebarItem';

const SidebarItemCollapse = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    item.sidebarProps ? (
      <>
        <ListItemButton
          sx={{
            "&: hover": {
              backgroundColor: colorConfigs.sidebar.backgroundColor,
            },
            paddingY: "12px",
            paddingX: "24px"
          }}
          onClick={() => setOpen(!open)}
        >
          <ListItemIcon sx={{
            color: colorConfigs.sidebar.color
          }}>
            {item.sidebarProps.icon && item.sidebarProps.icon}
          </ListItemIcon>
          <ListItemText primary={item.sidebarProps.displayText} />
          {open ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon /> }
        </ListItemButton>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {
              item.childs.map((child, index) => (
                child.sidebarProps ? (
                  child.childs ? (
                    <SidebarItemCollapse key={index} item={child}/>
                  ) : (
                    <SidebarItem key={index} item={child} />
                  )
                ) : null
              ))
            }
          </List> 
        </Collapse>
      </>
    ) : null
  )
}

export default SidebarItemCollapse