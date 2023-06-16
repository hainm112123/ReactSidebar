import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

import HomePage from "../pages/home/HomePage"
import DashboardPageLayout from "../pages/dashboard/DashboardPageLayout"
import DefaultPage from "../pages/dashboard/DefaultPage"
import DashboardIndex from '../pages/dashboard/DashboardIndex';
import ComponentPageLayout from '../pages/components/ComponentPageLayout';
import ChangelogPage from '../pages/changelog/ChangelogPage';
import InstallationPage from '../pages/installation/InstallationPage';
import DocumentationPage from '../pages/documentation/DocumentationPage';
import AnalyticsPage from '../pages/dashboard/AnalyticsPage'
import SaasPage from '../pages/dashboard/SaasPage';
import AlertPage from '../pages/components/AlertPage';
import ButtonPage from '../pages/components/ButtonPage';
import ComponentIndex from '../pages/components/ComponentIndex'

const appRoutes = [
  {
    index: true,
    element: <HomePage />,
    state: "home"
  },
  {
    path: "/installation",
    element: <InstallationPage />,
    state: "installation",
    sidebarProps: {
      displayText: "Installation",
      icon: <FileDownloadOutlinedIcon />
    }
  },
  {
    path: "/dashboard",
    element: <DashboardPageLayout />,
    state: "dashboard",
    sidebarProps: {
      displayText: "Dashboard",
      icon: <DashboardOutlinedIcon />
    },
    childs: [
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
      },
      {
        path: "/dashboard/analytics",
        element: <AnalyticsPage />,
        state: "dashboard.analytics",
        sidebarProps: {
          displayText: "Analytics",
        }
      },
      {
        path: "/dashboard/saasPage",
        element: <SaasPage />,
        state: "dashboard.saasPage",
        sidebarProps: {
          displayText: "SaasPage",
        }
      },
    ],
  },
  {
    path: "/components",
    element: <ComponentPageLayout />,
    state: "components",
    sidebarProps: {
      displayText: "Components",
      icon: <AppsOutlinedIcon />
    },
    childs: [
      {
        index: true,
        element: <ComponentIndex />,
        state: "components.index",
      },
      {
        path: "/components/alertPage",
        element: <AlertPage />,
        state: "components.alertPage",
        sidebarProps: {
          displayText: "AlertPage",
        }
      },
      {
        path: "/components/buttonPage",
        element: <ButtonPage />,
        state: "components.buttonPage",
        sidebarProps: {
          displayText: "ButtonPage",
        }
      },
    ],
  },
  {
    path: "/documentation",
    element: <DocumentationPage />,
    state: "documentation",
    sidebarProps: {
      displayText: "Documentation",
      icon: <ArticleOutlinedIcon />
    }
  },
  {
    path: "/changelog",
    element: <ChangelogPage />,
    state: "changelog",
    sidebarProps: {
      displayText: "Changelog",
      icon: <ListOutlinedIcon />
    }
  }
]

export default appRoutes;