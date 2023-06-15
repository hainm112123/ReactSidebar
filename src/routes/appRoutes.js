import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';

import HomePage from "../pages/home/HomePage"
import DashboardPageLayout from "../pages/dashboard/DashboardPageLayout"
import DefaultPage from "../pages/dashboard/DefaultPage"
import DashboardIndex from '../pages/dashboard/DashboardIndex';

const appRoutes = [
  {
    index: true,
    element: <HomePage />,
    state: "home"
  },
  {
    path: "/dashboard",
    element: <DashboardPageLayout />,
    state: "dashboard",
    sidebarProps: {
      displayText: "Dashboard",
      icon: <DashboardOutlinedIcon />
    },
    child: [
      {
        index: true,
        element: <DashboardIndex />,
        state: "dashboard.index",
      },
      {
        path: "/dashboard/default",
        element: <DefaultPage />,
        state: "dashboard.default",
        sidebarProps: {
          displayText: "Default",
        }
      }
    ],
  }
]

export default appRoutes;